import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';


@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {
  transform(value: string | null): string {
    if (!value) {
      return ''; 
    }

    const datePipe: DatePipe = new DatePipe('en-US');
    return datePipe.transform(value, 'yyyy-MM-dd') || ''; 
  }
}