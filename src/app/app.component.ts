import {CommonModule} from "@angular/common";
import {Component} from "@angular/core";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  imports: [CommonModule,
    RouterOutlet
  ],
  standalone: true
})
export class AppComponent {
}
