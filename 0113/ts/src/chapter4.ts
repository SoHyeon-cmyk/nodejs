let a : unknown = 1

//잘못된 업캐스팅 경우
let unknownValue : unknown;
// let a : number = unknownValue;  오류
// let i : string = unknownValue;  오류



//다운캐스팅
let b : unknown = "hello";
let c : unknown = null;
let d : unknown = false;
let e : unknown = undefined;
let f : unknown = [];
let g : unknown = {};
let h : unknown = ()=>{};

function errorFun() : never {
  throw new Error() 
}

//never 

let neverValue : never;

//never는 웬만하면 업캐스팅 가능
let j: number = neverValue;
let k: {} = neverValue;

//재할당 및 값을 담지 않는 타입은 업캐스팅 불가
// let l : never = 1 
// let m : void = 1 

//void 는 재할당하면 안되는 타입
function noReturn() : void {
  console.log('so tired') 
  // return undefined; 서브타입반환은 에러x
  // return Number; 오류
}

//any는 업캐스팅, 다운캐스팅 모든게 가능함
let n : any;
let o :number = n;
let p :string = n;
let q :{} = n;

n = o