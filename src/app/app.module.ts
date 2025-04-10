import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './modules/user/components/navbar/navbar.component';
import { HomeComponent } from './modules/user/components/home/home.component';
import { AboutComponent } from './modules/user/components/about/about.component';
import { ContactComponent } from './modules/user/components/contact/contact.component';
import { CentralPageComponent } from './modules/user/pages/central-page/central-page.component';
import { NoPageFoundComponent } from './modules/user/pages/no-page-found/no-page-found.component';
import {UserModule} from "./modules/user/user.module";
import { PanicComponent } from './modules/user/components/panic/panic.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CentralPageComponent,
    NoPageFoundComponent,
    PanicComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        UserModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
