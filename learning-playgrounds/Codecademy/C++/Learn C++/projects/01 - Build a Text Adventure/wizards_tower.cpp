#include <iostream>

using namespace std;

const string &PAGE_ONE = string("You see yourself as a little 10-year-old boy again.\nThe weather outside is sunny and quiet.\nOnly a few white puffy clouds are ") +
						 "scattered throughout the sky.\nOnce again you feel the familiar sadness of recently losing your father in the Great War between the Humans and the Evil Hordes.\n" +
						 "All the boys in the village are playing soldiers with wooden swords and you participate in their games as well.\nIt is impossible to not get a scratch on your " +
						 "skin here and there, but your mother has that wonderful healing potion recipe which your uncle brought from the Monastery located beyond the Darkwood Forest, " +
						 "where he faithfully has been serving as a Monk for many years now.\nThe only problem is that one of the ingredients, the MystFlower, which is only found in swamp " +
						 "areas, is almost instinct by now and is nearly impossible to find anymore.\nYour mother is calling you to get back home for dinner.\nSuch a sweet voice she has… " +
						 "Then all of a sudden, you wake up from your dream.\nAbout 15 years have passed since those times and the settlement seems very different now.\nThere is no sunny " +
						 "days anymore.\nA few months ago, black thunderclouds moved in, but no raindrop has fallen since and wide spread hunger has settled in your village due to the crops " +
						 "not growing at all.\nThe people are speculating that the Dark Wizard, who lives up north, beyond the Wicked Graveyard, must have put a curse on your lands.\n" +
						 "Nobody knows for sure, but you are tired of not doing anythingabout it, so you grab your father’s sword, pack your bag with food and water, and leave the village " +
						 "to find and defeat this evil person.\nHowever, you must get to his tower first.\nIt is located beyond the Wicked Graveyard that is on the other side of the Deadly " +
						 "Mountain.\n";

const string &PAGE_TWO = string("\nYou are now in the Darkwood Forest.\nIt is named like that, because the sunlight there is very limited due to the thick forest trees.\n") +
						 "Hunters from your village would come here often to kill dinner for their family.\nYou sense movement in the nearby bushes, but you have no idea what kind of " +
						 "creature that could possibly be.\n";

const string &PAGE_THREE = string("\nIt is no coincidence that the Mountain was named Deadly.\nIt is very unfriendly and as soon as you start climbing, a cold front ") +
						   "moves in very quickly and it causes a snowstorm.\nYou’ve heard that many ages ago, the Jolly Dwarves inhabited the mountain, but during the Great War, the Evil " +
						   "Forces annihilated them all.\nThe word is that their tunnels are actually a passage through the mountain, but nobody has entered them since, so who knows what kind " +
						   "of strange creatures are living there right now.\nHowever, your only other alternative is to hike the extremely narrow snowy trails.\n";

const string &PAGE_FOUR = string("\nIt is a gorgeous day over the Forgotten Wetlands.\nThe sun is shining bright and birds are chirping left and right.\nYou have a ") +
						  "choice of how to approach crossing this landscape area.\n";

const string &PAGE_FIVE = "\nThe Wicked Graveyard is not welcoming at all.\n\nYou have to choose now.\n";

const string &PAGE_SIX = string("\nThe graveyard is not very dangerous when the sun is out as all skeletons, vampires and zombies sleep through the day.\nHowever, ") +
						 "the Evil Wizard notices your presence.\nNot sure if you are a real threat, he only casts a spell that creates a Hungry for Blood Wolf for you to fight.\n";

const string &PAGE_SEVEN = string("\nAll kinds of evil creatures get up from the graves and walk around at night here.\nYou have to fight a Bloodthirsty Zombie and a ") +
						   "Skeleton Warrior.\nYou get to the Wizard's Tower a little bit before sunrise.\n";

const string &PAGE_EIGHT = string("\nYou get right inside the tower and take the round stairs up to the wizard's quarters.\nHe is furious that a normal human is ") +
						   "disturbing his day uninvited.\nHe casts a deadly spell against you.\n";

const string &PAGE_NINE = string("The Evil Wizard is quite surprised that his magic didn’t kill you, so he casts another spell, this time on himself, and his body ") +
						  "changes its shape into a bigger masculine warrior.\nHe grabs his wooden staff and tries to beat you up to death.\n";

const string &PAGE_TEN = string("\nYou enter the dark tunnels of the dwarves.\nYou can feel that the exit is not very far away and you see a light at the end of the ") +
						 "tunnel, but before you get to it, an unpleasant encounter takes place.\nYou are attacked by a Cave Troll!\n";

