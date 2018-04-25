
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {RouterModule} from '@angular/router'
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http'


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { UserComponent } from './user/user.component';
import { UpdateComponent } from './update/update.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainpageComponent,
    UserComponent,
    UpdateComponent,
 
 
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,FormsModule,HttpModule, RouterModule.forRoot([


{
  path:"footer",
  component:FooterComponent
},
{
  path:"header",
  component:HeaderComponent
},
{
  path:"mainpage",
  component:MainpageComponent
},
{
  path:"user",
  component:UserComponent
},
{
  path:"update/:id",
  component:UpdateComponent

}
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
