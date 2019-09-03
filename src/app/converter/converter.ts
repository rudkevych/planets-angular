import {PlanetBuilder} from '../domain/planet';
import {InhabitantBuilder} from '../domain/inhabitant';

export class Converter {
  static fromJsonToPlanet(planetJson) {
    const planetObj = planetJson.results[0];
    return new PlanetBuilder()
      .setName(planetObj.name)
      .setPopulation(planetObj.population)
      .setDiameter(planetObj.diameter)
      .setClimate(planetObj.climate)
  }

  static fromJsonToInhabitant(inhabitantJson) {
    const inhabitantObj = inhabitantJson.results[0];
    return new InhabitantBuilder()
      .setName(inhabitantObj.name)
      .setLanguage(inhabitantObj.language)
      .setClassification(inhabitantObj.classification)
      .setAverageHeight(inhabitantObj.average_height)
      .setAverageLifespan(inhabitantObj.average_lifespan)
  }
}
