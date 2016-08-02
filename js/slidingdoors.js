window.onload=function(){
	var oBox=document.getElementById("container");
	var aImg=oBox.getElementsByTagName("img");
	var imgWidth=aImg[0].offsetWidth;
	var exposeWidth = 160;
	oBox.style.width=imgWidth+(aImg.length-1)*exposeWidth+'px';
	
	
	function startPos(){
		for(var i=1; i<aImg.length; i++){
			aImg[i].style.left=imgWidth+exposeWidth*(i-1)+'px';
		}
	}
	
	startPos();
	
	var translate = imgWidth - exposeWidth;
	
	for(var i=0; i<aImg.length; i++){
		
			(function(i){
				aImg[i].onmouseover=function(){
				startPos();
				for (var j = 1; j <= i; j++) {
					aImg[j].style.left = parseInt(aImg[j].style.left, 10) - translate + 'px';
				}}
				
			})(i);

	}
	
}