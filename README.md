# Nuxt 3 Blog Application

This project is a blog application built using **Nuxt 3**. It features user authentication (login and logout) and full blog management (CRUD) with blog filtering functionality. The project leverages the following technologies:

- **Nuxt 3**: A modern framework for building Vue-based web applications.
- **Tailwind CSS**: A utility-first CSS framework for fast and responsive styling.
- **Pinia**: A simple and flexible state management library for Vue.
- **Vee Validate**: A schema-based form validation library for Vue.
- **Yup**: A JavaScript schema builder for validation.

## Features

1. **Authentication**:

   - User login and logout.
   - `auth` middleware to protect specific routes.

2. **Blog Management**:
   - Create, read, update, and delete (CRUD) blog posts.
   - Filter blog posts based category.

## Technologies Used

- **Nuxt 3**: The main framework for development.
- **Tailwind CSS**: For consistent and responsive styling.
- **Pinia**: For state management across the application.
- **Vee Validate & Yup**: For form validation, including login and blog creation forms.

# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
