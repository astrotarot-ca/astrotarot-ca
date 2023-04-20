/*
 *	Author: Serafim Junior Dos Santos Fagundes
*/
iImgs = 27;         // number of cards in deck
sCB = '000.jpg';   // cardback id

function populateArray(aCrds) {
	for (var j=1;j<=27;j++) {
		aCrds.push("https://medium.astrotarot.ca/OUIJA-HE/w300px/ho-"+j+".jpg");
	}
	return aCrds;
}

$(function () {
    aRndCrds = populateArray(aRndCrds)
    aRndCrds = shuffle(aRndCrds);
});