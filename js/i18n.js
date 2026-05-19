/* Simple FR/EN i18n for portfolio - Yassine Ben Abbes */
(function () {
    const translations = {
        // Menu
        'menu.home': { fr: 'Accueil', en: 'Home' },
        'menu.about': { fr: 'À propos', en: 'About Me' },
        'menu.resume': { fr: 'CV', en: 'Resume' },
        'menu.portfolio': { fr: 'Portfolio', en: 'Portfolio' },
        'menu.blog': { fr: 'Blog', en: 'Blog' },
        'menu.contact': { fr: 'Contact', en: 'Contact' },
        'menu.contactBtn': { fr: 'Me contacter', en: 'Contact Me' },

        // Header
        'header.role': { fr: 'Tech Lead & AI Engineer', en: 'Tech Lead & AI Engineer' },
        'header.copyright': { fr: '© 2026 Tous droits réservés. Yassine Ben Abbes.', en: '© 2026 All rights reserved. Yassine Ben Abbes.' },

        // Home carousel
        'home.role1': { fr: 'AI Engineer', en: 'AI Engineer' },
        'home.role2': { fr: 'Tech Lead & Architecte Logiciel', en: 'Tech Lead & Software Architect' },
        'home.role3': { fr: 'LLM Agents & Workflow Orchestration', en: 'LLM Agents & Workflow Orchestration' },

        // About
        'about.title': { fr: 'À <span>propos</span>', en: 'About <span>Me</span>' },
        'about.bio': {
            fr: "Tech Lead et AI Engineer avec plus de 5 ans d'expérience dans la conception de plateformes IA en production. Je suis spécialisé dans l'<strong>orchestration d'agents LLM</strong>, les <strong>intégrations MCP</strong>, les <strong>pipelines RAG</strong> et les architectures de <strong>tool calling</strong>. Solide expertise Python (automation, intégrations, data extraction, glue code). Je transforme des process métiers complexes en workflows IA structurés, observables et fiables en production.",
            en: "Tech Lead and AI Engineer with 5+ years of experience designing production-grade AI platforms. I specialize in <strong>LLM agent orchestration</strong>, <strong>MCP integrations</strong>, <strong>RAG pipelines</strong> and <strong>tool calling</strong> architectures. Strong Python background — automation, integrations, data extraction, glue code. I turn complex business processes into structured, observable AI workflows running in production."
        },
        'about.info.residence': { fr: 'Lieu', en: 'Residence' },
        'about.info.residenceValue': { fr: 'France', en: 'France' },
        'about.info.email': { fr: 'Email', en: 'Email' },
        'about.info.phone': { fr: 'Téléphone', en: 'Phone' },

        // What I Do
        'whatido.title': { fr: 'Ce que <span>je fais</span>', en: 'What <span>I Do</span>' },
        'whatido.fullstack.title': { fr: 'Développement Full-Stack', en: 'Full-Stack Development' },
        'whatido.fullstack.desc': {
            fr: "Je conçois des applications web de bout en bout, en combinant des interfaces utilisateur intuitives avec une architecture backend robuste et scalable. De la modélisation des données au déploiement, je livre une solution complète adaptée aux besoins métier.",
            en: "I specialize in creating end-to-end web applications, seamlessly combining the front-end user interface with a robust and scalable back-end architecture. From designing intuitive user experiences to implementing efficient database management, I ensure a comprehensive solution."
        },
        'whatido.api.title': { fr: 'APIs & Intégrations', en: 'API Development and Integration' },
        'whatido.api.desc': {
            fr: "Je construis des APIs robustes et les intègre avec divers systèmes (services tiers, bases de données, cloud). Sécurité, documentation et performance sont au cœur de ma démarche pour garantir des échanges de données fiables et scalables.",
            en: "I build robust APIs and integrate them seamlessly with various systems. By designing and implementing APIs, I enable efficient data exchange, integration with third-party services, and scalable applications. I focus on security, documentation, and performance."
        },
        'whatido.ai.title': { fr: 'AI Engineering & LLM Agents', en: 'AI Engineering & LLM Agents' },
        'whatido.ai.desc': {
            fr: "Je conçois des agents LLM en production : orchestration multi-étapes, intégrations MCP, tool calling, pipelines RAG et structuration de connaissances. Architecture microservices avec Kafka pour le traitement asynchrone. Python-first pour l'automation, les intégrations et la glue code.",
            en: "I build production-grade LLM agents: multi-step orchestration, MCP integrations, tool calling, RAG pipelines and knowledge structuring. Microservices architecture with Kafka for asynchronous processing. Python-first for automation, integrations and glue code."
        },
        'whatido.devops.title': { fr: 'DevOps & Cloud', en: 'DevOps & Cloud' },
        'whatido.devops.desc': {
            fr: "Je mets en place et maintiens des pipelines CI/CD (GitHub Actions, Docker) avec déploiement sur AWS / Azure. Monitoring, observabilité et stabilisation des releases en production font partie intégrante de mon travail.",
            en: "I set up and maintain CI/CD pipelines (GitHub Actions, Docker) with deployment on AWS / Azure. Monitoring, observability and release stabilization in production are core parts of my work."
        },

        // AI Engineering section
        'ai.title': { fr: 'AI Engineering — <span>Expertise clé</span>', en: 'AI Engineering — <span>Core Expertise</span>' },
        'ai.intro': {
            fr: "Domaines sur lesquels je construis et déploie des systèmes IA en production :",
            en: "Areas where I build and ship production-grade AI systems:"
        },
        'ai.tag.agents': { fr: 'Orchestration d\'agents LLM', en: 'LLM Agent Orchestration' },
        'ai.tag.mcp': { fr: 'MCP Servers & Intégrations', en: 'MCP Servers & Integrations' },
        'ai.tag.tools': { fr: 'Tool Calling Patterns', en: 'Tool Calling Patterns' },
        'ai.tag.rag': { fr: 'Pipelines RAG', en: 'RAG Pipelines' },
        'ai.tag.docs': { fr: 'Document Ingestion', en: 'Document Ingestion' },
        'ai.tag.knowledge': { fr: 'Knowledge Structuring', en: 'Knowledge Structuring' },
        'ai.tag.workflows': { fr: 'Workflows IA multi-étapes', en: 'Multi-step AI Workflows' },
        'ai.tag.python': { fr: 'Python : automation, glue code, data extraction', en: 'Python: automation, glue code, data extraction' },
        'ai.tag.production': { fr: 'Systèmes IA production-grade', en: 'Production-grade AI Systems' },
        'ai.tag.llms': { fr: 'OpenAI + architectures multi-LLM', en: 'OpenAI + Multi-LLM architectures' },

        // Fun Facts
        'funfacts.title': { fr: '<span>Quelques</span> chiffres', en: 'Fun <span>Facts</span>' },
        'funfacts.clients': { fr: 'Clients satisfaits', en: 'Happy Clients' },
        'funfacts.hours': { fr: 'Heures de code', en: 'Working Hours' },
        'funfacts.contrib': { fr: 'Contributions', en: 'Contributions' },

        // Resume
        'resume.title': { fr: 'CV', en: 'Resume' },
        'resume.education': { fr: 'Formation', en: 'Education' },
        'resume.experience': { fr: 'Expérience', en: 'Experience' },

        // Education entries
        'edu.toulouse.school': { fr: 'Université Toulouse - Jean Jaurès, France', en: 'Université Toulouse - Jean Jaurès, France' },
        'edu.toulouse.title': { fr: 'Master 2', en: 'Master 2' },
        'edu.toulouse.desc': { fr: "Ingénierie de l'Information Numérique (I2N)", en: "Digital Information Engineering (I2N)" },
        'edu.nanjing.school': { fr: 'Nanjing University of Posts and Telecommunications, Chine', en: 'Nanjing University of Posts and Telecommunications, China' },
        'edu.nanjing.title': { fr: 'Master 2', en: 'Master 2' },
        'edu.nanjing.desc': { fr: "Computer Science & Technology - Spécialité IA / Traitement du Langage Naturel", en: "Computer Science & Technology - AI / Natural Language Processing" },
        'edu.rabat.school': { fr: 'Université Mohammed V, Rabat, Maroc', en: 'Mohammed V University in Rabat, Morocco' },
        'edu.rabat.title': { fr: 'Master 1', en: 'Master 1' },
        'edu.rabat.desc': { fr: "Traitement Intelligent des Systèmes (TIS)", en: "Intelligent Processing System (IPS)" },
        'edu.est.school': { fr: 'École Supérieure de Technologie de Salé, Maroc', en: 'Higher School of Technology Sale, Morocco' },
        'edu.est.title': { fr: 'Licence', en: 'Bachelor' },
        'edu.est.desc': { fr: "Big Data & Systèmes d'Information", en: "Information System and Big Data" },
        'edu.settat.school': { fr: 'Classes préparatoires, Settat, Maroc', en: 'Technical High School Settat, Morocco' },
        'edu.settat.title': { fr: 'BTS', en: 'Advanced Technician\'s Certificate' },
        'edu.settat.desc': { fr: "Développement des Systèmes d'Information", en: "Information Systems Development" },

        // Experience entries
        'exp.investance.period': { fr: 'Janv. 2026 - Présent', en: 'Jan 2026 - Present' },
        'exp.investance.company': { fr: 'Investance Partners', en: 'Investance Partners' },
        'exp.investance.title': { fr: 'Tech Lead Developer', en: 'Tech Lead Developer' },
        'exp.investance.desc': {
            fr: "<strong>Paradoxe.ai</strong> — Plateforme IA en production. Conception et implémentation de l'<strong>orchestration d'agents LLM</strong> avec workflows multi-étapes. Construction d'<strong>intégrations MCP</strong> et de patterns de <strong>tool calling</strong> pour connecter les agents aux systèmes externes (APIs tierces, bases de données, services cloud). Stack backend Python, déployée sur AWS avec CI/CD GitHub Actions / Docker. Observabilité, sécurité et stabilisation des releases pour des systèmes IA de production.",
            en: "<strong>Paradoxe.ai</strong> — Production-grade AI platform. Design and implementation of <strong>LLM agent orchestration</strong> with multi-step workflows. Built <strong>MCP integrations</strong> and <strong>tool calling</strong> patterns to connect agents to external systems (third-party APIs, databases, cloud services). Python-heavy backend, deployed on AWS with GitHub Actions / Docker CI/CD. Observability, security and release stabilization for production AI systems."
        },
        'exp.digitalent.period': { fr: 'Sept. 2022 - Déc. 2025', en: 'Sep 2022 - Dec 2025' },
        'exp.digitalent.company': { fr: 'Digitalent', en: 'Digitalent' },
        'exp.digitalent.title': { fr: 'Full Stack Developer', en: 'Full Stack Developer' },
        'exp.digitalent.desc': {
            fr: "Architecte de la plateforme <strong>MIA</strong> — plateforme IA en microservices dédiée à l'orchestration de workflows structurés. Conception de <strong>pipelines RAG</strong>, d'ingestion de documents et de structuration de connaissances en collaboration avec les équipes data science. Construction de <strong>workflows IA multi-étapes</strong> orchestrés en asynchrone via Kafka. Stack Python (automation, intégrations, data extraction, glue code). Déploiements production sur AWS avec CI/CD complet. Clients majeurs : <strong>Framatome, Attijariwafa Bank, Picard</strong>.",
            en: "Architect of the <strong>MIA</strong> platform — a microservices AI platform for structured workflow orchestration. Designed <strong>RAG pipelines</strong>, document ingestion and knowledge structuring layers in close collaboration with data science teams. Built <strong>multi-step AI workflows</strong> orchestrated asynchronously via Kafka. Python-heavy stack (automation, integrations, data extraction, glue code). Production deployments on AWS with full CI/CD. Major clients: <strong>Framatome, Attijariwafa Bank, Picard</strong>."
        },
        'exp.sps.period': { fr: 'Mai 2022 - Juin 2022', en: 'May 2022 - Jun 2022' },
        'exp.sps.company': { fr: 'SPS Technology, Freelance', en: 'SPS Technology, Freelance' },
        'exp.sps.title': { fr: 'Full Stack Developer', en: 'Full Stack Developer' },
        'exp.sps.desc': {
            fr: "Conception et développement d'une solution de gestion des stocks multi-utilisateurs (suivi des flux logistiques, commandes et retours). Stack : #Flutter #Laravel Lumen #Vue.js.",
            en: "Design and development of a multi-user inventory management solution (logistics flow tracking, orders and returns). Stack: #Flutter #Laravel Lumen #Vue.js."
        },
        'exp.msinvest.period': { fr: 'Janv. 2022 - Avr. 2022', en: 'Jan 2022 - Apr 2022' },
        'exp.msinvest.company': { fr: 'MS INVEST (STILL MAROC), Freelance', en: 'MS INVEST (STILL MAROC), Freelance' },
        'exp.msinvest.title': { fr: 'Full Stack Developer', en: 'Full Stack Developer' },
        'exp.msinvest.desc': {
            fr: "Application web et mobile de gestion SAV pour MS INVEST, distributeur officiel de la marque allemande STILL. Suivi des interventions, pièces détachées, dashboard analytique. Stack : #Flutter #Laravel Lumen #Vue.js.",
            en: "Web and mobile after-sales service management application for MS INVEST, official distributor of the German brand STILL. Intervention tracking, spare parts, analytical dashboard. Stack: #Flutter #Laravel Lumen #Vue.js."
        },
        'exp.afterschool.period': { fr: 'Déc. 2021 - Fév. 2022', en: 'Dec 2021 - Feb 2022' },
        'exp.afterschool.company': { fr: 'After School, Freelance', en: 'After School, Freelance' },
        'exp.afterschool.title': { fr: 'Web Developer', en: 'Web Developer' },
        'exp.afterschool.desc': {
            fr: "Plateforme e-learning multi-profils (élèves, enseignants, parents, administrateurs). Modules de gestion pédagogique, classes virtuelles Zoom, quiz, suivi des présences. Stack : #Laravel #Vue.js.",
            en: "Multi-profile e-learning platform (students, teachers, parents, administrators). Educational management modules, Zoom virtual classes, quizzes, attendance tracking. Stack: #Laravel #Vue.js."
        },

        // Skills sections
        'skills.prog': { fr: 'Langages de <span>programmation</span>', en: 'Programming <span>Languages</span>' },
        'skills.web': { fr: 'Développement <span>Web</span>', en: 'Web <span>Development</span>' },
        'skills.backend': { fr: 'Développement <span>Backend</span>', en: 'Backend <span>Development</span>' },
        'skills.mobile': { fr: 'Développement <span>Mobile</span>', en: 'Mobile App <span>Development</span>' },
        'skills.devops': { fr: 'Dev <span>Ops & Cloud</span>', en: 'Dev <span>Ops & Cloud</span>' },
        'skills.responsive': { fr: 'Design responsive', en: 'Responsive web design' },
        'skills.dbmgmt': { fr: 'Gestion BDD (SQL, PostgreSQL, MongoDB)', en: 'Database management (SQL, PostgreSQL, MongoDB)' },
        'skills.apidev': { fr: 'Développement d\'APIs', en: 'API development' },
        'skills.kafka': { fr: 'Kafka (broker & orchestration)', en: 'Kafka (message broker & orchestration)' },
        'skills.cicd': { fr: 'CI/CD (GitHub Actions)', en: 'CI/CD (GitHub Actions)' },
        'skills.deploy': { fr: 'Conteneurisation (Docker, Git)', en: 'Deployment tools (Docker, Git)' },
        'skills.cloud': { fr: 'Plateformes cloud (AWS, Azure)', en: 'Cloud platforms (AWS, Azure)' },
        'skills.monitoring': { fr: 'Monitoring (Grafana)', en: 'Monitoring (Grafana)' },
        'skills.crossplatform': { fr: 'Frameworks cross-platform (Flutter)', en: 'Cross-platform frameworks (Flutter)' },

        // Knowledges
        'knowledges.title': { fr: 'Connaissances', en: 'Knowledges' },
        'kn.ml': { fr: 'Machine Learning', en: 'Machine Learning' },
        'kn.pm': { fr: 'Outils de gestion de projet', en: 'Project management tools' },
        'kn.agile': { fr: 'Méthodologies Agile / Scrum', en: 'Agile / Scrum methodologies' },
        'kn.time': { fr: 'Gestion du temps', en: 'Time Management' },
        'kn.comm': { fr: 'Communication', en: 'Communication' },
        'kn.problem': { fr: 'Résolution de problèmes', en: 'Problem-Solving' },
        'kn.social': { fr: 'Réseaux sociaux', en: 'Social Networking' },
        'kn.flex': { fr: 'Adaptabilité', en: 'Flexibility' },

        // Self training
        'selftraining.title': { fr: 'Auto-formation', en: 'Self training' },

        // Languages section
        'languages.title': { fr: 'Langues', en: 'Languages' },
        'languages.fr': { fr: 'Français — Natif', en: 'French — Native' },
        'languages.en': { fr: 'Anglais — Courant', en: 'English — Fluent' },
        'languages.ar': { fr: 'Arabe — Natif', en: 'Arabic — Native' },

        // Certificates
        'cert.title': { fr: 'Certificats', en: 'Certificates' },
        'cert.python.title': { fr: 'Crash Course on Python', en: 'Crash Course on Python' },
        'cert.python.id': { fr: 'ID : YN5PATA3BRVS', en: 'Credential ID: YN5PATA3BRVS' },
        'cert.azure.title': { fr: 'Introduction à Microsoft Azure', en: 'Introduction Microsoft Azure' },
        'cert.sql.title': { fr: 'Associate SQL Certificate', en: 'Associate SQL Certificate' },

        // Portfolio section
        'portfolio.title': { fr: 'Portfolio', en: 'Portfolio' },
        'portfolio.category': { fr: 'Détaillé', en: 'Detailed' },

        // Blog
        'blog.title': { fr: 'Blog', en: 'Blog' },

        // Contact
        'contact.title': { fr: 'Contact', en: 'Contact' },
        'contact.country': { fr: 'France', en: 'France' },
        'contact.freelance': { fr: 'Disponible en freelance', en: 'Freelance Available' },
        'contact.help.title': { fr: 'Comment puis-je <span>vous aider ?</span>', en: 'How Can I <span>Help You?</span>' },
        'contact.form.name': { fr: 'Nom complet', en: 'Full Name' },
        'contact.form.email': { fr: 'Adresse email', en: 'Email Address' },
        'contact.form.subject': { fr: 'Sujet', en: 'Subject' },
        'contact.form.message': { fr: 'Message', en: 'Message' },
        'contact.form.send': { fr: 'Envoyer', en: 'Send message' }
    };

    function applyLang(lang) {
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            const key = el.getAttribute('data-i18n');
            const entry = translations[key];
            if (entry && entry[lang]) {
                el.innerHTML = entry[lang];
            }
        });
        document.querySelectorAll('[data-i18n-value]').forEach(function (el) {
            const key = el.getAttribute('data-i18n-value');
            const entry = translations[key];
            if (entry && entry[lang]) {
                el.value = entry[lang];
            }
        });
        // Update active state on switcher
        document.querySelectorAll('.lang-switcher button').forEach(function (btn) {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });
        localStorage.setItem('portfolio_lang', lang);
    }

    function init() {
        const saved = localStorage.getItem('portfolio_lang');
        const browser = (navigator.language || 'en').toLowerCase().startsWith('fr') ? 'fr' : 'en';
        const lang = saved || browser;
        applyLang(lang);

        document.querySelectorAll('.lang-switcher button').forEach(function (btn) {
            btn.addEventListener('click', function () {
                applyLang(btn.getAttribute('data-lang'));
            });
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
