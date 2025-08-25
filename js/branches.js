// Branches page specific JavaScript

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  initializeBranchFilter()
  initializeScrollAnimations()
})

// Branch filter functionality
function filterBranches(state, buttonElement) {
  const branchItems = document.querySelectorAll(".branch-item")
  const filterButtons = document.querySelectorAll(".filter-buttons .btn")

  // Update button states
  filterButtons.forEach((btn) => {
    btn.classList.remove("btn-warning")
    btn.classList.add("btn-outline-warning")
  })

  // Set active button
  buttonElement.classList.add("btn-warning")
  buttonElement.classList.remove("btn-outline-warning")

  // Filter branches with animation
  branchItems.forEach((item, index) => {
    if (state === "all" || item.dataset.state === state) {
      // Show branch with staggered animation
      setTimeout(() => {
        item.style.display = "block"
        item.style.opacity = "0"
        item.style.transform = "translateY(20px)"

        setTimeout(() => {
          item.style.opacity = "1"
          item.style.transform = "translateY(0)"
          item.style.transition = "all 0.4s ease"
        }, 50)
      }, index * 100)
    } else {
      // Hide branch
      item.style.opacity = "0"
      item.style.transform = "translateY(-20px)"
      setTimeout(() => {
        item.style.display = "none"
      }, 300)
    }
  })
}

// Initialize branch filter
function initializeBranchFilter() {
  // Set initial state to show all branches
  const allBranches = document.querySelectorAll(".branch-item")
  allBranches.forEach((branch, index) => {
    setTimeout(() => {
      branch.style.opacity = "1"
      branch.style.transform = "translateY(0)"
    }, index * 100)
  })
}

// Scroll animations
function initializeScrollAnimations() {
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

  // Observe branch cards for animation
  const branchCards = document.querySelectorAll(".branch-card")
  branchCards.forEach((card) => {
    observer.observe(card)
  })
}

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
    
    .branch-card {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }
    
    .branch-item {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.4s ease;
    }
`
document.head.appendChild(style)

// Handle branch card interactions
document.querySelectorAll(".branch-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-8px)"
  })

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)"
  })
})

// Handle location button clicks with analytics
document.querySelectorAll(".location-btn").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const branchName = this.closest(".branch-card").querySelector(".branch-name").textContent
    console.log(`Location viewed for branch: ${branchName}`)

    // Add loading state
    const originalText = this.textContent
    this.textContent = "Opening..."
    this.style.opacity = "0.7"

    setTimeout(() => {
      this.textContent = originalText
      this.style.opacity = "1"
    }, 1000)
  })
})

// Handle WhatsApp button clicks
document.querySelectorAll(".whatsapp-btn").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const branchName = this.closest(".branch-card").querySelector(".branch-name").textContent
    console.log(`WhatsApp contact initiated for branch: ${branchName}`)
  })
})

// Responsive handling
function handleResponsiveChanges() {
  const isMobile = window.innerWidth <= 768
  const branchCards = document.querySelectorAll(".branch-card")

  branchCards.forEach((card) => {
    if (isMobile) {
      card.style.marginBottom = "20px"
    } else {
      card.style.marginBottom = "30px"
    }
  })
}

// Listen for window resize
window.addEventListener("resize", handleResponsiveChanges)

// Initial responsive setup
handleResponsiveChanges()

// Error handling
window.addEventListener("error", (e) => {
  console.error("Branches page error:", e.error)
})
