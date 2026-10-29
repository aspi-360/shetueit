/**
 * ShetueIT - Modern Services Section & Website Interactions
 * Vanilla JavaScript (ES6+)
 */

// 1. Core Services Data (Exactly 11 Services as specified)
const servicesData = [
  {
    id: 1,
    title: "Accounting Software",
    icon: "calculator",
    category: "software",
    categoryLabel: "Financial Management",
    description: "Simplify financial management with accurate bookkeeping, invoicing, expense tracking, and financial reporting in one convenient system.",
    features: [
      "Automated Double-entry Bookkeeping",
      "Real-time Balance Sheet & P&L Statements",
      "VAT & Tax Calculation compliant with BD standards",
      "Multi-currency & Bank Account Reconciliation"
    ],
    highlight: "Real-time Auditing"
  },
  {
    id: 2,
    title: "Inventory Management Software",
    icon: "package",
    category: "software",
    categoryLabel: "Operations & Stock",
    description: "Track stock levels, manage purchases and suppliers, monitor product movements, and reduce inventory errors with real-time visibility.",
    features: [
      "Barcode & QR Code Scanning Support",
      "Automated Reorder Alerts & Stock Depletion Warnings",
      "Multi-warehouse & Branch Inventory Tracking",
      "Purchase Order & Supplier Lifecycle Management"
    ],
    highlight: "Zero Stockouts"
  },
  {
    id: 3,
    title: "POS Software",
    icon: "shopping-cart",
    category: "software",
    categoryLabel: "Retail & Sales",
    description: "Speed up checkout, manage sales, track transactions, and monitor business performance with an efficient point-of-sale solution.",
    features: [
      "Lightning-fast Touchscreen Checkout Interface",
      "Offline Mode with Instant Cloud Sync",
      "Thermal Receipt & Invoicing Printer Support",
      "Integrated Digital Payments (bKash, Nagad, Cards)"
    ],
    highlight: "Fast Checkout"
  },
  {
    id: 4,
    title: "ERP Solutions",
    icon: "workflow",
    category: "software",
    categoryLabel: "Enterprise Systems",
    description: "Connect essential business operations, streamline workflows, and manage resources through a centralized enterprise management system.",
    features: [
      "Unified Core Database across all Departments",
      "Custom Workflow Automation & Approvals",
      "Role-based Access & Enterprise Data Security",
      "Executive Analytics & Predictive KPI Dashboards"
    ],
    highlight: "Centralized Ops"
  },
  {
    id: 5,
    title: "HR & Payroll Software",
    icon: "users",
    category: "software",
    categoryLabel: "Human Resources",
    description: "Simplify employee records, attendance, leave management, payroll calculations, and HR administration in one organized platform.",
    features: [
      "Biometric Device & Geo-fenced Attendance Integration",
      "One-click Salary Disbursement & Payslip Generation",
      "Automated Leave Balances & Approval Hierarchy",
      "Provident Fund, Gratuity & Bonus Calculation"
    ],
    highlight: "1-Click Payroll"
  },
  {
    id: 6,
    title: "MLM Software",
    icon: "network",
    category: "software",
    categoryLabel: "Network Marketing",
    description: "Manage member registrations, network structures, commission rules, and business reports through a centralized multi-level marketing management system.",
    features: [
      "Binary, Matrix, Unilevel & Generation Plan Support",
      "Visual Tree Hierarchy & Real-time Downline Tracking",
      "Automated Commission, Royalty & Payout Processing",
      "Dedicated Member Portal with E-Wallet Integration"
    ],
    highlight: "Multi-plan Support"
  },
  {
    id: 7,
    title: "Dealer Management Software",
    icon: "truck",
    category: "software",
    categoryLabel: "Distribution & Channel",
    description: "Organize dealer networks, manage orders and distribution, monitor sales performance, and simplify communication with business partners.",
    features: [
      "Dealer Portal for Direct Bulk Ordering & Tracking",
      "Credit Limit Monitoring & Outstanding Payment Alerts",
      "Territory-based Target & Commission Tracking",
      "Logistics, Dispatch & Delivery Note Management"
    ],
    highlight: "Channel Control"
  },
  {
    id: 8,
    title: "Custom Software Development",
    icon: "code-2",
    category: "software",
    categoryLabel: "Tailored Engineering",
    description: "Turn business requirements into tailored software solutions designed around specific workflows, goals, and operational needs.",
    features: [
      "Bespoke System Architecture tailored to your workflow",
      "API Development & Legacy Software Integration",
      "High Scalability, Security Audited & Cloud-native",
      "Comprehensive Source Code Ownership & Support"
    ],
    highlight: "Tailored To You"
  },
  {
    id: 9,
    title: "Website Development",
    icon: "globe",
    category: "web",
    categoryLabel: "Digital Presence",
    description: "Build fast, responsive, and professional websites that communicate your brand, showcase services, and deliver an excellent user experience.",
    features: [
      "Ultra-responsive Layout across Mobile, Tablet & Desktop",
      "Core Web Vitals Optimized for Sub-second Load Times",
      "Interactive Modern UI/UX with Clean Typography",
      "Search Engine & Social Media Sharing Friendly"
    ],
    highlight: "High Performance"
  },
  {
    id: 10,
    title: "E-commerce Website Development",
    icon: "store",
    category: "web",
    categoryLabel: "Online Commerce",
    description: "Launch an online store with product catalogs, shopping carts, order management, and a streamlined purchasing experience.",
    features: [
      "Intuitive Product Catalog with Filter & Search",
      "Seamless Checkout & Guest Checkout Flow",
      "Integrated BD Payment Gateways (bKash, Nagad, SSLCommerz)",
      "Coupons, Discounts & Shipping Rate Calculator"
    ],
    highlight: "High Conversion"
  },
  {
    id: 11,
    title: "Membership Website Development",
    icon: "id-card",
    category: "web",
    categoryLabel: "Gated Platforms",
    description: "Create membership platforms with user registration, member profiles, protected content, and organized membership management.",
    features: [
      "Tiered Membership Plans & Recurring Subscriptions",
      "Member Dashboard with Profile & Certificate Management",
      "Restricted Content Access by User Permission Level",
      "Community Forums, Events & Member Directory"
    ],
    highlight: "Protected Access"
  }
];

