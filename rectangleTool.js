function RectangleTool(){
	this.icon = "assets/rectangle.png";
	this.name = "rectangle.png";

	var pMouseX = -1;
	var pMouseY = -1;
	var drawMode = false;
    
    var thickness = createSlider(1, 20, 1) // create Sliders

	this.draw = function(){

        noFill();
        
        push()
        
        strokeWeight(thickness.value())
        
        // Check if mouse button is clicked
		if(this.mousePressOnCanvas(this.c) && mouseIsPressed){
            // If mouse button is clicked, check if anything is drawn on the screen
			if(pMouseX == -1){
                // Assign mouseX and mouseY values to startMouseX and startMouseY respectively so that we get the co-ordinates of a point where mouse is clicked
				pMouseX = mouseX;
				pMouseY = mouseY;
                // Set 'drawMode' flag to true
				drawMode = true;
                // Load the pixel data for the display window into the pixels[] array using loadPixels() function
				loadPixels();
			}
            
            // If line is getting drawn that is user is dragging a mouse
			else{
                // Update pixel data loaded in the pixels[] array
				updatePixels();
                // And draw the rectangle
				rect(pMouseX, pMouseY, mouseX, mouseY);
			}
		}

        // When mouse is not pressed/released
		else if(drawMode){
            // Set 'drawMode' flag to false
			drawMode = false;
            // Reset the variables
			pMouseX = -1;
			pMouseY = -1;
		}
        
        pop()
	};
    
    this.populateOptions = function(){
         
         // populate slider to alter thickness of rectangle sides
         select(".options").html(
			'<div id = "controls"><div id = "thickness">Thickness</div></div>') 
    
         select(".options").child(thickness);
        
  
    } 
    
    this.mousePressOnCanvas = function(canvas){
     
     // check if mouse is pressed inside the canvas    
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