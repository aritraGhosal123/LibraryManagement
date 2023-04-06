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

import com.xfactor.openlibrary.domain.Author;
import com.xfactor.openlibrary.repositories.AuthorRepository;

@RestController
@RequestMapping("Authors")
public class AuthorsController {

    private AuthorRepository authorRepository;

    public AuthorsController(AuthorRepository authorRepository) {
        this.authorRepository = authorRepository;
    }

    @PostMapping("/saveAuthor")
    public Author saveAuthor(@RequestBody Author author) {
        if (author.getId() == 0L) 
        {
         Author author2 = authorRepository.save(author);
            return author2;
        }
       return null;

    }

    @PutMapping("/updateAuthor")
    public Author updateAuthor(@RequestBody Author author) {
        if (author.getId() != 0L) {
            Author author2 = authorRepository.save(author);
            return author2;
        }
        return null;

    }   

    @GetMapping("/getAll")
    public List<Author> getAllAuthors() {
        return authorRepository.findAll();
    }

    @GetMapping("findById/{id}")
    public Author findById(@PathVariable Long id) {
        Optional<Author> optionalOfAuthor = authorRepository.findById(id);
        if (optionalOfAuthor.isPresent()) {
            return optionalOfAuthor.get();
        }
        return null;
    }

    @GetMapping("findTotal")
    public Long findTotal() {
        return authorRepository.count();
    }

    @DeleteMapping("delete/{id}")
    public void deleteAuthor(@PathVariable Long id) {
        authorRepository.deleteById(id);
    }


}