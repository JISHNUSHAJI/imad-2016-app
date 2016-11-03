
count=0;
var inv_button_flag=0;
if (navigator.appName=="Microsoft Internet Explorer" || (navigator.appName=="Netscape" && navigator.appVersion >= "5"))
{
document.write('<form name="qiksearch_ticker"><input type="button" name="qiksearch_ticker" onclick="goURL();" style="background:#FFFFFF; width:377; height:22; border-width:1; border-color:#000000; cursor:hand" onmouseover="this.style.background='#BDDCFF';return true" onmouseout="this.style.background='#FFFFFF';return true" onmousedown="this.style.background='#FFD543';return true"><input type="button" value="5" onclick="javascript:inv_button();inv_msg();inv_URL();" style="width:22; height:22; font-family:webdings; background:#FFFFFF; border-left-width:0; border-right-width:1px; border-top-width:1px; border-bottom-width:1px; border-color:#000000; cursor:hand" name="inv_but" title="Tick Up Direction"></form>');
}
else
{
document.write('<form name="qiksearch_ticker"><input type="button" name="qiksearch_ticker" onclick="goURL();" width="349" border="0"><input type="button" width="50" value="up" onclick="javascript:inv_button();inv_msg();inv_URL();" name="inv_but"></form>');
}

var ticker_speed=1;
 
 // Ticker messages
 var ticker_msg = new Array(
     "Welcome to www.javascriptsource.com",
     "FREE Javascripts",
     "Thanks for stopping by",
     "Java Script Source",
     "FREE Scripts" ); // No comma after last ticker msg

 // Ticker URLs
 var ticker_url = new Array(
     "http://www.javascriptsource.com",
     "http://www.javascriptsource.com",
     "http://www.javascriptsource.com",
     "http://www.javascriptsource.com",
     "http://www.javascriptsource.com" ); // No comma after last ticker url

function tick()
{
 if(count<ticker_msg.length)
 {  
  this.document.qiksearch_ticker.qiksearch_ticker.value=ticker_msg[count];
  count++;
  if(count==ticker_msg.length)
  {
   count=0;
  }
  setTimeout("tick();",ticker_speed*1000);
 }
}

function goURL()
{
 if(this.document.qiksearch_ticker.qiksearch_ticker.value==ticker_msg[ticker_msg.length-1])
 {
  location.href=ticker_url[ticker_msg.length-1];
 }
 else
 {
  location.href=ticker_url[count-1];
 }
}

function inv_button()
{
 if (navigator.appName=="Microsoft Internet Explorer" || (navigator.appName=="Netscape" && navigator.appVersion >= "5"))
 {
  if (inv_button_flag==0)
  {
   this.document.qiksearch_ticker.inv_but.value="6";
   this.document.qiksearch_ticker.inv_but.title="Tick Down Direction";
   inv_button_flag=1;
  }
  else
  {
   this.document.qiksearch_ticker.inv_but.value="5";
   this.document.qiksearch_ticker.inv_but.title="Tick Up Direction";
   inv_button_flag=0;
  }
 }
 else
 {
  if (inv_button_flag==0)
  {
   this.document.qiksearch_ticker.inv_but.value="Down";
   inv_button_flag=1;
  }
  else
  {
   this.document.qiksearch_ticker.inv_but.value="Up";
   inv_button_flag=0;
  }
 }
}

function inv_msg()
{
 for(var i=0;i<Math.floor(ticker_msg.length/2);i++)
 {
  var temp=ticker_msg[i];
  ticker_msg[i]=ticker_msg[ticker_msg.length-1-i];
  ticker_msg[ticker_msg.length-1-i]=temp;
 }
}

function inv_URL()
{
 for(var i=0;i<Math.floor(ticker_msg.length/2);i++)
 {
  var temp=ticker_url[i];
  ticker_url[i]=ticker_url[ticker_msg.length-1-i];
  ticker_url[ticker_msg.length-1-i]=temp;
 }
}

tick();

