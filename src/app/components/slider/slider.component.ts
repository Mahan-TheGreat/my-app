import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

   imagesLink: string[] = []
   i: number = 1
   activeImage = ""
  ngOnInit(): void {
    this.imagesLink = [
      'assets/slider/slider1.jpg' ,
      'assets/slider/slider2.jpg' ,
      'assets/slider/slider3.jpg' ,
    ]
    this.activeImage=this.imagesLink[this.i];
    this.assignFunctions();
    this.changeActivePictureIndicator();
  }

  assignFunctions(){
    document.getElementById('left-arrow')!.addEventListener('click',this.previousPicture);
    document.getElementById('right-arrow')!.addEventListener('click',this.nextPicture);

  }
  nextPicture = () => {
    let i = this.i;
    if(i<2){
      i+=1;
      this.activeImage = this.imagesLink[i]
    }else{
      i=0;
      this.activeImage = this.imagesLink[i]
    }
    this.i = i;
    this.changeActivePictureIndicator();
  }
  previousPicture = () => {
    let i = this.i;
    if(i<=0){
      i=2;
      this.activeImage = this.imagesLink[i]
    }else{
      i = i-1;
      this.activeImage = this.imagesLink[i]
    }   
    console.log(i)

      this.i = i;
      this.changeActivePictureIndicator();
    }

    changeActivePictureIndicator(){
     let indicators =  document.getElementById('image-number-indicator')
     for(let i =0; i<indicators?.children.length!;i++){  
      if(i==this.i){
        document.getElementById('image-number-indicator')!.children[i].id! = "active-image"
      }else{
        document.getElementById('image-number-indicator')!.children[i].id!  = ""
      }
     }
    
    }
}
