import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'currencySuffix' })
export class CurrencySuffixPipe implements PipeTransform {
  transform(value: number, currencyCode: string = 'VND'): string {
    const formatter = new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: currencyCode,
    });
    const parts = formatter.formatToParts(value);
    const currencySymbol = parts.find(part => part.type === 'currency')?.value ?? '';
    const numberValue = parts.filter(part => part.type !== 'currency').map(part => part.value).join('');
    return `${numberValue}${currencySymbol}`;
  }
}