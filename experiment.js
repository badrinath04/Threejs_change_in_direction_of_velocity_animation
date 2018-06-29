
var div;

var link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('type', 'text/css');
link.setAttribute('href', 'style.css');
document.getElementsByTagName('head')[0].appendChild(link);
/******************* End of Interaction functions ***********************/

/******************* GUI control objects code ***********************/
var PosX;           /* X Position Slider Label */
var PosY;           /* Y Position Slider Label */
var VelX;           /* X Velocity Slider Label */
var VelY;           /* Y Velocity Slider Label */
var AccY;           /* Y Acceleration Slider Label */
var Xdefault;       /* X Position Slider Default Value */
var Ydefault;       /* Y Position Slider Default Value */
var VXdefault;      /* X Velocity Slider Default Value */
var VYdefault;      /* Y Velocity Slider Default Value */
var AYdefault;      /* Y Acceleration Slider Default Value */
var Xmin;           /* X Position Slider Minimum Value */
var Xmax;           /* X Position Slider Maximum Value */
var Ymin;           /* Y Position Slider Minimum Value */
var Ymax;           /* Y Position Slider Maximum Value */
var VXmin;          /* X Velocity Slider Minimum Value */
var VXmax;          /* X Velocity Slider Maximum Value */
var VYmin;          /* Y Velocity Slider Minimum Value */
var VYmax;          /* Y Velocity Slider Maximum Value */
var AYmin;          /* Y Acceleration Slider Minimum Value */
var AYmax;          /* Y Acceleration Slider Maximum Value */
var Xstep;          /* X Position Slider Step */
var Ystep;          /* Y Position Slider Step */
var VXstep;         /* X Velocity Slider Step */
var VYstep;         /* Y Velocity Slider Step */
var AYstep;         /* Y Acceleration Slider Step */
var Displacement;
var Distance;
var current;
var ob_circle;
var text0;
var arrow1;






function initialiseControls()
{
        
PIEaddInputSlider("No of vertices", 4, verticeschange, 3, 8, 1);   
PIEaddInputCommand("Circular Motion", circlemotion);
}

var circle1;
var circlerotate=0;



function resetExperiment()
{
    circlerotate=0;
    //PIEchangeDisplaySlider("No of vertices", 4);
    resettext();

    turn=1;
    countarrow=1;
    circlerotate=0;
 verticesno=PIEgetInputSlider("No of vertices");
flag1=0,flag2=0,flag3=0,flag4=0,flag5=0,flag6=0,flag7=0,flag8=0,flag9=0,flag10=0;
 PIEremoveElement(circle1);
     PIErender();
    verticeschange();
    PIErender();

}



function circlemotion(){
     console.log('circle motion entered entered');
   
point1.visible=false;
    point2.visible=false;
    point3.visible=false;
    point4.visible=false;
    point5.visible=false;
    point6.visible=false;
    point7.visible=false;
    point8.visible=false;
    point9.visible=false;
    point10.visible=false;
    point11.visible=false;
    point12.visible=false;
    point13.visible=false;
    point20.visible=false;

    arrowHelper1.visible=false;
arrowHelper2.visible=false;
arrowHelper3.visible=false;
arrowHelper4.visible=false;
arrowHelper5.visible=false;
arrowHelper6.visible=false;
arrowHelper7.visible=false;
arrowHelper8.visible=false;
arrowHelper9.visible=false;
arrowHelper10.visible=false;


t1.visible=false;
t2.visible=false;
t3.visible=false;
PIErender();

    rectangle.visible=false;

    point20.position.set(3.95,0,0.01);
    point20.visible=true;

     circlerotate=1;
     angleflag=0;

     PIEremoveElement(circle1);
     PIErender();

    var geometry = new THREE.RingBufferGeometry( 3.9, 4, 100,100,6,6.3 );
var material = new THREE.MeshBasicMaterial( { color: 0x164ba0, side: THREE.DoubleSide } );
circle1= new THREE.Mesh( geometry, material );
circle1.visible=true;
PIEaddElement(circle1);
circle1.position.set(0,0,0);
PIErender();    
}


function createMesh(geom, imageFile) {
       var texture = new THREE.TextureLoader().load(imageFile);
       var mat = new THREE.MeshBasicMaterial();
       mat.map = texture;
       mat.transparent = true;
       mat.map.needsUpdate = true;
       var mesh = new THREE.Mesh(geom, mat);PIErender();
       PIErender();
       return mesh;

}

var arrow1;
function verticeschange(){
    turn=1;
    countarrow=1;
    circlerotate=0;
 verticesno=PIEgetInputSlider("No of vertices");

 PIEremoveElement(circle1);
     PIErender();
 // if (circlerotate==1) {
 //    console.log('vertice schsnge entered');
 //    circle.visible=false;
 // }
 initialiseOtherVariables();
 point20.visible=false;
    point1.position.set(p1x,p1y,0.01);
    point2.position.set(p2x,p2y,0.01);
    point3.position.set(p3x,p3y,0.01);
    point4.position.set(p4x,p4y,0.01);
    point5.position.set(p5x,p5y,0.01);
    point6.position.set(p6x,p6y,0.01);
    point7.position.set(p7x,p7y,0.01);
    point8.position.set(p8x,p8y,0.01);
    point9.position.set(p9x,p9y,0.01);
    point10.position.set(p10x,p10y,0.01);
    point11.position.set(p11x,p11y,0.01);
    point12.position.set(p12x,p12y,0.01);
    point13.position.set(p13x,p13y,0.01);
    arrowHelper1.visible=false;
arrowHelper2.visible=false;
arrowHelper3.visible=false;
arrowHelper4.visible=false;
arrowHelper5.visible=false;
arrowHelper6.visible=false;
arrowHelper7.visible=false;
arrowHelper8.visible=false;
arrowHelper9.visible=false;
arrowHelper10.visible=false;
 if (verticesno==3) {
    PIEremoveElement(rectangle);
    PIErender();
    
    point1.visible=false;
    point2.visible=true;
    point3.visible=false;
    point4.visible=false;
    point5.visible=true;
    point6.visible=false;
    point7.visible=true;
    point8.visible=false;
    point9.visible=false;
    point10.visible=false;
    point11.visible=false;
    point12.visible=false;
    point13.visible=false;


    var material = new THREE.LineBasicMaterial({color: 0x164ba0,linewidth:3.5});
        var geometry = new THREE.Geometry();
        var v2 = new THREE.Vector3(p2x,p2y,0);  
        var v5 = new THREE.Vector3(p5x,p5y,0);
        var v7 = new THREE.Vector3(p7x,p7y,0);
        var v15 = new THREE.Vector3(p2x,p2y,0);  
       
        geometry.vertices.push(v2);
        geometry.vertices.push(v5);
        geometry.vertices.push(v7);
        geometry.vertices.push(v15);
        
        rectangle = new THREE.Line( geometry, material );
        rectangle.visible=true;
        PIEaddElement(rectangle);
        PIErender();
 }

 else if (verticesno==4) {
    PIEremoveElement(rectangle);
    PIErender();

    point1.visible=true;
    point2.visible=false;
    point3.visible=true;
    point4.visible=false;
    point5.visible=true;
    point6.visible=false;
    point7.visible=true;
    point8.visible=false;
    point9.visible=false;
    point10.visible=false;
    point11.visible=false;
    point12.visible=false;
    point13.visible=false;




    var material = new THREE.LineBasicMaterial({color: 0x164ba0,linewidth:3.5});
        var geometry = new THREE.Geometry();
        var v1 = new THREE.Vector3(p1x,p1y,0);  
       // var v2 = new THREE.Vector3(p2x,p2y,0);
        var v3 = new THREE.Vector3(p3x,p3y,0);   
        //var v4 = new THREE.Vector3(p4x,p4y,0);
        var v5 = new THREE.Vector3(p5x,p5y,0);
        //var v6 = new THREE.Vector3(p6x,p6y,0);
        var v7 = new THREE.Vector3(p7x,p7y,0);
        //var v8 = new THREE.Vector3(p8x,p8y,0);
        var v15 = new THREE.Vector3(p1x,p1y,0);
        geometry.vertices.push(v1);
       // geometry.vertices.push(v2);
        geometry.vertices.push(v3);
       // geometry.vertices.push(v4);
        geometry.vertices.push(v5);
       // geometry.vertices.push(v6);
        geometry.vertices.push(v7);
        //geometry.vertices.push(v8);
        geometry.vertices.push(v15);
        
        rectangle = new THREE.Line( geometry, material );
        rectangle.visible=true;
        PIEaddElement(rectangle);
        PIErender();



 }
else if (verticesno==5) {
    PIEremoveElement(rectangle);
    PIErender();
initialiseOtherVariables();
    point1.visible=false;
    point2.visible=true;
    point3.visible=false;
    point4.visible=true;
    point5.visible=true;
    point6.visible=false;
    point7.visible=true;
    point8.visible=true;
    point9.visible=false;
    point10.visible=false;
    point11.visible=false;
    point12.visible=false;
    point13.visible=false;



    var material = new THREE.LineBasicMaterial({color: 0x164ba0,linewidth:3.5});
        var geometry = new THREE.Geometry();
       // var v1 = new THREE.Vector3(p1x,p1y,0);  
        var v2 = new THREE.Vector3(p2x,p2y,0);
        //var v3 = new THREE.Vector3(p3x,p3y,0);   
        var v4 = new THREE.Vector3(p4x,p4y,0);
        var v5 = new THREE.Vector3(p5x,p5y,0);
        //var v6 = new THREE.Vector3(p6x,p6y,0);
        var v7 = new THREE.Vector3(p7x,p7y,0);
        var v8 = new THREE.Vector3(p8x,p8y,0);
        var v15 = new THREE.Vector3(p2x,p2y,0);
        geometry.vertices.push(v2);
       // geometry.vertices.push(v2);
        geometry.vertices.push(v4);
       // geometry.vertices.push(v4);
        geometry.vertices.push(v5);
       // geometry.vertices.push(v6);
        geometry.vertices.push(v7);
        geometry.vertices.push(v8);
        geometry.vertices.push(v15);
        
        rectangle = new THREE.Line( geometry, material );
        rectangle.visible=true;
        PIEaddElement(rectangle);
        PIErender();
 }

 else if (verticesno==6) {
    PIEremoveElement(rectangle);
    PIErender();

    point1.visible=false;
    point2.visible=true;
    point3.visible=false;
    point4.visible=true;
    point5.visible=true;
    point6.visible=false;
    point7.visible=true;
    point8.visible=true;
    point9.visible=true;
    point10.visible=false;
    point11.visible=false;
    point12.visible=false;
    point13.visible=false;



    var material = new THREE.LineBasicMaterial({color: 0x164ba0,linewidth:3.5});
        var geometry = new THREE.Geometry();
       // var v1 = new THREE.Vector3(p1x,p1y,0);  
        var v2 = new THREE.Vector3(p2x,p2y,0);
        //var v3 = new THREE.Vector3(p3x,p3y,0);   
        var v4 = new THREE.Vector3(p4x,p4y,0);
        var v5 = new THREE.Vector3(p5x,p5y,0);
        var v9=  new THREE.Vector3(p9x,p9y,0);
        //var v6 = new THREE.Vector3(p6x,p6y,0);
        var v7 = new THREE.Vector3(p7x,p7y,0);
        var v8 = new THREE.Vector3(p8x,p8y,0);
        var v15 = new THREE.Vector3(p2x,p2y,0);
        geometry.vertices.push(v2);
       // geometry.vertices.push(v2);
        geometry.vertices.push(v4);
       // geometry.vertices.push(v4);
        geometry.vertices.push(v5);
        geometry.vertices.push(v9);
       // geometry.vertices.push(v6);
        geometry.vertices.push(v7);
        geometry.vertices.push(v8);
        geometry.vertices.push(v15);
        
        rectangle = new THREE.Line( geometry, material );
        rectangle.visible=true;
        PIEaddElement(rectangle);
        PIErender();
 }

  else if (verticesno==7) {
    PIEremoveElement(rectangle);
    PIErender();

    point1.visible=false;
    point2.visible=true;
    point3.visible=false;
    point4.visible=true;
    point5.visible=true;
    point6.visible=false;
    point7.visible=true;
    point8.visible=true;
    point9.visible=false;
    point10.visible=true;
    point11.visible=true;
    point12.visible=false;
    point13.visible=false;



    var material = new THREE.LineBasicMaterial({color: 0x164ba0,linewidth:3.5});
        var geometry = new THREE.Geometry();
       // var v1 = new THREE.Vector3(p1x,p1y,0);  
        var v2 = new THREE.Vector3(p2x,p2y,0);
        //var v3 = new THREE.Vector3(p3x,p3y,0);   
        var v4 = new THREE.Vector3(p4x,p4y,0);
        var v5 = new THREE.Vector3(p5x,p5y,0);
        var v10=  new THREE.Vector3(p10x,p10y,0);
        var v11=  new THREE.Vector3(p11x,p11y,0);
        //var v6 = new THREE.Vector3(p6x,p6y,0);
        var v7 = new THREE.Vector3(p7x,p7y,0);
        var v8 = new THREE.Vector3(p8x,p8y,0);
        var v15 = new THREE.Vector3(p2x,p2y,0);
        geometry.vertices.push(v2);
       // geometry.vertices.push(v2);
        geometry.vertices.push(v4);
       // geometry.vertices.push(v4);
        geometry.vertices.push(v5);
        geometry.vertices.push(v10);
        geometry.vertices.push(v11);
        geometry.vertices.push(v7);
        geometry.vertices.push(v8);
        geometry.vertices.push(v15);
        
        rectangle = new THREE.Line( geometry, material );
        rectangle.visible=true;
        PIEaddElement(rectangle);
        PIErender();
 }

 else if (verticesno==8) {
    PIEremoveElement(rectangle);
    PIErender();

     point12.visible=true;
    point13.visible=true;
    point1.visible=false;
    point2.visible=false;
    point3.visible=false;
    point4.visible=true;
    point5.visible=true;
    point6.visible=false;
    point7.visible=true;
    point8.visible=true;
    point9.visible=false;
    point10.visible=true;
    point11.visible=true;
   



    var material = new THREE.LineBasicMaterial({color: 0x164ba0,linewidth:3.5});
        var geometry = new THREE.Geometry();
       // var v1 = new THREE.Vector3(p1x,p1y,0);  
        var v12 = new THREE.Vector3(p12x,p12y,0);
        var v13 = new THREE.Vector3(p13x,p13y,0);   
        var v4 = new THREE.Vector3(p4x,p4y,0);
        var v5 = new THREE.Vector3(p5x,p5y,0);
        var v10=  new THREE.Vector3(p10x,p10y,0);
        var v11=  new THREE.Vector3(p11x,p11y,0);
        //var v6 = new THREE.Vector3(p6x,p6y,0);
        var v7 = new THREE.Vector3(p7x,p7y,0);
        var v8 = new THREE.Vector3(p8x,p8y,0);
        var v15 = new THREE.Vector3(p12x,p12y,0);
        geometry.vertices.push(v12);
       // geometry.vertices.push(v2);
        geometry.vertices.push(v13);
        geometry.vertices.push(v4);
        geometry.vertices.push(v5);
        geometry.vertices.push(v10);
        geometry.vertices.push(v11);
        geometry.vertices.push(v7);
        geometry.vertices.push(v8);
        geometry.vertices.push(v15);
        
        rectangle = new THREE.Line( geometry, material );
        rectangle.visible=true;
        PIEaddElement(rectangle);
        PIErender();
 }

resettext();



}

var verticesno;


function getvertices(){
    verticesno=PIEgetInputSlider("No of vertices");
}

/******************* End of GUI control objects code ***********************/

/******************* Load Experiment objects code ***********************/

var helpContent;
function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>Changing direction of velocity (Circular motion)</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows how an object velocity direction changes according to the given path and in circular path.</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation controls. It contains a input slider and a button.</p>";
    //helpContent = helpContent + "<h3>The setup stage</h3>";
   // helpContent = helpContent + "<p>The initial state is setup stage. In this stage, you can see a control window at the right. You have access to five sliders.</p>";
   // helpContent = helpContent + "<p>You can control like the following:</p>";
    // helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<p>You can change the object moving path by changing the input slider.</p>";
    helpContent = helpContent + "<p>When circular motion button is oppressed it shows how its demo.</p>";
    helpContent = helpContent + "<p>And a rest button is there to reset the experiment.</p>";
    // helpContent = helpContent + "</ul>";
    // helpContent = helpContent + "<p>You also have an additional text input to control the coefficient of restitution of the bottom floor.</p>";
    // helpContent = helpContent + "<p>Once you setup the experiment, you can enter the animation stage by clicking the start button</p>";
    helpContent = helpContent + "<h3>The animation stage</h3>";
    helpContent = helpContent + "<p>In the animation stage, if student clicks the start button the animation will start.</p>";
    helpContent = helpContent + "<p>The yellow circle ---> represents the moving object. </p>";
    helpContent = helpContent + "<p>The black circles ---> represents the vertices of moving path which are dragable, so that student can change the moving path.</p>";
    helpContent = helpContent + "<p>The arrows ---> represents the direction of velocity.</p>";
    helpContent = helpContent + "<p>When the animation started the object starts moving along the track given. And student can observe how the direction of velocity of moving objects was changed with respect to path.</p>";
    helpContent = helpContent + "<p>Student can repeat the experiment by pulling(drag and drop) the vertices of the path.</p>";
    helpContent = helpContent + "<p>When the button circular motion is oppressed the animation shows how the direction of velocity of moving object changes. </p>";
    // helpContent = helpContent + "<ul>";
    // helpContent = helpContent + "<li>X&nbsp;&nbsp;:&nbsp;Shows the X position of the ball.</li>";
    // helpContent = helpContent + "<li>Y&nbsp;&nbsp;:&nbsp;Shows the Y position of the ball.</li>";
    // helpContent = helpContent + "<li>VX&nbsp;:&nbsp;Shows the X velocity of the ball.</li>";
    // helpContent = helpContent + "<li>VY&nbsp;:&nbsp;Shows the Y velocity of the ball.</li>";
    // helpContent = helpContent + "</ul>";
    // helpContent = helpContent + "<p>In addition you will also see two sliders showing potential and kinetic energy.</p>";
    // helpContent = helpContent + "<p>You can pause and resume the animation by using the pause/play nutton on the top line</p>";
    // helpContent = helpContent + "<p>You can slow down and speed up the animaion by uing the speed control buttons</p>";
    // helpContent = helpContent + "<h3>The drag and drop</h3>";
    // helpContent = helpContent + "<p>You can also position the ball by dragging and dropping it. You can only do this in the setup stage. This has been prevented in the animation stage.</p>";
    helpContent = helpContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>Changing direction of velocity (Circular motion)</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows how an object velocity direction changes according to the given path and in circular path.</p>";
    infoContent = infoContent + "<h3>Experiment Concept</h3>";
    infoContent = infoContent + "<h4>When the velocity of an object changes, we say that the object is accelerating. The change in the velocity could be due to change in its magnitude or the direction of the motion or both. Can you think of an example when an object does not change its magnitude of velocity but only its direction of motion?</h4>";
    infoContent = infoContent + "<p>Let us consider an example of the motion of a body along a closed path. Lets assume the path of an athlete along a rectangular track ABCD. Let us assume that the athlete runs at a uniform speed on the straight parts AB, BC, CD and DA of the track. In order to keep himself on track, he quickly changes his speed at the corners. How many times will the athlete have to change his direction of motion, while he completes one round? It is clear that to move in a rectangular track once, he has to change his direction of motion four times.</p>";
    infoContent = infoContent + "<p>Now, suppose instead of a rectangular track, the athlete is running along a hexagonal shaped path ABCDEF. In this situation, the athlete will have to change his direction six times while he completes one round. What if the track was not a hexagon but a octagon, with eight sides? It is observed that as the number of sides of the track increases the athelete has to take turns more and more often. What would happen to the shape of the track as we go on increasing the number of sides indefinitely? If you do this you will notice that the shape of the track approaches the shape of a circle and the length of each of the sides will decrease to a point. If the athlete moves with a velocity of constant magnitude along the circular path, the only change in his velocity is due to the change in the direction of motion. The motion of the athlete moving along a circular path is, therefore, an example of an accelerated motion.</p>";
    infoContent = infoContent + "<p>We know that the circumference of a circle of radius r is given by 2πr . If the athlete takes t seconds to go once around the circular path of radius r, the velocity v is given by  v = 2πr/t</p>";
    infoContent = infoContent + "<p>When an object moves in a circular path with uniform speed, its motion is called uniform circular motion.</p>";
    // infoContent = infoContent + "<h3>The coefficient of restitution</h3>";
     infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    PIEupdateInfo(infoContent);
}

function initialiseScene()
{
    // /* Initialise Scene Variables */
    // mySceneTLX = 0.0;
    // mySceneTLY = 3.0;
    // mySceneBRX = 4.0;
    // mySceneBRY = 0.0;
    // mySceneW   = (mySceneBRX - mySceneTLX);
    // mySceneH   = (mySceneTLY - mySceneBRY);
    // myCenterX  = (mySceneTLX + mySceneBRX) / 2.0;
    // myCenterY  = (mySceneTLY + mySceneBRY) / 2.0;
    // myBallZ    = -2.0;
}

var slope1,slope2,slope3;

function initialiseOtherVariables()
{
 p1x=-4;
 p1y=2;
 p2x=0;
 p2y=2;
 p3x=4;
 p3y=2;
 p4x=4;
 p4y=0;
 p5x=4;
 p5y=-2;
 p6x=0;
 p6y=-2;
 p7x=-4;
 p7y=-2;
 p8x=-4;
 p8y=0;
 p9x=0;
 p9y=-4;
 p10x=2;
 p10y=-4;
 p11x=-2;
 p11y=-4;
 p12x=-2;
 p12y=2;
 p13x=2;
 p13y=2;
}


var loader,materialSide,materialArray;

var rectangle,polygon1,back;
var point1,point2,point3,point4,point5,point6,point7,point8,point9,point10,point11,point12,point13,point14,point20;
var p1x,p1y,p2x,p2y,p3x,p3y,p4x,p4y,p5x,p5y,p6x,p6y,p7x,p7y,p8x,p8y,p9x,p9y,p10x,p10y,p11x,p11y,p12x,p12y,p13x,p13y;
 var changeDirection;
 var arrowHelper2,arrowHelper3,arrowHelper4,arrowHelper1,arrowHelper5,arrowHelper6,arrowHelper7,arrowHelper8,arrowHelper9,arrowHelper10;
 var dir_vector,t1,t2,t3,t4,t5;

function loadExperimentElements()
{
var geometry;
var material;
var loader;
var texture;


    PIEsetExperimentTitle("Changing direction of velocity (circular motion)");
    PIEsetDeveloperName("Bonthu Badrinath");

    /* initialise help and info content */
    initialiseHelp();
    initialiseInfo();

    /* initialise Scene */
    initialiseScene();


    /* initialise Other Variables */
    initialiseOtherVariables();

    


 PIEscene.background=new THREE.Color( 0xDFE3D4 );
 PIEsetAreaOfInterest(-8,8,8,-8);



    //  polygon1 = new THREE.Shape();
    // polygon1.moveTo(p1x,p1y,0);
    // polygon1.lineTo(p2x,p2y,0);
    // polygon1.lineTo(p3x,p3y,0);
    // polygon1.lineTo(p4x,p4y,0);
    // polygon1.lineTo(p5x,p5y,0);
    // polygon1.lineTo(p6x,p6y,0);
    // polygon1.lineTo(p7x,p7y,0);
    // polygon1.lineTo(p8x,p8y,0);
    // polygon1.lineTo(p1x,p1y,0);
    // rectangle = new THREE.Mesh(new THREE.ShapeGeometry(polygon1), new THREE.MeshBasicMaterial({color:0x361f91}));
    // rectangle.visible = true;
    // PIEaddElement(rectangle);
    // PIErender();


    // geometry=new THREE.PlaneGeometry(36,24);
    // back=createMesh(geometry,"space2.png");
    // back.position.set(0,0,-2);
    // PIEaddElement(back);
    // PIErender();






    var material = new THREE.LineBasicMaterial({color: 0x164ba0,linewidth:3.5});
        var geometry = new THREE.Geometry();
        var v1 = new THREE.Vector3(p1x,p1y,0);  
        var v2 = new THREE.Vector3(p2x,p2y,0);
        var v3 = new THREE.Vector3(p3x,p3y,0);   
        var v4 = new THREE.Vector3(p4x,p4y,0);
        var v5 = new THREE.Vector3(p5x,p5y,0);
        var v6 = new THREE.Vector3(p6x,p6y,0);
        var v7 = new THREE.Vector3(p7x,p7y,0);
        var v8 = new THREE.Vector3(p8x,p8y,0);
        var v9 = new THREE.Vector3(p1x,p1y,0);
        geometry.vertices.push(v1);
        geometry.vertices.push(v2);
        geometry.vertices.push(v3);
        geometry.vertices.push(v4);
        geometry.vertices.push(v5);
        geometry.vertices.push(v6);
        geometry.vertices.push(v7);
        geometry.vertices.push(v8);
        geometry.vertices.push(v9);
        
        rectangle = new THREE.Line( geometry, material );
        rectangle.visible=false;
        PIEaddElement(rectangle);
        PIErender();


var from1 = new THREE.Vector3( 0.1,1, 1);
 var to1 = new THREE.Vector3( 0.1,2.3,1);
    var direction1 = to1.clone().sub(from1);
    var length1 = direction1.length();
    arrowHelper1 = new THREE.ArrowHelper(direction1.normalize(), from1, length1, 0x27c6af,0.3,0.3 );
     arrowHelper1.visible=false;
    PIEaddElement(arrowHelper1);
    //arrowHelper1.position.set(4,0,0);
    PIErender();



    var from2 = new THREE.Vector3( 0.1,1, 1);
 var to2 = new THREE.Vector3( 0.1,2.3,1);
    var direction2 = to2.clone().sub(from2);
    var length2 = direction2.length();
    arrowHelper2 = new THREE.ArrowHelper(direction2.normalize(), from2, length2, 0x27c6af,0.3,0.3 );
     arrowHelper2.visible=false;
    PIEaddElement(arrowHelper2);
    //arrowHelper1.position.set(4,0,0);
    PIErender();



    var from3 = new THREE.Vector3( 0.1,1, 1);
 var to3 = new THREE.Vector3( 0.1,2.3,1);
    var direction3 = to3.clone().sub(from3);
    var length3 = direction3.length();
    arrowHelper3 = new THREE.ArrowHelper(direction3.normalize(), from3, length3, 0x27c6af,0.3,0.3 );
     arrowHelper3.visible=false;
    PIEaddElement(arrowHelper3);
    //arrowHelper1.position.set(4,0,0);
    PIErender();




    var from4 = new THREE.Vector3( 0.1,1, 1);
 var to4 = new THREE.Vector3( 0.1,2.3,1);
    var direction4 = to4.clone().sub(from4);
    var length4 = direction4.length();
    arrowHelper4 = new THREE.ArrowHelper(direction4.normalize(), from4, length4, 0x27c6af,0.3,0.3 );
     arrowHelper4.visible=false;
    PIEaddElement(arrowHelper4);
    //arrowHelper1.position.set(4,0,0);
    PIErender();

    var from5 = new THREE.Vector3( 0.1,1, 1);
 var to5= new THREE.Vector3( 0.1,2.3,1);
    var direction5= to5.clone().sub(from5);
    var length5 = direction5.length();
    arrowHelper5 = new THREE.ArrowHelper(direction5.normalize(), from5, length5, 0x27c6af,0.3,0.3 );
     arrowHelper5.visible=false;
    PIEaddElement(arrowHelper5);
    //arrowHelper1.position.set(4,0,0);
    PIErender();


    var from6 = new THREE.Vector3( 0.1,1, 1);
 var to6 = new THREE.Vector3( 0.1,2.3,1);
    var direction6 = to6.clone().sub(from6);
    var length6 = direction6.length();
    arrowHelper6 = new THREE.ArrowHelper(direction6.normalize(), from6, length6, 0x27c6af,0.3,0.3 );
     arrowHelper6.visible=false;
    PIEaddElement(arrowHelper6);
    //arrowHelper1.position.set(4,0,0);
    PIErender();


    var from7 = new THREE.Vector3( 0.1,1, 1);
 var to7 = new THREE.Vector3( 0.1,2.3,1);
    var direction7 = to7.clone().sub(from7);
    var length7= direction7.length();
    arrowHelper7 = new THREE.ArrowHelper(direction7.normalize(), from7, length7, 0x27c6af,0.3,0.3 );
     arrowHelper7.visible=false;
    PIEaddElement(arrowHelper7);
    //arrowHelper1.position.set(4,0,0);
    PIErender();


    var from8 = new THREE.Vector3( 0.1,1, 1);
 var to8 = new THREE.Vector3( 0.1,2.3,1);
    var direction8 = to8.clone().sub(from8);
    var length8 = direction8.length();
    arrowHelper8 = new THREE.ArrowHelper(direction8.normalize(), from8, length8, 0x27c6af,0.3,0.3 );
     arrowHelper8.visible=false;
    PIEaddElement(arrowHelper8);
    //arrowHelper1.position.set(4,0,0);
    PIErender();


    var from9 = new THREE.Vector3( 0.1,1, 1);
 var to9 = new THREE.Vector3( 0.1,2.3,1);
    var direction9 = to9.clone().sub(from9);
    var length9 = direction9.length();
    arrowHelper9 = new THREE.ArrowHelper(direction9.normalize(), from9, length9, 0x27c6af,0.3,0.3 );
     arrowHelper9.visible=false;
    PIEaddElement(arrowHelper9);
    //arrowHelper1.position.set(4,0,0);
    PIErender();


    var from10 = new THREE.Vector3( 0.1,1, 1);
 var to10 = new THREE.Vector3( 0.1,2.3,1);
    var direction10 = to10.clone().sub(from10);
    var length10 = direction10.length();
    arrowHelper10 = new THREE.ArrowHelper(direction10.normalize(), from10, length10, 0x27c6af,0.3,0.3 );
     arrowHelper10.visible=false;
    PIEaddElement(arrowHelper10);
    //arrowHelper1.position.set(4,0,0);
    PIErender();



        var geometry = new THREE.RingBufferGeometry( 3.9, 4, 100,100,6,6.3 );
var material = new THREE.MeshBasicMaterial( { color: 0x164ba0, side: THREE.DoubleSide } );
circle1= new THREE.Mesh( geometry, material );
circle1.visible=false;
PIEaddElement(circle1);
circle1.position.set(0,0,0);
PIErender();



 var geometry = new THREE.CircleGeometry( 0.25, 32 );
    var material = new THREE.MeshBasicMaterial( { color: 0x000000 } );
    point1= new THREE.Mesh( geometry, material );
    point1.position.set(p1x,p1y,0.01);
    point1.visible=false;
    PIEaddElement(point1);
    PIEdragElement(point1);
    PIEsetDrag(point1,point1drag);
    PIErender();

    point2= new THREE.Mesh( geometry, material );
    point2.position.set(p2x,p2y,0.01);
    point2.visible=false;
    PIEaddElement(point2);
    PIEdragElement(point2);
    PIEsetDrag(point2,point2drag);
    PIErender();

    point3= new THREE.Mesh( geometry, material );
    point3.position.set(p3x,p3y,0.01);
    point3.visible=false;
    PIEaddElement(point3);
    PIEdragElement(point3);
    PIEsetDrag(point3,point3drag);
    PIErender();

    point4= new THREE.Mesh( geometry, material );
    point4.position.set(p4x,p4y,0.01);
    point4.visible=false;
    PIEaddElement(point4);
    PIEdragElement(point4);
    PIEsetDrag(point4,point4drag);
    PIErender();

    point5= new THREE.Mesh( geometry, material );
    point5.position.set(p5x,p5y,0.01);
    point5.visible=false;
    PIEaddElement(point5);
    PIEdragElement(point5);
    PIEsetDrag(point5,point5drag);
    PIErender();

    point6= new THREE.Mesh( geometry, material );
    point6.position.set(p6x,p6y,0.01);
    point6.visible=false;
    PIEaddElement(point6);
    PIEdragElement(point6);
    PIEsetDrag(point6,point6drag);
    PIErender();

    point7= new THREE.Mesh( geometry, material );
    point7.position.set(p7x,p7y,0.01);
    point7.visible=false;
    PIEaddElement(point7);
    PIEdragElement(point7);
    PIEsetDrag(point7,point7drag);
    PIErender();

    point8= new THREE.Mesh( geometry, material );
    point8.position.set(p8x,p8y,0.01);
    point8.visible=false;
    PIEaddElement(point8);
    PIEdragElement(point8);
    PIEsetDrag(point8,point8drag);
    PIErender();

    point9= new THREE.Mesh( geometry, material );
    point9.position.set(p9x,p9y,0.01);
    point9.visible=false;
    PIEaddElement(point9);
    PIEdragElement(point9);
    PIEsetDrag(point9,point9drag);
    PIErender();

    point10= new THREE.Mesh( geometry, material );
    point10.position.set(p10x,p10y,0.01);
    point10.visible=false;
    PIEaddElement(point10);
    PIEdragElement(point10);
    PIEsetDrag(point10,point10drag);
    PIErender();

    point11= new THREE.Mesh( geometry, material );
    point11.position.set(p11x,p11y,0.01);
    point11.visible=false;
    PIEaddElement(point11);
    PIEdragElement(point11);
    PIEsetDrag(point11,point11drag);
    PIErender();

    point12= new THREE.Mesh( geometry, material );
    point12.position.set(p12x,p12y,0.01);
    point12.visible=false;
    PIEaddElement(point12);
    PIEdragElement(point12);
    PIEsetDrag(point12,point12drag);
    PIErender();



     point13= new THREE.Mesh( geometry, material );
    point13.position.set(p13x,p13y,0.01);
    point13.visible=false;
    PIEaddElement(point13);
    PIEdragElement(point13);
    PIEsetDrag(point13,point13drag);
    PIErender();

var geometry1 = new THREE.CircleGeometry( 0.28, 32 );
    var material1 = new THREE.MeshBasicMaterial( { color: 0xb26608 } );

     point20= new THREE.Mesh( geometry1, material1 );
    point20.position.set(1,1,0.01);
    point20.visible=false;
    PIEaddElement(point20);
    PIErender();



   var materialSide = new THREE.MeshBasicMaterial( { color: 0x000000} );
   var  materialArray = [materialSide ];
    var loader = new THREE.FontLoader();
loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Direction of velocity changed       times. ", 
        {
            size: 0.45, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        t1 = new THREE.Mesh(textGeom, textMaterial );
        PIEaddElement(t1);
        t1.position.set(-6,6,0);
        t1.visible=false;
        PIErender();
    });

loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("8 ", 
        {
            size: 0.45, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        t2 = new THREE.Mesh(textGeom, textMaterial );
        PIEaddElement(t2);
        t2.position.set(2.5,6,0);
        t2.visible=false;
        PIErender();
    });


loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Direction of velocity changes at every time in circular motion. ", 
        {
            size: 0.45, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        t3 = new THREE.Mesh(textGeom, textMaterial );
        PIEaddElement(t3);
        t3.position.set(-8,6,0);
        t3.visible=false;
        PIErender();
    });

initialiseControls();
    verticeschange();
    PIErender();




 
   PIEstartAnimation();



}

function resettext(){
    PIEremoveElement(t1);
    PIErender();
    PIEremoveElement(t2);
    PIErender();
    PIEremoveElement(t3);
    PIErender();
    var materialSide = new THREE.MeshBasicMaterial( { color: 0x000000} );
   var  materialArray = [materialSide ];
    var loader = new THREE.FontLoader();
loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Direction of velocity changed       times. ", 
        {
            size: 0.45, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        t1 = new THREE.Mesh(textGeom, textMaterial );
        PIEaddElement(t1);
        t1.position.set(-6,6,0);
        t1.visible=false;
        PIErender();
    });

loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("8 ", 
        {
            size: 0.45, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        t2 = new THREE.Mesh(textGeom, textMaterial );
        PIEaddElement(t2);
        t2.position.set(2.5,6,0);
        t2.visible=false;
        PIErender();
    });


loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Direction of velocity changes at every time in circular motion. ", 
        {
            size: 0.45, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        t3 = new THREE.Mesh(textGeom, textMaterial );
        PIEaddElement(t3);
        t3.position.set(-8,6,0);
        t3.visible=false;
        PIErender();
    });
    // t.visible=false;
    // t2.visible=false;
    // t3.visible=false;

}

var arrowHelper2;
var cenx,ceny;
function point1drag(element,newpos){
cenx=newpos.x;
ceny=newpos.y;


if (verticesno==4) {

point1.position.set(cenx,ceny,0.01);

PIEremoveElement(rectangle);
PIErender();

p1x=cenx;
p1y=ceny;


var material = new THREE.LineBasicMaterial({color: 0x164ba0,linewidth:3.5});
        var geometry = new THREE.Geometry();
        var v1 = new THREE.Vector3(cenx,ceny,0);  
        //var v2 = new THREE.Vector3(p2x,p2y,0);
        var v3 = new THREE.Vector3(p3x,p3y,0);   
        //var v4 = new THREE.Vector3(p4x,p4y,0);
        var v5 = new THREE.Vector3(p5x,p5y,0);
        //var v6 = new THREE.Vector3(p6x,p6y,0);
        var v7 = new THREE.Vector3(p7x,p7y,0);
        //var v8 = new THREE.Vector3(p8x,p8y,0);
        var v9 = new THREE.Vector3(cenx,ceny,0);
        geometry.vertices.push(v1);
        //geometry.vertices.push(v2);
        geometry.vertices.push(v3);
        //geometry.vertices.push(v4);
        geometry.vertices.push(v5);
        //geometry.vertices.push(v6);
        geometry.vertices.push(v7);
        //geometry.vertices.push(v8);
        geometry.vertices.push(v9);
        
        rectangle = new THREE.Line( geometry, material );
        rectangle.visible=true;
        PIEaddElement(rectangle);
        PIErender();

}

arrowHelper1.visible=false;
arrowHelper2.visible=false;
arrowHelper3.visible=false;
arrowHelper4.visible=false;
arrowHelper5.visible=false;
arrowHelper6.visible=false;
arrowHelper7.visible=false;
arrowHelper8.visible=false;
arrowHelper9.visible=false;
arrowHelper10.visible=false;
 t1.visible=false;
 t2.visible=false;
 t3.visible=false;

}




function point2drag(element,newpos){
cenx=newpos.x;
ceny=newpos.y;



if (verticesno==3) {
point2.position.set(cenx,ceny,0.01);

PIEremoveElement(rectangle);
PIErender();

p2x=cenx;
p2y=ceny;


    var material = new THREE.LineBasicMaterial({color: 0x164ba0,linewidth:3.5});
        var geometry = new THREE.Geometry();
        //var v1 = new THREE.Vector3(p1x,p1y,0);  
        var v2 = new THREE.Vector3(cenx,ceny,0);
        //var v3 = new THREE.Vector3(p3x,p3y,0);   
        //var v4 = new THREE.Vector3(p4x,p4y,0);
        var v5 = new THREE.Vector3(p5x,p5y,0);
        //var v6 = new THREE.Vector3(p6x,p6y,0);
        var v7 = new THREE.Vector3(p7x,p7y,0);
        //var v8 = new THREE.Vector3(p8x,p8y,0);
        var v9 = new THREE.Vector3(cenx,ceny,0);
       // geometry.vertices.push(v1);
        geometry.vertices.push(v2);
        //geometry.vertices.push(v3);
        //geometry.vertices.push(v4);
        geometry.vertices.push(v5);
        //geometry.vertices.push(v6);
        geometry.vertices.push(v7);
        //geometry.vertices.push(v8);
        geometry.vertices.push(v9);
        
        rectangle = new THREE.Line( geometry, material );
        rectangle.visible=true;
        PIEaddElement(rectangle);
        PIErender();
}
else if(verticesno==5){
point2.position.set(cenx,ceny,0.01);

PIEremoveElement(rectangle);
PIErender();

p2x=cenx;
p2y=ceny;


    var material = new THREE.LineBasicMaterial({color: 0x164ba0,linewidth:3.5});
        var geometry = new THREE.Geometry();
        //var v1 = new THREE.Vector3(p1x,p1y,0);  
        var v2 = new THREE.Vector3(cenx,ceny,0);
        //var v3 = new THREE.Vector3(p3x,p3y,0);   
        var v4 = new THREE.Vector3(p4x,p4y,0);
        var v5 = new THREE.Vector3(p5x,p5y,0);
        //var v6 = new THREE.Vector3(p6x,p6y,0);
        var v7 = new THREE.Vector3(p7x,p7y,0);
        var v8 = new THREE.Vector3(p8x,p8y,0);
        var v9 = new THREE.Vector3(cenx,ceny,0);
        //geometry.vertices.push(v1);
        geometry.vertices.push(v2);
        //geometry.vertices.push(v3);
        geometry.vertices.push(v4);
        geometry.vertices.push(v5);
        //geometry.vertices.push(v6);
        geometry.vertices.push(v7);
        geometry.vertices.push(v8);
        geometry.vertices.push(v9);
        
        rectangle = new THREE.Line( geometry, material );
        rectangle.visible=true;
        PIEaddElement(rectangle);
        PIErender();
    }
    else if (verticesno==6) {
        point2.position.set(cenx,ceny,0.01);

PIEremoveElement(rectangle);
PIErender();

p2x=cenx;
p2y=ceny;


    var material = new THREE.LineBasicMaterial({color: 0x164ba0,linewidth:3.5});
        var geometry = new THREE.Geometry();
        //var v1 = new THREE.Vector3(p1x,p1y,0);  
        var v2 = new THREE.Vector3(cenx,ceny,0);
        //var v3 = new THREE.Vector3(p3x,p3y,0);   
        var v4 = new THREE.Vector3(p4x,p4y,0);
        var v5 = new THREE.Vector3(p5x,p5y,0);
        var v9 = new THREE.Vector3(p9x,p9y,0);
        var v7 = new THREE.Vector3(p7x,p7y,0);
        var v8 = new THREE.Vector3(p8x,p8y,0);
        var v15 = new THREE.Vector3(cenx,ceny,0);
        //geometry.vertices.push(v1);
        geometry.vertices.push(v2);
        //geometry.vertices.push(v3);
        geometry.vertices.push(v4);
        geometry.vertices.push(v5);
        geometry.vertices.push(v9);
        //geometry.vertices.push(v6);
        geometry.vertices.push(v7);
        geometry.vertices.push(v8);
        
        geometry.vertices.push(v15);
        
        rectangle = new THREE.Line( geometry, material );
        rectangle.visible=true;
        PIEaddElement(rectangle);
        PIErender();
    }
    else if (verticesno==7) {
        point2.position.set(cenx,ceny,0.01);

PIEremoveElement(rectangle);
PIErender();

p2x=cenx;
p2y=ceny;


    var material = new THREE.LineBasicMaterial({color: 0x164ba0,linewidth:3.5});
        var geometry = new THREE.Geometry();
        //var v1 = new THREE.Vector3(p1x,p1y,0);  
        var v2 = new THREE.Vector3(cenx,ceny,0);
        //var v3 = new THREE.Vector3(p3x,p3y,0);   
        var v4 = new THREE.Vector3(p4x,p4y,0);
        var v5 = new THREE.Vector3(p5x,p5y,0);
        var v10= new THREE.Vector3(p10x,p10y,0);
        var v11= new THREE.Vector3(p11x,p11y,0);
        //var v9 = new THREE.Vector3(p9x,p9y,0);
        var v7 = new THREE.Vector3(p7x,p7y,0);
        var v8 = new THREE.Vector3(p8x,p8y,0);
        var v15 = new THREE.Vector3(cenx,ceny,0);
        //geometry.vertices.push(v1);
        geometry.vertices.push(v2);
        //geometry.vertices.push(v3);
        geometry.vertices.push(v4);
        geometry.vertices.push(v5);
        geometry.vertices.push(v10);
        geometry.vertices.push(v11);
        geometry.vertices.push(v7);
        geometry.vertices.push(v8);
        geometry.vertices.push(v15);
        
        rectangle = new THREE.Line( geometry, material );
        rectangle.visible=true;
        PIEaddElement(rectangle);
        PIErender();
    }

    arrowHelper1.visible=false;
arrowHelper2.visible=false;
arrowHelper3.visible=false;
arrowHelper4.visible=false;
arrowHelper5.visible=false;
arrowHelper6.visible=false;
arrowHelper7.visible=false;
arrowHelper8.visible=false;
arrowHelper9.visible=false;
arrowHelper10.visible=false;
 t1.visible=false;
 t2.visible=false;
 t3.visible=false;
}


function point3drag(element,newpos){
cenx=newpos.x;
ceny=newpos.y;


if (verticesno==4) {
point3.position.set(cenx,ceny,0.01);

PIEremoveElement(rectangle);
PIErender();

p3x=cenx;
p3y=ceny;

    var material = new THREE.LineBasicMaterial({color: 0x164ba0,linewidth:3.5});
        var geometry = new THREE.Geometry();
        var v1 = new THREE.Vector3(p1x,p1y,0);  
        //var v2 = new THREE.Vector3(p2x,p2y,0);
        var v3 = new THREE.Vector3(cenx,ceny,0);   
        //var v4 = new THREE.Vector3(p4x,p4y,0);
        var v5 = new THREE.Vector3(p5x,p5y,0);
        //var v6 = new THREE.Vector3(p6x,p6y,0);
        var v7 = new THREE.Vector3(p7x,p7y,0);
        //var v8 = new THREE.Vector3(p8x,p8y,0);
        var v9 = new THREE.Vector3(p1x,p1y,0);
        geometry.vertices.push(v1);
        //geometry.vertices.push(v2);
        geometry.vertices.push(v3);
        //geometry.vertices.push(v4);
        geometry.vertices.push(v5);
        //geometry.vertices.push(v6);
        geometry.vertices.push(v7);
        //geometry.vertices.push(v8);
        geometry.vertices.push(v9);
        
        rectangle = new THREE.Line( geometry, material );
        rectangle.visible=true;
        PIEaddElement(rectangle);
        PIErender();
}

else{
point3.position.set(cenx,ceny,0.01);

PIEremoveElement(rectangle);
PIErender();

p3x=cenx;
p3y=ceny;

    var material = new THREE.LineBasicMaterial({color: 0x164ba0,linewidth:3.5});
        var geometry = new THREE.Geometry();
        var v1 = new THREE.Vector3(p1x,p1y,0);  
        var v2 = new THREE.Vector3(p2x,p2y,0);
        var v3 = new THREE.Vector3(cenx,ceny,0);   
        var v4 = new THREE.Vector3(p4x,p4y,0);
        var v5 = new THREE.Vector3(p5x,p5y,0);
        var v6 = new THREE.Vector3(p6x,p6y,0);
        var v7 = new THREE.Vector3(p7x,p7y,0);
        var v8 = new THREE.Vector3(p8x,p8y,0);
        var v9 = new THREE.Vector3(p1x,p1y,0);
        geometry.vertices.push(v1);
        geometry.vertices.push(v2);
        geometry.vertices.push(v3);
        geometry.vertices.push(v4);
        geometry.vertices.push(v5);
        geometry.vertices.push(v6);
        geometry.vertices.push(v7);
        geometry.vertices.push(v8);
        geometry.vertices.push(v9);
        
        rectangle = new THREE.Line( geometry, material );
        rectangle.visible=true;
        PIEaddElement(rectangle);
        PIErender();
    }

    arrowHelper1.visible=false;
arrowHelper2.visible=false;
arrowHelper3.visible=false;
arrowHelper4.visible=false;
arrowHelper5.visible=false;
arrowHelper6.visible=false;
arrowHelper7.visible=false;
arrowHelper8.visible=false;
arrowHelper9.visible=false;
arrowHelper10.visible=false;
 t1.visible=false;
 t2.visible=false;
 t3.visible=false;
}

function point4drag(element,newpos){


cenx=newpos.x;
ceny=newpos.y;
if (verticesno==5) {
point4.position.set(cenx,ceny,0.01);

PIEremoveElement(rectangle);
PIErender();

p4x=cenx;
p4y=ceny;

    var material = new THREE.LineBasicMaterial({color: 0x164ba0,linewidth:3.5});
        var geometry = new THREE.Geometry();
        //var v1 = new THREE.Vector3(p1x,p1y,0);  
        var v2 = new THREE.Vector3(p2x,p2y,0);
        //var v3 = new THREE.Vector3(p3x,p3y,0);   
        var v4 = new THREE.Vector3(cenx,ceny,0);
        var v5 = new THREE.Vector3(p5x,p5y,0);
        //var v6 = new THREE.Vector3(p6x,p6y,0);
        var v7 = new THREE.Vector3(p7x,p7y,0);
        var v8 = new THREE.Vector3(p8x,p8y,0);
        var v9 = new THREE.Vector3(p2x,p2y,0);
        //geometry.vertices.push(v1);
        geometry.vertices.push(v2);
        //geometry.vertices.push(v3);
        geometry.vertices.push(v4);
        geometry.vertices.push(v5);
        //geometry.vertices.push(v6);
        geometry.vertices.push(v7);
        geometry.vertices.push(v8);
        geometry.vertices.push(v9);
        
        rectangle = new THREE.Line( geometry, material );
        rectangle.visible=true;
        PIEaddElement(rectangle);
        PIErender();
}
else if(verticesno==6){
point4.position.set(cenx,ceny,0.01);

PIEremoveElement(rectangle);
PIErender();

p4x=cenx;
p4y=ceny;

    var material = new THREE.LineBasicMaterial({color: 0x164ba0,linewidth:3.5});
        var geometry = new THREE.Geometry();
        //var v1 = new THREE.Vector3(p1x,p1y,0);  
        var v2 = new THREE.Vector3(p2x,p2y,0);
        //var v3 = new THREE.Vector3(p3x,p3y,0);   
        var v4 = new THREE.Vector3(cenx,ceny,0);
        var v5 = new THREE.Vector3(p5x,p5y,0);
        var v9 = new THREE.Vector3(p9x,p9y,0);
        //var v6 = new THREE.Vector3(p6x,p6y,0);
        var v7 = new THREE.Vector3(p7x,p7y,0);
        var v8 = new THREE.Vector3(p8x,p8y,0);
        var v15 = new THREE.Vector3(p2x,p2y,0);
        //geometry.vertices.push(v1);
        geometry.vertices.push(v2);
        //geometry.vertices.push(v3);
        geometry.vertices.push(v4);
        geometry.vertices.push(v5);
        geometry.vertices.push(v9);
        //geometry.vertices.push(v6);
        geometry.vertices.push(v7);
        geometry.vertices.push(v8);
        geometry.vertices.push(v15);
        
        rectangle = new THREE.Line( geometry, material );
        rectangle.visible=true;
        PIEaddElement(rectangle);
        PIErender();
    }
      else if (verticesno==7) {
        point4.position.set(cenx,ceny,0.01);

PIEremoveElement(rectangle);
PIErender();

p4x=cenx;
p4y=ceny;


    var material = new THREE.LineBasicMaterial({color: 0x164ba0,linewidth:3.5});
        var geometry = new THREE.Geometry();
        //var v1 = new THREE.Vector3(p1x,p1y,0);  
        var v2 = new THREE.Vector3(p2x,p2y,0);
        //var v3 = new THREE.Vector3(p3x,p3y,0);   
        var v4 = new THREE.Vector3(cenx,ceny,0);
        var v5 = new THREE.Vector3(p5x,p5y,0);
        var v10= new THREE.Vector3(p10x,p10y,0);
        var v11= new THREE.Vector3(p11x,p11y,0);
        //var v9 = new THREE.Vector3(p9x,p9y,0);
        var v7 = new THREE.Vector3(p7x,p7y,0);
        var v8 = new THREE.Vector3(p8x,p8y,0);
        var v15 = new THREE.Vector3(p2x,p2y,0);
        //geometry.vertices.push(v1);
        geometry.vertices.push(v2);
        //geometry.vertices.push(v3);
        geometry.vertices.push(v4);
        geometry.vertices.push(v5);
        geometry.vertices.push(v10);
        geometry.vertices.push(v11);
        geometry.vertices.push(v7);
        geometry.vertices.push(v8);
        geometry.vertices.push(v15);
        
        rectangle = new THREE.Line( geometry, material );
        rectangle.visible=true;
        PIEaddElement(rectangle);
        PIErender();
    }

else if (verticesno==8) {
        point4.position.set(cenx,ceny,0.01);

PIEremoveElement(rectangle);
PIErender();

p4x=cenx;
p4y=ceny;


    var material = new THREE.LineBasicMaterial({color: 0x164ba0,linewidth:3.5});
        var geometry = new THREE.Geometry();
        //var v1 = new THREE.Vector3(p1x,p1y,0);  
        var v12 = new THREE.Vector3(p12x,p12y,0);
        var v13 = new THREE.Vector3(p13x,p13y,0);   
        var v4 = new THREE.Vector3(cenx,ceny,0);
        var v5 = new THREE.Vector3(p5x,p5y,0);
        var v10= new THREE.Vector3(p10x,p10y,0);
        var v11= new THREE.Vector3(p11x,p11y,0);
        //var v9 = new THREE.Vector3(p9x,p9y,0);
        var v7 = new THREE.Vector3(p7x,p7y,0);
        var v8 = new THREE.Vector3(p8x,p8y,0);
        var v15 = new THREE.Vector3(p12x,p12y,0);
        //geometry.vertices.push(v1);
        geometry.vertices.push(v12);
        geometry.vertices.push(v13);
        geometry.vertices.push(v4);
        geometry.vertices.push(v5);
        geometry.vertices.push(v10);
        geometry.vertices.push(v11);
        geometry.vertices.push(v7);
        geometry.vertices.push(v8);
        geometry.vertices.push(v15);
        
        rectangle = new THREE.Line( geometry, material );
        rectangle.visible=true;
        PIEaddElement(rectangle);
        PIErender();
    }

else{
point4.position.set(cenx,ceny,0.01);

PIEremoveElement(rectangle);
PIErender();

p4x=cenx;
p4y=ceny;

    var material = new THREE.LineBasicMaterial({color: 0x164ba0,linewidth:3.5});
        var geometry = new THREE.Geometry();
        var v1 = new THREE.Vector3(p1x,p1y,0);  
        var v2 = new THREE.Vector3(p2x,p2y,0);
        var v3 = new THREE.Vector3(p3x,p3y,0);   
        var v4 = new THREE.Vector3(cenx,ceny,0);
        var v5 = new THREE.Vector3(p5x,p5y,0);
        var v6 = new THREE.Vector3(p6x,p6y,0);
        var v7 = new THREE.Vector3(p7x,p7y,0);
        var v8 = new THREE.Vector3(p8x,p8y,0);
        var v9 = new THREE.Vector3(p1x,p1y,0);
        geometry.vertices.push(v1);
        geometry.vertices.push(v2);
        geometry.vertices.push(v3);
        geometry.vertices.push(v4);
        geometry.vertices.push(v5);
        geometry.vertices.push(v6);
        geometry.vertices.push(v7);
        geometry.vertices.push(v8);
        geometry.vertices.push(v9);
        
        rectangle = new THREE.Line( geometry, material );
        rectangle.visible=true;
        PIEaddElement(rectangle);
        PIErender();
    }

    arrowHelper1.visible=false;
arrowHelper2.visible=false;
arrowHelper3.visible=false;
arrowHelper4.visible=false;
arrowHelper5.visible=false;
arrowHelper6.visible=false;
arrowHelper7.visible=false;
arrowHelper8.visible=false;
arrowHelper9.visible=false;
arrowHelper10.visible=false;
 t1.visible=false;
 t2.visible=false;
 t3.visible=false;
}

