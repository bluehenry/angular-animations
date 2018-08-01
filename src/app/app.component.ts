import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('myTrigger', [
      state('small', style({
        transform: 'scale(1)'
      })),
      state('large', style({
        transform: 'scale(1.5)'
      })),
      transition('small <=> large', animate('500ms'))
    ])
  ]
})
export class AppComponent {
  state = 'small';

  toggleState() {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }
}
