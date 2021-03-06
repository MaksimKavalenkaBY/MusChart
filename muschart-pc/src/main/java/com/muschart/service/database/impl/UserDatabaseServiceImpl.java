package com.muschart.service.database.impl;

import static com.muschart.constants.MessageConstants.TAKEN_LOGIN_MESSAGE;

import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Service;

import com.muschart.entity.UserEntity;
import com.muschart.exception.ValidationException;
import com.muschart.service.database.dao.UserDatabaseServiceDAO;

@Service("userDatabaseService")
public class UserDatabaseServiceImpl extends DatabaseServiceImpl implements UserDatabaseServiceDAO {

    @Override
    public UserEntity createUser(String login, String password, List<GrantedAuthority> roles) throws ValidationException {
        UserEntity user = new UserEntity(login, password, roles);
        synchronized (UserDatabaseServiceImpl.class) {
            if (!checkLogin(login)) {
                return userRepository.save(user);
            } else {
                throw new ValidationException(TAKEN_LOGIN_MESSAGE);
            }
        }
    }

    @Override
    public UserEntity getUserByLogin(String login) {
        return userRepository.findByLogin(login);
    }

    @Override
    public void updateUserArtists(long userId, long artistId) {
        if (!userRepository.isArtistLiked(userId, artistId)) {
            userRepository.addArtistToUser(userId, artistId);
            artistRepository.setArtistLike(artistId);
        } else {
            userRepository.deleteArtistFromUser(userId, artistId);
            artistRepository.setArtistDislike(artistId);
        }
    }

    @Override
    public void updateUserGenres(long userId, long genreId) {
        if (!userRepository.isGenreLiked(userId, genreId)) {
            userRepository.addGenreToUser(userId, genreId);
            genreRepository.setGenreLike(genreId);
        } else {
            userRepository.deleteGenreFromUser(userId, genreId);
            genreRepository.setGenreDislike(genreId);
        }
    }

    @Override
    public void updateUserTracks(long userId, long trackId) {
        if (!userRepository.isTrackLiked(userId, trackId)) {
            userRepository.addTrackToUser(userId, trackId);
            trackRepository.setTrackLike(trackId);
        } else {
            userRepository.deleteTrackFromUser(userId, trackId);
            trackRepository.setTrackDislike(trackId);
        }
    }

    @Override
    public boolean isArtistLiked(long userId, long artistId) {
        return userRepository.isArtistLiked(userId, artistId);
    }

    @Override
    public boolean isGenreLiked(long userId, long genreId) {
        return userRepository.isGenreLiked(userId, genreId);
    }

    @Override
    public boolean isTrackLiked(long userId, long trackId) {
        return userRepository.isTrackLiked(userId, trackId);
    }

    @Override
    public boolean checkLogin(String login) {
        return userRepository.checkLogin(login);
    }

}