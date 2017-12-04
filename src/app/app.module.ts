import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


import { AppComponent } from './app.component';
import { RepoComponent } from './components/repo/repo.component';

import { DataService } from './services/data.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    RepoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [DataService, HttpModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
