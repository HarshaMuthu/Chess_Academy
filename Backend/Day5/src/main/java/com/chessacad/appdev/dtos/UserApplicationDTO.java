package com.chessacad.appdev.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserApplicationDTO {
    private int appId;
    private String firstName;
    private String lastName;
    private int age;
    private String standard;
    private String parentName;
    private String location;
    private String venue;
    private String schedule;
    private String phoneNumber;
}
