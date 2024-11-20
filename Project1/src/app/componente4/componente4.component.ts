import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componente4',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente4.component.html',
  styleUrl: './componente4.component.css'
})
export class Componente4Component {

    exibir:boolean = true;

    acao(){
      if(this.exibir == true){
        this.exibir = false;
      }else{
        this.exibir = true;
      }
    }
}
