<<<<<<< HEAD
# SapientPJP2
week1:
>>>created a local and remote repositories. created loacal and remote branches Feature, Dev, QA, master, Delivery. Added a circle.java file and pushed it to feature branch. Merged changes made by person 1(sireesha-p23) via pull request. Ensured the code is in sync. with latest changes across all branches.
>>Repeated all the steps in a) using GUI client in VS code.
>>initial commit was reverted. made a reset to previous commit stashed the local changes during merge conflicts. checked: Git log,status & reflog.


>>Assisnment_Screenshots folder:
contains screenshots of remote(gitHub) branches commits history. contains screenshots of local commits history.(git log,git reflog after reset,rebase).

DateTimeCalculatorBigHandle:
this file consists of different java classes to meet the given menu.it consists of a big file RandomNumbers.txt which consists of 100 thousand random inputs.
This inputs are given through FileinputStream and operations are done and outputs are stored in History100.txt,Also created other formats i.e; json,csv,xml.
This is made using FileFormatting.class and the natural phrases like month,day,week are also conveted using NaturalPhrases.java class.

DateTimeCalSql:
This contains the same files as in DateTimeCalculatorBighandle and a jdbs connection is setpu using the jdbc driver and create two tables choiceInputs and the choiceHistoryOutputs
In the HistoryTablePsql.java class values are inserted into the table using sql query and the resultant output values are also inseted into the choiceHistoryOutputs table.
also the output are stored in historyoutputs.txt/.csv/.json/.xml files.

DateTimeCalWeb:
This project contains a example.jsp file which is the index page.In the input box we should enter a Date and a drop down menu is present(month,year,day,week) which which give the date in natural lang phrases.Ex.(if the date is 12-08-2019 and if u select year it will give output as lastyear and if u select month it will be 12 month earlier).
The success.jsp will print the output.A servelet Mvc_success.java is used to connect between the jsp and the NaturalLangPhrases class.
