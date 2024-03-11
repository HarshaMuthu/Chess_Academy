package com.chessacad.appdev.Service;

import com.chessacad.appdev.dtos.UserApplicationDTO;
import java.util.List;

public interface UserApplicationService {
    UserApplicationDTO createUserApplication(UserApplicationDTO userApplicationDTO);
    UserApplicationDTO getUserApplicationById(Integer userApplicationId);
    UserApplicationDTO updateUserApplication(Integer userApplicationId, UserApplicationDTO userApplicationDTO);
    void deleteUserApplication(Integer userApplicationId);
    List<UserApplicationDTO> getAllUserApplications();
}