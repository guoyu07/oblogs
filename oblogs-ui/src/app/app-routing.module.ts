import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: '**', component: AppComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes, {enableTracing: true}
    )
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
