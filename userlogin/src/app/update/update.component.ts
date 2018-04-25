import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router'
import 'rxjs/add/operator/toPromise'
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  exist: boolean;
list=[];
id:number;
listData:object={};
listObj:object={};
url="http://localhost:3000/list";
private headers= new Headers({'Content-type':'application/json'})
constructor(private router:Router,private route:ActivatedRoute,private http:Http) { }
updateList(list) {
  this.listObj = {
    "name": list.name,
    "address": list.address,
    "email":list.email
  };
  const url = `${"http://localhost:3000/list"}/${this.id}`;
  this.http.put(url, JSON.stringify(this.listObj), {headers: this.headers})
    .toPromise()
    .then(() => {
      this.router.navigate(['/']);
    })
}
 ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.http.get("http://localhost:3000/list").subscribe(
      (res: Response) => {
        this.list = res.json();
        for(var i = 0; i < this.list.length ; i++) {
          if(parseInt(this.list[i].id) === this.id) {
            this.exist = true;
            this.listData = this.list[i];
            break;
          } else {
            this.exist = false
        }
      }})
  }

}