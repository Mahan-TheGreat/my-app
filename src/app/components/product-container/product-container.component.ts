import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.css']
})
export class ProductContainerComponent implements OnInit{
productsList:any[] = []
ngOnInit(): void {
  this.productsList = [
    {productName:'ABC',productPrice: 400, productImageSource: 'xxx' },
    {productName:'ABC',productPrice: 400, productImageSource: 'xxx' },
    {productName:'ABC',productPrice: 400, productImageSource: 'xxx' },
    {productName:'ABC',productPrice: 400, productImageSource: 'xxx' },
    {productName:'ABC',productPrice: 400, productImageSource: 'xxx' },
  ]
}
}
