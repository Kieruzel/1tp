
//let zmienna = 2;
//var zmienna2  stary sposób

// komentarz jdnowierszowy

/*
komentarz
wielowierszowy
*/

/* typy danych
typt proste(prymitywne)
typy złożone

proste w JS
Number - przechowuje liczby (całkowite,zmienoprzecinkowe)
String - tekst
boolean - typ logiczny (true albo false)(1 0)



//let zmienna = 2;
// nazwa zmiennej musi zaczynać się od litery lub znaku _
// nazwie zmiennej nie może przyjąć nazwy słów kluczwych 

let nazwa_ziennej = 4; //zmienna która jest widoczna od { do }

nazwa_ziennej = 6;

//document.write(nazwa_ziennej);
// stałe

const stala = 5;
document.write(stala);



// operatory arytmetyczne

+ - operator dodawania oraz operator konkatencji
- - operator odejmowania
* - operator mnożenia
/ - operator dzielenia
% - operator modulo czyli reszta z dzielenia

+=
-=
/=
*=
%=



let a=5;
a+=2 // a=a+2    -> 7
a-=3 // a=a-3	-> 4
a*=2 // a=a*2	->	8
a/=2 // a=a/2  -> 4

document.write(a);
*/

// ++ operator inkrementacji czyli zwiekszenie wartości o 1
// -- operator deinkrementacji czyli zmnijszenie wartości o 1

// a++ -postinkrementacja
// ++a -preinkrementacja

// a-- -postdeinkrementacja
// --a -predeinkrementacja

//let a=5;

//document.write(a++); // najpier wyśwetli wynik a następnie zwiekszy wartość
//document.write(a);

//document.write(++a); // najpier zwieksza wartość o 1 a następnie wyświetla wynik
//document.write(a);

/*
let a=10;

document.write(a++); //10   ->11
document.write(a++); // 11   ->12
document.write(--a); //11   ->11
document.write(a); //11

*/

// okna dialogowe
/*
alert - wyskoaujce okno z komunikatem
prompt - okno do wpisania danych przez użytkownika
confirm - okno pytające (ok, anuluj)
*/

// zadanie 1 . Napisz skrypt który pobiera dwie liczby i wypisuje ich sumę
/*
let liczba1;
let liczba2;
let suma;
liczba1 = prompt("Podaj pierwsza liczbe");// okno prompt zawsze zwraca stringa
liczba2 = prompt("Podaj druga liczbe");// okno prompt zawsze zwraca stringa

//liczba1 = parseInt(liczba1);
//liczba2 = parseInt(liczba2);

liczba1*=1;
liczba2*=1;

suma = liczba1+liczba2;

document.write(suma);

*/
// Zadanie 2. Napisz skrypt który pobierze a oraz b i policzy pole 
// prostokąta o bokach a,b

/*
if(jeżeli warunek jest prawidzyw)
{
	to wykonuj ten kod
}

OPERTORY porównania
> - większe
< - mnijesze
>= - większe równe
<= - mniejsze równe
== równe ( ale mogą być różne typy danych)
=== identyczne ( wartości takie same i typy takie same)
*/
// Pobierz liczbę od użytkownika i napisz SUPER jezeli ta liczba jest
// większa od 0 
/*
let liczba = prompt("Podaj liczbe"); // pobieramy liczbe od uzytkownka
liczba = parseInt(liczba); // zaminimy stringa na int

if(liczba>0)
{
	document.write("SUPER");
}
*/
// Zadanie 2. Napisz skrypt który pobierze a i policzy pole kwadratu 
// Sprawdź czy użytkownik podał liczbę większą od 0 
/*

let zmienna ="2";


if(zmienna===2)
{
	document.write("Dziala");
}
*/
// Jeżeli użytkownik wpiszę liczbę 2 to skrypt wypisze dwa słownie
// w warunku użyj operatora identyczności czyli ===
/*
let liczba = prompt("Podaj liczbe");

//liczba = parseInt(liczba);
if(liczba==="2")

{​
document.write("dziala");
}​​

*/

