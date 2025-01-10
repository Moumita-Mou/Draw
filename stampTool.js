function StampTool(){

this.name = "StampTool"
this.icon = './assets/stamp.jpg'
    
//create Sliders    
var sizeStamp = createSlider(5, 60, 50);
var numStamp  = createSlider(1, 50, 1); 
    
var stampOptions;    
    
    var options = createDiv().style('display: flex')
    options.position(400,600)
    options.hide();
    
    //create option title
    var optionsTitles = createDiv().parent(options)
    createP('Stamp Options').parent(optionsTitles) 
    optionsTitles.position(-70, 8)
    
    var optionsValues = createDiv().parent(options).style('margin: 10px 40px; width: 80px')
    stampOptions = createSelect(false).parent(optionsValues).style('margin-top: 10px; width: 100px; height: 25px')
    
    // stamp options
    
    stampOptions.option('Magic Wand')
    stampOptions.option('Heart')
    stampOptions.option('Cloud')
    stampOptions.option('Christmas Tree')
    stampOptions.option('Ice Cream')
    stampOptions.option('Thunder')
    stampOptions.selected('Ice Cream')

    
       

this.draw = function(){
    
    this.stampOptions = stampOptions;
    options.show()
     
    //check if mouse is pressed, then ensure images are printed on canvas
    if(mouseIsPressed)
   { 
     if(this.stampOptions.value() === 'Magic Wand'){
      
         for(var i = 0; i < numStamp.value(); i++)  
         {
         
             var stampX_Pos  = random((mouseX - 50/2) - 10, 
                                      (mouseX - 50/2) + 10);

             var stampY_Pos  = random((mouseY - 50/2) - 10,
                                      (mouseY - 50/2) + 10);

            image(magicWand, stampX_Pos, stampY_Pos, sizeStamp.value(),sizeStamp.value())
          }   
         

         
     } 
       
     if(this.stampOptions.value() === 'Heart'){
      
         for(var i = 0; i < numStamp.value(); i++)  
         {
         
             var stampX_Pos  = random((mouseX - 50/2) - 10, 
                                      (mouseX - 50/2) +10);

             var stampY_Pos  = random((mouseY - 50/2) - 10,
                                      (mouseY - 50/2) + 10);

            image(heart, stampX_Pos, stampY_Pos, sizeStamp.value(),sizeStamp.value())
          }   
         
         
     } 
       
     if(this.stampOptions.value() === 'Cloud'){
      
         for(var i = 0; i < numStamp.value(); i++)  
         {
         
             var stampX_Pos  = random((mouseX - 50/2) - 10, 
                                      (mouseX - 50/2) +10);

             var stampY_Pos  = random((mouseY - 50/2) - 10,
                                      (mouseY - 50/2) + 10);

            image(cloud, stampX_Pos, stampY_Pos, sizeStamp.value(),sizeStamp.value())
          }   
         
         
     }
     
     if(this.stampOptions.value() === 'Christmas Tree'){
      
      for(var i = 0; i < numStamp.value(); i++)  
      {
      
          var stampX_Pos  = random((mouseX - 50/2) - 10, 
                                   (mouseX - 50/2) +10);

          var stampY_Pos  = random((mouseY - 50/2) - 10,
                                   (mouseY - 50/2) + 10);

         image(christmasTree, stampX_Pos, stampY_Pos, sizeStamp.value(),sizeStamp.value())
       }   
      
      
  }
       
     if(this.stampOptions.value() === 'Ice Cream'){
      
         for(var i = 0; i < numStamp.value(); i++)  
         {
         
             var stampX_Pos  = random((mouseX - 50/2) - 10, 
                                      (mouseX - 50/2) +10);

             var stampY_Pos  = random((mouseY - 50/2) - 10,
                                      (mouseY - 50/2) + 10);

            image(iceCream, stampX_Pos, stampY_Pos, sizeStamp.value(),sizeStamp.value())
          }   
         
         
     }
       
      if(this.stampOptions.value() === 'Thunder'){
      
         for(var i = 0; i < numStamp.value(); i++)  
         {
         
             var stampX_Pos  = random((mouseX - 50/2) - 10, 
                                      (mouseX - 50/2) +10);

             var stampY_Pos  = random((mouseY - 50/2) - 10,
                                      (mouseY - 50/2) + 10);

            image(thunder, stampX_Pos, stampY_Pos, sizeStamp.value(),sizeStamp.value())
          }   
         
         
     }
          
     
   }
    
    
}

this.populateOptions = function(){
    
    
        //populate slider to alter number & size of images 
        select(".options").html(
			'<div id = "controls"><div id = "sizeOfStampsControl"></div><div id = "controls">Size ----------- Number<div id = "numberOfStampControl"></div></div>') 
    
        select(".options").child(sizeStamp);
        
        select(".options").child(numStamp); 
        
        
  
    
}

this.unselectTool = function(){
    
    options.hide();
    select(".options").html("");
    
}

}