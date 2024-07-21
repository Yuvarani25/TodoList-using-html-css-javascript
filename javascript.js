function add()
{
    var add=document.getElementById("getinput")
    var input=document.getElementById("input")
        var litem=document.createElement("li")
        litem.innerHTML=input.value+" "+"<button onclick='del(event)'>Delete</button>"
        if(input.value==null||input.value=="")
        {
            alert("Enter some text");
        }
        else
        {
        add.append(litem);
        }
}

function del(event)
{
    event.target.parentElement.remove();
}
