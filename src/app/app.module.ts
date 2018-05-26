import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';

import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

import { EditFilterComponent } from './components/edit-filter/edit-filter.component';
import { FilterDetailsComponent } from './components/filter-details/filter-details.component';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    EditFilterComponent,
    FilterDetailsComponent
  ],
  imports: [
  	// MatButtonModule,
   //  MatFormFieldModule,
   //  MatInputModule,
   //  MatRippleModule,
    FormsModule,
    AppRoutingModule,
    BrowserModule,
    MaterialModule
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
