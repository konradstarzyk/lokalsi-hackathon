package pl.waw.lokalsi.initiative.controller;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by konrad on 14.10.2017.
 */
@RestController
public class AppStatusController {

	@ResponseBody
	@RequestMapping(value = "/status", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	private AppStatus getStatus() {
		return new AppStatus();
	}
}
