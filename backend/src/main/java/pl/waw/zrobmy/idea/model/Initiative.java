package pl.waw.zrobmy.idea.model;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

/**
 * Created by konrad on 14.10.2017.
 */
@Entity
@Table(name = "initiative")
public class Initiative implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;

	@Column(name = "name")
	private String name;

	@Column(name = "description")
	private String description;

	@Column(name = "location")
	private String location;

	@JsonFormat(pattern = "YYYYMMDD")
	@Column(name = "time")
	private Date time;

	@Column(name = "author")
	private String author;

	@Column(name = "fb_event")
	private String fbEvent;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public Date getTime() {
		return time;
	}

	public void setTime(Date time) {
		this.time = time;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getFbEvent() {
		return fbEvent;
	}

	public void setFbEvent(String fbEvent) {
		this.fbEvent = fbEvent;
	}
}
