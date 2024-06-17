import { Component } from '@angular/core';
import { SpellsService } from '../../servico/spells.service';

@Component({
  selector: 'app-magias',
  templateUrl: './magias.component.html',
  styleUrl: './magias.component.css'
})
export class MagiasComponent {
  constructor(private hp: SpellsService){}

  listaMagias!: any
  ngOnInit(): void {
  this.hp.getLista().subscribe({
    next: (data: any) =>{
      console.log(data)
      this.listaMagias = data
    },
    error: (error: any) =>{
      console.log(error)
    }
  })
}
}
