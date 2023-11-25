import {Sexs} from "./Enums/Sexs";
import {Langueges} from "./Enums/Langueges";

export class UserInformation{

   uerId: string = '';

   firstName: string = '';

    secondName: string = '';

    number: number = 0;

    email: string = '';

    password: string = '';

    birthday: string = '';

    // @ts-ignore
    sex: Sexs;

    // @ts-ignore
    language: Langueges;

}