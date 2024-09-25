import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ClassroomModule } from './features/classroom/classroom.module';
import { SystemDesignModule } from './system-design/system-design.module';
import { NgxSonnerToaster } from 'ngx-sonner';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    ClassroomModule,
    SystemDesignModule,
    NgxSonnerToaster
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