function point5drag(element,newpos){
cenx=newpos.x;
ceny=newpos.y;


if (verticesno==4) {
point5.position.set(cenx,ceny,0.01);

PIEremoveElement(rectangle);
PIErender();

p5x=cenx;
p5y=ceny;

    var material = new THREE.LineBasicMaterial({color: 0x164ba0,linewidth:3.5});
        var geometry = new THREE.Geometry();
        var v1 = new THREE.Vector3(p1x,p1y,0);  
        //var v2 = new THREE.Vector3(p2x,p2y,0);
        var v3 = new THREE.Vector3(p3x,p3y,0);   
        //var v4 = new THREE.Vector3(p4x,p4y,0);
        var v5 = new THREE.Vector3(cenx,ceny,0);
        //var v6 = new THREE.Vector3(p6x,p6y,0);
        var v7 = new THREE.Vector3(p7x,p7y,0);
        //var v8 = new THREE.Vector3(p8x,p8y,0);
        var v9 = new THREE.Vector3(p1x,p1y,0);
        geometry.vertices.push(v1);
        //geometry.vertices.push(v2);
        geometry.vertices.push(v3);
        //geometry.vertices.push(v4);
        geometry.vertices.push(v5);
        //geometry.vertices.push(v6);
        geometry.vertices.push(v7);
        //geometry.vertices.push(v8);
        geometry.vertices.push(v9);
        
        rectangle = new THREE.Line( geometry, material );
        rectangle.visible=true;
        PIEaddElement(rectangle);
        PIErender();
}
else if (verticesno==3) {
point5.position.set(cenx,ceny,0.01);

PIEremoveElement(rectangle);
PIErender();

p5x=cenx;
p5y=ceny;

    var material = new THREE.LineBasicMaterial({color: 0x164ba0,linewidth:3.5});
        var geometry = new THREE.Geometry();
        //var v1 = new THREE.Vector3(p1x,p1y,0);  
        var v2 = new THREE.Vector3(p2x,p2y,0);
        //var v3 = new THREE.Vector3(p3x,p3y,0);   
        //var v4 = new THREE.Vector3(p4x,p4y,0);
        var v5 = new THREE.Vector3(cenx,ceny,0);
        //var v6 = new THREE.Vector3(p6x,p6y,0);
        var v7 = new THREE.Vector3(p7x,p7y,0);
        //var v8 = new THREE.Vector3(p8x,p8y,0);
        var v9 = new THREE.Vector3(p2x,p2y,0);
        //geometry.vertices.push(v1);
        geometry.vertices.push(v2);
        //geometry.vertices.push(v3);
        //geometry.vertices.push(v4);
        geometry.vertices.push(v5);
        //geometry.vertices.push(v6);
        geometry.vertices.push(v7);
        //geometry.vertices.push(v8);
        geometry.vertices.push(v9);
        
        rectangle = new THREE.Line( geometry, material );
        rectangle.visible=true;
        PIEaddElement(rectangle);
        PIErender();
}
else if (verticesno==5) {
    point5.position.set(cenx,ceny,0.01);

PIEremoveElement(rectangle);
PIErender();

p5x=cenx;
p5y=ceny;

    var material = new THREE.LineBasicMaterial({color: 0x164ba0,linewidth:3.5});
        var geometry = new THREE.Geometry();
        //var v1 = new THREE.Vector3(p1x,p1y,0);  
        var v2 = new THREE.Vector3(p2x,p2y,0);
        //var v3 = new THREE.Vector3(p3x,p3y,0);   
        var v4 = new THREE.Vector3(p4x,p4y,0);
        var v5 = new THREE.Vector3(cenx,ceny,0);
        //var v6 = new THREE.Vector3(p6x,p6y,0);
        var v7 = new THREE.Vector3(p7x,p7y,0);
        var v8 = new THREE.Vector3(p8x,p8y,0);
        var v9 = new THREE.Vector3(p2x,p2y,0);
        //geometry.vertices.push(v1);
        geometry.vertices.push(v2);
        //geometry.vertices.push(v3);
        geometry.vertices.push(v4);
        geometry.vertices.push(v5);
        //geometry.vertices.push(v6);
        geometry.vertices.push(v7);
        geometry.vertices.push(v8);
        geometry.vertices.push(v9);
        
        rectangle = new THREE.Line( geometry, material );
        rectangle.visible=true;
        PIEaddElement(rectangle);
        PIErender();
}
else if(verticesno==6){
point5.position.set(cenx,ceny,0.01);

PIEremoveElement(rectangle);
PIErender();

p5x=cenx;
p5y=ceny;

    var material = new THREE.LineBasicMaterial({color: 0x164ba0,linewidth:3.5});
        var geometry = new THREE.Geometry();
        //var v1 = new THREE.Vector3(p1x,p1y,0);  
        var v2 = new THREE.Vector3(p2x,p2y,0);
        //var v3 = new THREE.Vector3(p3x,p3y,0);   
        var v4 = new THREE.Vector3(p4x,p4y,0);
        var v5 = new THREE.Vector3(cenx,ceny,0);
        var v9 = new THREE.Vector3(p9x,p9y,0);
        //var v6 = new THREE.Vector3(p6x,p6y,0);
        var v7 = new THREE.Vector3(p7x,p7y,0);
        var v8 = new THREE.Vector3(p8x,p8y,0);
        var v15 = new THREE.Vector3(p2x,p2y,0);
        //geometry.vertices.push(v1);
        geometry.vertices.push(v2);
        //geometry.vertices.push(v3);
        geometry.vertices.push(v4);
        geometry.vertices.push(v5);
        geometry.vertices.push(v9);
        //geometry.vertices.push(v6);
        geometry.vertices.push(v7);
        geometry.vertices.push(v8);
        geometry.vertices.push(v15);
        
        rectangle = new THREE.Line( geometry, material );
        rectangle.visible=true;
        PIEaddElement(rectangle);
        PIErender();
    }
    else if (verticesno==7) {
        point5.position.set(cenx,ceny,0.01);

PIEremoveElement(rectangle);
PIErender();

p5x=cenx;
p5y=ceny;


    var material = new THREE.LineBasicMaterial({color: 0x164ba0,linewidth:3.5});
        var geometry = new THREE.Geometry();
        //var v1 = new THREE.Vector3(p1x,p1y,0);  
        var v2 = new THREE.Vector3(p2x,p2y,0);
        //var v3 = new THREE.Vector3(p3x,p3y,0);   
        var v4 = new THREE.Vector3(p4x,p4y,0);
        var v5 = new THREE.Vector3(cenx,ceny,0);
        var v10= new THREE.Vector3(p10x,p10y,0);
        var v11= new THREE.Vector3(p11x,p11y,0);
        //var v9 = new THREE.Vector3(p9x,p9y,0);
        var v7 = new THREE.Vector3(p7x,p7y,0);
        var v8 = new THREE.Vector3(p8x,p8y,0);
        var v15 = new THREE.Vector3(p2x,p2y,0);
        //geometry.vertices.push(v1);
        geometry.vertices.push(v2);
        //geometry.vertices.push(v3);
        geometry.vertices.push(v4);
        geometry.vertices.push(v5);
        geometry.vertices.push(v10);
        geometry.vertices.push(v11);
        geometry.vertices.push(v7);
        geometry.vertices.push(v8);
        geometry.vertices.push(v15);
        
        rectangle = new THREE.Line( geometry, material );
        rectangle.visible=true;
        PIEaddElement(rectangle);
        PIErender();
    }
    else if (verticesno==8) {
        point5.position.set(cenx,ceny,0.01);

PIEremoveElement(rectangle);
PIErender();

p5x=cenx;
p5y=ceny;


    var material = new THREE.LineBasicMaterial({color: 0x164ba0,linewidth:3.5});
        var geometry = new THREE.Geometry();
        //var v1 = new THREE.Vector3(p1x,p1y,0);  
        var v12 = new THREE.Vector3(p12x,p12y,0);
        var v13 = new THREE.Vector3(p13x,p13y,0);   
        var v4 = new THREE.Vector3(p4x,p4y,0);
        var v5 = new THREE.Vector3(cenx,ceny,0);
        var v10= new THREE.Vector3(p10x,p10y,0);
        var v11= new THREE.Vector3(p11x,p11y,0);
        //var v9 = new THREE.Vector3(p9x,p9y,0);
        var v7 = new THREE.Vector3(p7x,p7y,0);
        var v8 = new THREE.Vector3(p8x,p8y,0);
        var v15 = new THREE.Vector3(p12x,p12y,0);
        //geometry.vertices.push(v1);
        geometry.vertices.push(v12);
        geometry.vertices.push(v13);
        geometry.vertices.push(v4);
        geometry.vertices.push(v5);
        geometry.vertices.push(v10);
        geometry.vertices.push(v11);
        geometry.vertices.push(v7);
        geometry.vertices.push(v8);
        geometry.vertices.push(v15);
        
        rectangle = new THREE.Line( geometry, material );
        rectangle.visible=true;
        PIEaddElement(rectangle);
        PIErender();
    }
else{
point5.position.set(cenx,ceny,0.01);

PIEremoveElement(rectangle);
PIErender();

p5x=cenx;
p5y=ceny;

    var material = new THREE.LineBasicMaterial({color: 0x164ba0,linewidth:3.5});
        var geometry = new THREE.Geometry();
        var v1 = new THREE.Vector3(p1x,p1y,0);  
        var v2 = new THREE.Vector3(p2x,p2y,0);
        var v3 = new THREE.Vector3(p3x,p3y,0);   
        var v4 = new THREE.Vector3(p4x,p4y,0);
        var v5 = new THREE.Vector3(cenx,ceny,0);
        var v6 = new THREE.Vector3(p6x,p6y,0);
        var v7 = new THREE.Vector3(p7x,p7y,0);
        var v8 = new THREE.Vector3(p8x,p8y,0);
        var v9 = new THREE.Vector3(p1x,p1y,0);
        geometry.vertices.push(v1);
        geometry.vertices.push(v2);
        geometry.vertices.push(v3);
        geometry.vertices.push(v4);
        geometry.vertices.push(v5);
        geometry.vertices.push(v6);
        geometry.vertices.push(v7);
        geometry.vertices.push(v8);
        geometry.vertices.push(v9);
        
        rectangle = new THREE.Line( geometry, material );
        rectangle.visible=true;
        PIEaddElement(rectangle);
        PIErender();
    }
    arrowHelper1.visible=false;
arrowHelper2.visible=false;
arrowHelper3.visible=false;
arrowHelper4.visible=false;
arrowHelper5.visible=false;
arrowHelper6.visible=false;
arrowHelper7.visible=false;
arrowHelper8.visible=false;
arrowHelper9.visible=false;
arrowHelper10.visible=false;
 t1.visible=false;
 t2.visible=false;
 t3.visible=false;
}

function point6drag(element,newpos){
cenx=newpos.x;
ceny=newpos.y;


point6.position.set(cenx,ceny,0.01);

PIEremoveElement(rectangle);
PIErender();

p6x=cenx;
p6y=ceny;

    var material = new THREE.LineBasicMaterial({color: 0x164ba0,linewidth:3.5});
        var geometry = new THREE.Geometry();
        var v1 = new THREE.Vector3(p1x,p1y,0);  
        var v2 = new THREE.Vector3(p2x,p2y,0);
        var v3 = new THREE.Vector3(p3x,p3y,0);   
        var v4 = new THREE.Vector3(p4x,p4y,0);
        var v5 = new THREE.Vector3(p5x,p5y,0);
        var v6 = new THREE.Vector3(cenx,ceny,0);
        var v7 = new THREE.Vector3(p7x,p7y,0);
        var v8 = new THREE.Vector3(p8x,p8y,0);
        var v9 = new THREE.Vector3(p1x,p1y,0);
        geometry.vertices.push(v1);
        geometry.vertices.push(v2);
        geometry.vertices.push(v3);
        geometry.vertices.push(v4);
        geometry.vertices.push(v5);
        geometry.vertices.push(v6);
        geometry.vertices.push(v7);
        geometry.vertices.push(v8);
        geometry.vertices.push(v9);
        
        rectangle = new THREE.Line( geometry, material );
        rectangle.visible=true;
        PIEaddElement(rectangle);
        PIErender();

        arrowHelper1.visible=false;
arrowHelper2.visible=false;
arrowHelper3.visible=false;
arrowHelper4.visible=false;
arrowHelper5.visible=false;
arrowHelper6.visible=false;
arrowHelper7.visible=false;
arrowHelper8.visible=false;
arrowHelper9.visible=false;
arrowHelper10.visible=false;
 t1.visible=false;
 t2.visible=false;
 t3.visible=false;
}

function point7drag(element,newpos){

    
cenx=newpos.x;
ceny=newpos.y;

if (verticesno==4) {
point7.position.set(cenx,ceny,0.01);

PIEremoveElement(rectangle);
PIErender();

p7x=cenx;
p7y=ceny;

    var material = new THREE.LineBasicMaterial({color: 0x164ba0,linewidth:3.5});
        var geometry = new THREE.Geometry();
        var v1 = new THREE.Vector3(p1x,p1y,0);  
        //var v2 = new THREE.Vector3(p2x,p2y,0);
        var v3 = new THREE.Vector3(p3x,p3y,0);   
        //var v4 = new THREE.Vector3(p4x,p4y,0);
        var v5 = new THREE.Vector3(p5x,p5y,0);
        //var v6 = new THREE.Vector3(p6x,p6y,0);
        var v7 = new THREE.Vector3(cenx,ceny,0);
        //var v8 = new THREE.Vector3(p8x,p8y,0);
        var v9 = new THREE.Vector3(p1x,p1y,0);
        geometry.vertices.push(v1);
        //geometry.vertices.push(v2);
        geometry.vertices.push(v3);
        //geometry.vertices.push(v4);
        geometry.vertices.push(v5);
        //geometry.vertices.push(v6);
        geometry.vertices.push(v7);
        //geometry.vertices.push(v8);
        geometry.vertices.push(v9);
        
        rectangle = new THREE.Line( geometry, material );
        rectangle.visible=true;
        PIEaddElement(rectangle);
        PIErender();
}
else if (verticesno==3) {
point7.position.set(cenx,ceny,0.01);

PIEremoveElement(rectangle);
PIErender();

p7x=cenx;
p7y=ceny;

    var material = new THREE.LineBasicMaterial({color: 0x164ba0,linewidth:3.5});
        var geometry = new THREE.Geometry();
        //var v1 = new THREE.Vector3(p1x,p1y,0);  
        var v2 = new THREE.Vector3(p2x,p2y,0);
        //var v3 = new THREE.Vector3(p3x,p3y,0);   
        //var v4 = new THREE.Vector3(p4x,p4y,0);
        var v5 = new THREE.Vector3(p5x,p5y,0);
        //var v6 = new THREE.Vector3(p6x,p6y,0);
        var v7 = new THREE.Vector3(cenx,ceny,0);
        //var v8 = new THREE.Vector3(p8x,p8y,0);
        var v9 = new THREE.Vector3(p2x,p2y,0);
        //geometry.vertices.push(v1);
        geometry.vertices.push(v2);
        //geometry.vertices.push(v3);
        //geometry.vertices.push(v4);
        geometry.vertices.push(v5);
        //geometry.vertices.push(v6);
        geometry.vertices.push(v7);
        //geometry.vertices.push(v8);
        geometry.vertices.push(v9);
        
        rectangle = new THREE.Line( geometry, material );
        rectangle.visible=true;
        PIEaddElement(rectangle);
        PIErender();
}
else if (verticesno==5) {
    point7.position.set(cenx,ceny,0.01);

PIEremoveElement(rectangle);
PIErender();

p7x=cenx;
p7y=ceny;

    var material = new THREE.LineBasicMaterial({color: 0x164ba0,linewidth:3.5});
        var geometry = new THREE.Geometry();
        //var v1 = new THREE.Vector3(p1x,p1y,0);  
        var v2 = new THREE.Vector3(p2x,p2y,0);
        //var v3 = new THREE.Vector3(p3x,p3y,0);   
        var v4 = new THREE.Vector3(p4x,p4y,0);
        var v5 = new THREE.Vector3(p5x,p5y,0);
        //var v6 = new THREE.Vector3(p6x,p6y,0);
        var v7 = new THREE.Vector3(cenx,ceny,0);
        var v8 = new THREE.Vector3(p8x,p8y,0);
        var v9 = new THREE.Vector3(p2x,p2y,0);
        //geometry.vertices.push(v1);
        geometry.vertices.push(v2);
        //geometry.vertices.push(v3);
        geometry.vertices.push(v4);
        geometry.vertices.push(v5);
        //geometry.vertices.push(v6);
        geometry.vertices.push(v7);
        geometry.vertices.push(v8);
        geometry.vertices.push(v9);
        
        rectangle = new THREE.Line( geometry, material );
        rectangle.visible=true;
        PIEaddElement(rectangle);
        PIErender();
}
else if(verticesno==6){
point7.position.set(cenx,ceny,0.01);

PIEremoveElement(rectangle);
PIErender();

p7x=cenx;
p7y=ceny;

    var material = new THREE.LineBasicMaterial({color: 0x164ba0,linewidth:3.5});
        var geometry = new THREE.Geometry();
        //var v1 = new THREE.Vector3(p1x,p1y,0);  
        var v2 = new THREE.Vector3(p2x,p2y,0);
        //var v3 = new THREE.Vector3(p3x,p3y,0);   
        var v4 = new THREE.Vector3(p4x,p4y,0);
        var v5 = new THREE.Vector3(p5x,p5y,0);
        var v9 = new THREE.Vector3(p9x,p9y,0);
        //var v6 = new THREE.Vector3(p6x,p6y,0);
        var v7 = new THREE.Vector3(cenx,ceny,0);
        var v8 = new THREE.Vector3(p8x,p8y,0);
        var v15 = new THREE.Vector3(p2x,p2y,0);
        //geometry.vertices.push(v1);
        geometry.vertices.push(v2);
        //geometry.vertices.push(v3);
        geometry.vertices.push(v4);
        geometry.vertices.push(v5);
        geometry.vertices.push(v9);
        //geometry.vertices.push(v6);
        geometry.vertices.push(v7);
        geometry.vertices.push(v8);
        geometry.vertices.push(v15);
        
        rectangle = new THREE.Line( geometry, material );
        rectangle.visible=true;
        PIEaddElement(rectangle);
        PIErender();
    }
    else if (verticesno==7) {
        point7.position.set(cenx,ceny,0.01);

PIEremoveElement(rectangle);
PIErender();

p7x=cenx;
p7y=ceny;


    var material = new THREE.LineBasicMaterial({color: 0x164ba0,linewidth:3.5});
        var geometry = new THREE.Geometry();
        //var v1 = new THREE.Vector3(p1x,p1y,0);  
        var v2 = new THREE.Vector3(p2x,p2y,0);
        //var v3 = new THREE.Vector3(p3x,p3y,0);   
        var v4 = new THREE.Vector3(p4x,p4y,0);
        var v5 = new THREE.Vector3(p5x,p5y,0);
        var v10= new THREE.Vector3(p10x,p10y,0);
        var v11= new THREE.Vector3(p11x,p11y,0);
        //var v9 = new THREE.Vector3(p9x,p9y,0);
        var v7 = new THREE.Vector3(cenx,ceny,0);
        var v8 = new THREE.Vector3(p8x,p8y,0);
        var v15 = new THREE.Vector3(p2x,p2y,0);
        //geometry.vertices.push(v1);
        geometry.vertices.push(v2);
        //geometry.vertices.push(v3);
        geometry.vertices.push(v4);
        geometry.vertices.push(v5);
        geometry.vertices.push(v10);
        geometry.vertices.push(v11);
        geometry.vertices.push(v7);
        geometry.vertices.push(v8);
        geometry.vertices.push(v15);
        
        rectangle = new THREE.Line( geometry, material );
        rectangle.visible=true;
        PIEaddElement(rectangle);
        PIErender();
    }
    else if (verticesno==8) {
        point7.position.set(cenx,ceny,0.01);

PIEremoveElement(rectangle);
PIErender();

p7x=cenx;
p7y=ceny;


    var material = new THREE.LineBasicMaterial({color: 0x164ba0,linewidth:3.5});
        var geometry = new THREE.Geometry();
        //var v1 = new THREE.Vector3(p1x,p1y,0);  
        var v12 = new THREE.Vector3(p12x,p12y,0);
        var v13 = new THREE.Vector3(p13x,p13y,0);   
        var v4 = new THREE.Vector3(p4x,p4y,0);
        var v5 = new THREE.Vector3(p5x,p5y,0);
        var v10= new THREE.Vector3(p10x,p10y,0);
        var v11= new THREE.Vector3(p11x,p11y,0);
        //var v9 = new THREE.Vector3(p9x,p9y,0);
        var v7 = new THREE.Vector3(cenx,ceny,0);
        var v8 = new THREE.Vector3(p8x,p8y,0);
        var v15 = new THREE.Vector3(p12x,p12y,0);
        //geometry.vertices.push(v1);
        geometry.vertices.push(v12);
        geometry.vertices.push(v13);
        geometry.vertices.push(v4);
        geometry.vertices.push(v5);
        geometry.vertices.push(v10);
        geometry.vertices.push(v11);
        geometry.vertices.push(v7);
        geometry.vertices.push(v8);
        geometry.vertices.push(v15);
        
        rectangle = new THREE.Line( geometry, material );
        rectangle.visible=true;
        PIEaddElement(rectangle);
        PIErender();
    }
else{
point7.position.set(cenx,ceny,0.01);

PIEremoveElement(rectangle);
PIErender();

p7x=cenx;
p7y=ceny;

    var material = new THREE.LineBasicMaterial({color: 0x164ba0,linewidth:3.5});
        var geometry = new THREE.Geometry();
        var v1 = new THREE.Vector3(p1x,p1y,0);  
        var v2 = new THREE.Vector3(p2x,p2y,0);
        var v3 = new THREE.Vector3(p3x,p3y,0);   
        var v4 = new THREE.Vector3(p4x,p4y,0);
        var v5 = new THREE.Vector3(p5x,p5y,0);
        var v6 = new THREE.Vector3(p6x,p6y,0);
        var v7 = new THREE.Vector3(cenx,ceny,0);
        var v8 = new THREE.Vector3(p8x,p8y,0);
        var v9 = new THREE.Vector3(p1x,p1y,0);
        geometry.vertices.push(v1);
        geometry.vertices.push(v2);
        geometry.vertices.push(v3);
        geometry.vertices.push(v4);
        geometry.vertices.push(v5);
        geometry.vertices.push(v6);
        geometry.vertices.push(v7);
        geometry.vertices.push(v8);
        geometry.vertices.push(v9);
        
        rectangle = new THREE.Line( geometry, material );
        rectangle.visible=true;
        PIEaddElement(rectangle);
        PIErender();
    }

    arrowHelper1.visible=false;
arrowHelper2.visible=false;
arrowHelper3.visible=false;
arrowHelper4.visible=false;
arrowHelper5.visible=false;
arrowHelper6.visible=false;
arrowHelper7.visible=false;
arrowHelper8.visible=false;
arrowHelper9.visible=false;
arrowHelper10.visible=false;
 t1.visible=false;
 t2.visible=false;
 t3.visible=false;
}

function point8drag(element,newpos){
cenx=newpos.x;
ceny=newpos.y;

if (verticesno==5) {
point8.position.set(cenx,ceny,0.01);

PIEremoveElement(rectangle);
PIErender();

p8x=cenx;
p8y=ceny;

    var material = new THREE.LineBasicMaterial({color: 0x164ba0,linewidth:3.5});
        var geometry = new THREE.Geometry();
        //var v1 = new THREE.Vector3(p1x,p1y,0);  
        var v2 = new THREE.Vector3(p2x,p2y,0);
        //var v3 = new THREE.Vector3(p3x,p3y,0);   
        var v4 = new THREE.Vector3(p4x,p4y,0);
        var v5 = new THREE.Vector3(p5x,p5y,0);
        //var v6 = new THREE.Vector3(p6x,p6y,0);
        var v7 = new THREE.Vector3(p7x,p7y,0);
        var v8 = new THREE.Vector3(cenx,ceny,0);
        var v9 = new THREE.Vector3(p2x,p2y,0);
        //geometry.vertices.push(v1);
        geometry.vertices.push(v2);
        //geometry.vertices.push(v3);
        geometry.vertices.push(v4);
        geometry.vertices.push(v5);
        //geometry.vertices.push(v6);
        geometry.vertices.push(v7);
        geometry.vertices.push(v8);
        geometry.vertices.push(v9);
        
        rectangle = new THREE.Line( geometry, material );
        rectangle.visible=true;
        PIEaddElement(rectangle);
        PIErender();
}
else if(verticesno==6){
point8.position.set(cenx,ceny,0.01);

PIEremoveElement(rectangle);
PIErender();

p8x=cenx;
p8y=ceny;

    var material = new THREE.LineBasicMaterial({color: 0x164ba0,linewidth:3.5});
        var geometry = new THREE.Geometry();
        //var v1 = new THREE.Vector3(p1x,p1y,0);  
        var v2 = new THREE.Vector3(p2x,p2y,0);
        //var v3 = new THREE.Vector3(p3x,p3y,0);   
        var v4 = new THREE.Vector3(p4x,p4y,0);
        var v5 = new THREE.Vector3(p5x,p5y,0);
        var v9 = new THREE.Vector3(p9x,p9y,0);
        //var v6 = new THREE.Vector3(p6x,p6y,0);
        var v7 = new THREE.Vector3(p7x,p7y,0);
        var v8 = new THREE.Vector3(cenx,ceny,0);
        var v15 = new THREE.Vector3(p2x,p2y,0);
        //geometry.vertices.push(v1);
        geometry.vertices.push(v2);
        //geometry.vertices.push(v3);
        geometry.vertices.push(v4);
        geometry.vertices.push(v5);
        geometry.vertices.push(v9);
        //geometry.vertices.push(v6);
        geometry.vertices.push(v7);
        geometry.vertices.push(v8);
        geometry.vertices.push(v15);
        
        rectangle = new THREE.Line( geometry, material );
        rectangle.visible=true;
        PIEaddElement(rectangle);
        PIErender();
    }
    else if (verticesno==7) {
        point8.position.set(cenx,ceny,0.01);

PIEremoveElement(rectangle);
PIErender();

p8x=cenx;
p8y=ceny;


    var material = new THREE.LineBasicMaterial({color: 0x164ba0,linewidth:3.5});
        var geometry = new THREE.Geometry();
        //var v1 = new THREE.Vector3(p1x,p1y,0);  
        var v2 = new THREE.Vector3(p2x,p2y,0);
        //var v3 = new THREE.Vector3(p3x,p3y,0);   
        var v4 = new THREE.Vector3(p4x,p4y,0);
        var v5 = new THREE.Vector3(p5x,p5y,0);
        var v10= new THREE.Vector3(p10x,p10y,0);
        var v11= new THREE.Vector3(p11x,p11y,0);
        //var v9 = new THREE.Vector3(p9x,p9y,0);
        var v7 = new THREE.Vector3(p7x,p7y,0);
        var v8 = new THREE.Vector3(cenx,ceny,0);
        var v15 = new THREE.Vector3(p2x,p2y,0);
        //geometry.vertices.push(v1);
        geometry.vertices.push(v2);
        //geometry.vertices.push(v3);
        geometry.vertices.push(v4);
        geometry.vertices.push(v5);
        geometry.vertices.push(v10);
        geometry.vertices.push(v11);
        geometry.vertices.push(v7);
        geometry.vertices.push(v8);
        geometry.vertices.push(v15);
        
        rectangle = new THREE.Line( geometry, material );
        rectangle.visible=true;
        PIEaddElement(rectangle);
        PIErender();
    }
    else if (verticesno==8) {
        point8.position.set(cenx,ceny,0.01);

PIEremoveElement(rectangle);
PIErender();

p8x=cenx;
p8y=ceny;


    var material = new THREE.LineBasicMaterial({color: 0x164ba0,linewidth:3.5});
        var geometry = new THREE.Geometry();
        //var v1 = new THREE.Vector3(p1x,p1y,0);  
        var v12 = new THREE.Vector3(p12x,p12y,0);
        var v13 = new THREE.Vector3(p13x,p13y,0);   
        var v4 = new THREE.Vector3(p4x,p4y,0);
        var v5 = new THREE.Vector3(p5x,p5y,0);
        var v10= new THREE.Vector3(p10x,p10y,0);
        var v11= new THREE.Vector3(p11x,p11y,0);
        //var v9 = new THREE.Vector3(p9x,p9y,0);
        var v7 = new THREE.Vector3(p7x,p7y,0);
        var v8 = new THREE.Vector3(cenx,ceny,0);
        var v15 = new THREE.Vector3(p12x,p12y,0);
        //geometry.vertices.push(v1);
        geometry.vertices.push(v12);
        geometry.vertices.push(v13);
        geometry.vertices.push(v4);
        geometry.vertices.push(v5);
        geometry.vertices.push(v10);
        geometry.vertices.push(v11);
        geometry.vertices.push(v7);
        geometry.vertices.push(v8);
        geometry.vertices.push(v15);
        
        rectangle = new THREE.Line( geometry, material );
        rectangle.visible=true;
        PIEaddElement(rectangle);
        PIErender();
    }
else{
point8.position.set(cenx,ceny,0.01);

PIEremoveElement(rectangle);
PIErender();

p8x=cenx;
p8y=ceny;

    var material = new THREE.LineBasicMaterial({color: 0x164ba0,linewidth:3.5});
        var geometry = new THREE.Geometry();
        var v1 = new THREE.Vector3(p1x,p1y,0);  
        var v2 = new THREE.Vector3(p2x,p2y,0);
        var v3 = new THREE.Vector3(p3x,p3y,0);   
        var v4 = new THREE.Vector3(p4x,p4y,0);
        var v5 = new THREE.Vector3(p5x,p5y,0);
        var v6 = new THREE.Vector3(p6x,p6y,0);
        var v7 = new THREE.Vector3(p7x,p7y,0);
        var v8 = new THREE.Vector3(cenx,ceny,0);
        var v9 = new THREE.Vector3(p1x,p1y,0);
        geometry.vertices.push(v1);
        geometry.vertices.push(v2);
        geometry.vertices.push(v3);
        geometry.vertices.push(v4);
        geometry.vertices.push(v5);
        geometry.vertices.push(v6);
        geometry.vertices.push(v7);
        geometry.vertices.push(v8);
        geometry.vertices.push(v9);
        
        rectangle = new THREE.Line( geometry, material );
        rectangle.visible=true;
        PIEaddElement(rectangle);
        PIErender();
    }
    arrowHelper1.visible=false;
arrowHelper2.visible=false;
arrowHelper3.visible=false;
arrowHelper4.visible=false;
arrowHelper5.visible=false;
arrowHelper6.visible=false;
arrowHelper7.visible=false;
arrowHelper8.visible=false;
arrowHelper9.visible=false;
arrowHelper10.visible=false;
 t1.visible=false;
 t2.visible=false;
 t3.visible=false;
}


