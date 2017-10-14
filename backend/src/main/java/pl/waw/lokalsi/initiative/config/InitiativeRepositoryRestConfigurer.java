package pl.waw.lokalsi.initiative.config;

import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;
import org.springframework.stereotype.Component;
import pl.waw.lokalsi.initiative.model.Initiative;

/**
 * Created by konrad on 14.10.2017.
 */
@Component
public class InitiativeRepositoryRestConfigurer extends RepositoryRestConfigurerAdapter {

	@Override
	public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
		config.exposeIdsFor(Initiative.class);
	}


}