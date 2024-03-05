package com.chessacad.appdev.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.chessacad.appdev.models.UserInfo;

import java.util.Optional;

public interface UserInfoRepository extends JpaRepository<UserInfo, Integer> {
    Optional<UserInfo> findByName(String username);

}
 