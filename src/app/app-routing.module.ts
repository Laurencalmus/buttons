import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ResultsComponent } from './results/results.component';
import { CertsComponent } from './certs/certs.component';


const routes: Routes = [
  { path: 'results', component: ResultsComponent,
  },
  { 
    path: 'certs', 
    component: CertsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
