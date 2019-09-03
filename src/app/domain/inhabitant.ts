export class Inhabitant {
  private readonly _name: string;
  private readonly _language: string;
  private readonly _classification: string;
  private readonly _averageHeight: number;
  private readonly _averageLifespan: number;
  private readonly _imageLink: string;

  static inhabitantsImagesId = new Map([
    ['Wookie', 3],
    ['Hutt', 5],
    ['Trandoshan', 7],
    ['Dug', 14],
    ['Toydarian', 13],
    ['Gungan', 12],
    ['Ewok', 9],
    ['Mon Calamari', 8],
    ['Yoda\'s species', 6]
  ]);

  constructor(inhabitantBuilder: InhabitantBuilder) {
    this._name = inhabitantBuilder.name;
    this._language = inhabitantBuilder.language;
    this._classification = inhabitantBuilder.classification;
    this._averageHeight = inhabitantBuilder.averageHeight;
    this._averageLifespan = inhabitantBuilder.averageLifespan;
    this._imageLink = inhabitantBuilder.imageLink;
  }

  get name(): string {
    return this._name;
  }

  get language(): string {
    return this._language;
  }

  get classification(): string {
    return this._classification;
  }

  get averageHeight(): number {
    return this._averageHeight;
  }

  get averageLifespan(): number {
    return this._averageLifespan;
  }

  get imageLink(): string {
    return this._imageLink;
  }

  static getInhabitantsImages() {
    return Inhabitant.inhabitantsImagesId;
  }
}

export class InhabitantBuilder {
  private _name: string;
  private _language: string;
  private _classification: string;
  private _averageHeight: number;
  private _averageLifespan: number;
  private _imageLink: string;

  constructor() {
  }

  setName(value: string) {
    this._name = value;
    return this;
  }

  setLanguage(value: string) {
    this._language = value;
    return this;
  }

  setClassification(value: string) {
    this._classification = value;
    return this;
  }

  setAverageHeight(value: number) {
    this._averageHeight = value;
    return this;
  }

  setAverageLifespan(value: number) {
    this._averageLifespan = value;
    return this;
  }

  setImageLink(value: string) {
    this._imageLink = value;
    return this;
  }

  get name(): string {
    return this._name;
  }

  get language(): string {
    return this._language;
  }

  get classification(): string {
    return this._classification;
  }

  get averageHeight(): number {
    return this._averageHeight;
  }

  get averageLifespan(): number {
    return this._averageLifespan;
  }

  get imageLink(): string {
    return this._imageLink;
  }

  build() {
    return new Inhabitant(this);
  }
}
