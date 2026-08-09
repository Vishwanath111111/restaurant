package com.rasoimahal.api.controller;

import com.rasoimahal.api.dto.ContactRequestDto;
import com.rasoimahal.api.dto.ContactResponseDto;
import com.rasoimahal.api.service.ContactService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/contact")
public class ContactController {

    private final ContactService contactService;

    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    @PostMapping
    public ResponseEntity<ContactResponseDto> handleContactForm(@Valid @RequestBody ContactRequestDto dto) {
        ContactResponseDto response = contactService.processContactMessage(dto);
        return ResponseEntity.ok(response);
    }
}
