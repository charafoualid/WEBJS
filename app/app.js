import { TruckBuilder } from '../Form/truckbuilder.js';
import { LoadingHall } from '../Hall/loadingHall.js';


let truckBuilderEl = document.getElementById('truckbuilder');
let gridEl = document.getElementById('grid');
let truckbuilder = new TruckBuilder(truckBuilderEl, gridEl);

let addAssemblyButton = document.getElementById('add-assembly');
let switchButton = document.getElementById('switchHall');
let loadingHallEl = document.querySelector('.loadingHall');
let loadingHall = new LoadingHall(addAssemblyButton, switchButton, loadingHallEl);