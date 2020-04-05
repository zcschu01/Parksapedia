function doTest(){
    var element = document.getElementById("park-name");
    var tag = document.createElement("li");
    var text = document.createTextNode("Hello");
    tag.appendChild(text);
    element.appendChild(tag);
}