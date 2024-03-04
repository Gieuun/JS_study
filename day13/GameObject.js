/*
GameObject 클래스는 게임에 등장하는 모든~~~~~ 객체들의 최상위 객체이다 
따라서 앞으로 정의될 주인공, 적군, 아이템, 총알, 대포 등등.. 모든 클래스가 이 클래스를
상속받아서 코드를 구현하면 중복된 코드를 피해갈 수 있고, 코드 작성 시간을 단축시킬 수 있슴
*/
class GameObject{
    constructor(container, src, x, y, width, height,velX,velY){
        this.container=container;
        this.img=document.createElement("img");
        this.src=src;
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.velX=velX;
        this.velY=velY;

        this.img.src=this.src;

        //style
        this.img.style.position="absolute";
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";

        this.img.style.width=this.width+"px";
        this.img.style.height=this.height+"px";

        //부착 
        this.container.appendChild(this.img);
    }

    //sj는 완벽한 oop가 아니기 때문에, 메서드의 몸체를 제거하는
    //즉, 불완전한 메서드로 만드는 기법을 지원하지 않는다
    
    //내용을 작성하지 않아야 하는 이유? 미래의 어떤 child가 정의될지 최상위 객체 
    //입장에서는 예측할 수 업고, 해서도 안된다.
    //몸체 없는 메서드를 가르켜 oop에서는 구체적이지 않다고 하여 추상메서드라 한다
    move(){
        //물리량변화 
        this.x +=this.velX;
        this.y +=this.velY;

        //그래픽 렌더링 
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
    }

}