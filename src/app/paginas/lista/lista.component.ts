import { Component, OnInit } from '@angular/core';
import { AppService } from '../../servico/app.service';

@Component({
  selector: 'lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent implements OnInit  {
  constructor(private hp: AppService){}

  listaPersonagens!: any
  ngOnInit(): void {
  this.hp.getLista().subscribe({
    next: (data: any) =>{
      console.log(data)
      this.listaPersonagens = data
    },
    error: (error: any) =>{
      console.log(error)
    }
  })
}
}
