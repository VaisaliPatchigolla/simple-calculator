function add(){
      let a = parseInt(document.getElementById("value1").value);
      let b = parseInt(document.getElementById("value2").value);
      let c = a+b;
      document.getElementById("answer1").innerHTML="Result is " +c;
}
function sub(){
    let a = parseInt(document.getElementById("value1").value);
    let b = parseInt(document.getElementById("value2").value);
    let c = a-b;
    document.getElementById("answer1").innerHTML="Result is " +c;
}
function multiply(){
    let a = parseInt(document.getElementById("value1").value);
    let b = parseInt(document.getElementById("value2").value);
    let c = a*b;
    document.getElementById("answer1").innerHTML="Result is " +c;
}
function div(){
    let a = parseInt(document.getElementById("value1").value);
    let b = parseInt(document.getElementById("value2").value);
    let c = a/b;
    document.getElementById("answer1").innerHTML="Result is " +c;
}
function mod(){
    let a = parseInt(document.getElementById("value1").value);
    let b = parseInt(document.getElementById("value2").value);
    let c = a%b;
    document.getElementById("answer1").innerHTML="Result is " +c;
}