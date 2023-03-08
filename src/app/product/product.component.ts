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
  productDetailsList: any = [];
  skinTypesList: any = [];
  glowEffectsList: any = [];
  productsNumber: any = '';
  page = 1;
  pageSize = 9;
  selectedGenders: string[] = [];
  selectedSkinTypes: string[] = [];
  selectedGlowEffects: string[] = [];
  selectedBrands: string[] = [];
  selectedScents: string[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {
    this.activatedRoute.paramMap.subscribe((params) => {});
  }
  ngOnInit(): void {
    this.getCategory();
    this.getProductsListBySubCategoryName();
  }
  get collectionSize() {
    return this.productDetailsList?.products?.length;
  }
  getCategory() {
    this.params = this.activatedRoute.snapshot.params;
    this.productService
      .getCategoryNameBySubCategoryName(this.params.category)
      .subscribe((data) => {
        this.category = data;
      });
  }
  getProductsListBySubCategoryName() {
    this.productService
      .getProductsList(this.params.category)
      .subscribe((data) => {
        this.productDetailsList = data;
        this.productsNumber = this.productDetailsList.products.length;
      });
  }
  filterProducts() {
    let filteredList = [...this.productDetailsList.products];
  
    if (this.selectedGenders.length > 0) {
      filteredList = filteredList.filter(product =>
        this.selectedGenders.includes(product.genderId)
      );
    }
  
    if (this.selectedSkinTypes.length > 0) {
      filteredList = filteredList.filter(product =>
        this.selectedSkinTypes.includes(product.skinTypeId)
      );
    }
  
    if (this.selectedGlowEffects.length > 0) {
      filteredList = filteredList.filter(product =>
        this.selectedGlowEffects.includes(product.glowEffect)
      );
    }
  
    if (this.selectedBrands.length > 0) {
      filteredList = filteredList.filter(product =>
        this.selectedBrands.includes(product.brand)
      );
    }
  
    if (this.selectedScents.length > 0) {
      filteredList = filteredList.filter(product =>
        this.selectedScents.includes(product.scentId)
      );
    }
  
    this.productDetailsList.filteredProducts = filteredList;
  }
  toggleSelection(category: string, value: string) {
    let selection: string[];
    switch (category) {
      case 'gender':
        selection = this.selectedGenders;
        break;
      case 'skin':
        selection = this.selectedSkinTypes;
        break;
      case 'glow':
        selection = this.selectedGlowEffects;
        break;
      case 'brand':
        selection = this.selectedBrands;
        break;
      case 'scent':
        selection = this.selectedScents;
        break;
      default:
        selection = [];
        break;
    }
    const index = selection.indexOf(value);
    if (index >= 0) {
      selection.splice(index, 1);
    } else {
      selection.push(value);
    }
    this.filterProducts();
  }
}
