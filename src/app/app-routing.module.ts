import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditFilterComponent } from './components/edit-filter/edit-filter.component';
import { FilterDetailsComponent } from './components/filter-details/filter-details.component';
import { AppComponent } from './app.component';

const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'edit', component: EditFilterComponent },
    { path: 'details', component: FilterDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
