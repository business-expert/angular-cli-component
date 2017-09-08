import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'md-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {

  @Input()
  progress: boolean;

  @Input()
  title: string;

  constructor() { }

}
