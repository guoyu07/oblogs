import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WorkLoginComponent } from './work-login/work-login.component';
import { WorkLoginLeftComponent } from './work-login-left/work-login-left.component';
import { WorkLoginBottomComponent } from './work-login-bottom/work-login-bottom.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkLoginComponent,
    WorkLoginLeftComponent,
    WorkLoginBottomComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
