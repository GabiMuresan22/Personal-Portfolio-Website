# Website Enhancement for Google Maps Integration

## Overview
This document provides the code snippets you can add to your website to improve your Google Maps listing and local SEO.

---

## 1. Structured Data (Schema.org JSON-LD)

Add this code inside the `<head>` section of your `index.html` file, before the closing `</head>` tag.

**Important**: Replace the placeholder values (marked with `YOUR_...`) with your actual business information.

```html
<!-- Structured Data for Local Business -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Gabi Muresan Web Development",
  "alternateName": "Gabi Muresan - Web Developer",
  "description": "Professional Web Developer in Roeselare, Belgium. Specializing in responsive web design, custom web applications, and digital solutions.",
  "url": "https://gabimuresan22.github.io/Personal-Portfolio-Website/",
  "logo": "https://gabimuresan22.github.io/Personal-Portfolio-Website/img/gabi-muresan-logo.webp",
  "image": "https://gabimuresan22.github.io/Personal-Portfolio-Website/img/gabi-muresan-logo.webp",
  "telephone": "YOUR_PHONE_NUMBER",
  "email": "YOUR_EMAIL_ADDRESS",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "YOUR_STREET_ADDRESS",
    "addressLocality": "Roeselare",
    "addressRegion": "West Flanders",
    "postalCode": "8800",
    "addressCountry": "BE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "YOUR_LATITUDE",
    "longitude": "YOUR_LONGITUDE"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Roeselare"
    },
    {
      "@type": "AdministrativeArea",
      "name": "West Flanders"
    },
    {
      "@type": "Country",
      "name": "Belgium"
    }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/gabimuresanwebdev/",
    "https://x.com/GabiMuresan22",
    "https://www.linkedin.com/in/gabriel-muresan-a34956208/",
    "https://github.com/GabiMuresan22"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Web Development Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Responsive Web Design",
          "description": "Mobile-first, responsive website design and development"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom Web Development",
          "description": "Tailored web applications and custom solutions"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Website Optimization",
          "description": "SEO optimization and performance enhancement"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web App Development",
          "description": "React and JavaScript-based web applications"
        }
      }
    ]
  }
}
</script>
```

---

## 2. How to Get Your GPS Coordinates

To fill in the latitude and longitude values:

### Method 1: Using Google Maps
1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your business address in Roeselare
3. Right-click on the exact location marker
4. Click on the coordinates that appear (they'll be copied)
5. The format is: `latitude, longitude` (e.g., `50.9502, 3.1262`)

### Method 2: Using a GPS Coordinate Finder
1. Go to [GPS Coordinates](https://www.gps-coordinates.net/)
2. Enter your address
3. Copy the decimal coordinates

---

## 3. Optional: Add a Google Maps Embed to Your Contact Section

If you want to show a map on your website's contact page, you can embed Google Maps.

### Steps to Get Embed Code:
1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your business location
3. Click **"Share"** button
4. Select **"Embed a map"** tab
5. Choose your preferred size
6. Copy the iframe code

### Where to Add It:
Add this code in your contact section (around line 235 in index.html, after the form):

```html
<!-- Contact Section -->
<section class="contact-form" id="contact">
  <div class="container">
    <h3>
      Let's grow your business together. Contact us to discuss your online
      needs. We're here to help you succeed.
    </h3>
    <form action="https://formspree.io/f/mjkybdpe" method="post">
      <input type="text" name="name" placeholder="Name" required />
      <input type="text" name="email" placeholder="Email" required />
      <textarea name="message" placeholder="Message" required></textarea>
      <button class="btn" type="submit">Send Message</button>
    </form>
    
    <!-- Add Google Maps Embed Here (Optional) -->
    <div class="map-container" style="margin-top: 2rem; border-radius: 8px; overflow: hidden;">
      <iframe 
        src="YOUR_GOOGLE_MAPS_EMBED_URL_HERE" 
        width="100%" 
        height="400" 
        style="border:0;" 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  </div>
</section>
```

---

## 4. Add NAP (Name, Address, Phone) to Footer (Optional)

For better local SEO, you can add your business contact information in the footer:

```html
<footer class="footer">
  <div class="container">
    <!-- Add Business Contact Info -->
    <div class="business-info" style="margin-bottom: 2rem;">
      <h4>Gabi Muresan Web Development</h4>
      <p>
        <strong>Address:</strong> YOUR_ADDRESS, Roeselare 8800, Belgium<br>
        <strong>Phone:</strong> <a href="tel:YOUR_PHONE">YOUR_PHONE</a><br>
        <strong>Email:</strong> <a href="mailto:YOUR_EMAIL">YOUR_EMAIL</a>
      </p>
    </div>
    
    <h4 class="social-media">Social Media</h4>
    <ul class="social-media-menu">
      <!-- existing social media links -->
    </ul>
  </div>
</footer>
```

---

## 5. Validation Tools

After adding structured data to your website, validate it:

### Google's Rich Results Test
1. Go to [Rich Results Test](https://search.google.com/test/rich-results)
2. Enter your website URL or paste your code
3. Check for errors and warnings
4. Fix any issues found

### Schema.org Validator
1. Go to [Schema Markup Validator](https://validator.schema.org/)
2. Paste your JSON-LD code
3. Verify there are no errors

---

## 6. Implementation Checklist

- [ ] Replace all `YOUR_...` placeholders with actual information
- [ ] Add structured data to `<head>` section
- [ ] Get GPS coordinates for your location
- [ ] Validate structured data with Google's Rich Results Test
- [ ] (Optional) Add Google Maps embed to contact section
- [ ] (Optional) Add NAP information to footer
- [ ] Submit updated sitemap to Google Search Console
- [ ] Link Google Business Profile with Google Search Console

---

## 7. Important Notes

**Privacy Consideration**: 
- If you work from home and don't want to display your home address publicly, you can:
  - Use a coworking space address
  - Register as a "Service Area Business" (address hidden, only city shown)
  - Use a virtual office address

**Testing**:
- After adding structured data, use Google Search Console to monitor any errors
- It may take a few days for Google to process the structured data

**Maintenance**:
- Keep this information synchronized with your Google Business Profile
- Update both whenever your contact information changes

---

## Need Help?

If you need assistance implementing these changes:
1. Refer to the main **GOOGLE_MAPS_SETUP_GUIDE.md** for context
2. Use the validation tools mentioned above
3. Check [schema.org/LocalBusiness](https://schema.org/LocalBusiness) for more options
4. Visit [Google Search Central](https://developers.google.com/search/docs/appearance/structured-data/local-business) for official documentation

---

**Remember**: These enhancements are optional but highly recommended for better local SEO and Google Maps integration. The most important step is setting up your Google Business Profile first!
