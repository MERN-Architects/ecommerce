# Modern E-Commerce Platform

A full-featured e-commerce platform built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🛍️ Multi-category product listings
- 🔐 User authentication with Firebase
- 🛒 Shopping cart functionality
- 💳 Payment integration with Stripe
- 🌙 Dark mode support
- 📱 Fully responsive design
- ⚡ Fast page loads with Next.js
- 🎨 Beautiful UI with Tailwind CSS
- 🔍 Product search and filtering
- ⭐ Product reviews and ratings
- 🏷️ Coupon and discount system
- 📦 Order tracking
- 💖 Wishlist functionality
- 🤖 AI-powered recommendations

## Tech Stack

- **Frontend**: Next.js, TypeScript, Tailwind CSS
- **State Management**: Redux Toolkit
- **Authentication**: Firebase/Auth.js
- **Database**: MongoDB
- **File Storage**: Cloudinary
- **Payment**: Stripe
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **UI Components**: Custom components
- **Form Handling**: React Hook Form
- **API Integration**: Axios
- **Toast Notifications**: React Hot Toast

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ecommerce.git
```

2. Install dependencies:
```bash
npm install
```

3. Create a .env file in the root directory and add your environment variables:
```env
# MongoDB Configuration
MONGODB_URI=your_mongodb_uri

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Stripe Configuration
STRIPE_PUBLIC_KEY=your_public_key
STRIPE_SECRET_KEY=your_secret_key

# Firebase Configuration
FIREBASE_API_KEY=your_api_key
FIREBASE_AUTH_DOMAIN=your_auth_domain
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_STORAGE_BUCKET=your_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=your_sender_id
FIREBASE_APP_ID=your_app_id

# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── components/     # Reusable components
│   ├── lib/           # Library code, utilities
│   ├── store/         # Redux store configuration
│   ├── api/          # API routes
│   ├── (routes)/     # App routes
│   ├── (auth)/       # Authentication routes
│   └── admin/        # Admin dashboard
├── public/           # Static files
└── package.json      # Project dependencies
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
