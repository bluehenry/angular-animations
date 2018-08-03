import { Component, ChangeDetectorRef } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('removeMe', [
      state('out', style({
        transform: 'scale(0)',
        opacity: 0
      })),
      transition('* => out', [
        animate('500ms 0s ease-in', keyframes([
         style({opacity: 1, transform: 'translateX(-8px)', offset: 0}),
         style({opacity: 1, transform: 'translateX(0)', offset: .3}),
         style({opacity: 0, transform: 'translateX(50px)', offset: 1}),
        ]))
      ]),
    ]),  // end of trigger
    trigger('myTrigger', [
      state('small', style({
        transform: 'scale(1)'
      })),
      state('large', style({
        transform: 'scale(1.5)'
      })),
      state('extra-large', style({
        transform: 'scale(1.5)'
      })),
      state('fadeIn', style({
        opacity: '1'
      })),
      // transition('small <=> large', animate('500ms'))

      // wildcard
      // transition('* => small', animate('500ms'))

      // transition('void => *', [
      //   style({ opacity: '0', transform: 'translateY(20px)'}),
      //    animate('500ms 0s ease-out')

      // Multi-step Animations
      transition('void => *', [
         animate(2000, keyframes([
          style({ opacity: '0', transform: 'translateY(-30px)', offset: 0}),
          style({ opacity: '1', transform: 'translateY(5px) scale(1.2)', offset: .3}),
          style({ opacity: '2', transform: 'translateY(0) scale(1.2)', offset: 1}),
         ]))
      ])
   ])  // end of trigger
  ] // end of animations
})
export class AppComponent {
  state = 'fadeIn';
  items = new Array();
  animDetails = 'Waiting';
  btnState = 'in';

  constructor(private cdRef: ChangeDetectorRef) {}

  toggleState() {
    // this.state = (this.state === 'small' ? 'large' : 'small');
    this.items.push('another item');
    this.state = 'fadeIn';
    this.btnState = 'out';
  }

  animStart(event: any) {
    console.log('Animation Start!');
    console.log(event);
  }

  animDone(event: any) {
    console.log('Animation Finished!');
    this.animDetails = 'It took me ' + event.totalTime + 'ms to complete.';
    this.cdRef.detectChanges();
  }
}
