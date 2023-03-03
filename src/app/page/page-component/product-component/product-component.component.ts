import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';
import { ActivatedRoute } from '@angular/router';

interface Filter {
  name: string,
  code: string
}

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent implements OnInit {
  public items: MenuItem[] = [];
  public listCategory: any;
  public listProduct: any;
  public listProductShow: any;
  public pageCount: any;
  currentPage = 1;
  itemsPerPage = 20;
  categoryId: any;
  filters!: Filter[];

  selectedFilter = '';
  constructor(private categoryService: CategoryService, private productService: ProductService, private route: ActivatedRoute) { 
    this.filters = [
      {name: 'Giá thấp đến cao', code: 'price-low-to-hight'},
      {name: 'Giá cao đến thấp', code: 'price-hight-to-low'},
      {name: 'Tên A-Z', code: 'name-a-z'},
      {name: 'Tên Z-A', code: 'name-z-a'},
      {name: 'Giảm nhiều', code: 'percent'},
  ];
  this.selectedFilter = this.filters[4].code
  }

  ngOnInit() {
    this.categoryService.getListCategory().subscribe((res) => {
      this.listCategory = res;
      this.route.queryParams.subscribe(params => {
        this.categoryId = params['categoryId'];
      });
      if (this.categoryId) {
        if (this.listCategory && this.listCategory.length > 0){
          this.listCategory.forEach((element: any) => {
            if(element.id ==this.categoryId){
              element.active = true;
              this.callApiListProductsByIdCategory(this.categoryId)
            }
          });
        }
      } else {
        this.listCategory[0].active = true;
        if (this.listCategory && this.listCategory.length > 0 && this.listCategory[0].id) {
          this.categoryId = this.listCategory[0].id;
          this.callApiListProductsByIdCategory(this.categoryId )
        }
      }
    })
  }

  changeFilter(){
    console.log('this.selectedFilter', this.selectedFilter)
    this.callApiListProductsByIdCategory(this.categoryId);
  }

  clickCategory(idCategory: any) {
    this.listCategory.forEach((element: any) => {
      if (element && element.id && element.id == idCategory) {
        element.active = true
        this.categoryId = element.id;
        this.callApiListProductsByIdCategory(element.id);

      } else {
        element.active = false
      }

    });
  }

  callApiListProductsByIdCategory(idCategory: string) {
    this.productService.getListProductByCategory(idCategory).subscribe(response => {
      this.listProduct = response;
      if(this.selectedFilter == 'price-low-to-hight'){
        this.listProduct.sort((a: { price: number; }, b: { price: number; }) => a.price - b.price);
      }else if(this.selectedFilter == 'price-hight-to-low'){
        this.listProduct.sort((a: { price: number; }, b: { price: number; }) => b.price - a.price);
      }else if(this.selectedFilter == 'name-a-z'){
        this.listProduct.sort((a: { name: string; }, b: { name: string; }) => a.name.localeCompare(b.name));
      }else if(this.selectedFilter == 'name-z-a'){
        this.listProduct.sort((a: { name: string; }, b: { name: string; }) => b.name.localeCompare(a.name));
      }else if(this.selectedFilter == 'percent'){
        this.listProduct.sort((a: { percentReduction: number; }, b: { percentReduction: number; }) => b.percentReduction - a.percentReduction);
      }
      this.currentPage = 1;
      if (this.listProduct && this.listProduct.length > 0) {
        this.paginatedItems();
        const pageCount = Math.ceil(this.listProduct.length / this.itemsPerPage);
        this.pageCount = new Array(pageCount);
      }

    })
  }
  clickPageNumber(page: number){
    this.currentPage = page  + 1 ;
    this.paginatedItems();
  }
  paginatedItems() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.listProductShow = this.listProduct.slice(start, end);
  }
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.paginatedItems()
    }
  }

  nextPage() {
    const pageCount = Math.ceil(this.listProduct.length / this.itemsPerPage);
    if (this.currentPage < pageCount) {
      this.currentPage++;
      this.paginatedItems()
    }
  }

}
