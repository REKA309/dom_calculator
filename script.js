const mainh=document.getElementById("con");
const desc=document.createElement("p");
desc.innerText="Calculator used for arthimetic operations";
desc.setAttribute("id","description")
mainh.append(desc);
const main=document.getElementById("f1");
const title=document.createElement("div");
main.append(title);
title.setAttribute("class","parent");
const child1=document.createElement("div");
const child2=document.createElement("div");
child1.setAttribute("class","row"); 
child1.setAttribute("id","child1")
child2.setAttribute("class","row"); 
child2.setAttribute("id","child2")
title.append(child1,child2);
const col1=document.createElement("div");
col1.setAttribute("class","col-12");
child1.append(col1);
const ipbar=document.createElement("input");
ipbar.setAttribute("type","text");
ipbar.setAttribute("id","result");
ipbar.setAttribute("name","answer");
ipbar.setAttribute("value","");
ipbar.setAttribute("placeholder","Enter number")
col1.append(ipbar);
const c1=document.createElement("div");
const c2=document.createElement("div");
const c3=document.createElement("div");
const c4=document.createElement("div");
const c5=document.createElement("div");
const c6=document.createElement("div");
const c7=document.createElement("div");
const c8=document.createElement("div");
const c9=document.createElement("div");
const c10=document.createElement("div");
const c11=document.createElement("div");
const c12=document.createElement("div");
const c13=document.createElement("div");
const c14=document.createElement("div");
const c15=document.createElement("div");
const c16=document.createElement("div");
const c17=document.createElement("div");
const c18=document.createElement("div");
const c19=document.createElement("div");
c1.setAttribute("class","col-3");
c1.setAttribute("id","col1");
c2.setAttribute("class","col-3");
c2.setAttribute("id","col2");
c3.setAttribute("class","col-3");
c3.setAttribute("id","col3");
c4.setAttribute("class","col-3");
c4.setAttribute("id","col4");
c5.setAttribute("class","col-3");
c5.setAttribute("id","col5");
c6.setAttribute("class","col-3");
c6.setAttribute("id","col6");
c7.setAttribute("class","col-3");
c7.setAttribute("id","col7");
c8.setAttribute("class","col-3");
c8.setAttribute("id","col8");
c9.setAttribute("class","col-3");
c9.setAttribute("id","col9");
c10.setAttribute("class","col-3");
c10.setAttribute("id","col10");
c11.setAttribute("class","col-3");
c11.setAttribute("id","col11");
c12.setAttribute("class","col-3");
c12.setAttribute("id","col12");
c13.setAttribute("class","col-3");
c13.setAttribute("id","col13");
c14.setAttribute("class","col-3");
c14.setAttribute("id","col14");
c15.setAttribute("class","col-3");
c15.setAttribute("id","col15");
c16.setAttribute("class","col-3");
c16.setAttribute("id","col16");
c17.setAttribute("class","col-3")
c17.setAttribute("id","col17");
c18.setAttribute("class","col-5")
c18.setAttribute("id","col18");
c19.setAttribute("class","col-4")
c19.setAttribute("id","col19");
child2.append(c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16,c17,c18,c19);
const btn1=document.createElement("button");
btn1.setAttribute("type","button");
btn1.setAttribute("class","btn btn-warning")
// btn1.setAttribute("value","1");
btn1.innerText="1"
btn1.setAttribute("id","1")
btn1.setAttribute("onclick","form1.answer.value += '1'")
c1.append(btn1);
const btn2=document.createElement("button");
btn2.setAttribute("type","button");
btn2.setAttribute("class","btn btn-warning")
// btn2.setAttribute("value","2");
btn2.innerText="2"
btn2.setAttribute("id","2")
btn2.setAttribute("onclick","form1.answer.value += '2'")
c2.append(btn2);
const btn3=document.createElement("button");
btn3.setAttribute("type","button");
btn3.setAttribute("class","btn btn-warning")
btn3.innerText="3"
btn3.setAttribute("id","3")
// btn3.setAttribute("value","3");
btn3.setAttribute("onclick","form1.answer.value += '3'")
c3.append(btn3);
const btn4=document.createElement("button");
btn4.setAttribute("type","button");
btn4.setAttribute("class","btn btn-warning")
btn4.innerText="4"
btn4.setAttribute("id","4")
// btn4.setAttribute("value","4");
btn4.setAttribute("onclick","form1.answer.value += '4'")
c4.append(btn4);
const btn5=document.createElement("button");
btn5.setAttribute("type","button");
btn5.setAttribute("class","btn btn-warning")
// btn5.setAttribute("value","5");
btn5.innerText="5"
btn5.setAttribute("id","5")
btn5.setAttribute("onclick","form1.answer.value += '5'")
c5.append(btn5);
const btn6=document.createElement("button");
btn6.setAttribute("type","button");
btn6.setAttribute("class","btn btn-warning")
// btn6.setAttribute("value","6");
btn6.innerText="6"
btn6.setAttribute("id","6")
btn6.setAttribute("onclick","form1.answer.value += '6'")
c6.append(btn6);
const btn7=document.createElement("button");
btn7.setAttribute("type","button");
btn7.setAttribute("class","btn btn-warning")
// btn7.setAttribute("value","7");
btn7.innerText="7"
btn7.setAttribute("id","7")
btn7.setAttribute("onclick","form1.answer.value += '7'")
c7.append(btn7);
const btn8=document.createElement("button");
btn8.setAttribute("type","button");
btn8.setAttribute("class","btn btn-warning")
// btn8.setAttribute("value","8");
btn8.innerText="8"
btn8.setAttribute("id","8")
btn8.setAttribute("onclick","form1.answer.value += '8'")
c8.append(btn8);
const btn9=document.createElement("button");
btn9.setAttribute("type","button");
btn9.setAttribute("class","btn btn-warning ")
// btn9.setAttribute("value","9");
btn9.innerText="9"
btn9.setAttribute("id","9")
btn9.setAttribute("onclick","form1.answer.value += '9'")
c9.append(btn9);
const btn10=document.createElement("button");
btn10.setAttribute("type","button");
btn10.setAttribute("class","btn btn-warning")
// btn10.setAttribute("value","0");
btn10.innerText="0"
btn10.setAttribute("onclick","form1.answer.value += '0'")
c10.append(btn10);
const btn11=document.createElement("input");
btn11.setAttribute("type","button");
btn11.setAttribute("class","btn btn-primary")
btn11.setAttribute("value","(");
btn11.setAttribute("onclick","form1.answer.value += '('")
c11.append(btn11);
const btn12=document.createElement("input");
btn12.setAttribute("type","button");
btn12.setAttribute("class","btn btn-primary")
btn12.setAttribute("value",")");
btn12.setAttribute("onclick","form1.answer.value += ')'")
c12.append(btn12);
////////////
const btn13=document.createElement("button");
btn13.setAttribute("type","button");
btn13.innerText="+"
btn13.setAttribute("class","btn btn-primary")
// btn13.setAttribute("value","+");
btn13.setAttribute("onclick","form1.answer.value += '+'")
btn13.setAttribute("id","add")
c13.append(btn13);
///////////
const btn14=document.createElement("button");
btn14.setAttribute("type","button");
btn14.innerText="-"
btn14.setAttribute("class","btn btn-primary")
// btn14.setAttribute("value","-");
btn14.setAttribute("onclick","form1.answer.value += '-'")
btn14.setAttribute("id","subtract")
c14.append(btn14);
const btn15=document.createElement("input");
btn15.setAttribute("type","button");
btn15.setAttribute("class","btn btn-primary")
btn15.setAttribute("value","*");
btn15.setAttribute("onclick","form1.answer.value += '*'")
c15.append(btn15);
const btn16=document.createElement("input");
btn16.setAttribute("type","button");
btn16.setAttribute("class","btn btn-primary")
btn16.setAttribute("value","/");
btn16.setAttribute("onclick","form1.answer.value += '/'")
c16.append(btn16);
const btn17=document.createElement("input");
btn17.setAttribute("type","button");
btn17.setAttribute("class","btn btn-primary")
btn17.setAttribute("value","%");
btn17.setAttribute("onclick","form1.answer.value += '%'")
c17.append(btn17);
/////////////
const btn18=document.createElement("button");
btn18.setAttribute("type","button");
btn18.setAttribute("class","btn btn-success")
// btn18.setAttribute("value","Calculate");
btn18.innerText="Calculate"
btn18.setAttribute("id","equal")
btn18.setAttribute("onclick","myFunction1(form1.answer.value)")
c18.append(btn18);
////////////
const btn19=document.createElement("button");
btn19.setAttribute("type","button");
btn19.setAttribute("class","btn btn-danger")
// btn19.setAttribute("value","Clear All");
btn19.innerText="Clear All";
btn19.setAttribute("id","clear");
btn19.setAttribute("onclick","form1.answer.value = ''")
c19.append(btn19);
document.addEventListener('keydown', function(event) {
    if (event.key !== undefined && (event.key < '0' || event.key > '9')) {
      event.preventDefault();
      window.alert("Sorry!!! Only numeric keys are allowed")
    }
    else{
   
    let val=event.key;
   
    document.answer.append(val)
    }
    
  });
function myFunction1(userinput)
{
console.log(userinput)
let result=math.evaluate(userinput);
console.log(result);
document.getElementById("result").value =result;
}

