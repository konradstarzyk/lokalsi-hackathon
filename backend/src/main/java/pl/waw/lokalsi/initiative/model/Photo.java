package pl.waw.lokalsi.initiative.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Value;

import javax.persistence.*;

/**
 * Created by konrad on 14.10.2017.
 */
@Entity
@Table(name = "photo")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Photo {

	@Getter @Setter
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;

	@Getter @Setter
	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "initiative_id")
	private Initiative initiative;

	@Getter @Setter
	@JsonIgnore
	@Column(name = "file_name")
	private String fileName;

	@JsonIgnore
	@Getter @Setter
	@Column(name = "path")
	private String path;

	public String getUrl() {
		return "/api/photos/" + id.toString();
	}

}
