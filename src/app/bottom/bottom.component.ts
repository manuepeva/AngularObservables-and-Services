import { Component, OnInit } from '@angular/core';
import {InjectorService} from '../services/injector.service'

@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.scss']
})
export class BottomComponent implements OnInit {

  distance: string = ''
  time: string = ''
  price: number = 0
  energy: string = ''
  constructor(private _InjectorService: InjectorService){   
  }

  ngOnInit(): void {
    this._InjectorService.distance.subscribe(item => {
      this.distance = item
    })
    this._InjectorService.time.subscribe(item => {
      this.time = item
    })
    this._InjectorService.price.subscribe(item => {
      this.price = item
    })
    this._InjectorService.energy.subscribe(item => {
      this.energy = item
    })
  }

}
