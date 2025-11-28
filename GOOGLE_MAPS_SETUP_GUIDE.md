# Google Maps Business Profile Setup Guide

## Overview
This guide will walk you through the process of adding your web development business to Google Maps and linking your website (gabimuresan.com or your portfolio) to your Google Business Profile.

## Prerequisites
- A Google Account (Gmail)
- Your business address in Roeselare, Belgium
- Your business phone number
- Access to verify your business (via mail, phone, or email)
- Your website URL (https://gabimuresan22.github.io/Personal-Portfolio-Website/)

---

## Step 1: Create Your Google Business Profile

### 1.1 Access Google Business Profile
1. Go to [Google Business Profile](https://www.google.com/business/) or [business.google.com](https://business.google.com)
2. Sign in with your Google Account
3. Click on **"Manage now"** or **"Create a profile"**

### 1.2 Enter Your Business Information
1. **Business Name**: Enter your business name (e.g., "Gabi Muresan Web Development" or "Gabi Muresan - Web Developer")
2. **Business Category**: Select the primary category
   - Search for: "Website Designer" or "Web Development Company" or "Computer Service"
   - You can add secondary categories later like:
     - Web Hosting Company
     - Marketing Agency
     - Internet Marketing Service

### 1.3 Add Your Business Location
1. **Choose Location Type**:
   - **If you have a physical office**: Select "Yes, I serve customers at one or more locations"
   - **If you work remotely/from home**: Select "Yes, I provide goods and services to my customers" and choose the service area
   
2. **Enter Your Address**: 
   - Add your business address in Roeselare, Belgium
   - If you work from home and don't want to show your home address publicly, you can select to hide it and just show the city/region

3. **Service Areas** (if applicable):
   - Add "Roeselare" and surrounding areas
   - Add "West Flanders"
   - Add "Belgium" or specific cities you serve

---

## Step 2: Add Contact Information

### 2.1 Phone Number
- Add your business phone number
- This will be publicly visible on Google Maps
- Make sure it's a number where clients can reach you

### 2.2 Website URL
- Add your portfolio website URL
- Use: `https://gabimuresan22.github.io/Personal-Portfolio-Website/`
- Or use a custom domain if you have one

### 2.3 Business Hours (Optional)
- Set your availability hours
- For freelance/remote work, you might set:
  - Monday - Friday: 9:00 AM - 6:00 PM
  - Or "By Appointment Only"

---

## Step 3: Verify Your Business

Google requires verification to ensure the business is legitimate. You have several options:

### 3.1 Verification Methods

#### Option A: Postcard Verification (Most Common)
1. Google will send a postcard to your business address
2. Wait 5-14 days for the postcard to arrive
3. The postcard contains a 5-digit verification code
4. Enter the code in your Google Business Profile dashboard

#### Option B: Phone Verification (If Available)
1. Google will call or text your business phone number
2. You'll receive a verification code
3. Enter the code immediately

#### Option C: Email Verification (If Available)
1. Google will send a verification email to your business email
2. Click the verification link in the email

#### Option D: Instant Verification (If You Have Google Search Console)
1. If your website is already verified in Google Search Console
2. You may get instant verification option
3. Connect your Business Profile with Search Console

### 3.2 Complete Verification
1. Go to your Business Profile dashboard
2. Click on "Verify now"
3. Choose your verification method
4. Follow the prompts to complete verification

---

## Step 4: Optimize Your Google Business Profile

### 4.1 Add Business Description
Write a compelling 750-character description:
```
Professional web developer in Roeselare, Belgium specializing in responsive web design, custom web applications, and digital solutions. I create modern, high-performance websites using HTML, CSS, JavaScript, and React. Whether you need a stunning portfolio, an e-commerce site, or a custom web application, I deliver exceptional user experiences with meticulous attention to detail. Services include: responsive web design, mobile-first development, SEO optimization, web app development, and website maintenance. Serving businesses across Belgium and internationally. Contact me to transform your ideas into digital experiences that your customers will love.
```

### 4.2 Add Photos
1. **Logo**: Upload your logo (gabi-muresan-logo.webp)
2. **Cover Photo**: Add a professional banner image
3. **Additional Photos**: 
   - Your workspace/office
   - Screenshots of your projects
   - Professional headshot
   - Team photos (if applicable)

### 4.3 Add Business Attributes
- **Identifies as**: Owned by individual
- **Languages spoken**: English, Romanian (if applicable)
- **Accessibility features**: If applicable
- **Amenities**: Online appointments, Online estimates

### 4.4 Add Services
Create a list of your services with descriptions:
1. **Responsive Web Design**
   - Description: Mobile-first, responsive websites
   - Price: Starting from €[YOUR_PRICE] (e.g., €500) - optional

2. **Custom Web Development**
   - Description: Tailored web applications and solutions

3. **Website Optimization**
   - Description: SEO and performance optimization

4. **Web App Development**
   - Description: React and JavaScript-based applications

5. **Website Maintenance**
   - Description: Ongoing support and updates

### 4.5 Add Products (Optional)
If you offer packages:
- Basic Website Package
- E-commerce Solution
- Custom Web Application
- Website Redesign

---

## Step 5: Link Your Website to Google Maps

### 5.1 Add Structured Data to Your Website
Add JSON-LD structured data to your website to help Google understand your business better.

Add this code in the `<head>` section of your `index.html`:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Gabi Muresan Web Development",
  "image": "https://gabimuresan22.github.io/Personal-Portfolio-Website/img/gabi-muresan-logo.webp",
  "@id": "https://gabimuresan22.github.io/Personal-Portfolio-Website/",
  "url": "https://gabimuresan22.github.io/Personal-Portfolio-Website/",
  "telephone": "+32-XXX-XXX-XXX",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Your Street Address",
    "addressLocality": "Roeselare",
    "postalCode": "8800",
    "addressCountry": "BE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 50.9502,
    "longitude": 3.1262
  },
  "openingHoursSpecification": {
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
  },
  "sameAs": [
    "https://www.instagram.com/gabimuresanwebdev/",
    "https://x.com/GabiMuresan22",
    "https://www.linkedin.com/in/gabriel-muresan-a34956208/",
    "https://github.com/GabiMuresan22"
  ]
}
</script>
```

**Note**: Update the placeholders with your actual information:
- Telephone number (Belgian format: +32-9-XXX-XX-XX for Roeselare landlines or +32-XXX-XX-XX-XX for mobile numbers)
- Street address
- Actual GPS coordinates (you can find these on Google Maps)

### 5.2 Verify Your Website in Google Search Console
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your website property
3. Verify ownership using the HTML tag method (you already have a meta tag in your HTML)
4. Submit your sitemap (if you have one)
5. Link Search Console to your Business Profile

---

## Step 6: Maintain and Optimize Your Listing

### 6.1 Regular Updates
- Post updates about new projects or services
- Share blog posts or case studies
- Announce special offers or promotions

### 6.2 Respond to Reviews
- Encourage satisfied clients to leave reviews
- Respond professionally to all reviews (positive and negative)
- Thank reviewers for their feedback

### 6.3 Use Google Posts
- Share updates, offers, events, or news
- Posts appear in your Business Profile
- Can include photos, call-to-action buttons, and links

### 6.4 Monitor Insights
- Check your Google Business Profile dashboard regularly
- Monitor views, clicks, and calls
- Understand how customers find you
- Adjust your strategy based on data

### 6.5 Keep Information Updated
- Update business hours during holidays
- Keep contact information current
- Add new photos regularly
- Update services as your offerings change

---

## Step 7: Get Your Business on Google Maps

### 7.1 Once Verified
After verification, your business will automatically appear on Google Maps when people search for:
- Your business name
- Web developer in Roeselare
- Web development services near me
- Website designer in Belgium

### 7.2 Share Your Google Maps Link
1. Find your business on Google Maps
2. Click "Share"
3. Copy the short URL
4. Add this link to your website, email signature, and marketing materials

### 7.3 Embed a Map on Your Website (Optional)
You can embed a Google Map showing your location on your contact page:

```html
<iframe 
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE_HERE" 
  width="600" 
  height="450" 
  style="border:0;" 
  allowfullscreen="" 
  loading="lazy" 
  referrerpolicy="no-referrer-when-downgrade">
