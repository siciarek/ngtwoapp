import {Control} from '@angular/common';

export class CustomValidators {

    static pesel(c: Control) {

        let val = c.value.trim();
        val = val.length === 0 ? null : val;

        if(val === null) {
            return null;
        }

        let PESEL_REGEXP = new RegExp('^\\d{11}$');

        return PESEL_REGEXP.test(c.value) ? null : {
            validatePesel: {
                valid: false
            }
        };
    }
}
