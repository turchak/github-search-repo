import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatChipsModule,
  MatIconModule
} from '@angular/material';


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
    NgxPaginationModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatListModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule
  ],
  providers: [DataService, HttpModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
