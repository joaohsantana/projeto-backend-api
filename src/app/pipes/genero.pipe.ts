import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genero'
})
export class GeneroPipe implements PipeTransform {

  transform(value: string) {
    if(value === 'male'){
      return 'Masculino'
    } else if (value ==="female") {
      return "Feminino";
    } else {
      return value;
    }
  }
}
