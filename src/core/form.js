import { Validators } from "./validators";

export class Form {
    constructor($form, controls) {
        this.$form = $form;
        this.formData = new FormData(this.$form)
        this.controls = controls;

        this.errors = {};
    }

    values() {
        let values = {};
        for(let [name, value] of this.formData) {
            values[name] = value;
        }
        return values;
    }

    validate() {
        const isValid = this.isValid();
        
        if (isValid) {
            this.clearErrors();
        } else {
            this.showErrors();
        }

        return isValid;
    }

    isValid() {
        let isFormValid = true;
        this.errors = {};

        Object.keys(this.controls).forEach(control => {
            const validators = this.controls[control];

            let isValid = true;
            validators.forEach(validator => {
                isValid = validator(this.formData.get(control)) && isValid;
                
                if (isValid === false) {
                    this.errors[control] = true; 
                }
            });

            isFormValid = isFormValid && isValid;
        });

        return isFormValid;
    }

    showErrors() {
        if (!this.errors) {
            return;
        }

        Object.keys(this.errors).forEach(control => {
            if (this.$form[control]) {
                this.showError(control, 'Необходимо заполнить поле корректно.');
            }
        });
    }

    showError(control, message = '') {
        this.clearError(control);
        
        const $control = this.$form[control];

        if ($control) {
            const errorMessage = `<p class="validation-error">${message}</p>`;
            $control.classList.add('invalid');
            $control.insertAdjacentHTML('afterend', errorMessage);
        }
    }

    clearErrors() {
        const $invalidControls = this.$form.querySelectorAll('.invalid');
        
        Array.from($invalidControls).forEach($control => {
            let control = $control.name;
            this.clearError(control);
        })
    }

    clearError(control) {
        const $control = this.$form[control];

        if ($control) {
            $control.classList.remove('invalid');
            if ($control.nextSibling) {
                $control.closest('.form-control').removeChild($control.nextSibling);
            }
        }
    }
}