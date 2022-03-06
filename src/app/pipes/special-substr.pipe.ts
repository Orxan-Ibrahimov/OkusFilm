import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'specialSubstr'
})
export class SpecialSubstrPipe implements PipeTransform {

  // filterText:string = "";


  transform(value: string, limit?:number):string {

    if(value == null)
    return null

   
    limit? limit: limit = 50;

    if (limit > value.length) 
    return value;

    
    return value.substring(0,limit) + '...';
    
  }

}
