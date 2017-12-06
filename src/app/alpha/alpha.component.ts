import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
  numbers: Array<number> = [];
  constructor(private _dataService: DataService) { }

  ngOnInit() {  }
  
  onClick(){
    this.numbers = this._dataService.generateNumbersAlpha();
  }

}