// Fallback SVG Icons in case Lucide CDN is inaccessible or loading offline
const fallbackSVGIcons = {
  calculator: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>',
  package: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>',
  "shopping-cart": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>',
  workflow: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="8" x="3" y="3" rx="2"/><path d="M7 11v4a2 2 0 0 0 2 2h4"/><rect width="8" height="8" x="13" y="13" rx="2"/></svg>',
  users: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  network: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>',
  truck: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-5.28a1 1 0 0 0-.29-.7l-3.32-3.32a1 1 0 0 0-.7-.28H15v10.58"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>',
  "code-2": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>',
  globe: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>',
  store: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/><path d="M22 7a2 2 0 0 1-2 2v0a2 2 0 0 1-2-2"/><path d="M18 7a2 2 0 0 1-2 2v0a2 2 0 0 1-2-2"/><path d="M14 7a2 2 0 0 1-2 2v0a2 2 0 0 1-2-2"/><path d="M10 7a2 2 0 0 1-2 2v0a2 2 0 0 1-2-2"/><path d="M6 7a2 2 0 0 1-2 2v0a2 2 0 0 1-2-2"/></svg>',
  "id-card": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><circle cx="9" cy="12" r="2.5"/><path d="M15 10h3"/><path d="M15 14h2"/></svg>'
};

// 2. DOM Elements
let servicesGrid;
let currentFilter = 'all';

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  servicesGrid = document.getElementById('servicesGrid');
  
  if (servicesGrid) {
    renderServices('all');
    setupFilterTabs();
    setupModalEvents();
  }
  
  setupMobileNav();
  setupSmoothScroll();
  setupFormInteraction();
});

/**
 * Render the services grid
 * @param {string} filter 'all' | 'software' | 'web'
 */
function renderServices(filter = 'all') {
  if (!servicesGrid) return;
  
  currentFilter = filter;
  const filteredServices = filter === 'all' 
    ? servicesData 
    : servicesData.filter(s => s.category === filter);
  
  servicesGrid.innerHTML = '';
  
  filteredServices.forEach((service, index) => {
    const card = document.createElement('article');
    card.className = 'service-card';
    card.setAttribute('data-id', service.id);
    card.setAttribute('data-category', service.category);
    
    // Formatted sequential number (01 to 11)
    const formattedNum = String(service.id).padStart(2, '0');
    
    // Choose Lucide icon markup or fallback SVG
    const iconHTML = `<i data-lucide="${service.icon}" class="lucide-icon" aria-hidden="true"></i>`;
    
    card.innerHTML = `
      <div class="card-inner">
        <div class="card-header-row">
          <div class="icon-container" title="${service.title}">
            ${iconHTML}
          </div>
          <div class="card-meta">
            <span class="category-pill">${service.categoryLabel}</span>
            <span class="card-serial">#${formattedNum}</span>
          </div>
        </div>

        <div class="card-content">
          <h3 class="service-card-title">${service.title}</h3>
          <p class="service-card-desc">${service.description}</p>
        </div>

        <div class="card-footer">
          <button type="button" class="learn-more-btn" data-service-id="${service.id}" aria-label="Learn more about ${service.title}">
            <span class="btn-text">Learn More</span>
            <span class="btn-arrow" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </button>
        </div>
      </div>
    `;
    
    servicesGrid.appendChild(card);
  });
  
  // Initialize Lucide icons or insert fallbacks if Lucide CDN is unavailable
  refreshIcons();
}

/**
 * Initializes Lucide icons safely or inserts inline SVG fallbacks
 */
