function ZoomTool(){
    
    this.name = "ZoomTool";
	this.icon = "assets/zoom.jpg";
    
var scales = 1; // scaleFactor
var x = 720; // pan X
var y = 500; // pan Y

var zoomIn  = false;
var zoomOut = false;

var zoomSpeed = 1.04;

this.draw = function() {
    
    loadPixels()
    
  translate(720, 500);
  scale(scales)  
  translate(-x, -y);

    if(zoomIn == true){
        
        scales *=  zoomSpeed
    }
    
    if(zoomOut == true){
        
        scales /= zoomSpeed
    }
    
    
}

this.keyPressed = function(){
    
    if(keyCode == '187' || key == '+'){
        
        zoomIn = true;
        zoomOut = false;

    }
    
    if(keyCode == '189' || key == '-'){
        zoomOut = true;
        zoomIn = false;
    }

}

this.keyReleased = function(){
    
    if(keyCode == '187' || key == '+'){
        
        zoomIn = false;
    }
    
    if(keyCode == '189' || key == '-'){
        zoomOut = false;
    }
}
    
this.unselectTool = function() {
		//clear options
		select(".options").html("");
	};
    

}