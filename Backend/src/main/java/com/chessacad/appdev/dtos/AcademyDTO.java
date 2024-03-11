package com.chessacad.appdev.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AcademyDTO {
    private int acadID;
    private String academyName;
    private String venue;
    private String district;
    private String phoneNumber;
    private String address;
    private int mentorCount;
}
