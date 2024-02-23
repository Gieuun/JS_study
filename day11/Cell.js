/*
달력의 셀을 정의
*/
class Cell{
    constructor(container, x, y, width, height, content, icon){
        this.container=container;
        this.div=document.createElement("div");
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.content=content; //셀에 채워질 내용
        this.img=document.createElement("img"); //아이콘 넣기
        this.img.src=icon; //icon은 이미지의 경로임
        
        //icon의 스타일
        this.img.style.width=15+"px";

        if(icon.length > 0){ //아이콘의 이미지 경로 문자열이 0이 아니라면(존재한다면)
            this.div.appendChild(this.img);
        }

        //style 
        this.div.style.border="1px solid gray";
        this.div.style.position="absolute";
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";

        this.div.style.width=this.width+"px";
        this.div.style.height=this.height+"px";

        //셀에 표시될 텍스트 정보 
        this.div.innerText = this.content;
        this.container.appendChild(this.div);
    }

    setContent(content){
        //물리량 변화 
        this.content=content; 

        //렌더링
        this.div.innerText=this.content;
    }
}