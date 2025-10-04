// FreshMart Premium E-commerce Application - Enhanced Version

class FreshMartPremiumApp {
    constructor() {
        this.currentPage = 'home';
        this.cart = JSON.parse(localStorage.getItem('freshmart_premium_cart')) || [];
        this.wishlist = JSON.parse(localStorage.getItem('freshmart_premium_wishlist')) || [];
        this.currentUser = JSON.parse(localStorage.getItem('freshmart_premium_user')) || null;
        this.isAdmin = false;
        this.orders = JSON.parse(localStorage.getItem('freshmart_premium_orders')) || this.generateSampleOrders();
        this.customers = JSON.parse(localStorage.getItem('freshmart_premium_customers')) || this.generateSampleCustomers();

        // Store Information
        this.storeInfo = {
            name: "FreshMart Premium",
            tagline: "Your premium neighborhood grocery destination",
            address: "123 Krishna Street, Villupuram , Tamil Nadu, India",
            phone: "+91 98765 43210",
            email: "visitus@freshmartstore.com",
            logo: "assets/images/logo/store-logo.png",
            hours: {
                monday: "8:00 AM - 9:00 PM",
                tuesday: "8:00 AM - 9:00 PM", 
                wednesday: "8:00 AM - 9:00 PM",
                thursday: "8:00 AM - 9:00 PM",
                friday: "8:00 AM - 9:00 PM",
                saturday: "9:00 AM - 9:00 PM",
                sunday: "9:00 AM - 9:00 PM"
            }
        };

        // Categories with realistic images
        this.categories = [
            {
                id: 1,
                name: "Groceries",
                description: "Essential food items and cooking ingredients for your kitchen",
                image: "assets/images/categories/groceries-icon.png"
            },
            {
                id: 2,
                name: "Vegetables",
                description: "Fresh vegetables and greens delivered daily from local farms",
                image: "assets/images/categories/vegetables-icon.png"
            },
            {
                id: 3,
                name: "Fruits",
                description: "Fresh seasonal fruits packed with vitamins and natural goodness",
                image: "assets/images/categories/fruits-icon.png"
            },
            {
                id: 4,
                name: "Beverages",
                description: "Refreshing drinks, juices, and beverages for every occasion",
                image: "assets/images/categories/beverages-icon.png"
            },
            {
                id: 5,
                name: "Snacks",
                description: "Delicious chips, biscuits, and snack items for any time",
                image: "assets/images/categories/snacks-icon.png"
            },
            {
                id: 6,
                name: "Personal Care",
                description: "Health and beauty products for your daily care routine",
                image: "assets/images/categories/personal-care-icon.png"
            },
            {
                id: 7,
                name: "Household Items",
                description: "Cleaning supplies and home essentials for a spotless home",
                image: "assets/images/categories/household-icon.png"
            }
        ];

        // Products with realistic images
        this.products = [
            {
                id: 1,
                name: "Premium Basmati Rice",
                price: 85.00,
                category: "Groceries",
                description: "Premium quality basmati rice, 1kg pack. Perfect for biryanis and daily meals with authentic aroma and long grains. Sourced from the finest farms.",
                stock: 50,
                image: "assets/images/products/basmati-rice.png",
                brand: "Royal",
                featured: true,
                rating: 4.8,
                reviews: 156
            },
            {
                id: 2,
                name: "Fresh Red Tomatoes",
                price: 30.00,
                category: "Vegetables",
                description: "Fresh red tomatoes, per kg. Locally sourced and pesticide-free, perfect for cooking, salads, and daily use. Rich in vitamins and antioxidants.",
                stock: 25,
                image: "assets/images/products/tomatoes.png",
                brand: "Local Farm",
                featured: true,
                rating: 4.6,
                reviews: 89
            },
            {
                id: 3,
                name: "Crisp Green Apples",
                price: 120.00,
                category: "Fruits",
                description: "Crisp green apples, per kg. Rich in vitamins and perfect for healthy snacking. Imported quality from Kashmir orchards with natural sweetness.",
                stock: 30,
                image: "assets/images/products/green-apples.png",
                brand: "Kashmir Fresh",
                featured: true,
                rating: 4.9,
                reviews: 234
            },
            {
                id: 4,
                name: "Coca Cola Classic",
                price: 40.00,
                category: "Beverages",
                description: "Coca Cola 600ml bottle. Classic refreshing cola drink for any occasion. Ice-cold refreshment with the original taste you love.",
                stock: 100,
                image: "assets/images/products/coca-cola.png",
                brand: "Coca Cola",
                featured: true,
                rating: 4.5,
                reviews: 312
            },
            {
                id: 5,
                name: "Lay's Classic Chips",
                price: 20.00,
                category: "Snacks",
                description: "Lay's Classic Salted Chips 50g. Crispy and delicious potato chips made from farm-fresh potatoes. Perfect for snacking anytime.",
                stock: 75,
                image: "assets/images/products/lays-chips.png",
                brand: "Lay's",
                featured: false,
                rating: 4.3,
                reviews: 187
            },
            {
                id: 6,
                name: "Colgate Total Toothpaste",
                price: 55.00,
                category: "Personal Care",
                description: "Colgate Total toothpaste 100g. Complete oral care protection with advanced formula and fluoride. Fights bacteria for 12 hours.",
                stock: 40,
                image: "assets/images/products/colgate-toothpaste.png",
                brand: "Colgate",
                featured: true,
                rating: 4.7,
                reviews: 278
            },
            {
                id: 7,
                name: "Surf Excel Detergent",
                price: 65.00,
                category: "Household Items",
                description: "Surf Excel washing powder 500g. Removes tough stains with ease and keeps clothes bright and fresh. Trusted by millions.",
                stock: 35,
                image: "assets/images/products/surf-excel.png",
                brand: "Surf Excel",
                featured: false,
                rating: 4.4,
                reviews: 145
            },
            {
                id: 8,
                name: "Organic Toor Dal",
                price: 95.00,
                category: "Groceries",
                description: "Yellow lentils (Toor Dal) 1kg. High protein and nutritious for Indian cooking. Premium quality organic dal rich in nutrients.",
                stock: 45,
                image: "assets/images/products/toor-dal.png",
                brand: "Organic",
                featured: true,
                rating: 4.6,
                reviews: 198
            },
            {
                id: 9,
                name: "Farm Fresh Potatoes",
                price: 25.00,
                category: "Vegetables",
                description: "Fresh potatoes, per kg. Locally grown, perfect for all Indian dishes and cooking needs. No chemicals used, completely natural.",
                stock: 60,
                image: "assets/images/products/potatoes.png",
                brand: "Local Farm",
                featured: false,
                rating: 4.2,
                reviews: 156
            },
            {
                id: 10,
                name: "Sweet Red Apples",
                price: 110.00,
                category: "Fruits",
                description: "Sweet red apples, per kg. Imported quality apples, crisp and juicy with natural sweetness from Kashmir orchards.",
                stock: 28,
                image: "assets/images/products/red-apples.png",
                brand: "Kashmir Fresh",
                featured: true,
                rating: 4.8,
                reviews: 267
            },
            {
                id: 11,
                name: "Real Mango Juice",
                price: 35.00,
                category: "Beverages",
                description: "Real Mango Juice 200ml. Made from real Alphonso mangoes, no artificial flavors or colors. Natural and refreshing taste.",
                stock: 85,
                image: "assets/images/products/mango-juice.png",
                brand: "Real",
                featured: false,
                rating: 4.4,
                reviews: 123
            },
            {
                id: 12,
                name: "Oreo Original Cookies",
                price: 25.00,
                category: "Snacks",
                description: "Oreo Original Cookies 75g. Twist, lick, and dunk! America's favorite cookie sandwich with cream filling.",
                stock: 90,
                image: "assets/images/products/oreo-cookies.png",
                brand: "Oreo",
                featured: true,
                rating: 4.7,
                reviews: 345
            },
            {
                id: 13,
                name: "Head & Shoulders Shampoo",
                price: 145.00,
                category: "Personal Care",
                description: "Anti-dandruff shampoo 180ml. Clinically proven formula for healthy scalp and hair care. Removes dandruff effectively.",
                stock: 25,
                image: "assets/images/products/head-shoulders.png",
                brand: "Head & Shoulders",
                featured: false,
                rating: 4.5,
                reviews: 167
            },
            {
                id: 14,
                name: "Harpic Toilet Cleaner",
                price: 85.00,
                category: "Household Items",
                description: "Harpic toilet cleaner 500ml. Kills 99.9% germs, powerful cleaning action for complete hygiene and freshness.",
                stock: 30,
                image: "assets/images/products/harpic-cleaner.png",
                brand: "Harpic",
                featured: false,
                rating: 4.3,
                reviews: 89
            },
            {
                id: 15,
                name: "Aashirvaad Wheat Flour",
                price: 45.00,
                category: "Groceries",
                description: "Whole wheat flour (Atta) 1kg. Made from finest wheat grains, perfect for soft rotis and chapatis. 100% whole wheat goodness.",
                stock: 55,
                image: "assets/images/products/wheat-flour.png",
                brand: "Aashirvaad",
                featured: true,
                rating: 4.9,
                reviews: 456
            }
        ];

        this.init();
    }

