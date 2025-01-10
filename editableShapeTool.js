function EditableShapeTool(){

    this.name = "editableShapeTool";
	this.icon = "assets/editableShape.jpg";    

var editMode;
var currentShape = [];

this.setup = function(){
    
    background(200);
    noFill();
    loadPixels();
    editMode = false;
       
}

this.draw = function(){
    
    //check if mouse is pressed
    
//    stroke(0)
    updatePixels();
    if(this.mousePressOnCanvas(this.c) && mouseIsPressed){
        
        if(!editMode){
            currentShape.push({
               x: mouseX,
               y: mouseY
            });
        }
        else{
            
            for(var i =0; i < currentShape.length; i++){
                
                if(dist(currentShape[i].x, currentShape[i].y, mouseX, mouseY) <15)
                {
                  currentShape[i].x = mouseX;
                  currentShape[i].y = mouseY;   
                }
            }
        }
    }
    
    beginShape();
    for(var i = 0; i < currentShape.length; i++)
    {
      vertex(currentShape[i].x, currentShape[i].y)
      if(editMode){
          
          fill('blue');
          ellipse(currentShape[i].x, currentShape[i].y, 7);
          noFill();
      }    
    }
    endShape();
    
}

this.mousePressOnCanvas = function(canvas){
     
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

this.populateOptions = function(){
    
         
    //populate buttons for edit and finish shape
		select(".options").html(
			"<button id='directionButton'>Edit Shape</button><button id='directionButton1'>Finish Shape</button>")
    
        select("#directionButton").mouseClicked(function() {
			var button = select("#" + this.elt.id);
			if(editMode){
            
               editMode = false;
               button.html("Edit Shape");
        }
            else{
                
               editMode = true;
               button.html("Add Vertices");
        }
            
		});
    
        select("#directionButton1").mouseClicked(function(){
			var button1 = select("#" + this.elt.id);

            if(editMode || !editMode){
            
                editMode = false;
                draw();
                loadPixels();
                currentShape = []; 
  
               
            }
            
           
   
           
        });
  

}
  
this.unselectTool = function() {
		//clear options
		select(".options").html("");
	};
    
}
    
