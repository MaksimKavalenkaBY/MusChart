package by.gsu.controller.rest;

import static by.gsu.constants.UrlConstants.JSON_EXT;
import static by.gsu.constants.UrlConstants.Rest.UNITS_URL;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import by.gsu.bean.IdAndNameEntity;
import by.gsu.jpa.service.dao.UnitServiceDAO;

@RestController
@RequestMapping(UNITS_URL)
public class UnitRestController {

    @Autowired
    private UnitServiceDAO unitService;

    @RequestMapping(value = "/all/id_name" + JSON_EXT, method = RequestMethod.GET)
    public ResponseEntity<List<IdAndNameEntity>> getAllUnitsIdAndName() {
        List<IdAndNameEntity> unitsIdAndName = unitService.getAllUnitsIdAndName();
        if (unitsIdAndName == null) {
            return new ResponseEntity<List<IdAndNameEntity>>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<IdAndNameEntity>>(unitsIdAndName, HttpStatus.OK);
    }

}
