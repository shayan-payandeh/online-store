import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-brand-card',
  templateUrl: './brand-card.component.html',
  styleUrls: ['./brand-card.component.scss']
})
export class BrandCardComponent implements OnInit {
  @Input() data;
  constructor() { }

  ngOnInit() {
  }

}
