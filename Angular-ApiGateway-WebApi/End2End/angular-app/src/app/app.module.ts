import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddOwnerComponent } from './Components/add-owner/add-owner.component';
import { EditOwnerComponent } from './Components/edit-owner/edit-owner.component';
import { DisplayAllComponent } from './Components/display-all/display-all.component';
import { provideHttpClient } from '@angular/common/http';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { CommonModule } from '@angular/common';
import { NavPageComponent } from './Components/nav-page/nav-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddOwnerComponent,
    EditOwnerComponent,
    DisplayAllComponent,
    NotFoundComponent,
    NavPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule

  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
