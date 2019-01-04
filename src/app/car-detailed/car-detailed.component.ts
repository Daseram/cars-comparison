import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';
import { Car } from '../car.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-detailed',
  templateUrl: './car-detailed.component.html',
  styleUrls: ['./car-detailed.component.scss']
})
export class CarDetailedComponent implements OnInit {

  selectedCar: Car;
  paramId: string;

  constructor( private carService: CarsService, private route: ActivatedRoute) {
    this.route.params.subscribe( params => {this.paramId = params.id; this.getCar(this.paramId); } );
  }

  ngOnInit() {
  }

  getCar(id: string) {
    this.carService.getSpecificCar(id)
    .subscribe(
      data => { this.selectedCar = data; },
      error => {}
    );
  }

  getPhoto(photo: string) {
    if (photo) { return `../assets/images/${photo}`; }
  }

}
