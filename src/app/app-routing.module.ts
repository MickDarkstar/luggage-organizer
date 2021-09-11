import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SettingsComponent } from './components/settings/settings.component';
import { CommonModule } from '@angular/common';
import { RulesComponent } from './components/rules/rules.component';
import { ItemsComponent } from './components/items/items.component';
import { PersonsComponent } from './components/persons/persons.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'persons', component: PersonsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
