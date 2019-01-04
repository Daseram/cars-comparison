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

}
