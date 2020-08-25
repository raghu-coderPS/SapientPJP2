package com.income;

import java.io.IOException;

public class Runner {

	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
		String csvFile = "C:/Users/DELL/eclipse-workspace/SapientCodingExercise/src/com/income/incomes.csv";
	       FileReaderCSV.read(csvFile);
	       OutputTableGenerator.printLog();;
	}

}
