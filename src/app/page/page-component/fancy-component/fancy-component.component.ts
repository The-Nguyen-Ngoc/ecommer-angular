import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fancy-component',
  templateUrl: './fancy-component.component.html',
  styleUrls: ['./fancy-component.component.css']
})
export class FancyComponentComponent implements OnInit {
  @Input() fancyName: any;
  constructor() { }

  ngOnInit() {
  }

}
