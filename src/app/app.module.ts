import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { NgxSpinnerModule } from 'ngx-spinner';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialDesignModule } from './models/MaterialDesign.module';
import { InterceptorhttpService } from './services/interceptorhttp.service';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent, LoginComponent, FooterComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, BrowserAnimationsModule, MaterialDesignModule, HttpClientModule, 
    ReactiveFormsModule, FormsModule, NgxSpinnerModule, FlexLayoutModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorhttpService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
