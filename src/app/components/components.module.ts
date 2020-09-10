import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardRepositoryComponent } from './card-repository/card-repository.component';
import { CardUserComponent } from './card-user/card-user.component';
import { InputSearchComponent } from './input-search/input-search.component';
import { LogoAppComponent } from './logo-app/logo-app.component';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CardRepositoryComponent,
    CardUserComponent,
    InputSearchComponent,
    LogoAppComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    CardRepositoryComponent,
    CardUserComponent,
    InputSearchComponent,
    LogoAppComponent
  ]
})
export class ComponentsModule { }
