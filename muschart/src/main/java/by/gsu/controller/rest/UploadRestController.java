package by.gsu.controller.rest;

import static by.gsu.constants.MessageConstants.UPLOAD_FILE_ERROR;
import static by.gsu.constants.UploadConstants.Path.*;
import static by.gsu.constants.UploadConstants.Type.*;
import static by.gsu.constants.UrlConstants.Rest.JSON_EXT;
import static by.gsu.constants.UrlConstants.Rest.UPLOAD_URL;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

import javax.servlet.annotation.MultipartConfig;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import by.gsu.exception.ValidationException;

@Controller
@MultipartConfig
@RequestMapping(UPLOAD_URL)
public class UploadRestController {

    @RequestMapping(value = "/{type}" + JSON_EXT, method = RequestMethod.POST)
    public @ResponseBody ResponseEntity<Void> uploadFile(@PathVariable("type") final String type,
            @RequestParam(value = "file") final MultipartFile file) {
        try {
            String path = "";
            switch (type) {
                case COVER:
                    path = TRACK_COVER_UPLOAD_PATH + "/" + file.getOriginalFilename();
                    break;
                case PHOTO:
                    path = ARTIST_PHOTO_UPLOAD_PATH + "/" + file.getOriginalFilename();
                    break;
                case SONG:
                    path = AUDIO_UPLOAD_PATH + "/" + file.getOriginalFilename();
                    break;
            }
            upload(file, path);
            return new ResponseEntity<Void>(HttpStatus.OK);
        } catch (ValidationException e) {
            return new ResponseEntity<Void>(HttpStatus.CONFLICT);
        }
    }

    private void upload(final MultipartFile file, final String path) throws ValidationException {
        try (OutputStream out = new FileOutputStream(new File(path));
                InputStream filecontent = file.getInputStream()) {
            int read = 0;
            final byte[] bytes = new byte[1024];

            while ((read = filecontent.read(bytes)) != -1) {
                out.write(bytes, 0, read);
            }

        } catch (FileNotFoundException e) {
            throw new ValidationException(UPLOAD_FILE_ERROR);
        } catch (IOException e) {
            throw new ValidationException(e.getMessage());
        }
    }

}
