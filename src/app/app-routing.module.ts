import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EventsListComponent } from './page/events-list/events-list.component';
import { HomeComponent } from './page/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'events', component: EventsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
