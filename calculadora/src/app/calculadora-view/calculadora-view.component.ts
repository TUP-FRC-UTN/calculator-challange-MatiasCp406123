import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output,Input } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-calculadora-view',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './calculadora-view.component.html',
  styleUrl: './calculadora-view.component.css'
})
export class CalculadoraViewComponent {
 isDisabled=true;
 @Output() result = new EventEmitter<number>();
 @Output() result2=new EventEmitter<number>();
 @Output()opera=new EventEmitter<string>();
 numero1:number=0;
 numero2:number=0;
 @Input()resutado:number=0;
 rEsultado(op:string){
  this.result.emit(this.numero1);
  this.result2.emit(this.numero2);
  this.opera.emit(op)
 }
borrar(){
  this.numero1=0;
  this.numero2=0;
}
}