function point9drag(element,newpos){
cenx=newpos.x;
ceny=newpos.y;

    if(verticesno==6){
point9.position.set(cenx,ceny,0.01);

PIEremoveElement(rectangle);
PIErender();

p9x=cenx;
p9y=ceny;

    var material = new THREE.LineBasicMaterial({color: 0x164ba0,linewidth:3.5});
        var geometry = new THREE.Geometry();
        //var v1 = new THREE.Vector3(p1x,p1y,0);  
        var v2 = new THREE.Vector3(p2x,p2y,0);
        //var v3 = new THREE.Vector3(p3x,p3y,0);   
        var v4 = new THREE.Vector3(p4x,p4y,0);
        var v5 = new THREE.Vector3(p5x,p5y,0);
        var v9 = new THREE.Vector3(cenx,ceny,0);
        //var v6 = new THREE.Vector3(p6x,p6y,0);
        var v7 = new THREE.Vector3(p7x,p7y,0);
        var v8 = new THREE.Vector3(p8x,p8y,0);
        var v15 = new THREE.Vector3(p2x,p2y,0);
        //geometry.vertices.push(v1);
        geometry.vertices.push(v2);
        //geometry.vertices.push(v3);
        geometry.vertices.push(v4);
        geometry.vertices.push(v5);
        geometry.vertices.push(v9);
        //geometry.vertices.push(v6);
        geometry.vertices.push(v7);
        geometry.vertices.push(v8);
        geometry.vertices.push(v15);
        
        rectangle = new THREE.Line( geometry, material );
        rectangle.visible=true;
        PIEaddElement(rectangle);
        PIErender();
    }

    arrowHelper1.visible=false;
arrowHelper2.visible=false;
arrowHelper3.visible=false;
arrowHelper4.visible=false;
arrowHelper5.visible=false;
arrowHelper6.visible=false;
arrowHelper7.visible=false;
arrowHelper8.visible=false;
arrowHelper9.visible=false;
arrowHelper10.visible=false;
 t1.visible=false;
 t2.visible=false;
 t3.visible=false;

}
function point10drag(element,newpos){
    cenx=newpos.x;
    ceny=newpos.y;

     if (verticesno==7) {
        point10.position.set(cenx,ceny,0.01);

PIEremoveElement(rectangle);
PIErender();

p10x=cenx;
p10y=ceny;


    var material = new THREE.LineBasicMaterial({color: 0x164ba0,linewidth:3.5});
        var geometry = new THREE.Geometry();
        //var v1 = new THREE.Vector3(p1x,p1y,0);  
        var v2 = new THREE.Vector3(p2x,p2y,0);
        //var v3 = new THREE.Vector3(p3x,p3y,0);   
        var v4 = new THREE.Vector3(p4x,p4y,0);
        var v5 = new THREE.Vector3(p5x,p5y,0);
        var v10= new THREE.Vector3(cenx,ceny,0);
        var v11= new THREE.Vector3(p11x,p11y,0);
        //var v9 = new THREE.Vector3(p9x,p9y,0);
        var v7 = new THREE.Vector3(p7x,p7y,0);
        var v8 = new THREE.Vector3(p8x,p8y,0);
        var v15 = new THREE.Vector3(p2x,p2y,0);
        //geometry.vertices.push(v1);
        geometry.vertices.push(v2);
        //geometry.vertices.push(v3);
        geometry.vertices.push(v4);
        geometry.vertices.push(v5);
        geometry.vertices.push(v10);
        geometry.vertices.push(v11);
        geometry.vertices.push(v7);
        geometry.vertices.push(v8);
        geometry.vertices.push(v15);
        
        rectangle = new THREE.Line( geometry, material );
        rectangle.visible=true;
        PIEaddElement(rectangle);
        PIErender();
    }
    else if (verticesno==8) {
        point10.position.set(cenx,ceny,0.01);

PIEremoveElement(rectangle);
PIErender();

p10x=cenx;
p10y=ceny;


    var material = new THREE.LineBasicMaterial({color: 0x164ba0,linewidth:3.5});
        var geometry = new THREE.Geometry();
        //var v1 = new THREE.Vector3(p1x,p1y,0);  
        var v12 = new THREE.Vector3(p12x,p12y,0);
        var v13 = new THREE.Vector3(p13x,p13y,0);   
        var v4 = new THREE.Vector3(p4x,p4y,0);
        var v5 = new THREE.Vector3(p5x,p5y,0);
        var v10= new THREE.Vector3(cenx,ceny,0);
        var v11= new THREE.Vector3(p11x,p11y,0);
        //var v9 = new THREE.Vector3(p9x,p9y,0);
        var v7 = new THREE.Vector3(p7x,p7y,0);
        var v8 = new THREE.Vector3(p8x,p8y,0);
        var v15 = new THREE.Vector3(p12x,p12y,0);
        //geometry.vertices.push(v1);
        geometry.vertices.push(v12);
        geometry.vertices.push(v13);
        geometry.vertices.push(v4);
        geometry.vertices.push(v5);
        geometry.vertices.push(v10);
        geometry.vertices.push(v11);
        geometry.vertices.push(v7);
        geometry.vertices.push(v8);
        geometry.vertices.push(v15);
        
        rectangle = new THREE.Line( geometry, material );
        rectangle.visible=true;
        PIEaddElement(rectangle);
        PIErender();
    }

    arrowHelper1.visible=false;
arrowHelper2.visible=false;
arrowHelper3.visible=false;
arrowHelper4.visible=false;
arrowHelper5.visible=false;
arrowHelper6.visible=false;
arrowHelper7.visible=false;
arrowHelper8.visible=false;
arrowHelper9.visible=false;
arrowHelper10.visible=false;
 t1.visible=false;
 t2.visible=false;
 t3.visible=false;
}


function point11drag(element,newpos){
    
       cenx=newpos.x;
    ceny=newpos.y;

     if (verticesno==7) {
        point11.position.set(cenx,ceny,0.01);

PIEremoveElement(rectangle);
PIErender();

p11x=cenx;
p11y=ceny;


    var material = new THREE.LineBasicMaterial({color: 0x164ba0,linewidth:3.5});
        var geometry = new THREE.Geometry();
        //var v1 = new THREE.Vector3(p1x,p1y,0);  
        var v2 = new THREE.Vector3(p2x,p2y,0);
        //var v3 = new THREE.Vector3(p3x,p3y,0);   
        var v4 = new THREE.Vector3(p4x,p4y,0);
        var v5 = new THREE.Vector3(p5x,p5y,0);
        var v10= new THREE.Vector3(p10x,p10y,0);
        var v11= new THREE.Vector3(cenx,ceny,0);
        //var v9 = new THREE.Vector3(p9x,p9y,0);
        var v7 = new THREE.Vector3(p7x,p7y,0);
        var v8 = new THREE.Vector3(p8x,p8y,0);
        var v15 = new THREE.Vector3(p2x,p2y,0);
        //geometry.vertices.push(v1);
        geometry.vertices.push(v2);
        //geometry.vertices.push(v3);
        geometry.vertices.push(v4);
        geometry.vertices.push(v5);
        geometry.vertices.push(v10);
        geometry.vertices.push(v11);
        geometry.vertices.push(v7);
        geometry.vertices.push(v8);
        geometry.vertices.push(v15);
        
        rectangle = new THREE.Line( geometry, material );
        rectangle.visible=true;
        PIEaddElement(rectangle);
        PIErender();
    }
    else if (verticesno==8) {
        point11.position.set(cenx,ceny,0.01);

PIEremoveElement(rectangle);
PIErender();

p11x=cenx;
p11y=ceny;


    var material = new THREE.LineBasicMaterial({color: 0x164ba0,linewidth:3.5});
        var geometry = new THREE.Geometry();
        //var v1 = new THREE.Vector3(p1x,p1y,0);  
        var v12 = new THREE.Vector3(p12x,p12y,0);
        var v13 = new THREE.Vector3(p13x,p13y,0);   
        var v4 = new THREE.Vector3(p4x,p4y,0);
        var v5 = new THREE.Vector3(p5x,p5y,0);
        var v10= new THREE.Vector3(p10x,p10y,0);
        var v11= new THREE.Vector3(cenx,ceny,0);
        //var v9 = new THREE.Vector3(p9x,p9y,0);
        var v7 = new THREE.Vector3(p7x,p7y,0);
        var v8 = new THREE.Vector3(p8x,p8y,0);
        var v15 = new THREE.Vector3(p12x,p12y,0);
        //geometry.vertices.push(v1);
        geometry.vertices.push(v12);
        geometry.vertices.push(v13);
        geometry.vertices.push(v4);
        geometry.vertices.push(v5);
        geometry.vertices.push(v10);
        geometry.vertices.push(v11);
        geometry.vertices.push(v7);
        geometry.vertices.push(v8);
        geometry.vertices.push(v15);
        
        rectangle = new THREE.Line( geometry, material );
        rectangle.visible=true;
        PIEaddElement(rectangle);
        PIErender();
    }

    arrowHelper1.visible=false;
arrowHelper2.visible=false;
arrowHelper3.visible=false;
arrowHelper4.visible=false;
arrowHelper5.visible=false;
arrowHelper6.visible=false;
arrowHelper7.visible=false;
arrowHelper8.visible=false;
arrowHelper9.visible=false;
arrowHelper10.visible=false;
 t1.visible=false;
 t2.visible=false;
 t3.visible=false;
}


function point12drag(element,newpos){
        cenx=newpos.x;
    ceny=newpos.y;

    if (verticesno==8) {
        point12.position.set(cenx,ceny,0.01);

PIEremoveElement(rectangle);
PIErender();

p12x=cenx;
p12y=ceny;


    var material = new THREE.LineBasicMaterial({color: 0x164ba0,linewidth:3.5});
        var geometry = new THREE.Geometry();
        //var v1 = new THREE.Vector3(p1x,p1y,0);  
        var v12 = new THREE.Vector3(cenx,ceny,0);
        var v13 = new THREE.Vector3(p13x,p13y,0);   
        var v4 = new THREE.Vector3(p4x,p4y,0);
        var v5 = new THREE.Vector3(p5x,p5y,0);
        var v10= new THREE.Vector3(p10x,p10y,0);
        var v11= new THREE.Vector3(p11x,p11y,0);
        //var v9 = new THREE.Vector3(p9x,p9y,0);
        var v7 = new THREE.Vector3(p7x,p7y,0);
        var v8 = new THREE.Vector3(p8x,p8y,0);
        var v15 = new THREE.Vector3(cenx,ceny,0);
        //geometry.vertices.push(v1);
        geometry.vertices.push(v12);
        geometry.vertices.push(v13);
        geometry.vertices.push(v4);
        geometry.vertices.push(v5);
        geometry.vertices.push(v10);
        geometry.vertices.push(v11);
        geometry.vertices.push(v7);
        geometry.vertices.push(v8);
        geometry.vertices.push(v15);
        
        rectangle = new THREE.Line( geometry, material );
        rectangle.visible=true;
        PIEaddElement(rectangle);
        PIErender();
    }

    arrowHelper1.visible=false;
arrowHelper2.visible=false;
arrowHelper3.visible=false;
arrowHelper4.visible=false;
arrowHelper5.visible=false;
arrowHelper6.visible=false;
arrowHelper7.visible=false;
arrowHelper8.visible=false;
arrowHelper9.visible=false;
arrowHelper10.visible=false;
 t1.visible=false;
 t2.visible=false;
 t3.visible=false;
}


function point13drag(element,newpos){
    cenx=newpos.x;
    ceny=newpos.y;

    if (verticesno==8) {
        point13.position.set(cenx,ceny,0.01);

PIEremoveElement(rectangle);
PIErender();

p13x=cenx;
p13y=ceny;


    var material = new THREE.LineBasicMaterial({color: 0x164ba0,linewidth:3.5});
        var geometry = new THREE.Geometry();
        //var v1 = new THREE.Vector3(p1x,p1y,0);  
        var v12 = new THREE.Vector3(p12x,p12y,0);
        var v13 = new THREE.Vector3(p13x,p13y,0);   
        var v4 = new THREE.Vector3(p4x,p4y,0);
        var v5 = new THREE.Vector3(p5x,p5y,0);
        var v10= new THREE.Vector3(p10x,p10y,0);
        var v11= new THREE.Vector3(p11x,p11y,0);
        //var v9 = new THREE.Vector3(p9x,p9y,0);
        var v7 = new THREE.Vector3(p7x,p7y,0);
        var v8 = new THREE.Vector3(p8x,p8y,0);
        var v15 = new THREE.Vector3(p12x,p12y,0);
        //geometry.vertices.push(v1);
        geometry.vertices.push(v12);
        geometry.vertices.push(v13);
        geometry.vertices.push(v4);
        geometry.vertices.push(v5);
        geometry.vertices.push(v10);
        geometry.vertices.push(v11);
        geometry.vertices.push(v7);
        geometry.vertices.push(v8);
        geometry.vertices.push(v15);
        
        rectangle = new THREE.Line( geometry, material );
        rectangle.visible=true;
        PIEaddElement(rectangle);
        PIErender();
    }

    arrowHelper1.visible=false;
arrowHelper2.visible=false;
arrowHelper3.visible=false;
arrowHelper4.visible=false;
arrowHelper5.visible=false;
arrowHelper6.visible=false;
arrowHelper7.visible=false;
arrowHelper8.visible=false;
arrowHelper9.visible=false;
arrowHelper10.visible=false;
 t1.visible=false;
 t2.visible=false;
 t3.visible=false;
}




 var angle=0;

var play=1;
var turn=1;
var flag1=0,flag2=0,flag3=0,flag4=0,flag5=0,flag6=0,flag7=0,flag8=0,flag9=0,flag10=0;
var distance;
function finddistance(a,b,c,d){
distance=Math.sqrt(((a-b)*(a-b))+((c-d)*(c-d)));
return distance;
}

var distance1,distance2,distance3;
var countarrow=1;

