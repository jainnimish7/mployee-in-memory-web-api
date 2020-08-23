import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Component
import { EmployeeListComponent } from './employee-list.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

// Material Modules
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: '', component: EmployeeListComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatButtonModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    [RouterModule.forChild(routes)],
  ],
  declarations: [
    EmployeeListComponent,
    ConfirmDialogComponent
  ]
})
export class EmployeeModule { }
