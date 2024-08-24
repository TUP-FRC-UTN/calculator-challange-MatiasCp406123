import { Component, Input, Output, SimpleChanges } from '@angular/core';
import { EventEmitter} from '@angular/core';

@Component({
  selector: 'app-calculadora-service',
  standalone: true,
  imports: [],
  templateUrl: './calculadora-service.component.html',
  styleUrl: './calculadora-service.component.css'
})
export class CalculadoraServiceComponent {
  @Input()number1:number=0;
  @Input()number2:number=0;
  @Input()operacion:string="";
  @Output()res=new EventEmitter<number>();
  result:number=0;
  ngOnChanges(changes: SimpleChanges) {
    if (changes['number1'] || changes['number2'] || changes['operacion']) {
      this.opera(this.operacion);
    }
  }
  opera(operacion:string){
  this.operacion=operacion
  switch (operacion) {
    
    case 'sum':
      this.result=this.number1+this.number2;
      this.res.emit(this.result)
      break;
    case 'restar': 
      this.result=this.number1-this.number2;
      this.res.emit(this.result)
      break;
      case 'potencia': 
      this.result=this.number1**this.number2;
      this.res.emit(this.result)
      break;
      case 'mult': 
      this.result=this.number1*this.number2;
      this.res.emit(this.result)
      break;
      case 'division': 
      this.result=this.number1/this.number2;
      this.res.emit(this.result)
      break;
      case 'borrar': 
      this.number1=0;
      this.number2=0;
      this.res.emit(this.result)
      break;
  }
  
}
  
}
