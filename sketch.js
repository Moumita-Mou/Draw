//global variables that will store the toolbox colour palette
//amnd the helper functions
 var toolbox = null;
 var colourP = null;
 var helpers = null;

function preload(){
   
   magicWand = loadImage('./assets/magic_wand.png');
   heart = loadImage('./assets/heart.jpg') 
   cloud = loadImage('./assets/cloud.png')
   christmasTree = loadImage('./assets/christmas_tree.png')
   iceCream = loadImage('./assets/ice_cream.jpg') 
   thunder = loadImage('./assets/thunder2.png')     
}

function setup() {

	//create a canvas to fill the content div from index.html
	canvasContainer = select('#content');
	var c = createCanvas(canvasContainer.size().width, canvasContainer.size().height);
	c.parent("content")
    
    
	//create helper functions and the colour palette
	helpers = new HelperFunctions();
	colourP = new ColourPalette();

	//create a toolbox for storing the tools
	toolbox = new Toolbox();

	//add the tools to the toolbox.
   
	toolbox.addTool(new FreehandTool());
    toolbox.addTool(new BrushTool());
    toolbox.addTool(new mirrorDrawTool());
	toolbox.addTool(new LineToTool());
    toolbox.addTool(new EraserTool());
    toolbox.addTool(new StampTool());
    toolbox.addTool(new EditableShapeTool());
    toolbox.addTool(new ColorFunTool());
    toolbox.addTool(new SprayCanTool());
    toolbox.addTool(new EllipseTool());
    toolbox.addTool(new RectangleTool());
    toolbox.addTool(new MultiColorPenTool());
    toolbox.addTool(new ZoomTool());
    toolbox.addTool(new GradientBrushTool());
	background(255);

}   


//UNDO FUNCTION
    
var previousState;

var stateIndex = 0;


function keyPressed(e) {
 // check if the event parameter (e) has Z (keycode 90) and ctrl or cmnd
 if (e.keyCode == 90 && (e.ctrlKey || e.metaKey)){
     undoToPreviousState();
 }   
           
}
      
function undoToPreviousState() {
 // if previousState doesn't exist ie is null
 // return without doing anything
 if(!previousState) {
   return;
 }
 // else draw the background (in this case white)
 // and draw the previous state
 
 image(previousState, 0, 0);
 // then set previous state to null
 previousState = null;
}  

function mousePressed() {
 // the moment input is detect save the state
 saveState();
   
}

function saveState() {
 // save state by taking image of background
 // for more info look at reference for get
  previousState = get();
}


function draw() {
	//call the draw function from the selected tool.
	//hasOwnProperty is a javascript function that tests
	//if an object contains a particular method or property
	//if there isn't a draw method the app will alert the user
	if (toolbox.selectedTool.hasOwnProperty("draw")) {
		toolbox.selectedTool.draw();
	} else {
		alert("it doesn't look like your tool has a draw method!");
	}
    
}
