export class CompositionElement {
  private readonly key: string;
  private readonly label: string;

  constructor(key: string, label: string) {
    this.key = key;
    this.label = label;
  }

  public getKey(): string {
    return this.key;
  }

  public getLabel(): string {
    return this.label;
  }
}
