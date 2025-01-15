//객체 타입의 호환성
let num1 : number = 10
let num2 : 10 = 10

num1 = num2 //업캐스팅 O
// num2 = num1; 다운캐스팅 x

type Animal = {
  name: string;
  color:string;
}
type Dog = {
  name: string;
  color:string;
  breed:string;
}
// type Cat = {
  //   name: string;
  //   color:string;
  //   breed:string;
  // }

let animal : Animal = {
    name: "cat",
    color:"black"
  }

let dog : Dog = {
    name: "댕댕이",
    color:"gold",
    breed:"골드 리트리버"
  }

  animal = dog //업스케일

  // dog = animal 다운스케일(오류)

  type Book = {
    name:string;
    price:number;
  }
  
  type ProgramingBook = {
    name:string;
    price:number;
    skill:string
  }
  
  let book : Book = {
    name:"요리책",
    price:5000
  }

let programimgbook : ProgramingBook = {
    name:'쉽게배우는 파이썬',
    price:25000,
    skill:'파이썬'
  }

  book = programimgbook
  // programimgbook = book 다운 스케일(오류)

  //타입추론

  let a = 10;
  let b = "sss";
  let c = {
    id:1,
    name:"house",
    profile:{
      nick:"home",
    },
    urls : ['https://sss']
  }

  let {id, name, profile} = c 
  function fun() {
    return ('hello')
  }

  let d;
  d=10
  d.toFixed();
  d.toUpperCase()
