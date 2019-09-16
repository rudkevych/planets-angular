import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';

import {Planet} from '../domain/planet';
import {Inhabitant} from '../domain/inhabitant';
import {Converter} from '../converter/converter';

@Injectable()
export class UniverseService {
  observablePlanet$: Observable<Planet>;
  private planetSubject: Subject<Planet>;

  observableInhabitants$: Observable<Array<Inhabitant>>;
  private inhabitantsSubject: Subject<Array<Inhabitant>>;

  constructor(private httpClient: HttpClient) {
    this.planetSubject = new Subject<Planet>();
    this.observablePlanet$ = this.planetSubject.asObservable();

    this.inhabitantsSubject = new Subject<Array<Inhabitant>>();
    this.observableInhabitants$ = this.inhabitantsSubject.asObservable();
  }

  loadPlanetInfo(planetName: string) {
    this.getPlanetData(planetName).subscribe((planet: Planet) => {
      this.planetSubject.next(planet);
    });

    this.getInhabitantsData(planetName);
  }

  getPlanetData(planetName): Observable<Planet> {
    const planetId = Planet.getPlanetData().get(planetName).get('planetId');
    const planetImage = `https://starwars-visualguide.com/assets/img/planets/${planetId}.jpg`;
    const apiBase = `https://swapi.co/api/planets/?search=${planetName}`;

    return this.httpClient.get(apiBase)
      .pipe(map(response => {
        return Converter.fromJsonToPlanet(response)
          .setImageLink(planetImage)
          .build();
      }));
  }

  getInhabitantsData(planetName) {
    const inhabitantsNames = Planet.getPlanetData().get(planetName).get('planetInhabitants') as Array<string>;
    const inhabitants = new Array<Inhabitant>();

    for (const inhabitantName of inhabitantsNames) {
      const apiBase = `https://swapi.co/api/species/?search=${inhabitantName}`;
      const inhabitantId = Inhabitant.getInhabitantsImages().get(inhabitantName);
      const inhabitantImage = `https://starwars-visualguide.com/assets/img/species/${inhabitantId}.jpg`;

      const inhabitantObservable = this.httpClient.get(apiBase).pipe(map(response => {
        return Converter.fromJsonToInhabitant(response)
          .setImageLink(inhabitantImage)
          .build();
      }));

      inhabitantObservable.subscribe((inhabitant: Inhabitant) => {
        inhabitants.push(inhabitant);
      });

      this.inhabitantsSubject.next(inhabitants);
    }
  }
}
