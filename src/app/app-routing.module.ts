import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewClassroomComponent } from './features/classroom/pages/new/new.component';
import { ClassroomComponent } from './features/classroom/pages/classroom/classroom.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: "classroom/new", component: NewClassroomComponent },
  { path: "classroom/:id", component: ClassroomComponent },
  { path: "**", redirectTo: "classroom/new" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
