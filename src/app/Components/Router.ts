import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
// import { UserListComponent } from './user-list/user-list.component';
import { ADminComponent } from './ADmin/ADmin.component';
import { LoginGuard } from '../Service/login.guard';
import { HeaderComponent } from './header/header.component';
import { HomeHomeComponent } from './home-home/home-home.component';

export const appRouter: Routes = [
 
    
    {
      path: 'user',
      // canActivate: [LoginGuard],
      component: HomeComponent
    },
    {
      path: 'singup',
      component: SignUpComponent
    },
    {
      path: 'Login',
      component: SignInComponent
    },
    {
      path: 'admin',
      component: ADminComponent
    },
    {
      path: 'header',
      component:  HeaderComponent
    },
    {
      path: 'Home',
      component:  HomeHomeComponent
    },
    {
      path: '',
      component: SignInComponent
      // redirectTo: '/Login',
      // pathMatch: 'full'
    },
    {
      path: '**',
      component:  SignInComponent 
    }
    
  ];

  