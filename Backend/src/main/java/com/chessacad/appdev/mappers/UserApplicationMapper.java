package com.chessacad.appdev.mappers;

import com.chessacad.appdev.dtos.UserApplicationDTO;
import com.chessacad.appdev.models.UserApplication;

public class UserApplicationMapper {

    public static UserApplicationDTO mapToUserApplicationDTO(UserApplication userApplication) {
        return new UserApplicationDTO(
                userApplication.getAppId(),
                userApplication.getFirstName(),
                userApplication.getLastName(),
                userApplication.getAge(),
                userApplication.getStandard(),
                userApplication.getParentName(),
                userApplication.getPhoneNumber(),
                userApplication.getLocation(),
                userApplication.getVenue(),
                userApplication.getSchedule());
    }

    public static UserApplication mapToUserApplication(UserApplicationDTO userApplicationDTO) {
        return new UserApplication(
                userApplicationDTO.getAppId(),
                userApplicationDTO.getFirstName(),
                userApplicationDTO.getLastName(),
                userApplicationDTO.getAge(),
                userApplicationDTO.getStandard(),
                userApplicationDTO.getParentName(),
                userApplicationDTO.getPhoneNumber(),
                userApplicationDTO.getLocation(),
                userApplicationDTO.getVenue(),
                userApplicationDTO.getSchedule());
    }
}
