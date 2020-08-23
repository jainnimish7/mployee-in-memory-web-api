import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoaderComponent } from './loader/loader.component';
import { LoaderService } from './loader/loader.service';
import { CustomSelectComponent } from './select-dropdown/custom-select.component';
import { FormsModule } from '@angular/forms';
const routes: Routes = [];

@NgModule({
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule,
    [RouterModule.forChild(routes)],
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    LoaderComponent,
    CustomSelectComponent,
  ],
  providers: [
    LoaderService
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    CustomSelectComponent,
  ]
})
export class SharedModule { }
