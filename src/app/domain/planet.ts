export class Planet {
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

  private readonly planetName: string;
  private readonly planetPopulation: number;
  private readonly planetClimate: string;
  private readonly planetDiameter: number;

  private readonly planetImageLink: string;

  constructor(planetBuilder: PlanetBuilder) {
    this.planetName = planetBuilder.name;
    this.planetPopulation = planetBuilder.population;
    this.planetClimate = planetBuilder.climate;
    this.planetDiameter = planetBuilder.diameter;
    this.planetImageLink = planetBuilder.imageLink;
  }

  get name(): string {
    return this.planetName;
  }

  get population(): number {
    return this.planetPopulation;
  }

  get climate(): string {
    return this.planetClimate;
  }

  get diameter(): number {
    return this.planetDiameter;
  }

  get imageLink(): string {
    return this.planetImageLink;
  }

  static getPlanetData() {
    return Planet.planetData;
  }
}

export class PlanetBuilder {
  private planetBuilderName: string;
  private planetBuilderPopulation: number;
  private planetBuilderClimate: string;
  private planetBuilderDiameter: number;
  private planetBuilderImageLink: string;

  constructor() {
  }

  setName(value: string) {
    this.planetBuilderName = value;
    return this;
  }

  setPopulation(value: number) {
    this.planetBuilderPopulation = value;
    return this;
  }

  setClimate(value: string) {
    this.planetBuilderClimate = value;
    return this;
  }

  setDiameter(value: number) {
    this.planetBuilderDiameter = value;
    return this;
  }

  setImageLink(value: string) {
    this.planetBuilderImageLink = value;
    return this;
  }

  get name(): string {
    return this.planetBuilderName;
  }

  get population(): number {
    return this.planetBuilderPopulation;
  }

  get climate(): string {
    return this.planetBuilderClimate;
  }

  get diameter(): number {
    return this.planetBuilderDiameter;
  }

  get imageLink(): string {
    return this.planetBuilderImageLink;
  }

  build() {
    return new Planet(this);
  }
}
