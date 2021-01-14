import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from '../interfaces/User';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api = environment.resume_url;

  constructor(private https: HttpClient) { }

  login(d: any) {
    return this.https.post(this.api + 'auth/login', d, {observe: 'body'})
    .pipe(catchError(this.handleError));
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error  instanceof ErrorEvent) {
      // client error
      console.error(`Client not connected to a network, Code: ${error.status}`)
    } else {
      // console.error(`Server Returned: ${error.status}. Dev Message: ${error.message}`);
      // // this.someMessages();
      // alert('Internal Server Error')
      switch (error.status) {
        case 400:
          console.error(`Server Returned: ${error.status}. Dev Message: ${error.message}`);
          alert('There was an error in processing your request');
          break;
        case 500:
          console.error(`Server Returned: ${error.status}. Dev Message: ${error.message}`);
          alert('Lost connection to the Server');
          break;

        // todo:: add other error status codes  
        default:
          console.error(`Server Returned: ${error.status}. Dev Message: ${error.message}`);
          alert('Cannot process your request at this time');
          break;
      }
    }

    return throwError('Could not process request at this time')
  }

  someMessages() {
    alert('Internal Server Error');
  }
}
