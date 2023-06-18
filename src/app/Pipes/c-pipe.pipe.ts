import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cPipe'
})
export class CPipePipe implements PipeTransform {

  transform(value: string, length?: number): string {
    if (!length) {
      length = 20;
    }
    return value.substring(0, length);
  }

}
