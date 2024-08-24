import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculadoraViewComponent } from './calculadora-view/calculadora-view.component';
import { CalculadoraServiceComponent } from './calculadora-service/calculadora-service.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CalculadoraViewComponent,CalculadoraServiceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculadora';
  numero1:number=0;
  numero2:number=0;
  ope:string="";
  resultado:number=0;
  cAlcular(num1:number,num2:number,opera:string){
    this.numero1=num1;
    this.numero2=num2;
    this.ope=opera;
  }
  reesultado(result:number){
    this.resultado=result;
  }
}
