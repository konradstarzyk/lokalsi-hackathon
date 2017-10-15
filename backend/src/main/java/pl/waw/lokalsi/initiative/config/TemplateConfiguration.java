package pl.waw.lokalsi.initiative.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.view.freemarker.FreeMarkerConfigurer;

/**
 * Created by konrad on 15.10.2017.
 */
@Configuration
public class TemplateConfiguration {

	@Bean
	public FreeMarkerConfigurer freemarkerConfig() {
		FreeMarkerConfigurer freeMarkerConfigurer = new FreeMarkerConfigurer();
		freeMarkerConfigurer.setTemplateLoaderPaths("classpath:/templates");
		return freeMarkerConfigurer;
	}


}
