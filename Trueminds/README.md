# Chuks Kitchen - UI Layout Implementation

🔴 **Live Demo:** [View the deployed website here](https://goodnews-code.github.io/Trueminds/)

## Project Overview
This project is a responsive web UI implementation of the "Chuks Kitchen" application based on the provided Figma design. Chuks Kitchen represents an authentic Nigerian food ordering platform where users can browse menus, view food details, add items to their cart, and proceed through a checkout flow. 

The goal of this project was to translate the UI/UX design into clean, maintainable, and responsive code, replicating over 10 screens (including Home, Explore, Food Details, Cart, Checkout, Sign In, and Sign Up) while maintaining strict adherence to the visual hierarchy, alignment, and spacing.

## Technical Description (How to Run the Project)
Because this project strictly adheres to pure HTML and CSS without any build tools, frameworks, or dependencies, running it is exceptionally straightforward:

1. **Option 1: Local File Viewing (No Server Required)**
   - Simply extract the provided project folder.
   - Double-click on `index.html` to open it in your default web browser (Chrome, Firefox, Safari, Edge, etc.).
   - You can click on the buttons and links to seamlessly navigate between the connected screens (`home.html`, `explore.html`, `signin.html`, etc.).

2. **Option 2: Using VS Code Live Server (For Developers)**
   - Open the primary project folder (`Chuks Kitchen`) in Visual Studio Code.
   - Install the "Live Server" extension by Ritwick Dey.
   - Right-click on `index.html` and select **"Open with Live Server"**.
   - The application will open in your browser at `http://localhost:5500`.

**Other Necessary Information**:
- **Images:** All exported Figma images were heavily compressed and optimized (using standard compression techniques) reducing total asset size by >80% to ensure fast loading times on live servers and slow web connections.
- **Responsiveness Test:** To test the responsiveness, simply resize your browser window horizontally, or use Chrome DevTools (F12) to toggle the device toolbar between Desktop, Tablet (`<=1024px`), and Mobile (`<=768px`) viewports.

## Tech Stack Used
* **HTML5**: Used for structuring the content. Semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<aside>`, `<footer>`) were used to ensure accessibility and structural meaning.
* **CSS3**: Used for all styling. 
  * **Flexbox & CSS Grid**: Used extensively for layout management (e.g., side-by-side forms, grids for menu items, responsive footer columns).
  * **Media Queries**: Used for basic and effective responsiveness across tablet (max-width: 1024px) and mobile (max-width: 768px) breakpoints.
  * *Why this stack?* The instructions discouraged over-engineering and requested intermediate-to-beginner friendly CSS. Relying on vanilla HTML/CSS without complex frameworks (like Tailwind or React) ensures the code is easily readable and adheres perfectly to the assignment constraints.

## Project Structure
* `/css/style.css`: The central and only stylesheet. It is organized with clear comments separating global styles, typography, layout components (headers, footers), individual page specifications, and a dedicated responsive sections at the bottom for tablet and mobile overrides.
* `/images/`: Directory containing all the exported image assets, icons, and backgrounds used in the UI.
* `*.html`: Individual HTML files representing the different screens. 
  * `index.html`, `home.html`, `explore.html`, `details.html`: Browsing and landing experience.
  * `signin.html`, `signup.html`: Authentication screens.
  * `cart.html`, `checkout-delivery.html`, `checkout-payment.html`, `checkout-summary.html`, `order-complete.html`: The complete e-commerce checkout flow.

## Design Interpretation
* **Translation to Code**: The Figma design provided the baseline for colors, typography, and spacing. I mapped out the primary fonts (Inter, Jost, Poppins, Island Moments) via Google Fonts and set up base CSS variables and resets.
* **Responsiveness**: The design was interpreted with a desktop-first approach. For smaller screens, Grid layouts (like the 4-column footer or 3-column category grids) gracefully degrade into 2-column or 1-column layouts using CSS media queries.
* **Assumptions Made**: Where mobile/tablet specific layouts were not explicitly detailed in every iteration of the design, I made logical UI/UX assumptions (e.g., stacking the hero image above the login form on mobile, converting the side-navigation into a more mobile-friendly flowing layout, and adjusting padding/font-sizes proportionally for smaller screens).

## Limitations & Improvements
* **Limitations**: 
  * Currently, the application is purely static HTML and CSS. There is no JavaScript, meaning interactions like adding items to the cart, calculating totals, or validating forms are not functional.
  * The repeated elements (like the navigation header and footer) are hardcoded into every HTML file instead of being modular components.
* **Improvements if given more time**:
  * **JavaScript Interactivity**: I would add vanilla JS to manage a mock cart state, handle mobile hamburger menu toggles, and simulate form submissions.
  * **Templating/Components**: If allowed to use a build tool or framework, I would convert the UI into reusable components (e.g., `<Navbar />`, `<Footer />`, `<FoodCard />`) to follow DRY (Don't Repeat Yourself) principles.
  * **Micro-interactions**: Adding subtle CSS hover transitions, button active states, and focus rings to improve the overall UX and website accessibility further.
