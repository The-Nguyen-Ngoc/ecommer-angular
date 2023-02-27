import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { CategoryService } from 'src/app/service/category.service';
@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent implements OnInit {
  public items: MenuItem[] = [];
  public listCategory:any;
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getListCategory().subscribe((res)=>{
      this.listCategory = res;
      this.listCategory[0].active = true;
    })
  }

}
