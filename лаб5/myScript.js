/*2*/
window.onload = function() {
    var a, b, c;
    a = 5; b = 109; c = a * b;
    document.getElementById("p5").innerHTML +="Площа прямокутника зі сторонами "+a+' i '+b+" = "+c;
}
/*1*/
function changeText() {
    var el1 = document.getElementById("head").innerHTML;
    var el2 = document.getElementById("headfoot").innerHTML;
    if(document.getElementById("head").innerHTML==el2){
        document.getElementById("head").innerHTML = el1
        document.getElementById("headfoot").innerHTML = el2
    }else{
        document.getElementById("head").innerHTML = el2
        document.getElementById("headfoot").innerHTML = el1
    }
}

/*3*/

function min_of_numbers(){
    let input = document.getElementById("numbers")
    let cnt = 0;
    let str = input.value;
    let arr = str.split(' ');
    let min = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]<min){
            min=arr[0];
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]==min){
            cnt+=1;
        }
    }
    alert(cnt);
    document.cookie = "min_of_number=" + escape(cnt);
}
window.addEventListener("load",function(){
    var x = document.cookie;
    document.getElementById("formN").style.display = 'none';
    if (confirm("Завантажити дані з cookies?", x)) {
        
        alert ("Сторінка перезавантажилась. (Немає форми для введення)") ;  
        document.getElementById("p5").innerHTML = "Ваші cookies: " + x;
        
    } else {
        alert ("Cookies видалені. Сторінка перезавантажилась. (Форма з'явилась)");
        delete_cookie("min_of_number")
        document.getElementById("formN").style.display = '';
    }

    /*4*/
    if (localStorage.getItem('Ok') !== null ) {
        var checkBox = document.getElementById("myCheck");
        var q = localStorage.getItem("Ok");
        document.getElementById("p3text").innerHTML=q;
        checkBox.checked = true;
        
    }
    

    /*5*/
    var styles=""
	for(let key of Object.keys(localStorage)){
		styles+=key+":"+localStorage[key]+";"
	}
    let div = document.getElementsByTagName('div');
    for(el in div){
        div[el].style=styles;
    }
    this.document.getElementById("form2").style.display='none'
});
function delete_cookie ( cookie_name )
{
  var cookie_date = new Date ( );  // Текущая дата и время
  cookie_date.setTime ( cookie_date.getTime() - 1 );
  document.cookie = cookie_name += "=; expires=" + cookie_date.toGMTString();
}

/*4*/

document.addEventListener("keypress",function(){
    var str = document.getElementById("p3text").innerHTML;
    document.getElementById("p3text").innerHTML=str.italics();
});

function myFunction() {
    var checkBox = document.getElementById("myCheck");
    /*var str = document.getElementById("p3text");*/
    if (checkBox.checked == true ){
        /*document.getElementById("p3text").innerHTML=str.innerHTML.italics();*/
        var q=document.getElementById("p3text").innerHTML;
        localStorage.setItem("Ok", q);
    } else {
        /*str.style.cssText = 'none';
        document.getElementById("p3text").innerHTML=str.innerText;*/
        localStorage.removeItem("Ok");
    }
}

/*5*/
var current=0;
function showForm() {
    var display = getComputedStyle(document.getElementById('form2')).display;
    if(current==0){
        current++;
        return;
    }
    if(current==1){
        current++;
        document.getElementById('form2').style.display = "block";
        return;
    }
    if (current ==2){
        current++;
        return;
    }
    if (current ==3){
        current=0;
        document.getElementById('form2').style.display = "none";
    }
}

function styles_for_div(){
    let css_properties = document.getElementById("cssStyles").value;
    let div = document.getElementsByTagName('div');
    for(el in div){
        div[el].style=css_properties;
    }

    document.getElementById("righttext").style.display='none';

    var css_properties2=css_properties
    css_properties = css_properties.split('\n').join('');
    css_properties = css_properties.split(' ').join('');
    css_properties=css_properties.split(";")
    var index = css_properties.indexOf('');
    if (index !== -1) {
        css_properties.splice(index, 1);
    }
    for (var i in css_properties){
		pos=css_properties[i].indexOf(":")
		localStorage.setItem(css_properties[i].substring(0,pos),css_properties[i].substring(pos+1))
		
        var btn = document.createElement("button");
        btn.type = 'button';
        btn.innerHTML = css_properties[i]+';';
        var container = document.getElementById("rightbox");
    
        container.appendChild(btn);

        btn.onclick = function(e){
            let button=e.target;
            let div = document.getElementsByTagName('div');
            

            let btntext=button.innerText;
            var rExp = new RegExp(btntext, "g");

            var st =css_properties2.replace(rExp, '');
            for(let el in div){

                div[el].style=st;
            }
            css_properties2=st;

            button.setAttribute('disabled', false);
            
            pos=btntext.indexOf(":")

            localStorage.removeItem(btntext.substring(0,pos));
            
        };
	}
    
}
function delete_all_styles() {
    let div = document.getElementsByTagName('div');
    for(el in div){
        div[el].style = 'none';
    }
    localStorage.clear();
}