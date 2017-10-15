package pl.waw.lokalsi.initiative.model;

import com.fasterxml.jackson.annotation.*;
import lombok.Getter;
import lombok.Setter;

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

	@Getter @Setter
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;

	@Getter @Setter
	@Column(name = "name")
	private String name;

	@Getter @Setter
	@Column(name = "description")
	private String description;

	@Getter @Setter
	@Column(name = "area")
	private String area;

	@Getter @Setter
	@Column(name = "location")
	private String location;

	@Getter @Setter
	@Column(name = "author")
	private String author;

	@Getter @Setter
	@Column(name = "fb_event")
	private String fbEvent;

	@Getter @Setter
	@Column(name = "budget_proposal")
	private Boolean budgetProposal;

	@Getter @Setter
	@Column(name = "likes")
	private Integer likes = 0;

	@Getter @Setter
	@Column(name = "joins")
	private Integer joins = 0;

	@Getter @Setter
	@Column(name = "lat")
	private BigDecimal lat;

	@Getter @Setter
	@Column(name = "lng")
	private BigDecimal lng;

	@Getter @Setter
	@JsonIgnore
	@OneToMany(fetch = FetchType.EAGER, mappedBy = "initiative")
	private List<Photo> photos;

	public void increaseLikes() {
		likes = likes + 1;
	}

	public void increaseJoins() {
		joins = joins + 1;
	}


	public void submitBudgetProposal() {
		budgetProposal = true;
	}
}
