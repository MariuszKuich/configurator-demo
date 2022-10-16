import {Component, OnDestroy, OnInit} from '@angular/core';
import {CompositionService} from "./composition.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  compositionPic = '';
  treeLabel = '';
  decorationLabel = '';
  ornamentLabel = '';
  containerLabel = '';

  compositionPicSubscription: Subscription;

  constructor(private compositionService: CompositionService) {
    this.compositionPicSubscription = this.compositionService.compositionPicEmitter.subscribe(compositionPic => {
      this.compositionPic = compositionPic;
    });
  }

  ngOnInit() {
    const defaultComposition = this.compositionService.getDefaultComposition();

    this.treeLabel = defaultComposition.getTree().getLabel();
    this.decorationLabel = defaultComposition.getDecoration().getLabel();
    this.ornamentLabel = defaultComposition.getOrnament().getLabel();
    this.containerLabel = defaultComposition.getContainer().getLabel();
  }

  ngOnDestroy() {
    this.compositionPicSubscription.unsubscribe();
  }

  onNextTree(): void {
    this.treeLabel = this.compositionService.getNextTreeElementLabel();
  }

  onPreviousTree(): void {
    this.treeLabel = this.compositionService.getPreviousTreeElementLabel();
  }

  onNextDecoration(): void {
    this.decorationLabel = this.compositionService.getNextDecorationElementLabel();
  }

  onPreviousDecoration(): void {
    this.decorationLabel = this.compositionService.getPreviousDecorationElementLabel();
  }

  onNextOrnament(): void {
    this.ornamentLabel = this.compositionService.getNextOrnamentElementLabel();
  }

  onPreviousOrnament(): void {
    this.ornamentLabel = this.compositionService.getPreviousOrnamentElementLabel();
  }

  onNextContainer(): void {
    this.containerLabel = this.compositionService.getNextContainerElementLabel();
  }

  onPreviousContainer(): void {
    this.containerLabel = this.compositionService.getPreviousContainerElementLabel();
  }
}
