import { Component, Input  } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('focusPanel', [
      state('inactive', style({
        transform: 'scale(1)'
      })), // end of state
      state('active', style({
        transform: 'scale(1.04)'
      })), // end of state
      transition('inactive => active', animate('500ms ease-in')),
      transition('active => inactive', animate('500ms ease-out')),
    ]),  // end of trigger
    trigger('note', [
      state('inactive', style({
        opacity: '0'
      })), // end of state
      state('active', style({
        opacity: '1'
      })), // end of state
      transition('inactive => active', [
        animate(300, keyframes([
          style({opacity: 0, transform: 'translateY(0), offset: 0'}),
          style({opacity: 1, transform: 'translateY(-15), offset: 0.6'}),
          style({opacity: 1, transform: 'translateY(0), offset: 1'}),
        ]))
      ]), // end of transition
      transition('inactive => active', [
        animate(300, keyframes([
          style({opacity: 0, transform: 'translateY(0), offset: 0'}),
          style({opacity: 1, transform: 'translateY(-15), offset: 0.7'}),
          style({opacity: 1, transform: 'translateY(100%), offset: 1'}),
        ]))
      ]) // end of transition
    ])  // end of trigger
  ] // end of animations
})
export class AppComponent {
  state = 'inactive';

  toggleFocus() {
    this.state = ( this.state === 'inactive' ? 'active' : 'inactive');
  }
}