    init() {
        this.setupLoadingScreen();
        this.setupEventListeners();
        this.updateCartCount();
        this.showPage('home');
        this.updateUserMenu();
        this.loadStoredData();
        this.setupScrollAnimations();
        this.setupBackToTop();
    }

    setupLoadingScreen() {
        const loadingScreen = document.getElementById('loadingScreen');
        if (loadingScreen) {
            setTimeout(() => {
                loadingScreen.classList.add('hidden');
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                }, 500);
            }, 1500);
        }
    }

    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, observerOptions);

        // Add scroll animation to elements
        const animateElements = document.querySelectorAll('.category-card, .product-card, .feature-card, .info-card');
        animateElements.forEach(el => {
            el.classList.add('animate-on-scroll');
            observer.observe(el);
        });

        // Header scroll effect
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    setupBackToTop() {
        const backToTop = document.getElementById('backToTop');
        if (backToTop) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 500) {
                    backToTop.classList.add('visible');
                } else {
                    backToTop.classList.remove('visible');
                }
            });

            backToTop.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    }

    loadStoredData() {
        if (localStorage.getItem('freshmart_premium_orders')) {
            this.orders = JSON.parse(localStorage.getItem('freshmart_premium_orders'));
        }
        if (localStorage.getItem('freshmart_premium_customers')) {
            this.customers = JSON.parse(localStorage.getItem('freshmart_premium_customers'));
        }
    }

    generateSampleOrders() {
        return [
            {
                id: "ORD001",
                customerInfo: { name: "John Doe", email: "john@example.com", phone: "+91 98765 43211" },
                date: "2024-10-01",
                total: 295.00,
                status: "Delivered",
                items: [
                    { name: "Premium Basmati Rice", quantity: 2, price: 85.00 },
                    { name: "Crisp Green Apples", quantity: 1, price: 120.00 },
                    { name: "Delivery Fee", quantity: 1, price: 5.00 }
                ]
            },
            {
                id: "ORD002",
                customerInfo: { name: "Jane Smith", email: "jane@example.com", phone: "+91 98765 43212" },
                date: "2024-10-02",
                total: 190.00,
                status: "Processing",
                items: [
                    { name: "Fresh Red Tomatoes", quantity: 3, price: 30.00 },
                    { name: "Sweet Red Apples", quantity: 1, price: 110.00 }
                ]
            },
            {
                id: "ORD003",
                customerInfo: { name: "Mike Johnson", email: "mike@example.com", phone: "+91 98765 43213" },
                date: "2024-10-03",
                total: 345.00,
                status: "Shipped",
                items: [
                    { name: "Organic Toor Dal", quantity: 2, price: 95.00 },
                    { name: "Colgate Total Toothpaste", quantity: 1, price: 55.00 },
                    { name: "Oreo Original Cookies", quantity: 4, price: 25.00 }
                ]
            }
        ];
    }

    generateSampleCustomers() {
        return [
            {
                name: "John Doe",
                email: "john@example.com",
                phone: "+91 98765 43211",
                orders: 15,
                totalSpent: 4250.00,
                joinDate: "2024-01-15"
            },
            {
                name: "Jane Smith",
                email: "jane@example.com",
                phone: "+91 98765 43212",
                orders: 12,
                totalSpent: 3180.00,
                joinDate: "2024-03-20"
            },
            {
                name: "Mike Johnson",
                email: "mike@example.com",
                phone: "+91 98765 43213",
                orders: 8,
                totalSpent: 2150.00,
                joinDate: "2024-06-10"
            }
        ];
    }

    setupEventListeners() {
        // Navigation click handler
        document.addEventListener('click', (e) => {
            if (e.target.dataset.page || e.target.closest('[data-page]')) {
                e.preventDefault();
                const pageElement = e.target.dataset.page ? e.target : e.target.closest('[data-page]');
                this.showPage(pageElement.dataset.page);
            }
        });

        // Mobile menu toggle
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        if (mobileMenuToggle) {
            mobileMenuToggle.addEventListener('click', () => {
                const nav = document.getElementById('mainNav');
                nav.classList.toggle('open');
                mobileMenuToggle.classList.toggle('active');
            });
        }

        // Search functionality
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            let searchTimeout;
            searchInput.addEventListener('input', (e) => {
                const query = e.target.value;
                clearTimeout(searchTimeout);
                searchTimeout = setTimeout(() => {
                    this.handleSearch(query);
                }, 300);
            });

            document.addEventListener('click', (e) => {
                if (!e.target.closest('.search-box')) {
                    document.getElementById('searchResults').style.display = 'none';
                }
            });
        }

        // Cart button
        const cartBtn = document.getElementById('cartBtn');
        if (cartBtn) {
            cartBtn.addEventListener('click', () => {
                this.showPage('cart');
            });
        }

        // User menu dropdown
        const userMenuBtn = document.getElementById('userMenuBtn');
        const userDropdown = document.getElementById('userDropdown');
        if (userMenuBtn && userDropdown) {
            userMenuBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                userDropdown.style.display = userDropdown.style.display === 'block' ? 'none' : 'block';
            });

            document.addEventListener('click', () => {
                userDropdown.style.display = 'none';
            });
        }

        // Logout functionality
        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.logout();
            });
        }

        // Notification close
        const notificationClose = document.getElementById('notificationClose');
        if (notificationClose) {
            notificationClose.addEventListener('click', () => {
                document.getElementById('notification').classList.remove('show');
            });
        }

        this.setupForms();

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            const nav = document.getElementById('mainNav');
            const toggle = document.getElementById('mobileMenuToggle');
            if (!e.target.closest('.header') && nav && nav.classList.contains('open')) {
                nav.classList.remove('open');
                if (toggle) toggle.classList.remove('active');
            }
        });
    }

    setupForms() {
        const forms = [
            { id: 'loginForm', handler: 'handleLogin' },
            { id: 'registerForm', handler: 'handleRegister' },
            { id: 'adminLoginForm', handler: 'handleAdminLogin' },
            { id: 'contactForm', handler: 'handleContactForm' },
            { id: 'checkoutForm', handler: 'handleCheckout' }
        ];

        forms.forEach(form => {
            const formElement = document.getElementById(form.id);
            if (formElement) {
                formElement.addEventListener('submit', (e) => {
                    e.preventDefault();
                    this[form.handler](e.target);
                });
            }
        });
    }

    showPage(pageId) {
        // Hide all pages
        document.querySelectorAll('.page').forEach(page => {
            page.style.display = 'none';
        });

        // Update navigation active state
        document.querySelectorAll('.nav__link').forEach(link => {
            link.classList.remove('active');
        });

        const activeLink = document.querySelector(`[data-page="${pageId}"].nav__link`);
        if (activeLink) {
            activeLink.classList.add('active');
        }

        // Show target page
        const targetPage = document.getElementById(pageId + 'Page');
        if (targetPage) {
            targetPage.style.display = 'block';
            this.currentPage = pageId;
            this.loadPageContent(pageId);
        }

        // Close mobile menu
        const nav = document.getElementById('mainNav');
        const toggle = document.getElementById('mobileMenuToggle');
        if (nav) nav.classList.remove('open');
        if (toggle) toggle.classList.remove('active');

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    loadPageContent(pageId) {
        switch (pageId) {
            case 'home':
                this.loadHomePage();
                break;
            case 'products':
                this.loadProductsPage();
                break;
            case 'categories':
                this.loadCategoriesPage();
                break;
            case 'cart':
                this.loadCartPage();
                break;
            case 'admin':
                this.loadAdminPage();
                break;
            case 'checkout':
                this.loadCheckoutPage();
                break;
        }
    }

    loadHomePage() {
        this.renderCategories('categoriesGrid');
        this.renderFeaturedProducts();
        this.renderStoreHours();
    }

    loadProductsPage() {
        this.setupProductFilters();
        this.renderAllProducts();
    }

    loadCategoriesPage() {
        this.renderCategories('allCategories');
    }

    loadCartPage() {
        this.renderCart();
    }

    loadAdminPage() {
        if (this.isAdmin) {
            this.showAdminPanel();
        } else {
            this.showAdminLogin();
        }
    }

    loadCheckoutPage() {
        if (this.cart.length === 0) {
            this.showPage('cart');
            return;
        }
        this.renderCheckoutSummary();
    }

    renderCategories(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = this.categories.map(category => `
            <div class="category-card animate-on-scroll" data-category="${category.name}">
                <img src="${category.image}" alt="${category.name}" class="category-image" 
                     onerror="this.src='https://via.placeholder.com/80x80/6B7280/FFFFFF?text=${category.name.charAt(0)}'">
                <h3>${category.name}</h3>
                <p>${category.description}</p>
            </div>
        `).join('');

        // Add click handlers
        container.querySelectorAll('.category-card').forEach(card => {
            card.addEventListener('click', () => {
                const categoryName = card.dataset.category;
                this.filterProductsByCategory(categoryName);
                this.showPage('products');
            });
        });

        // Re-setup scroll animations for new elements
        this.setupScrollAnimationsForElements(container.querySelectorAll('.animate-on-scroll'));
    }

    renderFeaturedProducts() {
        const container = document.getElementById('featuredProducts');
        if (!container) return;

        const featuredProducts = this.products.filter(product => product.featured).slice(0, 8);
        this.renderProducts(featuredProducts, container);
    }

    renderAllProducts() {
        const container = document.getElementById('allProducts');
        if (!container) return;

        this.renderProducts(this.products, container);
    }

    renderProducts(products, container) {
        if (!container) return;

        container.innerHTML = products.map(product => `
            <div class="product-card animate-on-scroll" data-product-id="${product.id}">
                <div class="product-card__image">
                    <img src="${product.image}" alt="${product.name}" class="product-image"
                         onerror="this.src='https://via.placeholder.com/280x250/6B7280/FFFFFF?text=${encodeURIComponent(product.name)}'">
                    ${product.featured ? '<span class="product-card__badge">Featured</span>' : ''}
                </div>
                <div class="product-card__content">
                    <h3 class="product-card__title">${product.name}</h3>
                    <p class="product-card__brand">${product.brand}</p>
                    <div class="rating" style="margin-bottom: 0.75rem;">
                        ${this.generateStarRating(product.rating || 4.5)}
                        <span style="font-size: 0.75rem; color: #64748b; margin-left: 0.5rem;">(${product.reviews || 0} reviews)</span>
                    </div>
                    <p class="product-card__description">${product.description}</p>
                    <div class="product-card__footer">
                        <span class="product-card__price">₹${product.price.toFixed(2)}</span>
                        <span class="product-card__stock ${product.stock < 10 ? 'low' : ''}">
                            ${product.stock < 10 ? 'Low Stock' : 'In Stock'} (${product.stock})
                        </span>
                    </div>
                    <div class="product-card__actions">
                        <button class="btn-add-cart" data-product-id="${product.id}" 
                                ${product.stock === 0 ? 'disabled' : ''}>
                            <i class="fas fa-shopping-cart"></i>
                            ${product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
                        </button>
                        <button class="btn-wishlist ${this.isInWishlist(product.id) ? 'active' : ''}" 
                                data-product-id="${product.id}" title="Add to Wishlist">
                            <i class="fas fa-heart"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');

        this.setupProductCardListeners(container);
        this.setupScrollAnimationsForElements(container.querySelectorAll('.animate-on-scroll'));
    }

    generateStarRating(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        let stars = '';

        for (let i = 0; i < fullStars; i++) {
            stars += '<i class="fas fa-star" style="color: #f59e0b;"></i>';
        }

        if (hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt" style="color: #f59e0b;"></i>';
        }

        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        for (let i = 0; i < emptyStars; i++) {
            stars += '<i class="far fa-star" style="color: #d1d5db;"></i>';
        }

        return stars;
    }

    setupScrollAnimationsForElements(elements) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, observerOptions);

        elements.forEach(el => observer.observe(el));
    }

    setupProductCardListeners(container) {
        container.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('click', (e) => {
                if (e.target.closest('.btn-add-cart') || e.target.closest('.btn-wishlist')) {
                    return;
                }
                const productId = parseInt(card.dataset.productId);
                this.showProductDetail(productId);
            });
        });

        container.querySelectorAll('.btn-add-cart').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                if (!btn.disabled) {
                    const productId = parseInt(btn.dataset.productId);
                    this.addToCart(productId);

                    // Add visual feedback
                    btn.classList.add('loading');
                    setTimeout(() => {
                        btn.classList.remove('loading');
                    }, 1000);
                }
            });
        });

        container.querySelectorAll('.btn-wishlist').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const productId = parseInt(btn.dataset.productId);
                this.toggleWishlist(productId);
                btn.classList.toggle('active');

                // Add animation effect
                btn.style.transform = 'scale(1.2)';
                setTimeout(() => {
                    btn.style.transform = 'scale(1)';
                }, 200);
            });
        });
    }

    renderStoreHours() {
        const container = document.getElementById('storeHours');
        if (!container) return;

        container.innerHTML = Object.entries(this.storeInfo.hours).map(([day, hours]) => `
            <li>
                <i class="fas fa-clock" style="color: var(--primary-color); margin-right: 0.5rem;"></i>
                <strong>${day.charAt(0).toUpperCase() + day.slice(1)}:</strong> ${hours}
            </li>
        `).join('');
    }

    setupProductFilters() {
        const categoryFilter = document.getElementById('categoryFilter');
        const sortBy = document.getElementById('sortBy');

        if (categoryFilter) {
            categoryFilter.innerHTML = '<option value="">All Categories</option>' +
                this.categories.map(cat => 
                    `<option value="${cat.name}">${cat.name}</option>`
                ).join('');

            categoryFilter.addEventListener('change', () => {
                this.applyFilters();
            });
        }

        if (sortBy) {
            sortBy.addEventListener('change', () => {
                this.applyFilters();
            });
        }
    }

    applyFilters() {
        const categoryFilter = document.getElementById('categoryFilter');
        const sortBy = document.getElementById('sortBy');

        let filteredProducts = [...this.products];

        // Apply category filter
        if (categoryFilter?.value) {
            filteredProducts = filteredProducts.filter(product => 
                product.category === categoryFilter.value
            );
        }

        // Apply sorting
        if (sortBy?.value) {
            switch (sortBy.value) {
                case 'name':
                    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
                    break;
                case 'price-low':
                    filteredProducts.sort((a, b) => a.price - b.price);
                    break;
                case 'price-high':
                    filteredProducts.sort((a, b) => b.price - a.price);
                    break;
            }
        }

        const container = document.getElementById('allProducts');
        this.renderProducts(filteredProducts, container);
    }

    filterProductsByCategory(categoryName) {
        const categoryFilter = document.getElementById('categoryFilter');
        if (categoryFilter) {
            categoryFilter.value = categoryName;
            this.applyFilters();
        }
    }

    handleSearch(query) {
        const searchResults = document.getElementById('searchResults');
        if (!searchResults) return;

        if (query.length < 2) {
            searchResults.style.display = 'none';
            return;
        }

        const results = this.products.filter(product =>
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.description.toLowerCase().includes(query.toLowerCase()) ||
            product.brand.toLowerCase().includes(query.toLowerCase()) ||
            product.category.toLowerCase().includes(query.toLowerCase())
        );

        if (results.length > 0) {
            searchResults.innerHTML = results.slice(0, 5).map(product => `
                <div class="search-result-item" data-product-id="${product.id}">
                    <img src="${product.image}" alt="${product.name}"
                         onerror="this.src='https://via.placeholder.com/40x40/6B7280/FFFFFF?text=${product.name.charAt(0)}'">
                    <div>
                        <div><strong>${product.name}</strong></div>
                        <div style="font-size: 0.8em; color: #6b7280;">₹${product.price.toFixed(2)} - ${product.brand}</div>
                        <div style="font-size: 0.75em; color: #10b981;">${this.generateStarRating(product.rating || 4.5)}</div>
                    </div>
                </div>
            `).join('');

            searchResults.querySelectorAll('.search-result-item').forEach(item => {
                item.addEventListener('click', () => {
                    const productId = parseInt(item.dataset.productId);
                    this.showProductDetail(productId);
                    searchResults.style.display = 'none';
                    document.getElementById('searchInput').value = '';
                });
            });

            searchResults.style.display = 'block';
        } else {
            searchResults.innerHTML = '<div class="search-result-item" style="color: #6b7280; font-style: italic;">No products found</div>';
            searchResults.style.display = 'block';
        }
    }

    addToCart(productId, quantity = 1) {
        const product = this.products.find(p => p.id === productId);
        if (!product) return;

        if (product.stock < quantity) {
            this.showNotification(`Only ${product.stock} items available!`, 'error');
            return;
        }

        const existingItem = this.cart.find(item => item.productId === productId);

        if (existingItem) {
            const newQuantity = existingItem.quantity + quantity;
            if (newQuantity <= product.stock) {
                existingItem.quantity = newQuantity;
                this.showNotification(`Updated ${product.name} quantity in cart!`, 'success');
            } else {
                this.showNotification(`Cannot add more. Only ${product.stock} items available!`, 'error');
                return;
            }
        } else {
            this.cart.push({
                productId,
                quantity,
                price: product.price,
                name: product.name,
                image: product.image,
                brand: product.brand
            });
            this.showNotification(`${product.name} added to cart!`, 'success');
        }

        this.saveCart();
        this.updateCartCount();
    }

    toggleWishlist(productId) {
        const index = this.wishlist.indexOf(productId);
        const product = this.products.find(p => p.id === productId);

        if (index > -1) {
            this.wishlist.splice(index, 1);
            this.showNotification(`${product.name} removed from wishlist!`, 'info');
        } else {
            this.wishlist.push(productId);
            this.showNotification(`${product.name} added to wishlist!`, 'success');
        }

        localStorage.setItem('freshmart_premium_wishlist', JSON.stringify(this.wishlist));
    }

    isInWishlist(productId) {
        return this.wishlist.includes(productId);
    }

    updateCartCount() {
        const cartCount = document.getElementById('cartCount');
        if (cartCount) {
            const totalItems = this.cart.reduce((total, item) => total + item.quantity, 0);
            cartCount.textContent = totalItems;
            cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
        }
    }

    saveCart() {
        localStorage.setItem('freshmart_premium_cart', JSON.stringify(this.cart));
    }

    renderCart() {
        const container = document.getElementById('cartContent');
        if (!container) return;

        if (this.cart.length === 0) {
            container.innerHTML = `
                <div class="empty-cart" style="text-align: center; padding: 3rem; background: var(--bg-primary); border-radius: 1.5rem; box-shadow: var(--shadow-md);">
                    <div style="font-size: 4rem; color: var(--text-muted); margin-bottom: 1rem;">
                        <i class="fas fa-shopping-cart"></i>
                    </div>
                    <h2 style="color: var(--text-muted); margin-bottom: 1rem;">Your cart is empty</h2>
                    <p style="color: var(--text-secondary); margin-bottom: 2rem;">Add some amazing products to get started!</p>
                    <button class="btn btn--primary btn--large" data-page="products">
                        <i class="fas fa-shopping-bag"></i>
                        Start Shopping
                    </button>
                </div>
            `;
            return;
        }

        const cartItems = this.cart.map(item => {
            const product = this.products.find(p => p.id === item.productId);
            return { ...item, product };
        }).filter(item => item.product);

        const subtotal = this.getCartSubtotal();
        const deliveryFee = subtotal > 500 ? 0 : 50;
        const total = subtotal + deliveryFee;

        container.innerHTML = `
            <div class="cart-items" style="margin-bottom: 2rem;">
                ${cartItems.map(item => `
                    <div class="cart-item" style="display: grid; grid-template-columns: 100px 1fr auto auto auto; gap: 1rem; align-items: center; padding: 1.5rem; background: var(--bg-primary); border-radius: 1rem; margin-bottom: 1rem; box-shadow: var(--shadow-md); border: 2px solid var(--border-light);">
                        <img src="${item.product.image}" alt="${item.product.name}" 
                             style="width: 100px; height: 100px; object-fit: cover; border-radius: 0.75rem;"
                             onerror="this.src='https://via.placeholder.com/100x100/6B7280/FFFFFF?text=${item.product.name.charAt(0)}'">
                        <div class="cart-item__info">
                            <h3 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.5rem; color: var(--text-primary);">${item.product.name}</h3>
                            <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 0.5rem;">${item.product.brand}</p>
                            <p style="font-size: 0.875rem; color: var(--text-muted);">₹${item.price.toFixed(2)} each</p>
                        </div>
                        <div class="cart-item__quantity" style="display: flex; align-items: center; gap: 0.75rem;">
                            <button onclick="app.updateCartQuantity(${item.productId}, ${item.quantity - 1})" 
                                    style="background: var(--bg-secondary); border: 2px solid var(--border-light); width: 36px; height: 36px; border-radius: 0.5rem; cursor: pointer; font-weight: 600; transition: all 0.3s ease;"
                                    ${item.quantity <= 1 ? 'disabled' : ''}>-</button>
                            <span style="font-weight: 600; min-width: 30px; text-align: center; font-size: 1.125rem;">${item.quantity}</span>
                            <button onclick="app.updateCartQuantity(${item.productId}, ${item.quantity + 1})"
                                    style="background: var(--bg-secondary); border: 2px solid var(--border-light); width: 36px; height: 36px; border-radius: 0.5rem; cursor: pointer; font-weight: 600; transition: all 0.3s ease;"
                                    ${item.quantity >= item.product.stock ? 'disabled' : ''}>+</button>
                        </div>
                        <div class="cart-item__price" style="font-size: 1.25rem; font-weight: 700; color: var(--primary-color);">₹${(item.price * item.quantity).toFixed(2)}</div>
                        <button onclick="app.removeFromCart(${item.productId})" 
                                style="background: var(--error-color); color: white; border: none; padding: 0.5rem; border-radius: 0.5rem; cursor: pointer; font-size: 1.125rem; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; transition: all 0.3s ease;"
                                title="Remove from cart">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                `).join('')}
            </div>
            <div class="cart-summary" style="background: var(--bg-primary); padding: 2rem; border-radius: 1.5rem; margin-top: 2rem; box-shadow: var(--shadow-md); border: 2px solid var(--border-light);">
                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1.5rem; color: var(--primary-color); text-align: center;">
                    <i class="fas fa-receipt" style="margin-right: 0.5rem;"></i>
                    Order Summary
                </h3>
                <div style="margin-bottom: 1rem;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 0.75rem; font-size: 1rem;">
                        <span>Subtotal (${this.cart.reduce((total, item) => total + item.quantity, 0)} items):</span>
                        <span style="font-weight: 600;">₹${subtotal.toFixed(2)}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; margin-bottom: 0.75rem; font-size: 1rem;">
                        <span>Delivery Fee:</span>
                        <span style="font-weight: 600; color: ${deliveryFee === 0 ? 'var(--success-color)' : 'var(--text-primary)'};">
                            ${deliveryFee === 0 ? 'FREE' : '₹' + deliveryFee.toFixed(2)}
                        </span>
                    </div>
                    ${deliveryFee === 0 ? 
                        '<p style="color: var(--success-color); font-size: 0.9em; text-align: center; margin: 1rem 0; padding: 0.75rem; background: rgba(16, 185, 129, 0.1); border-radius: 0.5rem;"><i class="fas fa-gift"></i> You got free delivery!</p>' : 
                        subtotal < 500 ? 
                        `<p style="color: var(--warning-color); font-size: 0.9em; text-align: center; margin: 1rem 0; padding: 0.75rem; background: rgba(245, 158, 11, 0.1); border-radius: 0.5rem;"><i class="fas fa-info-circle"></i> Add ₹${(500 - subtotal).toFixed(2)} more for free delivery!</p>` : 
                        ''
                    }
                </div>
                <div style="display: flex; justify-content: space-between; font-size: 1.25rem; font-weight: 700; border-top: 2px solid var(--border-light); padding-top: 1rem; margin-top: 1rem; color: var(--primary-color);">
                    <span>Total:</span>
                    <span>₹${total.toFixed(2)}</span>
                </div>
                <div style="margin-top: 1.5rem; display: flex; gap: 1rem; flex-direction: column;">
                    <button class="btn btn--primary btn--large" style="width: 100%;" data-page="checkout">
                        <i class="fas fa-credit-card"></i>
                        Proceed to Checkout
                    </button>
                    <button class="btn btn--secondary btn--large" style="width: 100%;" data-page="products">
                        <i class="fas fa-shopping-bag"></i>
                        Continue Shopping
                    </button>
                </div>
            </div>
        `;
    }

    removeFromCart(productId) {
        const product = this.products.find(p => p.id === productId);
        this.cart = this.cart.filter(item => item.productId !== productId);
        this.saveCart();
        this.updateCartCount();
        this.renderCart();
        if (product) {
            this.showNotification(`${product.name} removed from cart!`, 'info');
        }
    }

    updateCartQuantity(productId, quantity) {
        const item = this.cart.find(item => item.productId === productId);
        const product = this.products.find(p => p.id === productId);

        if (item && product) {
            if (quantity <= 0) {
                this.removeFromCart(productId);
            } else if (quantity <= product.stock) {
                item.quantity = quantity;
                this.saveCart();
                this.updateCartCount();
                this.renderCart();
            } else {
                this.showNotification(`Only ${product.stock} items available!`, 'error');
            }
        }
    }

    getCartSubtotal() {
        return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    // Authentication Methods
    handleLogin(form) {
        const inputs = form.querySelectorAll('input');
        const username = inputs[0].value;
        const password = inputs[1].value;

        if (username && password) {
            this.currentUser = {
                id: Date.now(),
                username: username,
                email: username.includes('@') ? username : username + '@example.com',
                firstName: 'Demo',
                lastName: 'User'
            };
            localStorage.setItem('freshmart_premium_user', JSON.stringify(this.currentUser));
            this.updateUserMenu();
            this.showNotification('Login successful! Welcome to FreshMart Premium.', 'success');
            this.showPage('home');
        } else {
            this.showNotification('Please enter both username and password.', 'error');
        }
    }

    handleRegister(form) {
        const inputs = form.querySelectorAll('input');
        const userData = {
            id: Date.now(),
            firstName: inputs[0].value,
            lastName: inputs[1].value,
            email: inputs[2].value,
            phone: inputs[3].value,
            password: inputs[4].value,
            confirmPassword: inputs[5].value
        };

        if (userData.password !== userData.confirmPassword) {
            this.showNotification('Passwords do not match!', 'error');
            return;
        }

        if (!userData.firstName || !userData.email || !userData.password) {
            this.showNotification('Please fill in all required fields.', 'error');
            return;
        }

        this.currentUser = {
            id: userData.id,
            username: userData.email,
            email: userData.email,
            firstName: userData.firstName,
            lastName: userData.lastName,
            phone: userData.phone
        };

        localStorage.setItem('freshmart_premium_user', JSON.stringify(this.currentUser));
        this.updateUserMenu();
        this.showNotification('Registration successful! Welcome to FreshMart Premium.', 'success');
        this.showPage('home');
    }

    handleAdminLogin(form) {
        const inputs = form.querySelectorAll('input');
        const username = inputs[0].value;
        const password = inputs[1].value;

        if (username === 'admin' && password === 'admin123') {
            this.isAdmin = true;
            this.showAdminPanel();
            this.showNotification('Admin login successful!', 'success');
        } else {
            this.showNotification('Invalid admin credentials! Use admin/admin123', 'error');
        }
    }

    handleContactForm(form) {
        this.showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
        form.reset();
    }

    handleCheckout(form) {
        const inputs = form.querySelectorAll('input, select, textarea');

        const orderData = {
            customerInfo: {
                name: inputs[0].value,
                phone: inputs[1].value,
                email: inputs[2].value,
                address: inputs[3].value
            },
            deliveryOption: inputs[4].value,
            paymentMethod: inputs[5].value,
            items: this.cart,
            subtotal: this.getCartSubtotal(),
            deliveryFee: this.getCartSubtotal() > 500 ? 0 : 50,
            total: this.getCartSubtotal() + (this.getCartSubtotal() > 500 ? 0 : 50),
            date: new Date().toISOString().split('T')[0],
            status: 'Processing'
        };

        const orderId = 'ORD' + String(Date.now()).slice(-6);
        orderData.id = orderId;

        this.orders.push(orderData);
        localStorage.setItem('freshmart_premium_orders', JSON.stringify(this.orders));

        this.cart = [];
        this.saveCart();
        this.updateCartCount();

        this.showNotification(`Order ${orderId} placed successfully! We'll contact you soon.`, 'success');

        setTimeout(() => {
            this.showPage('home');
        }, 2000);
    }

    updateUserMenu() {
        const userMenuText = document.getElementById('userMenuText');
        const guestMenu = document.getElementById('guestMenu');
        const userMenu = document.getElementById('userMenu');

        if (this.currentUser) {
            if (userMenuText) userMenuText.textContent = this.currentUser.firstName;
            if (guestMenu) guestMenu.style.display = 'none';
            if (userMenu) userMenu.style.display = 'block';
        } else {
            if (userMenuText) userMenuText.textContent = 'Account';
            if (guestMenu) guestMenu.style.display = 'block';
            if (userMenu) userMenu.style.display = 'none';
        }
    }

    logout() {
        this.currentUser = null;
        this.isAdmin = false;
        localStorage.removeItem('freshmart_premium_user');
        this.updateUserMenu();
        this.showNotification('Logged out successfully!', 'info');
        this.showPage('home');
    }

    // Admin Methods
    showAdminLogin() {
        const adminLogin = document.getElementById('adminLogin');
        const adminPanel = document.getElementById('adminPanel');
        if (adminLogin) adminLogin.style.display = 'block';
        if (adminPanel) adminPanel.style.display = 'none';
    }

    showAdminPanel() {
        const adminLogin = document.getElementById('adminLogin');
        const adminPanel = document.getElementById('adminPanel');
        if (adminLogin) adminLogin.style.display = 'none';
        if (adminPanel) adminPanel.style.display = 'block';

        this.setupAdminTabs();
        this.loadAdminDashboard();
    }

    setupAdminTabs() {
        const tabBtns = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');

        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const tabId = btn.dataset.tab;

                tabBtns.forEach(b => b.classList.remove('active'));
                tabContents.forEach(c => c.style.display = 'none');

                btn.classList.add('active');
                const targetTab = document.getElementById(tabId + 'Tab');
                if (targetTab) targetTab.style.display = 'block';

                switch (tabId) {
                    case 'dashboard':
                        this.loadAdminDashboard();
                        break;
                    case 'products':
                        this.loadAdminProducts();
                        break;
                    case 'orders':
                        this.loadAdminOrders();
                        break;
                    case 'customers':
                        this.loadAdminCustomers();
                        break;
                }
            });
        });
    }

    loadAdminDashboard() {
        const totalRevenue = this.orders.reduce((sum, order) => sum + order.total, 0);

        if (document.getElementById('totalProducts')) {
            document.getElementById('totalProducts').textContent = this.products.length;
        }
        if (document.getElementById('totalOrders')) {
            document.getElementById('totalOrders').textContent = this.orders.length;
        }
        if (document.getElementById('totalRevenue')) {
            document.getElementById('totalRevenue').textContent = '₹' + totalRevenue.toFixed(2);
        }
    }

    loadAdminProducts() {
        const container = document.getElementById('productsTable');
        if (!container) return;

        container.innerHTML = `
            <div style="overflow-x: auto;">
                <table style="width: 100%; border-collapse: collapse; background: var(--bg-primary); border-radius: 1rem; overflow: hidden; box-shadow: var(--shadow-md);">
                    <thead style="background: var(--bg-secondary);">
                        <tr>
                            <th style="padding: 1rem; text-align: left; font-weight: 600; color: var(--text-primary);">Image</th>
                            <th style="padding: 1rem; text-align: left; font-weight: 600; color: var(--text-primary);">Name</th>
                            <th style="padding: 1rem; text-align: left; font-weight: 600; color: var(--text-primary);">Category</th>
                            <th style="padding: 1rem; text-align: left; font-weight: 600; color: var(--text-primary);">Price</th>
                            <th style="padding: 1rem; text-align: left; font-weight: 600; color: var(--text-primary);">Stock</th>
                            <th style="padding: 1rem; text-align: left; font-weight: 600; color: var(--text-primary);">Status</th>
                            <th style="padding: 1rem; text-align: left; font-weight: 600; color: var(--text-primary);">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${this.products.slice(0, 10).map(product => `
                            <tr style="border-bottom: 1px solid var(--border-light);">
                                <td style="padding: 1rem;">
                                    <img src="${product.image}" alt="${product.name}" 
                                         style="width: 50px; height: 50px; object-fit: cover; border-radius: 0.5rem;"
                                         onerror="this.src='https://via.placeholder.com/50x50/6B7280/FFFFFF?text=${product.name.charAt(0)}'">
                                </td>
                                <td style="padding: 1rem; font-weight: 500;">${product.name}</td>
                                <td style="padding: 1rem; color: var(--text-secondary);">${product.category}</td>
                                <td style="padding: 1rem; font-weight: 600; color: var(--primary-color);">₹${product.price.toFixed(2)}</td>
                                <td style="padding: 1rem;">${product.stock}</td>
                                <td style="padding: 1rem;">
                                    <span style="padding: 0.25rem 0.75rem; border-radius: 1rem; font-size: 0.75rem; font-weight: 500; background: ${product.stock > 10 ? 'rgba(16, 185, 129, 0.1)' : product.stock > 0 ? 'rgba(245, 158, 11, 0.1)' : 'rgba(239, 68, 68, 0.1)'}; color: ${product.stock > 10 ? 'var(--success-color)' : product.stock > 0 ? 'var(--warning-color)' : 'var(--error-color)'};">
                                        ${product.stock > 10 ? 'In Stock' : product.stock > 0 ? 'Low Stock' : 'Out of Stock'}
                                    </span>
                                </td>
                                <td style="padding: 1rem;">
                                    <button onclick="app.editProduct(${product.id})" style="background: var(--secondary-color); color: white; border: none; padding: 0.5rem 1rem; border-radius: 0.5rem; cursor: pointer; margin-right: 0.5rem; font-size: 0.875rem;">
                                        <i class="fas fa-edit"></i> Edit
                                    </button>
                                    <button onclick="app.deleteProduct(${product.id})" style="background: var(--error-color); color: white; border: none; padding: 0.5rem 1rem; border-radius: 0.5rem; cursor: pointer; font-size: 0.875rem;">
                                        <i class="fas fa-trash"></i> Delete
                                    </button>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
            <p style="text-align: center; margin-top: 1rem; color: var(--text-secondary); font-style: italic;">Showing first 10 products of ${this.products.length} total</p>
        `;
    }

    loadAdminOrders() {
        const container = document.getElementById('ordersTable');
        if (!container) return;

        container.innerHTML = `
            <div style="overflow-x: auto;">
                <table style="width: 100%; border-collapse: collapse; background: var(--bg-primary); border-radius: 1rem; overflow: hidden; box-shadow: var(--shadow-md);">
                    <thead style="background: var(--bg-secondary);">
                        <tr>
                            <th style="padding: 1rem; text-align: left; font-weight: 600; color: var(--text-primary);">Order ID</th>
                            <th style="padding: 1rem; text-align: left; font-weight: 600; color: var(--text-primary);">Customer</th>
                            <th style="padding: 1rem; text-align: left; font-weight: 600; color: var(--text-primary);">Date</th>
                            <th style="padding: 1rem; text-align: left; font-weight: 600; color: var(--text-primary);">Items</th>
                            <th style="padding: 1rem; text-align: left; font-weight: 600; color: var(--text-primary);">Total</th>
                            <th style="padding: 1rem; text-align: left; font-weight: 600; color: var(--text-primary);">Status</th>
                            <th style="padding: 1rem; text-align: left; font-weight: 600; color: var(--text-primary);">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${this.orders.map(order => `
                            <tr style="border-bottom: 1px solid var(--border-light);">
                                <td style="padding: 1rem; font-weight: 600; color: var(--primary-color);">#${order.id}</td>
                                <td style="padding: 1rem;">${order.customerInfo ? order.customerInfo.name : order.customer || 'N/A'}</td>
                                <td style="padding: 1rem; color: var(--text-secondary);">${order.date}</td>
                                <td style="padding: 1rem;">${order.items ? order.items.length : 0} items</td>
                                <td style="padding: 1rem; font-weight: 600;">₹${order.total.toFixed(2)}</td>
                                <td style="padding: 1rem;">
                                    <span style="padding: 0.25rem 0.75rem; border-radius: 1rem; font-size: 0.75rem; font-weight: 500; background: ${this.getStatusBg(order.status)}; color: ${this.getStatusColor(order.status)};">
                                        ${order.status}
                                    </span>
                                </td>
                                <td style="padding: 1rem;">
                                    <button onclick="app.viewOrderDetails('${order.id}')" style="background: var(--info-color); color: white; border: none; padding: 0.5rem 1rem; border-radius: 0.5rem; cursor: pointer; margin-right: 0.5rem; font-size: 0.875rem;">
                                        <i class="fas fa-eye"></i> View
                                    </button>
                                    <button onclick="app.updateOrderStatus('${order.id}')" style="background: var(--primary-color); color: white; border: none; padding: 0.5rem 1rem; border-radius: 0.5rem; cursor: pointer; font-size: 0.875rem;">
                                        <i class="fas fa-edit"></i> Update
                                    </button>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
    }

    loadAdminCustomers() {
        const container = document.getElementById('customersTable');
        if (!container) return;

        container.innerHTML = `
            <div style="overflow-x: auto;">
                <table style="width: 100%; border-collapse: collapse; background: var(--bg-primary); border-radius: 1rem; overflow: hidden; box-shadow: var(--shadow-md);">
                    <thead style="background: var(--bg-secondary);">
                        <tr>
                            <th style="padding: 1rem; text-align: left; font-weight: 600; color: var(--text-primary);">Name</th>
                            <th style="padding: 1rem; text-align: left; font-weight: 600; color: var(--text-primary);">Email</th>
                            <th style="padding: 1rem; text-align: left; font-weight: 600; color: var(--text-primary);">Phone</th>
                            <th style="padding: 1rem; text-align: left; font-weight: 600; color: var(--text-primary);">Orders</th>
                            <th style="padding: 1rem; text-align: left; font-weight: 600; color: var(--text-primary);">Total Spent</th>
                            <th style="padding: 1rem; text-align: left; font-weight: 600; color: var(--text-primary);">Join Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${this.customers.map(customer => `
                            <tr style="border-bottom: 1px solid var(--border-light);">
                                <td style="padding: 1rem; font-weight: 500;">${customer.name}</td>
                                <td style="padding: 1rem; color: var(--text-secondary);">${customer.email}</td>
                                <td style="padding: 1rem;">${customer.phone || 'N/A'}</td>
                                <td style="padding: 1rem; font-weight: 600; color: var(--primary-color);">${customer.orders || 0}</td>
                                <td style="padding: 1rem; font-weight: 600; color: var(--success-color);">₹${(customer.totalSpent || 0).toFixed(2)}</td>
                                <td style="padding: 1rem; color: var(--text-secondary);">${customer.joinDate || 'N/A'}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
    }

    getStatusColor(status) {
        switch (status) {
            case 'Processing': return '#f59e0b';
            case 'Shipped': return '#3b82f6';
            case 'Delivered': return '#10b981';
            case 'Cancelled': return '#ef4444';
            default: return '#6b7280';
        }
    }

    getStatusBg(status) {
        switch (status) {
            case 'Processing': return 'rgba(245, 158, 11, 0.1)';
            case 'Shipped': return 'rgba(59, 130, 246, 0.1)';
            case 'Delivered': return 'rgba(16, 185, 129, 0.1)';
            case 'Cancelled': return 'rgba(239, 68, 68, 0.1)';
            default: return 'rgba(107, 114, 128, 0.1)';
        }
    }

    editProduct(productId) {
        this.showNotification('Edit product feature coming soon!', 'warning');
    }

    deleteProduct(productId) {
        if (confirm('Are you sure you want to delete this product?')) {
            this.products = this.products.filter(p => p.id !== productId);
            this.loadAdminProducts();
            this.showNotification('Product deleted successfully!', 'success');
        }
    }

    viewOrderDetails(orderId) {
        const order = this.orders.find(o => o.id === orderId);
        if (order) {
            const itemsList = order.items ? order.items.map(item => `- ${item.name} x ${item.quantity} = ₹${(item.price * item.quantity).toFixed(2)}`).join('\n') : 'No items listed';
            alert(`Order Details:\n\nOrder ID: ${order.id}\nCustomer: ${order.customerInfo ? order.customerInfo.name : order.customer}\nEmail: ${order.customerInfo ? order.customerInfo.email : 'N/A'}\nPhone: ${order.customerInfo ? order.customerInfo.phone : 'N/A'}\nTotal: ₹${order.total.toFixed(2)}\nStatus: ${order.status}\nDate: ${order.date}\n\nItems:\n${itemsList}`);
        }
    }

    updateOrderStatus(orderId) {
        const statuses = ['Processing', 'Shipped', 'Delivered', 'Cancelled'];
        const newStatus = prompt(`Enter new status for order ${orderId}:\n\nOptions: ${statuses.join(', ')}`);

        if (newStatus && statuses.includes(newStatus)) {
            const order = this.orders.find(o => o.id === orderId);
            if (order) {
                order.status = newStatus;
                localStorage.setItem('freshmart_premium_orders', JSON.stringify(this.orders));
                this.loadAdminOrders();
                this.showNotification(`Order ${orderId} status updated to ${newStatus}!`, 'success');
            }
        } else if (newStatus) {
            this.showNotification('Invalid status. Please use one of the provided options.', 'error');
        }
    }

    showNotification(message, type = 'success') {
        const notification = document.getElementById('notification');
        const content = document.getElementById('notificationContent');

        if (notification && content) {
            content.innerHTML = `
                <div style="display: flex; align-items: center; gap: 0.75rem;">
                    <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-triangle' : type === 'warning' ? 'exclamation-circle' : 'info-circle'}" 
                       style="font-size: 1.25rem; color: var(--${type === 'info' ? 'info' : type}-color);"></i>
                    <span style="flex: 1;">${message}</span>
                </div>
            `;
            notification.className = `notification ${type}`;
            notification.classList.add('show');

            setTimeout(() => {
                notification.classList.remove('show');
            }, 5000);
        }
    }

    renderCheckoutSummary() {
        const checkoutContent = document.getElementById('checkoutContent');
        if (!checkoutContent || this.cart.length === 0) return;

        const subtotal = this.getCartSubtotal();
        const deliveryFee = subtotal > 500 ? 0 : 50;
        const total = subtotal + deliveryFee;

        const existingForm = checkoutContent.querySelector('.checkout-form');
        const existingSummary = checkoutContent.querySelector('.order-summary');

        if (existingForm && !existingSummary) {
            const summaryDiv = document.createElement('div');
            summaryDiv.className = 'order-summary';
            summaryDiv.innerHTML = `
                <div style="background: var(--bg-primary); padding: 2rem; border-radius: 1.5rem; margin-bottom: 2rem; box-shadow: var(--shadow-md); border: 2px solid var(--border-light);">
                    <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1.5rem; color: var(--primary-color); text-align: center;">
                        <i class="fas fa-receipt" style="margin-right: 0.5rem;"></i>
                        Order Summary
                    </h3>
                    <div class="summary-items" style="margin-bottom: 1.5rem;">
                        ${this.cart.map(item => {
                            const product = this.products.find(p => p.id === item.productId);
                            return `<div style="display: flex; justify-content: space-between; align-items: center; padding: 0.75rem 0; border-bottom: 1px solid var(--border-light);">
                                <div style="display: flex; align-items: center; gap: 0.75rem;">
                                    <img src="${product.image}" alt="${product.name}" style="width: 40px; height: 40px; object-fit: cover; border-radius: 0.5rem;"
                                         onerror="this.src='https://via.placeholder.com/40x40/6B7280/FFFFFF?text=${product.name.charAt(0)}'">
                                    <div>
                                        <div style="font-weight: 500;">${product.name}</div>
                                        <div style="font-size: 0.875rem; color: var(--text-secondary);">Qty: ${item.quantity}</div>
                                    </div>
                                </div>
                                <span style="font-weight: 600; color: var(--primary-color);">₹${(item.price * item.quantity).toFixed(2)}</span>
                            </div>`;
                        }).join('')}
                    </div>
                    <div class="summary-total" style="border-top: 2px solid var(--border-light); padding-top: 1rem;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.75rem;">
                            <span>Subtotal:</span>
                            <span style="font-weight: 600;">₹${subtotal.toFixed(2)}</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.75rem;">
                            <span>Delivery:</span>
                            <span style="font-weight: 600; color: ${deliveryFee === 0 ? 'var(--success-color)' : 'var(--text-primary)'};">
                                ${deliveryFee === 0 ? 'FREE' : '₹' + deliveryFee.toFixed(2)}
                            </span>
                        </div>
                        <div style="display: flex; justify-content: space-between; font-size: 1.25rem; font-weight: 700; color: var(--primary-color);">
                            <span>Total:</span>
                            <span>₹${total.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            `;
            checkoutContent.insertBefore(summaryDiv, existingForm);
        }
    }
}

// Initialize the application
const app = new FreshMartPremiumApp();

// Make app globally available for onclick handlers
window.app = app;

// Handle browser events
window.addEventListener('popstate', () => {
    // Handle browser navigation if needed
});

window.addEventListener('beforeunload', () => {
    // Save any pending data before page unload
    app.saveCart();
});

document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        app.updateCartCount();
    }
});

// Initialize smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});