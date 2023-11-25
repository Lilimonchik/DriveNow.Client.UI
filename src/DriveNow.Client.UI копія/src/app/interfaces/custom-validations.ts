import {AbstractControl, ValidationErrors} from "@angular/forms";
export function NumberOrEmailValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if (!value) {
        return null; // No validation error if value is empty
    }

    // Regular expression to match a number or an email
    const numberRegex = /^[0-9,+]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!numberRegex.test(value) && !emailRegex.test(value)) {
        return { numberOrEmail: true }; // Validation error if neither number nor email
    }

    return null; // No validation error
}

export function validate(control: AbstractControl): ValidationErrors | null {
    const originalControl = control.root.get('confirmPassword');
    if (originalControl && control.value !== originalControl.value) {
        return { confirmPassword: true };
    }
    return null;
}