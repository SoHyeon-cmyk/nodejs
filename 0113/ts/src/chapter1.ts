//원시 타입과 리터럴
//number,string,boolean,null,undefined

//1.number타입
let num1:number = 123;
let num2:number = -123;
let num3:number = 0.123;
let num4:number =- 0.123;
let num5:number =- Infinity;
let num6:number =- -Infinity;
let num7:number =- NaN;

//2.String타입
let str1:string = "hello"
let str2:string = 'hello';
let str3:string = `hello`;
let str4:string = `hello ${str1}`;

//3.boolean타입
let bool1:boolean = true;
let bool2:boolean = false;

//4.null타입
let nul1:null = null;

//5.undefined
let unde1:undefined = undefined;

//리터럴 타입
let numA:10 = 10 //무조건 대입한 값만 와야함

//배열과 튜플
let numArr = [1,2,3]
let boolArr = [true,false]
let boolArr1:Array<boolean> = [true,false]
let multArr:(number | string)[]= [1,"hello"]
let doubleArr:number[][]= [[1,2,3],[4,5]]

//튜플 순서가 바뀌면 안되는 배열에 쓰임
let tup1: [number,number] = [1,2]
let tup2: [number,string,boolean] = [1,"hello",true]
tup1.push(1)
tup1.push(2)
tup2.push(3)
tup2.push('hello')
tup2.push(true)

const users :[string,number][] =[
  ["졸리다",1],
  ["졸려",2],
  ["졸리네",3],
  ["졸려요",4],
  ["졸리다니까",5]
]

//객체타입

//객체 리터럴타입 
let user : {
  id?:number,
  name:string
} = {
  
  name:"졸려"
}

user.name

let cat : {
  name:string,
  color:string
}={
  name:'meow',
  color:"black"
}

let user2 : {
  id:number,
  name:string
}={
  id:1,
  name:'tic toc'
}

//읽기전용

let user3:{
  id?:number,
  readonly name :string
} = {
  id:1,
  name:"개졸려"
}