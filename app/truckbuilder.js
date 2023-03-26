import { Grid } from './grid.js';

export class TruckBuilder {
    parentEl;
    gridEl;

    constructor(parentEl, gridEl) {
        this.parentEl = parentEl;
        this.gridEl = gridEl;
        this.stepcounter = 0;

        this.steps = [{
                stepName: "Stap 1",
                fields: [{
                    name: 'lengte',
                    type: 'number',
                    label: 'Lengte',
                    required: true
                }]

            },
            {
                stepName: "Stap 2",
                fields: [{
                    name: 'breedte',
                    type: 'number',
                    label: 'Breedte',
                    required: true
                }]

            },
            {
                stepName: "Stap 3",
                fields: [{
                    name: 'aankomst',
                    type: 'number',
                    label: 'Aankomst',
                    required: true
                }]

            },
            {
                stepName: "Stap 4",
                fields: [{
                    name: 'type',
                    type: 'select',
                    label: 'Type transport',
                    required: true,
                    options: ['Koud transport', 'Breekbaar transport', 'Algemeen transport', 'Pallets', 'Snelkoerier'],
                }]

            }
        ];

        this.drawStep(this.stepcounter);
    }

    drawStep(stepNr) {
        //div waar alles in komt
        this.parentEl.innerHTML = '';

        //maak form
        let step = this.steps[stepNr];
        let formEl = document.createElement('form');

        //maak titel
        let stepNameEl = document.createElement('h2');
        stepNameEl.innerText = step.stepName;
        formEl.appendChild(stepNameEl);

        //maak de kleine bolletjes
        let stepBulletsEl = document.createElement('div');
        stepBulletsEl.classList.add('step-bullets');
        let nrOfBullets = this.steps.length;
        for (let i = 0; i < nrOfBullets; i++) {
            let bulletEl = document.createElement('div');
            bulletEl.classList.add('bullet');
            if (i <= stepNr) {
                bulletEl.classList.add('active');
            }
            stepBulletsEl.appendChild(bulletEl);
        }
        formEl.appendChild(stepBulletsEl);

        //maak de input fields aan
        //Welke properties zijn input fields?
        step.fields.forEach(field => {
            let labelEl = document.createElement('label');
            labelEl.innerText = field.label;

            if (field.type === 'select') {
                let selectEl = document.createElement('select');
                selectEl.setAttribute('name', field.name);
                selectEl.setAttribute('required', field.required);

                field.options.forEach(option => {
                    let optionEl = document.createElement('option');
                    optionEl.setAttribute('value', option);
                    optionEl.innerText = option;
                    selectEl.appendChild(optionEl);
                });

                formEl.appendChild(labelEl);
                formEl.appendChild(selectEl);
            } else {
                let inputEl = document.createElement('input');
                inputEl.setAttribute('type', field.type);
                inputEl.setAttribute('name', field.name);
                inputEl.setAttribute('required', field.required);
                formEl.appendChild(labelEl);
                formEl.appendChild(inputEl);
            }
        });


        let isLastStep = stepNr >= this.steps.length - 1;

        let buttonEl = document.createElement('button');
        buttonEl.innerText = isLastStep ? 'Finish' : 'Next';
        buttonEl.type = 'submit'; //belangrijk
        formEl.appendChild(buttonEl);

        formEl.addEventListener('submit', (e) => {
            e.preventDefault();
            this.nextStep(e.target);
        });

        this.parentEl.appendChild(formEl);
    }

    addGrid(lengte, breedte) {
        // create table element
        const table = document.createElement('table');

        // create rows and cells
        for (let i = 0; i < lengte; i++) {
            const row = document.createElement('tr');
            for (let j = 0; j < breedte; j++) {
                const cell = document.createElement('td');
                row.appendChild(cell);
            }
            table.appendChild(row);
        }

        document.body.appendChild(table);

        this.gridEl.appendChild(table);
    }

    checkGridSize(width, height) {
        let Trucklength = height;
        let Truckwidth = width;

        if ((Trucklength < 5 || Trucklength > 10) || (Truckwidth < 5 || Truckwidth > 10)) {
            throw new Error("Lengte en breedte moet tussen de 5 & 10 zijn!");
        }
    }

    CreateErrorMessage(string) {
        // Check if an error message already exists
        const existingErrorMessage = document.getElementById('error');
        if (existingErrorMessage) {
            existingErrorMessage.remove(); // Remove the existing error message
        }

        this.errorContainer = document.createElement('p');
        this.errorContainer.id = "error";
        this.errorContainer.style.color = 'red';
        this.errorContainer.style.width = '100px';
        this.errorContainer.innerText = string;
        return this.errorContainer;
    }




    nextStep(form) {

        //constructie/manier om van een element de data op te slaan
        let formdata = new FormData(form);
        //een one-liner om te loopen door alle data
        const data = Object.fromEntries(formdata.entries());
        //merge de data in een line na elke stap
        this.truckdata = {...this.truckdata, ...data };

        try {
            this.checkGridSize(this.truckdata.breedte, this.truckdata.lengte);
        } catch (error) {
            form.appendChild(this.CreateErrorMessage("Lengte en breedte moet tussen de 5 & 10 zijn!"));
            return;
        }

        console.log(this.truckdata)
        this.stepcounter++;

        if (this.stepcounter >= this.steps.length) {

            console.log(form);

            this.stepcounter = 0;
            this.drawStep(this.stepcounter);
            this.addGrid(this.truckdata.lengte, this.truckdata.breedte);

        } else {
            this.drawStep(this.stepcounter);
        }
    };
}