import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { CustomMaterialModule } from "./material.module";
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
