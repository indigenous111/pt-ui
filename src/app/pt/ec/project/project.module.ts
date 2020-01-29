import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectService } from '../../../shared/services/project.service';
import { ServicesModule } from '../../../shared/services/services.module';
import { ModelsModule } from '../../../shared/models/models.module';

@NgModule({
  declarations: [CreateComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ServicesModule,
    ModelsModule
  ],
  providers: [
    ProjectService
  ]
})
export class ProjectModule { }
