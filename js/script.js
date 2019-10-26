// A javascript-enhanced crossword puzzle
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
			 	{
					clue: "Jiayu pretends to come from this city",
					answer: "shanghai",
					position: 1,
					orientation: "across",
					startx: 3,
					starty: 1
				},
			 	{
					clue: "Hina will celebrate this festival this month",
					answer: "diwali",
					position: 2,
					orientation: "across",
					startx: 3,
					starty: 2
				},
				{
					clue: "Ewelina left us to take on that job",
					answer: "consultant",
					position: 3,
					orientation: "across",
					startx: 2,
					starty: 3
				},
				{
					clue: "He is Rishab's favourite superhero",
					answer: "batman",
					position: 4,
					orientation: "across",
					startx: 3,
					starty: 4
				},
				{
					clue: "Hina can read our mind because she studied this",
					answer: "psychology",
					position: 5,
					orientation: "across",
					startx: 1,
					starty: 5
				},
				{
					clue: "Ewelina got two lapdances during this show",
					answer: "magicmike",
					position: 6,
					orientation: "across",
					startx: 2,
					starty: 6
				},
				{
					clue: "Ewelina grow these creatures in her garden",
					answer: "snails",
					position: 7,
					orientation: "across",
					startx: 5,
					starty: 7
				},
				{
					clue: "Dylan's leaving do",
					answer: "karaoke",
					position: 8,
					orientation: "across",
					startx: 3,
					starty: 8
				},
				{
					clue: "The name of mount on the island Sophie is from",
					answer: "pelee",
					position: 9,
					orientation: "across",
					startx: 6,
					starty: 9
				},
				{
					clue: "Dylan got a weird accent, in which country did he grow up?",
					answer: "Australia",
					position: 10,
					orientation: "across",
					startx: 2,
					starty: 10
				},
				{
					clue: "We got stuck in a police van with him and tried to escape",
					answer: "raven",
					position: 11,
					orientation: "across",
					startx: 3,
					starty: 11
				},
				{
					clue: "Marion is currently learning this",
					answer: "coding",
					position: 12,
					orientation: "across",
					startx: 1,
					starty: 12
				},
				{
					clue: "Marion beats people up in this martial art",
					answer: "kendo",
					position: 13,
					orientation: "across",
					startx: 4,
					starty: 13
				},
				{
					clue: "Wild animal we can see in the office",
					answer: "meerkat",
					position: 14,
					orientation: "across",
					startx: 1,
					starty: 14
				},
				{
					clue: "Something in Sophie's living room which annoys her no end",
					answer: "cabinet",
					position: 15,
					orientation: "across",
					startx: 2,
					starty: 15
				},
				{
					clue: "What is Sophie's partner profession?",
					answer: "optician",
					position: 16,
					orientation: "across",
					startx: 4,
					starty: 16
				},

			]

		$('#puzzle-wrapper').crossword(puzzleData);

	})

})(jQuery)
