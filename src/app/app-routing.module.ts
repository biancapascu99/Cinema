import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { ContactComponent } from './pages/contact/contact.component';
import { DetailsComponent } from './pages/details/details.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProgramComponent } from './pages/program/program.component';
import { RegisterComponent } from './pages/register/register.component';
import { ReserveComponent } from './pages/reserve/reserve.component';


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
        path: 'program',
        component: ProgramComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'details',
        component: DetailsComponent
    },
    {
        path: 'reserve',
        component: ReserveComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
