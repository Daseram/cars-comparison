import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Car } from './car.model';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  selectedCars: Car[] = [];

  constructor(private http: HttpClient) { }

  public loadCars(): Observable<any> {
    return this.http.get('./assets/cars.json');
  }

  public getSpecificCar(carId: string): Observable<any> {
    const id = parseInt(carId);
    return this.http.get('./assets/cars.json')
      .pipe(map((data) => {
        const foundCars: any = data;
        return foundCars.cars.filter(car => {
            return car.id === id;
        })[0];
    }));
  }

  public setSelectedCarsToCompare(cars) {
    this.selectedCars = [];
    this.selectedCars = cars;
  }

  public getSelectedCarsToCompare() {
    return this.selectedCars;
  }
}
