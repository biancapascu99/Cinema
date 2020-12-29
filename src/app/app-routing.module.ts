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
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
