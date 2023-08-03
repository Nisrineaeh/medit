import { Component, OnInit } from '@angular/core';
import { TechniqueService } from '../../components/services/technique.service';
import { Techniques } from 'src/app/models/techniques';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {
  techniques!: Techniques[];
  message: string = "";
  constructor(private techniquesService: TechniqueService) { }

  ngOnInit() {
    // Chargez les techniques de méditation lors de l'initialisation du composant
    this.loadMeditationTechniques();
  }

  loadMeditationTechniques() {

    this.techniquesService.getTechnoiques().subscribe((technique) => {
      this.techniques = technique;
      console.log(this.techniques)
    })
  }
}



