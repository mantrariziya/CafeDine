# CafeDine

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)](https://jquery.com)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com)
[![Swiper](https://img.shields.io/badge/Swiper.js-6332F6?style=for-the-badge&logo=swiper&logoColor=white)](https://swiperjs.com)

A modern, responsive restaurant website for **CafeDine** — located at 248-249, KBC, Katargam, Surat.

---

## Why This Project?

Most local restaurants in Surat lack a professional online presence. CafeDine solves this by providing a complete, mobile-friendly website with menu showcase, table reservation, gallery, blog, and order flow — all without a backend dependency, making it easy to host anywhere.

---

## Features

| Feature | Description |
|---------|-------------|
| Hero Slider | Full-screen parallax banner with autoplay using Swiper.js |
| Food Menu | Filterable menu grid using Shuffle.js (All / Starter / Launch / Dinner) |
| Table Reservation | Date + time picker form for booking |
| Photo Gallery | Video gallery + image lightbox using Magnific Popup |
| Blog | Blog listing and single post pages |
| Order Flow | Cart → Shipping → Payment → Confirmation pages |
| Instagram Feed | Static gallery slider styled as Instagram feed |
| Contact Form | Email form with contact.js handler |
| Scroll Animations | AOS (Animate On Scroll) throughout |
| Responsive Design | Bootstrap 4 grid, mobile-first layout |

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| HTML5 / CSS3 | Structure and styling |
| JavaScript (ES5) | Core interactivity |
| jQuery 3.x | DOM manipulation, plugin base |
| Bootstrap 4 | Responsive grid and components |
| Swiper.js | Hero slider and Instagram gallery |
| Shuffle.js | Menu filtering and masonry |
| AOS | Scroll-triggered animations |
| Magnific Popup | Image and gallery lightbox |
| Clockpicker | Time picker for reservation form |
| Datepicker | Date picker for reservation form |
| Bootstrap Touchspin | Quantity input for cart |
| jQuery Modal Video | YouTube video popup in gallery |
| Instafeed.js | Instagram feed integration |
| Icofont | Icon font library |
| Themify Icons | Icon font library |

---

## Project Structure

```
CafeDine/
├── index.html              # Homepage
├── pages/
│   ├── about.html          # About us & chefs
│   ├── menu.html           # Full food menu with filter
│   ├── gallery.html        # Video & photo gallery
│   ├── contact.html        # Contact form
│   ├── reservation.html    # Table reservation form
│   ├── blog.html           # Blog listing
│   ├── blog-single.html    # Single blog post
│   ├── cart.html           # Shopping cart
│   ├── shipping.html       # Shipping details
│   ├── payment.html        # Payment form
│   ├── confirmation.html   # Order confirmation
│   ├── policy.html         # Privacy policy
│   └── terms.html          # Terms & conditions
└── assets/
    ├── css/
    │   └── style.css       # Main stylesheet
    ├── js/
    │   ├── main.js         # Sliders, filters, AOS, pickers
    │   └── contact.js      # Contact form handler
    ├── images/             # All site images
    └── vendors/            # Third-party libraries (local)
```

---

## Getting Started

No build tools or server required.

1. Clone the repository:

```bash
git clone https://github.com/mantrariziya/CafeDine.git
cd cafedine
```

2. Open `index.html` directly in your browser — or use Live Server in VS Code for best results.

---

## Roadmap

- [ ] Backend integration for reservation form (Node.js / PHP)
- [ ] Real Instagram feed via Instafeed API
- [ ] Online ordering with payment gateway
- [ ] Admin panel for menu management
- [ ] PWA support for mobile install

---

## Author

[![GitHub](https://img.shields.io/badge/GitHub-mantrariziya-181717?style=flat&logo=github)](https://github.com/mantrariziya)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-mantra--riziya-0A66C2?style=flat&logo=linkedin)](https://linkedin.com/in/mantra-riziya-7aa1752b6)
[![Email](https://img.shields.io/badge/Email-riziyamantra@gmail.com-D14836?style=flat&logo=gmail)](mailto:riziyamantra@gmail.com)

---

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
