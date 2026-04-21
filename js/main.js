/* ========================================
   UAG 生存遊戲團體 - 主腳本
   ======================================== */

(function () {
    'use strict';

    // ---------- DOM Ready ----------
    document.addEventListener('DOMContentLoaded', function () {
        initNavbar();
        initMobileMenu();
        initScrollAnimations();
        initStatsCounter();
        initFooterYear();
        initSmoothScroll();
    });

    // ---------- 1. Navbar 滾動樣式切換 ----------
    function initNavbar() {
        const navbar = document.getElementById('navbar');
        if (!navbar) return;

        function handleScroll() {
            if (window.scrollY > 40) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
    }

    // ---------- 2. 手機版選單 ----------
    function initMobileMenu() {
        const toggle = document.getElementById('navToggle');
        const links = document.getElementById('navLinks');
        if (!toggle || !links) return;

        toggle.addEventListener('click', function () {
            links.classList.toggle('open');
        });

        // 點擊連結後自動關閉選單
        links.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                links.classList.remove('open');
            });
        });
    }

    // ---------- 3. Scroll 進場動畫 ----------
    function initScrollAnimations() {
        // 為區塊內主要元素加入 fade-in class
        const targets = document.querySelectorAll(
            '.section-header, .about-text, .about-stats, .timeline-item, .member-card, .contact-card'
        );
        targets.forEach(function (el) {
            el.classList.add('fade-in');
        });

        if (!('IntersectionObserver' in window)) {
            // 老瀏覽器 fallback:直接顯示
            targets.forEach(function (el) {
                el.classList.add('visible');
            });
            return;
        }

        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        });

        targets.forEach(function (el) {
            observer.observe(el);
        });
    }

    // ---------- 4. 數字計數動畫 ----------
    function initStatsCounter() {
        const counters = document.querySelectorAll('.stat-num');
        if (!counters.length) return;

        if (!('IntersectionObserver' in window)) {
            counters.forEach(function (c) {
                c.textContent = c.dataset.target;
            });
            return;
        }

        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(function (c) {
            observer.observe(c);
        });
    }

    function animateCounter(el) {
        const target = parseInt(el.dataset.target, 10) || 0;
        const duration = 1500;
        const start = performance.now();

        function tick(now) {
            const progress = Math.min((now - start) / duration, 1);
            // easeOutQuad
            const eased = 1 - (1 - progress) * (1 - progress);
            el.textContent = Math.floor(eased * target);
            if (progress < 1) {
                requestAnimationFrame(tick);
            } else {
                el.textContent = target;
            }
        }
        requestAnimationFrame(tick);
    }

    // ---------- 5. Footer 年份自動更新 ----------
    function initFooterYear() {
        const yearEl = document.getElementById('year');
        if (yearEl) {
            yearEl.textContent = new Date().getFullYear();
        }
    }

    // ---------- 6. 平滑捲動 (補強舊瀏覽器) ----------
    function initSmoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(function (link) {
            link.addEventListener('click', function (e) {
                const href = link.getAttribute('href');
                if (href === '#' || href.length < 2) return;
                const target = document.querySelector(href);
                if (!target) return;
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });
    }
})();
