

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
  	    "Earlier today, I went to the <span class='c'>" 
        + dHall  +
		"</span> to get a plate of <span class='c'>" 
    + foodItem1 + "</span>.  The meal was <span class='c'>" 
    + mealType +
		"</span> so the place was filled with heavenly scents of <span class='c'>" +
		sThing1 + "</span>, <span class='c'>" 
    + sThing2 + "</span> and <span class='c'>" 
    + sThing3 + "</span>. <br> <br>" +

		"When I walked in, however, I was surprised to see <span class='c'>" +
		"a " 
    + animalAdj + "</span> <span class='c'>" 
    + animalObj + "</span> in the <span class='c'>" 
    + dHall + "</span>.  It was an amazing creature with <span class='c'>" 
    + color1 + "</span> and <span class='c'>" 
    + color2 + "</span> <span class='c'>" 
    + dPattern + 
		"</span> and also a <span class='c'>" 
    + pMusical + "</span> at the top of its head. <br> <br>" +

		"He said his name was <span class='c'>" 
    + name + "</span> and he had come from <span class='c'>" +
		origin + "</span>.  He was hungry so he stopped for a bite " +
		"at the <span class='c'>"  
    + dHall +    "</span>. <br> <br>" +

		"I was so surprised that I forgot my <span class='c'>" 
    + foodItem1 +  "</span>, which " +
		"started to burn -- and the school burnt down. So we got the day off from school and the <span class='c'>" +
		 animalAdj + "</span> <span class='c'>" 
     + animalObj  + "</span> flew away.  No one ever believed " +
		"that I had seen one."
		//alert(story);



		document.getElementById("finalMadLib").innerHTML = story;
}




