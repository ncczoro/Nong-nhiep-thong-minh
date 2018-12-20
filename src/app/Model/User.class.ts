export class User{
    public ID:number;
    public UserName: string;
    public Password: string;
    public Address: string;
    public Email: string;
    public Phone: number;
    public Status: boolean;
    public CreatDate:string;

    constructor(
        id: number,
        username: string,
        password: string,
        address: string,
        email: string,
        phone: number,
        status: boolean,
        creatdate:string)
    {
       this.ID=id;
       this.UserName=username;
       this.Password=password;
       this.Address=address;
       this.Email=email;
       this.Phone=phone;
       this.Status=status;
       this.CreatDate=creatdate;
    }
}