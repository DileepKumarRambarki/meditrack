# Meditrack

Comprehensive Health Care Management System

## Overview

Meditrack is a full-stack application designed to streamline and manage various aspects of healthcare for patients. It enables users to maintain digital medical records, book appointments, find nearby hospitals, and manage prescriptions with ease.

## Features

- **User Authentication**: Secure sign-up and login using encrypted passwords.
- **Medical Records Management**:
  - Store, retrieve, and manage lab reports and prescriptions.
  - Add new laboratory records and prescription details.
- **Appointment Booking**:
  - Book appointments with hospitals, view available slots, and manage your bookings.
- **Nearby Hospitals**: Find hospitals near your location.
- **Interactive Dashboard**: Intuitive interface with navigation for quick access to key features (lab reports, appointments, hospitals, etc.).

## Tech Stack

- **Frontend**: React (with Vite for fast development and HMR), Material UI Joy, React Router.
- **Backend**: Node.js, Express.js, MongoDB (Mongoose).
- **Other Tools**: bcryptjs for password encryption.

## Project Structure

```
meditrack/
├── client/         # React frontend (Vite, pages, components, styles)
│   ├── src/
│   ├── public/
│   └── vite.config.js
├── server/         # Express backend (API, controllers, models, routes)
│   ├── models/     # Mongoose schemas for users, appointments, records, prescriptions
│   ├── controller/ # Business logic for users, records, appointments
│   └── routes/
└── package.json
```

## Main Modules

- **User Management**: Handles registration and authentication.
- **Lab Records**: Add and view laboratory test results.
- **Prescriptions**: Manage and store prescription data.
- **Appointments**: Create and manage hospital appointments.
- **Hospital Locator**: Find and display nearby hospitals.

## Getting Started

1. **Clone the repository**:

   ```sh
   git clone https://github.com/DileepKumarRambarki/meditrack.git
   ```
2. **Install dependencies** for both client and server:

   ```sh
   cd meditrack/client
   npm install
   cd ../server
   npm install
   ```
3. **Set up environment variables** as needed for MongoDB and other configs.
4. **Run the application**:

   - Start the server:

     ```sh
     cd server
     npm start
     ```
   - Start the client:

     ```sh
     cd ../client
     npm run dev
     ```
   - Start the ML model:

     ```sh
     uvicorn app:app --reload
     ```

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

This project does not currently specify a license.
