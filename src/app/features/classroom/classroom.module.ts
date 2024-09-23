import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewClassroomComponent } from './pages/new/new.component';
import { ClassroomComponent } from './pages/classroom/classroom.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { SystemDesignModule } from "../../system-design/system-design.module";
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NewPlayerComponent } from './pages/classroom/components/new-player/new-player.component';
import { PokerTableComponent } from './pages/classroom/components/poker-table/poker-table.component';


@NgModule({
  declarations: [
    NewClassroomComponent,
    ClassroomComponent,
    NewPlayerComponent,
    PokerTableComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SystemDesignModule,
    ReactiveFormsModule,
    HttpClientModule

],
  exports: [
    NewClassroomComponent
  ]
})
export class ClassroomModule { }
