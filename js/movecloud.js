var windowWidth = window.innerWidth;
var playarea;
var appendhere;
function movecloud(){
	
}

movecloud.prototype.cloudmover = function(speed,classname){
	var clouds = document.getElementsByClassName(classname);
	for(i in clouds){
		if(!isNaN(i)){
			this.moveit(clouds[i],speed)
		}
	}	
}

movecloud.prototype.moveit = function(ele,speed){
	var inc = 0;
	if(!isNaN(parseInt(ele.style.right))){
		inc = parseInt(ele.style.right);
	}	
	setInterval(function(){
		
		ele.style.right = inc+"px";
		if(inc >= parseInt(windowWidth)){
			inc = (-1)*parseInt(ele.offsetWidth);	
		}
		else{
			inc = inc+4;
		}
	},speed); 
}


Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
};

NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = 0, len = this.length; i < len; i++) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
};

window.onload = function(){
	createClouds();
	controlHolder();
	var mover = new movecloud(); 
	mover.cloudmover(15,'rare');
	mover.cloudmover(10,'middle');
	mover.cloudmover(5,'front');
	
	var startgame = document.getElementById("startgame");
	startgame.onclick = function(){
		startgame.remove();
		appendhere = document.getElementById("appendhere");
		supportmusic = document.getElementById("supportmusic");
		playarea = document.createElement('div');
		playarea.setAttribute("class","aeroplane");
		playarea.setAttribute("id","aeroplane");
		playarea.setAttribute("style","bottom:0px;left:0px");
		playarea.setAttribute("id","aeroplane");
		appendhere.appendChild(playarea);
		supportmusic.setAttribute("src","files/flying.mp3");
		supportmusic.volume = 0.2;
		inst = new shootchop(playarea);
		inst.detectkey();
	}				
}

function createElement(type,attributes){
	var element = document.createElement(type);
	for(i in attributes){
		element.setAttribute(i,attributes[i]);
	}
	return element;
}

function controlHolder(){
	var attributes = new Array();
	attributes['class'] = 'play-game';
	attributes['style'] = 'z-index:999; position:relative';
	attributes['id'] = 'appendhere'; 
	var main = createElement('div',attributes);

	var attributes = new Array();
	attributes['id'] = 'startgame'; 
	var button = createElement('button',attributes);
	var t = document.createTextNode('Play');
	button.appendChild(t);
	main.appendChild(button);
	
	var attributes = new Array();
	attributes['autoplay'] = 'autoplay';
	attributes['loop'] = 'loop';
	attributes['src'] = 'files/all-along.mp3';
	attributes['id'] = 'supportmusic'; 
	var audio = createElement('audio',attributes);

	document.getElementById('shootchop').appendChild(main);
	document.getElementById('shootchop').appendChild(audio);
}

