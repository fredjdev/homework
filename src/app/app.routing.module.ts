import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsscreenComponent } from './components/detailsscreen/detailsscreen.component';
import { ListscreenComponent } from './components/listscreen/listscreen.component';


const routes: Routes = [
    {
      path: '',
      redirectTo: 'list',
      pathMatch: 'full'
    },
    {
      path: 'list',
      component: ListscreenComponent,
    },
    {
      path: 'details/:id',
      component: DetailsscreenComponent,
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }