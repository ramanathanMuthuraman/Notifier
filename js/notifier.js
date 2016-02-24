(function() {
	//Constructor method
    this.Notifier = function(userParams){

    	var defaultParams = {
    	  text:'',
	      cls: '',
	      manualDismiss: false,
	      autoDismissTimer: 2000
	    };

	    // Create options by extending defaults with the passed in arugments

	      this.options = extendDefaults(defaultParams, userParams);

    	//Create container, if it isn't already present in the document
    	if(!document.querySelectorAll(".notifierArea").length){
    		var notifierArea =  document.createElement("div");
			notifierArea.setAttribute("class", "notifierArea");
			notifierArea.style.height =  window.innerHeight+"px";
			document.getElementsByTagName("body")[0].appendChild(notifierArea);
    	}
    	generate.call(this);

    }
    //defaultParams: default parameters
    //userParams: custom parameters passed
    function extendDefaults(defaultParams,userParams){
    	 if (userParams && typeof userParams === "object") {
	    	 for (var property in userParams) {
		      if (userParams.hasOwnProperty(property)) {
		        defaultParams[property] = userParams[property];
		      }
		    }
		}
	    return defaultParams;
    }
    //el : The HTML element to bind the event for
    //s  : The events string
    //fn : The function to call on the occurence of any of the events specified
    function addListenerMulti(el, s, fn) {
	  var evts = s.split(' ');
	  for (var i=0, iLen=evts.length; i<iLen; i++) {
	    el.addEventListener(evts[i], remove, true);
	  }
	}
	//text : The text to be displayed in the popup
    function generate(){

    	var notifierArea = document.querySelector(".notifierArea");
		var newNotifier = document.createElement("div");
		var newNotifierContent = document.createElement("div");
		newNotifierContent.innerHTML = this.options.text;
		newNotifier.appendChild(newNotifierContent);
		notifierArea.appendChild(newNotifier);
		newNotifierContent.setAttribute("class","notifier-content");
		newNotifier.setAttribute("class", "notifierPopup"+addCustomClass(this.options.cls));
		if(this.options.manualDismiss){
			addCloseBtn(newNotifier);
		}else{
			setTimeout(function(){
				hide(newNotifier);
			},this.options.autoDismissTimer);

		}
	}
	//newNotifier : The dom element to be bound to the event
	function cssAnimationEvent(newNotifier){
		addListenerMulti(newNotifier,"animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", remove);
	}
	//newNotifier : The dom element to be bound to the event
	function addCloseBtn(newNotifier){
		var closeBtn = document.createElement("div");
		closeBtn.className = "closeBtn";
		newNotifier.appendChild(closeBtn).addEventListener("click",hide);
	}
	//cls : User specified class, if any
	function addCustomClass(cls){
		return cls? " "+cls : "";
	}
	//Hide the notifier element
	function hide(node){
		// parent node on close button click or the dom from manualDismiss
		node = this.parentNode || node;
		node.style.animationName = "hide";
		cssAnimationEvent(node);
	}
	//Remove the notifier element
	function remove(){
		this.parentNode.removeChild(this);
	}
}());



