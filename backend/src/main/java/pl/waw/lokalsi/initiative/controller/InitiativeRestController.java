package pl.waw.lokalsi.initiative.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import pl.waw.lokalsi.initiative.model.Initiative;
import pl.waw.lokalsi.initiative.repository.InitiativeRepository;

/**
 * Created by konrad on 14.10.2017.
 */
@RestController
@Transactional
public class InitiativeRestController {

	@Autowired
	InitiativeRepository initiativeRepository;


	@ResponseBody
	@RequestMapping(value = "/initiatives/{id}/likes", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	private Initiative submitLike(@PathVariable("id") Long id) {
		Initiative initiative = initiativeRepository.getOne(id);
		initiative.increaseLikes();
		initiativeRepository.save(initiative);

		return initiative;
	}

	@ResponseBody
	@RequestMapping(value = "/initiatives/{id}/joins", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	private Initiative submitJoin(@PathVariable("id") Long id, @RequestBody String requestBody) {
		Initiative initiative = initiativeRepository.getOne(id);
		initiative.increaseJoins();
		initiativeRepository.save(initiative);

		return initiative;
	}

}
