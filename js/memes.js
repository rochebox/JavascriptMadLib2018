

/*

Your Mad Lib Story

/* 
Earlier today, I went to the [dining Hall],
to get a plate of [fruit].  The meal was [breakfast]
so the place was filled with heavenly scents of
[bacon], [waffles] and [omlettes].

When I walked in, however, I was surprised to see
a [large][zebra] in the [dining hall].  It was an
amazing creature with [ black] and [white] stripes 
and also a [horn] at the top of its head.

He said his name was [Roland] and he had come from 
[Tolland].  He was hungry so he stopped for a bite
at the [dining hall].

I was so surprised that I forgot my [waffles], which
started to burn. So we got the day off from school and the
[large] [zebra] flew away.  No one ever believed
that I had seen one.


*/

function doMadLib() {
  		
  		alert("Here is your MadLib.  I'm going to ask some questions now");

  		var dHall = prompt('Please  "give me the name of" a place at a school');
  		var foodItem1 = prompt("Please give me the name of something you like to eat");
  		var mealType = prompt("Please give me the name of a meal you have during the day");
  		var sThing1 = prompt("Please give a word for a smelly thing");
  		var sThing2 = prompt("Please give a word for a second smelly thing");
  		var sThing3 = prompt("Please give a word for a third smelly thing");
  		var animalAdj = prompt ("Now an adjective");
  		var animalObj = prompt ("Please... a large animal or object");
  		var color1 = prompt ("now a color");
  		var color2 = prompt ("please now a second color");
  		var dPattern = prompt("now a decorative pattern");
  		var pMusical = prompt ("Ok, how about a pointy object or musical instrument");
  		var name = prompt ("How about a name?");
  		var origin = prompt ("...a place where someone might come from?");

  		alert("Ok, your mad lib is now below...enjoy!");


  	    var story = 
  	    "Earlier today, I went to the " + dHall  +
		" to get a plate of " + foodItem1 + ".  The meal was " + mealType +
		" so the place was filled with heavenly scents of " +
		sThing1 + ", " + sThing2 + " and " + sThing3 + ". <br> <br>" +

		"When I walked in, however, I was surprised to see " +
		"a " + animalAdj + " " + animalObj + " in the " + dHall + ".  It was an" +
		" amazing creature with " + color1 + " and " + color2 + " " + dPattern + 
		" and also a " + pMusical + " at the top of its head. <br> <br>" +

		"He said his name was " + name + " and he had come from " +
		origin + ".  He was hungry so he stopped for a bite " +
		"at the "  + dHall +    ". <br> <br>" +

		"I was so surprised that I forgot my " + foodItem1 +  ", which " +
		"started to burn -- and the school burnt down. So we got the day off from school and the " +
		 animalAdj + " " + animalObj  + " flew away.  No one ever believed " +
		"that I had seen one."
		//alert(story);



		document.getElementById("finalMadLib").innerHTML = story;
}




