var name =prompt('DROP YOUR NAME  : ')
alert('Hello '+name+' READY ??')
function calcul() 
{
	x = parseFloat(document.getElementById('x').value);
	y = parseFloat(document.getElementById('y').value);
	rep = parseFloat(document.getElementById('rep').value);
	operateur = document.getElementById('operateur').value;

	if(operateur === '+'){
		var s = x+y;
		document.getElementById('result').value = s;
	}
	if(operateur === '-'){
		var s = x-y;
		document.getElementById('result').value = s;
	}
	if(operateur === '/'){
		var s = x/y;
		document.getElementById('result').value = s;
	}
	if(operateur === '*'){
		var s = x*y;
		document.getElementById('result').value = s;
	}
	if(operateur === 'p')
	{
		s = Math.pow(x,y);
		document.getElementById('result').value = s;
	}
	if(operateur === 'r')
	{
		s = Math.sqrt(x);
		document.getElementById('result').value = s;
	}

	if (rep == s) 
	{
		document.getElementById('result').style.color="green";
		document.getElementById('rep').style.color="green";
		alert('BIEN '+name)
	}
	else
	{
		document.getElementById('result').style.color="green";
		document.getElementById('rep').style.color="red";
		alert('FAUX !!! MR '+name+' Le Resultat est '+s)
	}
}

function hidde(x)
{
	if (x == 'Hidden') 
	{
		document.getElementById('element').hidden=false;
		document.getElementById('Hidden').style.display="none";
	}
}

