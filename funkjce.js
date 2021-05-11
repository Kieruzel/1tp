/*
function nazwaFunkji()
{
	// ciało funkcji
}

// napisz fukjcę która wypisze jakieś imie

function imie()
{
	document.write("Sebastian");
}
// zwracanie funkcji (return)
function suma()
{
	let a=2;
	let b=5;
	return a+b;
}

function prawa()
{
	return true;
}


function dziwna(){
	let a=3;
	 if(a==2){
		 return 2;
	 }else{
		 return false;
	 }
	
}
*/
// wywołanie funkcji (uruchomienie)
//imie();

//let s= suma();
//document.write(s);

//document.write(suma());
/*
if(prawa())
{
	document.write("ok")
}else{
	document.write(" nie ok");
}

document.write(dziwna());
*/

// argumenty funkcji 

/*
function imie(agrument)
{
	document.write(agrument);
	
}

//imie("Seba");

function suma(liczba1, liczba2)
{
	return liczba1+liczba2;
}


//document.write(suma(3)); // undefined
//document.write(suma(3,2)); // 6


function dziel(a,b=2)
{
	return a/b;
}

//document.write(dziel(6,3)); // wypisze 2
//document.write(dziel(6)); // wypisze 3

function agr()
{
	document.write(arguments[0]);
}

function agr2()
{
	for(let i=0; i<arguments.length;i++)
	{
		document.write(arguments[i]);
	}
}


//agr(2); // wypisze 2
//agr2(2,3,4,5,6); // wypisze 23456

function suma_calkowita()
{
	let suma=0;
	for(let i=0; i<arguments.length;i++)
	{
		suma=suma+arguments[i];
	}
	
	return suma;
	
}

document.write(suma_calkowita(2,3,4,1,4)); // wypisze 14
*/

/* funkcje rekurencyjne */

// funcja rekurencyjna to funkjcja która wywołuje samą siebie
/*
for(let i=1; i<=10;i++)
{
	document.write(i);
	
}
*/

function reku(n)
{
	
	if(n<=10)
	{
		document.write(n)
		n++;
		reku(n)
	}
	
	
}
			

//reku(-10);



function silnia(n)
{
	if(n<2)
	{
		return 1;
	}
	
	return n*silnia(n-1)
	
	
}


// liczby Fibonacciego

// 1 1 2 3 5 8 ....


function fibo(n)
{
	if(n<=1)
	{
		return 1;
	}else{
		return fibo(n-2)+fibo(n-1);
		
	}
	
	
}

document.write(fibo(4));




