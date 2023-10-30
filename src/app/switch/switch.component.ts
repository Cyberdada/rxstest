import { Component,EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'rxstest-switch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css'],
})
export class SwitchComponent {

  @Output() checked = new EventEmitter<boolean>();

  changed(event: Event):void {
     if(event && event.target) this.checked.emit((event.target as any).checked);
  }
}
