//TODO:
//- 1 maak inputfields
// - 2 maak per 2 fields een stap aan
// - 3 maak een methode die ze tekent op de DOM
// - Zoek een fix om de data te handelen

export class Form {
    rootElement;
    stepCounter = 0;
    nextStepCallback;
    steps = [{
            stepName: "Step 1",
            fields: [
                { label: "Length", name: "length", type: "text", required: true },
                { label: "Width", name: "width", type: "text", required: true }
            ]
        },
        {
            stepName: "Step 2",
            fields: [
                { label: "Interval (in seconds)", name: "interval", type: "number", required: true }
            ]
        },
        {
            stepName: "Step 3",
            fields: [{
                label: "Type",
                name: "type",
                type: "select",
                options: [
                    "Cold Transport",
                    "Breakable Transport",
                    "General Transport",
                    "Pallet Transport"
                ],
                required: true
            }]
        }
    ];


    formData = {};
    //constructor
    constructor(rootElement, stepCounter) {
        this.rootElement = rootElement;
        this.stepCounter = stepCounter;
    }

    //method that draws the form on the DOM
    drawForm(stepCounter) {
        // Clear the root element
        this.rootElement.innerHTML = '';

        // Get the current step
        let step = this.steps[stepCounter];

        // Create a form element
        let formElement = document.createElement('form');

        // Add a title for the current step
        let stepNameElement = document.createElement('h2');
        stepNameElement.innerText = step.stepName;
        formElement.appendChild(stepNameElement);

        // Add input fields for the current step
        step.fields.forEach(field => {
            let labelElement = document.createElement('label');
            labelElement.innerText = field.label;

            let inputElement;

            if (field.type === 'select') {
                inputElement = document.createElement('select');

                field.options.forEach(option => {
                    let optionElement = document.createElement('option');
                    optionElement.value = option;
                    optionElement.text = option;
                    inputElement.appendChild(optionElement);
                });
            } else {
                inputElement = document.createElement('input');
                inputElement.setAttribute('type', field.type);
            }

            inputElement.setAttribute('name', field.name);
            inputElement.setAttribute('required', field.required);

            formElement.appendChild(labelElement);
            formElement.appendChild(inputElement);
        });

        // If it's the last step, add a "Finish" button, otherwise add a "Next" button
        let lastStep = stepCounter >= this.steps.length - 1;
        let buttonElement = document.createElement('button');
        buttonElement.innerText = lastStep ? 'Finish' : 'Next';
        buttonElement.type = 'submit';
        formElement.appendChild(buttonElement);

        // Add an event listener for the form submission
        formElement.addEventListener('submit', (e) => {
            e.preventDefault();

            // Save the form data
            let formData = new FormData(e.target);
            for (let [name, value] of formData.entries()) {
                this.formData[name] = value;
            }

            // If it's the last step, call the nextStepCallback with the form data
            if (lastStep && this.nextStepCallback != null) {
                this.nextStepCallback(this.formData);
            }
            // Otherwise, go to the next step
            else {
                this.stepCounter++;
                this.drawForm(this.stepCounter);
            }
        });

        // Add the form element to the root element
        this.rootElement.appendChild(formElement);
    }



}