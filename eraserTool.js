function EraserTool(){

this.name = "eraserTool"
this.icon = './assets/eraser.png'
    
var sizeEraser = createSlider(10, 30, 30) //create Sliders   
    
           
   
    this.draw = function(){
    
       push()
        
    // check if mouse is pressed
   if(mouseIsPressed)
   { 
       
      for(var i = 0; i < sizeEraser.value();i++) 
      {
        stroke(255);
        fill(255);
        ellipse(mouseX, mouseY, sizeEraser.value());
        
          
      }
   }  
        pop()
}
    
    
   this.populateOptions = function(){
    
         // populate a slider for altering eraser size
		select(".options").html(
			'<div id = "controls"><div id = "sizeOfEraser">Size of Eraser: </div></div>')
    
        sizeEraser.style('width', '80px');
        select(".options").child(sizeEraser); 
  
   }

   this.unselectTool = function() {
		//clear options
		select(".options").html("");
	};
   
}    