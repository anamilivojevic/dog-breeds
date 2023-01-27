package midterm.dogbreed.controller;

import midterm.dogbreed.entity.Breed;
import midterm.dogbreed.repository.BreedRepository;
import org.apache.logging.log4j.util.Strings;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/breeds")
public class BreedController {

    @Autowired
    private BreedRepository breedRepo;

    // REST services
    @GetMapping
    public List<Breed> getAllBreeds(@RequestParam(name="search", required = false) String keyword) {
        if (Strings.isBlank(keyword)) {
            return breedRepo.findAll();
        } else {
            return breedRepo.findByNameContainingIgnoreCaseOrDescriptionContainingIgnoreCase(keyword, keyword);
        }
    }

    @GetMapping("/{id}")
    public Breed getBreedById(@PathVariable int id) {
        Optional<Breed> result = breedRepo.findById(id);
        if(result.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Breed with id " + id + " not found.");
        } else {
            return result.get();
        }
    }

    @PostMapping
    public Breed createBreed(@RequestBody Breed newBreed) {
        Optional<Breed> result = breedRepo.findById(newBreed.getId());
        if(result.isPresent()) {
            throw new ResponseStatusException(HttpStatus.METHOD_NOT_ALLOWED, "Breed with id " + newBreed.getId() + " already exists.");
        } else {
            return breedRepo.save(newBreed);
        }
    }

    @PutMapping("/{id}")
    public Breed updateBreed(@PathVariable int id, @RequestBody Breed breed) {
        Optional<Breed> result = breedRepo.findById(id);
        if(result.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Breed with id " + id + " not found.");
        } else {
            Breed updatedBreed = new Breed(breed);
            updatedBreed.setId(id);
            return breedRepo.save(updatedBreed);
        }
    }


    @DeleteMapping("/{id}")
    public void deleteBreed(@PathVariable int id) {
        if(breedRepo.existsById(id)) {
            breedRepo.deleteById(id);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Breed with id " + id + " not found.");
        }
    }


}
