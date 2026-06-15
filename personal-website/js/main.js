/* ============================================================
   个人网站 — 交互脚本
   导航滚动 · 菜单开关 · 渐显动画 · 高亮定位
   ============================================================ */

(function () {
    'use strict';

    // ---------- DOM 引用 ----------
    const header = document.getElementById('header');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelector('.nav-links');
    const allNavLinks = document.querySelectorAll('.nav-links a');
    const revealElements = document.querySelectorAll('.reveal');

    // ---------- 导航栏滚动状态 ----------
    let lastScrollY = 0;

    function updateHeaderState() {
        const scrollY = window.scrollY;
        if (scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        lastScrollY = scrollY;
    }

    // ---------- 移动端菜单 ----------
    function openMenu() {
        navLinks.classList.add('open');
        navToggle.classList.add('open');
        navToggle.setAttribute('aria-label', '关闭菜单');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        navLinks.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-label', '打开菜单');
        document.body.style.overflow = '';
    }

    function toggleMenu() {
        if (navLinks.classList.contains('open')) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    navToggle.addEventListener('click', toggleMenu);

    // 点击导航链接时关闭菜单
    allNavLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            closeMenu();
        });
    });

    // 点击页面其他区域关闭菜单
    document.addEventListener('click', function (e) {
        if (navLinks.classList.contains('open') &&
            !navLinks.contains(e.target) &&
            !navToggle.contains(e.target)) {
            closeMenu();
        }
    });

    // ---------- 滚动渐显动画 ----------
    if ('IntersectionObserver' in window) {
        var observerOptions = {
            root: null,
            rootMargin: '0px 0px -40px 0px',
            threshold: 0.12
        };

        var revealObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        revealElements.forEach(function (el) {
            revealObserver.observe(el);
        });
    } else {
        // 降级：直接显示
        revealElements.forEach(function (el) {
            el.classList.add('visible');
        });
    }

    // ---------- 导航链接高亮 ----------
    var sectionIds = [];
    allNavLinks.forEach(function (link) {
        var href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            sectionIds.push(href.substring(1));
        }
    });

    var sectionElements = {};
    sectionIds.forEach(function (id) {
        var el = document.getElementById(id);
        if (el) {
            sectionElements[id] = el;
        }
    });

    function updateActiveLink() {
        var scrollY = window.scrollY + 120;
        var activeId = null;

        Object.keys(sectionElements).forEach(function (id) {
            var el = sectionElements[id];
            if (el.offsetTop <= scrollY) {
                activeId = id;
            }
        });

        allNavLinks.forEach(function (link) {
            var href = link.getAttribute('href');
            if (href === '#' + activeId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // ---------- 合并滚动监听 ----------
    var ticking = false;

    function onScroll() {
        if (!ticking) {
            requestAnimationFrame(function () {
                updateHeaderState();
                updateActiveLink();
                ticking = false;
            });
            ticking = true;
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });

    // 初始调用
    updateHeaderState();
    updateActiveLink();

})();
