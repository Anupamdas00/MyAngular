import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdtoinr'
})
export class UsdtoinrPipe implements PipeTransform {

  transform(value: number, args: number): unknown {
    let price=args
    return Math.trunc(value * price);

  }

}
