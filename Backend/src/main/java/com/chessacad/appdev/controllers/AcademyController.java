package com.chessacad.appdev.controllers;

import com.chessacad.appdev.dtos.AcademyDTO;
import com.chessacad.appdev.Service.AcademyService;
// import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/academy")
public class AcademyController {

    private final AcademyService academyService;

    // @Autowired
    public AcademyController(AcademyService academyService) {
        this.academyService = academyService;
    }

    @PostMapping("/")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<AcademyDTO> createAcademy(@RequestBody AcademyDTO academyDTO) {
        AcademyDTO savedAcademy = academyService.createAcademy(academyDTO);
        return new ResponseEntity<>(savedAcademy, HttpStatus.CREATED);
    }

    @PutMapping("/update/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<AcademyDTO> updateAcademy(@PathVariable("id") Integer id, @RequestBody AcademyDTO academyDTO) {
        AcademyDTO updatedAcademy = academyService.updateAcademy(id, academyDTO);
        if (updatedAcademy != null) {
            return ResponseEntity.ok(updatedAcademy);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public String deleteAcademy(@PathVariable("id") Integer id) {
        academyService.deleteAcademy(id);
        return "Deleted";
    }

    @GetMapping("/{id}")
    public ResponseEntity<AcademyDTO> getAcademyById(@PathVariable("id") Integer id) {
        AcademyDTO academyDTO = academyService.getAcademyById(id);
        if (academyDTO != null) {
            return ResponseEntity.ok(academyDTO);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/")
    public ResponseEntity<List<AcademyDTO>> getAllAcademies() {
        List<AcademyDTO> academies = academyService.getAllAcademies();
        return ResponseEntity.ok(academies);
    }
}
