package com.rasoimahal.api.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public class NewsletterRequestDto {

    @NotBlank(message = "Email is required")
    @Email(message = "Invalid email address")
    private String email;

    public NewsletterRequestDto() {}

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
}
