import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class InjectorService {
  // Observables for the bottom.component.ts
  distance  = new Observable<string>((name) => {
    setTimeout(() => {name.next('15, 5 Km')}, 2000)
    setTimeout(() => {name.next('7, 8 Km')}, 4000)
    setTimeout(() => {name.next('12, 8 Km')}, 7000)
    setTimeout(() => {name.next('6, 8 Km')}, 10000)
    setTimeout(() => {name.next('5, 0 Km')}, 13000)
    })
  time = new Observable<string>((time) => {
    setTimeout(() => {time.next('30 min')}, 2000)
    setTimeout(() => {time.next('45 min')}, 4000)
    setTimeout(() => {time.next('15 min')}, 7000)
    setTimeout(() => {time.next('35 min')}, 10000)
    setTimeout(() => {time.next('40 min')}, 13000)
  })
  price = new Observable<number>((number) => {
    setTimeout(() => {number.next(35)}, 2000)
    setTimeout(() => {number.next(15)}, 4000)
    setTimeout(() => {number.next(12)}, 7000)
    setTimeout(() => {number.next(7)}, 10000)
    setTimeout(() => {number.next(45)}, 13000) 
  })
  energy = new Observable<string>((energy) => {
    setTimeout(() => {energy.next('12,5 kWh')}, 2000)
    setTimeout(() => {energy.next('16,7 kWh')}, 4000)
    setTimeout(() => {energy.next('6,8 kWh')}, 7000)
    setTimeout(() => {energy.next('9,8 kWh')}, 10000)
    setTimeout(() => {energy.next('20,5 kWh')}, 13000)  
  })
  // Observables for the center.component.ts
  name = new Observable<string>((name) => {
    setTimeout(() => {name.next('Nora M. Buchanan')}, 2000)
    setTimeout(() => {name.next('Carlos Gonzales')}, 4000)
    setTimeout(() => {name.next('Renato Miranda')}, 7000)
    setTimeout(() => {name.next('Joaquin Obrador')}, 10000)
    setTimeout(() => {name.next('Carl Jung')}, 13000)  
  })
  interactions = new Observable<string>((interactions) => {
    setTimeout(() => {interactions.next('4 Interactions')}, 2000)
    setTimeout(() => {interactions.next('7 Interactions')}, 4000)
    setTimeout(() => {interactions.next('10 Interactions')}, 7000)
    setTimeout(() => {interactions.next('2 Interactions')}, 10000)
    setTimeout(() => {interactions.next('15 Interactions')}, 13000)  
  })
  email = new Observable<string>((email) => {
    setTimeout(() => {email.next('invision@invisionapp.com')}, 2000)
    setTimeout(() => {email.next('marketing@invisionapp.com')}, 4000)
    setTimeout(() => {email.next('sociales@invisionapp.com')}, 7000)
    setTimeout(() => {email.next('blog@invisionapp.com')}, 10000)
    setTimeout(() => {email.next('rrhh@invisionapp.com')}, 13000)    
  })
  phone = new Observable<number>((number) => {
    setTimeout(() => {number.next(14434124422)}, 2000)
    setTimeout(() => {number.next(14415500603)}, 4000)
    setTimeout(() => {number.next(14445660053)}, 7000)
    setTimeout(() => {number.next(14490506411)}, 10000)
    setTimeout(() => {number.next(14433500999)}, 13000) 
   })
  location = new Observable<string>((location) => {
    setTimeout(() => {location.next('New York, NY')}, 2000)
    setTimeout(() => {location.next('Jersey City, NJ')}, 4000)
    setTimeout(() => {location.next('Philadelphia, PA')}, 7000)
    setTimeout(() => {location.next('Newark, OH')}, 10000)
    setTimeout(() => {location.next('Albany, GA')}, 13000) 
   })
  // Observables for the arrow.component.ts
    address1 = new Observable<string>((address1) => {
    setTimeout(() => {address1.next('Jackson Heights')}, 2000),
    setTimeout(() => {address1.next('Rode Avenue')}, 4000),
    setTimeout(() => {address1.next('Cony Island')}, 7000),
    setTimeout(() => {address1.next('Northon Hills')}, 10000),
    setTimeout(() => {address1.next('Baker Street')}, 13000)
  }) 
    address1text = new Observable<string>((address1text) => {
      setTimeout(() => {address1text.next('37-27 74th Street')}, 2000)
      setTimeout(() => {address1text.next('2534 El Alamo Avenue')}, 4000)
      setTimeout(() => {address1text.next('1788 Los Nogales Hill')}, 7000)
      setTimeout(() => {address1text.next('7499 St. Paul Street')}, 10000)
      setTimeout(() => {address1text.next('195 Miraflores Park')}, 13000)
  })  
    address2 = new Observable<string>((address2) => {
      setTimeout(() => {address2.next('Greenpoint')}, 2000)
      setTimeout(() => {address2.next('Jacks Cafe')}, 4000)
      setTimeout(() => {address2.next('Miraflores Park')}, 7000)
      setTimeout(() => {address2.next('Parque de la Reserva')}, 10000)
      setTimeout(() => {address2.next('Opera Lodge')}, 13000)
  })
  address2text = new Observable<string>((address2text) => {
    setTimeout(() => {address2text.next('81 Gate St. Brooklyn')}, 2000)
    setTimeout(() => {address2text.next('37 Santa Rosa Blvd')}, 4000)
    setTimeout(() => {address2text.next('15 Coney Park')}, 7000)
    setTimeout(() => {address2text.next('15 Northon Hills')}, 10000)
    setTimeout(() => {address2text.next('225 El Alamo Avenue')}, 13000)
   })
   image = new Observable<string>((image) => {
    setTimeout(() => {image.next('81 Gate St. Brooklyn')}, 2000)
    setTimeout(() => {image.next('37 Santa Rosa Blvd')}, 4000)
    setTimeout(() => {image.next('15 Coney Park')}, 7000)
    setTimeout(() => {image.next('15 Northon Hills')}, 10000)
    setTimeout(() => {image.next('225 El Alamo Avenue')}, 13000)
   })
  data = new EventEmitter<string>()
  constructor() { 
  }
}
