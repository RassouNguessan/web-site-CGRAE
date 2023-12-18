import {Routes} from "@angular/router";
import LoginLayoutComponent from "./core/login-layout/login-layout.component";

//AKA
const routes: Routes = [
  {
    path: '', component: LoginLayoutComponent,
    providers: [],
    children: [
      {
        path: 'connexion',
        canActivate: [],
        loadComponent: () => import('./page/connexion/connexion.component')
      },
      {
        path: 'connexion/otp',
        canActivate: [],
        loadComponent: () => import('./page/connexion-otp/connexion-otp.component')
      },
    ]
  }
]

export default routes
