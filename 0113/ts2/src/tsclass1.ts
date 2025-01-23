//접근제어자
//public:모든 범위에서 접근가능. 아무것도 없으면 public
//private : 클래스 내부에서만 접근 가능
//proteced: 클래스 내부 또는 파생 클래스 내부에서만 접근가능

//1.public

class Workwoman {
  //필드
  name:string;
  protected age:number;
  position:string;

  constructor(name:string,age:number,position:string){
    this.name=name
    this.age=age
    this.position=position
  }
  fun(){
    this.name;
    this.age;
  }
}

// const workwomenE = new Workwoman('김소현',24,'졸려요')
// workwomenE.name="뜌따아뜌따따따!"
// workwomenE.age=1
// workwomenE.position="아기"

