package com.chessacad.appdev.mappers;

import com.chessacad.appdev.dtos.UserDTO;
import com.chessacad.appdev.models.User;

public class UserMapper {

    public static UserDTO maptoUserDTO(User user) {
        return new UserDTO(
                user.getUserId(),
                user.getEmail(),
                user.getPassword());
    }

    public static User maptoUser(UserDTO userdto) {
        return new User(
                userdto.getUserId(),
                userdto.getEmail(),
                userdto.getPassword());
    }

}