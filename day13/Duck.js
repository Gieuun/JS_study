/*
그냥 새를 상속받게 될 즉 새라는 종류의 하위 종인 오리를 정의
oop에서 부모는 super (parents는 디자인적 요소에서 사용)
자식은 sub(디자인 요소에서는 child)
*/


class Duck extends Bird{
    constructor(color, age){        
        //부모의 탄생(초기화) 보다
        //앞서는 자식의 코드는 인정받지 못함. 불가능!
        //super() 생성자 호출 이전의 코드는 에러..!!
        
        //부모님 먼저 태어나세요
        super(color, age, name);
        this.name="오리";

        console.log("im a duck");
    }
}