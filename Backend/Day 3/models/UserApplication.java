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
public class UserApplication {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int appId;
    
    @Column(nullable = false)
    private String firstName;
    
    @Column(nullable = false)
    private String lastName;
    
    @Column(nullable = false)
    private int age;
    
    @Column(nullable = false)
    private String standard;
    
    @Column(nullable = false)
    private String parentName;
    
    @Column(nullable = false)
    private String phoneNumber;
    
    @Column(nullable = false)
    private String location;
    
    @Column(nullable = false)
    private String venue;
    
    @Column(nullable = false)
    private String schedule;
    
}
