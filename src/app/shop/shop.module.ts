import { NgModule } from "@angular/core";
import { ModelModule } from '../model/model.module';
import { ShopComponent } from './shop.compont';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule],
    declarations: [ShopComponent],
    exports: [ShopComponent]
})


export class ShopModule {

}