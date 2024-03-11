// package com.chessacad.appdev.controllers;

// import java.util.List;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;

// import com.chessacad.appdev.dtos.MentorDTO;
// import com.chessacad.appdev.Service.MentorService;

// import lombok.AllArgsConstructor;

// @AllArgsConstructor
// @RestController
// @RequestMapping("/api/mentor")
// public class MentorController {

//     private MentorService mentorService;

//     @PostMapping("/add")
//     public ResponseEntity<MentorDTO> createMentor(@RequestBody MentorDTO mentorDTO) {
//         MentorDTO savedMentor = mentorService.createMentor(mentorDTO);
//         return new ResponseEntity<>(savedMentor, HttpStatus.CREATED);
//     }

//     @GetMapping("/{id}")
//     public ResponseEntity<MentorDTO> getMentorById(@PathVariable("id") Integer mentorId) {
//         MentorDTO mentorDTO = mentorService.getMentorById(mentorId);
//         return ResponseEntity.ok(mentorDTO);
//     }

//     @GetMapping("/")
//     public ResponseEntity<List<MentorDTO>> getAllMentors() {
//         List<MentorDTO> mentors = mentorService.getAllMentors();
//         return ResponseEntity.ok(mentors);
//     }

//     @PutMapping("/{id}")
//     public ResponseEntity<MentorDTO> updateMentor(@PathVariable("id") Integer mentorId, @RequestBody MentorDTO mentorDTO) {
//         MentorDTO updatedMentor = mentorService.updateMentor(mentorId, mentorDTO);
//         return ResponseEntity.ok(updatedMentor);
//     }

//     @DeleteMapping("/{id}")
//     public ResponseEntity<Void> deleteMentor(@PathVariable("id") Integer mentorId) {
//         mentorService.deleteMentor(mentorId);
//         return ResponseEntity.noContent().build();
//     }
// }
