import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule,
  MatTabsModule,
  MatSidenavModule,
  MatIconModule,
  MatButtonModule,
  MatListModule,
  MatMenuModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';

// Container for all material modules
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTabsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    MatTabsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class MaterialModule { }
