import { Component, OnInit } from "@angular/core";
import { ProductRepository } from '../model/product.repository';
import { CategoryRepository } from '../model/category.repository';
import { Product } from '../model/product.model';
import { Category } from '../model/category.model';
import { Cart } from '../model/cart.model';
import { Router } from '@angular/router';

@Component({
    selector: 'shop',
    templateUrl: 'shop.component.html'

})
export class ShopComponent {
    public selectedCategory: Category = null;
    public productPerPage: number = 3;
    public selectedPage: number = 1;
    public selectedProduct: Product[] = [];

    constructor(
        private productRepository: ProductRepository
    ) { }

    get products(): Product[] {
        let index = (this.selectedPage - 1) * this.productPerPage;
        //sayfalama  için slice metodunu kullanıyoruz 
        this.selectedProduct = this.productRepository
            .getProducts(this.selectedCategory);

        return this.selectedProduct
            .slice(index, index + this.productPerPage);
    }

    get pageNumbers(): number[] {
        return Array(
            Math.ceil(this.productRepository
                .getProducts(this.selectedCategory).length / this.productPerPage))
            .fill(0)
            .map((a, i) => i + 1)
    }

    changePage(p: number) {
        this.selectedPage = p;
    }

    changePageSize(p: number) {
        this.productPerPage = p;
        this.changePage(1);
    }

    //geriye parametre gönderme işlemi için
    getCategory(category: Category) {
        this.selectedCategory = category;
    }



}
