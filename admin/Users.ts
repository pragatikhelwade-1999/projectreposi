export class signupUsers
{
    id :string;
    name :string;
    surname : string;
    dtofbth :string;
    mobile :string;
    email : string;
    password : string;

    constructor(id: string,name: string,surname: string,dtofbth: string,mobile: string,email: string,password: string){
        this.id =id;
        this.name =name;
        this.surname =surname;
        this.dtofbth = dtofbth;
        this.mobile = mobile;
        this.email = email;
        this.password = password
    }
}

export class ContactUs {
    id: string;
    name: string;
    email: string;
    subject: string;


    constructor(id: string, name: string, email: string, subject: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.subject = subject;
    }
}

export class feedback {
    id: string;
    rate: string;
    Rat: string;
   taste: string;
   textinput:string

    constructor(id: string,rate: string,Rat: string, taste: string ,textinput:string) {
        this.id = id;
       this.rate =rate;
       this.Rat=Rat;
       this.taste=taste;
       this.textinput=textinput;
    }
}


