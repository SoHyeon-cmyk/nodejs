//인터페이스와 클래스

// type CharacterInterface {}
interface CharacterInterface {
  name:string;
  moveSpeed:number
  move():void
}

class Character implements CharacterInterface{
  name:string;
  moveSpeed: number;
  extra:string

  constructor(name:string,moveSpeed:number,extra:string){
    this.moveSpeed=moveSpeed
    this.name=name
    this.extra=extra
  }
  move():void{
    console.log(`${this.moveSpeed} 속도로 이동`)
  }
}

const people = new Character ('졸려요',2,'행인1')
console.log(people)