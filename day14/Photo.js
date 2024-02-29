/*썸네일과 큰 이미지에 사용될 포토 오브젝트 */
class Photo{
    constructor(container,src,x,y,width,height){
        this.container=container;
        this.img=document.createElement("img");
        this.src=src;
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        
        this.img.src = this.src;
        this.msg="연습"; //클릭이벤트 연결시 연습용
    
        //style
        this.img.style.position="absolute";
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
        
        this.img.style.width=this.width+"px";
        this.img.style.height=this.height+"px";

        //이미지에 보더 적용
        //box에 의하면 border, margin, padding 등은 크기에 영향
        this.img.style.border="2px solid red";
        this.img.style.boxSizing="border-box";

        this.container.appendChild(this.img);


        //이미지에 클릭 이벤트 연결
        $(this.img).click(()=>{ 
            let index = thumbArray.indexOf(this);    
            console.log("당신이 선택한 포도는 배열의 인덱스는 ", index);
            //ES6부터 등장한 화살표 함수(=>), 바깥쪽 상위 scope 영역을 접근
            //이벤트 처리 영역에서는 this의 scope는 이벤트를 일으킨 객체를 의미
            //aide 안에 있는 pic이라는 이미지 객체의 src를 
            //동일하게 처리 현재 클릭한 썸네일과
            //문서의 속성을 attr, 객체의 속성을 property
            $("#pic").attr("src", this.src); //큰 썸네일 보여주기    
            
            //현재 클릭된  객체가 배열의 어디에 존재하는지 알 수 있다면
            //같은 index를 갖는 movie.marvel 배열로 부터 각종 정보를 가져올 수 있다. 
            let obj=movie.marvel[index]; //마블 배열의 영화 정보 객체 하나 추출
            let tag="개봉일: "+obj.release_year+"<br>"
            tag += "부제목: "+obj.phase
            $("#content").html(tag); //내용 보여주기

        });
    }
}