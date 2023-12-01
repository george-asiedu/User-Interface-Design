import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AddPhotoComponent } from './add-photo/add-photo.component';
import { InterestComponent } from './interest/interest.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Register Page',
        component: RegisterComponent
    },
    {
        path: 'login',
        title: 'Login Page',
        component: LoginComponent
    },
    {
        path: 'add-photo',
        title: 'Add Photo Page',
        component: AddPhotoComponent
    },
    {
        path: 'interest',
        title: 'Interest Page',
        component: InterestComponent
    }
];
