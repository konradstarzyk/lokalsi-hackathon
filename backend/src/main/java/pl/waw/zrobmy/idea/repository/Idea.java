package pl.waw.zrobmy.idea.repository;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

/**
 * Created by konrad on 14.10.2017.
 */
@Entity
@Table(name = "invoice")
public class Idea implements Serializable {

	@Id
	@Column(name = "id")
	private Long id;

	@Column(name = "title")
	private String title;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
}
