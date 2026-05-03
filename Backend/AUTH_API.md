# Authentication API Documentation

## Overview
This document describes the authentication endpoints for the Egypt Holiday backend.

## Base URL
```
http://localhost:5000/api/auth
```

---

## Endpoints

### 1. Sign Up (Register)
**POST** `/api/auth/signup`

Create a new user account.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123",
  "confirmPassword": "password123",
  "firstName": "John",
  "lastName": "Doe"
}
```

**Success Response (201):**
```json
{
  "success": true,
  "message": "User registered successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "email": "user@example.com",
    "firstName": "John",
    "lastName": "Doe"
  }
}
```

**Error Responses:**
- 400: Missing fields, password mismatch, invalid email, or password too short
- 409: Email already registered
- 500: Server error

---

### 2. Login
**POST** `/api/auth/login`

Authenticate user and get JWT token.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "email": "user@example.com",
    "firstName": "John",
    "lastName": "Doe"
  }
}
```

**Error Responses:**
- 400: Missing email or password
- 401: Invalid email or password
- 500: Server error

---

### 3. Forgot Password
**POST** `/api/auth/forgot-password`

Request a password reset. An email with reset link should be sent (in production).

**Request Body:**
```json
{
  "email": "user@example.com"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Reset link sent to your email",
  "resetToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Note:** The response contains the reset token for testing. In production, this should only be sent via email.

---

### 4. Reset Password
**POST** `/api/auth/reset-password`

Reset password using the reset token.

**Request Body:**
```json
{
  "resetToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "newPassword": "newpassword123",
  "confirmPassword": "newpassword123"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Password reset successfully. You can now login with your new password."
}
```

**Error Responses:**
- 400: Missing fields or password mismatch
- 401: Invalid or expired reset token
- 500: Server error

---

## Authentication Token Usage

For protected endpoints, include the JWT token in the Authorization header:

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

---

## Testing with Postman/REST Client

### Example: Sign Up
```bash
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "test123",
    "confirmPassword": "test123",
    "firstName": "Test",
    "lastName": "User"
  }'
```

### Example: Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "test123"
  }'
```

### Example: Forgot Password
```bash
curl -X POST http://localhost:5000/api/auth/forgot-password \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com"
  }'
```

### Example: Reset Password
```bash
curl -X POST http://localhost:5000/api/auth/reset-password \
  -H "Content-Type: application/json" \
  -d '{
    "resetToken": "YOUR_RESET_TOKEN",
    "newPassword": "newtest123",
    "confirmPassword": "newtest123"
  }'
```

---

## Notes

1. **Password Requirements:** Minimum 6 characters
2. **Token Expiry:** JWT tokens expire after 7 days
3. **Reset Token Expiry:** Password reset tokens expire after 1 hour
4. **Email Format:** Valid email format required
5. **Security:** In production:
   - Change `JWT_SECRET` in `.env`
   - Set up email service to send reset links
   - Use HTTPS
   - Implement rate limiting
   - Add CSRF protection
