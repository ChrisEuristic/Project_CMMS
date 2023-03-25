package cmms.jdbc;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public abstract class Typical_JDBC implements JDBCInterface{
	
	protected Connection conn;
	protected PreparedStatement preState;
	protected ResultSet rs;

	public Typical_JDBC() {
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
