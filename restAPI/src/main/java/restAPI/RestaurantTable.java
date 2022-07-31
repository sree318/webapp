package restAPI;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class RestaurantTable {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	
	@Column
	private long id;
	
	@Column
	private String res_name;
	
	@Column
	private String type;
	

	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id=id;
	}
	
	public String getRes_name() {
		return res_name;
	}
	public void setRes_name(String res_name) {
		this.res_name=res_name;
	}
	
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type=type;
	}

	
}
