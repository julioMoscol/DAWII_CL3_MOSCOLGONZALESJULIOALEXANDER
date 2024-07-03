import { Component } from '@angular/core';
import { MaterialModule } from '../angular-material/material/material.module';
import { correo } from './correo';
import { CorreoService } from './correo.service';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-correo',
  standalone: true,
  imports: [MaterialModule, RouterOutlet],
  templateUrl: './correo.component.html',
  styleUrl: './correo.component.css'
})
export class CorreoComponent {

  displayedColumns: string[] = ['postId', 'id', 'name', 'email', 'body'];

  correo: correo[] = []

  constructor(private correoService: CorreoService, private router: Router, private route: ActivatedRoute){

  }

  irSpeciesHuman(): void{
    this.router.navigateByUrl("species")
  }

  irCorreo(): void{
    this.router.navigateByUrl("correo")
  }

  ngOnInit(): void{
    this.correoService.getCorreoFiltrado().subscribe((data) => {
      console.log(data);
      this.correo = data;
    });
  }
}
