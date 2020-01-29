import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenerateschemaComponent } from './pt/ec/backend/generateschema/generateschema.component';
import { CreateentityComponent } from './pt/ec/backend/createentity/createentity.component';
import { CreateComponent } from './pt/ec/project/create/create.component';

const routes: Routes = [
   {path: "ec/backend/project/manage", component: CreateComponent},
   {path: "ec/backend/schema/gen", component: GenerateschemaComponent},
   {path: "ec/backend/entity/gen", component: CreateentityComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
