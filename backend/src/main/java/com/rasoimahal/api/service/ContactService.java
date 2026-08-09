package com.rasoimahal.api.service;

import com.rasoimahal.api.dto.ContactRequestDto;
import com.rasoimahal.api.dto.ContactResponseDto;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class ContactService {

    public ContactResponseDto processContactMessage(ContactRequestDto dto) {
        String ticketId = "TKT-" + UUID.randomUUID().toString().substring(0, 8).toUpperCase();
        return new ContactResponseDto(
                ticketId,
                "RECEIVED",
                "Thank you for contacting RASOI MAHAL. Our concierge will reach out to you within 2 hours."
        );
    }
}
