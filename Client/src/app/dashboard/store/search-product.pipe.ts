import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchProductFilter',
  pure: false
})
export class SearchProductPipe implements PipeTransform {

  transform(products: any[], filter: any): any {
    if(!products||!filter.name){
      return products;
    }
    return products.filter(function(product) { return product.name.indexOf(filter.name) !== -1;});
  }

}
