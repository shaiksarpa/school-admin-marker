import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Constant } from '../constants/constant';
import { StudentUploadResponse } from '../common/StudentUploadResponse';


@Injectable({
  providedIn: 'root'
})
export class FileuploadService {
  constructor(private httpClient: HttpClient) { }

  postFile(fileToUpload: File): Observable<object> {
    const endpoint = Constant.BASE_URL + '/school-admission-service/admission/upload';
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    return this.httpClient.post(endpoint, formData);
  }

  confirmUploadedData(studentUploadedData: StudentUploadResponse[]) {
    const endpoint = Constant.BASE_URL + '/school-admission-service/admission/confirm';
    return this.httpClient.post<StudentUploadResponse>(endpoint, studentUploadedData);
  }

}
