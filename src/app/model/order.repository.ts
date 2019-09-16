import { RestService } from './rest.service';
import { Order } from './order.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class OrderRepository {

    private orders: Order[] = [];

    constructor(private restService: RestService) {
        // this.restService.getCategories().
        //     subscribe(orders => this.orders = orders);
    }


    getOrder(id: number): Order {
        return this.orders.find(i => i.id === id);
    }

    getOrders(): Order[] {
        return this.orders;
    }

    saveOrder(order: Order): Observable<Order> {
        return this.restService.saveOrder(order);
    }
}