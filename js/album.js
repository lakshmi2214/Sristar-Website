
    // Filtering sections
    function showSection(sectionId) {
        const sections = document.querySelectorAll('.jewellery-section');
        sections.forEach(section => section.classList.remove('active'));
        document.getElementById(sectionId).classList.add('active');
    }

    // Modal image gallery logic
    const jewelleryModal = document.getElementById('jewelleryModal');
    jewelleryModal.addEventListener('show.bs.modal', function (event) {
        const button = event.relatedTarget;
        const images = JSON.parse(button.getAttribute('data-images'));
        const title = button.getAttribute('data-title');
        const modalTitle = jewelleryModal.querySelector('.modal-title');
        const modalBody = jewelleryModal.querySelector('#modal-images-container');

        modalTitle.textContent = title;
        modalBody.innerHTML = '';

        images.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            img.className = 'img-fluid mb-3 mx-2';
            img.style.maxHeight = '300px';
            modalBody.appendChild(img);
        });
    });

