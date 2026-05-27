/* ============================================================
   Michel-ange — JAVASCRIPT COMPLET v2
   Bien commenté pour faciliter les modifications futures
   ============================================================ */

/* ──────────────────────────────────────
   1. TRADUCTIONS FR / EN
────────────────────────────────────── */
const translations = {
    fr: {
        "nav-home":"Accueil","nav-about":"À propos","nav-exp":"Expériences",
        "nav-skills":"Compétences","nav-lab":"Lab IA","nav-portfolio":"Portfolio",
        "nav-blog":"Blog","nav-contact":"Contact",
        "hero-title":"Consultant Marketing Digital & IA",
        "hero-desc":"Je conseille et accompagne les entreprises en marketing digital pour transformer leurs besoins en solutions concrètes, automatisées et mesurables.",
        "hero-cta-main":"Démarrer un projet","hero-cta-secondary":"Voir mes projets",
        "about-section-title":"À Propos & Expertises",
        "about-title":"Consultant Marketing Digital et E-commerce",
        "about-p1":"Passionné par l'univers du digital depuis de nombreuses années, j'ai choisi ce domaine car il se trouve à la croisée parfaite entre la psychologie humaine (le commerce) et l'innovation technologique (le web et l'IA). Ce qui me fascine aujourd'hui, c'est la capacité des outils d'Intelligence Artificielle à décupler nos performances, à hyper-personnaliser les parcours d'achat e-commerce et à analyser la donnée à une vitesse fulgurante.",
        "about-p2":"Mon objectif ? Vous aider à naviguer dans ce paysage complexe pour générer de la croissance tangible. Que ce soit par l'automatisation, la stratégie ou la création pure.",
        "service-web-title":"Développement Web","service-web-desc":"Création de sites vitrines et e-commerce optimisés pour la conversion et l'UX.",
        "service-seo-title":"SEO / SEA","service-seo-desc":"Acquisition de trafic qualifié via le référencement naturel et les campagnes Ads.",
        "service-social-title":"Social Media","service-social-desc":"Stratégie d'engagement et gestion de communautés sur les réseaux sociaux.",
        "service-content-title":"Création de contenus","service-content-desc":"Copywriting et visuels percutants pour raconter l'histoire de votre marque.",
        "service-ia-title":"Stratégie IA","service-ia-desc":"Intégration d'outils IA pour automatiser vos process marketing et e-commerce.",
        "exp-section-title":"Parcours & Expériences",
        "exp-1-title":"Consultant Digital Freelance","exp-1-desc":"Je définis et déploie des stratégies digitales globales centrées sur l'acquisition, la conversion et la fidélisation. À travers la gestion de sites (WordPress & Shopify) et le pilotage de campagnes Google et Meta Ads, j'optimise en continu les performances publicitaires (ROAS, CPC). Mon approche repose sur l'analyse précise des KPI via GA4 et une veille concurrentielle active pour identifier et activer de nouveaux leviers de croissance.",
        "exp-2-title":"Chargé d'e-merchandising","exp-2-desc":"Responsable du pilotage et de l'optimisation des ventes en ligne sur le marché français pour les secteurs de la mode, du sport et de la beauté. Je gère l'animation commerciale de A à Z — de la mise en valeur visuelle et technique des produits à la fluidité du parcours client — tout en analysant les données pour maximiser les conversions. En collaboration avec les équipes internationales, je pilote le planning et les prix pour garantir la cohérence des marques et l'atteinte des objectifs business.",
        "exp-2b-title":"Chargé de marketing digital","exp-2b-desc":"Responsable de la gestion et du développement des sites WordPress, je crée des campagnes marketing multicanales axées sur la performance. Je pilote les budgets publicitaires (SEA/PPC) et l'optimisation SEO (SEMrush, Ahrefs) pour booster la visibilité de l'entreprise. En m'appuyant sur l'analyse des KPI (GA4) et la gestion de la e-réputation, je garantis une croissance continue du trafic et des conversions.",
        "exp-3-title":"Diplômes & Certifications","exp-3-desc":"• Master 2 Stratégie Digitale & E-commerce (École de Commerce)<br>• Bachelor Webmarketing<br>• BTS CGO<br>• Certification Google Analytics & Google Ads<br>• Formation intensive : \"Prompt Engineering et IA appliqués au Marketing\"",

        /* COMPÉTENCES */
        "skills-section-title":"Compétences",
        "skills-subtitle":"Un spectre complet de savoir-faire au service de votre croissance digitale — de la stratégie à l'exécution.",
        "skills-tools-label":"Outils maîtrisés",
        "skills-tab-acq":"Acquisition","skills-tab-eco":"E-commerce","skills-tab-ia":"IA & Data","skills-tab-crea":"Création","skills-tab-strat":"Stratégie",
        "skill-gads-title":"Google Ads","skill-gads-desc":"Search, Shopping, Performance Max — gestion de budgets jusqu'à 50K€/mois avec optimisation ROAS continue.",
        "skill-meta-title":"Meta Ads","skill-meta-desc":"Campagnes Facebook & Instagram : acquisition, retargeting, lookalike audiences et A/B testing créatifs.",
        "skill-seo-title":"SEO Technique","skill-seo-desc":"Audit technique, stratégie de maillage, Core Web Vitals, structured data et cocons sémantiques.",
        "skill-email-title":"Email Marketing","skill-email-desc":"Segmentation, automation Klaviyo/Brevo, A/B test objet et optimisation du taux d'ouverture & de clic.",
        "skill-linkedin-title":"LinkedIn Ads","skill-linkedin-desc":"Lead gen B2B, Sponsored Content et InMail campaigns pour des audiences professionnelles ciblées.",
        "skill-analytics-title":"Analytics & Tracking","skill-analytics-desc":"GA4, GTM, Looker Studio — dashboards de performance et suivi des KPIs d'acquisition.",
        "skill-shopify-title":"Shopify","skill-shopify-desc":"Création et refonte de boutiques, personnalisation Liquid, apps clés, optimisation du tunnel d'achat.",
        "skill-woo-title":"WooCommerce","skill-woo-desc":"Configuration avancée, extensions de performance, checkout optimisé et intégrations de paiement.",
        "skill-cro-title":"CRO & A/B Testing","skill-cro-desc":"Optimisation du taux de conversion : heatmaps, tests multivariés, UX friction audit et quick wins.",
        "skill-flux-title":"Gestion Produit & Flux","skill-flux-desc":"Optimisation des fiches produits, gestion des flux Google Merchant, Channable et marketplaces.",
        "skill-autoeco-title":"Marketing Automation","skill-autoeco-desc":"Scénarios post-achat, relance de paniers abandonnés, cross-sell/up-sell automatisés via Klaviyo.",
        "skill-ux-title":"UX / Expérience Client","skill-ux-desc":"Parcours d'achat frictionless, social proof, avis clients et personnalisation dynamique du contenu.",
        "skill-prompt-title":"Prompt Engineering","skill-prompt-desc":"Conception de prompts avancés pour GPT-4o, Claude, Gemini — appliqués à la production de contenu et à l'analyse.",
        "skill-workflow-title":"Workflows IA (n8n / Zapier)","skill-workflow-desc":"Automatisation de pipelines marketing complets : génération de contenu, enrichissement CRM, reporting auto.",
        "skill-data-title":"Data Analyse","skill-data-desc":"Extraction et visualisation de données (BigQuery, Looker Studio), segmentation client et analyse prédictive.",
        "skill-chatbot-title":"Chatbots RAG","skill-chatbot-desc":"Déploiement d'assistants virtuels connectés à une base de connaissances (LangChain, Flowise, OpenAI).",
        "skill-imgia-title":"IA Générative (Image)","skill-imgia-desc":"Midjourney, DALL·E, Stable Diffusion — visuels produits, bannières pub et UGC synthétiques.",
        "skill-python-title":"Python Marketing","skill-python-desc":"Scripts d'automatisation, scraping de données, analyse de SERP et reporting personnalisé.",
        "skill-copy-title":"Copywriting","skill-copy-desc":"Rédaction persuasive : landing pages, fiches produits, ads copy, newsletters et scripts vidéo orientés conversion.",
        "skill-figma-title":"UI / Figma","skill-figma-desc":"Maquettage de pages et d'interfaces, design de bannières publicitaires et assets réseaux sociaux.",
        "skill-social-title":"Social Media Content","skill-social-desc":"Calendrier éditorial, formats courts (Reels, TikTok, Shorts), storytelling de marque et UGC.",
        "skill-video-title":"Video Marketing","skill-video-desc":"Stratégie YouTube, montage avec IA (Opus Clip, CapCut), sous-titrages automatisés et optimisation thumbnail.",
        "skill-web-title":"Intégration Web","skill-web-desc":"HTML/CSS/JS, intégration de templates, landing pages Webflow et personnalisation de thèmes Shopify/WP.",
        "skill-brand-title":"Brand Content","skill-brand-desc":"Charte éditoriale, identité de ton, livres blancs, études de cas et contenus thought leadership.",
        "skill-strat-title":"Stratégie Digitale","skill-strat-desc":"Audit 360°, définition des objectifs SMART, plan d'action multicanal et priorisation des leviers de croissance.",
        "skill-growth-title":"Growth Hacking","skill-growth-desc":"Identification de boucles de croissance, tests rapides (AARRR), optimisation du funnel et activation des early adopters.",
        "skill-coach-title":"Conseil & Formation","skill-coach-desc":"Formations équipes marketing, ateliers IA, audits de maturité digitale et recommandations stratégiques.",
        "skill-pm-title":"Gestion de projet","skill-pm-desc":"Pilotage en méthode agile (Notion, Trello, Linear), coordination de prestataires et respect des jalons.",
        "skill-bench-title":"Analyse Concurrentielle","skill-bench-desc":"Benchmarks sectoriels, veille concurrentielle outillée (SEMrush, SimilarWeb) et positionnement différenciant.",
        "skill-kpi-title":"KPIs & Reporting","skill-kpi-desc":"Construction de tableaux de bord sur-mesure, suivi ROI, communication des résultats aux décideurs.",

        "lab-section-title":"Lab IA : Mes Expérimentations",
        "lab-subtitle":"Une veille technologique ne vaut que si elle est mise en pratique. Découvrez mes derniers workflows et tests d'outils IA pour optimiser le quotidien des e-commerçants.",
        "lab-1-title":"Rédaction SEO auto avec GPT-4o","lab-1-desc":"Workflow Zapier couplant Google Sheets, l'API OpenAI et WordPress pour générer des cocons sémantiques complets. Gain : 15h par semaine.",
        "lab-2-title":"Packshots via Midjourney","lab-2-desc":"Détourage de photos amateurs et génération de décors studio ultra-réalistes avec IA générative pour des fiches produits optimisées sans studio physique.",
        "lab-3-title":"Chatbot RAG pour E-commerce","lab-3-desc":"Assistant virtuel entraîné sur la base de connaissances d'une boutique Shopify. Taux de résolution : 65%.",
        "portfolio-section-title":"Portfolio de Projets","portfolio-1":"Refonte UX E-commerce","portfolio-2":"Campagne d'Acquisition IA","portfolio-3":"Stratégie Social Media B2B",
        "blog-section-title":"Derniers Articles",
        "blog-1-title":"L'IA au service du SEO en 2026","blog-1-desc":"Découvrez comment les LLM modifient la façon dont nous créons du contenu optimisé pour les moteurs de recherche sans perdre l'authenticité.",
        "blog-2-title":"Ma méthodologie Freelance","blog-2-desc":"De la prise de brief à la livraison finale : plongée dans mon processus de travail transparent et agile pour garantir la réussite de vos projets web.",
        "blog-3-title":"Étude de cas : +150% de conversion","blog-3-desc":"Analyse détaillée d'une refonte e-commerce couplée à une stratégie de reciblage publicitaire performante pour une marque de prêt-à-porter.",
        "blog-read-more":"Lire l'article →",
        "contact-section-title":"Discutons de votre projet","contact-title":"Prêt à innover ?",
        "contact-p1":"Que vous soyez une jeune startup cherchant à se lancer, une entreprise souhaitant intégrer l'Intelligence Artificielle dans ses processus de vente, ou un e-commerçant voulant exploser son ROAS, je suis à votre écoute.",
        "contact-p2":"Remplissez ce formulaire pour me parler de vos objectifs. Nous planifierons un appel stratégique de 30 minutes, sans engagement, pour voir comment mes compétences peuvent servir votre vision.",
        "form-name-label":"Nom complet","form-email-label":"Adresse email","form-subject-label":"Sujet","form-message-label":"Message",
        "form-submit":"Envoyer le message","form-success-msg":"✅ Message envoyé ! Je vous réponds sous 24h.","form-error-msg":"❌ Une erreur est survenue. Veuillez réessayer.",
        "footer-rights":"Tous droits réservés."
    },

    en: {
        "nav-home":"Home","nav-about":"About","nav-exp":"Experience",
        "nav-skills":"Skills","nav-lab":"AI Lab","nav-portfolio":"Portfolio",
        "nav-blog":"Blog","nav-contact":"Contact",
        "hero-title":"Digital Marketing & AI Consultant",
        "hero-desc":"I advise and support companies in digital marketing to transform their needs into concrete, automated, and measurable solutions.",
        "hero-cta-main":"Start a project","hero-cta-secondary":"View my work",
        "about-section-title":"About & Expertise",
        "about-title":"Digital Marketing & E-commerce Consultant",
        "about-p1":"Passionate about the digital world for many years, I chose this field because it sits at the perfect crossroads between human psychology (commerce) and technological innovation (web & AI). What fascinates me today is the ability of AI tools to multiply our performance, hyper-personalise e-commerce buying journeys, and analyse data at lightning speed.",
        "about-p2":"My goal? To help you navigate this complex landscape to generate tangible growth — through automation, strategy, or pure creation.",
        "service-web-title":"Web Development","service-web-desc":"Building showcase and e-commerce sites optimised for conversion and UX.",
        "service-seo-title":"SEO / SEA","service-seo-desc":"Qualified traffic acquisition through organic SEO and paid Ads campaigns.",
        "service-social-title":"Social Media","service-social-desc":"Engagement strategy and community management on social networks.",
        "service-content-title":"Content Creation","service-content-desc":"Compelling copy and visuals to tell your brand's story.",
        "service-ia-title":"AI Strategy","service-ia-desc":"Integrating AI tools to automate your marketing and e-commerce processes.",
        "exp-section-title":"Background & Experience",
        "exp-1-title":"Freelance Digital Consultant","exp-1-desc":"I define and deploy comprehensive digital strategies focused on acquisition, conversion, and retention. Through website management (WordPress & Shopify) and the management of Google and Meta Ads campaigns, I continuously optimise advertising performance (ROAS, CPC). My approach is based on precise KPI analysis via GA4 and active competitive monitoring to identify and activate new growth levers.",
        "exp-2-title":"E-merchandising Manager","exp-2-desc":"Responsible for driving and optimising online sales on the French market across fashion, sport, and beauty sectors. I manage the full commercial cycle — from visual and technical product presentation to smooth customer journeys — while analysing data to maximise conversions. Collaborating with international teams, I manage planning and pricing to ensure brand consistency and the achievement of business objectives.",
        "exp-2b-title":"Digital Marketing Manager","exp-2b-desc":"Responsible for managing and developing WordPress sites, I create performance-driven multichannel marketing campaigns. I oversee advertising budgets (SEA/PPC) and SEO optimisation (SEMrush, Ahrefs) to boost company visibility. Leveraging KPI analysis (GA4) and e-reputation management, I ensure continuous growth in traffic and conversions.",
        "exp-3-title":"Degrees & Certifications","exp-3-desc":"• Master's in Digital Marketing & E-business<br>• Bachelor in Web Marketing<br>• BTS CGO<br>• Google Analytics & Google Ads Certification<br>• Intensive course: \"Prompt Engineering and AI for Marketing\"",

        /* SKILLS */
        "skills-section-title":"Skills",
        "skills-subtitle":"A complete spectrum of expertise to drive your digital growth — from strategy to execution.",
        "skills-tools-label":"Tools & platforms",
        "skills-tab-acq":"Acquisition","skills-tab-eco":"E-commerce","skills-tab-ia":"AI & Data","skills-tab-crea":"Creation","skills-tab-strat":"Strategy",
        "skill-gads-title":"Google Ads","skill-gads-desc":"Search, Shopping, Performance Max — managing budgets up to €50K/month with continuous ROAS optimisation.",
        "skill-meta-title":"Meta Ads","skill-meta-desc":"Facebook & Instagram campaigns: acquisition, retargeting, lookalike audiences, and creative A/B testing.",
        "skill-seo-title":"Technical SEO","skill-seo-desc":"Technical audits, internal linking strategy, Core Web Vitals, structured data, and semantic clusters.",
        "skill-email-title":"Email Marketing","skill-email-desc":"Segmentation, Klaviyo/Brevo automation, subject A/B testing, and open & click-rate optimisation.",
        "skill-linkedin-title":"LinkedIn Ads","skill-linkedin-desc":"B2B lead gen, Sponsored Content, and InMail campaigns targeting professional audiences.",
        "skill-analytics-title":"Analytics & Tracking","skill-analytics-desc":"GA4, GTM, Looker Studio — building performance dashboards and tracking acquisition KPIs.",
        "skill-shopify-title":"Shopify","skill-shopify-desc":"Store creation and redesign, Liquid customisation, key apps, checkout funnel optimisation.",
        "skill-woo-title":"WooCommerce","skill-woo-desc":"Advanced configuration, performance extensions, optimised checkout, and payment integrations.",
        "skill-cro-title":"CRO & A/B Testing","skill-cro-desc":"Conversion rate optimisation: heatmaps, multivariate tests, UX friction audit, and quick wins.",
        "skill-flux-title":"Product & Feed Management","skill-flux-desc":"Product page optimisation, Google Merchant feed management, Channable, and marketplace listings.",
        "skill-autoeco-title":"Marketing Automation","skill-autoeco-desc":"Post-purchase flows, abandoned cart recovery, automated cross-sell/up-sell via Klaviyo.",
        "skill-ux-title":"UX / Customer Experience","skill-ux-desc":"Frictionless buying journeys, social proof, customer reviews, and dynamic content personalisation.",
        "skill-prompt-title":"Prompt Engineering","skill-prompt-desc":"Advanced prompt design for GPT-4o, Claude, Gemini — applied to content production and analysis.",
        "skill-workflow-title":"AI Workflows (n8n / Zapier)","skill-workflow-desc":"Full marketing pipeline automation: content generation, CRM enrichment, automated reporting.",
        "skill-data-title":"Data Analysis","skill-data-desc":"Data extraction and visualisation (BigQuery, Looker Studio), customer segmentation, predictive analytics.",
        "skill-chatbot-title":"RAG Chatbots","skill-chatbot-desc":"Deploying virtual assistants connected to a knowledge base (LangChain, Flowise, OpenAI).",
        "skill-imgia-title":"Generative AI (Image)","skill-imgia-desc":"Midjourney, DALL·E, Stable Diffusion — product visuals, ad banners, and synthetic UGC.",
        "skill-python-title":"Python for Marketing","skill-python-desc":"Automation scripts, data scraping, SERP analysis, and custom reporting.",
        "skill-copy-title":"Copywriting","skill-copy-desc":"Persuasive writing: landing pages, product sheets, ad copy, newsletters, and conversion-focused video scripts.",
        "skill-figma-title":"UI / Figma","skill-figma-desc":"Page and interface wireframing, ad banner design, and social media assets.",
        "skill-social-title":"Social Media Content","skill-social-desc":"Editorial calendar, short formats (Reels, TikTok, Shorts), brand storytelling, and UGC.",
        "skill-video-title":"Video Marketing","skill-video-desc":"YouTube strategy, AI editing (Opus Clip, CapCut), automated subtitles, thumbnail optimisation.",
        "skill-web-title":"Web Integration","skill-web-desc":"HTML/CSS/JS, template integration, Webflow landing pages, and Shopify/WP theme customisation.",
        "skill-brand-title":"Brand Content","skill-brand-desc":"Editorial guidelines, tone of voice, white papers, case studies, and thought leadership content.",
        "skill-strat-title":"Digital Strategy","skill-strat-desc":"360° audit, SMART objective setting, multichannel action plan, and growth lever prioritisation.",
        "skill-growth-title":"Growth Hacking","skill-growth-desc":"Identifying growth loops, rapid experimentation (AARRR), funnel optimisation, and early adopter activation.",
        "skill-coach-title":"Consulting & Training","skill-coach-desc":"Marketing team training, AI workshops, digital maturity audits, and strategic recommendations.",
        "skill-pm-title":"Project Management","skill-pm-desc":"Agile methodology (Notion, Trello, Linear), vendor coordination, and milestone delivery.",
        "skill-bench-title":"Competitive Analysis","skill-bench-desc":"Sector benchmarks, competitive intelligence (SEMrush, SimilarWeb), and differentiated positioning.",
        "skill-kpi-title":"KPIs & Reporting","skill-kpi-desc":"Custom dashboard creation, ROI tracking, and communicating results to decision-makers.",

        "lab-section-title":"AI Lab: My Experiments",
        "lab-subtitle":"Technology watch is only valuable when put into practice. Discover my latest AI workflows and tool tests to optimise daily e-commerce operations.",
        "lab-1-title":"Auto SEO writing with GPT-4o","lab-1-desc":"Zapier workflow connecting Google Sheets, the OpenAI API, and WordPress to generate full semantic clusters. Time saved: 15h/week.",
        "lab-2-title":"Product shots via Midjourney","lab-2-desc":"Background removal on amateur photos and ultra-realistic studio scene generation with generative AI — no physical studio needed.",
        "lab-3-title":"RAG Chatbot for E-commerce","lab-3-desc":"Virtual assistant trained on a Shopify store's knowledge base. Resolution rate: 65%.",
        "portfolio-section-title":"Project Portfolio","portfolio-1":"E-commerce UX Redesign","portfolio-2":"AI Acquisition Campaign","portfolio-3":"B2B Social Media Strategy",
        "blog-section-title":"Latest Articles",
        "blog-1-title":"AI powering SEO in 2026","blog-1-desc":"Discover how LLMs are changing the way we create search-engine-optimised content without losing authenticity.",
        "blog-2-title":"My Freelance Methodology","blog-2-desc":"From brief to delivery: a deep dive into my transparent, agile workflow to ensure the success of your web projects.",
        "blog-3-title":"Case study: +150% conversion","blog-3-desc":"Detailed analysis of an e-commerce redesign combined with a high-performance retargeting strategy for a fashion brand.",
        "blog-read-more":"Read article →",
        "contact-section-title":"Let's talk about your project","contact-title":"Ready to innovate?",
        "contact-p1":"Whether you're a young startup looking to launch, a company wanting to integrate AI into your sales processes, or an e-merchant looking to boost your ROAS — I'm here to listen.",
        "contact-p2":"Fill out this form to tell me about your goals. We'll schedule a 30-minute strategic call, no commitment, to explore how my skills can serve your vision.",
        "form-name-label":"Full name","form-email-label":"Email address","form-subject-label":"Subject","form-message-label":"Message",
        "form-submit":"Send message","form-success-msg":"✅ Message sent! I'll reply within 24h.","form-error-msg":"❌ Something went wrong. Please try again.",
        "footer-rights":"All rights reserved."
    }
};

