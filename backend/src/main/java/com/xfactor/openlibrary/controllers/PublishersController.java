package com.xfactor.openlibrary.controllers;
import java.util.*;
import java.util.Optional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.xfactor.openlibrary.domain.Publisher;
import com.xfactor.openlibrary.repositories.PublisherRepository;

//import org.springframework.web.bind.annotation.PathVariable;


@RestController
@RequestMapping("PublishersController")
public class PublishersController {
    private PublisherRepository publisherRepository;

    public PublishersController(PublisherRepository publisherRepository) {
        this.publisherRepository = publisherRepository;
    }
    
    @PostMapping("/savePublisher")
    public Publisher savePublisher(@RequestBody Publisher publisher) {
        if (publisher.getId() == 0L) {
         Publisher publisher2 = publisherRepository.save(publisher);
            return publisher2;
        }
       return null;

    }

    @PutMapping("/updatePublisher")
    public Publisher updatePublisher(@RequestBody Publisher publisher) {
        if (publisher.getId() != 0L) {
            Publisher publisher2 = publisherRepository.save(publisher);
            return publisher2;
        }
        return null;

    }   

    @GetMapping("/getAll")
    public List<Publisher> getAllStudents() {
        return publisherRepository.findAll();
    }

    @GetMapping("findById/{id}")
    public Publisher findById(@PathVariable Long id) {
        Optional<Publisher> optionalOfPublisher = publisherRepository.findById(id);
        if (optionalOfPublisher.isPresent()) {
            return optionalOfPublisher.get();
        }
        return null;
    }

    @GetMapping("findTotal")
    public Long findTotal() {
        return publisherRepository.count();
    }

    @DeleteMapping("delete/{id}")
    public void deletepublisher(@PathVariable Long id) {
        publisherRepository.deleteById(id);
    }

    @GetMapping("findByname/{name}")
    public List<Publisher> findByName(@PathVariable String name) {
        List<Publisher> publishers = publisherRepository.findByName(name);
        return publishers;
    }

}