package pl.waw.lokalsi.initiative.model;

import org.springframework.data.rest.core.config.Projection;

import java.math.BigDecimal;
import java.util.List;

/**
 * Created by konrad on 15.10.2017.
 */
@Projection(name = "mainPage", types = Initiative.class)
interface InitiativesMainPage {

	Long getId();

	String getName();
	String getDescription();
	String getLocation();
	String getAuthor();
	Boolean isBudgetProposal();
	BigDecimal getCost();
	String getFbEvent();
	Integer getLikes();
	Integer getJoins();
	BigDecimal getLat();
	BigDecimal getLng();

	List<Photo> getPhotos();

}