const string &PAGE_ELEVEN = string("\nIs it not obvious that extremely narrow snowy trails are very difficult to hike during a snowstorm? The wind is strong and the ") +
							"visibility is awful.\nYour left foot slips on the snow.\n";

const string &PAGE_TWELVE = string("\nYou may have not realized, but Cattail and Duckweed plants grow in swamp areas, so as soon as you step in there, you start ") +
							"sinking in the mud.\n";

const string &PAGE_THIRTEEN = string("\nWhile following the path through the wetlands, you catch a glimpse of a very rare flower.\nYour mother used it to heal wounds ") +
							  "and, if your memory serves you right, it is called MistFlower.\nYou reach the end of the swamp area by dawn and continue the adventure at the Graveyard.\n";

const string &PAGE_FOURTEEN = string("\nYou draw your sword and jump into the bushes ready for a fight when you hear a loud human scream on the other side and you see ") +
							  "a person, dressed in monk cloak clothing, running away faster than light.\nYour equipment is too heavy and makes you too slow to be able to catch up with him, " +
							  "so you give up any hope of talking to the guy and you continue walking to the far end of the forest.\nYou know that you shouldn’t jump to conclusions before " +
							  "collecting enough information and the mistake makes you restless, but soon enough you get to the Wicked Graveyard.\n";

const string &PAGE_FIFTEEN = string("\nYou draw your sword and patiently wait to see what comes out of the bushes.\nTo your great surprise, a monastery monk emerges ") +
							 "out of the green leaves.\nApparently, he was berry picking for his brothers over at the monastery.\nAfter you tell him about yourself and about your quest, he tells " +
							 "you that he personally knows your uncle, wishes you success on your journey and gives you his blessing.\n";

const string &PAGE_SIXTEEN = string("Your opponent is quite surprised that you were able to survive his attack.\nYou use that short confusion, which keeps him ") +
							 "unprotected for a moment and slice him in half with your sword.\nYou are victorious! You defeated the evil wizard and your village is now safe for generations to " +
							 "come.\nYou are well celebrated by your fellow villagers.\nIn a sign of appreciation, they even rename the deadly mountain after you.\nCongratulations!\nTHE END.\n";

const string &CHOICE_ONE = string("\n\nRead section 2, if you want to go around the mountain through the Darkwood Forest.\nGo to section 3, if you want to hike through the mountain.\n") +
						   "If you prefer to pass through the Forgotten Wetlands, turn to 4!\n";

const string &CHOICE_TWO = string("\n\nDo you want to use the element of surprise and attack first (go to 14) or would you prefer to draw your sword and patiently wait to ") +
						   "see what comes out of there (go to 15)?\n";

const string &CHOICE_THREE = string("\nIf you want to cross it in the middle of the day, exposing yourself to the wizard in the tower (turn to 6) or ") +
							 "do you want to travel under the cover of the night when you have to face whatever undead creatures live here (turn to 7)?\n";

const string &CHOICE_FOUR = "\nTo enter the tunnels go to 10 or to hike the trails go to 11\n";

const string &CHOICE_FIVE = string("Do you want to walk through the Cattail Plants that are growing on top of Duckweed, so you are not easy ") +
							"to be seen (go to 12) or do you prefer to carefully walk down the path swerving through the wetlands (go to 13)?\n";

const string &GOODBYE = "Program terminating.  Goodbye!\n";