/*
Zapytaj się użytkownika o wiek jeżeli ma 18 lub więcej lat to napisz 
witay na stronie


okienko confirm(tresc);



let zmienna = confirm("Czy masz 18 lat lub wiecej?");
if(zmienna==true)
{
	document.write("Witamy na stronie");
}

if(zmienna==false)
{
	document.write("Ta strona jest dla pelnoletnich hahaha");
}

if(!zmienna)
{
	document.write("Ta strona jest dla pelnoletnich hahaha");
}
*/

/*
if(warunek)
{
	instrukcje
}
else  -> w przeciwnym wypadku
{
	instrukcje
}

*/

// Wypisz czy liczba jest parzysta czy nieparzysta
/*
let zmienna = prompt("Podaj liczbe");
zmienna = parseInt(zmienna);

if(zmienna%2==0)
{
document.write("parzysta");
}
else
{
	document.write("Nieparzysta");
}
*/
// Napisz skrypt który policzy pole kwadratu 
// jezeli użytkoniwk wpisał liczbę mniejszą od 0 lub 0
// to program wypisze "błedne dane" w przecinym wypadku
// wypisze wartość pola
/*
let zmienna = prompt("Podaj liczbe");
zmienna = parseInt(zmienna);

if(zmienna>0)
{
	document.write(zmienna*zmienna)
}else{
	document.write("Bledne dane");
}
*/

// operatory logiczne AND-> && OR-> || NOT-> !

// skrypt który liczy pole prostokątka. Sprawdzamy długości boków 

/*
let a = prompt("Podaj liczbe");
a = parseInt(a);
let b = prompt("Podaj liczbe");
b = parseInt(b);

if(a>0 && b>0)
{
	document.write(a*b);
}else{
	document.write("Bledne dane");
}

if(warunek)
{
	
}else if(warunek)
{
	
}else{
	
}

let a,b,c;

if((a>0 && a<=20)&&(a>b) && (b>10 || c==0))
{
	
}
*/


/*
switch(zmienna)
{
	case wartość:
		instrukcje;
		break;
	case wartość:
		instrukcje;
		braek;
		.
		.
		.
}



let zmienna = 1;

switch(zmienna)
{
	case 1:
		document.write("jeden");
		break;
	case 2:
		document.write("dwa");
		break;
	case 3:
		document.write("trzy");
		break;
	default:
		document.write("Poza zakresem");	
}


*/

/* Zadanie, Użytkownik podaje numer dnia tygodnia gdzie 1 to poniedziałek a 7 to niedzila
Napisz skrypt który napisze dzień tygodnia słownie. Użyj instrukcji switch case
*/



/*
Zadanie. Napisz skrypt który obilcz miejsca zerowe fuknkcji kwadragtowej o postaci ax^2+bx+c=0
policz delta = b^2-4*a*c
Jeżeli delta jest mnijesza od zera to brak rozwiazań
jeżeli delta jest równa zero to mamy jedno rozwiązanie x=wzór na tablicy
jeżeli delta jest więszka od zera to mamy dwa rozwiązania 
x1 = 
x2 = 
pierwiastek w JS Math.sqrt(liczba)



let a,b,c;
a=parseFloat(prompt("Podaj wspolczynnik a"));
b=parseFloat(prompt("Podaj wspolczynnik b"));
c=parseFloat(prompt("Podaj wspolczynnik c"));

let delta = b*b-4*a*c;

if(delta>0)
{
	let x1 = (-b-Math.sqrt(delta))/(2*a);
	let x2= (-b+Math.sqrt(delta))/(2*a);
	
	document.write("miejsca zerowe fuknkcji to x1:"+x1+" x2:"+x2);
	
}else if(delta==0)
{
	let x = -b/(2*a);
	document.write("miejsca zerowe fuknkcji to x:"+x);
}else
{
	document.write("Brak miejsc zerowych");
	
}
*/

// Wczytaj 3 liczby i wypisz je w kolejności od najmnijeszej do największej


// petle 

/*
for
while
do..while

*/

