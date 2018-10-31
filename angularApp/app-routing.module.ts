import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { ConferencesComponent } from './conferences/conferences.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConferenceDetailComponent } from './conference-detail/conference-detail.component';

const routes: Routes = [
  { path: 'detail/:id', component: ConferenceDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'conferences', component: ConferencesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
 export class AppRoutingModule {}