function updateExperimentElements(t, dt)
{

    var boundaryT;      /* Boundary Event Time */
    var play_time = t/1000;

    boundaryT = dt / 1000.0 ;    /* convert to seconds */
    //console.log('started');


    
    if(play == 0){
//console.log('get vertices upper line');

        if (circlerotate==0) {
            t3.visible=false;
        getvertices();

        if (verticesno==3) {
            //console.log('verticesno == 3 entered');

            if (flag3==0) {
                point20.position.set(point2.position.x,point2.position.y,0.01);
            }

            slopecal();

            point1.visible=false;
            point2.visible=false;
            point3.visible=false;
            point4.visible=false;
            point5.visible=false;
            point6.visible=false;
            point7.visible=false;
            point8.visible=false;
            point9.visible=false;
            point10.visible=false;
            point11.visible=false;
            point12.visible=false;
            point13.visible=false;
             point20.visible=true;

            
            flag3=1;

            if (case1 && turn==1) {
                turn=2;
            }
            else if (case2 && turn==2) {
                turn=3;
            }
            else if (case3 && turn==3) {
                turn=4;
            }



            if (turn==1) {
                console.log('turn 1 entered');
                console.log('slope1 '+slope1);

                if (countarrow==1) {

                    t1.visible=true;

                    PIEremoveElement(t2);
                    PIErender();

materialSide = new THREE.MeshBasicMaterial( { color: 0x000000} );
    materialArray = [materialSide ];
     loader = new THREE.FontLoader();

loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(turn, 
        {
            size: 0.45, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        t2 = new THREE.Mesh(textGeom, textMaterial );
        t2.position.set(2.5,6,0);
        t2.visible=true;
        PIEaddElement(t2);
        PIErender();
    });

                PIEremoveElement(arrowHelper1);
                PIErender();

                var from1 = new THREE.Vector3( point2.position.x,point2.position.y,0.001 );
                 var to1 = new THREE.Vector3( point5.position.x,point5.position.y,0.001);
                    var direction1 = to1.clone().sub(from1);
                    var length1 = direction1.length();
                    var length=length1/3;
                    arrowHelper1 = new THREE.ArrowHelper(direction1.normalize(), from1, length, 0x000000,0.3,0.3 );
                     arrowHelper1.visible=true;
                    PIEaddElement(arrowHelper1);
                    PIErender();
                }
                countarrow=2;
                   if (slope1==0) {
                    point20.position.set(point20.position.x+slope1directionx*Math.cos(slope1)*boundaryT,point20.position.y,0.01);
                   }
                   else if (slope1==-1.5707963267948966 || slope1==1.5707963267948966) {
                    point20.position.set(point20.position.x,point20.position.y+Math.sin(slope1)*boundaryT,0.01);
                   }
                    else{
                point20.position.set(point20.position.x+slope1directionx*Math.cos(slope1)*boundaryT,point20.position.y+slope1directiony*Math.sin(slope1)*boundaryT,0.01);
                PIErender();
                    }
            }
            else if (turn==2) {
                console.log('turn 2 entered');
                console.log('slope2 '+slope2);

                if (countarrow==2) {


                 PIEremoveElement(arrowHelper2);
                PIErender();

                var from2 = new THREE.Vector3( point5.position.x,point5.position.y,0.001 );
                 var to2 = new THREE.Vector3( point7.position.x,point7.position.y,0.001);
                    var direction2 = to2.clone().sub(from2);
                    var length2 = direction2.length();
                    var length=length2/3;
                    arrowHelper2 = new THREE.ArrowHelper(direction2.normalize(), from2, length, 0x000000,0.3,0.3 );
                     arrowHelper2.visible=true;
                    PIEaddElement(arrowHelper2);
                    PIErender();

                     t1.visible=true;

                    PIEremoveElement(t2);
                    PIErender();


materialSide = new THREE.MeshBasicMaterial( { color: 0x000000} );
    materialArray = [materialSide ];
     loader = new THREE.FontLoader();
loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(turn, 
        {
            size: 0.45, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        t2 = new THREE.Mesh(textGeom, textMaterial );
        t2.position.set(2.5,6,0);
        t2.visible=true;
        PIEaddElement(t2);
        PIErender();
    });

                }
                countarrow=3;
                    if (slope2==0) {
                        console.log('slope2==0  loop entered');
                    point20.position.set(point20.position.x+slope2directionx*Math.cos(slope2)*boundaryT,point20.position.y,0.01);
                    console.log('slope2==0  loop exited');
                   }
                   else if (slope2==-1.5707963267948966 || slope2==1.5707963267948966) {
                    point20.position.set(point20.position.x,point20.position.y+Math.sin(slope2)*boundaryT,0.01);
                   }
                    else{
                    point20.position.set(point20.position.x+slope2directionx*Math.cos(slope2)*boundaryT,point20.position.y+slope2directiony*Math.sin(slope2)*boundaryT,0.01);
                    PIErender();
                }

            }
            else if (turn==3) {
                console.log('turn 3 entered');

                if (countarrow==3) {

                 PIEremoveElement(arrowHelper3);
                PIErender();

                var from3 = new THREE.Vector3( point7.position.x,point7.position.y,0.001 );
                 var to3 = new THREE.Vector3( point2.position.x,point2.position.y,0.001);
                    var direction3 = to3.clone().sub(from3);
                    var length3 = direction3.length();
                    var length=length3/3;
                    arrowHelper3 = new THREE.ArrowHelper(direction3.normalize(), from3, length, 0x000000,0.3,0.3 );
                     arrowHelper3.visible=true;
                    PIEaddElement(arrowHelper3);
                    PIErender();
                    t1.visible=true;

                    PIEremoveElement(t2);
                    PIErender();

                    materialSide = new THREE.MeshBasicMaterial( { color: 0x000000} );
                    materialArray = [materialSide ];
                     loader = new THREE.FontLoader();

                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                            
                            var textGeom = new THREE.TextGeometry(turn, 
                            {
                                size: 0.45, height: 0,
                                font: font, weight: "normal", style: "normal"
                            });  
                        var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                            t2 = new THREE.Mesh(textGeom, textMaterial );
                            t2.position.set(2.5,6,0);
                            t2.visible=true;
                            PIEaddElement(t2);
                            PIErender();
                        });

                    }
                    countarrow=4;

                    if (slope3==0) {
                    point20.position.set(point20.position.x+slope3directionx*Math.cos(slope3)*boundaryT,point20.position.y,0.01);
                   }
                   else if (slope3==-1.5707963267948966 || slope3==1.5707963267948966) {
                    point20.position.set(point20.position.x,point20.position.y+Math.sin(slope3)*boundaryT,0.01);
                   }
                    else{
                    point20.position.set(point20.position.x+slope3directionx*Math.cos(slope3)*boundaryT,point20.position.y+slope3directiony*Math.sin(slope3)*boundaryT,0.01);
                    PIErender();
                }
            }
            else if (turn==4) {

            
                 turn=1;
                flag3=0;
                countarrow=1;
                t1.visible=true;

                PIEstopAnimation();
                point2.position.set(p2x,p2y,0.01);
                point5.position.set(p5x,p5y,0.01);
                point7.position.set(p7x,p7y,0.01);
                point2.visible=true;
                point5.visible=true;
                point7.visible=true;
                point20.visible=false;
                PIErender();
            }



        }
        else if (verticesno==4) {

            point1.visible=false;
            point2.visible=false;
            point3.visible=false;
            point4.visible=false;
            point5.visible=false;
            point6.visible=false;
            point7.visible=false;
            point8.visible=false;
            point9.visible=false;
            point10.visible=false;
            point11.visible=false;
            point12.visible=false;
            point13.visible=false;
             point20.visible=true;

             if (flag4==0) {
                point20.position.set(point1.position.x,point1.position.y,0.01);
            }

            slopecal();
            flag4=1;

            if (case1 && turn==1) {
                turn=2;
            }
            else if (case2 && turn==2) {
                turn=3;
            }
            else if (case3 && turn==3) {
                turn=4;
            }
            else if (case4 && turn==4) {
                turn=5;
            }


            if (turn==1) {
                console.log('turn 1 entered');
                console.log('slope1 '+slope1);
                if (countarrow==1) {

                PIEremoveElement(arrowHelper1);
                PIErender();

                var from1 = new THREE.Vector3( point1.position.x,point1.position.y,0.001 );
                 var to1 = new THREE.Vector3( point3.position.x,point3.position.y,0.001);
                    var direction1 = to1.clone().sub(from1);
                    var length1 = direction1.length();
                    var length=length1/3;
                    arrowHelper1 = new THREE.ArrowHelper(direction1.normalize(), from1, length, 0x000000,0.3,0.3 );
                     arrowHelper1.visible=true;
                    PIEaddElement(arrowHelper1);
                    PIErender();


                    t1.visible=true;

                    PIEremoveElement(t2);
                    PIErender();


                    materialSide = new THREE.MeshBasicMaterial( { color: 0x000000} );
                    materialArray = [materialSide ];
                     loader = new THREE.FontLoader();
                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                            
                            var textGeom = new THREE.TextGeometry(turn, 
                            {
                                size: 0.45, height: 0,
                                font: font, weight: "normal", style: "normal"
                            });  
                        var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                            t2 = new THREE.Mesh(textGeom, textMaterial );
                            t2.position.set(2.5,6,0);
                            t2.visible=true;
                            PIEaddElement(t2);
                            PIErender();
                        });
                }
                countarrow=2;
                   if (slope1==0) {
                    point20.position.set(point20.position.x+slope1directionx*Math.cos(slope1)*boundaryT,point20.position.y,0.01);
                   }
                   else if (slope1==-1.5707963267948966 || slope1==1.5707963267948966) {
                    point20.position.set(point20.position.x,point20.position.y+Math.sin(slope1)*boundaryT,0.01);
                   }
                    else{
                point20.position.set(point20.position.x+slope1directionx*Math.cos(slope1)*boundaryT,point20.position.y+slope1directiony*Math.sin(slope1)*boundaryT,0.01);
                PIErender();
                    }
            }
            else if (turn==2) {
                console.log('turn 2 entered');
                console.log('slope2 '+slope2);
                if (countarrow==2) {

                PIEremoveElement(arrowHelper2);
                PIErender();

                var from2 = new THREE.Vector3( point3.position.x,point3.position.y,0.001 );
                 var to2 = new THREE.Vector3( point5.position.x,point5.position.y,0.001);
                    var direction2 = to2.clone().sub(from2);
                    var length2 = direction2.length();
                    var length=length2/3;
                    arrowHelper2 = new THREE.ArrowHelper(direction2.normalize(), from2, length, 0x000000,0.3,0.3 );
                     arrowHelper2.visible=true;
                    PIEaddElement(arrowHelper2);
                    PIErender();

                    t1.visible=true;

                    PIEremoveElement(t2);
                    PIErender();


                    materialSide = new THREE.MeshBasicMaterial( { color: 0x000000} );
                    materialArray = [materialSide ];
                     loader = new THREE.FontLoader();
                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                            
                            var textGeom = new THREE.TextGeometry(turn, 
                            {
                                size: 0.45, height: 0,
                                font: font, weight: "normal", style: "normal"
                            });  
                        var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                            t2 = new THREE.Mesh(textGeom, textMaterial );
                            t2.position.set(2.5,6,0);
                            t2.visible=true;
                            PIEaddElement(t2);
                            PIErender();
                        });
                }
                countarrow=3;
                    if (slope2==0) {
                        console.log('slope2==0  loop entered');
                    point20.position.set(point20.position.x+slope2directionx*Math.cos(slope2)*boundaryT,point20.position.y,0.01);
                    console.log('slope2==0  loop exited');
                   }
                   else if (slope2==-1.5707963267948966 || slope2==1.5707963267948966) {
                    point20.position.set(point20.position.x,point20.position.y+Math.sin(slope2)*boundaryT,0.01);
                   }
                    else{
                    point20.position.set(point20.position.x+slope2directionx*Math.cos(slope2)*boundaryT,point20.position.y+slope2directiony*Math.sin(slope2)*boundaryT,0.01);
                    PIErender();
                }

            }
            else if (turn==3) {
                console.log('turn 3 entered');
                console.log('slope3 '+slope3);
                if (countarrow==3) {

                PIEremoveElement(arrowHelper3);
                PIErender();

                var from3 = new THREE.Vector3( point5.position.x,point5.position.y,0.001 );
                 var to3 = new THREE.Vector3( point7.position.x,point7.position.y,0.001);
                    var direction3 = to3.clone().sub(from3);
                    var length3 = direction3.length();
                    var length=length3/3;
                    arrowHelper3 = new THREE.ArrowHelper(direction3.normalize(), from3, length, 0x000000,0.3,0.3 );
                     arrowHelper3.visible=true;
                    PIEaddElement(arrowHelper3);
                    PIErender();

                    t1.visible=true;

                    PIEremoveElement(t2);
                    PIErender();


                    materialSide = new THREE.MeshBasicMaterial( { color: 0x000000} );
                    materialArray = [materialSide ];
                     loader = new THREE.FontLoader();
                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                            
                            var textGeom = new THREE.TextGeometry(turn, 
                            {
                                size: 0.45, height: 0,
                                font: font, weight: "normal", style: "normal"
                            });  
                        var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                            t2 = new THREE.Mesh(textGeom, textMaterial );
                            t2.position.set(2.5,6,0);
                            t2.visible=true;
                            PIEaddElement(t2);
                            PIErender();
                        });
                }
                countarrow=4;
                    if (slope3==0) {
                    point20.position.set(point20.position.x+slope3directionx*Math.cos(slope3)*boundaryT,point20.position.y,0.01);
                   }
                   else if (slope3==-1.5707963267948966 || slope3==1.5707963267948966) {
                    point20.position.set(point20.position.x,point20.position.y+Math.sin(slope3)*boundaryT,0.01);
                   }
                    else{
                    point20.position.set(point20.position.x+slope3directionx*Math.cos(slope3)*boundaryT,point20.position.y+slope3directiony*Math.sin(slope3)*boundaryT,0.01);
                    PIErender();
                }
            }
            else if (turn==4) {
                 console.log('turn 4 entered');
                 console.log('slope4 '+slope4);
                 if (countarrow==4) {

                PIEremoveElement(arrowHelper4);
                PIErender();

                var from4 = new THREE.Vector3( point7.position.x,point7.position.y,0.001 );
                 var to4 = new THREE.Vector3( point1.position.x,point1.position.y,0.001);
                    var direction4 = to4.clone().sub(from4);
                    var length4 = direction4.length();
                    var length=length4/3;
                    arrowHelper4 = new THREE.ArrowHelper(direction4.normalize(), from4, length, 0x000000,0.3,0.3 );
                     arrowHelper4.visible=true;
                    PIEaddElement(arrowHelper4);
                    PIErender();

                    t1.visible=true;

                    PIEremoveElement(t2);
                    PIErender();


                    materialSide = new THREE.MeshBasicMaterial( { color: 0x000000} );
                    materialArray = [materialSide ];
                     loader = new THREE.FontLoader();
                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                            
                            var textGeom = new THREE.TextGeometry(turn, 
                            {
                                size: 0.45, height: 0,
                                font: font, weight: "normal", style: "normal"
                            });  
                        var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                            t2 = new THREE.Mesh(textGeom, textMaterial );
                            t2.position.set(2.5,6,0);
                            t2.visible=true;
                            PIEaddElement(t2);
                            PIErender();
                        });
                }
                countarrow=5;
                    if (slope4==0) {
                    point20.position.set(point20.position.x+slope4directionx*Math.cos(slope4)*boundaryT,point20.position.y,0.01);
                   }
                   else if (slope4==-1.5707963267948966 || slope4==1.5707963267948966) {
                    point20.position.set(point20.position.x,point20.position.y+Math.sin(slope4)*boundaryT,0.01);
                   }
                    else{
                    point20.position.set(point20.position.x+slope4directionx*Math.cos(slope4)*boundaryT,point20.position.y+slope4directiony*Math.sin(slope4)*boundaryT,0.01);
                    PIErender();
                }
            }
            else if (turn==5) {

                
                turn=1;
                flag4=0;
                countarrow=1;
                PIEstopAnimation();
                point1.position.set(p1x,p1y,0.01);
                point3.position.set(p3x,p3y,0.01);
                point5.position.set(p5x,p5y,0.01);
                point7.position.set(p7x,p7y,0.01);
                point1.visible=true;
                point3.visible=true;
                point5.visible=true;
                point7.visible=true;
                point20.visible=false;
                PIErender();
            }
            
        }
        else if (verticesno==5) {


                point1.visible=false;
            point2.visible=false;
            point3.visible=false;
            point4.visible=false;
            point5.visible=false;
            point6.visible=false;
            point7.visible=false;
            point8.visible=false;
            point9.visible=false;
            point10.visible=false;
            point11.visible=false;
            point12.visible=false;
            point13.visible=false;
             point20.visible=true;

             if (flag5==0) {
                point20.position.set(point2.position.x,point2.position.y,0.01);
            }

            slopecal();
            flag5=1;

            if (case1 && turn==1) {
                turn=2;
            }
            else if (case2 && turn==2) {
                turn=3;
            }
            else if (case3 && turn==3) {
                turn=4;
            }
            else if (case4 && turn==4) {
                turn=5;
            }
            else if (case5 && turn==5) {
                turn=6;
            }


            if (turn==1) {
                console.log('turn 1 entered');
                console.log('slope1 '+slope1);
                if (countarrow==1) {

                PIEremoveElement(arrowHelper1);
                PIErender();

                var from1 = new THREE.Vector3( point2.position.x,point2.position.y,0.001 );
                 var to1 = new THREE.Vector3( point4.position.x,point4.position.y,0.001);
                    var direction1 = to1.clone().sub(from1);
                    var length1 = direction1.length();
                    var length=length1/3;
                    arrowHelper1 = new THREE.ArrowHelper(direction1.normalize(), from1, length, 0x000000,0.3,0.3 );
                     arrowHelper1.visible=true;
                    PIEaddElement(arrowHelper1);
                    PIErender();

                    t1.visible=true;

                    PIEremoveElement(t2);
                    PIErender();


                    materialSide = new THREE.MeshBasicMaterial( { color: 0x000000} );
                    materialArray = [materialSide ];
                     loader = new THREE.FontLoader();
                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                            
                            var textGeom = new THREE.TextGeometry(turn, 
                            {
                                size: 0.45, height: 0,
                                font: font, weight: "normal", style: "normal"
                            });  
                        var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                            t2 = new THREE.Mesh(textGeom, textMaterial );
                            t2.position.set(2.5,6,0);
                            t2.visible=true;
                            PIEaddElement(t2);
                            PIErender();
                        });

                }
                countarrow=2;
                   if (slope1==0) {
                    point20.position.set(point20.position.x+slope1directionx*Math.cos(slope1)*boundaryT,point20.position.y,0.01);
                   }
                   else if (slope1==-1.5707963267948966 || slope1==1.5707963267948966) {
                    point20.position.set(point20.position.x,point20.position.y+Math.sin(slope1)*boundaryT,0.01);
                   }
                    else{
                point20.position.set(point20.position.x+slope1directionx*Math.cos(slope1)*boundaryT,point20.position.y+slope1directiony*Math.sin(slope1)*boundaryT,0.01);
                PIErender();
                    }
            }
            else if (turn==2) {
                console.log('turn 2 entered');
                console.log('slope2 '+slope2);
                if (countarrow==2) {

                PIEremoveElement(arrowHelper2);
                PIErender();

                var from2 = new THREE.Vector3( point4.position.x,point4.position.y,0.001 );
                 var to2 = new THREE.Vector3( point5.position.x,point5.position.y,0.001);
                    var direction2 = to2.clone().sub(from2);
                    var length2 = direction2.length();
                    var length=length2/3;
                    arrowHelper2 = new THREE.ArrowHelper(direction2.normalize(), from2, length, 0x000000,0.3,0.3 );
                     arrowHelper2.visible=true;
                    PIEaddElement(arrowHelper2);
                    PIErender();

                    t1.visible=true;

                    PIEremoveElement(t2);
                    PIErender();


                    materialSide = new THREE.MeshBasicMaterial( { color: 0x000000} );
                    materialArray = [materialSide ];
                     loader = new THREE.FontLoader();
                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                            
                            var textGeom = new THREE.TextGeometry(turn, 
                            {
                                size: 0.45, height: 0,
                                font: font, weight: "normal", style: "normal"
                            });  
                        var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                            t2 = new THREE.Mesh(textGeom, textMaterial );
                            t2.position.set(2.5,6,0);
                            t2.visible=true;
                            PIEaddElement(t2);
                            PIErender();
                        });


                }
                countarrow=3;
                    if (slope2==0) {
                        console.log('slope2==0  loop entered');
                    point20.position.set(point20.position.x+slope2directionx*Math.cos(slope2)*boundaryT,point20.position.y,0.01);
                    console.log('slope2==0  loop exited');
                   }
                   else if (slope2==-1.5707963267948966 || slope2==1.5707963267948966) {
                    point20.position.set(point20.position.x,point20.position.y+Math.sin(slope2)*boundaryT,0.01);
                   }
                    else{
                    point20.position.set(point20.position.x+slope2directionx*Math.cos(slope2)*boundaryT,point20.position.y+slope2directiony*Math.sin(slope2)*boundaryT,0.01);
                    PIErender();
                }

            }
            else if (turn==3) {
                console.log('turn 3 entered');
                console.log('slope3 '+slope3);
                if (countarrow==3) {

                PIEremoveElement(arrowHelper3);
                PIErender();

                var from3 = new THREE.Vector3( point5.position.x,point5.position.y,0.001 );
                 var to3 = new THREE.Vector3( point7.position.x,point7.position.y,0.001);
                    var direction3 = to3.clone().sub(from3);
                    var length3 = direction3.length();
                    var length=length3/3;
                    arrowHelper3 = new THREE.ArrowHelper(direction3.normalize(), from3, length, 0x000000,0.3,0.3 );
                     arrowHelper3.visible=true;
                    PIEaddElement(arrowHelper3);
                    PIErender();

                    t1.visible=true;

                    PIEremoveElement(t2);
                    PIErender();


                    materialSide = new THREE.MeshBasicMaterial( { color: 0x000000} );
                    materialArray = [materialSide ];
                     loader = new THREE.FontLoader();
                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                            
                            var textGeom = new THREE.TextGeometry(turn, 
                            {
                                size: 0.45, height: 0,
                                font: font, weight: "normal", style: "normal"
                            });  
                        var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                            t2 = new THREE.Mesh(textGeom, textMaterial );
                            t2.position.set(2.5,6,0);
                            t2.visible=true;
                            PIEaddElement(t2);
                            PIErender();
                        });


                }
                countarrow=4;
                    if (slope3==0) {
                    point20.position.set(point20.position.x+slope3directionx*Math.cos(slope3)*boundaryT,point20.position.y,0.01);
                   }
                   else if (slope3==-1.5707963267948966 || slope3==1.5707963267948966) {
                    point20.position.set(point20.position.x,point20.position.y+Math.sin(slope3)*boundaryT,0.01);
                   }
                    else{
                    point20.position.set(point20.position.x+slope3directionx*Math.cos(slope3)*boundaryT,point20.position.y+slope3directiony*Math.sin(slope3)*boundaryT,0.01);
                    PIErender();
                }
            }
            else if (turn==4) {
                 console.log('turn 4 entered');
                 console.log('slope4 '+slope4);
                 if (countarrow==4) {

                PIEremoveElement(arrowHelper4);
                PIErender();

                var from4 = new THREE.Vector3( point7.position.x,point7.position.y,0.001 );
                 var to4 = new THREE.Vector3( point8.position.x,point8.position.y,0.001);
                    var direction4 = to4.clone().sub(from4);
                    var length4 = direction4.length();
                    var length=length4/3;
                    arrowHelper4 = new THREE.ArrowHelper(direction4.normalize(), from4, length, 0x000000,0.3,0.3 );
                     arrowHelper4.visible=true;
                    PIEaddElement(arrowHelper4);
                    PIErender();

                    t1.visible=true;

                    PIEremoveElement(t2);
                    PIErender();


                    materialSide = new THREE.MeshBasicMaterial( { color: 0x000000} );
                    materialArray = [materialSide ];
                     loader = new THREE.FontLoader();
                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                            
                            var textGeom = new THREE.TextGeometry(turn, 
                            {
                                size: 0.45, height: 0,
                                font: font, weight: "normal", style: "normal"
                            });  
                        var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                            t2 = new THREE.Mesh(textGeom, textMaterial );
                            t2.position.set(2.5,6,0);
                            t2.visible=true;
                            PIEaddElement(t2);
                            PIErender();
                        });

                }
                countarrow=5;
                    if (slope4==0) {
                    point20.position.set(point20.position.x+slope4directionx*Math.cos(slope4)*boundaryT,point20.position.y,0.01);
                   }
                   else if (slope4==-1.5707963267948966 || slope4==1.5707963267948966) {
                    point20.position.set(point20.position.x,point20.position.y+Math.sin(slope4)*boundaryT,0.01);
                   }
                    else{
                    point20.position.set(point20.position.x+slope4directionx*Math.cos(slope4)*boundaryT,point20.position.y+slope4directiony*Math.sin(slope4)*boundaryT,0.01);
                    PIErender();
                }
            }
            else if (turn==5) {
                    console.log('turn 5 entered');
                 console.log('slope5 '+slope5);
                 if (countarrow==5) {

                PIEremoveElement(arrowHelper5);
                PIErender();

                var from5 = new THREE.Vector3( point8.position.x,point8.position.y,0.001 );
                 var to5 = new THREE.Vector3( point2.position.x,point2.position.y,0.001);
                    var direction5 = to5.clone().sub(from5);
                    var length5 = direction5.length();
                    var length=length5/3;
                    arrowHelper5 = new THREE.ArrowHelper(direction5.normalize(), from5, length, 0x000000,0.3,0.3 );
                     arrowHelper5.visible=true;
                    PIEaddElement(arrowHelper5);
                    PIErender();

                    t1.visible=true;

                    PIEremoveElement(t2);
                    PIErender();


                    materialSide = new THREE.MeshBasicMaterial( { color: 0x000000} );
                    materialArray = [materialSide ];
                     loader = new THREE.FontLoader();
                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                            
                            var textGeom = new THREE.TextGeometry(turn, 
                            {
                                size: 0.45, height: 0,
                                font: font, weight: "normal", style: "normal"
                            });  
                        var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                            t2 = new THREE.Mesh(textGeom, textMaterial );
                            t2.position.set(2.5,6,0);
                            t2.visible=true;
                            PIEaddElement(t2);
                            PIErender();
                        });

                }
                countarrow=6;
                    if (slope5==0) {
                    point20.position.set(point20.position.x+slope5directionx*Math.cos(slope5)*boundaryT,point20.position.y,0.01);
                   }
                   else if (slope5==-1.5707963267948966 || slope5==1.5707963267948966) {
                    point20.position.set(point20.position.x,point20.position.y+Math.sin(slope5)*boundaryT,0.01);
                   }
                    else{
                    point20.position.set(point20.position.x+slope5directionx*Math.cos(slope5)*boundaryT,point20.position.y+slope5directiony*Math.sin(slope5)*boundaryT,0.01);
                    PIErender();
                }
            }
            else if (turn==6) {
                turn=1;
                flag5=0;
                countarrow=1;
                PIEstopAnimation();
                point2.position.set(p2x,p2y,0.01);
                point4.position.set(p4x,p4y,0.01);
                point5.position.set(p5x,p5y,0.01);
                point7.position.set(p7x,p7y,0.01);
                point8.position.set(p8x,p8y,0.01);
                point2.visible=true;
                point4.visible=true;
                point5.visible=true;
                point7.visible=true;
                point8.visible=true;
                point20.visible=false;
                PIErender();
            }



            
        }
        else if (verticesno==6) {



            point1.visible=false;
            point2.visible=false;
            point3.visible=false;
            point4.visible=false;
            point5.visible=false;
            point6.visible=false;
            point7.visible=false;
            point8.visible=false;
            point9.visible=false;
            point10.visible=false;
            point11.visible=false;
            point12.visible=false;
            point13.visible=false;
             point20.visible=true;

             if (flag6==0) {
                point20.position.set(point2.position.x,point2.position.y,0.01);
            }

            slopecal();
            flag6=1;

            if (case1 && turn==1) {
                turn=2;
            }
            else if (case2 && turn==2) {
                turn=3;
            }
            else if (case3 && turn==3) {
                turn=4;
            }
            else if (case4 && turn==4) {
                turn=5;
            }
            else if (case5 && turn==5) {
                turn=6;
            }
            else if (case6 && turn==6) {
                turn=7;
            }


            if (turn==1) {
                console.log('turn 1 entered');
                console.log('slope1 '+slope1);
                if (countarrow==1) {

                PIEremoveElement(arrowHelper1);
                PIErender();

                var from1 = new THREE.Vector3( point2.position.x,point2.position.y,0.001 );
                 var to1 = new THREE.Vector3( point4.position.x,point4.position.y,0.001);
                    var direction1 = to1.clone().sub(from1);
                    var length1 = direction1.length();
                    var length=length1/3;
                    arrowHelper1 = new THREE.ArrowHelper(direction1.normalize(), from1, length, 0x000000,0.3,0.3 );
                     arrowHelper1.visible=true;
                    PIEaddElement(arrowHelper1);
                    PIErender();

                    t1.visible=true;

                    PIEremoveElement(t2);
                    PIErender();


                    materialSide = new THREE.MeshBasicMaterial( { color: 0x000000} );
                    materialArray = [materialSide ];
                     loader = new THREE.FontLoader();
                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                            
                            var textGeom = new THREE.TextGeometry(turn, 
                            {
                                size: 0.45, height: 0,
                                font: font, weight: "normal", style: "normal"
                            });  
                        var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                            t2 = new THREE.Mesh(textGeom, textMaterial );
                            t2.position.set(2.5,6,0);
                            t2.visible=true;
                            PIEaddElement(t2);
                            PIErender();
                        });

                }
                countarrow=2;
                   if (slope1==0) {
                    point20.position.set(point20.position.x+slope1directionx*Math.cos(slope1)*boundaryT,point20.position.y,0.01);
                   }
                   else if (slope1==-1.5707963267948966 || slope1==1.5707963267948966) {
                    point20.position.set(point20.position.x,point20.position.y+Math.sin(slope1)*boundaryT,0.01);
                   }
                    else{
                point20.position.set(point20.position.x+slope1directionx*Math.cos(slope1)*boundaryT,point20.position.y+slope1directiony*Math.sin(slope1)*boundaryT,0.01);
                PIErender();
                    }
            }
            else if (turn==2) {
                console.log('turn 2 entered');
                console.log('slope2 '+slope2);
                if (countarrow==2) {

                PIEremoveElement(arrowHelper2);
                PIErender();

                var from2 = new THREE.Vector3( point4.position.x,point4.position.y,0.001 );
                 var to2 = new THREE.Vector3( point5.position.x,point5.position.y,0.001);
                    var direction2 = to2.clone().sub(from2);
                    var length2 = direction2.length();
                    var length=length2/3;
                    arrowHelper2 = new THREE.ArrowHelper(direction2.normalize(), from2, length, 0x000000,0.3,0.3 );
                     arrowHelper2.visible=true;
                    PIEaddElement(arrowHelper2);
                    PIErender();

                    t1.visible=true;

                    PIEremoveElement(t2);
                    PIErender();


                    materialSide = new THREE.MeshBasicMaterial( { color: 0x000000} );
                    materialArray = [materialSide ];
                     loader = new THREE.FontLoader();
                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                            
                            var textGeom = new THREE.TextGeometry(turn, 
                            {
                                size: 0.45, height: 0,
                                font: font, weight: "normal", style: "normal"
                            });  
                        var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                            t2 = new THREE.Mesh(textGeom, textMaterial );
                            t2.position.set(2.5,6,0);
                            t2.visible=true;
                            PIEaddElement(t2);
                            PIErender();
                        });

                }
                countarrow=3;
                    if (slope2==0) {
                        console.log('slope2==0  loop entered');
                    point20.position.set(point20.position.x+slope2directionx*Math.cos(slope2)*boundaryT,point20.position.y,0.01);
                    console.log('slope2==0  loop exited');
                   }
                   else if (slope2==-1.5707963267948966 || slope2==1.5707963267948966) {
                    point20.position.set(point20.position.x,point20.position.y+Math.sin(slope2)*boundaryT,0.01);
                   }
                    else{
                    point20.position.set(point20.position.x+slope2directionx*Math.cos(slope2)*boundaryT,point20.position.y+slope2directiony*Math.sin(slope2)*boundaryT,0.01);
                    PIErender();
                }

            }
            else if (turn==3) {
                console.log('turn 3 entered');
                console.log('slope3 '+slope3);
                if (countarrow==3) {

                PIEremoveElement(arrowHelper3);
                PIErender();

                var from3 = new THREE.Vector3( point5.position.x,point5.position.y,0.001 );
                 var to3 = new THREE.Vector3( point9.position.x,point9.position.y,0.001);
                    var direction3 = to3.clone().sub(from3);
                    var length3 = direction3.length();
                    var length=length3/3;
                    arrowHelper3 = new THREE.ArrowHelper(direction3.normalize(), from3, length, 0x000000,0.3,0.3 );
                     arrowHelper3.visible=true;
                    PIEaddElement(arrowHelper3);
                    PIErender();

                    t1.visible=true;

                    PIEremoveElement(t2);
                    PIErender();


                    materialSide = new THREE.MeshBasicMaterial( { color: 0x000000} );
                    materialArray = [materialSide ];
                     loader = new THREE.FontLoader();
                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                            
                            var textGeom = new THREE.TextGeometry(turn, 
                            {
                                size: 0.45, height: 0,
                                font: font, weight: "normal", style: "normal"
                            });  
                        var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                            t2 = new THREE.Mesh(textGeom, textMaterial );
                            t2.position.set(2.5,6,0);
                            t2.visible=true;
                            PIEaddElement(t2);
                            PIErender();
                        });

                }
                countarrow=4;
                    if (slope3==0) {
                    point20.position.set(point20.position.x+slope3directionx*Math.cos(slope3)*boundaryT,point20.position.y,0.01);
                   }
                   else if (slope3==-1.5707963267948966 || slope3==1.5707963267948966) {
                    point20.position.set(point20.position.x,point20.position.y+Math.sin(slope3)*boundaryT,0.01);
                   }
                    else{
                    point20.position.set(point20.position.x+slope3directionx*Math.cos(slope3)*boundaryT,point20.position.y+slope3directiony*Math.sin(slope3)*boundaryT,0.01);
                    PIErender();
                }
            }
            else if (turn==4) {
                 console.log('turn 4 entered');
                 console.log('slope4 '+slope4);
                 if (countarrow==4) {

                PIEremoveElement(arrowHelper4);
                PIErender();

                var from4 = new THREE.Vector3( point9.position.x,point9.position.y,0.001 );
                 var to4 = new THREE.Vector3( point7.position.x,point7.position.y,0.001);
                    var direction4 = to4.clone().sub(from4);
                    var length4 = direction4.length();
                    var length=length4/3;
                    arrowHelper4 = new THREE.ArrowHelper(direction4.normalize(), from4, length, 0x000000,0.3,0.3 );
                     arrowHelper4.visible=true;
                    PIEaddElement(arrowHelper4);
                    PIErender();

                    t1.visible=true;

                    PIEremoveElement(t2);
                    PIErender();


                    materialSide = new THREE.MeshBasicMaterial( { color: 0x000000} );
                    materialArray = [materialSide ];
                     loader = new THREE.FontLoader();
                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                            
                            var textGeom = new THREE.TextGeometry(turn, 
                            {
                                size: 0.45, height: 0,
                                font: font, weight: "normal", style: "normal"
                            });  
                        var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                            t2 = new THREE.Mesh(textGeom, textMaterial );
                            t2.position.set(2.5,6,0);
                            t2.visible=true;
                            PIEaddElement(t2);
                            PIErender();
                        });

                }
                countarrow=5;
                    if (slope4==0) {
                    point20.position.set(point20.position.x+slope4directionx*Math.cos(slope4)*boundaryT,point20.position.y,0.01);
                   }
                   else if (slope4==-1.5707963267948966 || slope4==1.5707963267948966) {
                    point20.position.set(point20.position.x,point20.position.y+Math.sin(slope4)*boundaryT,0.01);
                   }
                    else{
                    point20.position.set(point20.position.x+slope4directionx*Math.cos(slope4)*boundaryT,point20.position.y+slope4directiony*Math.sin(slope4)*boundaryT,0.01);
                    PIErender();
                }
            }
            else if (turn==5) {
                    console.log('turn 5 entered');
                 console.log('slope5 '+slope5);
                 if (countarrow==5) {

                PIEremoveElement(arrowHelper5);
                PIErender();

                var from5 = new THREE.Vector3( point7.position.x,point7.position.y,0.001 );
                 var to5 = new THREE.Vector3( point8.position.x,point8.position.y,0.001);
                    var direction5 = to5.clone().sub(from5);
                    var length5 = direction5.length();
                    var length=length5/3;
                    arrowHelper5 = new THREE.ArrowHelper(direction5.normalize(), from5, length, 0x000000,0.3,0.3 );
                     arrowHelper5.visible=true;
                    PIEaddElement(arrowHelper5);
                    PIErender();

                    t1.visible=true;

                    PIEremoveElement(t2);
                    PIErender();


                    materialSide = new THREE.MeshBasicMaterial( { color: 0x000000} );
                    materialArray = [materialSide ];
                     loader = new THREE.FontLoader();
                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                            
                            var textGeom = new THREE.TextGeometry(turn, 
                            {
                                size: 0.45, height: 0,
                                font: font, weight: "normal", style: "normal"
                            });  
                        var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                            t2 = new THREE.Mesh(textGeom, textMaterial );
                            t2.position.set(2.5,6,0);
                            t2.visible=true;
                            PIEaddElement(t2);
                            PIErender();
                        });

                }
                countarrow=6;
                    if (slope5==0) {
                    point20.position.set(point20.position.x+slope5directionx*Math.cos(slope5)*boundaryT,point20.position.y,0.01);
                   }
                   else if (slope5==-1.5707963267948966 || slope5==1.5707963267948966) {
                    point20.position.set(point20.position.x,point20.position.y+Math.sin(slope5)*boundaryT,0.01);
                   }
                    else{
                    point20.position.set(point20.position.x+slope5directionx*Math.cos(slope5)*boundaryT,point20.position.y+slope5directiony*Math.sin(slope5)*boundaryT,0.01);
                    PIErender();
                }
            }
            else if (turn==6) {
                console.log('turn 6 entered');
                 console.log('slope6 '+slope6);
                 if (countarrow==6) {

                PIEremoveElement(arrowHelper6);
                PIErender();

                var from6 = new THREE.Vector3( point8.position.x,point8.position.y,0.001 );
                 var to6 = new THREE.Vector3( point2.position.x,point2.position.y,0.001);
                    var direction6 = to6.clone().sub(from6);
                    var length6 = direction6.length();
                    var length=length6/3;
                    arrowHelper6 = new THREE.ArrowHelper(direction6.normalize(), from6, length, 0x000000,0.3,0.3 );
                     arrowHelper6.visible=true;
                    PIEaddElement(arrowHelper6);
                    PIErender();

                    t1.visible=true;

                    PIEremoveElement(t2);
                    PIErender();


                    materialSide = new THREE.MeshBasicMaterial( { color: 0x000000} );
                    materialArray = [materialSide ];
                     loader = new THREE.FontLoader();
                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                            
                            var textGeom = new THREE.TextGeometry(turn, 
                            {
                                size: 0.45, height: 0,
                                font: font, weight: "normal", style: "normal"
                            });  
                        var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                            t2 = new THREE.Mesh(textGeom, textMaterial );
                            t2.position.set(2.5,6,0);
                            t2.visible=true;
                            PIEaddElement(t2);
                            PIErender();
                        });

                }
                countarrow=7;
                    if (slope6==0) {
                    point20.position.set(point20.position.x+slope6directionx*Math.cos(slope6)*boundaryT,point20.position.y,0.01);
                   }
                   else if (slope6==-1.5707963267948966 || slope6==1.5707963267948966) {
                    point20.position.set(point20.position.x,point20.position.y+Math.sin(slope6)*boundaryT,0.01);
                   }
                    else{
                    point20.position.set(point20.position.x+slope6directionx*Math.cos(slope6)*boundaryT,point20.position.y+slope6directiony*Math.sin(slope6)*boundaryT,0.01);
                    PIErender();
                }
                
            }
            else if (turn==7) {
                turn=1;
                flag6=0;
                countarrow=1;
                PIEstopAnimation();
                point2.position.set(p2x,p2y,0.01);
                point4.position.set(p4x,p4y,0.01);
                point5.position.set(p5x,p5y,0.01);
                point9.position.set(p9x,p9y,0.01);
                point7.position.set(p7x,p7y,0.01);
                point8.position.set(p8x,p8y,0.01);
                point2.visible=true;
                point4.visible=true;
                point5.visible=true;
                point9.visible=true;
                point7.visible=true;
                point8.visible=true;
                point20.visible=false;
                PIErender();
            }

            
        }
        else if (verticesno==7) {

            point1.visible=false;
            point2.visible=false;
            point3.visible=false;
            point4.visible=false;
            point5.visible=false;
            point6.visible=false;
            point7.visible=false;
            point8.visible=false;
            point9.visible=false;
            point10.visible=false;
            point11.visible=false;
            point12.visible=false;
            point13.visible=false;
             point20.visible=true;

             if (flag7==0) {
                point20.position.set(point2.position.x,point2.position.y,0.01);
            }

            slopecal();
            flag7=1;

            if (case1 && turn==1) {
                turn=2;
            }
            else if (case2 && turn==2) {
                turn=3;
            }
            else if (case3 && turn==3) {
                turn=4;
            }
            else if (case4 && turn==4) {
                turn=5;
            }
            else if (case5 && turn==5) {
                turn=6;
            }
            else if (case6 && turn==6) {
                turn=7;
            }
            else if (case7 && turn==7) {
                turn=8;
            }


            if (turn==1) {
                console.log('turn 1 entered');
                console.log('slope1 '+slope1);
                if (countarrow==1) {

                PIEremoveElement(arrowHelper1);
                PIErender();

                var from1 = new THREE.Vector3( point2.position.x,point2.position.y,0.001 );
                 var to1 = new THREE.Vector3( point4.position.x,point4.position.y,0.001);
                    var direction1 = to1.clone().sub(from1);
                    var length1 = direction1.length();
                    var length=length1/3;
                    arrowHelper1 = new THREE.ArrowHelper(direction1.normalize(), from1, length, 0x000000,0.3,0.3 );
                     arrowHelper1.visible=true;
                    PIEaddElement(arrowHelper1);
                    PIErender();

                    t1.visible=true;

                    PIEremoveElement(t2);
                    PIErender();


                    materialSide = new THREE.MeshBasicMaterial( { color: 0x000000} );
                    materialArray = [materialSide ];
                     loader = new THREE.FontLoader();
                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                            
                            var textGeom = new THREE.TextGeometry(turn, 
                            {
                                size: 0.45, height: 0,
                                font: font, weight: "normal", style: "normal"
                            });  
                        var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                            t2 = new THREE.Mesh(textGeom, textMaterial );
                            t2.position.set(2.5,6,0);
                            t2.visible=true;
                            PIEaddElement(t2);
                            PIErender();
                        });

                }
                countarrow=2;
                   if (slope1==0) {
                    point20.position.set(point20.position.x+slope1directionx*Math.cos(slope1)*boundaryT,point20.position.y,0.01);
                   }
                   else if (slope1==-1.5707963267948966 || slope1==1.5707963267948966) {
                    point20.position.set(point20.position.x,point20.position.y+Math.sin(slope1)*boundaryT,0.01);
                   }
                    else{
                point20.position.set(point20.position.x+slope1directionx*Math.cos(slope1)*boundaryT,point20.position.y+slope1directiony*Math.sin(slope1)*boundaryT,0.01);
                PIErender();
                    }
            }
            else if (turn==2) {
                console.log('turn 2 entered');
                console.log('slope2 '+slope2);
                if (countarrow==2) {

                PIEremoveElement(arrowHelper2);
                PIErender();

                var from2 = new THREE.Vector3( point4.position.x,point4.position.y,0.001 );
                 var to2 = new THREE.Vector3( point5.position.x,point5.position.y,0.001);
                    var direction2 = to2.clone().sub(from2);
                    var length2 = direction2.length();
                    var length=length2/3;
                    arrowHelper2 = new THREE.ArrowHelper(direction2.normalize(), from2, length, 0x000000,0.3,0.3 );
                     arrowHelper2.visible=true;
                    PIEaddElement(arrowHelper2);
                    PIErender();

                    t1.visible=true;

                    PIEremoveElement(t2);
                    PIErender();


                    materialSide = new THREE.MeshBasicMaterial( { color: 0x000000} );
                    materialArray = [materialSide ];
                     loader = new THREE.FontLoader();
                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                            
                            var textGeom = new THREE.TextGeometry(turn, 
                            {
                                size: 0.45, height: 0,
                                font: font, weight: "normal", style: "normal"
                            });  
                        var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                            t2 = new THREE.Mesh(textGeom, textMaterial );
                            t2.position.set(2.5,6,0);
                            t2.visible=true;
                            PIEaddElement(t2);
                            PIErender();
                        });

                }
                countarrow=3;
                    if (slope2==0) {
                        console.log('slope2==0  loop entered');
                    point20.position.set(point20.position.x+slope2directionx*Math.cos(slope2)*boundaryT,point20.position.y,0.01);
                    console.log('slope2==0  loop exited');
                   }
                   else if (slope2==-1.5707963267948966 || slope2==1.5707963267948966) {
                    point20.position.set(point20.position.x,point20.position.y+Math.sin(slope2)*boundaryT,0.01);
                   }
                    else{
                    point20.position.set(point20.position.x+slope2directionx*Math.cos(slope2)*boundaryT,point20.position.y+slope2directiony*Math.sin(slope2)*boundaryT,0.01);
                    PIErender();
                }

            }
            else if (turn==3) {
                console.log('turn 3 entered');
                console.log('slope3 '+slope3);
                if (countarrow==3) {

                PIEremoveElement(arrowHelper3);
                PIErender();

                var from3 = new THREE.Vector3( point5.position.x,point5.position.y,0.001 );
                 var to3 = new THREE.Vector3( point10.position.x,point10.position.y,0.001);
                    var direction3 = to3.clone().sub(from3);
                    var length3 = direction3.length();
                    var length=length3/3;
                    arrowHelper3 = new THREE.ArrowHelper(direction3.normalize(), from3, length, 0x000000,0.3,0.3 );
                     arrowHelper3.visible=true;
                    PIEaddElement(arrowHelper3);
                    PIErender();

                    t1.visible=true;

                    PIEremoveElement(t2);
                    PIErender();


                    materialSide = new THREE.MeshBasicMaterial( { color: 0x000000} );
                    materialArray = [materialSide ];
                     loader = new THREE.FontLoader();
                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                            
                            var textGeom = new THREE.TextGeometry(turn, 
                            {
                                size: 0.45, height: 0,
                                font: font, weight: "normal", style: "normal"
                            });  
                        var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                            t2 = new THREE.Mesh(textGeom, textMaterial );
                            t2.position.set(2.5,6,0);
                            t2.visible=true;
                            PIEaddElement(t2);
                            PIErender();
                        });


                }
                countarrow=4;
                    if (slope3==0) {
                    point20.position.set(point20.position.x+slope3directionx*Math.cos(slope3)*boundaryT,point20.position.y,0.01);
                   }
                   else if (slope3==-1.5707963267948966 || slope3==1.5707963267948966) {
                    point20.position.set(point20.position.x,point20.position.y+Math.sin(slope3)*boundaryT,0.01);
                   }
                    else{
                    point20.position.set(point20.position.x+slope3directionx*Math.cos(slope3)*boundaryT,point20.position.y+slope3directiony*Math.sin(slope3)*boundaryT,0.01);
                    PIErender();
                }
            }
            else if (turn==4) {
                 console.log('turn 4 entered');
                 console.log('slope4 '+slope4);
                 if (countarrow==4) {

                PIEremoveElement(arrowHelper4);
                PIErender();

                var from4 = new THREE.Vector3( point10.position.x,point10.position.y,0.001 );
                 var to4 = new THREE.Vector3( point11.position.x,point11.position.y,0.001);
                    var direction4 = to4.clone().sub(from4);
                    var length4 = direction4.length();
                    var length=length4/3;
                    arrowHelper4 = new THREE.ArrowHelper(direction4.normalize(), from4, length, 0x000000,0.3,0.3 );
                     arrowHelper4.visible=true;
                    PIEaddElement(arrowHelper4);
                    PIErender();
                    t1.visible=true;

                    PIEremoveElement(t2);
                    PIErender();


                    materialSide = new THREE.MeshBasicMaterial( { color: 0x000000} );
                    materialArray = [materialSide ];
                     loader = new THREE.FontLoader();
                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                            
                            var textGeom = new THREE.TextGeometry(turn, 
                            {
                                size: 0.45, height: 0,
                                font: font, weight: "normal", style: "normal"
                            });  
                        var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                            t2 = new THREE.Mesh(textGeom, textMaterial );
                            t2.position.set(2.5,6,0);
                            t2.visible=true;
                            PIEaddElement(t2);
                            PIErender();
                        });

                }
                countarrow=5;
                    if (slope4==0) {
                    point20.position.set(point20.position.x+slope4directionx*Math.cos(slope4)*boundaryT,point20.position.y,0.01);
                   }
                   else if (slope4==-1.5707963267948966 || slope4==1.5707963267948966) {
                    point20.position.set(point20.position.x,point20.position.y+Math.sin(slope4)*boundaryT,0.01);
                   }
                    else{
                    point20.position.set(point20.position.x+slope4directionx*Math.cos(slope4)*boundaryT,point20.position.y+slope4directiony*Math.sin(slope4)*boundaryT,0.01);
                    PIErender();
                }
            }
            else if (turn==5) {
                    console.log('turn 5 entered');
                 console.log('slope5 '+slope5);
                 if (countarrow==5) {

                PIEremoveElement(arrowHelper5);
                PIErender();

                var from5 = new THREE.Vector3( point11.position.x,point11.position.y,0.001 );
                 var to5 = new THREE.Vector3( point7.position.x,point7.position.y,0.001);
                    var direction5 = to5.clone().sub(from5);
                    var length5 = direction5.length();
                    var length=length5/3;
                    arrowHelper5 = new THREE.ArrowHelper(direction5.normalize(), from5, length, 0x000000,0.3,0.3 );
                     arrowHelper5.visible=true;
                    PIEaddElement(arrowHelper5);
                    PIErender();
                    t1.visible=true;

                    PIEremoveElement(t2);
                    PIErender();


                    materialSide = new THREE.MeshBasicMaterial( { color: 0x000000} );
                    materialArray = [materialSide ];
                     loader = new THREE.FontLoader();
                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                            
                            var textGeom = new THREE.TextGeometry(turn, 
                            {
                                size: 0.45, height: 0,
                                font: font, weight: "normal", style: "normal"
                            });  
                        var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                            t2 = new THREE.Mesh(textGeom, textMaterial );
                            t2.position.set(2.5,6,0);
                            t2.visible=true;
                            PIEaddElement(t2);
                            PIErender();
                        });

                }
                countarrow=6;
                    if (slope5==0) {
                    point20.position.set(point20.position.x+slope5directionx*Math.cos(slope5)*boundaryT,point20.position.y,0.01);
                   }
                   else if (slope5==-1.5707963267948966 || slope5==1.5707963267948966) {
                    point20.position.set(point20.position.x,point20.position.y+Math.sin(slope5)*boundaryT,0.01);
                   }
                    else{
                    point20.position.set(point20.position.x+slope5directionx*Math.cos(slope5)*boundaryT,point20.position.y+slope5directiony*Math.sin(slope5)*boundaryT,0.01);
                    PIErender();
                }
            }
            else if (turn==6) {
                console.log('turn 6 entered');
                 console.log('slope6 '+slope6);
                 if (countarrow==6) {

                PIEremoveElement(arrowHelper6);
                PIErender();

                var from6 = new THREE.Vector3( point7.position.x,point7.position.y,0.001 );
                 var to6 = new THREE.Vector3( point8.position.x,point8.position.y,0.001);
                    var direction6 = to6.clone().sub(from6);
                    var length6 = direction6.length();
                    var length=length6/3;
                    arrowHelper6 = new THREE.ArrowHelper(direction6.normalize(), from6, length, 0x000000,0.3,0.3 );
                     arrowHelper6.visible=true;
                    PIEaddElement(arrowHelper6);
                    PIErender();

                    t1.visible=true;

                    PIEremoveElement(t2);
                    PIErender();


                    materialSide = new THREE.MeshBasicMaterial( { color: 0x000000} );
                    materialArray = [materialSide ];
                     loader = new THREE.FontLoader();
                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                            
                            var textGeom = new THREE.TextGeometry(turn, 
                            {
                                size: 0.45, height: 0,
                                font: font, weight: "normal", style: "normal"
                            });  
                        var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                            t2 = new THREE.Mesh(textGeom, textMaterial );
                            t2.position.set(2.5,6,0);
                            t2.visible=true;
                            PIEaddElement(t2);
                            PIErender();
                        });

                }
                countarrow=7;
                    if (slope6==0) {
                    point20.position.set(point20.position.x+slope6directionx*Math.cos(slope6)*boundaryT,point20.position.y,0.01);
                   }
                   else if (slope6==-1.5707963267948966 || slope6==1.5707963267948966) {
                    point20.position.set(point20.position.x,point20.position.y+Math.sin(slope6)*boundaryT,0.01);
                   }
                    else{
                    point20.position.set(point20.position.x+slope6directionx*Math.cos(slope6)*boundaryT,point20.position.y+slope6directiony*Math.sin(slope6)*boundaryT,0.01);
                    PIErender();
                }
                
            }
            else if (turn==7) {
               console.log('turn 7 entered');
                 console.log('slope7 '+slope7);
                 if (countarrow==7) {

                PIEremoveElement(arrowHelper7);
                PIErender();

                var from7 = new THREE.Vector3( point8.position.x,point8.position.y,0.001 );
                 var to7 = new THREE.Vector3( point2.position.x,point2.position.y,0.001);
                    var direction7 = to7.clone().sub(from7);
                    var length7 = direction7.length();
                    var length=length7/3;
                    arrowHelper7 = new THREE.ArrowHelper(direction7.normalize(), from7, length, 0x000000,0.3,0.3 );
                     arrowHelper7.visible=true;
                    PIEaddElement(arrowHelper7);
                    PIErender();

                    t1.visible=true;

                    PIEremoveElement(t2);
                    PIErender();


                    materialSide = new THREE.MeshBasicMaterial( { color: 0x000000} );
                    materialArray = [materialSide ];
                     loader = new THREE.FontLoader();
                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                            
                            var textGeom = new THREE.TextGeometry(turn, 
                            {
                                size: 0.45, height: 0,
                                font: font, weight: "normal", style: "normal"
                            });  
                        var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                            t2 = new THREE.Mesh(textGeom, textMaterial );
                            t2.position.set(2.5,6,0);
                            t2.visible=true;
                            PIEaddElement(t2);
                            PIErender();
                        });

                }
                countarrow=8;
                    if (slope7==0) {
                    point20.position.set(point20.position.x+slope7directionx*Math.cos(slope7)*boundaryT,point20.position.y,0.01);
                   }
                   else if (slope7==-1.5707963267948966 || slope7==1.5707963267948966) {
                    point20.position.set(point20.position.x,point20.position.y+Math.sin(slope7)*boundaryT,0.01);
                   }
                    else{
                    point20.position.set(point20.position.x+slope7directionx*Math.cos(slope7)*boundaryT,point20.position.y+slope7directiony*Math.sin(slope7)*boundaryT,0.01);
                    PIErender();
                }
            }
            else if (turn==8) {
                 turn=1;
                flag7=0;
                countarrow=1;
                PIEstopAnimation();
                point2.position.set(p2x,p2y,0.01);
                point4.position.set(p4x,p4y,0.01);
                point5.position.set(p5x,p5y,0.01);
                point10.position.set(p10x,p10y,0.01);
                point11.position.set(p11x,p11y,0.01);
                point7.position.set(p7x,p7y,0.01);
                point8.position.set(p8x,p8y,0.01);
                point2.visible=true;
                point4.visible=true;
                point5.visible=true;
                point10.visible=true;
                point11.visible=true;
                point7.visible=true;
                point8.visible=true;
                point20.visible=false;
                PIErender();
            }
            
        }
        else if (verticesno==8) {
            


            point1.visible=false;
            point2.visible=false;
            point3.visible=false;
            point4.visible=false;
            point5.visible=false;
            point6.visible=false;
            point7.visible=false;
            point8.visible=false;
            point9.visible=false;
            point10.visible=false;
            point11.visible=false;
            point12.visible=false;
            point13.visible=false;
             point20.visible=true;

             if (flag8==0) {
                point20.position.set(point12.position.x,point12.position.y,0.01);
            }

            slopecal();
            flag8=1;

            if (case1 && turn==1) {
                turn=2;
            }
            else if (case2 && turn==2) {
                turn=3;
            }
            else if (case3 && turn==3) {
                turn=4;
            }
            else if (case4 && turn==4) {
                turn=5;
            }
            else if (case5 && turn==5) {
                turn=6;
            }
            else if (case6 && turn==6) {
                turn=7;
            }
            else if (case7 && turn==7) {
                turn=8;
            }
            else if (case8 && turn==8) {
                turn=9;
            }


            if (turn==1) {
                console.log('turn 1 entered');
                console.log('slope1 '+slope1);
                if (countarrow==1) {

                PIEremoveElement(arrowHelper1);
                PIErender();

                var from1 = new THREE.Vector3( point12.position.x,point12.position.y,0.001 );
                 var to1 = new THREE.Vector3( point13.position.x,point13.position.y,0.001);
                    var direction1 = to1.clone().sub(from1);
                    var length1 = direction1.length();
                    var length=length1/3;
                    arrowHelper1 = new THREE.ArrowHelper(direction1.normalize(), from1, length, 0x000000,0.3,0.3 );
                     arrowHelper1.visible=true;
                    PIEaddElement(arrowHelper1);
                    PIErender();

                    t1.visible=true;

                    PIEremoveElement(t2);
                    PIErender();


                    materialSide = new THREE.MeshBasicMaterial( { color: 0x000000} );
                    materialArray = [materialSide ];
                     loader = new THREE.FontLoader();
                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                            
                            var textGeom = new THREE.TextGeometry(turn, 
                            {
                                size: 0.45, height: 0,
                                font: font, weight: "normal", style: "normal"
                            });  
                        var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                            t2 = new THREE.Mesh(textGeom, textMaterial );
                            t2.position.set(2.5,6,0);
                            t2.visible=true;
                            PIEaddElement(t2);
                            PIErender();
                        });

                }
                countarrow=2;
                   if (slope1==0) {
                    point20.position.set(point20.position.x+slope1directionx*Math.cos(slope1)*boundaryT,point20.position.y,0.01);
                   }
                   else if (slope1==-1.5707963267948966 || slope1==1.5707963267948966) {
                    point20.position.set(point20.position.x,point20.position.y+Math.sin(slope1)*boundaryT,0.01);
                   }
                    else{
                point20.position.set(point20.position.x+slope1directionx*Math.cos(slope1)*boundaryT,point20.position.y+slope1directiony*Math.sin(slope1)*boundaryT,0.01);
                PIErender();
                    }
            }
            else if (turn==2) {
                console.log('turn 2 entered');
                console.log('slope2 '+slope2);
                if (countarrow==2) {

                PIEremoveElement(arrowHelper2);
                PIErender();

                var from2 = new THREE.Vector3( point13.position.x,point13.position.y,0.001 );
                 var to2 = new THREE.Vector3( point4.position.x,point4.position.y,0.001);
                    var direction2 = to2.clone().sub(from2);
                    var length2 = direction2.length();
                    var length=length2/3;
                    arrowHelper2 = new THREE.ArrowHelper(direction2.normalize(), from2, length, 0x000000,0.3,0.3 );
                     arrowHelper2.visible=true;
                    PIEaddElement(arrowHelper2);
                    PIErender();

                    t1.visible=true;

                    PIEremoveElement(t2);
                    PIErender();


                    materialSide = new THREE.MeshBasicMaterial( { color: 0x000000} );
                    materialArray = [materialSide ];
                     loader = new THREE.FontLoader();
                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                            
                            var textGeom = new THREE.TextGeometry(turn, 
                            {
                                size: 0.45, height: 0,
                                font: font, weight: "normal", style: "normal"
                            });  
                        var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                            t2 = new THREE.Mesh(textGeom, textMaterial );
                            t2.position.set(2.5,6,0);
                            t2.visible=true;
                            PIEaddElement(t2);
                            PIErender();
                        });

                }
                countarrow=3;
                    if (slope2==0) {
                        console.log('slope2==0  loop entered');
                    point20.position.set(point20.position.x+slope2directionx*Math.cos(slope2)*boundaryT,point20.position.y,0.01);
                    console.log('slope2==0  loop exited');
                   }
                   else if (slope2==-1.5707963267948966 || slope2==1.5707963267948966) {
                    point20.position.set(point20.position.x,point20.position.y+Math.sin(slope2)*boundaryT,0.01);
                   }
                    else{
                    point20.position.set(point20.position.x+slope2directionx*Math.cos(slope2)*boundaryT,point20.position.y+slope2directiony*Math.sin(slope2)*boundaryT,0.01);
                    PIErender();
                }

            }
            else if (turn==3) {
                console.log('turn 3 entered');
                console.log('slope3 '+slope3);
                if (countarrow==3) {

                PIEremoveElement(arrowHelper3);
                PIErender();

                var from3 = new THREE.Vector3( point4.position.x,point4.position.y,0.001 );
                 var to3 = new THREE.Vector3( point5.position.x,point5.position.y,0.001);
                    var direction3 = to3.clone().sub(from3);
                    var length3 = direction3.length();
                    var length=length3/3;
                    arrowHelper3 = new THREE.ArrowHelper(direction3.normalize(), from3, length, 0x000000,0.3,0.3 );
                     arrowHelper3.visible=true;
                    PIEaddElement(arrowHelper3);
                    PIErender();

                    t1.visible=true;

                    PIEremoveElement(t2);
                    PIErender();


                    materialSide = new THREE.MeshBasicMaterial( { color: 0x000000} );
                    materialArray = [materialSide ];
                     loader = new THREE.FontLoader();
                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                            
                            var textGeom = new THREE.TextGeometry(turn, 
                            {
                                size: 0.45, height: 0,
                                font: font, weight: "normal", style: "normal"
                            });  
                        var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                            t2 = new THREE.Mesh(textGeom, textMaterial );
                            t2.position.set(2.5,6,0);
                            t2.visible=true;
                            PIEaddElement(t2);
                            PIErender();
                        });


                }
                countarrow=4;
                    if (slope3==0) {
                    point20.position.set(point20.position.x+slope3directionx*Math.cos(slope3)*boundaryT,point20.position.y,0.01);
                   }
                   else if (slope3==-1.5707963267948966 || slope3==1.5707963267948966) {
                    point20.position.set(point20.position.x,point20.position.y+Math.sin(slope3)*boundaryT,0.01);
                   }
                    else{
                    point20.position.set(point20.position.x+slope3directionx*Math.cos(slope3)*boundaryT,point20.position.y+slope3directiony*Math.sin(slope3)*boundaryT,0.01);
                    PIErender();
                }
            }
            else if (turn==4) {
                 console.log('turn 4 entered');
                 console.log('slope4 '+slope4);
                 if (countarrow==4) {

                PIEremoveElement(arrowHelper4);
                PIErender();

                var from4 = new THREE.Vector3( point5.position.x,point5.position.y,0.001 );
                 var to4 = new THREE.Vector3( point10.position.x,point10.position.y,0.001);
                    var direction4= to4.clone().sub(from4);
                    var length4 = direction4.length();
                    var length=length4/3;
                    arrowHelper4 = new THREE.ArrowHelper(direction4.normalize(), from4, length, 0x000000,0.3,0.3 );
                     arrowHelper4.visible=true;
                    PIEaddElement(arrowHelper4);
                    PIErender();

                    t1.visible=true;

                    PIEremoveElement(t2);
                    PIErender();


                    materialSide = new THREE.MeshBasicMaterial( { color: 0x000000} );
                    materialArray = [materialSide ];
                     loader = new THREE.FontLoader();
                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                            
                            var textGeom = new THREE.TextGeometry(turn, 
                            {
                                size: 0.45, height: 0,
                                font: font, weight: "normal", style: "normal"
                            });  
                        var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                            t2 = new THREE.Mesh(textGeom, textMaterial );
                            t2.position.set(2.5,6,0);
                            t2.visible=true;
                            PIEaddElement(t2);
                            PIErender();
                        });

                }
                countarrow=5;
                    if (slope4==0) {
                    point20.position.set(point20.position.x+slope4directionx*Math.cos(slope4)*boundaryT,point20.position.y,0.01);
                   }
                   else if (slope4==-1.5707963267948966 || slope4==1.5707963267948966) {
                    point20.position.set(point20.position.x,point20.position.y+Math.sin(slope4)*boundaryT,0.01);
                   }
                    else{
                    point20.position.set(point20.position.x+slope4directionx*Math.cos(slope4)*boundaryT,point20.position.y+slope4directiony*Math.sin(slope4)*boundaryT,0.01);
                    PIErender();
                }
            }
            else if (turn==5) {
                    console.log('turn 5 entered');
                 console.log('slope5 '+slope5);
                 if (countarrow==5) {

                PIEremoveElement(arrowHelper5);
                PIErender();

                var from5 = new THREE.Vector3( point10.position.x,point10.position.y,0.001 );
                 var to5 = new THREE.Vector3( point11.position.x,point11.position.y,0.001);
                    var direction5 = to5.clone().sub(from5);
                    var length5 = direction5.length();
                    var length=length5/3;
                    arrowHelper5 = new THREE.ArrowHelper(direction5.normalize(), from5, length, 0x000000,0.3,0.3 );
                     arrowHelper5.visible=true;
                    PIEaddElement(arrowHelper5);
                    PIErender();

                    t1.visible=true;

                    PIEremoveElement(t2);
                    PIErender();


                    materialSide = new THREE.MeshBasicMaterial( { color: 0x000000} );
                    materialArray = [materialSide ];
                     loader = new THREE.FontLoader();
                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                            
                            var textGeom = new THREE.TextGeometry(turn, 
                            {
                                size: 0.45, height: 0,
                                font: font, weight: "normal", style: "normal"
                            });  
                        var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                            t2 = new THREE.Mesh(textGeom, textMaterial );
                            t2.position.set(2.5,6,0);
                            t2.visible=true;
                            PIEaddElement(t2);
                            PIErender();
                        });
                }
                countarrow=6;
                    if (slope5==0) {
                    point20.position.set(point20.position.x+slope5directionx*Math.cos(slope5)*boundaryT,point20.position.y,0.01);
                   }
                   else if (slope5==-1.5707963267948966 || slope5==1.5707963267948966) {
                    point20.position.set(point20.position.x,point20.position.y+Math.sin(slope5)*boundaryT,0.01);
                   }
                    else{
                    point20.position.set(point20.position.x+slope5directionx*Math.cos(slope5)*boundaryT,point20.position.y+slope5directiony*Math.sin(slope5)*boundaryT,0.01);
                    PIErender();
                }
            }
            else if (turn==6) {
                console.log('turn 6 entered');
                 console.log('slope6 '+slope6);
                 if (countarrow==6) {

                PIEremoveElement(arrowHelper6);
                PIErender();

                var from6 = new THREE.Vector3( point11.position.x,point11.position.y,0.001 );
                 var to6 = new THREE.Vector3( point7.position.x,point7.position.y,0.001);
                    var direction6 = to6.clone().sub(from6);
                    var length6 = direction6.length();
                    var length=length6/3;
                    arrowHelper6 = new THREE.ArrowHelper(direction6.normalize(), from6, length, 0x000000,0.3,0.3 );
                     arrowHelper6.visible=true;
                    PIEaddElement(arrowHelper6);
                    PIErender();

                    t1.visible=true;

                    PIEremoveElement(t2);
                    PIErender();


                    materialSide = new THREE.MeshBasicMaterial( { color: 0x000000} );
                    materialArray = [materialSide ];
                     loader = new THREE.FontLoader();
                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                            
                            var textGeom = new THREE.TextGeometry(turn, 
                            {
                                size: 0.45, height: 0,
                                font: font, weight: "normal", style: "normal"
                            });  
                        var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                            t2 = new THREE.Mesh(textGeom, textMaterial );
                            t2.position.set(2.5,6,0);
                            t2.visible=true;
                            PIEaddElement(t2);
                            PIErender();
                        });

                }
                countarrow=7;
                    if (slope6==0) {
                    point20.position.set(point20.position.x+slope6directionx*Math.cos(slope6)*boundaryT,point20.position.y,0.01);
                   }
                   else if (slope6==-1.5707963267948966 || slope6==1.5707963267948966) {
                    point20.position.set(point20.position.x,point20.position.y+Math.sin(slope6)*boundaryT,0.01);
                   }
                    else{
                    point20.position.set(point20.position.x+slope6directionx*Math.cos(slope6)*boundaryT,point20.position.y+slope6directiony*Math.sin(slope6)*boundaryT,0.01);
                    PIErender();
                }
                
            }
            else if (turn==7) {
               console.log('turn 7 entered');
                 console.log('slope7 '+slope7);
                 if (countarrow==7) {

                PIEremoveElement(arrowHelper7);
                PIErender();

                var from7 = new THREE.Vector3( point7.position.x,point7.position.y,0.001 );
                 var to7 = new THREE.Vector3( point8.position.x,point8.position.y,0.001);
                    var direction7 = to7.clone().sub(from7);
                    var length7 = direction7.length();
                    var length=length7/3;
                    arrowHelper7 = new THREE.ArrowHelper(direction7.normalize(), from7,length, 0x000000,0.3,0.3 );
                     arrowHelper7.visible=true;
                    PIEaddElement(arrowHelper7);
                    PIErender();

                    t1.visible=true;

                    PIEremoveElement(t2);
                    PIErender();


                    materialSide = new THREE.MeshBasicMaterial( { color: 0x000000} );
                    materialArray = [materialSide ];
                     loader = new THREE.FontLoader();
                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                            
                            var textGeom = new THREE.TextGeometry(turn, 
                            {
                                size: 0.45, height: 0,
                                font: font, weight: "normal", style: "normal"
                            });  
                        var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                            t2 = new THREE.Mesh(textGeom, textMaterial );
                            t2.position.set(2.5,6,0);
                            t2.visible=true;
                            PIEaddElement(t2);
                            PIErender();
                        });

                }
                countarrow=8;
                    if (slope7==0) {
                    point20.position.set(point20.position.x+slope7directionx*Math.cos(slope7)*boundaryT,point20.position.y,0.01);
                   }
                   else if (slope7==-1.5707963267948966 || slope7==1.5707963267948966) {
                    point20.position.set(point20.position.x,point20.position.y+Math.sin(slope7)*boundaryT,0.01);
                   }
                    else{
                    point20.position.set(point20.position.x+slope7directionx*Math.cos(slope7)*boundaryT,point20.position.y+slope7directiony*Math.sin(slope7)*boundaryT,0.01);
                    PIErender();
                }
            }
            else if (turn==8) {
                console.log('turn 8 entered');
                 console.log('slope8 '+slope8);
                 if (countarrow==8) {

                PIEremoveElement(arrowHelper8);
                PIErender();

                var from8 = new THREE.Vector3( point8.position.x,point8.position.y,0.001 );
                 var to8 = new THREE.Vector3( point12.position.x,point12.position.y,0.001);
                    var direction8 = to8.clone().sub(from8);
                    var length8 = direction8.length();
                    var length=length8/3;
                    arrowHelper8 = new THREE.ArrowHelper(direction8.normalize(), from8, length, 0x000000,0.3,0.3 );
                     arrowHelper8.visible=true;
                    PIEaddElement(arrowHelper8);
                    PIErender();

                    t1.visible=true;

                    PIEremoveElement(t2);
                    PIErender();


                    materialSide = new THREE.MeshBasicMaterial( { color: 0x000000} );
                    materialArray = [materialSide ];
                     loader = new THREE.FontLoader();
                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                            
                            var textGeom = new THREE.TextGeometry(turn, 
                            {
                                size: 0.45, height: 0,
                                font: font, weight: "normal", style: "normal"
                            });  
                        var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                            t2 = new THREE.Mesh(textGeom, textMaterial );
                            t2.position.set(2.5,6,0);
                            t2.visible=true;
                            PIEaddElement(t2);
                            PIErender();
                        });

                }
                countarrow=9;
                    if (slope8==0) {
                    point20.position.set(point20.position.x+slope8directionx*Math.cos(slope8)*boundaryT,point20.position.y,0.01);
                   }
                   else if (slope8==-1.5707963267948966 || slope8==1.5707963267948966) {
                    point20.position.set(point20.position.x,point20.position.y+Math.sin(slope8)*boundaryT,0.01);
                   }
                    else{
                    point20.position.set(point20.position.x+slope8directionx*Math.cos(slope8)*boundaryT,point20.position.y+slope8directiony*Math.sin(slope8)*boundaryT,0.01);
                    PIErender();
                }
                 
            }
            else if (turn==9) {
                turn=1;
                flag8=0;
                countarrow=1;
                PIEstopAnimation();
                point12.position.set(p12x,p12y,0.01);
                point13.position.set(p13x,p13y,0.01);
                point4.position.set(p4x,p4y,0.01);
                point5.position.set(p5x,p5y,0.01);
                point10.position.set(p10x,p10y,0.01);
                point11.position.set(p11x,p11y,0.01);
                point7.position.set(p7x,p7y,0.01);
                point8.position.set(p8x,p8y,0.01);
                point12.visible=true;
                point13.visible=true;
                point4.visible=true;
                point5.visible=true;
                point10.visible=true;
                point11.visible=true;
                point7.visible=true;
                point8.visible=true;
                point20.visible=false;
                PIErender();
            }

        }

        
        else{



    //point1.visible=false;
    point2.visible=false;
    point3.visible=false;
    point4.visible=false;
    point5.visible=false;
    point6.visible=false;
    point7.visible=false;
    point8.visible=false;
     point1.visible=true;

    // point1.visible=true;

    slopecal();

var varx11=precisionRound(p1x, 1);
var vary11=precisionRound(p1y, 1);

var varx1=precisionRound(point1.position.x, 1);
var vary1=precisionRound(point1.position.y, 1);
var varx2=precisionRound(point2.position.x, 1);
var vary2=precisionRound(point2.position.y, 1);
var varx3=precisionRound(point3.position.x, 1);
var vary3=precisionRound(point3.position.y, 1);
var varx4=precisionRound(point4.position.x, 1);
var vary4=precisionRound(point4.position.y, 1);
var varx5=precisionRound(point5.position.x, 1);
var vary5=precisionRound(point5.position.y, 1);
var varx6=precisionRound(point6.position.x, 1);
var vary6=precisionRound(point6.position.y, 1);
var varx7=precisionRound(point7.position.x, 1);
var vary7=precisionRound(point7.position.y, 1);
var varx8=precisionRound(point8.position.x, 1);
var vary8=precisionRound(point8.position.y, 1);
console.log(varx1);
console.log(varx2);
console.log(vary1);
console.log(vary2);

    if (varx1==varx2 && vary1==vary2) {
        console.log("turn changed to 2");
        turn=2;
    }
    else if (varx2==varx3 && vary2==vary3) {
        turn=3;
    }
    else if (varx3==varx4 && vary3==vary4) {
        turn=4;
    }
    else if (varx4==varx5 && vary4==vary5) {
        turn=5;
    }
    else if (varx5==varx6 && vary5==vary6) {
        turn=6;
    }
     else if (varx6==varx7 && vary6==vary7) {
        turn=7;
    }
     else if (varx7==varx8 && vary7==vary8) {
        turn=8;
    }
    else if (varx8==varx11 && vary8==vary11) {
        point1.position.set(p1x,p1y,0.01);
        point2.position.set(p2x,p2y,0.01);
        point3.position.set(p3x,p3y,0.01);
        point4.position.set(p4x,p4y,0.01);
        point5.position.set(p5x,p5y,0.01);
        point6.position.set(p6x,p6y,0.01);
        point7.position.set(p7x,p7y,0.01);
        point8.position.set(p8x,p8y,0.01);
       
        point1.visible=true;
        point2.visible=true;
        point3.visible=true;
        point4.visible=true;
        point5.visible=true;
        point6.visible=true;
        point7.visible=true;
        point8.visible=true;

        PIEstopAnimation();
        turn=1;
        

    }

    if (turn==1) {
        console.log('turn 1 entered');
        console.log('slope1 '+slope1);
       if (slope1==0) {
        point1.position.set(point1.position.x+slope1directionx*Math.cos(slope1)*boundaryT,point1.position.y,0.01);
       }
       else if (slope1==-1.5707963267948966 || slope1==1.5707963267948966) {
        point1.position.set(point1.position.x,point1.position.y+Math.sin(slope1)*boundaryT,0.01);
       }
        else{
    point1.position.set(point1.position.x+slope1directionx*Math.cos(slope1)*boundaryT,point1.position.y+slope1directiony*Math.sin(slope1)*boundaryT,0.01);
    PIErender();
     }

    }
    else if (turn==2) {
        console.log('turn 2 entered');
        point1.visible=false;
        point2.visible=true;

        if (slope2==0) {
        point2.position.set(point2.position.x+slope2directionx*Math.cos(slope2)*boundaryT,point2.position.y,0.01);
       }
       else if (slope2==-1.5707963267948966 || slope2==1.5707963267948966) {
        point2.position.set(point2.position.x,point2.position.y+Math.sin(slope2)*boundaryT,0.01);
       }
        else{
        point2.position.set(point2.position.x+slope2directionx*Math.cos(slope2)*boundaryT,point2.position.y+slope2directiony*Math.sin(slope2)*boundaryT,0.01);
        PIErender();
    }
    }
    else if (turn==3) {
        console.log('turn 3 entered');
        console.log('slope3 '+slope3);
        point1.visible=false;
        point2.visible=false;
        point3.visible=true;
       if (slope3==0) {
        point3.position.set(point3.position.x+slope3directionx*Math.cos(slope3)*boundaryT,point3.position.y,0.01);
       }
       else if (slope3==-1.5707963267948966 || slope3==1.5707963267948966) {
        point3.position.set(point3.position.x,point3.position.y+Math.sin(slope3)*boundaryT,0.01);
       }
        else{
        point3.position.set(point3.position.x+slope3directionx*Math.cos(slope3)*boundaryT,point3.position.y+slope3directiony*Math.sin(slope3)*boundaryT,0.01);
        PIErender();
    }
    }
    else if (turn==4) {
        console.log('turn 4 entered');
        point1.visible=false;
        point2.visible=false;
        point3.visible=false;
        point4.visible=true;
        if (slope4==0) {
        point4.position.set(point4.position.x+slope4directionx*Math.cos(slope4)*boundaryT,point4.position.y,0.01);
       }
       else if (slope4==-1.5707963267948966 || slope4==1.5707963267948966) {
        point4.position.set(point4.position.x,point4.position.y+Math.sin(slope4)*boundaryT,0.01);
       }
        else{
        point4.position.set(point4.position.x+slope4directionx*Math.cos(slope4)*boundaryT,point4.position.y+slope4directiony*Math.sin(slope4)*boundaryT,0.01);
        PIErender();
    }
    }
     else if (turn==5) {
        console.log('turn 5 entered');
        point1.visible=false;
        point2.visible=false;
        point3.visible=false;
        point4.visible=false;
        point5.visible=true;
        if (slope5==0) {
        point5.position.set(point5.position.x+slope5directionx*Math.cos(slope5)*boundaryT,point5.position.y,0.01);
       }
       else if (slope5==-1.5707963267948966 || slope5==1.5707963267948966) {
        point5.position.set(point5.position.x,point5.position.y+Math.sin(slope5)*boundaryT,0.01);
       }
        else{
        point5.position.set(point5.position.x+slope5directionx*Math.cos(slope5)*boundaryT,point5.position.y+slope5directiony*Math.sin(slope5)*boundaryT,0.01);
        PIErender();
    }
    }
     else if (turn==6) {
        console.log('turn 6 entered');
        point1.visible=false;
        point2.visible=false;
        point3.visible=false;
        point4.visible=false;
        point5.visible=false;
        point6.visible=true;
        if (slope6==0) {
        point6.position.set(point6.position.x+slope6directionx*Math.cos(slope6)*boundaryT,point6.position.y,0.01);
       }
       else if (slope6==-1.5707963267948966 || slope6==1.5707963267948966) {
        point6.position.set(point6.position.x,point6.position.y+Math.sin(slope6)*boundaryT,0.01);
       }
        else{
        point6.position.set(point6.position.x+slope6directionx*Math.cos(slope6)*boundaryT,point6.position.y+slope6directiony*Math.sin(slope6)*boundaryT,0.01);
        PIErender();
    }
        
    }
     else if (turn==7) {
        var slope=precisionRound(slope7, 3);
        console.log('turn 7 entered');
        console.log(slope7+ 'slope7');
        point1.visible=false;
        point2.visible=false;
        point3.visible=false;
        point4.visible=false;
        point5.visible=false;
        point6.visible=false;
        point7.visible=true;
        if (slope7==0) {
        point7.position.set(point7.position.x+slope7directionx*Math.cos(slope7)*boundaryT,point7.position.y,0.01);
       }
       else if (slope7==-1.5707963267948966 || slope7==1.5707963267948966) {
        point7.position.set(point7.position.x,point7.position.y+Math.sin(slope7)*boundaryT,0.01);
       }
        else{
        point7.position.set(point7.position.x+slope7directionx*Math.cos(slope7)*boundaryT,point7.position.y+slope7directiony*Math.sin(slope7)*boundaryT,0.01);
        PIErender();
    }

    }
    else if (turn==8) {
        console.log('turn 8 entered');
        point1.visible=false;
        point2.visible=false;
        point3.visible=false;
        point4.visible=false;
        point5.visible=false;
        point6.visible=false;
        point7.visible=false;
        point8.visible=true;
        if (slope8==0) {
        point8.position.set(point8.position.x+slope8directionx*Math.cos(slope8)*boundaryT,point8.position.y,0.01);
       }
       else if (slope8==-1.5707963267948966 || slope7==1.5707963267948966) {
        point8.position.set(point8.position.x,point8.position.y+Math.sin(slope8)*boundaryT,0.01);
       }
        else{
        point8.position.set(point8.position.x+slope8directionx*Math.cos(slope8)*boundaryT,point8.position.y+slope8directiony*Math.sin(slope8)*boundaryT,0.01);
        PIErender();
}
    }


  
  }
}


         else if (circlerotate==1) {
     console.log('entered circle loop');

                var speed = 0.5;

                           var circlex = Math.cos(Math.PI*angle)*3.95;
            var circley = Math.sin(Math.PI*angle)*3.95;
            
            point20.position.set( circlex, circley, 0.01);
            angle = angle + boundaryT*speed;
    
           
           var circlex1 = Math.cos(Math.PI*angle1)*5;
            var circley1 = Math.sin(Math.PI*angle1)*5;
            angle1 = angle1 + boundaryT*speed;

            var cx2=Math.cos(Math.PI*angle2)*6;
            var cy2 = Math.sin(Math.PI*angle2)*6;
            angle2=angle2+boundaryT*speed;
             PIEremoveElement(arrowHelper1);
             
        PIErender();
      


    from1 = new THREE.Vector3( circlex1,circley1, 0);
    to1 = new THREE.Vector3( cx2,cy2,0);
    direction1 = to1.clone().sub(from1);
    length1 = direction1.length();
    arrowHelper1 = new THREE.ArrowHelper(direction1.normalize(), from1, length1, 0x48137c,0.3,0.3 );
    arrowHelper1.visible=true;
    PIEaddElement(arrowHelper1);
     arrowHelper1.rotateZ(Math.PI/2);
    PIErender();
    PIErender();

    if (angleflag==0) {
        t3.visible=true;
        angleflag=1;
    }

        }



}


   if(play_time >= 0.01&&play==1){
        PIEstopAnimation();
        play=0;

        
        }

}
var angle1=0,angle2=0,angleflag=0;
var from1,to1,direction1,length1;

