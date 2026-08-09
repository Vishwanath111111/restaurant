package com.rasoimahal.api.dto;

import java.time.LocalDateTime;

public class ReservationResponseDto {

    private String bookingId;
    private String status;
    private String message;
    private String customerName;
    private String date;
    private String time;
    private Integer guests;
    private LocalDateTime createdAt;

    public ReservationResponseDto() {}

    public ReservationResponseDto(String bookingId, String status, String message, String customerName, String date, String time, Integer guests, LocalDateTime createdAt) {
        this.bookingId = bookingId;
        this.status = status;
        this.message = message;
        this.customerName = customerName;
        this.date = date;
        this.time = time;
        this.guests = guests;
        this.createdAt = createdAt;
    }

    public String getBookingId() { return bookingId; }
    public void setBookingId(String bookingId) { this.bookingId = bookingId; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }

    public String getCustomerName() { return customerName; }
    public void setCustomerName(String customerName) { this.customerName = customerName; }

    public String getDate() { return date; }
    public void setDate(String date) { this.date = date; }

    public String getTime() { return time; }
    public void setTime(String time) { this.time = time; }

    public Integer getGuests() { return guests; }
    public void setGuests(Integer guests) { this.guests = guests; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}
