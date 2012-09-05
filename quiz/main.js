// Windows expand to fill browser.
// Zoom:
//     double click
//     widget
// Minimal file to contain a specific layout.  I think most pages will have
// their own main.js


var VIEWER1;

function initViews() {
    //VIEWER = new Viewer(CANVAS,
    //                    [0,0,GL.viewportWidth, GL.viewportHeight],
    //                    source);

	//../tile.php?image=4ecb20134834a302ac000001&name=tqsts.jpg
    var source1 = new Cache("../tile.php?image=4ecb20134834a302ac000001&name=");
    VIEWER1 = new Viewer([0,0, 1400,1000], source1);

    EVENT_MANAGER.AddViewer(VIEWER1);

	//VIEWER1.AddAnnotation([10000, 10000], "Annotation1", [1.0,0.2,0.2]);
	//VIEWER1.AddAnnotation([12000, 11000], "Annotation2", [0,1,0.2]);
    
}

function draw() {
    GL.clear(GL.COLOR_BUFFER_BIT | GL.DEPTH_BUFFER_BIT);
    // This just changes the camera based on the current time.
    VIEWER1.Animate();
    VIEWER1.Draw();	
}


