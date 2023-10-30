import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitchComponent } from '../switch/switch.component';

@Component({
  selector: 'rxstest-controlpanel',
  standalone: true,
  imports: [CommonModule, SwitchComponent],
  templateUrl: './controlpanel.component.html',
  styleUrls: ['./controlpanel.component.css'],
})
export class ControlpanelComponent {

  check(isChecked: boolean, itm:string) {
    console.log(isChecked ? 'yes': 'no');
    console.log(itm);
  }
}
