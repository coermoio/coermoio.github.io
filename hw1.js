var cflag = 0;
function changemc(ID, clr) {
	if(cflag == 0){
		document.getElementById("t1").style.color = 'rgb(241,241,241)';
		document.getElementById("t2").style.color = 'rgb(241,241,241)';
		setTimeout(changepage, 3000);
		cflag = 1;
	}
	document.getElementById(ID).style.visibility = "hidden";
	var mc = document.getElementById("main_circle");
	var r = 'rgb(229, 125, 108)';
	var b = 'rgb(95, 141, 142)';
	var g = 'rgb(8, 53, 81)';
	if ((mc.style.backgroundColor == '') || (mc.style.backgroundColor == 'rgb(255, 255, 255)')) {
		mc.style = "background-color:" + clr ;
	}
	else {
		if( (mc.style.backgroundColor == r) || (mc.style.backgroundColor == b) || (mc.style.backgroundColor == g) ){
			var tempcolor = mc.style.backgroundColor;
			mc.style.background = "linear-gradient( 90deg, " + tempcolor + ", " + tempcolor + " 50%,"+ clr + "," + clr + "50% )";
		}
	}
}

var cla = 0;
function changepage(){
	var red = document.getElementById('r');
	var blue = document.getElementById('b');
	var green = document.getElementById('g');
	if((red.style.visibility == "hidden") && (blue.style.visibility == "hidden") && (green.style.visibility == "hidden")){
		cla = 'redgreenblue_design';
	}
	else if((red.style.visibility == "hidden") && (blue.style.visibility == "hidden")){
		cla = 'redblue_design';
		document.getElementById("g").style.visibility = "hidden";
	}
	else if((red.style.visibility == "hidden") && (green.style.visibility == "hidden")){
		cla = 'redgreen_design';
		document.getElementById("b").style.visibility = "hidden";
	}
	else if(red.style.visibility == "hidden"){
		cla = 'red_design';
		document.getElementById("b").style.visibility = "hidden";
		document.getElementById("g").style.visibility = "hidden";
	}
	else{
	}
	change_style(cla);
}

function change_style(cla){
	document.getElementsByTagName("BODY")[0].style.backgroundImage = 'url("./web/style/res/bg.png")';
	document.getElementById("t2").style.color = 'rgb(102,102,102)';
	var element = document.getElementsByClassName('home');
	for(var i=0;i<element.length;i++){
		element[i].style.AnimationName = "fade";
		element[i].style.visibility = "hidden";
	}
	var element = document.getElementsByClassName('decide');
 	for(var i=0;i<element.length;i++){
	  element[i].style.visibility = "visible";
	 }
	var element = document.getElementsByClassName(cla);
	for(var i=0;i<element.length;i++){
		element[i].style.visibility = "visible";
	}
}

function changehome(){
	cflag = 0;
	var element = document.getElementsByClassName(cla);
	for(var i=0;i<element.length;i++){
		element[i].style.visibility = "hidden";
	}
	cla = 0;
	document.getElementsByTagName("BODY")[0].style.backgroundImage = 'url("./web/main/background.png")';
	var element = document.getElementsByClassName('home');
	for(var i=0;i<element.length;i++){
		element[i].style.visibility = "visible";
	}
	document.getElementById("t2").style.color = '#666666';
	document.getElementById("t1").style.color = '#666666';
	document.getElementById("main_circle").style = 'background-color: #ffffff';

	document.getElementById("r").style.visibility = "visible";
	document.getElementById("b").style.visibility = "visible";
	document.getElementById("g").style.visibility = "visible";
	
	var element = document.getElementsByClassName('decide');
 	for(var i=0;i<element.length;i++){
	  element[i].style.visibility = "hidden";
 	}
}