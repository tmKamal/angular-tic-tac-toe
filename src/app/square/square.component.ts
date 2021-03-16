import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <p>
      {{boxValue}}
    </p>
  `,
  styles: [
  ]
})

export class SquareComponent  {
  @Input() boxValue:'X' | 'O';

}
