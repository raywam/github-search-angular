import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsComponent } from './results.component';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [ResultsComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class ResultsModule { }
