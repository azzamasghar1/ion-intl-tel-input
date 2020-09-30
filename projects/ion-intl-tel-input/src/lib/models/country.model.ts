export interface CountryI {
    name: string;
    isoCode: string;
    dialCode: string;
    flagClass: string;
    priority: number;
    placeholder: string;
    areaCodes?: Array<string>;
}
