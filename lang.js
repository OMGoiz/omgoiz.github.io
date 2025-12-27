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
    hero_title: "Automatización industrial inteligente para plantas inteligentes",
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

    // CONTACTO INDEX
    contacto_title: "Contacto",
    contacto_desc: "Déjanos tus datos y te contactamos para evaluar tu proyecto.",
    contacto_btn: "Enviar solicitud",
    contacto_wp: "O escríbenos por WhatsApp",

    footer_text: "© IPROGO — Integración Industrial · PLC · HMI · SCADA",

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
    hero_title: "Intelligent industrial automation for smart factories",
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

    // CONTACT INDEX
    contacto_title: "Contact",
    contacto_desc: "Leave your information and we will contact you to evaluate your project.",
    contacto_btn: "Send request",
    contacto_wp: "Or contact us on WhatsApp",

    footer_text: "© IPROGO — Industrial Integration · PLC · HMI · SCADA",

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
const userLang = localStorage.getItem("site-lang") || "es";

// Aplicar traducción al cargar
applyLanguage(userLang);

function applyLanguage(lang) {
  document.querySelectorAll("[data-translate]").forEach((el) => {
    const key = el.getAttribute("data-translate");
    if (translations[lang] && translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });

  localStorage.setItem("site-lang", lang);
}

// Eventos de banderas
document.getElementById("lang-es")?.addEventListener("click", () => applyLanguage("es"));
document.getElementById("lang-en")?.addEventListener("click", () => applyLanguage("en"));
