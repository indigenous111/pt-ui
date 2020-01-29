import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateschemaComponent } from './generateschema/generateschema.component';
import { CreateentityComponent } from './createentity/createentity.component';
import { ServicesModule } from '../../../shared/services/services.module';
import { ProjectService } from '../../../shared/services/project.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [GenerateschemaComponent, GenerateschemaComponent, CreateentityComponent],
  imports: [
    CommonModule,
    ServicesModule,
    ReactiveFormsModule
  ],
  exports : [
    GenerateschemaComponent
  ],
  providers: [
    ProjectService
  ]
})
export class BackendModule { }
