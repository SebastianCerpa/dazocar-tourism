# Pull Request: Chile Tourism Website Enhancements

## Overview

This pull request includes various enhancements and new features for the Chile Tourism website, improving both functionality and visual appeal across multiple components.

## Changes

### New Assets

- Added multiple new image assets:
  - Service images: personalized, standard, family, and business service images
  - Logo images: main logo and navbar logo
  - Icon SVGs: destination and service icons
  - Chile map image for the services page

### Visual Improvements

#### Image Styling

- Added a bottom shadow effect to images with the `.about-img` class
  - Shadow styling: `box-shadow: 7px 10px 6px 7px var(--color-shadow)`
  - This enhancement adds depth to images on the About and Services pages
  - Hover effect with subtle scale transformation for improved interactivity

#### Service Cards

- Enhanced service cards with hover effects
  - Transform effect: `translateY(-5px)` on hover
  - Added box-shadow on hover for a subtle elevation effect
- Improved category labels with accent color background

### Component Enhancements

#### AnimatedSection Component

- Implemented throughout the site for consistent scroll animations
- Uses Framer Motion for smooth, performant animations
- Features configurable delay parameter for staggered animations
- Animates elements as they enter the viewport with a subtle fade-in and slide-up effect
- Applied to key sections on both About and Services pages

#### Navbar Component

- Enhanced with responsive design for mobile and desktop
- Added hamburger menu toggle for mobile navigation
- Implemented smooth transitions for menu opening/closing
- Updated with new logo image in the navigation bar
- Improved accessibility with proper link structure

#### Homepage

- Updated hero section with improved call-to-action
- Added animated sections for better content presentation
- Implemented carousel component for visual content
- Enhanced about section with statistics and dual-button layout

#### Services Page

- Structured service cards with consistent styling
- Added service categories with visual indicators
- Implemented feature lists for each service type
- Added dedicated CSS file (services.css) for better organization

#### About Page

- Enhanced story sections with responsive layouts
- Improved team section with descriptive content
- Added values section with card-based layout

### CSS Improvements

- Added new dedicated services.css file for better organization of service-specific styles
- Enhanced globals.css with improved component styling
- Added new variables for consistent color theming
- Implemented responsive utility classes

### Responsive Design

- Improved mobile responsiveness across all pages
- Adjusted image sizing and layout for smaller screens
- Implemented responsive grid for service and value cards
- Added media queries for better mobile navigation experience

## Testing

- Verified all pages render correctly on desktop and mobile viewports
- Confirmed animations work properly across modern browsers
- Validated image loading and styling across the site

## Screenshots

_Screenshots would be included here in an actual PR_

## Next Steps

- Consider adding more interactive elements to service cards
- Implement actual contact form functionality for the CTA buttons
- Further optimize images for performance
