function ColorFunTool(){

this.name = "colorFunTool"
this.icon = './assets/colorFun.png'

// Creating Sliders    
    
var opacity = createSlider(1, 200, 100); 
var size = createSlider(15, 60, 20); 
var redness = createSlider(0, 255, 255);  


this.draw = function(){
    
    
// When mouse is pressed it draws continuous random color ellipses    
   push()
    if(mouseIsPressed)
   { 
     var r = redness.value();
     var g = random(20, 255);
     var b = random(40, 255);
    
         noStroke();   
         fill(r, g, b, opacity.value());
         ellipse(mouseX, mouseY, size.value());
         
                                 
   }
    
   pop() 
}

this.populateOptions = function(){
    
        // populate sliders
         select(".options").html(
			'<div id = "controls"><div id = "opacity"></div><div id = "controls"><div id = "size"> Opacity ---- Size of Ellipse - Redness </div><div id = "controls"><div id = "redness"></div></div>')
    
    
    
        select(".options").child(opacity);

        select(".options").child(size); 
    
        select(".options").child(redness);

}

this.unselectTool = function() {
		//clear options
		select(".options").html("");
	};
}