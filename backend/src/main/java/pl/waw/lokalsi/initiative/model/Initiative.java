package pl.waw.lokalsi.initiative.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.List;

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
	private Integer joins = 0;

	@Column(name = "lat")
	private BigDecimal lat;

	@Column(name = "lon")
	private BigDecimal lon;

	@JsonIgnore
	@OneToMany(mappedBy = "initiative")
	private List<Photo> photos;

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

	public BigDecimal getLat() {
		return lat;
	}

	public void setLat(BigDecimal lat) {
		this.lat = lat;
	}

	public BigDecimal getLon() {
		return lon;
	}

	public void setLon(BigDecimal lon) {
		this.lon = lon;
	}

	public List<Photo> getPhotos() {
		return photos;
	}

	public void setPhotos(List<Photo> photos) {
		this.photos = photos;
	}
}
