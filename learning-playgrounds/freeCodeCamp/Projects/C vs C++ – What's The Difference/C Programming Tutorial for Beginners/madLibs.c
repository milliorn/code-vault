#include <stdio.h>
#include <stdlib.h>

int main() {
	char nounA[99] = "";
	char nounPlural[99] = "";
	char nounB[99] = "";
	char place[99] = "";
	char adj[99] = "";
	char nounC[99] = "";

	printf("Enter a noun: ");
	scanf("%s", nounA);
	printf("Enter a plural noun: ");
	scanf("%s", nounPlural);
	printf("Enter a noun: ");
	scanf("%s", nounB);
	printf("Enter a location: ");
	scanf("%s", place);
	printf("Enter an adjective: ");
	scanf("%s", adj);
	printf("Enter a noun: ");
    scanf("%s", nounC);

	printf("Be kind to your %s-footed %s For a duck may be somebody`s "
		"%s, Be kind to your %s in %s where the "
		"weather is always %s.\n You may think that this is the %s, well, it "
		"is.",
		nounA, nounPlural, nounB, nounPlural, place, adj, nounC);
}