int main()
{
	int input;

	cout << "Short Gamebook Adventure Demo\n";
	cout << "Wizards Tower\n";
	cout << "http://games.sipkoamerica.com/ShortAdventureLogic.pdf\n\n";
	cout << "At any time you can exit the story by typing 0\n";
	cout << "When asked what section you would like, type in the number of the section when prompted.\n\n";
	cout << PAGE_ONE << CHOICE_ONE;
	cin >> input;

	while (input != 0 && input != 2 && input != 3 && input != 4)
	{
		cout << CHOICE_ONE;
		cin >> input;
	}

	if (input == 0)
	{
		cout << GOODBYE;
		return 0;
	}

	else if (input == 2)
	{
		cout << PAGE_TWO << CHOICE_TWO;
		cin >> input;

		while (input != 0 && input != 14 && input != 15)
		{
			cout << CHOICE_TWO;
			cin >> input;
		}
		if (input == 0)
		{
			cout << GOODBYE;
			return 0;
		}
		else if (input == 14)
		{
			cout << PAGE_FOURTEEN << PAGE_FIVE << CHOICE_THREE;
			cin >> input;

			while (input != 0 && input != 6 && input != 7)
			{
				cout << CHOICE_THREE;
				cin >> input;
			}
			if (input == 0)
			{
				cout << GOODBYE;
				return 0;
			}
			else if (input == 6)
			{
				cout << PAGE_SIX << PAGE_EIGHT << PAGE_NINE << PAGE_SIXTEEN << endl;
				return 0;
			}
			else if (input == 7)
			{
				cout << PAGE_SEVEN << PAGE_EIGHT << PAGE_NINE << PAGE_SIXTEEN << endl;
				return 0;
			}
		}

		else if (input == 15)
		{
			cout << PAGE_FIFTEEN << PAGE_FIVE << CHOICE_THREE;
			cin >> input;

			while (input != 0 && input != 6 && input != 7)
			{
				cout << CHOICE_THREE;
				cin >> input;
			}
			if (input == 0)
			{
				cout << GOODBYE;
				return 0;
			}
			else if (input == 6)
			{
				cout << PAGE_SIX << PAGE_EIGHT << PAGE_NINE << PAGE_SIXTEEN << endl;
				return 0;
			}
			else if (input == 7)
			{
				cout << PAGE_SEVEN << PAGE_EIGHT << PAGE_NINE << PAGE_SIXTEEN << endl;
				return 0;
			}
		}
	}

	else if (input == 3)
	{
		cout << PAGE_THREE;
		cout << CHOICE_FOUR;
		cin >> input;

		while (input != 0 && input != 10 && input != 11)
		{
			cout << CHOICE_FOUR;
			cin >> input;
		}

		if (input == 10)
		{
			cout << PAGE_TEN << PAGE_FIVE << CHOICE_THREE;
			cin >> input;

			while (input != 0 && input != 6 && input != 7)
			{
				cout << CHOICE_THREE;
				cin >> input;
			}

			if (input == 0)
			{
				cout << GOODBYE;
				return 0;
			}

			else if (input == 6)
			{
				cout << PAGE_SIX << PAGE_EIGHT << PAGE_NINE << PAGE_SIXTEEN << endl;
				return 0;
			}

			else if (input == 7)
			{
				cout << PAGE_SEVEN << PAGE_EIGHT << PAGE_NINE << PAGE_SIXTEEN << endl;
				return 0;
			}
		}

		else if (input == 11)
		{
			cout << PAGE_ELEVEN << PAGE_FIVE << CHOICE_THREE;
			cin >> input;

			while (input != 0 && input != 6 && input != 7)
			{
				cout << CHOICE_THREE;
				cin >> input;
			}
			if (input == 0)
			{
				cout << GOODBYE;
				return 0;
			}
			else if (input == 6)
			{
				cout << PAGE_SIX << PAGE_EIGHT << PAGE_NINE << PAGE_SIXTEEN << endl;
				return 0;
			}
			else if (input == 7)
			{
				cout << PAGE_SEVEN << PAGE_EIGHT << PAGE_NINE << PAGE_SIXTEEN << endl;
				return 0;
			}
		}
	}

	else if (input == 4)
	{
		cout << PAGE_FOUR << CHOICE_FIVE;
		cin >> input;

		while (input != 0 && input != 12 && input != 13)
		{
			cout << CHOICE_FIVE;
			cin >> input;
		}
		if (input == 0)
		{
			cout << GOODBYE;
			return 0;
		}
		else if (input == 12)
		{
			cout << PAGE_TWELVE << PAGE_THIRTEEN << PAGE_FIVE << CHOICE_THREE;
			cin >> input;

			while (input != 0 && input != 6 && input != 7)
			{
				cout << CHOICE_THREE;
				cin >> input;
			}

			if (input == 0)
			{
				cout << GOODBYE;
				return 0;
			}

			else if (input == 6)
			{
				cout << PAGE_SIX << PAGE_EIGHT << PAGE_NINE << PAGE_SIXTEEN << endl;
				return 0;
			}

			else if (input == 7)
			{
				cout << PAGE_SEVEN << PAGE_EIGHT << PAGE_NINE << PAGE_SIXTEEN << endl;
				return 0;
			}
		}

		else if (input == 13)
		{
			cout << PAGE_THIRTEEN << PAGE_FIVE << CHOICE_THREE;
			cin >> input;

			while (input != 0 && input != 6 && input != 7)
			{
				cout << CHOICE_THREE;
				cin >> input;
			}

			if (input == 0)
			{
				cout << GOODBYE;
				return 0;
			}

			else if (input == 6)
			{
				cout << PAGE_SIX << PAGE_EIGHT << PAGE_NINE << PAGE_SIXTEEN << endl;
				return 0;
			}

			else if (input == 7)
			{
				cout << PAGE_SEVEN << PAGE_EIGHT << PAGE_NINE << PAGE_SIXTEEN << endl;
				return 0;
			}
		}
	}
}
