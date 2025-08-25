// Main JavaScript file for Sristar Gold Company website

// Import Bootstrap
const bootstrap = window.bootstrap

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize all components
  initializeCarousel()
  initializeBranchFilter()
  initializeFAQ()
  initializeGoldCalculator()
  initializeTestimonialCarousel()
  initializeScrollAnimations()
})

// Carousel initialization
function initializeCarousel() {
  const carousel = document.getElementById("heroCarousel")
  if (carousel) {
    // Auto-play carousel
    const bsCarousel = new bootstrap.Carousel(carousel, {
      interval: 5000,
      wrap: true,
    })
  }
}

// Branch filter functionality
function filterBranches(state) {
  const branchItems = document.querySelectorAll(".branch-item")
  const filterButtons = document.querySelectorAll(".btn-group .btn")

  // Update button states
  filterButtons.forEach((btn) => {
    btn.classList.remove("active")
    btn.classList.add("btn-outline-warning")
    btn.classList.remove("btn-warning")
  })

  // Set active button
  event.target.classList.add("active", "btn-warning")
  event.target.classList.remove("btn-outline-warning")

  // Filter branches
  branchItems.forEach((item) => {
    if (state === "all" || item.dataset.state === state) {
      item.style.display = "block"
      // Add fade in animation
      item.style.opacity = "0"
      setTimeout(() => {
        item.style.opacity = "1"
        item.style.transition = "opacity 0.3s ease"
      }, 100)
    } else {
      item.style.display = "none"
    }
  })
}

// Initialize branch filter
function initializeBranchFilter() {
  // Set initial state
  filterBranches("all")
}

// FAQ functionality
function toggleFAQ(element) {
  const faqItem = element.parentElement
  const answer = faqItem.querySelector(".faq-answer")
  const arrow = element.querySelector(".arrow")

  // Toggle active class
  faqItem.classList.toggle("active")

  // Rotate arrow
  if (faqItem.classList.contains("active")) {
    arrow.style.transform = "rotate(180deg)"
  } else {
    arrow.style.transform = "rotate(0deg)"
  }
}

// Initialize FAQ
function initializeFAQ() {
  const faqQuestions = document.querySelectorAll(".faq-question")
  faqQuestions.forEach((question) => {
    question.addEventListener("click", function () {
      toggleFAQ(this)
    })
  })
}

// Gold Calculator functionality
function initializeGoldCalculator() {
  const calculatorForm = document.getElementById("goldCalculatorForm")
  if (calculatorForm) {
    calculatorForm.addEventListener("submit", function (e) {
      e.preventDefault()

      const formData = new FormData(this)
      const name = formData.get("name") || this.querySelector('input[placeholder="Name"]').value
      const phone = formData.get("phone") || this.querySelector('input[placeholder="Phone Number"]').value
      const city = formData.get("city") || this.querySelector('input[placeholder="City"]').value
      const carat = this.querySelector("select").value
      const grams = this.querySelector('input[placeholder="Gold In Grams"]').value

      // Validate form
      if (!name || !phone || !city || !carat || !grams) {
        alert("Please fill all fields")
        return
      }

      // Calculate gold value (sample calculation)
      const rates = {
        24: 9938,
        22: 9110,
        18: 7454,
      }

      const rate = rates[carat]
      const totalValue = rate * Number.parseFloat(grams)

      // Show result
      alert(
        `Estimated Value: ₹${totalValue.toLocaleString("en-IN")}/-\n\nThank you ${name}! We will contact you soon at ${phone}.`,
      )

      // Reset form
      this.reset()
    })
  }
}

// Testimonial carousel
function initializeTestimonialCarousel() {
  const testimonialCarousel = document.getElementById("testimonialCarousel")
  if (testimonialCarousel) {
    // Auto-play testimonial carousel
    const bsCarousel = new bootstrap.Carousel(testimonialCarousel, {
      interval: 8000,
      wrap: true,
    })
  }
}

// Scroll animations
function initializeScrollAnimations() {
  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in")
      }
    })
  }, observerOptions)

  // Observe elements for animation
  const animateElements = document.querySelectorAll(
    ".service-card, .strength-card, .money-card, .branch-card, .blog-card, .stat-box",
  )
  animateElements.forEach((el) => {
    observer.observe(el)
  })
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Mobile menu handling
function toggleMobileMenu() {
  const navbarCollapse = document.querySelector(".navbar-collapse")
  if (navbarCollapse) {
    navbarCollapse.classList.toggle("show")
  }
}

// Contact form handling
function handleContactForm(formElement) {
  formElement.addEventListener("submit", function (e) {
    e.preventDefault()

    // Get form data
    const formData = new FormData(this)
    const name = formData.get("name")
    const phone = formData.get("phone")
    const email = formData.get("email")
    const message = formData.get("message")

    // Validate
    if (!name || !phone || !email) {
      alert("Please fill all required fields")
      return
    }

    // Show success message
    alert("Thank you for your inquiry! We will contact you soon.")

    // Reset form
    this.reset()
  })
}

// Initialize contact forms
document.querySelectorAll("form").forEach((form) => {
  if (form.id !== "goldCalculatorForm") {
    handleContactForm(form)
  }
})

// Utility functions
function formatCurrency(amount) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(amount)
}

function validatePhone(phone) {
  const phoneRegex = /^[6-9]\d{9}$/
  return phoneRegex.test(phone)
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Add loading states
function showLoading(element) {
  element.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...'
  element.disabled = true
}

function hideLoading(element, originalText) {
  element.innerHTML = originalText
  element.disabled = false
}

// Error handling
window.addEventListener("error", (e) => {
  console.error("JavaScript Error:", e.error)
})

// Performance monitoring
window.addEventListener("load", () => {
  // Log page load time
  const loadTime = performance.now()
  console.log(`Page loaded in ${loadTime.toFixed(2)}ms`)
})

// Add CSS animation classes
const style = document.createElement("style")
style.textContent = `
    .animate-in {
        animation: fadeInUp 0.6s ease forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .service-card,
    .strength-card,
    .money-card,
    .branch-card,
    .blog-card,
    .stat-box {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }
`
document.head.appendChild(style)
