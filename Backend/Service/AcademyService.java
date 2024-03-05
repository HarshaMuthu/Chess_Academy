package com.chessacad.appdev.Service;

import com.chessacad.appdev.dtos.AcademyDTO;
import java.util.List;

public interface AcademyService {
    AcademyDTO createAcademy(AcademyDTO academyDTO);
    AcademyDTO getAcademyById(Integer id);
    void deleteAcademy(Integer id);
    AcademyDTO updateAcademy(Integer id,AcademyDTO academyDTO);
    List<AcademyDTO> getAllAcademies();
}