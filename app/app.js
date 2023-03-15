import { Grid } from './grid.js';
import {TruckBuilder} from './truckbuilder.js';

let truckBuilderEl = document.getElementById('truckbuilder');
let gridEl = document.getElementById('grid');
let truckbuilder = new TruckBuilder(truckBuilderEl, gridEl);

// let gridEl = document.getElementById('grid');
// let grid = new Grid(gridEl);

