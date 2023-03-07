import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-flash-sale-component',
  templateUrl: './flash-sale-component.component.html',
  styleUrls: ['./flash-sale-component.component.css']
})
export class FlashSaleComponentComponent implements OnInit {
  @Input() listProductFlashSale: any;
  constructor() { }

  ngOnInit() {
  }

}
