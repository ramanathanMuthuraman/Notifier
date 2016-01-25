(function() {
    this.Notifier = function(param){
    	document.querySelector(param.actionElement).addEventListener("click",generate.bind(this));
		var notifierArea =  document.createElement("div");
		notifierArea.setAttribute("class", "notifierArea");
		notifierArea.style.height =  window.innerHeight+"px";
		document.getElementsByTagName("body")[0].appendChild(notifierArea);
    }
    this.addListenerMulti = function(el, s, fn) {
	  var evts = s.split(' ');
	  for (var i=0, iLen=evts.length; i<iLen; i++) {
	    el.addEventListener(evts[i], remove, true);
	  }
	}
    this.generate = function(){
    	var notifierArea = document.querySelector(".notifierArea");
		var newNotifier = document.createElement("div");		
		newNotifier.innerHTML = document.querySelectorAll(".notifierPopup").length;
		notifierArea.appendChild(newNotifier);	
		newNotifier.setAttribute("class", "notifierPopup");
		addListenerMulti(newNotifier,"animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", remove);
		
	}
	this.remove = function(){
		 this.parentNode.removeChild(this);
	}
}());



