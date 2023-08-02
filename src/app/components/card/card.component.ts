import { Component, Input, OnInit } from '@angular/core';
import { Techniques } from 'src/app/models/techniques';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() mestechniques!: Techniques;

  

}

