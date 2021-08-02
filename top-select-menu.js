var top_selectField = document.getElementById("top_selectField");
var top_selectText = document.getElementById("top_SelectText");
var top_options= document.getElementsByClassName("top_options")
var top_list = document.getElementById("top_list")
var top_arrowIcon = document.getElementById("top_arrowIcon")


top_selectField.onclick = function (){
    top_list.classList.toggle("top-hide");
    top_arrowIcon.classList.toggle("top_rotate")
}
for (Option of top_options){
    Option.onclick=function(){
        top_selectText.innerHTML=this.textContent;
        top_list.classList.toggle("top-hide");
        top_arrowIcon.classList.toggle("top_rotate");
    }
}
