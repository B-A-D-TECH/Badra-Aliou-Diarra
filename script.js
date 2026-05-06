// Professional Portfolio JS - Layered Experience
document.addEventListener('DOMContentLoaded', () => {
    // Dynamic timestamps for updates
    function updateTimestamps() {
        const timestamps = document.querySelectorAll('.updated-timestamp');
        timestamps.forEach(ts => {
            const days = parseInt(ts.dataset.days);
            const now = new Date();
            const updateDate = new Date(now.getTime() - days * 24 * 60 * 60 * 1000);
            const diffTime = Math.abs(now - updateDate);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            ts.textContent = `Updated ${diffDays} ${diffDays === 1 ? 'day' : 'days'} ago`;
        });
    }
    updateTimestamps();
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Navigation smooth scroll
    document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(anchor.getAttribute('href'))?.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu
            document.querySelector('.nav-links')?.classList.remove('nav-active');
            document.querySelector('.burger')?.classList.remove('toggle');
        });
    });

    // Burger menu
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    if (burger && navLinks) {
        burger.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
        });
    }

    // Header scroll effect
    let ticking = false;
    const updateHeader = () => {
        const header = document.querySelector('header');
        const scrolled = window.scrollY;
        header.style.background = scrolled > 50 
            ? document.body.classList.contains('dark-mode') 
                ? 'rgba(30, 41, 59, 0.98)' 
                : 'rgba(255, 255, 255, 0.98)'
            : 'transparent';
        ticking = false;
    };
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateHeader);
            ticking = true;
        }
    });

    // Theme toggle with persistence
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        const icon = themeToggle.querySelector('i');
        const toggleTheme = () => {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            icon.classList.toggle('fa-moon', !isDark);
            icon.classList.toggle('fa-sun', isDark);
            localStorage.setItem('darkMode', isDark);
        };
        themeToggle.addEventListener('click', toggleTheme);
        if (localStorage.getItem('darkMode') === 'true') {
            document.body.classList.add('dark-mode');
            icon.classList.replace('fa-moon', 'fa-sun');
        }
    }

    // Contact form
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', e => {
            e.preventDefault();
            const btn = contactForm.querySelector('button[type=\"submit\"]');
            const original = btn.textContent;
            btn.textContent = 'Sending...';
            btn.disabled = true;
            setTimeout(() => {
                btn.textContent = 'Sent! ✓';
                btn.style.background = 'linear-gradient(135deg, #10b981 0%, #34d399 100%)';
                setTimeout(() => {
                    btn.textContent = original;
                    btn.disabled = false;
                    btn.style.background = '';
                    contactForm.reset();
                }, 2000);
            }, 1500);
        });
    }

    // Scroll reveal animations (if not reduced motion)
    if (!prefersReducedMotion) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) scale(1)';
                }
            });
        }, { threshold: 0.15 });

        document.querySelectorAll('.skill-card, .project-card, .stat, .card').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px) scale(0.98)';
            el.style.transition = 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            observer.observe(el);
        });
    }

    // PROJECT CASE STUDY MODALS - Process Layer
    const projectButtons = document.querySelectorAll('.project-detail-btn');
    const modalsContainer = document.getElementById('project-modals');

    const projectData = {
        1: {
            title: 'E-commerce Checkout Redesign',
            role: 'Lead UX Designer',
            result: '+47% conversion ($1.2M revenue)',
            images: [
                'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&w=800&q=80',
                'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&w=800&q=80',
                'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&w=800&q=80'
            ],
            tabs: {
                overview: 'Redesigned checkout for fashion retailer. Simplified from 7 steps to 3. Added Apple Pay/Google Pay. A/B tested 3 variants.',
                process: `1. <strong>Research:</strong> Analyzed heatmaps (68% drop at shipping), 45 user interviews<br>
2. <strong>Wireframes:</strong> Tested 3 flows with 20 users<br>
3. <strong>High-fid:</strong> Figma prototypes w/ micro-interactions<br>
4. <strong>Testing:</strong> Heatmaps + session recordings`,
                results: `<span class="metric-highlight">+47% conversion</span> (2.1%→3.1%)<br>
<span class="metric-highlight">$1.2M annual revenue</span><br>
<span class="metric-highlight">-32% bounce rate</span><br><em>"Best redesign we've seen" - Head of E-com</em>`
            }
        },
        2: {
            title: 'Fintech Analytics Dashboard',
            role: 'UX Researcher & Designer',
            result: '35% faster tasks, 92% satisfaction',
            images: [
                'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&w=800&q=80',
                'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&w=800&q=80',
                'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&w=800&q=80'
            ],
            tabs: {
                overview: 'Enterprise dashboard for 200+ analysts. Custom views, AI-powered search, real-time metrics.',
                process: `1. <strong>Research:</strong> Shadowed 15 analysts, task analysis<br>
2. <strong>IA:</strong> Card sorting w/ 25 users<br>
3. <strong>Prototypes:</strong> Framer + live data<br>
4. <strong>Testing:</strong> 92% task success rate`,
                results: `<span class="metric-highlight">35% faster tasks</span> (4.2→2.7min)<br>
<span class="metric-highlight">92% CSAT</span><br>
<span class="metric-highlight">100% adoption</span>`
            }
        },
        3: {
            title: 'SaaS Product Onboarding',
            role: 'Senior Product Designer',
            result: '+62% activation, -28% churn',
            images: [
                'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&w=800&q=80',
                'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&w=800&q=80',
                'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&w=800&q=80'
            ],
            tabs: {
                overview: 'Onboarding flow for marketing SaaS. Progressive disclosure + personalized tours.',
                process: `1. <strong>Analysis:</strong> 73% drop-off day 1<br>
2. <strong>Concepts:</strong> 4 variants, preference testing<br>
3. <strong>Build:</strong> HTML/CSS + Lottie animations<br>
4. <strong>Launch:</strong> Full-funnel analytics`,
                results: `<span class="metric-highlight">+62% activation</span> (18%→29%)<br>
<span class="metric-highlight">-28% churn</span><br>
<span class="metric-highlight">4.8/5 rating</span>`
            }
        }
    };

    projectButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const projectId = btn.dataset.project;
            const data = projectData[projectId];
            if (!data) return;

            const modalHTML = `
                <div class="modal" role="dialog" aria-labelledby="modal-title-${projectId}">
                    <div class="modal-header">
                        <h2 id="modal-title-${projectId}">${data.title}</h2>
                        <button class="modal-close" aria-label="Close">
                            <i class="fas fa-times"></i>
                        </button>
                        <p><strong>${data.role}</strong> | <span class="metric-highlight">${data.result}</span></p>
                    </div>
                    <div class="modal-gallery">
                        ${data.images.map(img => `<img src="${img}" alt="Case study image" loading="lazy">`).join('')}
                    </div>
                    <div class="modal-content">
                        <div class="case-tabs">
                            <button class="case-tab active" data-tab="overview">Overview</button>
                            <button class="case-tab" data-tab="process">Process</button>
                            <button class="case-tab" data-tab="results">Results</button>
                        </div>
                        <div class="tab-panel active" data-tab="overview">${data.tabs.overview}</div>
                        <div class="tab-panel" data-tab="process">${data.tabs.process}</div>
                        <div class="tab-panel" data-tab="results">${data.tabs.results}</div>
                    </div>
                </div>
            `;

            modalsContainer.innerHTML = modalHTML;
            modalsContainer.style.display = 'flex';
            document.body.style.overflow = 'hidden';

            // Modal interactions
            const modal = modalsContainer.querySelector('.modal');
            const closeBtn = modal.querySelector('.modal-close');
            const tabs = modal.querySelectorAll('.case-tab');
            const panels = modal.querySelectorAll('.tab-panel');

            const closeModal = () => {
                modalsContainer.style.display = 'none';
                document.body.style.overflow = '';
            };

            closeBtn.addEventListener('click', closeModal);
            modal.addEventListener('click', e => {
                if (e.target === modal.parentElement) closeModal();
            });

            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    const targetTab = tab.dataset.tab;
                    tabs.forEach(t => t.classList.remove('active'));
                    panels.forEach(p => p.classList.remove('active'));
                    tab.classList.add('active');
                    modal.querySelector(`[data-tab="${targetTab}"]`).classList.add('active');
                });
            });

            // ESC key
            const escHandler = e => {
                if (e.key === 'Escape') {
                    closeModal();
                    document.removeEventListener('keydown', escHandler);
                }
            };
            document.addEventListener('keydown', escHandler);
        });
    });

    // Close modals when clicking outside
    document.addEventListener('click', e => {
        if (e.target.classList.contains('modals') && modalsContainer.style.display === 'flex') {
            modalsContainer.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
});

