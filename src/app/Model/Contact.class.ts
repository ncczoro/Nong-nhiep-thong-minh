
export class Contact {
  public IdContact: number;
  public Address1: string;
  public Address2: string;
  public Email1: string;
  public Email2: string;
  constructor
    (
    idContact: number,
    address1: string,
    address2: string,
    email1: string,
    email2: string
    ) {
    this.IdContact = idContact;
    this.Address1 = address1;
    this.Address2 = address2;
    this.Email1 = email1;
    this.Email2 = email2;
  }
}