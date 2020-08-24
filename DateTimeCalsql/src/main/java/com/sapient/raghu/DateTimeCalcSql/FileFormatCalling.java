package com.sapient.raghu.DateTimeCalcSql;

public class FileFormatCalling {
public void fileformat(String writeline)
{
	FileHistoryOfOuputs format=new FileHistoryOfOuputs();
	String fileName;
	fileName="C:/Users/DELL/eclipse-workspace/DateTimeCalsql/src/main/java/com/sapient/raghu/DateTimeCalcSql/historyoutputs.txt";
	format.FileSessionHistory(fileName,writeline);
	fileName="C:/Users/DELL/eclipse-workspace/DateTimeCalsql/src/main/java/com/sapient/raghu/DateTimeCalcSql/historyoutputs.csv";
	format.FileSessionHistory(fileName,writeline);
	fileName="C:/Users/DELL/eclipse-workspace/DateTimeCalsql/src/main/java/com/sapient/raghu/DateTimeCalcSql/historyoutputs.json";
	format.FileSessionHistory(fileName,writeline);
	fileName="C:/Users/DELL/eclipse-workspace/DateTimeCalsql/src/main/java/com/sapient/raghu/DateTimeCalcSql/historyoutputs.xml";
	format.FileSessionHistory(fileName,writeline);
}
}
