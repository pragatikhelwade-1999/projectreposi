import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './login/auth.guard';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { CardpageComponent } from './pages/cardpage/cardpage.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MenupageComponent } from './pages/menupage/menupage.component';
import { RegistrationComponent } from './registration/registration.component';
import { SidenavComponent } from './sidenav/sidenav.component';

const routes: Routes = [
  { path:'',component:HomeComponent },
  { path:'menu',component:MenuComponent },
  { path:'menu/:id',component:MenupageComponent},
  { path:'about',component:AboutComponent },
  { path:'contact',component:ContactComponent },
  { path:'login',component:LoginComponent },
  { path:'register',component:RegistrationComponent},
  { path:'cardpage',component:CardpageComponent},
  { path:'feedback',component:FeedbackComponent},
  { path:'admin', canActivate:[AuthGuard], component:AdminComponent},
  {path:'sidenav/:id',component:SidenavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
