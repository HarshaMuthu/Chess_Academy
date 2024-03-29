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
public class Academy {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int acadID;
    
    @Column(nullable = false)
    private String academyName; 
    
    private String venue;
    private String district; 
    
    @Column(nullable = false)
    private String phoneNumber; 
    
    @Column(nullable = false)
    private String address; 
    
    @Column(nullable = false)
    private int mentorCount;
}
