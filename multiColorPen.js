function MultiColorPenTool(){

this.name = "multiColorPenTool"
this.icon = './assets/multiColorPen.jpg'
    
var pMouseX = -1
var pMouseY = -1 



this.draw = function(){
    
      push() 
    
   if(mouseIsPressed){
			 
    
            var r = random(30, 255);
            var g = random(20, 255);
            var b = random(40, 255);
            var a = this.transperacy.value();
       
             noFill()
             strokeWeight(this.lineWeight.value());
             stroke(r, g, b, a)
       
			if (pMouseX == -1){
				pMouseX = mouseX;
				pMouseY = mouseY;
			}
       
       
			else{
				line(pMouseX, pMouseY, mouseX, mouseY);
				pMouseX = mouseX;
				pMouseY = mouseY;
			}
		}
    
    
		else{
			pMouseX = -1;
			pMouseY = -1;
		}
     
       pop();
    
    

	};
    
  this.populateOptions = function(){
    
            //create sliders
            this.transperacy = createSlider(1, 255, 100);
            this.lineWeight   = createSlider(8, 50, 11); 
        
         select(".options").html(
			'<div id = "controls"><div id = "Transperacy"> Transperacy ------ Line Weight </div><div id = "controls"><div id = "Line Weight"></div></div>') 
    
         select(".options").child(this.transperacy);
         select(".options").child(this.lineWeight);
         
    
    
};
    
this.unselectTool = function() {
		//clear options
		select(".options").html("");
	};  
    

    
}