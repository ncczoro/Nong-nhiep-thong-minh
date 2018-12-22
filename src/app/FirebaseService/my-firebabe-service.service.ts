import { Injectable } from '@angular/core';
import { PrameterEnviroment } from './my-firebase.modle';

@Injectable({
  providedIn: 'root'
})
export class MyFirebabeServiceService {
  public formDataHumidity : PrameterEnviroment;
    
  constructor() { }

}