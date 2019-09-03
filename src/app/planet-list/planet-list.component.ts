import {Component} from '@angular/core';
import {UniverseService} from '../services/universe.service';
import {Planet} from '../domain/planet';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent {
  planetNames: Array<string>;

  constructor(private universeService: UniverseService) {
    this.planetNames = Array.from(Planet.getPlanetData().keys());
  }

  loadPlanet(planetName) {
    this.universeService.loadPlanetInfo(planetName);
  }
}
