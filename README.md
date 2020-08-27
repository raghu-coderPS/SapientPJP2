DateTimeCalculatorBigHandle: 
this file consists of different java classes to meet the given menu.it consists of a big file RandomNumbers.txt which consists of 100 thousand random inputs. This inputs are given through FileinputStream and operations are done and outputs are stored in History100.txt,Also created other formats i.e; json,csv,xml. This is made using FileFormatting.class and the natural phrases like month,day,week are also conveted using NaturalPhrases.java class.

DateTimeCalSql:
This contains the same files as in DateTimeCalculatorBighandle and a jdbs connection is setpu using the jdbc driver and create two tables choiceInputs and the choiceHistoryOutputs In the HistoryTablePsql.java class values are inserted into the table using sql query and the resultant output values are also inseted into the choiceHistoryOutputs table. also the output are stored in historyoutputs.txt/.csv/.json/.xml files.

DateTimeCalWeb:
This project contains a example.jsp file which is the index page.In the input box we should enter a Date and a drop down menu is present(month,year,day,week) which which give the date in natural lang phrases.Ex.(if the date is 12-08-2019 and if u select year it will give output as lastyear and if u select month it will be 12 month earlier). The success.jsp will print the output.A servelet Mvc_success.java is used to connect between the jsp and the NaturalLangPhrases class.

maven_Assignment.txt: 
contain answers and shell commands of given assignment.

SapientCodingExersise:
contains respective java project.Takes input from Income.csv file and writes output to IncomeOuputs.csv file
jenkins.txt:
contains jenkins UI and pipeline syntax of DateTimeCalculator (maven)project.
