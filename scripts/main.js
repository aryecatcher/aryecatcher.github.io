let myImage = document.querySelector("img");

myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if(mySrc === "../images/firefox-icon.png"){
        myImage.setAttribute("src", "../images/firefox2.jpg");
    }else{
        myImage.setAttribute("src","../images/firefox-icon.png");
    }
};

//设置个性化欢迎信息
//获取新按钮和标题的引用
document.querySelector("html").addEventListener("click", function () {
    alert("别戳我，我怕疼。");
  });
let myButton = document.querySelector("bottom");//注意别打错字
let myHeading = document.querySelector("h1");


function setUserName(){
    let myName = prompt("请输入你的名字.");
    if(!myName|| myName === null){      //这里的!myName表示没有值或者值为NULL
        setUserName();
    }else{
    localStorage.setItem("name",myName);
    myHeading.textContent = "Mozilla is cool." + myName;
}
}

//初始化代码
if(!localStorage.getItem("name")) {
    setUserName();
}else{
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla is cool," + storedName;
}


myButton.onclick = function () {
    setUserName();
};
  