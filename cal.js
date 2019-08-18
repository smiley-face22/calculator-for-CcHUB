function display(val){
    document.getElementById('display').value = val;

}
function shownum(pal){
    document.getElementById('display').value += pal;

}
function clr(){
    document.getElementById('display').value = "";
}
function equal(){
    try {display(eval(document.getElementById('display').value))
}
catch(e){
    display('Error');
}
}
function delt(){
    let valueNeeded = document.getElementById('display').value;
    let finalValueNeeded = valueNeeded.substr(0, valueNeeded.length - 1);
    document.getElementById('display').value=finalValueNeeded;
}
function cos(){
    document.getElementById('display').value = Math.cos(document.getElementById('display').value);
}
function sin(){
    document.getElementById('display').value = Math.sin(document.getElementById('display').value);

}
function tan(){
    document.getElementById('display').value = Math.tan(document.getElementById('display').value);

}
function sqrt(){
    document.getElementById('display').value = Math.sqrt(document.getElementById('display').value);

}