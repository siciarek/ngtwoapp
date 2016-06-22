import { Control, Validators } from '@angular/common';

export class CustomValidators extends Validators {

    static gender(c: Control) {

        let gender: string[] = ['unknown', 'male', 'female'];

        return (gender.indexOf(c.value) !== -1)
            ? null
            : { enum: { valid: false } };
    }

    static pesel(c: Control) {

        if(c.value === null || c.value.length === 0) {
            return null;
        }

        let PESEL_REGEXP = new RegExp('^\\d{11}$');

        return PESEL_REGEXP.test(c.value)
            ? null
            : { pesel: { valid: false } };
    }
}
