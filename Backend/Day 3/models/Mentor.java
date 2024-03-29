package com.chessacad.appdev.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Mentor {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private int mentorId;
   @Column(nullable = false)
   private String mentorName;
   @Column(nullable = false)
   private String contact;
   @Column(nullable = false)
   private int courseId;
}
