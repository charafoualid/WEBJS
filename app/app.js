import { TruckBuilder } from '../Form/truckbuilder.js';
import { LoadingHall } from '../Hall/loadingHall.js';
import { WeatherApi } from '../weather-api/weather_api.js';

let weatherApiEL = document.getElementById('weather-results');
let weatherApi = new WeatherApi(weatherApiEL);



let truckBuilderEl = document.getElementById('truckbuilder');
let gridEl = document.getElementById('grid');
let truckbuilder = new TruckBuilder(truckBuilderEl, gridEl);

let addAssemblyButton = document.getElementById('add-assembly');
let switchButton = document.getElementById('switchHall');
let loadingHallEl = document.querySelector('.loadingHall');
let loadingHall = new LoadingHall(addAssemblyButton, switchButton, loadingHallEl,weatherApiEL);


  
  