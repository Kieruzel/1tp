// STRING 


let zmienna = "Ala ma kota";

// właściwość length cyli długość

document.write(zmienna.length); // 11 

document.write(zmienna[0]); // A



// zamiana liter na duże -> toUpperCase


document.write(zmienna.toUpperCase()); // ALA MA KOTA

document.write(zmienna); // Ala ma kota

// zamina liter na male -> toLowerCase


document.write(zmienna.toLowerCase()); // ala ma kota

document.write(zmienna); // Ala ma kota

/*
Napisz funkcję która przyjmuje jako parametr tekst
i wypisuje taki tekst że po spacji pojawia się duża litera a następne są małe

np. "ala ma kota"
fun -> Ala Ma Kota

UWAGA: można wykorzytć tylko metody toUpperCase oraz toLowerCase

*/


for(let i=0; i<zmienna.length;i++)
{
	document.write(zmienna[i]+"</br>");
	
}



