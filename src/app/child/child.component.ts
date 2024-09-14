import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() i: number = 0;
  @Input() onSwap?: any;

  drag = -1;
  dragOver = -1;

  onDrag(i: number) {
    this.drag = i;
  }

  onDragOver = (i: number) => {
    this.dragOver = i;
  };
    
  onDragEnd = (e: any) => {
    e.preventDefault();
    this.onSwap(this.drag, this.dragOver);
    this.drag = -1;
    this.dragOver = -1;
  };

  onDrop = (e: any) => {
    console.log(';;;;;');
    e.preventDefault();
  };
}
