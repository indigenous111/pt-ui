import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenerateschemaComponent } from './pt/ec/backend/generateschema/generateschema.component';
import { CreateentityComponent } from './pt/ec/backend/createentity/createentity.component';

const routes: Routes = [
   {path: "ec/backend/hero/schema/gen", component: GenerateschemaComponent},
   {path: "ec/backend/hero/entity/gen", component: CreateentityComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
