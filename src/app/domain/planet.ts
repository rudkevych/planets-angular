export class Planet {
  private readonly _name: string;
  private readonly _population: number;
  private readonly _climate: string;
  private readonly _diameter: number;
  private readonly _imageLink: string;

  static planetData = new Map([
    ['Naboo', new Map<string, Array<string>|number>([
      ['planetInhabitants', ['Wookie', 'Hutt', 'Trandoshan']],
      ['planetId', 8]
    ])],
    ['Alderaan', new Map<string, Array<string>|number>([
      ['planetInhabitants', ['Dug', 'Toydarian', 'Gungan']],
      ['planetId', 2]
    ])],
    ['Tatooine', new Map<string, Array<string>|number>([
      ['planetInhabitants', ['Ewok', 'Mon Calamari', 'Yoda\'s species']],
      ['planetId', 11]
    ])]
  ]);

  constructor(planetBuilder: PlanetBuilder) {
    this._name = planetBuilder.name;
    this._population = planetBuilder.population;
    this._climate = planetBuilder.climate;
    this._diameter = planetBuilder.diameter;
    this._imageLink = planetBuilder.imageLink;
  }

  get name(): string {
    return this._name;
  }

  get population(): number {
    return this._population;
  }

  get climate(): string {
    return this._climate;
  }

  get diameter(): number {
    return this._diameter;
  }

  get imageLink(): string {
    return this._imageLink;
  }

  static getPlanetData() {
    return Planet.planetData;
  }
}

export class PlanetBuilder {
  private _name: string;
  private _population: number;
  private _climate: string;
  private _diameter: number;
  private _imageLink: string;

  constructor() {
  }

  setName(value: string) {
    this._name = value;
    return this;
  }

  setPopulation(value: number) {
    this._population = value;
    return this;
  }

  setClimate(value: string) {
    this._climate = value;
    return this;
  }

  setDiameter(value: number) {
    this._diameter = value;
    return this;
  }

  setImageLink(value: string) {
    this._imageLink = value;
    return this;
  }

  get name(): string {
    return this._name;
  }

  get population(): number {
    return this._population;
  }

  get climate(): string {
    return this._climate;
  }

  get diameter(): number {
    return this._diameter;
  }

  get imageLink(): string {
    return this._imageLink;
  }

  build() {
    return new Planet(this);
  }
}
