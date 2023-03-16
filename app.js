import { Form } from './form/form.js';

const rootElement = document.querySelector('.form-container');
const form = new Form(rootElement, stepCounter);
form.drawForm(0);

form.nextStepCallback = function(formData) {
    console.log(formData);
}