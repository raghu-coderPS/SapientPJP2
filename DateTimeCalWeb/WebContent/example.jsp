<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Convert date into Natural Lang Phrases</title>
</head>
<body>
<form action="Mvc_servelet" method="POST">
Date:<input type="text" name="date">
<br />
<label for="query">Choose a query:</label>
  <select name="query" id="query">
    <option value="day">day</option>
    <option value="month">month</option>
    <option value="week">week</option>
    <option value="year">year</option>
  </select>
  <br><br>
<input type="submit" value="Submit" />
</form>
</body>
</html>