package com.chessacad.appdev.mappers;

import com.chessacad.appdev.dtos.AcademyDTO;
import com.chessacad.appdev.models.Academy;

public class AcademyMapper {

    public static AcademyDTO mapToAcademyDTO(Academy academy) {
        return new AcademyDTO(
                academy.getAcadID(),
                academy.getAcademyName(),
                academy.getVenue(),
                academy.getDistrict(), 
                academy.getPhoneNumber(),
                academy.getAddress(), 
                academy.getMentorCount()); 
    }

    public static Academy mapToAcademy(AcademyDTO academyDTO) {
        return new Academy(
                academyDTO.getAcadID(),
                academyDTO.getAcademyName(), 
                academyDTO.getVenue(),
                academyDTO.getDistrict(), 
                academyDTO.getPhoneNumber(), 
                academyDTO.getAddress(), 
                academyDTO.getMentorCount()); 
    }
}
