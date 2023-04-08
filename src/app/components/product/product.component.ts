import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() productName: string = '';
  @Input() productPrice: string = '';

  @Input() productImageSource: string = '';

}
