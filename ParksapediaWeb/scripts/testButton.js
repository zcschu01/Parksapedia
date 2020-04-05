function doTest(){
    var tag = document.createElement("li");
    var text = document.createTextNode("Hello");
    tag.appendChild(text);
    var element = document.getElementById("park-name");
    element.appendChild(tag);
}