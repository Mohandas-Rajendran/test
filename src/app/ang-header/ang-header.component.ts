import { Component, OnInit } from '@angular/core';
import * as Model from './ang-header.module';
import {AngServiceService} from '../ang-service.service';

interface anglrnModel {
  firstName : string,
  lastName : string
}

@Component({
  selector: 'app-ang-header',
  templateUrl: './ang-header.component.html',
  styleUrls: ['./ang-header.component.css']
})
export class AngHeaderComponent implements OnInit {

  // Variable declaration
  message = '';
  src = false;
  api = false;
  // Object declaration
  anglrn : Model.angular.anglrnModel ={
    firstName : '',
    lastName : ''
  };

  angCourse : Model.angular.angCourseModel[] =[
  {
    name : "W3schools",
    type : "Online"
  },
  {
    name : "Besant",
    type : "Classroom"
  }
  ]

  angData : any [];

  constructor(private angserv:AngServiceService) { }

  ngOnInit() {
  }

  // Functions declaration

  displayValues(){
    if (this.anglrn.firstName.length <=0){
      this.message="Enter First Name";
    } else if(this.anglrn.lastName.length <=0){
      this.message="Enter Last Name";
    } else {
      this.message = this.anglrn.firstName + " " + this.anglrn.lastName;
    }
  }

  displaySources(){
    this.src=true;
  }

  displayAPI(){
    this.angserv.getUserList().subscribe((response:any)=>{
      console.log(response.data);
      this.api = true;
      this.angData = response.data;
    },(error:any)=>{
      console.log(error.data);
    })
  }
}
