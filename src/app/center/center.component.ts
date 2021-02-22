import { Component, OnInit } from '@angular/core';
import { InjectorService } from '../services/injector.service'

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.scss']
})
export class CenterComponent implements OnInit {

  name: string = ''
  interactions: string = ''
  email: string = ''
  phone: number = 0
  location: string = ''
  constructor(private _InjectorService: InjectorService) {
   }
   
  ngOnInit(): void {
  this._InjectorService.name.subscribe(item => {
    this.name = item
  })
    this._InjectorService.interactions.subscribe(item => {
      this.interactions = item
    })
    this._InjectorService.email.subscribe(item => {
      this.email = item
    })
    this._InjectorService.phone.subscribe(item => {
      this.phone = item
    })
    this._InjectorService.location.subscribe(item => {
      this.location = item
    })
  }
}
