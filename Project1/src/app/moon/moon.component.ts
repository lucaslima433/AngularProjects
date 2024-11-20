import { Component } from '@angular/core';

@Component({
  selector: 'app-moon',
  standalone: true,
  imports: [],
  templateUrl: './moon.component.html',
  styleUrl: './moon.component.css'
})
export class MoonComponent {

  imagem:string = 'C:/AngularProjects/Project1/src/assets/sol.jpg';

  alterarimg(){
    if(this.imagem === 'C:/AngularProjects/Project1/src/assets/sol.jpg'){
      this.imagem = 'C:/AngularProjects/Project1/src/assets/lua.jpg'
    }else{
      this.imagem = 'C:/AngularProjects/Project1/src/assets/sol.jpg'
    }
  }
}
