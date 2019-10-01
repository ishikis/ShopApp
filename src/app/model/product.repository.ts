import { Injectable, OnInit } from '@angular/core'
import { Product } from './product.model'
import { RestService } from './rest.service';
import { Category } from './category.model';


@Injectable()

export class ProductRepository implements OnInit {

    private products: Product[] = [];
    constructor(private restService: RestService) {
        this.restService.getProducts().
            subscribe(products => this.products = products);
    }

    ngOnInit() { }

    getProduct(id: number): Product {
        return this.products.find(i => i.id == id);
    }

    getProducts(categoy: Category = null): Product[] {
        if (categoy)
            return this.products.filter(p => p.category == categoy.name);
        else
            return this.products;

    }
}