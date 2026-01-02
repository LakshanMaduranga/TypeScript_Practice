import type  {TdataType} from "./dataType"

const UData:TdataType[]=[
    {
        name:"Kamal",
        age:30,
        password:"abcd",
        email:"string"
    },
    {
        name:"Nimal",
        age:30,
        password:"efgh",
         email:"string"
    },
    {
        name:"Sunil",
        age:30,
        password:"ijkl",
        email:"string"
    }
]


function login(username:string,password:string){

    if(UData[0]?.name == username){
        if(UData[0].password==password){
            console.log("Kamal Successfully loggedin")
        }
        else{
            console.log("Kamal password is wrong")
        }

    }
    if(UData[1]?.name==username){
         if(UData[1]?.password==password){
            console.log("Nimal Successfully loggedin")
        }
        else{
            console.log("Nimal password is wrong")
        }

    }
    if(UData[2]?.name==username){
         if(UData[2]?.password==password){
            console.log("Sunil Successfully loggedin")
        }
        else{
            console.log("Sunil password is wrong")
        }

    }
    else{
        console.log("No user found")
    }

}

login("Suni","ijkl")