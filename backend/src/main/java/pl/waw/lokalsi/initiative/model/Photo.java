package pl.waw.lokalsi.initiative.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

/**
 * Created by konrad on 14.10.2017.
 */
@Entity
@Table(name = "photo")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Photo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;

	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "initiative_id")
	private Initiative initiative;

	@JsonIgnore
	@Column(name = "file_name")
	private String fileName;

	@JsonIgnore
	@Column(name = "path")
	private String path;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Initiative getInitiative() {
		return initiative;
	}

	public void setInitiative(Initiative initiative) {
		this.initiative = initiative;
	}

	public String getPath() {
		return path;
	}

	public void setPath(String path) {
		this.path = path;
	}
}
