package restAPI;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class LoginTable {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	
	@Column
	private long id;
	
	@Column
	private String username;
	
	@Column
	private String password;
	
	@Column
	private int type;
	

	public void setId(long id) {
		this.id=id;
	}
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username=username;
	}
	
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password=password;
	}
	

	public void setType(int type) {
		this.type=type;
	}
	
}
