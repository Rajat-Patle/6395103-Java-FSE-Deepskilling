package com.library.service;

import com.library.repository.BookRepository;

public class BookService {

    private BookRepository bookRepository;

    // Setter for Dependency Injection
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void displayBooks() {
        System.out.println("Calling repository from service...");
        bookRepository.getBooks();
    }

    public void addBook() {
        System.out.println("BookService: Adding a book...");
        bookRepository.saveBook();
    }
}
