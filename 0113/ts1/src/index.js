/* let workwomanA={
  name:"조지현",
  age:20,
  address:"종로구",
  introduce() {
    console.log("안녕 나는 누구야")
  }
}
let workwomanB={
  name:"조현지",
  age:30,
  address:"영등포구",
  introduce() {
    console.log("안녕 나는 ㅋㅋㅋ")
  }
} */
  class Woman {
    name;
    age;
    address;
  
    //생성자
    constructor(name,age,address ){
      this.name=name;
      this.age=age;
      this.address=address
    }
    introduce() {
      console.log(`안녕 ${this.name} 나야`)
    }
  }
  const workwomanA = new Woman("조지현",20, "종로구");
  const workwomanB = new Woman("조현지" ,21, "영등포구");
  workwomanB.introduce()
  console.log(workwomanA)


  
  
  class Works extends Woman {
    workJob;
  
    constructor(workJob,name,age,address){
      super(name,age,address);
      this.workJob=workJob;
    }
  }