import { last } from "@angular/router/src/utils/collection";

export class Emp{
  public IdEmp:number;
   public FistName: string;
   public LastName: string;
  public Status:boolean;
  constructor
  ( 
    idemp:number,
    firstname:string,
    lastname:string,
    status:boolean
  )
  {
    this.IdEmp=idemp;
    this.FistName=firstname;
    this.LastName=lastname;
    this.Status=status;
  }
  }