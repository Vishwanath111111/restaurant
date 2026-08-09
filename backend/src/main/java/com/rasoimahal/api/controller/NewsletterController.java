package com.rasoimahal.api.controller;

import com.rasoimahal.api.dto.NewsletterRequestDto;
import com.rasoimahal.api.service.NewsletterService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/v1/newsletter")
public class NewsletterController {

    private final NewsletterService newsletterService;

    public NewsletterController(NewsletterService newsletterService) {
        this.newsletterService = newsletterService;
    }

    @PostMapping
    public ResponseEntity<Map<String, String>> subscribeNewsletter(@Valid @RequestBody NewsletterRequestDto dto) {
        return ResponseEntity.ok(newsletterService.subscribe(dto));
    }
}
