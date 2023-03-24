import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  images = [
    {id: 1,
    label: 'spaghetti al pomorodoro'},
    {id: 2,
      label: 'tagliata di manzo'},
    {id: 3,
      label: 'tiramisù'}
  ];

  percorso = "../assets/images/carousel-";

  constructor(){
    console.log('costruttore')
  };

  ngOnInit(): void {
    console.log('dentro oninit')
  }


}
