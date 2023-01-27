package midterm.dogbreed.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import midterm.dogbreed.enums.DogSize;
import org.hibernate.validator.constraints.Range;

@Entity
@Table(name = "breeds")
public class Breed {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotBlank
    @Size(max = 255)
    private String name;

    @Column(columnDefinition = "text")
    private String description;

    private String imageUrl;

    @Range(min = 0, max = 5)
    private int trainability;

    @Range(min = 1, max = 30)
    private int minLifeSpan;

    @Range(min = 1, max = 30)
    private int maxLifeSpan;

    @Enumerated(EnumType.STRING)
    @Column(name = "size")
    private DogSize size;

    public Breed() {
    }

    public Breed(String name, String description, String imageUrl, int trainability, int minLifeSpan, int maxLifeSpan, DogSize size) {
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.trainability = trainability;
        this.minLifeSpan = minLifeSpan;
        this.maxLifeSpan = maxLifeSpan;
        this.size = size;
    }

    public Breed(Breed breedToCopy) {
        this.name = breedToCopy.getName();
        this.description = breedToCopy.getDescription();
        this.imageUrl = breedToCopy.getImageUrl();
        this.trainability = breedToCopy.getTrainability();
        this.minLifeSpan = breedToCopy.getMinLifeSpan();
        this.maxLifeSpan = breedToCopy.getMaxLifeSpan();
        this.size = breedToCopy.getSize();
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public int getTrainability() {
        return trainability;
    }

    public void setTrainability(int trainability) {
        this.trainability = trainability;
    }

    public int getMinLifeSpan() {
        return minLifeSpan;
    }

    public void setMinLifeSpan(int minLifeSpan) {
        this.minLifeSpan = minLifeSpan;
    }

    public int getMaxLifeSpan() {
        return maxLifeSpan;
    }

    public void setMaxLifeSpan(int maxLifeSpan) {
        this.maxLifeSpan = maxLifeSpan;
    }

    public DogSize getSize() {
        return size;
    }

    public void setSize(DogSize size) {
        this.size = size;
    }
}
