package pl.waw.lokalsi.initiative.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by konrad on 14.10.2017.
 */
@Entity
@Table(name = "initiative")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
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

	@Column(name = "author")
	private String author;

	@Column(name = "fb_event")
	private String fbEvent;

	@Column(name = "likes")
	private Integer likes = 0;

	@Column(name = "joins")
	private Integer joins;

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

	public void increaseLikes() {
		likes = likes + 1;
	}

	public void increaseJoins() {
		joins = joins + 1;
	}

	public Integer getLikes() {
		return likes;
	}

	public void setLikes(Integer likes) {
		this.likes = likes;
	}

	public Integer getJoins() {
		return joins;
	}

	public void setJoins(Integer joins) {
		this.joins = joins;
	}
}
