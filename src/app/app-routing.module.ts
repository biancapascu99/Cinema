import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AddMovieComponent } from './pages/add-movie/add-movie.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DetailsComponent } from './pages/details/details.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { RegisterComponent } from './pages/register/register.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { AddRoomComponent } from './pages/add-room/add-room.component';
import { ShowRoomsComponent } from './pages/show-rooms/show-rooms.component';
import { ShowMoviesComponent } from './pages/show-movies/show-movies.component';
import { MyTicketsComponent } from './pages/my-tickets/my-tickets.component';
import { ShowScreeningComponent } from './pages/show-screening/show-screening.component';
import { AddScreeningComponent } from './pages/add-screening/add-screening.component';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'schedule',
        component: ScheduleComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'details/:id',
        component: DetailsComponent
    },
    {
        path: 'reservation/:id',
        component: ReservationComponent
    },
    {
        path: 'addMovie',
        component: AddMovieComponent
    },
    {
        path: 'addRoom',
        component: AddRoomComponent
    },
    {
        path: 'addScreening',
        component: AddScreeningComponent
    },
    {
        path: 'showRooms',
        component: ShowRoomsComponent
    },
    {
        path: 'showMovies',
        component: ShowMoviesComponent
    },
    {
        path: 'showScreening',
        component: ShowScreeningComponent
    },
    {
        path: 'showTickets',
        component: MyTicketsComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
