import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

   imagesLink: string[] = []
   mainImage='assets/slider/slider2.jpg' ;
  ngOnInit(): void {
    this.imagesLink = [
      'assets/slider/slider1.jpg' ,
      'assets/slider/slider2.jpg' ,
      'assets/slider/slider3.jpg' ,
    ]

  }
}
