function BrushTool(){

this.name = "brushTool"
this.icon = './assets/brush.png'
    
var pMouseX = -1
var pMouseY = -1


this.draw = function(){
    
    push()
    
   if(mouseIsPressed){
			//check if they pX and Y are -1. set them to the current
			//mouse X and Y if they are.
            
       
             strokeWeight(this.thickness.value());
             
       
			if (pMouseX == -1){
				pMouseX = mouseX;
				pMouseY = mouseY;
			}
       
			//if we already have values for pX and Y we can draw a line from 
			//there to the current mouse location
       
			else{
				line(pMouseX, pMouseY, mouseX, mouseY);
				pMouseX = mouseX;
				pMouseY = mouseY;
			}
		}
    
		//if the user has released the mouse we want to set the pMouse values 
		//back to -1.
		//try and comment out these lines and see what happens!
    
		else{
			pMouseX = -1;
			pMouseY = -1;
		}
    
    pop()
    
	};
    
this.populateOptions = function(){
    
         this.thickness = createSlider(5, 20, 9);
    
         select(".options").html(
			'<div id = "controls"><div id = "thickness">Thickness</div></div>') 
    
         select(".options").child(this.thickness);
           
}

this.unselectTool = function() {
		//clear options
		select(".options").html("");
	};


    
}