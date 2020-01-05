import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendModule } from './backend/backend.module';
import { ProjectModule } from './project/project.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BackendModule,
    ProjectModule
  ]
})
export class EcModule { }
