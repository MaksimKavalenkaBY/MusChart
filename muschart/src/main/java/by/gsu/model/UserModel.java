package by.gsu.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "user")
public class UserModel extends Model {

    private static final long serialVersionUID = 7372820574885171442L;

    @Column(name = "login", unique = true, nullable = false, length = 255)
    private String            login;

    @JsonIgnore
    @Column(name = "password", nullable = false, length = 255)
    private String            password;

    @ManyToOne(targetEntity = RoleModel.class, cascade = {CascadeType.DETACH, CascadeType.MERGE,
            CascadeType.REFRESH, CascadeType.PERSIST}, fetch = FetchType.EAGER, optional = false)
    private RoleModel         role;

    @JsonIgnore
    @ManyToMany(targetEntity = TrackModel.class, cascade = {CascadeType.DETACH, CascadeType.MERGE,
            CascadeType.REFRESH, CascadeType.PERSIST}, fetch = FetchType.LAZY)
    @JoinTable(name = "user_track", joinColumns = @JoinColumn(name = "id_user", nullable = false, updatable = false), inverseJoinColumns = @JoinColumn(name = "id_track", nullable = false, updatable = false))
    private List<TrackModel>  tracks;

    @JsonIgnore
    @ManyToMany(targetEntity = ArtistModel.class, cascade = {CascadeType.DETACH, CascadeType.MERGE,
            CascadeType.REFRESH, CascadeType.PERSIST}, fetch = FetchType.LAZY)
    @JoinTable(name = "user_artist", joinColumns = @JoinColumn(name = "id_user", nullable = false, updatable = false), inverseJoinColumns = @JoinColumn(name = "id_artist", nullable = false, updatable = false))
    private List<ArtistModel> artists;

    @JsonIgnore
    @ManyToMany(targetEntity = GenreModel.class, cascade = {CascadeType.DETACH, CascadeType.MERGE,
            CascadeType.REFRESH, CascadeType.PERSIST}, fetch = FetchType.LAZY)
    @JoinTable(name = "user_genre", joinColumns = @JoinColumn(name = "id_user", nullable = false, updatable = false), inverseJoinColumns = @JoinColumn(name = "id_genre", nullable = false, updatable = false))
    private List<GenreModel>  genres;

    public UserModel() {
        super();
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(final String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(final String password) {
        this.password = password;
    }

    public RoleModel getRole() {
        return role;
    }

    public void setRole(final RoleModel role) {
        this.role = role;
    }

    public List<TrackModel> getTracks() {
        return tracks;
    }

    public void setTracks(final List<TrackModel> tracks) {
        this.tracks = tracks;
    }

    public List<ArtistModel> getArtists() {
        return artists;
    }

    public void setArtists(final List<ArtistModel> artists) {
        this.artists = artists;
    }

    public List<GenreModel> getGenres() {
        return genres;
    }

    public void setGenres(final List<GenreModel> genres) {
        this.genres = genres;
    }

    @Override
    public String toString() {
        return "User [id=" + super.getId() + ", login=" + login + "]";
    }

}
