let User : {
  birth:string,
  location:string
};

//인덱스 시그니처, 객체 타입을 유연하게 정의할수 있도록 도와주는 특수한 문법
type CountryCodes ={
  korea:string;
  UniteState : string;
}
let countryCodes : CountryCodes = {
  korea : "ko",
  UniteState:"us"
}

//열거형 enum
enum Role {
  ADMIN=10,
  GUEST=2,
  USER
}

const user5 = {
  name:"sdf",
  role:Role.ADMIN, //10
}

const user6={
  name:"sdfs",
  role:Role.USER //11
}

//any unknown
//any

let anyVar:any = 10;
anyVar='javascript',
anyVar=true

//void never