function createClouds(){

	var attributes = new Array();
	attributes['class'] = 'clouds-container';
	attributes['style'] = 'z-index:99; position:relative'; 
	var main = createElement('div',attributes);

	/* RARE CLOUDS */
	var attributes = new Array();
	attributes['class'] = 'clouds rare';
	var rare = createElement('div',attributes);
	var attributes = new Array();
	attributes['class'] = 'cloud-wrapper-rare';
	var rarewrap = createElement('div',attributes);	

	var attributes = new Array();
	attributes['class'] = 'c1 clouds-background2';
	var c1 = createElement('div',attributes);

	var attributes = new Array();
	attributes['class'] = 'c2 clouds-background2';
	var c2 = createElement('div',attributes);

	var attributes = new Array();
	attributes['class'] = 'c3 clouds-background2';
	var c3 = createElement('div',attributes);

	rarewrap.appendChild(c1);
	rarewrap.appendChild(c2);
	rarewrap.appendChild(c3);
	rare.appendChild(rarewrap);
	main.appendChild(rare);

	var attributes = new Array();
	attributes['class'] = 'clouds rare';
	attributes['style'] = 'right:550px;';
	var rare = createElement('div',attributes);
	var attributes = new Array();
	attributes['class'] = 'cloud-wrapper-rare';
	var rarewrap = createElement('div',attributes);	

	var attributes = new Array();
	attributes['class'] = 'c1 clouds-background2';
	var c1 = createElement('div',attributes);

	var attributes = new Array();
	attributes['class'] = 'c2 clouds-background2';
	var c2 = createElement('div',attributes);

	var attributes = new Array();
	attributes['class'] = 'c3 clouds-background2';
	var c3 = createElement('div',attributes);

	rarewrap.appendChild(c1);
	rarewrap.appendChild(c2);
	rarewrap.appendChild(c3);
	rare.appendChild(rarewrap);
	main.appendChild(rare);


	var attributes = new Array();
	attributes['class'] = 'clouds rare';
	attributes['style'] = 'right:711px;top:200px';
	var rare = createElement('div',attributes);
	var attributes = new Array();
	attributes['class'] = 'cloud-wrapper-rare';
	var rarewrap = createElement('div',attributes);	

	var attributes = new Array();
	attributes['class'] = 'c1 clouds-background2';
	var c1 = createElement('div',attributes);

	var attributes = new Array();
	attributes['class'] = 'c2 clouds-background2';
	var c2 = createElement('div',attributes);

	var attributes = new Array();
	attributes['class'] = 'c3 clouds-background2';
	var c3 = createElement('div',attributes);

	rarewrap.appendChild(c1);
	rarewrap.appendChild(c2);
	rarewrap.appendChild(c3);
	rare.appendChild(rarewrap);
	main.appendChild(rare);


	var attributes = new Array();
	attributes['class'] = 'clouds rare';
	attributes['style'] = 'right:1078px;top:120px';
	var rare = createElement('div',attributes);
	var attributes = new Array();
	attributes['class'] = 'cloud-wrapper-rare';
	var rarewrap = createElement('div',attributes);	

	var attributes = new Array();
	attributes['class'] = 'c1 clouds-background2';
	var c1 = createElement('div',attributes);

	var attributes = new Array();
	attributes['class'] = 'c2 clouds-background2';
	var c2 = createElement('div',attributes);

	var attributes = new Array();
	attributes['class'] = 'c3 clouds-background2';
	var c3 = createElement('div',attributes);

	rarewrap.appendChild(c1);
	rarewrap.appendChild(c2);
	rarewrap.appendChild(c3);
	rare.appendChild(rarewrap);
	main.appendChild(rare);


	var attributes = new Array();
	attributes['class'] = 'clouds rare';
	attributes['style'] = 'right:550px; top:500px';
	var rare = createElement('div',attributes);
	var attributes = new Array();
	attributes['class'] = 'cloud-wrapper-rare';
	var rarewrap = createElement('div',attributes);	

	var attributes = new Array();
	attributes['class'] = 'c1 clouds-background2';
	var c1 = createElement('div',attributes);

	var attributes = new Array();
	attributes['class'] = 'c2 clouds-background2';
	var c2 = createElement('div',attributes);

	var attributes = new Array();
	attributes['class'] = 'c3 clouds-background2';
	var c3 = createElement('div',attributes);

	rarewrap.appendChild(c1);
	rarewrap.appendChild(c2);
	rarewrap.appendChild(c3);
	rare.appendChild(rarewrap);
	main.appendChild(rare);


	var attributes = new Array();
	attributes['class'] = 'clouds rare';
	attributes['style'] = 'right:711px;top:400px';
	var rare = createElement('div',attributes);
	var attributes = new Array();
	attributes['class'] = 'cloud-wrapper-rare';
	var rarewrap = createElement('div',attributes);	

	var attributes = new Array();
	attributes['class'] = 'c1 clouds-background2';
	var c1 = createElement('div',attributes);

	var attributes = new Array();
	attributes['class'] = 'c2 clouds-background2';
	var c2 = createElement('div',attributes);

	var attributes = new Array();
	attributes['class'] = 'c3 clouds-background2';
	var c3 = createElement('div',attributes);

	rarewrap.appendChild(c1);
	rarewrap.appendChild(c2);
	rarewrap.appendChild(c3);
	rare.appendChild(rarewrap);
	main.appendChild(rare);


	var attributes = new Array();
	attributes['class'] = 'clouds rare';
	attributes['style'] = 'right:1078px;top:450px';
	var rare = createElement('div',attributes);
	var attributes = new Array();
	attributes['class'] = 'cloud-wrapper-rare';
	var rarewrap = createElement('div',attributes);	

	var attributes = new Array();
	attributes['class'] = 'c1 clouds-background2';
	var c1 = createElement('div',attributes);

	var attributes = new Array();
	attributes['class'] = 'c2 clouds-background2';
	var c2 = createElement('div',attributes);

	var attributes = new Array();
	attributes['class'] = 'c3 clouds-background2';
	var c3 = createElement('div',attributes);

	rarewrap.appendChild(c1);
	rarewrap.appendChild(c2);
	rarewrap.appendChild(c3);
	rare.appendChild(rarewrap);
	main.appendChild(rare);

	/* MIDDLE CLOUDS */

	var attributes = new Array();
	attributes['class'] = 'clouds middle';
	attributes['style'] = 'right:135px;top:55px';
	var middle = createElement('div',attributes);
	var attributes = new Array();
	attributes['class'] = 'cloud-wrapper-middle';
	var middlewrap = createElement('div',attributes);	

	var attributes = new Array();
	attributes['class'] = 'c1 clouds-background1';
	var c1 = createElement('div',attributes);

	var attributes = new Array();
	attributes['class'] = 'c2 clouds-background1';
	var c2 = createElement('div',attributes);

	var attributes = new Array();
	attributes['class'] = 'c3 clouds-background1';
	var c3 = createElement('div',attributes);

	middlewrap.appendChild(c1);
	middlewrap.appendChild(c2);
	middlewrap.appendChild(c3);
	middle.appendChild(middlewrap);
	main.appendChild(middle);

	var attributes = new Array();
	attributes['class'] = 'clouds middle';
	attributes['style'] = 'right:475px;top:119px';
	var middle = createElement('div',attributes);
	var attributes = new Array();
	attributes['class'] = 'cloud-wrapper-middle';
	var middlewrap = createElement('div',attributes);	

	var attributes = new Array();
	attributes['class'] = 'c1 clouds-background1';
	var c1 = createElement('div',attributes);

	var attributes = new Array();
	attributes['class'] = 'c2 clouds-background1';
	var c2 = createElement('div',attributes);

	var attributes = new Array();
	attributes['class'] = 'c3 clouds-background1';
	var c3 = createElement('div',attributes);

	middlewrap.appendChild(c1);
	middlewrap.appendChild(c2);
	middlewrap.appendChild(c3);
	middle.appendChild(middlewrap);
	main.appendChild(middle);


	var attributes = new Array();
	attributes['class'] = 'clouds middle';
	attributes['style'] = 'right:924px;top:20px';
	var middle = createElement('div',attributes);
	var attributes = new Array();
	attributes['class'] = 'cloud-wrapper-middle';
	var middlewrap = createElement('div',attributes);	

	var attributes = new Array();
	attributes['class'] = 'c1 clouds-background1';
	var c1 = createElement('div',attributes);

	var attributes = new Array();
	attributes['class'] = 'c2 clouds-background1';
	var c2 = createElement('div',attributes);

	var attributes = new Array();
	attributes['class'] = 'c3 clouds-background1';
	var c3 = createElement('div',attributes);

	middlewrap.appendChild(c1);
	middlewrap.appendChild(c2);
	middlewrap.appendChild(c3);
	middle.appendChild(middlewrap);
	main.appendChild(middle);


	var attributes = new Array();
	attributes['class'] = 'clouds middle';
	attributes['style'] = 'right:135px;top:400px';
	var middle = createElement('div',attributes);
	var attributes = new Array();
	attributes['class'] = 'cloud-wrapper-middle';
	var middlewrap = createElement('div',attributes);	

	var attributes = new Array();
	attributes['class'] = 'c1 clouds-background1';
	var c1 = createElement('div',attributes);

	var attributes = new Array();
	attributes['class'] = 'c2 clouds-background1';
	var c2 = createElement('div',attributes);

	var attributes = new Array();
	attributes['class'] = 'c3 clouds-background1';
	var c3 = createElement('div',attributes);

	middlewrap.appendChild(c1);
	middlewrap.appendChild(c2);
	middlewrap.appendChild(c3);
	middle.appendChild(middlewrap);
	main.appendChild(middle);


	var attributes = new Array();
	attributes['class'] = 'clouds middle';
	attributes['style'] = 'right:475px;top:450px';
	var middle = createElement('div',attributes);
	var attributes = new Array();
	attributes['class'] = 'cloud-wrapper-middle';
	var middlewrap = createElement('div',attributes);	

	var attributes = new Array();
	attributes['class'] = 'c1 clouds-background1';
	var c1 = createElement('div',attributes);

	var attributes = new Array();
	attributes['class'] = 'c2 clouds-background1';
	var c2 = createElement('div',attributes);

	var attributes = new Array();
	attributes['class'] = 'c3 clouds-background1';
	var c3 = createElement('div',attributes);

	middlewrap.appendChild(c1);
	middlewrap.appendChild(c2);
	middlewrap.appendChild(c3);
	middle.appendChild(middlewrap);
	main.appendChild(middle);


	/* FRONT CLOUDS */

	var attributes = new Array();
	attributes['class'] = 'clouds front';
	attributes['style'] = 'right:-64px;top:183px';
	var front = createElement('div',attributes);
	var attributes = new Array();
	attributes['class'] = 'cloud-wrapper-front';
	var frontwrap = createElement('div',attributes);	

	var attributes = new Array();
	attributes['class'] = 'c1 clouds-background';
	var c1 = createElement('div',attributes);

	var attributes = new Array();
	attributes['class'] = 'c2 clouds-background';
	var c2 = createElement('div',attributes);

	var attributes = new Array();
	attributes['class'] = 'c3 clouds-background';
	var c3 = createElement('div',attributes);

	frontwrap.appendChild(c1);
	frontwrap.appendChild(c2);
	frontwrap.appendChild(c3);
	front.appendChild(frontwrap);
	main.appendChild(front);


	var attributes = new Array();
	attributes['class'] = 'clouds front';
	attributes['style'] = 'right:402px;top:50px';
	var front = createElement('div',attributes);
	var attributes = new Array();
	attributes['class'] = 'cloud-wrapper-front';
	var frontwrap = createElement('div',attributes);	

	var attributes = new Array();
	attributes['class'] = 'c1 clouds-background';
	var c1 = createElement('div',attributes);

	var attributes = new Array();
	attributes['class'] = 'c2 clouds-background';
	var c2 = createElement('div',attributes);

	var attributes = new Array();
	attributes['class'] = 'c3 clouds-background';
	var c3 = createElement('div',attributes);

	frontwrap.appendChild(c1);
	frontwrap.appendChild(c2);
	frontwrap.appendChild(c3);
	front.appendChild(frontwrap);
	main.appendChild(front);

	var attributes = new Array();
	attributes['class'] = 'clouds front';
	attributes['style'] = 'right:1003px;top:161px';
	var front = createElement('div',attributes);
	var attributes = new Array();
	attributes['class'] = 'cloud-wrapper-front';
	var frontwrap = createElement('div',attributes);	

	var attributes = new Array();
	attributes['class'] = 'c1 clouds-background';
	var c1 = createElement('div',attributes);

	var attributes = new Array();
	attributes['class'] = 'c2 clouds-background';
	var c2 = createElement('div',attributes);

	var attributes = new Array();
	attributes['class'] = 'c3 clouds-background';
	var c3 = createElement('div',attributes);

	frontwrap.appendChild(c1);
	frontwrap.appendChild(c2);
	frontwrap.appendChild(c3);
	front.appendChild(frontwrap);
	main.appendChild(front);

	var attributes = new Array();
	attributes['class'] = 'clouds front';
	attributes['style'] = 'right:-320px;top:320px';
	var front = createElement('div',attributes);
	var attributes = new Array();
	attributes['class'] = 'cloud-wrapper-front';
	var frontwrap = createElement('div',attributes);	

	var attributes = new Array();
	attributes['class'] = 'c1 clouds-background';
	var c1 = createElement('div',attributes);

	var attributes = new Array();
	attributes['class'] = 'c2 clouds-background';
	var c2 = createElement('div',attributes);

	var attributes = new Array();
	attributes['class'] = 'c3 clouds-background';
	var c3 = createElement('div',attributes);

	frontwrap.appendChild(c1);
	frontwrap.appendChild(c2);
	frontwrap.appendChild(c3);
	front.appendChild(frontwrap);
	main.appendChild(front);

	var attributes = new Array();
	attributes['class'] = 'clouds front';
	attributes['style'] = 'right:200px;top:400px';
	var front = createElement('div',attributes);
	var attributes = new Array();
	attributes['class'] = 'cloud-wrapper-front';
	var frontwrap = createElement('div',attributes);	

	var attributes = new Array();
	attributes['class'] = 'c1 clouds-background';
	var c1 = createElement('div',attributes);

	var attributes = new Array();
	attributes['class'] = 'c2 clouds-background';
	var c2 = createElement('div',attributes);

	var attributes = new Array();
	attributes['class'] = 'c3 clouds-background';
	var c3 = createElement('div',attributes);

	frontwrap.appendChild(c1);
	frontwrap.appendChild(c2);
	frontwrap.appendChild(c3);
	front.appendChild(frontwrap);
	main.appendChild(front);

	var attributes = new Array();
	attributes['class'] = 'clouds front';
	attributes['style'] = 'right:903px;top:450px';
	var front = createElement('div',attributes);
	var attributes = new Array();
	attributes['class'] = 'cloud-wrapper-front';
	var frontwrap = createElement('div',attributes);	

	var attributes = new Array();
	attributes['class'] = 'c1 clouds-background';
	var c1 = createElement('div',attributes);

	var attributes = new Array();
	attributes['class'] = 'c2 clouds-background';
	var c2 = createElement('div',attributes);

	var attributes = new Array();
	attributes['class'] = 'c3 clouds-background';
	var c3 = createElement('div',attributes);

	frontwrap.appendChild(c1);
	frontwrap.appendChild(c2);
	frontwrap.appendChild(c3);
	front.appendChild(frontwrap);
	main.appendChild(front);

	document.getElementById('shootchop').appendChild(main);
}
