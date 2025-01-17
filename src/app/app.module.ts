import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { DropdownAdminComponent } from './shared/dropdown-admin/dropdown-admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MovieCardComponent } from './pages/schedule/movie-card/movie-card.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { FormsModule } from '@angular/forms';

import { SeatCardComponent } from './pages/reservation/seat-card/seat-card.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DetailsComponent } from './pages/details/details.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { AddMovieComponent } from './pages/add-movie/add-movie.component';
import { HttpClientModule } from '@angular/common/http';
import { AddRoomComponent } from './pages/add-room/add-room.component';
import { ShowMoviesComponent } from './pages/show-movies/show-movies.component';
import { ShowRoomsComponent } from './pages/show-rooms/show-rooms.component';
import { MyTicketsComponent } from './pages/my-tickets/my-tickets.component';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ShowScreeningComponent } from './pages/show-screening/show-screening.component';
import { AddScreeningComponent } from './pages/add-screening/add-screening.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DropdownAdminComponent,
    MovieCardComponent,
   
    SeatCardComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ScheduleComponent,
    ContactComponent,
    DetailsComponent,
    ReservationComponent,
    AddMovieComponent,
    AddRoomComponent,
    ShowMoviesComponent,
    ShowRoomsComponent,
    MyTicketsComponent,
    ShowScreeningComponent,
    AddScreeningComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    HttpClientModule,
    FormsModule,
    CarouselModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
