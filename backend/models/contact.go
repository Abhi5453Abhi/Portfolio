package models

type ContactRequest struct {
	Email   string `json:"email" validate:"required,email"`
	Message string `json:"message" validate:"required,min=10"`
}

type ContactResponse struct {
	Success bool   `json:"success"`
	Message string `json:"message"`
}