/*
for(wartość_początkowa; warunek_działania_pętli;operacja_artmetyczna)
*/

//zadanie wypisz 100 razy słowo "jestem programista"
/*
for(let i=1;i<=100;i++)
{
	
document.write("Jestem programista </br>");
}
*/

// Zadanie:  wypisz liczby od 0 do 10 za pomocą pętli for
/*
for(let i=0;i<=10;i++)
{
	document.write(i+"</br>");
}
*/
// zadanie wyświetl liczby parzyste od 10 do 100
/*
for(let i=10;i<=100;i++)
{
	if(i%2==0)
	{
		document.write(i+"</br>");
	}
}
*/
//i+=2  i=i+2
/*
for(let i=10;i<=100;i+=2)
{
	document.write(i);
}
*/


// Pobierz od użytkownika dwie liczby a oraz b
// wyświetl przedział liczb całkowitych od a do b

/*

let a = prompt("Podaj liczbe a"); // 1
let b = prompt("podaj liczbe b"); // 10

for(a;a<=b;a++)
{
	document.write(a + "</br>");
}

*/

// zadanie: policz sumę licz całkowitych od 3 do 30 
/*
let suma=0;

for(let i=3;i<=30;i++)
{
	suma = suma+i;
}
document.write(suma);
*/
/*
s=0 i=3;
s=0+3=3	-> i=4
s=3+4=7 -> i=5
s=7+5=12
...
...
...



*/
// zadanie. Policz sumę liczb całkoitych parzystych z przedziału a-b
// gdzie a i b podaje użytkownik
/*
let a = parseInt(prompt("liczba a"));
let b = parseInt(prompt("liczba b"));
let suma = 0; 
for(let i=a;i<=b;i++)
{
	if(i%2==0)
	{
		suma +=i;
	}
}
document.write(suma);
*/

/*
let a = parseInt(prompt("liczba a"));
let b = parseInt(prompt("liczba b"));
let wynik = 1;

*/

/*
pętla while , działa dokóki waruek jest prawidzwy 

while(warunek)
{
	instrukcje
	pętli
}

*/

// liczby od 1 do 10 za pocmoa petli while
/*
let i=1;

while(i<=10)
{
	document.write(i+"</br>");
}


let a=0;

while(a!=10)
{
	a=prompt("Podaj liczbe");
	document.write(a+"</br>");
}
*/



// napisz program który pobierze od uzytkownika liczbe
// jeżeli liczba jesy taka sama jak losowa to uzytkownik wygral
// program dziala dopoki yżytkownik nie trafi liczby losowej
// program zlicza próby 
// program podpowiada czy liczba losowa jest wieksza czy zmniejsza

//let losowa=Math.floor(Math.random() * (10 - 1)) + 1;
/*
while()
{
	let a=parseInt(prompt("Podaj liczbe"));
	
}
*/


/*
pętla do..while

do
{
	
	
	
}while(warunek)
	
PETLA DO..WHILE WYKONA SIĘ NAPEWNO 1 RAZ



let a=1;

do
{
	document.write(a+"<br>");
	a++;
	
}while(a<=10)




do{
	a = prompt("2-koniec");
	
	document.write("Seba");
	
}while(a!=2)
	
document.write("koniec");
*/
// wykorzystaj pętle do..while
// napisz program który pobierze od uzytkownika liczbe
// jeżeli liczba jesy taka sama jak losowa to uzytkownik wygral
// program dziala dopoki yżytkownik nie trafi liczby losowej
// program zlicza próby 
// program podpowiada czy liczba losowa jest wieksza czy zmniejsza
// let losowa=Math.floor(Math.random() * (10 - 1)) + 1;

// tablice
/*
let a=3;
let b=5;
let c=7;
let d=6;
let r=4;

let tab = [3,5,7,6,4];

let tab2= ["seb","kiero","ss","gg"];

let tab3=[3,"seba",4,5.5];

let tab3 = [a,b,c,d,r];


// 2 sposób 

let tab4 = new Array(3,4,5,6);


*/



//let tab = [2,3,1,4,5,3,4,2,11,34,5];

