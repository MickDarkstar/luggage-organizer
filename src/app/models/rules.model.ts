export interface IValidation {
    message: string;
    isValid(): boolean;
    isInvalid(): boolean;
}

export class Validation implements IValidation {
    message: string;
    private valid: boolean;
    isValid() {
        return this.valid;
    }
    isInvalid() {
        return !this.valid;
    }
}
