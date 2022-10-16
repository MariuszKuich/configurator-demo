import {CompositionElement} from "./composition-element.model";

export class FullComposition {
  private readonly tree: CompositionElement;
  private readonly decoration: CompositionElement;
  private readonly ornament: CompositionElement;
  private readonly container: CompositionElement;

  constructor(tree: CompositionElement, decoration: CompositionElement, ornament: CompositionElement, container: CompositionElement) {
    this.tree = tree;
    this.decoration = decoration;
    this.ornament = ornament;
    this.container = container;
  }

  public getTree(): CompositionElement {
    return this.tree;
  }

  public getDecoration(): CompositionElement {
    return this.decoration;
  }

  public getOrnament(): CompositionElement {
    return this.ornament;
  }

  public getContainer(): CompositionElement {
    return this.container;
  }
}
