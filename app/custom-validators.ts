import {Control} from '@angular/common';

export class CustomValidators {

    static pesel(c: Control) {

        if(c.value === null || c.value.length === 0) {
            return null;
        }

        let PESEL_REGEXP = new RegExp('^\\d{11}$');

        return PESEL_REGEXP.test(c.value) ? null : {
            pesel: {
                valid: false
            }
        };
    }
}
