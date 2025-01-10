function GradientBrushTool(){
    
    
    this.name = "gradientBrushTool"
    this.icon = './assets/flexiblePenShape.jpg'
    
    var penColor;
    var penShape;
    var penWidth;
    var penRandom;
    
    var options = createDiv().style('display: flex')
    options.position(430,550)
    options.hide();
    

    //create option title
    var optionsTitles = createDiv().parent(options)
    optionsTitles.position(-60, 10)
    
    createP('Pen Color').parent(optionsTitles)
    createP('Pen Shape').parent(optionsTitles)
    createP('Pen Width').parent(optionsTitles)
    
    var optionsValues = createDiv().parent(options).style('margin: 10px 40px; width: 80px')
    
    penColor = createColorPicker('#1e1e1e').parent(optionsValues).style('margin-top: 10px')
    penShape = createSelect(false).parent(optionsValues).style('margin-top: 10px; width: 100px; height: 25px')
    penWidth = createSelect(false).parent(optionsValues).style('margin-top: 10px')
    penRandom = createCheckbox("", false).parent(optionsValues).style('display: inline')
    penRandom.position(100, 20)  
    
    penWidth.option('2')
    penWidth.option('4')
    penWidth.option('8')
    penWidth.option('16')
    penWidth.option('32')
    penWidth.selected('16')
    
    penShape.option('Line')
    penShape.option('Circle')
    penShape.option('Rectangle')
    penShape.option('Triangle')
    penShape.option('Star') 
    penShape.option('Hexagon') 
    penShape.selected('Triangle')
    

    var pMouseX = -1
    var pMouseY = -1 

    angleMode(DEGREES) 
    noiseDetail(6)

this.draw = function() {
    
    this.penShape = penShape
    this.penWidth = penWidth
    this.penColor = penColor
    this.penRandom = penRandom
    
    options.show();
    
    
    push()
    if(penRandom.checked()){
        
        // Color randomness
          var r = hex(floor(map(noise(frameCount/100), 0, 1, 0, 255)), 2)
          var g = hex(floor(map(noise(frameCount/100 + 1000), 0, 1, 0, 255)), 2)
          var b = hex(floor(map(noise(frameCount/100 + 2000), 0, 1, 0, 255)), 2)
    
          penColor.value('#' + r + g + b)
        
    }
    
    if(this.mousePressOnCanvas(this.c) && mouseIsPressed){
           
             noFill()
             strokeWeight(this.penWidth.value());
             stroke(this.penColor.value())
    
       
			if(this.penShape.value() === 'Line'){
                
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
        
            
         if(this.penShape.value() === 'Circle'){
          
          fill(this.penColor.value())
          noStroke
          ellipse(mouseX, mouseY, this.penWidth.value())
          
      }
        
        if(this.penShape.value() === 'Rectangle'){
            
             fill(this.penColor.value())
             noStroke()
             rect(mouseX, mouseY, this.penWidth.value())  
            
        }
        
        
        if(this.penShape.value() === 'Triangle')
        {
           fill(this.penColor.value())
           noStroke()
           push()
            
           translate(mouseX, mouseY)
            
           beginShape()    
           for(var i = 0; i < 360; i+= 120)
           {
              var rad = this.penWidth.value()/2
              var x = rad * cos(i)
              var y = rad * sin(i)
              vertex(x, y);
           }
           endShape(CLOSE)
           pop() 
        
        } 
        
        if(this.penShape.value() === 'Star')
        {
           fill(this.penColor.value())
           noStroke()
           push()
            
           translate(mouseX, mouseY)
            
           beginShape()    
           for(var i = 0; i < 720; i+= 720/5)
           {
              var rad = this.penWidth.value()/2
              var x = rad * cos(i)
              var y = rad * sin(i)
              vertex(x,y);
           }
           endShape(CLOSE)
           pop() 
        
        }
        
        if(this.penShape.value() === 'Hexagon')
        {
           fill(this.penColor.value())
           noStroke()
           push()
            
           translate(mouseX, mouseY)
            
           beginShape()    
           for(var i = 0; i < 360; i+= 360/6)
           {
              var rad = this.penWidth.value()/2
              var x = rad * cos(i)
              var y = rad * sin(i)
              vertex(x,y);
           }
           endShape(CLOSE)
           pop() 
        
        }
          
    }
    
    else{
			pMouseX = -1;
			pMouseY = -1;
		}
    
    pop()
    
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

this.unselectTool = function(){
    
    options.hide();
        
}

}