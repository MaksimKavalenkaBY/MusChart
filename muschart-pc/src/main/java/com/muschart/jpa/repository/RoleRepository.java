package com.muschart.jpa.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import com.muschart.entity.RoleEntity;

@Service("roleRepository")
public interface RoleRepository extends CrudRepository<RoleEntity, Long> {

    RoleEntity findByName(String name);

    @Query("SELECT CASE WHEN COUNT(*) > 0 THEN true ELSE false END FROM RoleEntity WHERE name = ?1")
    boolean checkRoleName(String name);

}