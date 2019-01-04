import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';
import { Car } from '../car.model';

@Component({
  selector: 'app-car-comparison',
  templateUrl: './car-comparison.component.html',
  styleUrls: ['./car-comparison.component.scss']
})
export class CarComparisonComponent implements OnInit {

  selectedCars: Car[] = [];

  constructor( private carService: CarsService) { }

  ngOnInit() {
    this.getCars();
  }

  getCars() {
    this.selectedCars = this.carService.getSelectedCarsToCompare();
  }

  getPhoto(photo: string) {
    if (photo) { return `../assets/images/${photo}`; }
  }

}
