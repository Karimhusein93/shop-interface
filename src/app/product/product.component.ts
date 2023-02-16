import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  params: any = '';
  category: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {
    this.activatedRoute.paramMap.subscribe(params => {
      this.ngOnInit();
  });
  }
  ngOnInit(): void {
    this.getCategory();
  }
  getCategory(){
    this.params = this.activatedRoute.snapshot.params;
    this.productService
      .getCategoryNameBySubCategoryName(this.params.category)
      .subscribe((data) => {
        this.category = data;
      });
  }
}
