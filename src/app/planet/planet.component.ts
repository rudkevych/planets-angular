import {Component, EventEmitter, Output} from '@angular/core';
import {UniverseService} from '../services/universe.service';
import {Planet} from '../domain/planet';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent {
  private planet: Planet;

  @Output() planetStatusEmitter= new EventEmitter<boolean>();

  constructor(private universeService: UniverseService) {
    universeService.observablePlanet$.subscribe((newPlanet: Planet) => {
      this.planet = newPlanet;
      this.planetStatusEmitter.emit(true)
    });
  }
}
