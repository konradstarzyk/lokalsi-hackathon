package pl.waw.lokalsi.initiative.model;

import org.springframework.data.rest.core.config.Projection;

import java.util.List;

/**
 * Created by konrad on 15.10.2017.
 */
@Projection(name = "mainPage", types = Initiative.class)
interface InitiativesMainPage {

	Long getId();

	String getName();

	List<Photo> getPhotos();

}
