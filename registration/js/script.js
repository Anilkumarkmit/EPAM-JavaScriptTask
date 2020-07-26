function myfun()
	{
	   var a=document.getElementById("mobileno").value;
	   if(a==""){
		   document.getElementById("messages").innerHTML="enter mobileno.";
		   return false;
	   }
	   if(isNAN(a)){
		   document.getElementById("messages").innerHTML="enter valid mobileno.";
		   return false;
	   }
	   if(a.length<10){
		   document.getElementById("messages").innerHTML="enter valid mobileno.";
		   return false;
	   }
	   if(a.length>10){
		   document.getElementById("messages").innerHTML="length is greater than 10";
		   return false;
	   }
	}