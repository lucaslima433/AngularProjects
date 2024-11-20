import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 //Futuramente o uso de variaveis e funções
  nome:string = "lucas"
  idade:number = 22
}
