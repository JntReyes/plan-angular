import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { PlanComponent } from './plan/plan.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { ItemshowsComponent } from './pages/itemshows/itemshows.component';
import { ItembodaComponent } from './pages/itemboda/itemboda.component';



const app_routes: Routes = [
{ path: 'home', component: PlanComponent },
{ path: 'about', component: AboutComponent },
{ path: 'item', component: ItemComponent },
{ path: 'itemshows', component: ItemshowsComponent },
{ path: 'itemboda', component: ItembodaComponent },
{ path: '**', pathMatch: 'full', redirectTo: 'home' }
];




@NgModule({
  imports: [
    RouterModule.forRoot( app_routes, {useHash: true})
  ],
  exports:[
    RouterModule
  ]

})

export class AppRoutingModule{

}
