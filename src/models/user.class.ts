export class User {
  firstName: string;
  lastName: string;
  email: string;
  birthDate: number;
  street: string;
  zipCode: number;
  city: string;
  todos: [];
  uid?: string;
  displayName?: string;
  photoURL?: string;
  providerId?: string;
  phoneNumber?: string;
  registeredUser?: boolean;

  constructor(obj?: any) {
    this.firstName = obj ? obj.firstName : '';
    this.lastName = obj ? obj.lastName : '';
    this.email = obj ? obj.email : '';
    this.birthDate = obj ? obj.birthDate : '';
    this.street = obj ? obj.street : '';
    this.zipCode = obj ? obj.zipCode : '';
    this.city = obj ? obj.city : '';
    this.todos = obj ? obj.todos : [];
    this.uid = obj ? obj.uid : '';
    this.displayName = obj ? obj.displayName : '';
    this.photoURL = obj ? obj.photoURL : '';
    this.providerId = obj ? obj.providerId : '';
    this.phoneNumber = obj ? obj.phoneNumber : '';
    this.registeredUser = obj ? obj.registeredUser : false;
  }

  public toJSON() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      birthDate: this.birthDate,
      street: this.street,
      zipCode: this.zipCode,
      city: this.city,
      todos: this.todos,
      uid: this.uid,
      displayName: this.displayName,
      photoURL: this.photoURL,
      providerId: this.providerId,
      phoneNumber: this.phoneNumber,
      registeredUser: this.registeredUser,
    };
  }
}
