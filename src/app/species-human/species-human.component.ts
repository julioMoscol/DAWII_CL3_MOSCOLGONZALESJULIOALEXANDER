import { Component } from '@angular/core';
import { MaterialModule } from '../angular-material/material/material.module';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { species } from './species';
import { SpeciesService } from './species.service';

@Component({
  selector: 'app-species-human',
  standalone: true,
  imports: [MaterialModule, RouterOutlet],
  templateUrl: './species-human.component.html',
  styleUrl: './species-human.component.css'
})
export class SpeciesHumanComponent {

  displayedColumns: string[] = ['id', 'name', 'status', 'species', 'type', 'gender', 'origin', 'location', 'image', 'episode', 'url', 'created'];

  species: species[] = []

constructor(private speciesService: SpeciesService, private router: Router, private route: ActivatedRoute){

}
  irSpeciesHuman(): void{
    this.router.navigateByUrl("species")
  }

  irCorreo(): void{
    this.router.navigateByUrl("correo")
  }

  ngOnInit(): void{
    this.speciesService.getHumanSpecies().subscribe((data) => {
      console.log(data);
      this.species = data;
    });
  }

  getLimitedEpisodes(episodes: string[]): string {
    if (episodes.length <= 3) {
      return episodes.join(', ');
    } else {
      return episodes.slice(0, 3).join(', ') + '...';
    }
  }
}
