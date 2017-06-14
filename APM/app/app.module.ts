import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router"
import {ProductModuel} from "./products/product.moduel"
import { AppComponent }  from './app.component';
import {WelcomeComponent} from "./home/welcome.component"
@NgModule({
  imports: [ 
    BrowserModule, 
    HttpModule, 
    ProductModuel,
    RouterModule.forRoot([
      {path:"welcome", component:WelcomeComponent},
      {path:"", redirectTo:"welcome", pathMatch:"full" },
      {path:"**",redirectTo:"welcome",pathMatch:"full"}
    ])],
  declarations: [ AppComponent, WelcomeComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
