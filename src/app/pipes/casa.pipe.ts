import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'casa'
})
export class CasaPipe implements PipeTransform {

  transform(value: string) {
    if(value === 'Gryffindor'){
      return 'Grifinória'
    } else if (value ==="Slytherin") {
      return "Sonserina";
    } else if (value ==="Hufflepuff") {
      return "Lufa-Lufa";
    } else if (value ==="Ravenclaw") {
      return "Corvinal";
    } else {
      return value;
    }
    
  }

}
