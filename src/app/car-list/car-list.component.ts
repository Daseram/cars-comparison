import { Component, OnInit } from '@angular/core';
import { Car } from '../car.model';
import { CarsService } from '../cars.service';
import { $ } from 'protractor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

  cars: Car[] = [];
  searchText = '';
  selectedCars: Car[] = [];

  constructor(private carsService: CarsService, private route: Router) { }

  ngOnInit() {
    this.getCars();
  }

  getCars() {
    this.carsService.loadCars()
    .subscribe(
      data => { this.cars = data.cars; },
      error => { console.log(error); }
    );
  }

  getPhoto(photo: string) {
    if (photo) { return `../assets/images/${photo}`; }
  }

  goToCar(id: string) {
    this.route.navigate(['/details', id]);
  }

  selectCarForComparison(car: Car) {
    const selectedCar = this.selectedCars.filter(foundCar => (foundCar.id === car.id));
    if (selectedCar.length < 1) {
      this.selectedCars.push(car);
    } else {
      const index = this.selectedCars.indexOf(car);
      this.selectedCars.splice(index, 1);
    }
  }

  goToCompare() {
    if (this.selectedCars.length < 2) {
      alert('Minimo dos autos deben ser elegidos para ser comparados.');
    } else if (this.selectedCars.length > 3) {
      alert('No se pueden elegir mas de tres autos para comparar.');
    } else {
      this.carsService.setSelectedCarsToCompare(this.selectedCars);
      this.route.navigate(['/compare']);
    }
  }

}
