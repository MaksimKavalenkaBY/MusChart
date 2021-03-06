package com.muschart.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "artist")
public class ArtistEntity extends AbstractEntity {

    private static final long       serialVersionUID = -5604176143411300832L;

    @Column(name = "name", nullable = false, length = 255)
    private String                  name;

    @Column(name = "photo", nullable = false, length = 255)
    private String                  photo;

    @Column(name = "rating", nullable = false, columnDefinition = "long default 0")
    private long                    rating;

    @JsonIgnore
    @OneToMany(cascade = {CascadeType.DETACH}, mappedBy = "track")
    private List<TrackArtistEntity> tracksOrder;

    @JsonIgnore
    @ManyToMany(targetEntity = GenreEntity.class, cascade = {CascadeType.DETACH})
    @JoinTable(name = "artist_genre", joinColumns = @JoinColumn(name = "id_artist", nullable = false, updatable = false), inverseJoinColumns = @JoinColumn(name = "id_genre", nullable = false, updatable = false))
    private List<GenreEntity>       genres;

    @JsonIgnore
    @ManyToMany(targetEntity = UserEntity.class, cascade = {CascadeType.DETACH})
    @JoinTable(name = "user_artist", joinColumns = @JoinColumn(name = "id_artist", nullable = false, updatable = false), inverseJoinColumns = @JoinColumn(name = "id_user", nullable = false, updatable = false))
    private List<UserEntity>        users;

    public ArtistEntity() {
        super();
    }

    public ArtistEntity(String name, String photo) {
        super();
        this.name = name;
        this.photo = photo;
    }

    public ArtistEntity(String name, String photo, long rating, List<TrackArtistEntity> tracksOrder, List<GenreEntity> genres, List<UserEntity> users) {
        super();
        this.name = name;
        this.photo = photo;
        this.rating = rating;
        this.tracksOrder = tracksOrder;
        this.genres = genres;
        this.users = users;
    }

    public ArtistEntity(long id, String name, String photo, long rating, List<TrackArtistEntity> tracksOrder, List<GenreEntity> genres, List<UserEntity> users) {
        super(id);
        this.name = name;
        this.photo = photo;
        this.rating = rating;
        this.tracksOrder = tracksOrder;
        this.genres = genres;
        this.users = users;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public long getRating() {
        return rating;
    }

    public void setRating(long rating) {
        this.rating = rating;
    }

    public List<TrackArtistEntity> getTracksOrder() {
        return tracksOrder;
    }

    public void setTracksOrder(List<TrackArtistEntity> tracksOrder) {
        this.tracksOrder = tracksOrder;
    }

    public List<GenreEntity> getGenres() {
        return genres;
    }

    public void setGenres(List<GenreEntity> genres) {
        this.genres = genres;
    }

    public List<UserEntity> getUsers() {
        return users;
    }

    public void setUsers(List<UserEntity> users) {
        this.users = users;
    }

    @Override
    public String toString() {
        return getClass().getName() + "[id:" + super.getId() + ",name:" + name + ",photo:" + photo + ",rating:" + rating + "]";
    }

}