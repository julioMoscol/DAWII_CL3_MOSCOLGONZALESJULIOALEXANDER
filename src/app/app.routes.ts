import { Routes } from '@angular/router';
import { SpeciesHumanComponent } from './species-human/species-human.component';
import { CorreoComponent } from './correo/correo.component';

export const routes: Routes = [
    {path: "species", component: SpeciesHumanComponent},
    {path: "correo", component: CorreoComponent}
];
