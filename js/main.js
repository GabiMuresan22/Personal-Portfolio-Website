// Enhanced contact form handling
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const submitBtn = document.getElementById("submit-btn");
  const statusDiv = document.getElementById("form-status");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    // Show loading state
    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;
    statusDiv.style.display = "none";

    // Get form data
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        // Success
        statusDiv.innerHTML =
          "✅ Thank you! Your message has been sent successfully. I'll get back to you soon!";
        statusDiv.style.backgroundColor = "#d4edda";
        statusDiv.style.color = "#155724";
        statusDiv.style.border = "1px solid #c3e6cb";
        statusDiv.style.display = "block";
        form.reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      // Error
      statusDiv.innerHTML =
        "❌ Oops! There was a problem sending your message. Please try again or contact me directly via social media.";
      statusDiv.style.backgroundColor = "#f8d7da";
      statusDiv.style.color = "#721c24";
      statusDiv.style.border = "1px solid #f5c6cb";
      statusDiv.style.display = "block";
    } finally {
      // Reset button
      submitBtn.textContent = "Send Message";
      submitBtn.disabled = false;
    }
  });

  // Real-time form validation
  const inputs = form.querySelectorAll("input, textarea");
  inputs.forEach((input) => {
    input.addEventListener("blur", function () {
      validateField(this);
    });
  });

  function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let message = "";

    if (field.hasAttribute("required") && !value) {
      isValid = false;
      message = "This field is required";
    } else if (field.type === "email" && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        isValid = false;
        message = "Please enter a valid email address";
      }
    } else if (
      field.hasAttribute("minlength") &&
      value.length < field.getAttribute("minlength")
    ) {
      isValid = false;
      message = `Minimum ${field.getAttribute(
        "minlength"
      )} characters required`;
    }

    // Remove existing error message
    const existingError =
      field.parentNode.querySelector(".error-message");
    if (existingError) {
      existingError.remove();
    }

    if (!isValid) {
      field.style.borderColor = "#dc3545";
      const errorDiv = document.createElement("div");
      errorDiv.className = "error-message";
      errorDiv.style.color = "#dc3545";
      errorDiv.style.fontSize = "0.875rem";
      errorDiv.style.marginTop = "0.25rem";
      errorDiv.textContent = message;
      field.parentNode.appendChild(errorDiv);
    } else {
      field.style.borderColor = "#28a745";
    }

    return isValid;
  }

  // Calendly popup handling
  function loadCalendlyCssOnce() {
    if (
      !document.querySelector(
        'link[href*="assets.calendly.com/assets/external/widget.css"]'
      )
    ) {
      const l = document.createElement("link");
      l.rel = "stylesheet";
      l.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(l);
    }
  }

  function openCalendly(url) {
    loadCalendlyCssOnce();
    if (window.Calendly && window.Calendly.initPopupWidget) {
      window.Calendly.initPopupWidget({ url });
    } else {
      const s = document.createElement("script");
      s.src = "https://assets.calendly.com/assets/external/widget.js";
      s.async = true;
      s.onload = function () {
        window.Calendly.initPopupWidget({ url });
      };
      document.body.appendChild(s);
    }
  }

  // Attach Calendly open handlers
  document.querySelectorAll(".open-calendly").forEach((el) => {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      const url =
        this.getAttribute("data-calendly-url") ||
        "https://calendly.com/YOUR-USERNAME/intro-call";
      openCalendly(url);
    });
  });

  // Portfolio Filter Functionality
  const filterButtons = document.querySelectorAll(".work-menu li");
  const portfolioItems = document.querySelectorAll(".card-item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      
      // Add active class to clicked button
      this.classList.add("active");
      
      // Get filter value from button text
      const filterValue = this.textContent.trim().toLowerCase();
      
      // Filter portfolio items
      portfolioItems.forEach((item) => {
        const category = item.getAttribute("data-category");
        
        if (filterValue === "all") {
          item.classList.remove("hide");
        } else if (category === filterValue) {
          item.classList.remove("hide");
        } else {
          item.classList.add("hide");
        }
      });
    });
  });

  // Set "All" as active by default
  if (filterButtons.length > 0) {
    filterButtons[0].classList.add("active");
  }
});
