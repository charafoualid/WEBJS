//TODO:
//- 1 maak inputfields
// - 2 maak per 2 fields een stap aan
// - 3 maak een methode die ze tekent op de DOM
// - Zoek een fix om de data te handelen

class Form {
    rootElement;
    stepCounter = 0;

    constructor(rootElement, stepCounter) {
        this.rootElement = rootElement;
        this.stepCounter = stepCounter;
    }
}