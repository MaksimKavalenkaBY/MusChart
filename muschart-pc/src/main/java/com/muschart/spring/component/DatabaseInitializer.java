package com.muschart.spring.component;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

import com.muschart.constants.RoleConstants;
import com.muschart.constants.UnitConstants;
import com.muschart.service.database.dao.RoleDatabaseServiceDAO;
import com.muschart.service.database.dao.UnitDatabaseServiceDAO;

@Component
public class DatabaseInitializer implements ApplicationListener<ContextRefreshedEvent> {

    @Autowired
    private RoleDatabaseServiceDAO roleService;

    @Autowired
    private UnitDatabaseServiceDAO unitService;

    @Override
    public void onApplicationEvent(ContextRefreshedEvent event) {
        roleInit();
        unitInit();
    }

    private void roleInit() {
        for (RoleConstants role : RoleConstants.values()) {
            if (!roleService.checkRoleName(role.name())) {
                roleService.createRole(role.name());
            }
        }
    }

    private void unitInit() {
        for (UnitConstants unit : UnitConstants.values()) {
            if (!unitService.checkUnitName(unit.toString())) {
                unitService.createUnit(unit.toString());
            }
        }
    }

}