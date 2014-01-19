/*
		Developed by: Roman Asimov
		Lizens: GNU Public
		Requires: jQeruy and jQuery UI 1.9..
*/

window.onload=function()
{

	/*
	 * Fades the background by changing the CSS classes radomly
	 */
	function fadeRandom()
	{
		var fadestart, fadeend,
			fadespeed = 6000,
			classes = ["fadeblue", "fadered", "fadegreen", "fadeyellow", "fadecyan"],
			len = classes.length,
			element = $("body"); // Set your colors value

		setInterval(function(){
			fadestart =  Math.floor(len*Math.random());
			fadeend =  Math.floor(len*Math.random());

			// avoid same index for "end class"
			while(fadeend === fadestart){
				fadeend =  Math.floor(len*Math.random());
			}

			element.switchClass( classes[fadestart], classes[fadeend], fadespeed, "easeInOutQuad" );
		}, 1000);
	}

	/*
	 * Fades the background by using the order of the CSS classes in the classes array
	 */
	function fadeByOrder()
	{
		var fadestatus = 0,
			fadespeed = 6000,
			classes = ["fadeblue", "fadered", "fadegreen", "fadeyellow", "fadecyan"],
			len = classes.length,
			element = $("body"); // Set your colors value

		// set first class also to the end of array
		classes.push(classes[0]);

		setInterval(function(){
			element.switchClass( classes[fadestatus], classes[fadestatus+1], fadespeed, "easeInOutQuad" );
			fadestatus =  Math.floor(len*Math.random());
		}, 1000);
	}

	fadeRandom();
}
