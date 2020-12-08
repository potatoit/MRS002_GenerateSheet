class miAPI {
    public program: string;
    public programDescription: string;
    public transaction: string;
    public transactionDescription: string;
    public incomingFields: apiField[];
    public outgoingFields: apiField[];
}

class apiField {
    //public program: string;
    //public transaction: string;
    public fieldName: string;
    public fieldDescription: string;
    public length: string;
    public fieldType: string;
    public mandatory: string;

    constructor() {}

    public generateProcessRow() : any {
        if (this.mandatory === "1") {
            return (
                {
                    v: "yes",
                    i: true,
                    border: { bottom: {style: "medium", color: "000000"}},
                    fg: { fgColor: { rgb: 'FFFF5500' } }
                }
            );
        }
        else {
            return (
                {
                    v: "yes",
                    i: true,
                    border: { bottom: { style: "medium", color: "000000" } }
                }
            );
        }
    }

    public generateDescriptionRow() : any {
        if (this.mandatory === "1") {
            return (
                {
                    v: this.fieldDescription + " (" + this.fieldType + ":" + this.length + ")",
                    i: true,
                    fg: { fgColor: { rgb: 'FFFF5500' } }
                }
            );
        }
        else {
            return (
                {
                    v: this.fieldDescription + " (" + this.fieldType + ":" + this.length + ")",
                    i: true
                }
            );
        }
    }


    public generateTitleRow() : any {
        if (this.mandatory === "1") {
            return (
                {
                    v: this.fieldName,
                    b: true,
                    fg: { fgColor: { rgb: 'FFFF5500'}}
                }
            );
        }
        else {
            return (
                {
                    v: this.fieldName,
                    b: true
                }
            );
        }
    }


}


