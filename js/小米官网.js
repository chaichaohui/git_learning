/**
 * Created by chaichaohui on 2017/10/25.
 */


var oTab = document.getElementById("tab");
var oContant = document.getElementById("contant");
var aLi = oTab.getElementsByTagName("li");
var aImg = oContant.getElementsByTagName("img");           //是HTMLCollection测集合，不是数组，不能push
var oPrev = document.getElementById("prev");
var oNext = document.getElementById("next");
var oArrow = document.getElementById("arrow");
var iIndex=0;   //一个变量用来表示当前正在显示的图片索引
var zIndex=7;
for(var i=0;i<aLi.length;i++){
    aLi[i].index=i;
    aLi[i].onmouseover = function () {
        iIndex=this.index;
        changeImg();
    };
};
function changeImg() {
    //改变li的背景颜色
    for(var i=0;i<aLi.length;i++){
        aLi[i].className = "";
    }
    aLi[iIndex].className="selected";
    //淡入淡出图片
    aImg[iIndex].style.opacity = 0;
    aImg[iIndex].style.zIndex = ++zIndex;
    oTab.style.zIndex = ++zIndex;
    oArrow.style.zIndex = ++zIndex;
    animate(aImg[iIndex],{
        opacity:100
    });
};
oPrev.onclick = oNext.onclick = function () {
    if(this === oPrev){
        iIndex--;
        if(iIndex == -1){
            iIndex = aImg.length-1;
        }
    }else {
        iIndex++;
        if(iIndex == aImg.length){
            iIndex = 0;
        }
    }
    changeImg();
}
oPrev.onselectstart = oNext.onselectstart = function(){
    return false;//阻止默认行为
};
setInterval(function () {
    oNext.onclick();
},1500);


















var oMiDan=document.getElementById("mi-dan");
var aDiv=oMiDan.getElementsByTagName("div");
var aSpan=oMiDan.getElementsByTagName("span");
var iIndex1 = 0;
for(var i=0;i<aSpan.length;i++){
    aSpan[i].index=i;
    aSpan[i].onclick = function () {
        iIndex1++;
        if(iIndex1 == aSpan.length){
            iIndex1=0;
        }
        for(var i=0;i<aSpan.length;i++){
            aDiv[i].className = "";
        }
        aDiv[iIndex1].className = "selected1";
    };
    aSpan[i].onselectstart = function () {
        return false;
    }
}
//        setInterval(function () {
//            aSpan[i].onclick();
//        },1000);

















var oTab2 = document.getElementById("tab2");
var aLi2 = oTab2.getElementsByTagName("li");
var oJiadianRow = document.getElementById("jiadian-row");
var aUl2 = oJiadianRow.getElementsByTagName("ul");
for(var i=0;i<aLi2.length;i++){
    aLi2[i].index = i;
    aLi2[i].onmouseover = function () {
        for(var i=0;i<aLi2.length;i++){
            aLi2[i].className = "";
            aUl2[i].className = "";
        }
        this.className = "selected2";
        aUl2[this.index].className = "selected2";
    }
}


















var oMask = document.getElementById('mask');
var oDialog = document.getElementById('dialog');
var oClose = oDialog.getElementsByTagName('span')[0];
oClose.onclick = function () {
    oMask.style.display = 'none';
    oDialog.style.display = 'none';
};

var oI11 = document.getElementById('i11');
oI11.onclick = function () {
    oMask.style.display = 'block';
    oDialog.style.display = 'block';
};
