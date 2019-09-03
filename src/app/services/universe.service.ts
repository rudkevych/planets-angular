import {Observable, Subject} from 'rxjs';
import {Planet} from '../domain/planet';
import {Inhabitant} from '../domain/inhabitant';
import {Converter} from '../converter/converter';

export class UniverseService {
  observablePlanet$: Observable<Planet>;
  private planetSubject: Subject<Planet>;

  observableInhabitants$: Observable<Array<Inhabitant>>;
  private inhabitantsSubject: Subject<Array<Inhabitant>>;

  constructor() {
    this.planetSubject = new Subject<Planet>();
    this.observablePlanet$ = this.planetSubject.asObservable();

    this.inhabitantsSubject = new Subject<Array<Inhabitant>>();
    this.observableInhabitants$ = this.inhabitantsSubject.asObservable();
  }

  loadPlanetInfo = async (planetName: string) => {
    console.log('start loadPlanetInfo');
    const planetId = Planet.getPlanetData().get(planetName).get('planetId');
    const planetImage = `https://starwars-visualguide.com/assets/img/planets/${planetId}.jpg`;

    const planetJson = await this.getUniverseData('planets', planetName);
    const planet = Converter.fromJsonToPlanet(planetJson)
      .setImageLink(planetImage)
      .build();

    const inhabitantsNames = <Array<string>>Planet.getPlanetData().get(planetName).get('planetInhabitants');
    const inhabitants = await this.loadInhabitantsInfo(inhabitantsNames);

    this.planetSubject.next(planet);
    this.inhabitantsSubject.next(inhabitants);
    console.log('end loadPlanetInfo');
  };

  loadInhabitantsInfo = async (inhabitantsNames) => {
    const inhabitants = new Array<Inhabitant>();
    for (let inhabitantName of inhabitantsNames) {
      const inhabitantId = Inhabitant.getInhabitantsImages().get(inhabitantName);
      const base = `https://starwars-visualguide.com/assets/img/species/${inhabitantId}.jpg`;
      let inhabitantJson = await this.getUniverseData('species', inhabitantName);
      let inhabitant = Converter.fromJsonToInhabitant(inhabitantJson)
        .setImageLink(base)
        .build();
      inhabitants.push(inhabitant);
    }
    return inhabitants;
  };

  getUniverseData = async (category, name) => {
    let _apiBase = `https://swapi.co/api/${category}/?search=${name}`;
    const res = await fetch(_apiBase);

    if (!res.ok) {
      throw new Error(`Could not fetch ${_apiBase}` +
        `, received ${res.status}`);
    }
    return await res.json();
  };

}
