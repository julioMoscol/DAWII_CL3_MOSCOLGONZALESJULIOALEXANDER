import { Component } from '@angular/core';
import { MaterialModule } from '../angular-material/material/material.module';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-species-human',
  standalone: true,
  imports: [MaterialModule, RouterOutlet],
  templateUrl: './species-human.component.html',
  styleUrl: './species-human.component.css'
})
export class SpeciesHumanComponent {

  irHome(): void{

  }

  irSpeciesHuman(): void{

  }

  irCorreo(): void{
    
  }
}
