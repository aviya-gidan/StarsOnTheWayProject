import { type } from "os"
import internal from "stream"

export type Child = {
    id?: number,
    name:string,
    userName:string,
    password: string,
    address:string,
    birthDate:Date,
    guardianName:string,
    guardianPhoneNum:string,
    mail:string,
    phoneNum:string
}
export type LoginChildType={
  id?: number,
  mail:string |undefined |null,
  password:string |undefined |null
}
export type AuthChildType={
  token:string,
  child:Child
}
// export type Counselor={
//     id?:number,
//     name:string ,
//     phoneNum:string,
//     mail:string
// }

export type Responses={
  id?:number,
  comment:string,
  userId:number
}

export type Story={
  id?:number,
  userId:number,
  storyOfChild:string,
  uploadDate:Date,
}

export type StoryWithResponses = Story & {
  responses: Responses;
}

export type  Workshop={
    
  id:number ,
  name:string ,
  length:number ,
  description:string ,
  nameOfCounselor :string,
  hour: number,
  date:Date ,
  capacity:number ,
  numOfKids:number,
  address :string
}