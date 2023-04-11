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
    {productName:'ABC',productPrice: 400, productImageSource: 'assets/product1.jpg' },
    {productName:'ABC',productPrice: 400, productImageSource: 'assets/product2.jpg' },
    {productName:'ABC',productPrice: 400, productImageSource: 'assets/product3.jpg' },
    {productName:'ABC',productPrice: 400, productImageSource: 'assets/product4.jpg' },
    {productName:'ABC',productPrice: 400, productImageSource: 'assets/product5.jpg' },
    {productName:'ABC',productPrice: 400, productImageSource: 'assets/product1.jpg' }

  ]
}
}
