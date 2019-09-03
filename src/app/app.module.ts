import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UniverseComponent} from './universe/universe.component';
import {PlanetComponent} from './planet/planet.component';
import {PlanetListComponent} from './planet-list/planet-list.component';
import {InhabitantsComponent} from './inhabitants/inhabitants.component';
import {InhabitantComponent} from './inhabitant/inhabitant.component';
import {UniverseService} from './services/universe.service';
import { GreetingComponent } from './greeting/greeting.component';

@NgModule({
  declarations: [
    AppComponent,
    UniverseComponent,
    PlanetComponent,
    PlanetListComponent,
    InhabitantsComponent,
    InhabitantComponent,
    GreetingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UniverseService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
