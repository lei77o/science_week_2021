import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AgrimensuraComponent } from './components/sections/agrimensura/agrimensura.component';
import { AmbientalComponent } from './components/sections/ambiental/ambiental.component';
import { HidrologiaComponent } from './components/sections/hidrologia/hidrologia.component';
import { InformaticaComponent } from './components/sections/informatica/informatica.component';

const routes: Routes = [
  { path: 'agrimensura', component: AgrimensuraComponent},
  { path: 'hidricas', component: HidrologiaComponent},
  { path: 'informatica', component: InformaticaComponent},
  { path: 'ambiental', component: AmbientalComponent},
  { path: 'home', component: HomeComponent},
  { path: '**', component: HomeComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
