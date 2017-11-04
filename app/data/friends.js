// ===============================================================================
// DATA
// Below data will hold all of the possible wizards and their properties.
// Initially we  set it equal to a handful of wizards for possible matching.
// ===============================================================================

var wizardsArray = [
	{
		wizardName: "Harry Potter",
		photo: "https://images.pottermore.com/bxd3o8b291gf/3SQ3X2km8wkQIsQWa02yOY/25f258f21bdbe5f552a4419bb775f4f0/HarryPotter_WB_F4_HarryPotterMidshot_Promo_080615_Port.jpg",
		scores: ["5",
				 "1",
				 "3",
		 		 "5",
		 		 "2",
		 		 "3"]
	},
	{
		wizardName: "Ron Weasly",
		photo: "https://images.pottermore.com/bxd3o8b291gf/7f7njYBbqg0AquIQ6Way0o/f59fb19f88e90dbb84f7ad99e94e2742/RonWeasley_WB_F4_RonAndHarryLookingAtTheirDressrobes_Still_080615_Land.jpg",
		scores: ["5",
				 "2",
				 "3",
		 		 "4",
		 		 "1",
		 		 "4"]
	}
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = wizardsArray;
