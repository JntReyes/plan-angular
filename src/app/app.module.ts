import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Rutas
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ComponentNameComponent } from './component-name/component-name.component';
import { FooterComponent } from './footer/footer.component';
import { PlanComponent } from './plan/plan.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { ItemshowsComponent } from './pages/itemshows/itemshows.component';
import { ItembodaComponent } from './pages/itemboda/itemboda.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponentNameComponent,
    FooterComponent,
    PlanComponent,
    AboutComponent,
    ItemComponent,
    ItemshowsComponent,
    ItembodaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
