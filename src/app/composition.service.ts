import {Injectable} from "@angular/core";
import {CompositionElement} from "./composition-element.model";
import {Subject} from "rxjs";
import {FullComposition} from "./full-composition.model";

@Injectable({
  providedIn: 'root'
})
export class CompositionService {
  private static readonly GRAPHICS_FOLDER = 'assets/graphics/';
  private static readonly EMPTY_ELEMENT = new CompositionElement('', 'Brak');
  private static readonly TREE_ELEMENTS = [
    new CompositionElement('d1', 'Cyprys domowy'),
    new CompositionElement('d2', 'Hoya Kerrii')
  ]
  private static readonly DECORATION_ELEMENTS = [
    CompositionService.EMPTY_ELEMENT,
    new CompositionElement('d1', 'Gwiazdki'),
    new CompositionElement('d2', 'Bombki')
  ];
  private static readonly ORNAMENT_ELEMENTS = [
    CompositionService.EMPTY_ELEMENT,
    new CompositionElement('o1', 'Wata ozdobna'),
    new CompositionElement('o2', 'Gwiazdki pięcioramienne')
  ];
  private static readonly CONTAINER_ELEMENTS = [
    new CompositionElement('p1', 'Doniczka brązowa'),
    new CompositionElement('p2', 'Doniczka różnokolorowa'),
    new CompositionElement('p3', 'Doniczka złota z gwiazdą'),
  ];

  compositionPicEmitter = new Subject<string>();

  private treesIdx = 0;
  private decorationsIdx = 0;
  private ornamentsIdx = 0;
  private containersIdx = 0;

  public getDefaultComposition(): FullComposition {
    const fullComposition = new FullComposition(
      CompositionService.TREE_ELEMENTS[0],
      CompositionService.DECORATION_ELEMENTS[0],
      CompositionService.ORNAMENT_ELEMENTS[0],
      CompositionService.CONTAINER_ELEMENTS[0]
    );
    this.emitCompositionPic();
    return fullComposition;
  }

  public getNextTreeElementLabel(): string {
    this.treesIdx = this.getNextIndexValue(CompositionService.TREE_ELEMENTS, this.treesIdx);
    this.emitCompositionPic();
    return CompositionService.TREE_ELEMENTS[this.treesIdx].getLabel();
  }

  public getPreviousTreeElementLabel(): string {
    this.treesIdx = this.getPreviousIndexValue(CompositionService.TREE_ELEMENTS, this.treesIdx);
    this.emitCompositionPic();
    return CompositionService.TREE_ELEMENTS[this.treesIdx].getLabel();
  }

  public getNextDecorationElementLabel(): string {
    this.decorationsIdx = this.getNextIndexValue(CompositionService.DECORATION_ELEMENTS, this.decorationsIdx);
    this.emitCompositionPic();
    return CompositionService.DECORATION_ELEMENTS[this.decorationsIdx].getLabel();
  }

  public getPreviousDecorationElementLabel(): string {
    this.decorationsIdx = this.getPreviousIndexValue(CompositionService.DECORATION_ELEMENTS, this.decorationsIdx);
    this.emitCompositionPic();
    return CompositionService.DECORATION_ELEMENTS[this.decorationsIdx].getLabel();
  }

  public getNextOrnamentElementLabel(): string {
    this.ornamentsIdx = this.getNextIndexValue(CompositionService.ORNAMENT_ELEMENTS, this.ornamentsIdx);
    this.emitCompositionPic();
    return CompositionService.ORNAMENT_ELEMENTS[this.ornamentsIdx].getLabel();
  }

  public getPreviousOrnamentElementLabel(): string {
    this.ornamentsIdx = this.getPreviousIndexValue(CompositionService.ORNAMENT_ELEMENTS, this.ornamentsIdx);
    this.emitCompositionPic();
    return CompositionService.ORNAMENT_ELEMENTS[this.ornamentsIdx].getLabel();
  }

  public getNextContainerElementLabel(): string {
    this.containersIdx = this.getNextIndexValue(CompositionService.CONTAINER_ELEMENTS, this.containersIdx);
    this.emitCompositionPic();
    return CompositionService.CONTAINER_ELEMENTS[this.containersIdx].getLabel();
  }

  public getPreviousContainerElementLabel(): string {
    this.containersIdx = this.getPreviousIndexValue(CompositionService.CONTAINER_ELEMENTS, this.containersIdx);
    this.emitCompositionPic();
    return CompositionService.CONTAINER_ELEMENTS[this.containersIdx].getLabel();
  }

  private getNextIndexValue(elements: Array<CompositionElement>, index: number): number {
    index = index + 1;
    if (index > elements.length - 1) {
      return 0;
    }
    return index;
  }

  private getPreviousIndexValue(elements: Array<CompositionElement>, index: number): number {
    index = index - 1;
    if (index < 0) {
      return elements.length - 1;
    }
    return index;
  }

  private emitCompositionPic(): void {
    const treeKey = CompositionService.TREE_ELEMENTS[this.treesIdx].getKey();
    const decorationKey = CompositionService.DECORATION_ELEMENTS[this.decorationsIdx].getKey();
    const ornamentKey = CompositionService.ORNAMENT_ELEMENTS[this.ornamentsIdx].getKey();
    const containerKey = CompositionService.CONTAINER_ELEMENTS[this.containersIdx].getKey();

    const filename = treeKey + '-' + decorationKey + '-' + ornamentKey + '-' + containerKey + '.png';

    this.compositionPicEmitter.next(CompositionService.GRAPHICS_FOLDER + filename);
  }
}
