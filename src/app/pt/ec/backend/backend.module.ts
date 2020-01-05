import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateschemaComponent } from './generateschema/generateschema.component';
import { CreateentityComponent } from './createentity/createentity.component';

@NgModule({
  declarations: [GenerateschemaComponent, GenerateschemaComponent, CreateentityComponent],
  imports: [
    CommonModule
  ],
  exports : [
    GenerateschemaComponent
  ]
})
export class BackendModule { }
