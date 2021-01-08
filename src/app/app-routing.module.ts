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
import { PublicGuard } from './guards/public.guard';
import { PrivateGuard } from './guards/private.guard';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [PublicGuard],
    },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [PublicGuard],
    },
    {
        path: 'schedule',
        component: ScheduleComponent
    },
    {
        path: 'details/:id',
        component: DetailsComponent
    },
    {
        path: 'reservation/:id',
        component: ReservationComponent,
        
    },
    {
        path: 'addMovie',
        component: AddMovieComponent,
        canActivate: [AdminGuard]

    },
    {
        path: 'editMovie/:id',
        component: AddMovieComponent,
        canActivate: [AdminGuard]

    },
    {
        path: 'addRoom',
        component: AddRoomComponent,
        canActivate: [AdminGuard]

    },
    {
        path: 'editRoom/:id',
        component: AddRoomComponent,
        canActivate: [AdminGuard]

    },
    {
        path: 'addScreening',
        component: AddScreeningComponent,
        canActivate: [AdminGuard]

    },
    {
        path: 'editScreening/:id',
        component: AddScreeningComponent,
        canActivate: [AdminGuard]

    },
    {
        path: 'showRooms',
        component: ShowRoomsComponent,
        canActivate: [AdminGuard]

    },
    {
        path: 'showMovies',
        component: ShowMoviesComponent,
        canActivate: [AdminGuard]

    },
    {
        path: 'showScreening',
        component: ShowScreeningComponent,
        canActivate: [AdminGuard]
    },
    {
        path: 'showTickets/:id',
        component: MyTicketsComponent,
        canActivate: [PrivateGuard]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
