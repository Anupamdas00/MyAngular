import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeName'
})
export class RemoveNamePipe implements PipeTransform {

  transform(value: string) {
    return value = value.substring(0, value.lastIndexOf("-"));
  }

}
