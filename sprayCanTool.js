function SprayCanTool(){
	
	this.name = "sprayCanTool";
	this.icon = "assets/sprayCan.jpg";

	var points = 13;
	var spread = 10;
    
    //create sliders
    var sprayDensity = createSlider(1, 30, 1); 
    

	this.draw = function()
    {   
        push()
		var r = random(5,10);
        strokeWeight(sprayDensity.value())
		if(mouseIsPressed){
			for(var i = 0; i < points; i++){
				point(random(mouseX-spread, mouseX+spread), random(mouseY-spread, mouseY+spread));
			}
		}
        pop()
	};
    
    this.populateOptions = function(){
    

         select(".options").html(
			'<div id = "controls"><div id = "Spray Density"> Spray Density </div></div>') 
    
         select(".options").child(sprayDensity);
         
    
    
};
    
  this.unselectTool = function() {
		//clear options
		select(".options").html("");
	}; 
}