package by.gsu.entity;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.ws.rs.DefaultValue;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "track")
public class TrackEntity extends AbstractEntity {

    private static final long       serialVersionUID = 1952582684617860747L;

    @Column(name = "name", nullable = false, length = 255)
    private String                  name;

    @Column(name = "song", nullable = false, length = 255)
    private String                  song;

    @Column(name = "cover", nullable = false, length = 255)
    private String                  cover;

    @Column(name = "video", length = 255)
    private String                  video;

    @Column(name = "released", nullable = false)
    @Temporal(TemporalType.DATE)
    private Date                    release;

    @Column(name = "rating", nullable = false)
    @DefaultValue(value = "0")
    private long                    rating;

    @JsonIgnore
    @OneToMany(cascade = {CascadeType.DETACH}, mappedBy = "artist")
    private List<TrackArtistEntity> artistsOrder;

    @JsonIgnore
    @OneToMany(cascade = {CascadeType.DETACH}, mappedBy = "unit")
    private List<TrackUnitEntity>   unitsOrder;

    @JsonIgnore
    @ManyToMany(targetEntity = GenreEntity.class, cascade = {CascadeType.DETACH})
    @JoinTable(name = "track_genre", joinColumns = @JoinColumn(name = "id_track", nullable = false, updatable = false), inverseJoinColumns = @JoinColumn(name = "id_genre", nullable = false, updatable = false))
    private List<GenreEntity>       genres;

    @JsonIgnore
    @ManyToMany(targetEntity = UserEntity.class, cascade = {CascadeType.DETACH})
    @JoinTable(name = "user_track", joinColumns = @JoinColumn(name = "id_track", nullable = false, updatable = false), inverseJoinColumns = @JoinColumn(name = "id_user", nullable = false, updatable = false))
    private List<UserEntity>        users;

    public TrackEntity() {
        super();
    }

    public TrackEntity(final String name, final String song, final String cover, final String video,
            final Date release) {
        super();
        this.name = name;
        this.song = song;
        this.cover = cover;
        this.video = video;
        this.release = release;
    }

    public TrackEntity(final String name, final String song, final String cover, final String video,
            final Date release, final long rating, final List<TrackArtistEntity> artistsOrder,
            final List<TrackUnitEntity> unitsOrder, final List<GenreEntity> genres,
            final List<UserEntity> users) {
        super();
        this.name = name;
        this.song = song;
        this.cover = cover;
        this.video = video;
        this.release = release;
        this.rating = rating;
        this.artistsOrder = artistsOrder;
        this.unitsOrder = unitsOrder;
        this.genres = genres;
        this.users = users;
    }

    public TrackEntity(final long id, final String name, final String song, final String cover,
            final String video, final Date release, final long rating,
            final List<TrackArtistEntity> artistsOrder, final List<TrackUnitEntity> unitsOrder,
            final List<GenreEntity> genres, final List<UserEntity> users) {
        super(id);
        this.name = name;
        this.song = song;
        this.cover = cover;
        this.video = video;
        this.release = release;
        this.rating = rating;
        this.artistsOrder = artistsOrder;
        this.unitsOrder = unitsOrder;
        this.genres = genres;
        this.users = users;
    }

    public String getName() {
        return name;
    }

    public void setName(final String name) {
        this.name = name;
    }

    public String getSong() {
        return song;
    }

    public void setSong(final String song) {
        this.song = song;
    }

    public String getCover() {
        return cover;
    }

    public void setCover(final String cover) {
        this.cover = cover;
    }

    public String getVideo() {
        return video;
    }

    public void setVideo(final String video) {
        this.video = video;
    }

    public Date getRelease() {
        return release;
    }

    public void setRelease(final Date release) {
        this.release = release;
    }

    public long getRating() {
        return rating;
    }

    public void setRating(final long rating) {
        this.rating = rating;
    }

    public List<TrackArtistEntity> getArtistsOrder() {
        return artistsOrder;
    }

    public void setArtistsOrder(final List<TrackArtistEntity> artistsOrder) {
        this.artistsOrder = artistsOrder;
    }

    public List<TrackUnitEntity> getUnitsOrder() {
        return unitsOrder;
    }

    public void setUnitsOrder(final List<TrackUnitEntity> unitsOrder) {
        this.unitsOrder = unitsOrder;
    }

    public List<GenreEntity> getGenres() {
        return genres;
    }

    public void setGenres(final List<GenreEntity> genres) {
        this.genres = genres;
    }

    public List<UserEntity> getUsers() {
        return users;
    }

    public void setUsers(final List<UserEntity> users) {
        this.users = users;
    }

    @Override
    public String toString() {
        return getClass().getName() + "[id:" + super.getId() + ",name:" + name + ",song:" + song
                + ",cover:" + cover + ",video:" + video + ",release:" + release + ",rating:"
                + rating + "]";
    }

}
