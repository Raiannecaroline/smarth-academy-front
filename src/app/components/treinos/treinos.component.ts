import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-treinos',
  templateUrl: './treinos.component.html',
  styleUrls: ['./treinos.component.scss']
})
export class TreinosComponent implements OnInit {

  ngOnInit(): void {
    console.log('TreinosComponent');
  }

  @ViewChild('container', { static: true }) container!: ElementRef;
  private isDragging = false;
  private initialX!: number;
  private currentX!: number;

  constructor(private renderer: Renderer2) {}

  onContainerMouseDown(event: MouseEvent): void {
    this.isDragging = true;
    this.initialX = event.clientX;

    this.renderer.addClass(this.container.nativeElement, 'grabbing');

    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseup', this.onMouseUp);
  }

  onMouseMove = (event: MouseEvent): void => {
    if (this.isDragging) {
      this.currentX = event.clientX;
      const deltaX = this.currentX - this.initialX;
      this.initialX = this.currentX;

      const currentLeft = parseFloat(getComputedStyle(this.container.nativeElement).left);
      this.renderer.setStyle(this.container.nativeElement, 'left', `${currentLeft + deltaX}px`);
    }
  }

  onMouseUp = (): void => {
    this.isDragging = false;
    this.renderer.removeClass(this.container.nativeElement, 'grabbing');

    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.onMouseUp);
  }

}
