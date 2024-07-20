function add(){
    var message=document.getElementById("add");
    message.innerText="add an element";
}
function remove(){
    let dele=document.getElementsByTagName("input")[1];
    let btn=document.getElementById("del");
    dele.remove();
    btn.remove();
}