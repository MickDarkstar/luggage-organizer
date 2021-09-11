import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './navigation/header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { HomeComponent } from './components/home/home.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SettingsComponent } from './components/settings/settings.component';
import { EditPersonComponent } from './components/persons/edit-person/edit-person.component';
import { EditItemComponent } from './components/items/edit-item/edit-item.component';
import { EditRulesComponent } from './components/rules/edit-rules/edit-rules.component';
import { RulesComponent } from './components/rules/rules.component';
import { PersonsComponent } from './components/persons/persons.component';
import { ItemsComponent } from './components/items/items.component';
import { MatFormFieldModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavListComponent,
    HomeComponent,
    SettingsComponent,
    EditPersonComponent,
    EditItemComponent,
    EditRulesComponent,
    RulesComponent,
    PersonsComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    DragDropModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
