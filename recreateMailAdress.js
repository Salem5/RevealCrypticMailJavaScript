function recreateMailAdress(stringreverseMail)
{

var resMail = "";

 for(i=stringreverseMail.length - 1; i>= 0; i--)
 {
 //it is an at!
	if(stringreverseMail.charAt(i) == '&')
	{
	resMail += '@';
	}
	//it is a dot!	
	else if(stringreverseMail.charAt(i) == '_')
	{
	resMail += '.';
	}
	else
	{
	resMail += stringreverseMail.charAt(i);
	}

 }
 var div = document.getElementById("emailDiv"); 
 div.innerHTML = "<a href'mailto:" +resMail  + "'>" + resMail + "</a>" ;
 //div.innerHTML = div.innerHTML + "<p><a href'mailto:" +resMail  + "'>" + resMail + "</a></p>" ;
 
//document.write("<a href'mailto:" +resMail  + "'>" + resMail + "</a>" );
}