</iframe>
```

To get your embed code:
1. Go to Google Maps
2. Search for your business
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Add it to your website's contact section

---

## Troubleshooting

### Common Issues and Solutions

#### Issue 1: Verification Code Not Received
- **Solution**: Check your mail carefully, sometimes it takes up to 14 days
- Request a new code if more than 14 days have passed

#### Issue 2: Business Not Showing on Maps
- **Solution**: Verification must be completed first
- It can take a few days after verification for your business to appear

#### Issue 3: Duplicate Listings
- **Solution**: Claim and merge duplicate listings through your dashboard
- Contact Google Business Profile support if needed

#### Issue 4: Can't Verify via Postcard (No Physical Address)
- **Solution**: Use a virtual office address or coworking space address
- Or register as a service area business without showing an address

---

## Additional Resources

### Official Google Resources
- [Google Business Profile Help Center](https://support.google.com/business/)
- [Google Business Profile Community](https://support.google.com/business/community)
- [Verification Troubleshooting](https://support.google.com/business/answer/7107242)

### Best Practices
- Complete 100% of your Business Profile
- Add at least 3 photos
- Get your first 5 reviews as soon as possible
- Post updates at least once a week
- Respond to reviews within 24-48 hours

### SEO Tips for Better Visibility
- Use relevant keywords in your business description
- Encourage clients to mention specific services in reviews
- Keep your NAP (Name, Address, Phone) consistent across the web
- Build citations on other business directories
- Link your Google Business Profile from your website

---

## Summary Checklist

Use this checklist to ensure you've completed all steps:

- [ ] Created Google Business Profile account
- [ ] Added business name and category
- [ ] Added business location/service area
- [ ] Added phone number and website URL
- [ ] Requested verification
- [ ] Completed verification process
- [ ] Added business description (750 chars)
- [ ] Uploaded logo and photos (minimum 3)
- [ ] Added business hours
- [ ] Listed services and pricing
- [ ] Added structured data to website
- [ ] Verified website in Google Search Console
- [ ] Linked Search Console to Business Profile
- [ ] Created first Google Post
- [ ] Set up review monitoring
- [ ] Shared Google Maps link on website

---

## Need Help?

If you encounter any issues during setup:
1. Check the [Google Business Profile Help Center](https://support.google.com/business/)
2. Join the Google Business Profile Community forums
3. Contact Google Business Profile support directly
4. Consider hiring a local SEO expert for assistance

---

**Note**: This process is free and does not require any payment to Google. Be wary of services claiming they can "expedite" your Google Maps listing for a fee.

Good luck with your Google Maps listing! 🚀
