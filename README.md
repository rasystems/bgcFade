bgcFade
======

jQuery Background Color Fader for HTML5 Pages

Install
-------

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
	
2. Add the new color in the backfade.js classes
  
   classes = ["fadeblue", "fadered", "fadegreen", "fadeyellow", .....]
