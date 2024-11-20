import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { Componente2Component } from "./componente2/componente2.component";
import { MoonComponent } from "./moon/moon.component";
import { Componente4Component } from "./componente4/componente4.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, Componente2Component, MoonComponent, Componente4Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Project1';
}
