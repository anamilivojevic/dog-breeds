package midterm.dogbreed;

import midterm.dogbreed.entity.Breed;
import midterm.dogbreed.enums.DogSize;
import midterm.dogbreed.repository.BreedRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class Testing implements CommandLineRunner {

    @Autowired
    private BreedRepository breedRepo;

    @Override
    public void run(String... args) throws Exception {
        /*Breed retriever = new Breed("Golden Retriever", "The Golden Retriever breed is friendly. Their tolerant attitude makes them great family pets, and their intelligence makes them highly capable working dogs.",
                "https://dogtime.com/assets/uploads/2011/01/file_22980_golden-retriever-460x290.jpg", 4, 10, 12, DogSize.LARGE);

        breedRepo.save(retriever);*/

    }
}
