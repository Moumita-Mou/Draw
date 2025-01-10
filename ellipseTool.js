function EllipseTool(){
	this.icon = "assets/ellipse.jpg";
	this.name = "ellipseTool";
    
    //Declare variables
	var beginMouseX =  0;
	var beginMouseY =  0;
	var drawMode = false;
    
    //create Slider
    var thickness = createSlider(1, 20, 1)
    
    
	this.draw = function(){
        
        // check when mouse is pressed to draw ellipse on place
        
        noFill();
        
        push()
        
        strokeWeight(thickness.value())
        
		if(this.mousePressOnCanvas(this.c) && mouseIsPressed){
            // If mouse is clicked, check if anything is drawn on the canvas
			if(beginMouseX ==  0){
                // Assign mouseX and mouseY values to beginMouseX, beginMouseY so that the co-ordinates of a point where mouse is clicked is found
				beginMouseX = mouseX + 1;
				beginMouseY = mouseY - 1;
                // Set 'drawMode' to true
				drawMode = true;
                // Load the pixel data for the canvas into the pixels[] array using loadPixels() function
				loadPixels();
			}
            
            // If line is getting drawn that is user is dragging a mouse
			else{
                // Update pixel data loaded in the pixels[] array
				updatePixels();
                // draw the ellipse
				ellipse(beginMouseX, beginMouseY, mouseX, mouseY);
			}
		}

        // When mouse is released
		else if(drawMode){
            // Set 'drawMode' to false
			drawMode = false;
            // Reset the variables
			beginMouseX = 0;
			beginMouseY = 0;
		}
        
        pop();
	};
    
    this.populateOptions = function(){
    
        //populate slider for altering thickness of ellipse side as per need
         select(".options").html(
			'<div id = "controls"><div id = "thickness">Thickness</div></div>') 
    
         select(".options").child(thickness);
        
  
}
    
    this.mousePressOnCanvas = function(canvas){
     
    //to make sure the mouse pressed happens within canvas    
        
     noFill()
    
     if(mouseX > 0 &&
        mouseX < (0 + width) &&
        mouseY > 0 &&
        mouseY < (0 + height)
       ){
           
           return true;
        }
    
           return false;
}
   
    this.unselectTool = function() {
		//clear options
		select(".options").html("");
	};
  
}