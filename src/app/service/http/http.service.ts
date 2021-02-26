import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class HttpHelperService {
  private headers: any;

  constructor(private http: HttpClient) {}

  // Return the header object
  private static getOptionsHeaders() {
    return {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
  }

  // Handle an http error
  private static handleError(err: any, reject: any) {
    const status = err.status;
    if (status === 0)
      return reject({ code: status, message: "Connection Refused" });
    else if (status === 500)
      return reject({
        code: status,
        message:
          err.error != null
            ? err.error
            : "Se presentó un error realizando la petición"
      });
    else return reject({ code: status, message: err.error });
  }

  // Makes and solves a GET request
  getRequest(endpoint: string, resolve: any, reject: any, parameters?: any) {
    this.headers = HttpHelperService.getOptionsHeaders();
    this.http
      .get(
        endpoint,
        parameters === undefined
          ? this.headers
          : { headers: this.headers, params: parameters }
      )
      .subscribe(
        (res: any) => {
          resolve(res);
        },
        err => {
          return HttpHelperService.handleError(err, reject);
        }
      );
  }

  // Makes and solves a POST request
  postRequest(endpoint: string, requestBody: any, resolve: any, reject: any) {
    this.http.post(endpoint, requestBody).subscribe(
      (res: any) => {
        resolve(res);
      },
      err => {
        return HttpHelperService.handleError(err, reject);
      }
    );
  }

  putRequest(endpoint: string, requestBody: any, resolve: any, reject: any) {
    this.http.put(endpoint, requestBody).subscribe(
      (res: any) => {
        resolve(res);
      },
      err => {
        return HttpHelperService.handleError(err, reject);
      }
    );
  }

  deleteRequest(endpoint: string, resolve: any, reject: any, parameters?: any) {
    this.headers = HttpHelperService.getOptionsHeaders();
    this.http
      .delete(
        endpoint,
        parameters === undefined
          ? this.headers
          : { headers: this.headers, params: parameters }
      )
      .subscribe(
        (res: any) => {
          resolve(res);
        },
        err => {
          return HttpHelperService.handleError(err, reject);
        }
      );
  }
}
