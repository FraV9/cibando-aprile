import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'cibando-aprile';

  images = [
    {id: 1,
    label: 'spaghetti al pomorodoro'},
    {id: 2,
      label: 'tagliata di manzo'},
    {id: 3,
      label: 'tiramisù'}
  ];

  percorso = "../assets/images/carousel-";

  colore = "blue";
}


