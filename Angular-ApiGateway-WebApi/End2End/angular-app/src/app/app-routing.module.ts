import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayAllComponent } from './Components/display-all/display-all.component';
import { EditOwnerComponent } from './Components/edit-owner/edit-owner.component';
import { AddOwnerComponent } from './Components/add-owner/add-owner.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';

const routes: Routes = [
  {path: '', component: DisplayAllComponent},
  {path: 'view/:id', component: EditOwnerComponent},
  {path: 'addOwner', component: AddOwnerComponent},
  {path: '**', component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
