$(document).ready(function () {
   $('#txtDate').datepicker();
   $('#follow_Date').datepicker();
});
function getname() {
   var tt = document.getElementById('txtDate').value;
   var date = new Date(tt);
   var newdate = new Date(date);
   var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
   var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

   var day = days[newdate.getDay()];
   var month = months[newdate.getMonth()];
      document.getElementById('weekno').value = day;
      document.getElementById('monthname').value = month;
   
}
function getdate() {
   var tt = document.getElementById('txtDate').value;
   var days=document.getElementById('days').value;
   var months=document.getElementById('months').value;
   var years=document.getElementById('years').value;
   var date = new Date(tt);
   var newdate = new Date(date);

   newdate.setDate(newdate.getDate()+parseInt(days)+31*parseInt(months)+365*parseInt(years));
   var dd = newdate.getDate();
   var mm = newdate.getMonth() + 1;
   var y = newdate.getFullYear();

   var someFormattedDate = mm + '/' + dd + '/' + y;
      document.getElementById('follow_Date').value = someFormattedDate;
   
}
function getphrase() {
   var tt = document.getElementById('txtDate').value;
   var date = new Date(tt);
   var newdate = new Date(date);
   var phrase=document.getElementById('phrase').value;
   var res = phrase.split(" ");
   if(res[0]==="tommorow")
   newdate.setDate(newdate.getDate()+1);
   else if(res[1]==="days" && res[2]==="earlier")
   newdate.setDate(newdate.getDate()-parseInt(res[0]));
   else if(res[1]==="days" && res[2]==="after")
   newdate.setDate(newdate.getDate()+parseInt(res[0]));
   else if(res[1]==="months" && res[2]==="after")
   newdate.setDate(newdate.getDate()+31*parseInt(res[0]));
   else if(res[1]==="months" && res[2]==="earlier")
   newdate.setDate(newdate.getDate()-parseInt(res[0]));
   else if(res[1]==="years" && res[2]==="after")
   newdate.setDate(newdate.getDate()+365*parseInt(res[0]));
   else if(res[1]==="years" && res[2]==="earlier")
   newdate.setDate(newdate.getDate()-365*parseInt(res[0]));
   else if(res[1]==="years" && res[3]==="months" && res[5]==="days"&& res[6]==="after")
   newdate.setDate(newdate.getDate()+365*parseInt(res[0])+31*parseInt(res[2])+parseInt(res[4]));
   else if(res[1]==="years" && res[3]==="months" && res[5]==="days"&& res[6]==="earlier")
   newdate.setDate(newdate.getDate()-365*parseInt(res[0])-31*parseInt(res[2])-parseInt(res[4]));
   else
   newdate.setDate(newdate.getDate());
   var dd = newdate.getDate();
   var mm = newdate.getMonth() + 1;
   var y = newdate.getFullYear();

   var someFormattedDate = mm + '/' + dd + '/' + y;
      document.getElementById('fill').value = someFormattedDate;
}