/* ──────────────────────────────────────
   2. GESTION DE LA LANGUE
────────────────────────────────────── */
let currentLang = localStorage.getItem('lang') || 'fr';

function updateLanguage() {
    const lang = translations[currentLang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (lang[key] !== undefined) el.innerHTML = lang[key].replace(/\n/g, '<br>');
    });
    document.getElementById('current-lang').textContent = currentLang.toUpperCase();
    document.documentElement.lang = currentLang;
    localStorage.setItem('lang', currentLang);
}

document.getElementById('lang-btn').addEventListener('click', () => {
    currentLang = currentLang === 'fr' ? 'en' : 'fr';
    updateLanguage();
});

updateLanguage();

/* ──────────────────────────────────────
   3. MENU HAMBURGER (MOBILE)
────────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
    });
});

/* ──────────────────────────────────────
   4. NAVBAR — SCROLL & LIEN ACTIF
────────────────────────────────────── */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
    highlightActiveNavLink();
}, { passive: true });

function highlightActiveNavLink() {
    const sections   = document.querySelectorAll('main section[id]');
    const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
    let currentId = '';
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 100) currentId = s.id; });
    navAnchors.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${currentId}`));
}

/* ──────────────────────────────────────
   5. PARTICULES CANVAS (HERO)
────────────────────────────────────── */
(function initParticles() {
    const canvas = document.getElementById('particles-js');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [], animId;

    function resize() { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; }

    class Particle {
        constructor() { this.reset(); }
        reset() {
            this.x = Math.random() * canvas.width; this.y = Math.random() * canvas.height;
            this.size = Math.random() * 1.8 + 0.4;
            this.speedX = (Math.random() - 0.5) * 0.4; this.speedY = (Math.random() - 0.5) * 0.4;
            this.opacity = Math.random() * 0.5 + 0.1;
        }
        update() {
            this.x += this.speedX; this.y += this.speedY;
            if (this.x < 0 || this.x > canvas.width)  this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height)  this.speedY *= -1;
        }
        draw() {
            ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0,240,255,${this.opacity})`; ctx.fill();
        }
    }

    function connections() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y;
                const d = Math.sqrt(dx*dx + dy*dy);
                if (d < 120) {
                    ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(0,240,255,${(1-d/120)*0.15})`; ctx.lineWidth = 0.8; ctx.stroke();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => { p.update(); p.draw(); }); connections();
        animId = requestAnimationFrame(animate);
    }

    function init() {
        resize(); particles = Array.from({length:70}, () => new Particle());
        cancelAnimationFrame(animId); animate();
    }

    window.addEventListener('resize', () => {
        resize();
        particles.forEach(p => { if(p.x>canvas.width) p.x=Math.random()*canvas.width; if(p.y>canvas.height) p.y=Math.random()*canvas.height; });
    }, {passive:true});

    init();
})();

/* ──────────────────────────────────────
   6. FORMULAIRE DE CONTACT
────────────────────────────────────── */
(function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    const submitBtn=document.getElementById('submit-btn'), btnText=document.getElementById('btn-text'),
          btnLoader=document.getElementById('btn-loader'), successMsg=document.getElementById('form-success'),
          errorMsg=document.getElementById('form-error-msg');

    function validateField(input, errorId, ok, msg) {
        const el = document.getElementById(errorId);
        input.classList.toggle('invalid', !ok);
        if (el) el.textContent = ok ? '' : msg;
        return ok;
    }

    function setLoading(v) {
        submitBtn.disabled = v;
        btnText.classList.toggle('hidden', v);
        btnLoader.classList.toggle('hidden', !v);
    }

    function simulate() { return new Promise(r => setTimeout(r, 1200)); }

    form.addEventListener('submit', async e => {
        e.preventDefault();
        successMsg.classList.add('hidden'); errorMsg.classList.add('hidden');
        const n=document.getElementById('name'), em=document.getElementById('email'), m=document.getElementById('message');
        const fr = currentLang === 'fr';
        const ok = [
            validateField(n,  'name-error',    n.value.trim().length >= 2,  fr ? 'Veuillez entrer votre nom.' : 'Please enter your name.'),
            validateField(em, 'email-error',   /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em.value.trim()), fr ? 'Email invalide.' : 'Invalid email.'),
            validateField(m,  'message-error', m.value.trim().length >= 10, fr ? 'Message trop court.' : 'Message too short.')
        ].every(Boolean);
        if (!ok) return;
        setLoading(true);
        try { await simulate(); form.reset(); successMsg.classList.remove('hidden'); successMsg.scrollIntoView({behavior:'smooth',block:'nearest'});
        } catch { errorMsg.classList.remove('hidden');
        } finally { setLoading(false); }
    });

    form.querySelectorAll('input, textarea').forEach(f => {
        f.addEventListener('input', () => { f.classList.remove('invalid'); const e=document.getElementById(`${f.id}-error`); if(e) e.textContent=''; });
    });
})();

/* ──────────────────────────────────────
   7. ONGLETS COMPÉTENCES
────────────────────────────────────── */
(function initSkillsTabs() {
    const tabs = document.querySelectorAll('.skills-tab'), panels = document.querySelectorAll('.skills-panel');
    if (!tabs.length) return;

    function activateTab(tab) {
        const target = tab.getAttribute('data-tab');
        tabs.forEach(t => { t.classList.toggle('active', t===tab); t.setAttribute('aria-selected', t===tab); });
        panels.forEach(p => p.classList.toggle('active', p.getAttribute('data-panel') === target));
        triggerBarsInPanel(document.querySelector(`.skills-panel[data-panel="${target}"]`));
    }

    tabs.forEach(t => t.addEventListener('click', () => activateTab(t)));
})();

/* ──────────────────────────────────────
   8. ANIMATION BARRES DE PROGRESSION
────────────────────────────────────── */
function triggerBarsInPanel(panel) {
    if (!panel) return;
    panel.querySelectorAll('.skill-fill').forEach(fill => {
        const pct = getComputedStyle(fill).getPropertyValue('--pct').trim();
        if (pct) {
            fill.style.width = '0%';
            requestAnimationFrame(() => requestAnimationFrame(() => { fill.style.width = pct; }));
        }
    });
}

(function initSkillBars() {
    const section = document.getElementById('competences');
    if (!section) return;
    let done = false;
    new IntersectionObserver(([e]) => {
        if (e.isIntersecting && !done) {
            done = true;
            triggerBarsInPanel(section.querySelector('.skills-panel.active'));
        }
    }, {threshold:0.15}).observe(section);
})();

/* ──────────────────────────────────────
   7. PORTFOLIO CAROUSEL — défilement auto + filtres
   ──────────────────────────────────────
   Personnalisation rapide :
   • SLIDE_W        : largeur d'une card en px (doit coller au CSS)
   • GAP            : gap entre cards en px
   • AUTO_INTERVAL  : vitesse du défilement auto en ms
────────────────────────────────────── */
(function initPortfolioCarousel() {
    const track     = document.getElementById('portfolio-track');
    const dotsWrap  = document.getElementById('carousel-dots');
    const prevBtn   = document.getElementById('carousel-prev');
    const nextBtn   = document.getElementById('carousel-next');
    const pauseBtn  = document.getElementById('carousel-pause');
    const pauseIcon = document.getElementById('pause-icon');
    const filters   = document.querySelectorAll('.pf-filter');

    if (!track) return;

    const SLIDE_W       = 340;   // px — doit correspondre au CSS flex-basis
    const GAP           = 22;    // px — gap entre slides
    const AUTO_INTERVAL = 3200;  // ms — vitesse de défilement
    const VISIBLE       = 3;     // nb de slides visibles simultanément (desktop)

    let slides       = Array.from(track.querySelectorAll('.portfolio-slide'));
    let currentIndex = 0;
    let autoTimer    = null;
    let isPlaying    = true;
    let activeFilter = 'all';

    /* ─── Génération des dots ─── */
    function buildDots(count) {
        dotsWrap.innerHTML = '';
        for (let i = 0; i < count; i++) {
            const d = document.createElement('button');
            d.className = 'carousel-dot' + (i === 0 ? ' active' : '');
            d.setAttribute('aria-label', `Projet ${i + 1}`);
            d.setAttribute('role', 'tab');
            d.addEventListener('click', () => goTo(i));
            dotsWrap.appendChild(d);
        }
    }

    /* ─── Slides visibles selon le filtre ─── */
    function getVisible() {
        return slides.filter(s =>
            activeFilter === 'all' || s.dataset.cat === activeFilter
        );
    }

    /* ─── Appliquer filtre ─── */
    function applyFilter(filter) {
        activeFilter = filter;
        currentIndex = 0;
        const visible = getVisible();

        slides.forEach(s => {
            if (visible.includes(s)) {
                s.classList.remove('hidden-slide');
            } else {
                s.classList.add('hidden-slide');
            }
        });

        buildDots(Math.max(1, visible.length - VISIBLE + 1));
        renderPosition();
    }

    /* ─── Calcul de l'offset ─── */
    function renderPosition() {
        const step = SLIDE_W + GAP;
        track.style.transform = `translateX(-${currentIndex * step}px)`;

        /* Mettre à jour les dots */
        const dots = dotsWrap.querySelectorAll('.carousel-dot');
        dots.forEach((d, i) => d.classList.toggle('active', i === currentIndex));
    }

    /* ─── Aller à un index ─── */
    function goTo(index) {
        const visible = getVisible();
        const maxIndex = Math.max(0, visible.length - VISIBLE);
        currentIndex = Math.max(0, Math.min(index, maxIndex));
        renderPosition();
    }

    /* ─── Slide suivante ─── */
    function next() {
        const visible = getVisible();
        const maxIndex = Math.max(0, visible.length - VISIBLE);
        currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
        renderPosition();
    }

    /* ─── Slide précédente ─── */
    function prev() {
        const visible = getVisible();
        const maxIndex = Math.max(0, visible.length - VISIBLE);
        currentIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;
        renderPosition();
    }

    /* ─── Auto-play ─── */
    function startAuto() {
        stopAuto();
        autoTimer = setInterval(next, AUTO_INTERVAL);
    }

    function stopAuto() {
        clearInterval(autoTimer);
    }

    /* ─── Pause / Resume ─── */
    function togglePlay() {
        isPlaying = !isPlaying;
        pauseIcon.className = isPlaying ? 'fa-solid fa-pause' : 'fa-solid fa-play';
        isPlaying ? startAuto() : stopAuto();
    }

    /* ─── Swipe tactile ─── */
    let touchStartX = 0;
    track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', e => {
        const diff = touchStartX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    }, { passive: true });

    /* ─── Pause au survol ─── */
    track.closest('.portfolio-carousel-wrapper').addEventListener('mouseenter', () => isPlaying && stopAuto());
    track.closest('.portfolio-carousel-wrapper').addEventListener('mouseleave', () => isPlaying && startAuto());

    /* ─── Événements boutons ─── */
    prevBtn && prevBtn.addEventListener('click', () => { prev(); });
    nextBtn && nextBtn.addEventListener('click', () => { next(); });
    pauseBtn && pauseBtn.addEventListener('click', togglePlay);

    /* ─── Filtres ─── */
    filters.forEach(btn => {
        btn.addEventListener('click', () => {
            filters.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected','false'); });
            btn.classList.add('active');
            btn.setAttribute('aria-selected','true');
            applyFilter(btn.dataset.filter);
            isPlaying && startAuto();
        });
    });

    /* ─── Init ─── */
    applyFilter('all');
    startAuto();
})();
