import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './component/home.component';

const appRoutes: Routes = [
    { 
        path: '',
        component: HomeComponent
        //TODO guard.     
    }
];

export const router = RouterModule.forChild(appRoutes);