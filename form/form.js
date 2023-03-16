//TODO:
//- 1 maak inputfields
// - 2 maak per 2 fields een stap aan
// - 3 maak een methode die ze tekent op de DOM
// - Zoek een fix om de data te handelen

class Form {
    rootElement;
    stepCounter = 0;
    steps = [{
            stepName: "Stap 1",
            fields: [{ label: "Length", name: "length", type: "text", required: true }, { label: "Width", name: "width", type: "text", required: true }]
        },
        {
            stepName: "Stap 2",
            fields: [{
                label: "Interval (in seconds)",
                name: "interval",
                type: "number",
                required: true
            }]
        },
        {
            stepName: "Stap 3",
            fields: [{
                label: "Type",
                name: "type",
                type: "select",
                options: [
                    { name: "Cold Transport" },
                    { name: "Breakable Transport" },
                    { name: "General Transport" },
                    { name: "Pallet Transport" }
                ],
                required: true
            }]
        }
    ];

    constructor(rootElement, stepCounter) {
        this.rootElement = rootElement;
        this.stepCounter = stepCounter;
    }
}