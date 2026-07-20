        // 1. Mobile Menu Logic
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const navLinks = document.getElementById('nav-links');
        const navItems = document.querySelectorAll('.nav-links a');

        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            if(navLinks.classList.contains('active')) {
                mobileMenuBtn.innerHTML = '✕';
            } else {
                mobileMenuBtn.innerHTML = '☰';
            }
        });

        navItems.forEach(item => {
            item.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuBtn.innerHTML = '☰';
            });
        });

        // 2. Header Background on Scroll
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.style.background = 'rgba(15, 17, 21, 0.98)';
                header.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
                header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
            } else {
                header.style.background = 'rgba(15, 17, 21, 0.9)';
                header.style.borderBottom = '1px solid rgba(255, 255, 255, 0.05)';
                header.style.boxShadow = 'none';
            }
        });

        // 3. Scroll Reveal Animation
        function reveal() {
            const reveals = document.querySelectorAll('.reveal');
            
            for (let i = 0; i < reveals.length; i++) {
                const windowHeight = window.innerHeight;
                const elementTop = reveals[i].getBoundingClientRect().top;
                const elementVisible = 100;

                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add('active');
                }
            }
        }
        
        window.addEventListener('scroll', reveal);
        // Trigger once on load to reveal hero section
        reveal();

        // 4. Custom Form Submit Handling
        function handleFormSubmit(event) {
            event.preventDefault(); // Prevent page reload
            
            const btn = event.target.querySelector('.submit-btn');
            const statusBox = document.getElementById('form-success');
            
            btn.innerHTML = "Sending...";
            btn.style.opacity = "0.7";
            
            // Simulate network request delay
            setTimeout(() => {
                btn.style.display = "none";
                statusBox.style.display = "block";
                event.target.reset(); // Clear form inputs
            }, 1000);
        }