import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {
  numbers: Array<number> = [];
  constructor(private _dataService: DataService) { }

  ngOnInit() {  }

  onClick(){
    this.numbers = this._dataService.generateNumbersBeta();
  }

}