function refreshIcons() {
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    try {
      window.lucide.createIcons();
      return;
    } catch (e) {
      console.warn("Lucide auto-initialization error, using SVG fallbacks:", e);
    }
  }
  
  // Fallback: replace any unrendered <i data-lucide="..."> with inline SVGs
  const iconElements = document.querySelectorAll('i[data-lucide]');
  iconElements.forEach(el => {
    const iconName = el.getAttribute('data-lucide');
    if (fallbackSVGIcons[iconName]) {
      el.outerHTML = fallbackSVGIcons[iconName];
    }
  });
}

/**
 * Filter tabs behavior
 */
function setupFilterTabs() {
  const filterBtns = document.querySelectorAll('.filter-tab-btn');
  if (!filterBtns.length) return;
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      
      const filter = btn.getAttribute('data-filter') || 'all';
      
      // Smooth grid fade
      servicesGrid.style.opacity = '0.3';
      servicesGrid.style.transform = 'translateY(6px)';
      
      setTimeout(() => {
        renderServices(filter);
        servicesGrid.style.opacity = '1';
        servicesGrid.style.transform = 'translateY(0)';
      }, 150);
    });
  });
}

/**
 * Service Details Modal Interactions
 */
function setupModalEvents() {
  const modal = document.getElementById('serviceModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalIcon = document.getElementById('modalIcon');
  const modalFeatures = document.getElementById('modalFeatures');
  const modalTag = document.getElementById('modalTag');
  const modalInquireBtn = document.getElementById('modalInquireBtn');
  
  if (!modal) return;
  
  // Delegate click for Learn More buttons
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.learn-more-btn');
    if (btn) {
      const serviceId = parseInt(btn.getAttribute('data-service-id'), 10);
      const service = servicesData.find(s => s.id === serviceId);
      
      if (service) {
        openServiceModal(service);
      }
    }
  });
  
  function openServiceModal(service) {
    if (modalTitle) modalTitle.textContent = service.title;
    if (modalDesc) modalDesc.textContent = service.description;
    if (modalTag) modalTag.textContent = service.categoryLabel;
    
    // Set icon in modal
    if (modalIcon) {
      modalIcon.innerHTML = `<i data-lucide="${service.icon}" class="lucide-icon"></i>`;
      refreshIcons();
    }
    
    // Render key capabilities
    if (modalFeatures) {
      modalFeatures.innerHTML = service.features.map(feat => `
        <li class="modal-feature-item">
          <svg class="check-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>${feat}</span>
        </li>
      `).join('');
    }
    
    // Configure inquiry button
    if (modalInquireBtn) {
      modalInquireBtn.onclick = () => {
        closeModal();
        prefillContactForm(service.title);
      };
    }
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  
  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
  
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);
  
  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/**
 * Pre-select service in contact form and smooth scroll
 */
function prefillContactForm(serviceTitle) {
  const contactSection = document.getElementById('contact');
  const serviceSelect = document.getElementById('serviceSelect');
  
  if (serviceSelect) {
    // Select matching option or set value
    for (let i = 0; i < serviceSelect.options.length; i++) {
      if (serviceSelect.options[i].text.toLowerCase().includes(serviceTitle.toLowerCase())) {
        serviceSelect.selectedIndex = i;
        break;
      }
    }
  }
  
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
    
    // Focus effect
    if (serviceSelect) {
      setTimeout(() => {
        serviceSelect.focus();
        serviceSelect.classList.add('highlight-pulse');
        setTimeout(() => serviceSelect.classList.remove('highlight-pulse'), 1500);
      }, 600);
    }
  }
}

/**
 * Mobile Navigation Menu
 */
function setupMobileNav() {
  const toggleBtn = document.getElementById('mobileNavToggle');
  const navMenu = document.getElementById('primaryNav');
  
  if (!toggleBtn || !navMenu) return;
  
  toggleBtn.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('nav-open');
    toggleBtn.setAttribute('aria-expanded', isOpen);
    toggleBtn.classList.toggle('is-active');
  });
  
  // Close menu when clicking nav links
  const links = navMenu.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('nav-open');
      toggleBtn.classList.remove('is-active');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

/**
 * Smooth internal links scrolling
 */
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElem = document.querySelector(targetId);
      if (targetElem) {
        e.preventDefault();
        targetElem.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

/**
 * Interactive contact form feedback
 */
function setupFormInteraction() {
  const contactForm = document.getElementById('contactForm');
  const formSuccessAlert = document.getElementById('formSuccessAlert');
  
  if (!contactForm) return;
  
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Basic validation
    const nameInput = document.getElementById('clientName');
    const phoneInput = document.getElementById('clientPhone');
    
    if (nameInput && !nameInput.value.trim()) {
      alert('Please enter your name.');
      nameInput.focus();
      return;
    }
    
    if (phoneInput && !phoneInput.value.trim()) {
      alert('Please enter your phone number.');
      phoneInput.focus();
      return;
    }
    
    // Show polite success message
    if (formSuccessAlert) {
      formSuccessAlert.style.display = 'block';
      contactForm.reset();
      
      setTimeout(() => {
        formSuccessAlert.style.display = 'none';
      }, 5000);
    } else {
      alert('Thank you! ShetueIT specialist will contact you promptly.');
      contactForm.reset();
    }
  });
}
