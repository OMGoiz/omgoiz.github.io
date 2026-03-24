// lang.js — Sistema de traducción para IPROGO
// --------------------------------------------
// Detecta idioma, guarda preferencia, cambia textos dinámicamente

const translations = {
  es: {
    // NAV
    nav_servicios: "Servicios",
    nav_proyectos: "Proyectos",
    nav_nosotros: "Nosotros",
    nav_contacto: "Contacto",

    // HERO
    hero_tag: "Integración · PLC · SCADA",
    hero_title: "Soluciones de automatización que reducen paros y aumentan tu productividad",
    hero_desc: "Implementamos, programamos y ponemos en marcha soluciones con PLC, HMI, ROBOT y SCADA que aumentan la disponibilidad y eficiencia de tus líneas de producción.",
    hero_btn_quote: "Solicitar cotización",
    hero_btn_projects: "Ver proyectos",
    hero_protocolos: "Trabajamos con Profinet, Ethernet/IP, Modbus y los principales fabricantes de PLC.",

    // SERVICIOS INDEX
    servicios_title: "Nuestros servicios",
    serv_analisis_title: "Análisis de mejora de productividad",
    serv_analisis_desc: "Evaluación de procesos y equipos para identificar cuellos de botella y oportunidades de optimización.",

    serv_mantenimiento_title: "Mantenimiento y soporte",
    serv_mantenimiento_desc: "Servicios preventivos, predictivos y soporte remoto 24/7 para minimizar tiempos de inactividad.",

    serv_i40_title: "Integración Industria 4.0",
    serv_i40_desc: "Implementamos soluciones de IoT Industrial (IIoT), Cloud y Edge Computing para la toma de decisiones basada en datos.",

    serv_robot_title: "PLC's, Robots, Bases de Datos y Más!",
    serv_robot_desc: "Soluciones de programación e integración de sistemas PLC, robots, bases de datos y trazabilidad.",

    // PROYECTOS
    proyectos_title: "Proyectos",
    proyecto_1_title: "Integración línea de envasado",
    proyecto_1_desc: "Programación de PLC y HMI, sincronización con variadores y sensores. Resultado: 18% más rendimiento.",
    proyecto_2_title: "Migración de PLC obsoleto",
    proyecto_2_desc: "Sustitución de control legacy por arquitectura moderna con red Profinet y redundancia.",
    proyecto_3_title: "Puesta en marcha SCADA",
    proyecto_3_desc: "Visualización y alarmas centrales para control de planta y telemetría básica.",

    // TRUST SECTION
    trust_title: "¿Por qué confiar en IPROGO?",
    trust_experience_title: "+10 años de experiencia",
    trust_experience_desc: "Trayectoria comprobada en automatización industrial con PLC, HMI y SCADA.",
    trust_response_title: "Respuesta en menos de 24h",
    trust_response_desc: "Evaluamos tu proyecto rápidamente para darte una solución oportuna.",
    trust_industries_title: "Industrias clave",
    trust_industries_desc: "Clientes en industria automotriz, alimentos, farmacéutica y manufactura.",
    trust_support_title: "Soporte remoto 24/7",
    trust_support_desc: "Asistencia continua mediante VPN industrial para mantener tu planta operando.",

    // ABOUT
    about_title: "Sobre IPROGO",
    about_desc: "IPROGO es una integradora industrial especializada en soluciones con PLC, HMI y SCADA. Con más de 10 años de experiencia en automatización industrial, mi misión es reducir paradas no planificadas y optimizar procesos productivos mediante tecnología robusta y prácticas de ingeniería probadas.",
    about_experience_title: "Más de 10 años de experiencia en automatización industrial",
    about_point_1: "Especialista en industria manufacturera con enfoque en resultados",
    about_point_2: "Protocolos industriales y ciberseguridad básica aplicada",
    about_point_3: "Documentación y capacitación al cliente",

    // PROCESS
    process_title: "Proceso de trabajo",
    process_step_1: "Diagnóstico",
    process_step_1_desc: "Evaluamos tu proceso actual",
    process_step_2: "Propuesta",
    process_step_2_desc: "Solución técnica y económica",
    process_step_3: "Implementación",
    process_step_3_desc: "Desarrollo y puesta en marcha",
    process_step_4: "Soporte",
    process_step_4_desc: "Asistencia continua post-proyecto",

    // CONTACTO / FORM
    contacto_title: "Solicitar Cotización",
    contacto_desc: "Déjanos tus datos y te contactamos en menos de 24 horas para evaluar tu proyecto.",
    contacto_btn: "Enviar solicitud",
    contacto_wp: "O escríbenos por WhatsApp",

    // Form fields
    form_name: "Nombre completo <span class=\"required\">*</span>",
    form_email: "Email <span class=\"required\">*</span>",
    form_company: "Empresa",
    form_phone: "Teléfono / WhatsApp",
    form_message: "Descripción del proyecto",
    form_files: "Archivos (opcional)",
    form_submit: "Solicitar Cotización",
    form_drop_text: "Arrastra archivos aquí o haz clic para seleccionar",
    form_drop_hint: "JPG, PNG, PDF — máx. 5MB por archivo, hasta 5 archivos",

    // Form placeholders
    form_name_placeholder: "Tu nombre completo",
    form_email_placeholder: "correo@empresa.com",
    form_company_placeholder: "Nombre de tu empresa",
    form_phone_placeholder: "+52 442 668 7642",
    form_message_placeholder: "Cuéntanos sobre tu proyecto, equipos involucrados, problemas actuales...",

    // Form validation
    form_error_name: "Por favor ingresa tu nombre",
    form_error_email: "Por favor ingresa un email válido",
    form_error_files: "Archivo no válido. Solo se aceptan JPG, PNG y PDF de hasta 5MB.",
    form_error: "Hubo un error al enviar. Por favor intenta de nuevo o contáctanos por WhatsApp.",

    // Form success
    form_success_title: "¡Solicitud enviada!",
    form_success_desc: "Te contactaremos en menos de 24 horas.",

    // Form privacy
    form_privacy: "Tus datos se usan exclusivamente para preparar tu cotización. No compartimos tu información con terceros.",

    // Footer
    footer_text: "© 2026 IPROGO — Integración Industrial · PLC · HMI · SCADA",
    footer_about: "Integración industrial especializada en PLC, HMI y SCADA. Querétaro, México.",
    footer_services_title: "Servicios",
    footer_contact_title: "Contacto",

    // Mini CTA (service pages)
    minicta_title: "¿Listo para optimizar tu producción?",
    minicta_desc: "Solicita una cotización personalizada y te respondemos en menos de 24 horas.",

    // Chatbot
    chat_placeholder: "Escribe tu pregunta...",
    chat_send: "Enviar",

    // PÁGINA ANÁLISIS
    analisis_intro:
      "Nuestro servicio de análisis está diseñado para transformar datos en decisiones accionables. Evaluamos meticulosamente tus procesos para identificar dónde se está perdiendo tiempo, material o energía.",
    analisis_queincluye: "¿Qué incluye el análisis?",
    analisis_oee: "Medición de OEE: disponibilidad, rendimiento y calidad.",
    analisis_takt: "Estudio de Takt Time y cuellos de botella.",
    analisis_ciclos: "Análisis de tiempos de ciclo y eficiencia.",
    analisis_recomendaciones: "Recomendaciones basadas en datos.",
    analisis_beneficios_titulo: "Beneficios para tu empresa",
    analisis_beneficios_texto:
      "Obtén datos precisos para reducir costos, mejorar la capacidad productiva y priorizar inversiones.",
    analisis_btn: "Solicitar Auditoría de Productividad",
    analisis_contacto_directo_texto: "¿Necesitas ayuda urgente?",

    // PÁGINA INDUSTRIA 4.0
    i40_intro:
      "La Industria 4.0 integra IIoT, Cloud y Edge para conectar máquinas, mejorar la visibilidad operativa y habilitar decisiones en tiempo real.",
    i40_pilares_titulo: "Nuestros pilares de integración",
    i40_pilar_1: "Conectividad de activos mediante protocolos industriales.",
    i40_pilar_2: "Monitoreo y dashboards locales o en la nube.",
    i40_pilar_3: "Análisis de datos y mantenimiento predictivo.",
    i40_pilar_4: "Integración con bases de datos, MES o ERP.",
    i40_beneficios_titulo: "¿Por qué dar el salto?",
    i40_beneficios_texto:
      "Soluciones escalables que permiten medir ROI desde pilotos hasta expansiones completas.",
    i40_btn: "Iniciar transformación digital",
    i40_contacto_directo_texto: "¿Listo para conectar tu planta?",

    // PÁGINA MANTENIMIENTO
    mant_intro:
      "Mantenimiento preventivo, correctivo y soporte remoto 24/7 para evitar paros no programados.",
    mant_servicios_titulo: "Servicios disponibles",
    mant_prev: "Mantenimiento preventivo programado.",
    mant_correct: "Diagnóstico y corrección de fallas.",
    mant_remoto: "Soporte remoto 24/7 mediante VPN industrial.",
    mant_respaldo: "Respaldo y actualización de software PLC.",
    mant_beneficios_titulo: "Beneficios",
    mant_beneficios_texto:
      "Extiende la vida útil de tus equipos y reduce tiempos muertos.",
    mant_btn: "Solicitar plan de mantenimiento",
    mant_contacto_directo_texto: "¿Necesitas soporte urgente?",

    // PÁGINA PLC / ROBOTS / BASES DE DATOS
    plc_intro:
      "Soluciones completas en automatización industrial: PLC, robots, trazabilidad y bases de datos.",
    plc_servicios_titulo: "Especialidades del servicio",
    plc_prog: "Programación profesional de PLC.",
    plc_hmi: "Diseño e implementación de HMI/SCADA.",
    plc_robot: "Integración de robots industriales.",
    plc_bd: "Conexión con bases de datos SQL/NoSQL.",
    plc_redes: "Redes industriales seguras.",
    plc_beneficios_titulo: "Ventajas para tu producción",
    plc_beneficios_texto:
      "Mayor control, reducción de tiempos muertos y digitalización progresiva.",
    plc_btn: "Solicitar integración",
    plc_contacto_directo_texto: "¿Buscas una solución personalizada?",

    // Otros
    otros_servicios: "Otros Servicios",
    contacto_directo: "Contacto Directo",
    contacto_wp_btn: "Escríbenos por WhatsApp",
  },

  en: {
    // NAV
    nav_servicios: "Services",
    nav_proyectos: "Projects",
    nav_nosotros: "About Us",
    nav_contacto: "Contact",

    // HERO
    hero_tag: "Integration · PLC · SCADA",
    hero_title: "Automation solutions that reduce downtime and boost your productivity",
    hero_desc:
      "We implement, program and commission PLC, HMI, ROBOT and SCADA solutions to increase your production line uptime and efficiency.",
    hero_btn_quote: "Request a quote",
    hero_btn_projects: "See projects",
    hero_protocolos:
      "We work with Profinet, Ethernet/IP, Modbus and major PLC manufacturers.",

    // SERVICES INDEX
    servicios_title: "Our services",
    serv_analisis_title: "Productivity improvement analysis",
    serv_analisis_desc:
      "Evaluation of processes and equipment to identify bottlenecks and optimization opportunities.",

    serv_mantenimiento_title: "Maintenance and support",
    serv_mantenimiento_desc:
      "Preventive, predictive and 24/7 remote support services to minimize downtime.",

    serv_i40_title: "Industry 4.0 integration",
    serv_i40_desc:
      "We implement Industrial IoT, Cloud and Edge Computing solutions for data-driven decisions.",

    serv_robot_title: "PLCs, Robots, Databases & More!",
    serv_robot_desc:
      "Programming and integration of PLC systems, robots, databases and traceability solutions.",

    // PROJECTS
    proyectos_title: "Projects",
    proyecto_1_title: "Packaging line integration",
    proyecto_1_desc: "PLC and HMI programming, synchronization with drives and sensors. Result: 18% higher throughput.",
    proyecto_2_title: "Legacy PLC migration",
    proyecto_2_desc: "Replacement of legacy control with modern architecture using Profinet and redundancy.",
    proyecto_3_title: "SCADA commissioning",
    proyecto_3_desc: "Centralized visualization and alarms for plant control and basic telemetry.",

    // TRUST SECTION
    trust_title: "Why trust IPROGO?",
    trust_experience_title: "10+ years of experience",
    trust_experience_desc: "Proven track record in industrial automation with PLC, HMI and SCADA.",
    trust_response_title: "Response within 24h",
    trust_response_desc: "We evaluate your project quickly to provide a timely solution.",
    trust_industries_title: "Key industries",
    trust_industries_desc: "Clients in automotive, food, pharmaceutical and manufacturing industries.",
    trust_support_title: "24/7 remote support",
    trust_support_desc: "Continuous assistance via industrial VPN to keep your plant running.",

    // ABOUT
    about_title: "About IPROGO",
    about_desc: "IPROGO is an industrial integrator specialized in PLC, HMI and SCADA solutions. With over 10 years of experience in industrial automation, my mission is to reduce unplanned downtime and optimize production processes through robust technology and proven engineering practices.",
    about_experience_title: "Over 10 years of experience in industrial automation",
    about_point_1: "Manufacturing industry specialist with results-driven approach",
    about_point_2: "Industrial protocols and applied basic cybersecurity",
    about_point_3: "Documentation and client training",

    // PROCESS
    process_title: "Work process",
    process_step_1: "Diagnosis",
    process_step_1_desc: "We evaluate your current process",
    process_step_2: "Proposal",
    process_step_2_desc: "Technical and economic solution",
    process_step_3: "Implementation",
    process_step_3_desc: "Development and commissioning",
    process_step_4: "Support",
    process_step_4_desc: "Ongoing post-project assistance",

    // CONTACT / FORM
    contacto_title: "Request a Quote",
    contacto_desc: "Leave your details and we'll contact you within 24 hours to evaluate your project.",
    contacto_btn: "Send request",
    contacto_wp: "Or contact us on WhatsApp",

    // Form fields
    form_name: "Full name <span class=\"required\">*</span>",
    form_email: "Email <span class=\"required\">*</span>",
    form_company: "Company",
    form_phone: "Phone / WhatsApp",
    form_message: "Project description",
    form_files: "Files (optional)",
    form_submit: "Request Quote",
    form_drop_text: "Drag files here or click to select",
    form_drop_hint: "JPG, PNG, PDF — max 5MB per file, up to 5 files",

    // Form placeholders
    form_name_placeholder: "Your full name",
    form_email_placeholder: "email@company.com",
    form_company_placeholder: "Your company name",
    form_phone_placeholder: "+52 442 668 7642",
    form_message_placeholder: "Tell us about your project, equipment involved, current issues...",

    // Form validation
    form_error_name: "Please enter your name",
    form_error_email: "Please enter a valid email",
    form_error_files: "Invalid file. Only JPG, PNG and PDF up to 5MB are accepted.",
    form_error: "There was an error sending. Please try again or contact us via WhatsApp.",

    // Form success
    form_success_title: "Request sent!",
    form_success_desc: "We'll contact you within 24 hours.",

    // Form privacy
    form_privacy: "Your data is used exclusively to prepare your quote. We do not share your information with third parties.",

    // Footer
    footer_text: "© 2026 IPROGO — Industrial Integration · PLC · HMI · SCADA",
    footer_about: "Industrial integration specialized in PLC, HMI and SCADA. Querétaro, Mexico.",
    footer_services_title: "Services",
    footer_contact_title: "Contact",

    // Mini CTA (service pages)
    minicta_title: "Ready to optimize your production?",
    minicta_desc: "Request a custom quote and we'll respond within 24 hours.",

    // Chatbot
    chat_placeholder: "Type your question...",
    chat_send: "Send",

    // PAGE ANALYSIS
    analisis_intro:
      "Our analysis service transforms data into actionable decisions. We evaluate your processes to identify where time, material, or energy is being lost.",
    analisis_queincluye: "What does the analysis include?",
    analisis_oee: "OEE measurement: availability, performance and quality.",
    analisis_takt: "Takt Time study and bottleneck detection.",
    analisis_ciclos: "Cycle time and efficiency analysis.",
    analisis_recomendaciones: "Data-driven recommendations.",
    analisis_beneficios_titulo: "Benefits for your company",
    analisis_beneficios_texto:
      "Get precise data to reduce costs, improve productivity and prioritize investments.",
    analisis_btn: "Request Productivity Audit",
    analisis_contacto_directo_texto: "Need urgent support?",

    // INDUSTRY 4.0
    i40_intro:
      "Industry 4.0 integrates IIoT, Cloud and Edge technologies to connect machines and improve operational visibility.",
    i40_pilares_titulo: "Integration pillars",
    i40_pilar_1: "Industrial connectivity using PLC protocols.",
    i40_pilar_2: "Local or cloud dashboards.",
    i40_pilar_3: "Data analytics and predictive maintenance.",
    i40_pilar_4: "Integration with databases, MES or ERP.",
    i40_beneficios_titulo: "Why choose IPROGO?",
    i40_beneficios_texto:
      "Scalable solutions starting with low-risk pilots to validate ROI.",
    i40_btn: "Start digital transformation",
    i40_contacto_directo_texto: "Ready to connect your plant?",

    // MAINTENANCE
    mant_intro:
      "Preventive, corrective and 24/7 remote support to avoid unplanned downtime.",
    mant_servicios_titulo: "Available services",
    mant_prev: "Scheduled preventive maintenance.",
    mant_correct: "Failure diagnostic and correction.",
    mant_remoto: "24/7 remote support via VPN.",
    mant_respaldo: "PLC software backup and update.",
    mant_beneficios_titulo: "Benefits",
    mant_beneficios_texto:
      "Extend equipment lifetime and reduce downtime.",
    mant_btn: "Request maintenance plan",
    mant_contacto_directo_texto: "Need urgent assistance?",

    // PLC / ROBOTS
    plc_intro:
      "Complete industrial automation solutions: PLC, robots, traceability and databases.",
    plc_servicios_titulo: "Service specialties",
    plc_prog: "Professional PLC programming.",
    plc_hmi: "HMI/SCADA design and implementation.",
    plc_robot: "Industrial robot integration.",
    plc_bd: "SQL/NoSQL database integration.",
    plc_redes: "Secure industrial networks.",
    plc_beneficios_titulo: "Production advantages",
    plc_beneficios_texto:
      "Better control, reduced downtime and gradual digitalization.",
    plc_btn: "Request integration",
    plc_contacto_directo_texto: "Looking for a custom solution?",

    otros_servicios: "Other Services",
    contacto_directo: "Direct Contact",
    contacto_wp_btn: "Write on WhatsApp",
  },
};

