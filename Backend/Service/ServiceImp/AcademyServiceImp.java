package com.chessacad.appdev.Service.ServiceImp;

import com.chessacad.appdev.dtos.AcademyDTO;
import com.chessacad.appdev.models.Academy;
import com.chessacad.appdev.repositories.AcademyRepository;
import com.chessacad.appdev.Service.AcademyService;
import com.chessacad.appdev.mappers.AcademyMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AcademyServiceImp implements AcademyService {

    private final AcademyRepository academyRepository;

    @Autowired
    public AcademyServiceImp(AcademyRepository academyRepository) {
        this.academyRepository = academyRepository;
    }

    @Override
    public AcademyDTO createAcademy(AcademyDTO academyDTO) {
        Academy academy = AcademyMapper.mapToAcademy(academyDTO);
        Academy savedAcademy = academyRepository.save(academy);
        return AcademyMapper.mapToAcademyDTO(savedAcademy);
    }

    @Override
    public AcademyDTO getAcademyById(Integer id) {
        Academy academy = academyRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Academy not found"));
        return AcademyMapper.mapToAcademyDTO(academy);
    }

    @Override
    public AcademyDTO updateAcademy(Integer academyId, AcademyDTO academyDTO) {
        Academy academy = academyRepository.findById(academyId)
                .orElseThrow(() -> new RuntimeException("Academy not found"));

        academy.setAcademyName(academyDTO.getAcademyName());
        academy.setVenue(academyDTO.getVenue());
        academy.setDistrict(academyDTO.getDistrict());
        academy.setPhoneNumber(academyDTO.getPhoneNumber());
        academy.setAddress(academyDTO.getAddress());
        academy.setMentorCount(academyDTO.getMentorCount());

        Academy updatedAcademy = academyRepository.save(academy);
        return AcademyMapper.mapToAcademyDTO(updatedAcademy);
    }

    @Override
    public void deleteAcademy(Integer academyId) {
        academyRepository.deleteById(academyId);
    }

    @Override
    public List<AcademyDTO> getAllAcademies() {
        List<Academy> academies = academyRepository.findAll();
        List<AcademyDTO> academyDTOs = new ArrayList<>();
        for (Academy academy : academies) {
            AcademyDTO academyDTO = new AcademyDTO();
            academyDTO.setAcademyName(academy.getAcademyName());
            academyDTO.setVenue(academy.getVenue());
            academyDTO.setDistrict(academy.getDistrict());
            academyDTO.setPhoneNumber(academy.getPhoneNumber());
            academyDTO.setAddress(academy.getAddress());
            academyDTO.setMentorCount(academy.getMentorCount());
            academyDTOs.add(academyDTO);
        }
        return academyDTOs;
    }
}
