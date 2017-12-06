import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  alphaNumbers: Array<number> = [];
  betaNumbers: Array<number> = [];
  constructor() { }

  getNumbersAlpha(): Array<number> {
    return this.alphaNumbers;
  }

  generateNumbersAlpha():Array<number>{
    this.alphaNumbers.push(Math.floor(Math.random()*10+1));
    return this.alphaNumbers;
  }

  getNumbersBeta(): Array<number> {
    return this.betaNumbers;
  }

  generateNumbersBeta():Array<number>{
    this.betaNumbers.push(Math.floor(Math.random()*10+1));
    return this.betaNumbers;
  }

  generateDifference():number{
    var sumDiff:number = 0;
    var sumA:number = 0;
    var sumB:number = 0;
    for(var i = 0; i < this.alphaNumbers.length; i++){
      sumA += this.alphaNumbers[i];
    }
    for(var j = 0; j < this.betaNumbers.length; j++){
      sumB += this.betaNumbers[j];
    }
    sumDiff=Math.abs(sumA-sumB);
    return sumDiff;
  }

}
