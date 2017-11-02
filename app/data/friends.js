// ===============================================================================
// DATA
// Below data will hold all of the possible wizards and their properties.
// Initially we  set it equal to a handful of wizards for possible matching.
// ===============================================================================

var wizardsArray = [
	{
		wizardName: "Harry Potter",
		photo: "https://www.pottermore.com/features/harry-potters-worst-decisions",
		scores: ["5",
				 "1",
				 "3",
		 		 "5",
		 		 "2",
		 		 "3"
	},
	{
		wizardName: "Ron Weasly",
		photo: "https://www.pottermore.com/image/dress-robes",
		scores: ["5",
				 "2",
				 "3",
		 		 "4",
		 		 "1",
		 		 "4"
	}
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = wizardsArray;
