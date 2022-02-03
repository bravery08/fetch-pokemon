import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokedexId'
})
export class PokedexIdPipe implements PipeTransform {

  transform(value: string): string {
    const idIndex = 6;
    let stringArray = value.split('/');
    let result = '';
    const id = parseInt(stringArray[idIndex]);

    if (id < 10) {
      result = '00' + id.toString();
    } else if (id < 100) {
      result = '0' + id.toString();
    } else {
      result = id.toString();
    }

    return result;
  }

}
