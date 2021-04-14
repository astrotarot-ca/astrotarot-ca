/*
 *	Author: Serafim Junior Dos Santos Fagundes
*/
iImgs = 52;         // number of cards in deck
sCB = "back.jpg";   // cardback id

function populateArray(aCrds) {
	for (var i=2;i<=10;i++) {
		aCrds.push("https://medium.astrotarot.ca/PC/w300px/"+i+"S.png");
		aCrds.push("https://medium.astrotarot.ca/PC/w300px/"+i+"C.png");
		aCrds.push("https://medium.astrotarot.ca/PC/w300px/"+i+"H.png");
		aCrds.push("https://medium.astrotarot.ca/PC/w300px/"+i+"D.png");
	}
	aCrds.push("https://medium.astrotarot.ca/PC/w300px/AS.png");
	aCrds.push("https://medium.astrotarot.ca/PC/w300px/AH.png");
	aCrds.push("https://medium.astrotarot.ca/PC/w300px/AC.png");
	aCrds.push("https://medium.astrotarot.ca/PC/w300px/AD.png");

	aCrds.push("https://medium.astrotarot.ca/PC/w300px/JS.png");
	aCrds.push("https://medium.astrotarot.ca/PC/w300px/JH.png");
	aCrds.push("https://medium.astrotarot.ca/PC/w300px/JC.png");
	aCrds.push("https://medium.astrotarot.ca/PC/w300px/JD.png");

	aCrds.push("https://medium.astrotarot.ca/PC/w300px/KS.png");
	aCrds.push("https://medium.astrotarot.ca/PC/w300px/KH.png");
	aCrds.push("https://medium.astrotarot.ca/PC/w300px/KC.png");
	aCrds.push("https://medium.astrotarot.ca/PC/w300px/KD.png");

	aCrds.push("https://medium.astrotarot.ca/PC/w300px/QS.png");
	aCrds.push("https://medium.astrotarot.ca/PC/w300px/QH.png");
	aCrds.push("https://medium.astrotarot.ca/PC/w300px/QC.png");
	aCrds.push("https://medium.astrotarot.ca/PC/w300px/QD.png");
	return aCrds;
}

$(function () {
    aRndCrds = populateArray(aRndCrds)
    aRndCrds = shuffle(aRndCrds);
});