export class Inhabitant {
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

  private readonly inhName: string;
  private readonly inhLanguage: string;
  private readonly inhClassification: string;
  private readonly inhAverageHeight: number;
  private readonly inhAverageLifespan: number;

  private readonly inhImageLink: string;

  constructor(inhabitantBuilder: InhabitantBuilder) {
    this.inhName = inhabitantBuilder.name;
    this.inhLanguage = inhabitantBuilder.language;
    this.inhClassification = inhabitantBuilder.classification;
    this.inhAverageHeight = inhabitantBuilder.averageHeight;
    this.inhAverageLifespan = inhabitantBuilder.averageLifespan;
    this.inhImageLink = inhabitantBuilder.imageLink;
  }

  get name(): string {
    return this.inhName;
  }

  get language(): string {
    return this.inhLanguage;
  }

  get classification(): string {
    return this.inhClassification;
  }

  get averageHeight(): number {
    return this.inhAverageHeight;
  }

  get averageLifespan(): number {
    return this.inhAverageLifespan;
  }

  get imageLink(): string {
    return this.inhImageLink;
  }

  static getInhabitantsImages() {
    return Inhabitant.inhabitantsImagesId;
  }
}

export class InhabitantBuilder {
  private inhabitantBuilderName: string;
  private inhabitantBuilderLanguage: string;
  private inhabitantBuilderClassification: string;
  private inhabitantBuilderAverageHeight: number;
  private inhabitantBuilderAverageLifespan: number;
  private inhabitantBuilderImageLink: string;

  constructor() {
  }

  setName(value: string) {
    this.inhabitantBuilderName = value;
    return this;
  }

  setLanguage(value: string) {
    this.inhabitantBuilderLanguage = value;
    return this;
  }

  setClassification(value: string) {
    this.inhabitantBuilderClassification = value;
    return this;
  }

  setAverageHeight(value: number) {
    this.inhabitantBuilderAverageHeight = value;
    return this;
  }

  setAverageLifespan(value: number) {
    this.inhabitantBuilderAverageLifespan = value;
    return this;
  }

  setImageLink(value: string) {
    this.inhabitantBuilderImageLink = value;
    return this;
  }

  get name(): string {
    return this.inhabitantBuilderName;
  }

  get language(): string {
    return this.inhabitantBuilderLanguage;
  }

  get classification(): string {
    return this.inhabitantBuilderClassification;
  }

  get averageHeight(): number {
    return this.inhabitantBuilderAverageHeight;
  }

  get averageLifespan(): number {
    return this.inhabitantBuilderAverageLifespan;
  }

  get imageLink(): string {
    return this.inhabitantBuilderImageLink;
  }

  build() {
    return new Inhabitant(this);
  }
}
