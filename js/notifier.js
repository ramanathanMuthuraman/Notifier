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
    	generate(param);

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
    this.generate = function(param){

    	var notifierArea = document.querySelector(".notifierArea");
		var newNotifier = document.createElement("div");
		var newNotifierContent = document.createElement("div");
		newNotifierContent.innerHTML = param.text;
		newNotifier.appendChild(newNotifierContent);
		notifierArea.appendChild(newNotifier);
		newNotifierContent.setAttribute("class","notifier-content");
		newNotifier.setAttribute("class", "notifierPopup"+addCustomClass(param.cls));
		if(param.manualDismiss){
			addCloseBtn(newNotifier);
		}else{
			setTimeout(function(){
				hide(newNotifier);
			},3000);

		}
	}
	//newNotifier : The dom element to be bound to the event
	this.cssAnimationEvent = function(newNotifier){
		addListenerMulti(newNotifier,"animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", remove);
	}
	//newNotifier : The dom element to be bound to the event
	this.addCloseBtn = function(newNotifier){
		var closeBtn = document.createElement("div");
		closeBtn.className = "closeBtn";
		newNotifier.appendChild(closeBtn).addEventListener("click",hide);
	}
	//cls : User specified class, if any
	this.addCustomClass = function(cls){
		return cls? " "+cls : "";
	}
	//Hide the notifier element
	this.hide = function(node){
		// parent node on close button click or the dom from manualDismiss
		node = this.parentNode || node;
		node.style.animationName = "hide";
		cssAnimationEvent(node);
	}
	//Remove the notifier element
	this.remove = function(){
		this.parentNode.removeChild(this);
	}
}());



