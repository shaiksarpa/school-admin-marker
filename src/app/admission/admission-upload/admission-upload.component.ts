import { Component, OnInit } from '@angular/core';
import { FileuploadService } from 'src/app/_services/fileupload.service';
import { StudentUploadResponse } from 'src/app/common/StudentUploadResponse';
import { ConfirmationService } from 'primeng/api';
import { Constant } from 'src/app/constants/constant';



@Component({
  selector: 'app-admission-upload',
  templateUrl: './admission-upload.component.html',
  styleUrls: ['./admission-upload.component.scss']
})
export class AdmissionUploadComponent implements OnInit {

  fileToUpload: File = null;
  uploadResponse: StudentUploadResponse[] = [];
  cols: any[];
  constructor(private fileUploadService: FileuploadService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.cols = [
      {field: 'studyingClass', header: 'Studying Class'},
      {field: 'admissionNumber', header: 'Admission Number'},
      {field: 'admittedClass', header: 'Admitted Class'} ,
      {field: 'studentName', header: 'Student Name'},
      {field: 'gender', header: 'Gender'},
      {field: 'dateOfBirth', header: 'DOB'},
      {field: 'fatherName', header: 'Father'},
      {field: 'motherName', header: 'Mother'},
      {field: 'caste', header: 'Caste'},
      {field: 'casteCategory', header: 'Category'}
    ];
  }

  onUpload(event) {
    this.fileToUpload = event.files[0];
  }

  uploadAdmissions(event) {
    this.fileUploadService.postFile(event.files[0]).subscribe((data: StudentUploadResponse[]) => {
      this.uploadResponse = data;
      console.log(this.uploadResponse);
    }, error => {
        console.log(error);
      });
  }

  confirmSave() {
    const endpoint = Constant.BASE_URL + '/school-admission-service/admission/confirm';

    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
          console.log('logic to save');
          this.fileUploadService.confirmUploadedData(this.uploadResponse).subscribe(data => {
            console.log(data);
          });
      }
  });
  }

  confirmCancel() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
          console.log('logic to cancel');
      }
  });
  }
}
