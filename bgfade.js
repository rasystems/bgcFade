/*
		Developed by: Roman Asimov
		Lizens: GNU Public
		Requires: jQeruy and jQuery UI 1.9..
*/

function startfade()
{
	var fadestatus = 0,
	maxcolors = 4; // Set your colors value

	setInterval(function(){

		while(fadestatus == 0) // set thes counters
		{
			$("body").switchClass( "fadeblue", "fadered", 6000, "easeInOutQuad" );
			fadestatus =  Math.floor(0 + (1+maxcolors-0)*Math.random());
		}
		while(fadestatus == 1)
		{
			$("body").switchClass( "fadered", "fadegreen", 6000, "easeInOutQuad" );
			fadestatus =  Math.floor(0 + (1+maxcolors-0)*Math.random());
		}
		while(fadestatus == 2)
		{
			$("body").switchClass( "fadegreen", "fadeyellow", 6000, "easeInOutQuad" );
			fadestatus =  Math.floor(0 + (1+maxcolors-0)*Math.random());
		}
		while(fadestatus == 3)
		{
			$("body").switchClass( "fadeyellow", "fadecyan", 6000, "easeInOutQuad" );
			fadestatus =  Math.floor(0 + (1+maxcolors-0)*Math.random());
		}
		while(fadestatus == 4)
		{
			$("body").switchClass( "fadecyan", "fadeblue", 6000, "easeInOutQuad" );
			fadestatus =  Math.floor(0 + (1+maxcolors-0)*Math.random());
		}
		
	}, 1000);

}
