bgFade
======

jQuery Background Color Fader for HTML5 Pages

Instal
------

Just include the backfade.js in your HTML Document.
Something like these: <script type="text/javascript" src="backfade.js"></script>

Now set the destination element whitch will be color fadet and write it in the bgfade.js
Change "body" to your favourit element name: 
$("body").switchClass....

Customizable:

You can set your own colors to use with the color fader.
just define a new css class in your stylesheet or styles definition:

1. New Style class
   Something like these:

   .fadepink
	{
		background: #C438AA;
	}
	
2. Define the new color in the backfade.js
  
   while(fadestatus == 0)
		{
			$("body").switchClass( "fadeblue", "fadepink", 6000, "easeInOutQuad" );
			fadestatus =  Math.floor(0 + (1+4-0)*Math.random());
		}
