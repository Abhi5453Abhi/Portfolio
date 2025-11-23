# Portfolio Website

A modern, dark-themed portfolio website for Abhishek Arora built with React (TypeScript) and Go.

## Features

- **Dark Theme**: Modern black background with green accent colors
- **Responsive Design**: Fully responsive for mobile, tablet, and desktop
- **Smooth Navigation**: Smooth scrolling between sections
- **Contact Form**: Integrated contact form with Go backend API
- **Sections**:
  - Hero section with profile image placeholder
  - Worked with section (company logos)
  - Experience section with detailed work history
  - Skills section with categorized technologies
  - Achievements section showcasing competition wins
  - Education section
  - Contact section with form and contact information

## Technology Stack

### Frontend
- React 19 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- React Icons for social media icons

### Backend
- Go (Golang)
- Fiber web framework
- CORS middleware for API access

## Project Structure

```
Portfolio/
├── frontend/          # React application
│   ├── src/
│   │   ├── components/    # Reusable components (Header)
│   │   ├── sections/      # Page sections (Hero, Experience, etc.)
│   │   ├── data/          # Resume data
│   │   ├── types/         # TypeScript interfaces
│   │   ├── App.tsx
│   │   └── main.tsx
│   └── package.json
├── backend/           # Go API server
│   ├── handlers/      # API handlers
│   ├── models/        # Data models
│   ├── main.go
│   └── go.mod
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- Go (v1.21 or higher)
- npm or yarn

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install Go dependencies (if needed):
```bash
go mod tidy
```

3. Run the server:
```bash
go run main.go
```

The backend API will be available at `http://localhost:8080`

## API Endpoints

### Contact Form
- **POST** `/api/contact`
  - Request body: `{ "email": "user@example.com", "message": "Your message here" }`
  - Response: `{ "success": true, "message": "Thank you for your message!" }`

### Health Check
- **GET** `/health`
  - Response: `{ "status": "ok" }`

## Customization

### Adding Profile Image
Replace the placeholder in `frontend/src/sections/Hero.tsx` with your profile image:
```tsx
<img src="/path-to-your-image.jpg" alt="Profile" className="w-full h-full object-cover" />
```

### Adding Company Logos
Add company logos to the `public` folder and update `frontend/src/data/resume.ts`:
```tsx
export const companies = [
  { name: 'ACV Auctions', logo: '/logos/acv-auctions.png' },
  // ...
];
```

Then update `frontend/src/sections/WorkedWith.tsx` to display the logos.

### Updating Resume Data
Edit `frontend/src/data/resume.ts` to update your personal information, work experience, skills, achievements, and education.

## Building for Production

### Frontend
```bash
cd frontend
npm run build
```

The built files will be in the `dist` directory.

### Backend
```bash
cd backend
go build -o portfolio-backend
```

## License

This project is private and personal.

