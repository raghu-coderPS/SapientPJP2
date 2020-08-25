package com.sapient.raghu.DateTimeCalcSql;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class JdbcConnection {
	private final String url="jdbc:postgresql://localhost/psql1";
	private final String user ="postgres";
	private final String password ="divilee";
	private void connect() {
		try(Connection connection = DriverManager.getConnection(url,user,password);){
			if(connection != null) {
				System.out.println("Successfull");
			}else {
				System.out.println("failed");
			}
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
;
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		JdbcConnection sqlconnect=new JdbcConnection();
		sqlconnect.connect();
		

	}

}
