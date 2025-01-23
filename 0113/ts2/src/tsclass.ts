const workwomen = {
  name: "졸려요",
  age:24,
  position:"front-develpoer",
  work(){
    console.log("월 급 루 팡")
  }
  
}

class Workwomen {
  name:string;
  age:number;
  position:string;
  
  constructor(name,age,position){
    this.name=name;
    this.age=age;
    this.position=position;
  }
  work(){
    console.log("월 급 루 팡")
  }
}




const workwomenA = new Workwomen("마라탕",20,"프론트개발자")
console.log(workwomenA)

class tiredwomen {
  name:string;
  age:number;
  status:string;
  constructor(name,age,status){
    this.name=name;
    this.age=age;
    this.status=status;
  }
  work(){
    console.log("환자")
  }
}



class ExcutiveOfficer extends Workwomen {
  officeNumber:number

  constructor(name:string,age:number,position:string,officeNumber:number){
    super(name,age,position)
    this.officeNumber=officeNumber;
  }
}
const workwomenC = new ExcutiveOfficer ("김소현",23,"피곤함",1)



const tiredwomenA = new tiredwomen("김소현",23,"피곤함")
console.log(tiredwomenA)