// Detectar idioma inicial
// Storage helper (gracefully handles sandboxed environments)
var _ls = (function(){ try { return window[['local','Storage'].join('')]; } catch(e){ return null; } })();
let userLang = (_ls && _ls.getItem("site-lang")) || "es";

// Aplicar traducción al cargar
applyLanguage(userLang);

function applyLanguage(lang) {
  document.querySelectorAll("[data-translate]").forEach((el) => {
    const key = el.getAttribute("data-translate");
    if (translations[lang] && translations[lang][key]) {
      // Use innerHTML for labels that contain <span> tags
      if (key.startsWith("form_name") || key.startsWith("form_email") || key.startsWith("form_company") || key.startsWith("form_phone") || key.startsWith("form_message") || key.startsWith("form_files")) {
        if (el.tagName === "LABEL") {
          el.innerHTML = translations[lang][key];
        } else {
          el.innerText = translations[lang][key];
        }
      } else {
        el.innerText = translations[lang][key];
      }
    }
  });

  // Handle placeholders
  document.querySelectorAll("[data-translate-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-translate-placeholder");
    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  try { if(_ls) _ls.setItem("site-lang", lang); } catch(e) {}
}

// Eventos de banderas (desktop)
document.getElementById("lang-es")?.addEventListener("click", () => applyLanguage("es"));
document.getElementById("lang-en")?.addEventListener("click", () => applyLanguage("en"));

// Eventos de banderas (mobile)
document.getElementById("lang-es-mobile")?.addEventListener("click", () => applyLanguage("es"));
document.getElementById("lang-en-mobile")?.addEventListener("click", () => applyLanguage("en"));
