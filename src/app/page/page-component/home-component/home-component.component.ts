import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { TrendingService } from 'src/app/service/trending-service.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  public listTrending: any;
  public listProduct: any;
  public listProductFlashSale: any;

  constructor(private trendingService: TrendingService, private productService: ProductService) { }

  ngOnInit() {
    this.trendingService.getListTrending().subscribe((res)=>{
      this.listTrending = res;
    })
    this.productService.getListProductByCategory('6').subscribe((res)=>{
      this.listProduct = res;
      if(this.listProduct && this.listProduct.length > 0){
        this.listProductFlashSale = this.listProduct.filter((item: any) => item.percentReduction > 0 && item.stock);
        this.listProductFlashSale.sort((a: { percentReduction: number; }, b: { percentReduction: number; }) => b.percentReduction - a.percentReduction);
        if(this.listProductFlashSale && this.listProductFlashSale.length > 20){
          this.listProductFlashSale = this.listProductFlashSale.slice(0,20);
        }
      }

    })
  }

}
