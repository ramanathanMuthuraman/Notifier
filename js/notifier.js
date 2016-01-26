(function() {
	//Constructor method
    this.Notifier = function(param){
    	//Create container, if it isn't already present in the document 
    	if(!document.querySelectorAll(".notifierArea").length){
    		var notifierArea =  document.createElement("div");
			notifierArea.setAttribute("class", "notifierArea");
			notifierArea.style.height =  window.innerHeight+"px";
			document.getElementsByTagName("body")[0].appendChild(notifierArea);
    	}
    	generate(param.text);

    }
    //el : The HTML element to bind the event for
    //s  : The events string 
    //fn : The function to call on the occurence of any of the events specified 
    this.addListenerMulti = function(el, s, fn) {
	  var evts = s.split(' ');
	  for (var i=0, iLen=evts.length; i<iLen; i++) {
	    el.addEventListener(evts[i], remove, true);
	  }
	}
	//text : The text to be displayed in the popup
    this.generate = function(text){
    	var notifierArea = document.querySelector(".notifierArea");
    	var content = [].concat(text);
    	for(var i=0;i<content.length;i++){
    		var newNotifier = document.createElement("div");		
			newNotifier.innerHTML = content[i];
			notifierArea.appendChild(newNotifier);	
			newNotifier.setAttribute("class", "notifierPopup");
			addListenerMulti(newNotifier,"animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", remove);
    	}
		
	}
	//Remove the notifier element
	this.remove = function(){
		 this.parentNode.removeChild(this);
	}
}());



