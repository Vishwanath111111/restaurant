package com.rasoimahal.api.service;

import com.rasoimahal.api.dto.NewsletterRequestDto;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class NewsletterService {

    public Map<String, String> subscribe(NewsletterRequestDto dto) {
        return Map.of(
                "status", "SUCCESS",
                "message", "Welcome to RASOI MAHAL Royal Connoisseurs Circle. You have been subscribed to exclusive updates."
        );
    }
}
