
import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  [x: string]: any;
  router: any;
 constructor(private http:Http) { }
  id:number;
  listObject={};
  listData={};
  errorMessage: any;
  exist=false;
  url="http://localhost:3000/list";
  private headers= new Headers({'Content-type':'application/json'})
  list=[];
  getData=function(){
    this.http.get(this.url).subscribe(
      (res:Response)=>{
        this.list=res.json()})
  }
  deleteList(id){
    var ans = confirm("Do you want to delete customer with Id: " + id);
    if(ans){
      return this.http.delete(this.url + "/" + id)
       .subscribe(  data=> {
         var index = this.list.findIndex(x=>x.id == id);
         this.list.splice(index, 1);
       }, error=> this.errorMessage = error )
    }
 }  


 ngOnInit() {
this.getData();

  }
}
