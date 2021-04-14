/*
 *	Author: Serafim Junior Dos Santos Fagundes
*/
iImgs = 22;         // number of cards in deck
sCB = '000.jpg';   // cardback id

function populateArray(aCrds) {
	for (var j=1;j<=22;j++) {
		aCrds.push("https://medium.astrotarot.ca/OUIJA-RU/w300px/ro-c"+j+".jpg");
	}
	return aCrds;
}

$(function () {
    aRndCrds = populateArray(aRndCrds)
    aRndCrds = shuffle(aRndCrds);
});