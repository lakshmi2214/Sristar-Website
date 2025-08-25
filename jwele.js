
    let currentIndex = 0;
    const images = [
      "assets/images/",
      "assets/images/",
      "assets/images/jewel3.jpg",
      "assets/images/jewel4.jpg",
      "assets/images/jewel5.jpg"
    ];

    function showImage(index) {
      currentIndex = index;
      document.getElementById("mainImage").src = images[index];

      // highlight active thumbnail
      document.querySelectorAll(".thumbnail-container img").forEach((thumb, i) => {
        thumb.classList.toggle("active", i === index);
      });
    }

    function nextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    }

    function prevImage() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    }

    function closeLightbox() {
      document.getElementById("lightbox").style.display = "none";
    }
