package handlers

import (
	"portfolio-backend/models"

	"github.com/gofiber/fiber/v2"
)

func HandleContact(c *fiber.Ctx) error {
	var req models.ContactRequest

	if err := c.BodyParser(&req); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(models.ContactResponse{
			Success: false,
			Message: "Invalid request body",
		})
	}

	// Basic validation
	if req.Email == "" || req.Message == "" {
		return c.Status(fiber.StatusBadRequest).JSON(models.ContactResponse{
			Success: false,
			Message: "Email and message are required",
		})
	}

	if len(req.Message) < 10 {
		return c.Status(fiber.StatusBadRequest).JSON(models.ContactResponse{
			Success: false,
			Message: "Message must be at least 10 characters",
		})
	}

	// TODO: Add email sending logic or database storage here
	// For now, just return success

	return c.JSON(models.ContactResponse{
		Success: true,
		Message: "Thank you for your message! I'll get back to you soon.",
	})
}

