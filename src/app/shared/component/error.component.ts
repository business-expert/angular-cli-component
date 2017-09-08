import { Component, Input } from '@angular/core';

@Component({
  selector: 'error-list',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {

  @Input()
  errors: string[];

}
