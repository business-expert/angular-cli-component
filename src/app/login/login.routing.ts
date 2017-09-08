import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './component/login.component';

const appRoutes: Routes = [
    { 
        path: '',
        component: LoginComponent
        //TODO guard.     
    }
];

export const router = RouterModule.forChild(appRoutes);