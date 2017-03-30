import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './modules/base/components/login/login.component';
import { HomeComponent } from './modules/home/components/home/home.component';
import { AuthGuard } from './routing_guards/auth.guard';


const appRoutes: Routes = [

  { path: '', pathMatch: 'full', component: HomeComponent, canActivate:[AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate:[AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'not-found' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
