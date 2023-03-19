import { Form } from './form/form.js';

const rootElement = document.querySelector('.form-container');
const stepCounter = 0;
const form = new Form(rootElement, stepCounter);

document.addEventListener("DOMContentLoaded", () => {
    form.drawForm(stepCounter);

    form.nextStepCallback = function(formData) {
        console.log(formData);
    }
});