function precisionRound(number, precision) {
  var factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
}

var arrowHelper1;

var slope1directionx,slope1directiony,slope2directionx,slope2directiony,slope3directionx,slope3directiony,slope4directionx,slope4directiony;
var slope5directionx,slope5directiony,slope6directionx,slope6directiony,slope7directionx,slope7directiony,slope8directionx,slope8directiony;
var slope9,slope10,slope11;

var case1,case2,case3,case4,case5,case6;
var xintercept,yintercept;

function slopecal(){



    if (verticesno==3) {

        slope1=Math.atan((p5y-p2y)/(p5x-p2x));
     if (p5x>p2x) {
        if (p5y>p2y) {
            case1=(point20.position.x>=point5.position.x && point20.position.y>=point5.position.y);
            xintercept=1;
            yintercept=0;
            slope1directionx=1;
            slope1directiony=1;
        }
        else if (p5y<p2y) {
            case1=(point20.position.x>=point5.position.x && point20.position.y<=point5.position.y);
            xintercept=1;
            yintercept=0;
            slope1directionx=1;
            slope1directiony=1
        }
        else if (p5y==p2y) {
            xintercept=0;
            yintercept=1;
            case1=(point20.position.x>=point5.position.x);
            slope1directionx=1;
        }
        
     }
    else if (p5x<p2x) {
         if (p5y>p2y) {
            case1=(point20.position.x<=point5.position.x && point20.position.y>=point5.position.y);
            xintercept=1;
            yintercept=0;
            slope1directionx=-1;
            slope1directiony=-1;
        }
        else if (p5y<p2y) {
            case1=(point20.position.x<=point5.position.x && point20.position.y<=point5.position.y);
            xintercept=1;
            yintercept=0;
            slope1directionx=-1;
            slope1directiony=-1
        }
        else if (p5y==p2y) {
            xintercept=1;
            yintercept=0;
            case1=(point20.position.x<=point5.position.x);
            slope1directionx=-1;
        }

    }
    else if (p5x==p2x) {
        if (p5y>p2y) {
            case1=(point20.position.y>=point5.position.y);
            xintercept=1;
            yintercept=0;
            slope1directiony=-1;
        }
        else if (p5y<p2y) {
            xintercept=1;
            yintercept=0;
            case1=(point20.position.y<=point5.position.y);
            // slope1directiony=-1;
        }
    }



    slope2=Math.atan((p7y-p5y)/(p7x-p5x));
     if (p7x>p5x) {
        if (p7y>p5y) {
            case2=(point20.position.x>=point7.position.x && point20.position.y>=point7.position.y);
            xintercept=1;
            yintercept=0;
            slope2directionx=1;
            slope2directiony=1;
        }
        else if (p7y<p5y) {
             case2=(point20.position.x>=point7.position.x && point20.position.y<=point7.position.y);
             xintercept=1;
            yintercept=0;
            slope2directionx=1;
            slope2directiony=1
        }
        else if (p7y==p5y) {
            case2=(point20.position.x>=point7.position.x);
            xintercept=0;
            yintercept=1;
            slope2directionx=1;
        }
        
     }
    else if (p7x<p5x) {
         if (p7y>p5y) {
            case2=(point20.position.x<=point7.position.x && point20.position.y>=point7.position.y);
            xintercept=1;
            yintercept=0;
            slope2directionx=-1;
            slope2directiony=-1;
        }
        else if (p7y<p5y) {
            case2=(point20.position.x<=point7.position.x && point20.position.y<=point7.position.y);
            xintercept=1;
            yintercept=0;
            slope2directionx=-1;
            slope2directiony=-1
        }
        else if (p7y==p5y) {
             case2=(point20.position.x<=point7.position.x);
             xintercept=1;
            yintercept=0;
            slope2directionx=-1;
        }

    }
    else if (p7x==p5x) {
        if (p7y>p5y) {
            case2=(point20.position.y>=point7.position.y);
            xintercept=1;
            yintercept=0;
            slope2directiony=-1;
        }
        else if (p7y<p5y) {
            case2=(point20.position.y<=point7.position.y);
            xintercept=1;
            yintercept=0;
        }
    }



    slope3=Math.atan((p2y-p7y)/(p2x-p7x));
     if (p2x>p7x) {
        if (p2y>p7y) {
            case3=(point20.position.x>=point2.position.x && point20.position.y>=point2.position.y);
            xintercept=1;
            yintercept=0;
            slope3directionx=1;
            slope3directiony=1;
        }
        else if (p2y<p7y) {
            case3=(point20.position.x>=point2.position.x && point20.position.y<=point2.position.y);
            xintercept=1;
            yintercept=0;
            slope3directionx=1;
            slope3directiony=1
        }
        else if (p2y==p7y) {
            case3=(point20.position.x>=point2.position.x);
            xintercept=0;
            yintercept=1;
            slope3directionx=1;
        }
        
     }
    else if (p2x<p7x) {
         if (p2y>p7y) {
            case3=(point20.position.x<=point2.position.x && point20.position.y>=point2.position.y);
            xintercept=1;
            yintercept=0;
            slope3directionx=-1;
            slope3directiony=-1;
        }
        else if (p2y<p7y) {
            case3=(point20.position.x<=point2.position.x && point20.position.y<=point2.position.y);
            xintercept=1;
            yintercept=0;
            slope3directionx=-1;
            slope3directiony=-1
        }
        else if (p2y==p7y) {
            case3=(point20.position.x<=point2.position.x);
            xintercept=1;
            yintercept=0;
            slope3directionx=-1;
        }

    }
    else if (p2x==p7x) {
        if (p2y>p7y) {
            case3=(point20.position.y>=point2.position.y);
            xintercept=1;
            yintercept=0;
            slope3directiony=-1;
        }
        else if (p2y<p7y) {
             case3=(point20.position.y<=point2.position.y);
             xintercept=1;
            yintercept=0;

        }
    }




    }


    else if (verticesno==4) {


        slope1=Math.atan((p3y-p1y)/(p3x-p1x));
     if (p3x>p1x) {
        if (p3y>p1y) {
            case1=(point20.position.x>=point3.position.x && point20.position.y>=point3.position.y);
            slope1directionx=1;
            slope1directiony=1;
        }
        else if (p3y<p1y) {
            case1=(point20.position.x>=point3.position.x && point20.position.y<=point3.position.y);
            slope1directionx=1;
            slope1directiony=1
        }
        else if (p3y==p1y) {
            case1=(point20.position.x>=point3.position.x);
            slope1directionx=1;
        }
        
     }
    else if (p3x<p1x) {
         if (p3y>p1y) {
            case1=(point20.position.x<=point3.position.x && point20.position.y>=point3.position.y);
            slope1directionx=-1;
            slope1directiony=-1;
        }
        else if (p3y<p1y) {
            case1=(point20.position.x<=point3.position.x && point20.position.y<=point3.position.y);
            slope1directionx=-1;
            slope1directiony=-1
        }
        else if (p3y==p1y) {
            case1=(point20.position.x<=point3.position.x);
            slope1directionx=-1;
        }

    }
    else if (p3x==p1x) {
        if (p3y>p1y) {
            case1=(point20.position.y>=point3.position.y);
            slope1directiony=-1;
        }
        else if (p3y<p1y) {
            case1=(point20.position.y<=point3.position.y);
            // slope1directiony=-1;
        }
    }



    slope2=Math.atan((p5y-p3y)/(p5x-p3x));
     if (p5x>p3x) {
        if (p5y>p3y) {
            case2=(point20.position.x>=point5.position.x && point20.position.y>=point5.position.y);
            slope2directionx=1;
            slope2directiony=1;
        }
        else if (p5y<p3y) {
             case2=(point20.position.x>=point5.position.x && point20.position.y<=point5.position.y);
            slope2directionx=1;
            slope2directiony=1
        }
        else if (p5y==p3y) {
            case2=(point20.position.x>=point5.position.x);
            slope2directionx=1;
        }
        
     }
    else if (p5x<p3x) {
         if (p5y>p3y) {
            case2=(point20.position.x<=point5.position.x && point20.position.y>=point5.position.y);
            slope2directionx=-1;
            slope2directiony=-1;
        }
        else if (p5y<p3y) {
            case2=(point20.position.x<=point5.position.x && point20.position.y<=point5.position.y);
            slope2directionx=-1;
            slope2directiony=-1
        }
        else if (p5y==p3y) {
             case2=(point20.position.x<=point5.position.x);
            slope2directionx=-1;
        }

    }
    else if (p5x==p3x) {
        if (p5y>p3y) {
            case2=(point20.position.y>=point5.position.y);
            slope2directiony=-1;
        }
        else if (p5y<p3y) {
            case2=(point20.position.y<=point5.position.y);
        }
    }



    slope3=Math.atan((p7y-p5y)/(p7x-p5x));
     if (p7x>p5x) {
        if (p7y>p5y) {
            case3=(point20.position.x>=point7.position.x && point20.position.y>=point7.position.y);
            slope3directionx=1;
            slope3directiony=1;
        }
        else if (p7y<p5y) {
            case3=(point20.position.x>=point7.position.x && point20.position.y<=point7.position.y);
            slope3directionx=1;
            slope3directiony=1
        }
        else if (p7y==p5y) {
            case3=(point20.position.x>=point7.position.x);
            slope3directionx=1;
        }
        
     }
    else if (p7x<p5x) {
         if (p7y>p5y) {
            case3=(point20.position.x<=point7.position.x && point20.position.y>=point7.position.y);
            slope3directionx=-1;
            slope3directiony=-1;
        }
        else if (p7y<p5y) {
            case3=(point20.position.x<=point7.position.x && point20.position.y<=point7.position.y);
            slope3directionx=-1;
            slope3directiony=-1
        }
        else if (p7y==p5y) {
            case3=(point20.position.x<=point7.position.x);
            slope3directionx=-1;
        }

    }
    else if (p7x==p5x) {
        if (p7y>p5y) {
            case3=(point20.position.y>=point7.position.y);
            slope3directiony=-1;
        }
        else if (p7y<p5y) {
             case3=(point20.position.y<=point7.position.y);

        }
    }



    slope4=Math.atan((p1y-p7y)/(p1x-p7x));
     if (p1x>p7x) {
        if (p1y>p7y) {
            case4=(point20.position.x>=point1.position.x && point20.position.y>=point1.position.y);
            slope4directionx=1;
            slope4directiony=1;
        }
        else if (p1y<p7y) {
            case4=(point20.position.x>=point1.position.x && point20.position.y<=point1.position.y);
            slope4directionx=1;
            slope4directiony=1
        }
        else if (p1y==p7y) {
            case4=(point20.position.x>=point1.position.x);
            slope4directionx=1;
        }
        
     }
    else if (p1x<p7x) {
         if (p1y>p7y) {
            case4=(point20.position.x<=point1.position.x && point20.position.y>=point1.position.y);
            slope4directionx=-1;
            slope4directiony=-1;
        }
        else if (p1y<p7y) {
            case4=(point20.position.x<=point1.position.x && point20.position.y<=point1.position.y);
            slope4directionx=-1;
            slope4directiony=-1
        }
        else if (p1y==p7y) {
            case4=(point20.position.x<=point1.position.x);
            slope4directionx=-1;
        }

    }
    else if (p1x==p7x) {
        if (p1y>p7y) {
            case4=(point20.position.y>=point1.position.y);
            slope4directiony=-1;
        }
        else if (p1y<p7y) {
             case4=(point20.position.y<=point1.position.y);

        }
    }

        
    }
    else if (verticesno==5) {

         slope1=Math.atan((p4y-p2y)/(p4x-p2x));
     if (p4x>p2x) {
        if (p4y>p2y) {
            case1=(point20.position.x>=point4.position.x && point20.position.y>=point4.position.y);
            slope1directionx=1;
            slope1directiony=1;
        }
        else if (p4y<p2y) {
            case1=(point20.position.x>=point4.position.x && point20.position.y<=point4.position.y);
            slope1directionx=1;
            slope1directiony=1
        }
        else if (p4y==p2y) {
            case1=(point20.position.x>=point4.position.x);
            slope1directionx=1;
        }
        
     }
    else if (p4x<p2x) {
         if (p4y>p2y) {
            case1=(point20.position.x<=point4.position.x && point20.position.y>=point4.position.y);
            slope1directionx=-1;
            slope1directiony=-1;
        }
        else if (p4y<p2y) {
            case1=(point20.position.x<=point4.position.x && point20.position.y<=point4.position.y);
            slope1directionx=-1;
            slope1directiony=-1
        }
        else if (p4y==p2y) {
            case1=(point20.position.x<=point4.position.x);
            slope1directionx=-1;
        }

    }
    else if (p4x==p2x) {
        if (p4y>p2y) {
            case1=(point20.position.y>=point4.position.y);
            slope1directiony=-1;
        }
        else if (p4y<p2y) {
            case1=(point20.position.y<=point4.position.y);
            // slope1directiony=-1;
        }
    }



    slope2=Math.atan((p5y-p4y)/(p5x-p4x));
     if (p5x>p4x) {
        if (p5y>p4y) {
            case2=(point20.position.x>=point5.position.x && point20.position.y>=point5.position.y);
            slope2directionx=1;
            slope2directiony=1;
        }
        else if (p5y<p4y) {
             case2=(point20.position.x>=point5.position.x && point20.position.y<=point5.position.y);
            slope2directionx=1;
            slope2directiony=1
        }
        else if (p5y==p4y) {
            case2=(point20.position.x>=point5.position.x);
            slope2directionx=1;
        }
        
     }
    else if (p5x<p4x) {
         if (p5y>p4y) {
            case2=(point20.position.x<=point5.position.x && point20.position.y>=point5.position.y);
            slope2directionx=-1;
            slope2directiony=-1;
        }
        else if (p5y<p4y) {
            case2=(point20.position.x<=point5.position.x && point20.position.y<=point5.position.y);
            slope2directionx=-1;
            slope2directiony=-1
        }
        else if (p5y==p4y) {
             case2=(point20.position.x<=point5.position.x);
            slope2directionx=-1;
        }

    }
    else if (p5x==p4x) {
        if (p5y>p4y) {
            case2=(point20.position.y>=point5.position.y);
            slope2directiony=-1;
        }
        else if (p5y<p4y) {
            case2=(point20.position.y<=point5.position.y);
        }
    }



    slope3=Math.atan((p7y-p5y)/(p7x-p5x));
     if (p7x>p5x) {
        if (p7y>p5y) {
            case3=(point20.position.x>=point7.position.x && point20.position.y>=point7.position.y);
            slope3directionx=1;
            slope3directiony=1;
        }
        else if (p7y<p5y) {
            case3=(point20.position.x>=point7.position.x && point20.position.y<=point7.position.y);
            slope3directionx=1;
            slope3directiony=1
        }
        else if (p7y==p5y) {
            case3=(point20.position.x>=point7.position.x);
            slope3directionx=1;
        }
        
     }
    else if (p7x<p5x) {
         if (p7y>p5y) {
            case3=(point20.position.x<=point7.position.x && point20.position.y>=point7.position.y);
            slope3directionx=-1;
            slope3directiony=-1;
        }
        else if (p7y<p5y) {
            case3=(point20.position.x<=point7.position.x && point20.position.y<=point7.position.y);
            slope3directionx=-1;
            slope3directiony=-1
        }
        else if (p7y==p5y) {
            case3=(point20.position.x<=point7.position.x);
            slope3directionx=-1;
        }

    }
    else if (p7x==p5x) {
        if (p7y>p5y) {
            case3=(point20.position.y>=point7.position.y);
            slope3directiony=-1;
        }
        else if (p7y<p5y) {
             case3=(point20.position.y<=point7.position.y);

        }
    }



    slope4=Math.atan((p8y-p7y)/(p8x-p7x));
     if (p8x>p7x) {
        if (p8y>p7y) {
            case4=(point20.position.x>=point8.position.x && point20.position.y>=point8.position.y);
            slope4directionx=1;
            slope4directiony=1;
        }
        else if (p8y<p7y) {
            case4=(point20.position.x>=point8.position.x && point20.position.y<=point8.position.y);
            slope4directionx=1;
            slope4directiony=1
        }
        else if (p8y==p7y) {
            case4=(point20.position.x>=point8.position.x);
            slope4directionx=1;
        }
        
     }
    else if (p8x<p7x) {
         if (p8y>p7y) {
            case4=(point20.position.x<=point8.position.x && point20.position.y>=point8.position.y);
            slope4directionx=-1;
            slope4directiony=-1;
        }
        else if (p8y<p7y) {
            case4=(point20.position.x<=point8.position.x && point20.position.y<=point8.position.y);
            slope4directionx=-1;
            slope4directiony=-1
        }
        else if (p8y==p7y) {
            case4=(point20.position.x<=point8.position.x);
            slope4directionx=-1;
        }

    }
    else if (p8x==p7x) {
        if (p8y>p7y) {
            case4=(point20.position.y>=point8.position.y);
            slope4directiony=-1;
        }
        else if (p8y<p7y) {
             case4=(point20.position.y<=point8.position.y);

        }
    }



    slope5=Math.atan((p2y-p8y)/(p2x-p8x));
     if (p2x>p8x) {
        if (p2y>p8y) {
            case5=(point20.position.x>=point2.position.x && point20.position.y>=point2.position.y);
            slope5directionx=1;
            slope5directiony=1;
        }
        else if (p2y<p8y) {
            case5=(point20.position.x>=point2.position.x && point20.position.y<=point2.position.y);
            slope5directionx=1;
            slope5directiony=1
        }
        else if (p2y==p8y) {
            case5=(point20.position.x>=point2.position.x);
            slope5directionx=1;
        }
        
     }
    else if (p2x<p8x) {
         if (p2y>p8y) {
            case5=(point20.position.x<=point2.position.x && point20.position.y>=point2.position.y);
            slope5directionx=-1;
            slope5directiony=-1;
        }
        else if (p2y<p8y) {
            case5=(point20.position.x<=point2.position.x && point20.position.y<=point2.position.y);
            slope5directionx=-1;
            slope5directiony=-1
        }
        else if (p2y==p8y) {
            case5=(point20.position.x<=point2.position.x);
            slope5directionx=-1;
        }

    }
    else if (p2x==p8x) {
        if (p2y>p8y) {
            case5=(point20.position.y>=point2.position.y);
            slope5directiony=-1;
        }
        else if (p2y<p8y) {
             case5=(point20.position.y<=point2.position.y);

        }
    }
        
    }
    else if (verticesno==6) {

        slope1=Math.atan((p4y-p2y)/(p4x-p2x));
     if (p4x>p2x) {
        if (p4y>p2y) {
            case1=(point20.position.x>=point4.position.x && point20.position.y>=point4.position.y);
            slope1directionx=1;
            slope1directiony=1;
        }
        else if (p4y<p2y) {
            case1=(point20.position.x>=point4.position.x && point20.position.y<=point4.position.y);
            slope1directionx=1;
            slope1directiony=1
        }
        else if (p4y==p2y) {
            case1=(point20.position.x>=point4.position.x);
            slope1directionx=1;
        }
        
     }
    else if (p4x<p2x) {
         if (p4y>p2y) {
            case1=(point20.position.x<=point4.position.x && point20.position.y>=point4.position.y);
            slope1directionx=-1;
            slope1directiony=-1;
        }
        else if (p4y<p2y) {
            case1=(point20.position.x<=point4.position.x && point20.position.y<=point4.position.y);
            slope1directionx=-1;
            slope1directiony=-1
        }
        else if (p4y==p2y) {
            case1=(point20.position.x<=point4.position.x);
            slope1directionx=-1;
        }

    }
    else if (p4x==p2x) {
        if (p4y>p2y) {
            case1=(point20.position.y>=point4.position.y);
            slope1directiony=-1;
        }
        else if (p4y<p2y) {
            case1=(point20.position.y<=point4.position.y);
            // slope1directiony=-1;
        }
    }



    slope2=Math.atan((p5y-p4y)/(p5x-p4x));
     if (p5x>p4x) {
        if (p5y>p4y) {
            case2=(point20.position.x>=point5.position.x && point20.position.y>=point5.position.y);
            slope2directionx=1;
            slope2directiony=1;
        }
        else if (p5y<p4y) {
             case2=(point20.position.x>=point5.position.x && point20.position.y<=point5.position.y);
            slope2directionx=1;
            slope2directiony=1
        }
        else if (p5y==p4y) {
            case2=(point20.position.x>=point5.position.x);
            slope2directionx=1;
        }
        
     }
    else if (p5x<p4x) {
         if (p5y>p4y) {
            case2=(point20.position.x<=point5.position.x && point20.position.y>=point5.position.y);
            slope2directionx=-1;
            slope2directiony=-1;
        }
        else if (p5y<p4y) {
            case2=(point20.position.x<=point5.position.x && point20.position.y<=point5.position.y);
            slope2directionx=-1;
            slope2directiony=-1
        }
        else if (p5y==p4y) {
             case2=(point20.position.x<=point5.position.x);
            slope2directionx=-1;
        }

    }
    else if (p5x==p4x) {
        if (p5y>p4y) {
            case2=(point20.position.y>=point5.position.y);
            slope2directiony=-1;
        }
        else if (p5y<p4y) {
            case2=(point20.position.y<=point5.position.y);
        }
    }



    slope3=Math.atan((p9y-p5y)/(p9x-p5x));
     if (p9x>p5x) {
        if (p9y>p5y) {
            case3=(point20.position.x>=point9.position.x && point20.position.y>=point9.position.y);
            slope3directionx=1;
            slope3directiony=1;
        }
        else if (p9y<p5y) {
            case3=(point20.position.x>=point9.position.x && point20.position.y<=point9.position.y);
            slope3directionx=1;
            slope3directiony=1
        }
        else if (p9y==p5y) {
            case3=(point20.position.x>=point9.position.x);
            slope3directionx=1;
        }
        
     }
    else if (p9x<p5x) {
         if (p9y>p5y) {
            case3=(point20.position.x<=point9.position.x && point20.position.y>=point9.position.y);
            slope3directionx=-1;
            slope3directiony=-1;
        }
        else if (p9y<p5y) {
            case3=(point20.position.x<=point9.position.x && point20.position.y<=point9.position.y);
            slope3directionx=-1;
            slope3directiony=-1
        }
        else if (p9y==p5y) {
            case3=(point20.position.x<=point9.position.x);
            slope3directionx=-1;
        }

    }
    else if (p9x==p5x) {
        if (p9y>p5y) {
            case3=(point20.position.y>=point9.position.y);
            slope3directiony=-1;
        }
        else if (p9y<p5y) {
             case3=(point20.position.y<=point9.position.y);

        }
    }



    slope4=Math.atan((p7y-p9y)/(p7x-p9x));
     if (p7x>p9x) {
        if (p7y>p9y) {
            case4=(point20.position.x>=point7.position.x && point20.position.y>=point7.position.y);
            slope4directionx=1;
            slope4directiony=1;
        }
        else if (p7y<p9y) {
            case4=(point20.position.x>=point7.position.x && point20.position.y<=point7.position.y);
            slope4directionx=1;
            slope4directiony=1
        }
        else if (p7y==p9y) {
            case4=(point20.position.x>=point7.position.x);
            slope4directionx=1;
        }
        
     }
    else if (p7x<p9x) {
         if (p7y>p9y) {
            case4=(point20.position.x<=point7.position.x && point20.position.y>=point7.position.y);
            slope4directionx=-1;
            slope4directiony=-1;
        }
        else if (p7y<p9y) {
            case4=(point20.position.x<=point7.position.x && point20.position.y<=point7.position.y);
            slope4directionx=-1;
            slope4directiony=-1
        }
        else if (p7y==p9y) {
            case4=(point20.position.x<=point7.position.x);
            slope4directionx=-1;
        }

    }
    else if (p7x==p9x) {
        if (p7y>p9y) {
            case4=(point20.position.y>=point7.position.y);
            slope4directiony=-1;
        }
        else if (p7y<p9y) {
             case4=(point20.position.y<=point7.position.y);

        }
    }



    slope5=Math.atan((p8y-p7y)/(p8x-p7x));
     if (p8x>p7x) {
        if (p8y>p7y) {
            case5=(point20.position.x>=point8.position.x && point20.position.y>=point8.position.y);
            slope5directionx=1;
            slope5directiony=1;
        }
        else if (p8y<p7y) {
            case5=(point20.position.x>=point8.position.x && point20.position.y<=point8.position.y);
            slope5directionx=1;
            slope5directiony=1
        }
        else if (p8y==p7y) {
            case5=(point20.position.x>=point8.position.x);
            slope5directionx=1;
        }
        
     }
    else if (p8x<p7x) {
         if (p8y>p7y) {
            case5=(point20.position.x<=point8.position.x && point20.position.y>=point8.position.y);
            slope5directionx=-1;
            slope5directiony=-1;
        }
        else if (p8y<p7y) {
            case5=(point20.position.x<=point8.position.x && point20.position.y<=point8.position.y);
            slope5directionx=-1;
            slope5directiony=-1
        }
        else if (p8y==p7y) {
            case5=(point20.position.x<=point8.position.x);
            slope5directionx=-1;
        }

    }
    else if (p8x==p7x) {
        if (p8y>p7y) {
            case5=(point20.position.y>=point8.position.y);
            slope5directiony=-1;
        }
        else if (p8y<p7y) {
             case5=(point20.position.y<=point8.position.y);

        }
    }



    slope6=Math.atan((p2y-p8y)/(p2x-p8x));
     if (p2x>p8x) {
        if (p2y>p8y) {
            case6=(point20.position.x>=point2.position.x && point20.position.y>=point2.position.y);
            slope6directionx=1;
            slope6directiony=1;
        }
        else if (p2y<p8y) {
            case6=(point20.position.x>=point2.position.x && point20.position.y<=point2.position.y);
            slope6directionx=1;
            slope6directiony=1
        }
        else if (p2y==p8y) {
            case6=(point20.position.x>=point2.position.x);
            slope6directionx=1;
        }
        
     }
    else if (p2x<p8x) {
         if (p2y>p8y) {
            case6=(point20.position.x<=point2.position.x && point20.position.y>=point2.position.y);
            slope6directionx=-1;
            slope6directiony=-1;
        }
        else if (p2y<p8y) {
            case6=(point20.position.x<=point2.position.x && point20.position.y<=point2.position.y);
            slope6directionx=-1;
            slope6directiony=-1
        }
        else if (p2y==p8y) {
            case6=(point20.position.x<=point2.position.x);
            slope6directionx=-1;
        }

    }
    else if (p2x==p8x) {
        if (p2y>p8y) {
            case6=(point20.position.y>=point2.position.y);
            slope6directiony=-1;
        }
        
        else if (p2y<p8y) {
             case6=(point20.position.y<=point2.position.y);

        }
    }



    }
    else if (verticesno==7) {



        slope1=Math.atan((p4y-p2y)/(p4x-p2x));
     if (p4x>p2x) {
        if (p4y>p2y) {
            case1=(point20.position.x>=point4.position.x && point20.position.y>=point4.position.y);
            slope1directionx=1;
            slope1directiony=1;
        }
        else if (p4y<p2y) {
            case1=(point20.position.x>=point4.position.x && point20.position.y<=point4.position.y);
            slope1directionx=1;
            slope1directiony=1
        }
        else if (p4y==p2y) {
            case1=(point20.position.x>=point4.position.x);
            slope1directionx=1;
        }
        
     }
    else if (p4x<p2x) {
         if (p4y>p2y) {
            case1=(point20.position.x<=point4.position.x && point20.position.y>=point4.position.y);
            slope1directionx=-1;
            slope1directiony=-1;
        }
        else if (p4y<p2y) {
            case1=(point20.position.x<=point4.position.x && point20.position.y<=point4.position.y);
            slope1directionx=-1;
            slope1directiony=-1
        }
        else if (p4y==p2y) {
            case1=(point20.position.x<=point4.position.x);
            slope1directionx=-1;
        }

    }
    else if (p4x==p2x) {
        if (p4y>p2y) {
            case1=(point20.position.y>=point4.position.y);
            slope1directiony=-1;
        }
        else if (p4y<p2y) {
            case1=(point20.position.y<=point4.position.y);
            // slope1directiony=-1;
        }
    }



    slope2=Math.atan((p5y-p4y)/(p5x-p4x));
     if (p5x>p4x) {
        if (p5y>p4y) {
            case2=(point20.position.x>=point5.position.x && point20.position.y>=point5.position.y);
            slope2directionx=1;
            slope2directiony=1;
        }
        else if (p5y<p4y) {
             case2=(point20.position.x>=point5.position.x && point20.position.y<=point5.position.y);
            slope2directionx=1;
            slope2directiony=1
        }
        else if (p5y==p4y) {
            case2=(point20.position.x>=point5.position.x);
            slope2directionx=1;
        }
        
     }
    else if (p5x<p4x) {
         if (p5y>p4y) {
            case2=(point20.position.x<=point5.position.x && point20.position.y>=point5.position.y);
            slope2directionx=-1;
            slope2directiony=-1;
        }
        else if (p5y<p4y) {
            case2=(point20.position.x<=point5.position.x && point20.position.y<=point5.position.y);
            slope2directionx=-1;
            slope2directiony=-1
        }
        else if (p5y==p4y) {
             case2=(point20.position.x<=point5.position.x);
            slope2directionx=-1;
        }

    }
    else if (p5x==p4x) {
        if (p5y>p4y) {
            case2=(point20.position.y>=point5.position.y);
            slope2directiony=-1;
        }
        else if (p5y<p4y) {
            case2=(point20.position.y<=point5.position.y);
        }
    }



    slope3=Math.atan((p10y-p5y)/(p10x-p5x));
     if (p10x>p5x) {
        if (p10y>p5y) {
            case3=(point20.position.x>=point10.position.x && point20.position.y>=point10.position.y);
            slope3directionx=1;
            slope3directiony=1;
        }
        else if (p10y<p5y) {
            case3=(point20.position.x>=point10.position.x && point20.position.y<=point10.position.y);
            slope3directionx=1;
            slope3directiony=1
        }
        else if (p10y==p5y) {
            case3=(point20.position.x>=point10.position.x);
            slope3directionx=1;
        }
        
     }
    else if (p10x<p5x) {
         if (p10y>p5y) {
            case3=(point20.position.x<=point10.position.x && point20.position.y>=point10.position.y);
            slope3directionx=-1;
            slope3directiony=-1;
        }
        else if (p10y<p5y) {
            case3=(point20.position.x<=point10.position.x && point20.position.y<=point10.position.y);
            slope3directionx=-1;
            slope3directiony=-1
        }
        else if (p10y==p5y) {
            case3=(point20.position.x<=point10.position.x);
            slope3directionx=-1;
        }

    }
    else if (p10x==p5x) {
        if (p10y>p5y) {
            case3=(point20.position.y>=point10.position.y);
            slope3directiony=-1;
        }
        else if (p10y<p5y) {
             case3=(point20.position.y<=point10.position.y);

        }
    }



    slope4=Math.atan((p11y-p10y)/(p11x-p10x));
     if (p11x>p10x) {
        if (p11y>p10y) {
            case4=(point20.position.x>=point11.position.x && point20.position.y>=point11.position.y);
            slope4directionx=1;
            slope4directiony=1;
        }
        else if (p11y<p10y) {
            case4=(point20.position.x>=point11.position.x && point20.position.y<=point11.position.y);
            slope4directionx=1;
            slope4directiony=1
        }
        else if (p11y==p10y) {
            case4=(point20.position.x>=point11.position.x);
            slope4directionx=1;
        }
        
     }
    else if (p11x<p10x) {
         if (p11y>p10y) {
            case4=(point20.position.x<=point11.position.x && point20.position.y>=point11.position.y);
            slope4directionx=-1;
            slope4directiony=-1;
        }
        else if (p11y<p10y) {
            case4=(point20.position.x<=point11.position.x && point20.position.y<=point11.position.y);
            slope4directionx=-1;
            slope4directiony=-1
        }
        else if (p11y==p10y) {
            case4=(point20.position.x<=point11.position.x);
            slope4directionx=-1;
        }

    }
    else if (p11x==p10x) {
        if (p11y>p10y) {
            case4=(point20.position.y>=point11.position.y);
            slope4directiony=-1;
        }
        else if (p11y<p10y) {
             case4=(point20.position.y<=point11.position.y);

        }
    }



    slope5=Math.atan((p7y-p11y)/(p7x-p11x));
     if (p7x>p11x) {
        if (p7y>p11y) {
            case5=(point20.position.x>=point7.position.x && point20.position.y>=point7.position.y);
            slope5directionx=1;
            slope5directiony=1;
        }
        else if (p7y<p11y) {
            case5=(point20.position.x>=point7.position.x && point20.position.y<=point7.position.y);
            slope5directionx=1;
            slope5directiony=1
        }
        else if (p7y==p11y) {
            case5=(point20.position.x>=point7.position.x);
            slope5directionx=1;
        }
        
     }
    else if (p7x<p11x) {
         if (p7y>p11y) {
            case5=(point20.position.x<=point7.position.x && point20.position.y>=point7.position.y);
            slope5directionx=-1;
            slope5directiony=-1;
        }
        else if (p7y<p11y) {
            case5=(point20.position.x<=point7.position.x && point20.position.y<=point7.position.y);
            slope5directionx=-1;
            slope5directiony=-1
        }
        else if (p7y==p11y) {
            case5=(point20.position.x<=point7.position.x);
            slope5directionx=-1;
        }

    }
    else if (p7x==p11x) {
        if (p7y>p11y) {
            case5=(point20.position.y>=point7.position.y);
            slope5directiony=-1;
        }
        else if (p7y<p11y) {
             case5=(point20.position.y<=point7.position.y);

        }
    }



    slope6=Math.atan((p8y-p7y)/(p8x-p7x));
     if (p8x>p7x) {
        if (p8y>p7y) {
            case6=(point20.position.x>=point8.position.x && point20.position.y>=point8.position.y);
            slope6directionx=1;
            slope6directiony=1;
        }
        else if (p8y<p7y) {
            case6=(point20.position.x>=point8.position.x && point20.position.y<=point8.position.y);
            slope6directionx=1;
            slope6directiony=1
        }
        else if (p8y==p7y) {
            case6=(point20.position.x>=point8.position.x);
            slope6directionx=1;
        }
        
     }
    else if (p8x<p7x) {
         if (p8y>p7y) {
            case6=(point20.position.x<=point8.position.x && point20.position.y>=point8.position.y);
            slope6directionx=-1;
            slope6directiony=-1;
        }
        else if (p8y<p7y) {
            case6=(point20.position.x<=point8.position.x && point20.position.y<=point8.position.y);
            slope6directionx=-1;
            slope6directiony=-1
        }
        else if (p8y==p7y) {
            case6=(point20.position.x<=point8.position.x);
            slope6directionx=-1;
        }

    }
    else if (p8x==p7x) {
        if (p8y>p7y) {
            case6=(point20.position.y>=point8.position.y);
            slope6directiony=-1;
        }
        
        else if (p8y<p7y) {
             case6=(point20.position.y<=point8.position.y);

        }
    }





    slope7=Math.atan((p2y-p8y)/(p2x-p8x));
     if (p2x>p8x) {
        if (p2y>p8y) {
            case7=(point20.position.x>=point2.position.x && point20.position.y>=point2.position.y);
            slope7directionx=1;
            slope7directiony=1;
        }
        else if (p2y<p8y) {
            case7=(point20.position.x>=point2.position.x && point20.position.y<=point2.position.y);
            slope7directionx=1;
            slope7directiony=1
        }
        else if (p2y==p8y) {
            case7=(point20.position.x>=point2.position.x);
            slope7directionx=1;
        }
        
     }
    else if (p2x<p8x) {
         if (p2y>p8y) {
            case7=(point20.position.x<=point2.position.x && point20.position.y>=point2.position.y);
            slope7directionx=-1;
            slope7directiony=-1;
        }
        else if (p2y<p8y) {
            case7=(point20.position.x<=point2.position.x && point20.position.y<=point2.position.y);
            slope7directionx=-1;
            slope7directiony=-1
        }
        else if (p2y==p8y) {
            case7=(point20.position.x<=point2.position.x);
            slope7directionx=-1;
        }

    }
    else if (p2x==p8x) {
        if (p2y>p8y) {
            case7=(point20.position.y>=point2.position.y);
            slope7directiony=-1;
        }
        
        else if (p2y<p8y) {
             case7=(point20.position.y<=point2.position.y);

        }
    }

        
    }
    else if (verticesno==8) {



        slope1=Math.atan((p13y-p12y)/(p13x-p12x));
     if (p13x>p12x) {
        if (p13y>p12y) {
            case1=(point20.position.x>=point13.position.x && point20.position.y>=point13.position.y);
            slope1directionx=1;
            slope1directiony=1;
        }
        else if (p13y<p12y) {
            case1=(point20.position.x>=point13.position.x && point20.position.y<=point13.position.y);
            slope1directionx=1;
            slope1directiony=1
        }
        else if (p13y==p12y) {
            case1=(point20.position.x>=point13.position.x);
            slope1directionx=1;
        }
        
     }
    else if (p13x<p12x) {
         if (p13y>p12y) {
            case1=(point20.position.x<=point13.position.x && point20.position.y>=point13.position.y);
            slope1directionx=-1;
            slope1directiony=-1;
        }
        else if (p13y<p12y) {
            case1=(point20.position.x<=point13.position.x && point20.position.y<=point13.position.y);
            slope1directionx=-1;
            slope1directiony=-1
        }
        else if (p13y==p12y) {
            case1=(point20.position.x<=point13.position.x);
            slope1directionx=-1;
        }

    }
    else if (p13x==p12x) {
        if (p13y>p12y) {
            case1=(point20.position.y>=point13.position.y);
            slope1directiony=-1;
        }
        else if (p13y<p12y) {
            case1=(point20.position.y<=point13.position.y);
            // slope1directiony=-1;
        }
    }



    slope2=Math.atan((p4y-p13y)/(p4x-p13x));
     if (p4x>p13x) {
        if (p4y>p13y) {
            case2=(point20.position.x>=point4.position.x && point20.position.y>=point4.position.y);
            slope2directionx=1;
            slope2directiony=1;
        }
        else if (p4y<p13y) {
            case2=(point20.position.x>=point4.position.x && point20.position.y<=point4.position.y);
            slope2directionx=1;
            slope2directiony=1
        }
        else if (p4y==p13y) {
            case2=(point20.position.x>=point4.position.x);
            slope2directionx=1;
        }
        
     }
    else if (p4x<p13x) {
         if (p4y>p13y) {
            case2=(point20.position.x<=point4.position.x && point20.position.y>=point4.position.y);
            slope2directionx=-1;
            slope2directiony=-1;
        }
        else if (p4y<p13y) {
            case2=(point20.position.x<=point4.position.x && point20.position.y<=point4.position.y);
            slope2directionx=-1;
            slope2directiony=-1
        }
        else if (p4y==p13y) {
            case2=(point20.position.x<=point4.position.x);
            slope2directionx=-1;
        }

    }
    else if (p4x==p13x) {
        if (p4y>p13y) {
            case2=(point20.position.y>=point4.position.y);
            slope2directiony=-1;
        }
        else if (p4y<p13y) {
            case2=(point20.position.y<=point4.position.y);
            // slope1directiony=-1;
        }
    }



    slope3=Math.atan((p5y-p4y)/(p5x-p4x));
     if (p5x>p4x) {
        if (p5y>p4y) {
            case3=(point20.position.x>=point5.position.x && point20.position.y>=point5.position.y);
            slope3directionx=1;
            slope3directiony=1;
        }
        else if (p5y<p4y) {
             case3=(point20.position.x>=point5.position.x && point20.position.y<=point5.position.y);
            slope3directionx=1;
            slope3directiony=1
        }
        else if (p5y==p4y) {
            case3=(point20.position.x>=point5.position.x);
            slope3directionx=1;
        }
        
     }
    else if (p5x<p4x) {
         if (p5y>p4y) {
            case3=(point20.position.x<=point5.position.x && point20.position.y>=point5.position.y);
            slope3directionx=-1;
            slope3directiony=-1;
        }
        else if (p5y<p4y) {
            case3=(point20.position.x<=point5.position.x && point20.position.y<=point5.position.y);
            slope3directionx=-1;
            slope3directiony=-1
        }
        else if (p5y==p4y) {
             case3=(point20.position.x<=point5.position.x);
            slope3directionx=-1;
        }

    }
    else if (p5x==p4x) {
        if (p5y>p4y) {
            case3=(point20.position.y>=point5.position.y);
            slope3directiony=-1;
        }
        else if (p5y<p4y) {
            case3=(point20.position.y<=point5.position.y);
        }
    }



    slope4=Math.atan((p10y-p5y)/(p10x-p5x));
     if (p10x>p5x) {
        if (p10y>p5y) {
            case4=(point20.position.x>=point10.position.x && point20.position.y>=point10.position.y);
            slope4directionx=1;
            slope4directiony=1;
        }
        else if (p10y<p5y) {
            case4=(point20.position.x>=point10.position.x && point20.position.y<=point10.position.y);
            slope4directionx=1;
            slope4directiony=1
        }
        else if (p10y==p5y) {
            case4=(point20.position.x>=point10.position.x);
            slope4directionx=1;
        }
        
     }
    else if (p10x<p5x) {
         if (p10y>p5y) {
            case4=(point20.position.x<=point10.position.x && point20.position.y>=point10.position.y);
            slope4directionx=-1;
            slope4directiony=-1;
        }
        else if (p10y<p5y) {
            case4=(point20.position.x<=point10.position.x && point20.position.y<=point10.position.y);
            slope4directionx=-1;
            slope4directiony=-1
        }
        else if (p10y==p5y) {
            case4=(point20.position.x<=point10.position.x);
            slope4directionx=-1;
        }

    }
    else if (p10x==p5x) {
        if (p10y>p5y) {
            case4=(point20.position.y>=point10.position.y);
            slope4directiony=-1;
        }
        else if (p10y<p5y) {
             case4=(point20.position.y<=point10.position.y);

        }
    }



    slope5=Math.atan((p11y-p10y)/(p11x-p10x));
     if (p11x>p10x) {
        if (p11y>p10y) {
            case5=(point20.position.x>=point11.position.x && point20.position.y>=point11.position.y);
            slope5directionx=1;
            slope5directiony=1;
        }
        else if (p11y<p10y) {
            case5=(point20.position.x>=point11.position.x && point20.position.y<=point11.position.y);
            slope5directionx=1;
            slope5directiony=1
        }
        else if (p11y==p10y) {
            case5=(point20.position.x>=point11.position.x);
            slope5directionx=1;
        }
        
     }
    else if (p11x<p10x) {
         if (p11y>p10y) {
            case5=(point20.position.x<=point11.position.x && point20.position.y>=point11.position.y);
            slope5directionx=-1;
            slope5directiony=-1;
        }
        else if (p11y<p10y) {
            case5=(point20.position.x<=point11.position.x && point20.position.y<=point11.position.y);
            slope5directionx=-1;
            slope5directiony=-1
        }
        else if (p11y==p10y) {
            case5=(point20.position.x<=point11.position.x);
            slope5directionx=-1;
        }

    }
    else if (p11x==p10x) {
        if (p11y>p10y) {
            case5=(point20.position.y>=point11.position.y);
            slope5directiony=-1;
        }
        else if (p11y<p10y) {
             case5=(point20.position.y<=point11.position.y);

        }
    }



    slope6=Math.atan((p7y-p11y)/(p7x-p11x));
     if (p7x>p11x) {
        if (p7y>p11y) {
            case6=(point20.position.x>=point7.position.x && point20.position.y>=point7.position.y);
            slope6directionx=1;
            slope6directiony=1;
        }
        else if (p7y<p11y) {
            case6=(point20.position.x>=point7.position.x && point20.position.y<=point7.position.y);
            slope6directionx=1;
            slope6directiony=1
        }
        else if (p7y==p11y) {
            case6=(point20.position.x>=point7.position.x);
            slope6directionx=1;
        }
        
     }
    else if (p7x<p11x) {
         if (p7y>p11y) {
            case6=(point20.position.x<=point7.position.x && point20.position.y>=point7.position.y);
            slope6directionx=-1;
            slope6directiony=-1;
        }
        else if (p7y<p11y) {
            case6=(point20.position.x<=point7.position.x && point20.position.y<=point7.position.y);
            slope6directionx=-1;
            slope6directiony=-1
        }
        else if (p7y==p11y) {
            case6=(point20.position.x<=point7.position.x);
            slope6directionx=-1;
        }

    }
    else if (p7x==p11x) {
        if (p7y>p11y) {
            case6=(point20.position.y>=point7.position.y);
            slope6directiony=-1;
        }
        else if (p7y<p11y) {
             case6=(point20.position.y<=point7.position.y);

        }
    }



    slope7=Math.atan((p8y-p7y)/(p8x-p7x));
     if (p8x>p7x) {
        if (p8y>p7y) {
            case7=(point20.position.x>=point8.position.x && point20.position.y>=point8.position.y);
            slope7directionx=1;
            slope7directiony=1;
        }
        else if (p8y<p7y) {
            case7=(point20.position.x>=point8.position.x && point20.position.y<=point8.position.y);
            slope7directionx=1;
            slope7directiony=1
        }
        else if (p8y==p7y) {
            case7=(point20.position.x>=point8.position.x);
            slope7directionx=1;
        }
        
     }
    else if (p8x<p7x) {
         if (p8y>p7y) {
            case7=(point20.position.x<=point8.position.x && point20.position.y>=point8.position.y);
            slope7directionx=-1;
            slope7directiony=-1;
        }
        else if (p8y<p7y) {
            case7=(point20.position.x<=point8.position.x && point20.position.y<=point8.position.y);
            slope7directionx=-1;
            slope7directiony=-1
        }
        else if (p8y==p7y) {
            case7=(point20.position.x<=point8.position.x);
            slope7directionx=-1;
        }

    }
    else if (p8x==p7x) {
        if (p8y>p7y) {
            case7=(point20.position.y>=point8.position.y);
            slope7directiony=-1;
        }
        
        else if (p8y<p7y) {
             case7=(point20.position.y<=point8.position.y);

        }
    }





    slope8=Math.atan((p12y-p8y)/(p12x-p8x));
     if (p12x>p8x) {
        if (p12y>p8y) {
            case8=(point20.position.x>=point12.position.x && point20.position.y>=point12.position.y);
            slope8directionx=1;
            slope8directiony=1;
        }
        else if (p12y<p8y) {
            case8=(point20.position.x>=point12.position.x && point20.position.y<=point12.position.y);
            slope8directionx=1;
            slope8directiony=1
        }
        else if (p12y==p8y) {
            case8=(point20.position.x>=point12.position.x);
            slope87directionx=1;
        }
        
     }
    else if (p12x<p8x) {
         if (p12y>p8y) {
            case8=(point20.position.x<=point12.position.x && point20.position.y>=point12.position.y);
            slope8directionx=-1;
            slope8directiony=-1;
        }
        else if (p12y<p8y) {
            case8=(point20.position.x<=point12.position.x && point20.position.y<=point12.position.y);
            slope8directionx=-1;
            slope8directiony=-1
        }
        else if (p12y==p8y) {
            case8=(point20.position.x<=point12.position.x);
            slope8directionx=-1;
        }

    }
    else if (p12x==p8x) {
        if (p12y>p8y) {
            case8=(point20.position.y>=point12.position.y);
            slope8directiony=-1;
        }
        
        else if (p12y<p8y) {
             case8=(point20.position.y<=point12.position.y);

        }
    }

        
    }


    else{
     slope1=Math.atan((p2y-p1y)/(p2x-p1x));


     if (p2x>p1x) {
        if (p2y>p1y) {
            slope1directionx=1;
            slope1directiony=1;
        }
        else if (p2y<p1y) {
            slope1directionx=1;
            slope1directiony=1
        }
        else if (p2y==p1y) {
            slope1directionx=1;
        }
        
     }
    else if (p2x<p1x) {
         if (p2y>p1y) {
            slope1directionx=-1;
            slope1directiony=-1;
        }
        else if (p2y<p1y) {
            slope1directionx=-1;
            slope1directiony=-1
        }
        else if (p2y==p1y) {
            slope1directionx=-1;
        }

    }
    else if (p2x==p1x) {
        if (p2y>p1y) {
            slope1directiony=-1;
        }
    }




 slope2=Math.atan((p3y-p2y)/(p3x-p2x));;
  if (p3x>p2x) {
        if (p3y>p2y) {
            slope2directionx=1;
            slope2directiony=1;
        }
        else if (p3y<p2y) {
            slope2directionx=1;
            slope2directiony=1
        }
         else if (p3y==p2y) {
            slope2directionx=1;
        }
        
     }
    else if (p3x<p2x) {
         if (p3y>p2y) {
            slope2directionx=-1;
            slope2directiony=-1;
        }
        else if (p3y<p2y) {
            slope2directionx=-1;
            slope2directiony=-1
        }
         else if (p3y==p2y) {
            slope2directionx=-1;
        }
    }




 slope3=Math.atan((p4y-p3y)/(p4x-p3x));
 if (p4x>p3x) {
        if (p4y>p3y) {
            slope3directionx=1;
            slope3directiony=1;
        }
        else if (p4y<p3y) {
            slope3directionx=1;
            slope3directiony=1
        }
         else if (p4y==p3y) {
            slope3directionx=1;
        }
        
     }
    else if (p4x<p3x) {
         if (p4y>p3y) {
            slope3directionx=-1;
            slope3directiony=-1;
        }
        else if (p4y<p3y) {
            slope3directionx=-1;
            slope3directiony=-1
        }
         else if (p4y==p3y) {
            slope3directionx=-1;
        }
    }


slope4=Math.atan((p5y-p4y)/(p5x-p4x));
 if (p5x>p4x) {
        if (p5y>p4y) {
            slope4directionx=1;
            slope4directiony=1;
        }
        else if (p5y<p4y) {
            slope4directionx=1;
            slope4directiony=1
        }
         else if (p5y==p4y) {
            slope4directionx=1;
        }
        
     }
    else if (p5x<p4x) {
         if (p5y>p4y) {
            slope4directionx=-1;
            slope4directiony=-1;
        }
        else if (p5y<p4y) {
            slope4directionx=-1;
            slope4directiony=-1
        }
         else if (p5y==p4y) {
            slope4directionx=-1;
        }
    }


    slope5=Math.atan((p6y-p5y)/(p6x-p5x));
 if (p6x>p5x) {
        if (p6y>p5y) {
            slope5directionx=1;
            slope5directiony=1;
        }
        else if (p6y<p5y) {
            slope5directionx=1;
            slope5directiony=1
        }
         else if (p6y==p5y) {
            slope5directionx=1;
        }
        
     }
    else if (p6x<p5x) {
         if (p6y>p5y) {
            slope5directionx=-1;
            slope5directiony=-1;
        }
        else if (p6y<p5y) {
            slope5directionx=-1;
            slope5directiony=-1
        }
         else if (p6y==p5y) {
            slope5directionx=-1;
        }
    }


     slope6=Math.atan((p7y-p6y)/(p7x-p6x));
 if (p7x>p6x) {
        if (p7y>p6y) {
            slope6directionx=1;
            slope6directiony=1;
        }
        else if (p7y<p6y) {
            slope6directionx=1;
            slope6directiony=1
        }
         else if (p7y==p6y) {
            slope6directionx=1;
        }
        
     }
    else if (p7x<p6x) {
         if (p7y>p6y) {
            slope6directionx=-1;
            slope6directiony=-1;
        }
        else if (p7y<p6y) {
            slope6directionx=-1;
            slope6directiony=-1
        }
         else if (p7y==p6y) {
            slope6directionx=-1;
        }
    }   


     slope7=Math.atan((p8y-p7y)/(p8x-p7x));
 if (p8x>p7x) {
        if (p8y>p7y) {
            slope7directionx=1;
            slope7directiony=1;
        }
        else if (p8y<p7y) {
            slope7directionx=1;
            slope7directiony=1
        }
         else if (p8y==p7y) {
            slope7directionx=1;
        }
        
     }
    else if (p8x<p7x) {
         if (p8y>p7y) {
            slope7directionx=-1;
            slope7directiony=-1;
        }
        else if (p8y<p7y) {
            slope7directionx=-1;
            slope7directiony=-1
        }
         else if (p8y==p7y) {
            slope7directionx=-1;
        }
    }   


     slope8=Math.atan((p1y-p8y)/(p1x-p8x));
 if (p1x>p8x) {
        if (p1y>p8y) {
            slope8directionx=1;
            slope8directiony=1;
        }
        else if (p1y<p8y) {
            slope8directionx=1;
            slope8directiony=1
        }
         else if (p1y==p8y) {
            slope8directionx=1;
        }
        
     }
    else if (p1x<p8x) {
         if (p1y>p8y) {
            slope8directionx=-1;
            slope8directiony=-1;
        }
        else if (p1y<p8y) {
            slope8directionx=-1;
            slope8directiony=-1
        }
         else if (p1y==p8y) {
            slope8directionx=-1;
        }
    }   
}

}
/******************* Update (animation changes) code ***********************/
