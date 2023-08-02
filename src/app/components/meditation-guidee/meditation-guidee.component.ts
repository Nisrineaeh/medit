import { Component } from '@angular/core';
import { Techniques } from 'src/app/models/techniques';
import { TechniqueService } from '../services/technique.service';

@Component({
  selector: 'app-meditation-guidee',
  templateUrl: './meditation-guidee.component.html',
  styleUrls: ['./meditation-guidee.component.css']
})
export class MeditationGuideeComponent {
  techniquesToDisplay: Techniques[] = [];
  constructor(private techniqueService: TechniqueService) { }

  ngOnInit(): void {
    this.techniqueService.getTechnoiques().subscribe((technique) => {
      this.techniquesToDisplay = technique;
      console.log(this.techniquesToDisplay)
    })
  }
}
