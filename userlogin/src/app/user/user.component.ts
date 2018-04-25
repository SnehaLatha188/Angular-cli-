import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router'
import 'rxjs/add/operator/toPromise'
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  errorMessage: any;
  handleError(arg0: any): any {
    throw new Error("Method not implemented.");
  }
  constructor(private http: Http) { }
  confirmationString:string = "New product has been added";
  isAdded: boolean = false;
  listObj:object = {};

  addList = function(list) {
    this.listObj = {
      "name":list.name,
      "address": list.address,
      "email":list.email
    }
    this.http.post("http://localhost:3000/list/", this.listObj).subscribe((res:Response) => {
      this.isAdded = true;
      console.log(list)
    })
  }
 
 
  ngOnInit(){
    
 
}
}
