import { Component, OnInit } from '@angular/core';
import { InjectorService } from '../services/injector.service'

@Component({
  selector: 'app-arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.scss']
})
export class ArrowComponent implements OnInit {

  address1: string = ''
  address1text: string = ''
  address2: string = ''
  address2text: string = ''
  constructor(private _InjectorService: InjectorService){    
  }
  
  ngOnInit(): void {
    this._InjectorService.address1.subscribe(item => {
        this.address1 = item
    })
    this._InjectorService.address1text.subscribe(item => {
      this.address1text = item
    })
    this._InjectorService.address2.subscribe(item => {
      this.address2 = item
    })
    this._InjectorService.address2text.subscribe(item => {
      this.address2text = item
    })
  }

}
