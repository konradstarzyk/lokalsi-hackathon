package pl.waw.lokalsi.initiative.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import pl.waw.lokalsi.initiative.model.Initiative;
import pl.waw.lokalsi.initiative.model.Photo;
import pl.waw.lokalsi.initiative.repository.InitiativeRepository;
import pl.waw.lokalsi.initiative.repository.PhotoRepository;

import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
import java.net.URLDecoder;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

/**
 * Created by konrad on 14.10.2017.
 */
@RestController
@Transactional
public class InitiativeRestController {

	@Autowired
	InitiativeRepository initiativeRepository;

	@Autowired
	PhotoRepository photoRepository;

	private String PHOTOS_PATH = "./photos";

	@RequestMapping(value="/initiatives/{id}/photo", method= RequestMethod.POST)
	public @ResponseBody Photo uploadPhoto(@PathVariable("id") Long id, @RequestParam("file") MultipartFile file) throws Exception {
		String fileName = URLDecoder.decode(file.getOriginalFilename(), "UTF-8");

		Initiative initiative = initiativeRepository.getOne(id);
		Photo photo = new Photo();

		photo.setInitiative(initiative);

		Path initiativePhotosPath = Paths.get(PHOTOS_PATH, id.toString());
		Files.createDirectories(initiativePhotosPath);

		Path initiativePhotosFilePath = initiativePhotosPath.resolve(fileName);
		Files.copy(file.getInputStream(), initiativePhotosFilePath, StandardCopyOption.REPLACE_EXISTING);

		Path initiativePhotosRelativeFilePath = Paths.get(id.toString(), fileName);
		photo.setPath(initiativePhotosRelativeFilePath.toString());

		photoRepository.save(photo);

		return photo;
	}

	@RequestMapping(value="/photos/{photoId}", method = RequestMethod.GET, produces = "image/*")
	public void getPhoto(@PathVariable Long photoId, HttpServletResponse response) throws IOException {
		Photo photo = photoRepository.getOne(photoId);
		Path path = Paths.get(PHOTOS_PATH, photo.getPath());
		Files.copy(path, response.getOutputStream());
	}


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
	private Initiative submitJoin(@PathVariable("id") Long id) {
		Initiative initiative = initiativeRepository.getOne(id);
		initiative.increaseJoins();
		initiativeRepository.save(initiative);

		return initiative;
	}



}
