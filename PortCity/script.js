document.addEventListener('DOMContentLoaded', () => {
    // Sayfa yüklenme alert'i - tüm sayfalarda göster
    alert('PortCity Tanıtım Sitesine Hoş Geldiniz');

    // Menü mouseover/mouseout
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#808080';
        });
        link.addEventListener('mouseout', () => {
            link.style.color = '';
        });
    });

    // Aktif sayfa vurgulama
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        // Ana sayfa için özel kontrol
        if ((currentPage === 'index.html' || currentPage === '' || currentPage === '/') && href === 'index.html') {
            link.classList.add('active');
        } else if (href === currentPage) {
            link.classList.add('active');
        }
        link.addEventListener('click', () => {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Tema değiştirme
    const themeBtn = document.getElementById('theme-btn');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
        });
    }

    // Services hover bilgi kutusu ve görsel etkileşimi
    if (window.location.pathname.includes('services.html')) {
        // Activity card mouseover/mouseout - paragrafları göster/gizle
        const cards = document.querySelectorAll(".activity-card");
        cards.forEach(card => {
            card.addEventListener("mouseover", function() {
                const paragraphs = card.querySelectorAll("p");
                paragraphs.forEach(p => { p.style.display = "block"; });
            });
            card.addEventListener("mouseout", function() {
                const paragraphs = card.querySelectorAll("p");
                paragraphs.forEach(p => { p.style.display = "none"; });
            });
        });

        // Gastronomi görselleri büyütme
        const overlay = document.getElementById("image-overlay");
        const overlayImg = document.getElementById("overlay-img");
        const gastronomyImages = document.querySelectorAll(".enlargeable-img");

        if (overlay && overlayImg) {
            gastronomyImages.forEach(img => {
                img.addEventListener("click", function() {
                    const imageSource = this.src;
                    overlayImg.src = imageSource;
                    overlay.classList.add("active");
                });
            });

            overlay.addEventListener("click", function() {
                overlay.classList.remove("active");
                setTimeout(() => { overlayImg.src = ""; }, 300);
            });
        }

        // Dinamik aktivite listesi
        const activities = [
            "Tekne Turu",
            "Dalış Deneyimi",
            "Marina Restoranları",
            "Gün Batımı Yürüyüşü"
        ];
        const activitiesDiv = document.getElementById('activities');
        if (activitiesDiv) {
            const ul = document.createElement('ul');
            activities.forEach(activity => {
                const li = document.createElement('li');
                li.textContent = activity;
                ul.appendChild(li);
            });
            activitiesDiv.appendChild(ul);
        }
    }

    // Beğeni sayacı (index.html)
    if (window.location.pathname.includes('index.html')) {
        const likeBtn = document.getElementById('like-btn');
        const likeCount = document.getElementById('like-count');
        let likes = 0;
        if (likeBtn && likeCount) {
            likeBtn.addEventListener('click', () => {
                likes++;
                likeCount.textContent = likes;
            });
        }

        // Görsel etkileşimi
        const modal = document.getElementById('image-modal');
        const modalImg = document.getElementById('modal-img');
        const closeBtn = document.querySelector('.close');

        if (modal && modalImg && closeBtn) {
            const images = document.querySelectorAll('.image-card img');
            images.forEach(img => {
                img.addEventListener('click', () => {
                    modal.style.display = 'block';
                    modalImg.src = img.src;
                });
            });

            closeBtn.addEventListener('click', () => {
                modal.style.display = 'none';
            });

            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.style.display = 'none';
                }
            });
        }
    }

    // İletişim formu kontrolü (contact.html)
    if (window.location.pathname.includes('contact.html')) {
        const form = document.querySelector('form');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const name = form.querySelector('input[type="text"]').value;
                const email = form.querySelector('input[type="email"]').value;
                const message = form.querySelector('textarea').value;
                if (!name || !email || !message) {
                    alert('Lütfen tüm alanları doldurun');
                } else {
                    alert('Mesajınız başarıyla gönderildi');
                    form.reset();
                }
            });
        }
    }
});