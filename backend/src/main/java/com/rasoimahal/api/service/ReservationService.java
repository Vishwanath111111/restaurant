package com.rasoimahal.api.service;

import com.rasoimahal.api.dto.ReservationRequestDto;
import com.rasoimahal.api.dto.ReservationResponseDto;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.concurrent.CopyOnWriteArrayList;

@Service
public class ReservationService {

    private final List<ReservationResponseDto> reservations = new CopyOnWriteArrayList<>();

    public ReservationResponseDto createReservation(ReservationRequestDto dto) {
        String bookingId = "RM-" + UUID.randomUUID().toString().substring(0, 8).toUpperCase();
        ReservationResponseDto response = new ReservationResponseDto(
                bookingId,
                "CONFIRMED",
                "Your royal dining reservation has been confirmed at RASOI MAHAL.",
                dto.getCustomerName(),
                dto.getDate(),
                dto.getTime(),
                dto.getGuests(),
                LocalDateTime.now()
        );

        reservations.add(response);
        return response;
    }

    public List<ReservationResponseDto> getAllReservations() {
        return new ArrayList<>(reservations);
    }
}