//document.write(tab.length);

/*

	for(let i=0;i<tab.length;i++){
		document.write(tab[i]);
		document.write("<br>");
		
	}
*/

//zadanie: zwiększ każdy element tablicy tab o 2;
/*
	for(let i=0;i<tab.length;i++)
	{
		tab[i]=tab[i]+2;
		document.write(tab[i]);
		document.write("<br>");
	}
*/


// zadanie: najdź największy element tablicy;

//let tab=[2,3,11,23,4,3,2,18,79,88,100,22];


/*let max = tab[0];

	for(let i=0;i<tab.length;i++)
	{
		if(tab[i]>max)
		{
			max=tab[i];
		}
		
	}
	*/
//document.write("najwieszka wartosc tablicy to: "+max);	

// znajdz najmniejszą wartość tablicy tab 

// podaj ile jest liczb parzystych w tablicy 



/*
let ile_tab=Math.floor(Math.random() * (20 - 5)) + 5;
let tab=[];
for(let i=0;i<=ile_tab;i++)
{
	tab[i]=Math.floor(Math.random() * (100 - 0)) + 0;
}

// wypisz sumę wszytskich elementów tablicy tab


let suma=0;

for(let j=0; j<tab.length;j++)
{
	suma=suma+tab[j];
}

document.write(suma+"</br>");
document.write(tab);

*/

// metody do pracy z tablcami

// push - dodaje do końca tablicy elementy

//let tab=[1,2,3,6,2,11,7,8,9];

//tab.push(5,4,5,7,3,11);
//tab[tab.length]=5;
//document.write(tab[tab.length-1]);

// metoda pop() -> zabiera/kasuje ostatni element tablicy;

/*
tab.pop();
document.write(tab[tab.length-1])
*/

// metoda unshift()-wstawia elemnty na początku tablicy

//tab.unshift("ala","kot",100);

//document.write(tab[2]);

//metoda shift()-> usuwa element z początku tablicy

//tab.shift();
//document.write(tab[0]);

/*
let tab=[1,2,3];
let ob ={ imie: "seba"};
let a="seba";


//isArray()-> sprawdza czy tablica jest tablicą

if(Array.isArray(a)){
	document.write("to jest tablica");
	
}else{
	document.write("to nie jest tablica");
}
*/

// metody zamiany tekstu na tablice i tablicy na tekst

// join()->zamiana tablicy na tekst z separatorem
/*
let tab=[2,3,4,5];

let tekst = tab.join("-->");
document.write(tekst);

*/

//zamiana tekstu na tablice metoda split()
/*
let tekst = "1 2 3 4 5";

let tab = tekst.split(" ");

document.write(tab[3]);

let tekst2="Pies-Kot-Kura";

let tab2 = tekst2.split("-");
document.write(tab2[2]);



// metoda reverse

let tab=[2,3,4,5,6];
tab.reverse();

//document.write(tab[0]);

// metoda indexOf - wyszukuje elementy tablicy;

let tab2=["seba","franio","ania"];

//document.write(tab2.indexOf("ania2"));
let slowo = prompt("podaj slowo");

if(tab2.indexOf(slowo)!=-1)
{
	document.write("insteje")
}else
{
	document.write("nie istenieje");
}
	
*/


//let tab=[2,1,3,4,5,1];

// tab wielowymiarowe

/*
let numeric = [
    ['input1','input2'],
    ['input3','input4']
];

document.write(numeric[0][0]);
numeric[0][0]=5;
document.write(numeric[0][0]);

let tab=[];
for(let i=0;i<8;i++)
{
	 tab[i]=[];
	for(let j=0;j<5;j++)
	{
		tab[i][j]=i;
	}
	
}
for(let k=0;k<tab.length;k++)
{
	for(let h=0;h<tab[k].length;h++)
	{
		document.write(tab[k][h]);
	}
	document.write("</br>");
	
}
*/


// STRING 


let zmienna = "Ala ma kota";

// właściwość length cyli długość

document.write(zmienna.length+"hh");



















