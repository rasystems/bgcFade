/*
		Developed by: Roman Asimov - RASystems (c)
		Lizens: GNU Public
		Requires: jQeruy and jQuery UI 1.9..
*/

function startfade()
{
	var fadestatus = 0;

	setInterval(function(){

		while(fadestatus == 0)
		{
			$("body").switchClass( "fadeblue", "fadered", 6000, "easeInOutQuad" );
			fadestatus =  Math.floor(0 + (1+4-0)*Math.random());
		}
		while(fadestatus == 1)
		{
			$("body").switchClass( "fadered", "fadegreen", 6000, "easeInOutQuad" );
			fadestatus =  Math.floor(0 + (1+4-0)*Math.random());
		}
		while(fadestatus == 2)
		{
			$("body").switchClass( "fadegreen", "fadeyellow", 6000, "easeInOutQuad" );
			fadestatus =  Math.floor(0 + (1+4-0)*Math.random());
		}
		while(fadestatus == 3)
		{
			$("body").switchClass( "fadeyellow", "fadecyan", 6000, "easeInOutQuad" );
			fadestatus =  Math.floor(0 + (1+4-0)*Math.random());
		}
		while(fadestatus == 4)
		{
			$("body").switchClass( "fadecyan", "fadeblue", 6000, "easeInOutQuad" );
			fadestatus =  Math.floor(0 + (1+4-0)*Math.random());
		}
		
	}, 1000);

}
