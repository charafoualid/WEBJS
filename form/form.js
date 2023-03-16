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
            stepName: "Stap 1",
            fields: [{ label: "Length", name: "length", type: "text", required: "true" }, { label: "Width", name: "width", type: "text", required: "true" }]
        },
        {
            stepName: "Stap 2",
            fields: [{
                label: "Interval (in seconds)",
                name: "interval",
                type: "number",
                required: "true"
            }]
        },
        {
            stepName: "Stap 3",
            fields: [{
                label: "Type",
                name: "type",
                type: "select",
                options: ["Cold Transport", "Breakable Transport", "General Transport", "Pallet Transport"],

                required: "true"
            }]
        }
    ];

    formData = {};
    nextStepCallback = null;

    constructor(rootElement, stepCounter) {
        this.rootElement = rootElement;
        this.stepCounter = stepCounter;
    }

    drawForm(stepCounter) {
        //variables
        this.rootElement.innerHTML = '';
        let formElement = document.createElement('form');
        let step = this.steps[stepCounter];

        //title
        let stepNameElement = document.createElement('h2');
        stepNameElement.innerText = step.stepName;
        formElement.appendChild(stepNameElement);

        //bullets each step
        let stepBulletsElement = document.createElement('div');
        stepBulletsElement.classList.add('step-bullets');
        let nrOfBullets = this.steps.length;
        for (let i = 0; i < nrOfBullets; i++) {
            let bulletElement = document.createElement('div');
            bulletElement.classList.add('bullet');
            if (i <= stepCounter) {
                bulletElement.classList.add('active');
            }
            stepBulletsElement.appendChild(bulletElement);
        }
        formElement.appendChild(stepBulletsElement);


        //create inputfield
        step.fields.forEach(field => {
            let labelElement = document.createElement('label');
            labelElement.innerText = field.label;

            let inputElement = document.createElement('input');
            inputElement.setAttribute('type', field.type);
            inputElement.setAttribute('name', field.name);
            inputElement.setAttribute('required', field.required);
            formElement.appendChild(labelElement);
            formElement.appendChild(inputElement);
        });

        let lastStep = stepCounter >= this.steps.length - 1;
        let buttonElement = document.createElement('button');

        buttonElement.innerText = lastStep ? 'Finish' : 'Next';
        buttonElement.type = 'submit';
        formElement.appendChild(buttonElement);
        formElement.addEventListener('submit', (e) => {
            e.preventDefault();
            this.nextStep(e.target);
        });
        this.rootElement.appendChild(formElement);
    }
    nextStep(form) {
        console.log(form.value);
        let formData = new FormData(form);
        for (let [name, value] of formData.entries()) {
            this.formData[name] = value;
        }

        this.stepCounter++;
        this.drawForm(this.stepCounter);
    }




}