import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './header/menu/menu.component';
import { DropdownAdminComponent } from './header/dropdown-admin/dropdown-admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MovieCardComponent } from './body/movie-card/movie-card.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TabsComponent } from './body/tabs/tabs.component';
import { SeatCardComponent } from './body/seat-card/seat-card.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProgramComponent } from './pages/program/program.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DetailsComponent } from './pages/details/details.component';
import { ReserveComponent } from './pages/reserve/reserve.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DropdownAdminComponent,
    MovieCardComponent,
    TabsComponent,
    SeatCardComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProgramComponent,
    ContactComponent,
    DetailsComponent,
    ReserveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
