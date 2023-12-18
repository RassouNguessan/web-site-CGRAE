import {Routes} from "@angular/router";
import MainLayoutComponent from "./core/main-layout/main-layout.component";

//AKA
const routes: Routes = [
  {
    path: '', component: MainLayoutComponent,
    providers: [],
    children: [
      {
        path: 'home',
        canActivate: [],
        loadComponent: () => import('./page/home/home.component')
      },
      {
        path: 'home/space',
        canActivate: [],
        loadComponent: () => import('./page/space/space.component')
      },
    ]
  }
]

export default routes
