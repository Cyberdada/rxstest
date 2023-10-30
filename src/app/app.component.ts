import { Component } from '@angular/core';
import { ControlpanelComponent } from './comps/controlpanel.component';

@Component({
  standalone: true,
  imports: [ControlpanelComponent],
  selector: 'rxstest-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'rxstest';
}
