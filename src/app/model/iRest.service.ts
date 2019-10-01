import { Observable } from "rxjs";
import { Product } from './product.model';
import { Category } from './category.model';
import { Order } from './order.model';

export interface IRestService {
    getProducts(): Observable<Product[]>
    getCategories(): Observable<Category[]>
    saveOrder(order: Order): Observable<Order>
}