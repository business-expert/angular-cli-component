import { RouterModule, Routes } from '@angular/router';

import { AuthGuard, ReverseAuthGuard } from "./login/guard/auth.guard";

const appRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { 
        path: 'login', 
        loadChildren: 'app/login/login-chunk.module#LoginChunkModule',
        canActivate: [ ReverseAuthGuard ], 
        canLoad: [ ReverseAuthGuard ] 
    },
    { 
        path: 'home', 
        loadChildren: 'app/home/home-chunk.module#HomeChunkModule',
        canActivate: [ AuthGuard ],
        canLoad: [ AuthGuard ] 
    }
];

export const router = RouterModule.forRoot(appRoutes);
export const providers = [ AuthGuard, ReverseAuthGuard ];