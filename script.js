const roles = [
  {period:'MAY 2025 — MAY 2026',title:{en:'Senior Software Developer',es:'Desarrollador de Software Senior'},company:'British Airways',location:{en:'Remote',es:'Remoto'},sector:{en:'AVIATION · SCHEDULE OPTIMISATION · DATA ENGINEERING',es:'AVIACIÓN · OPTIMIZACIÓN DE HORARIOS · INGENIERÍA DE DATOS'},summary:{en:'<a href="https://www.britishairways.com" target="_blank" rel="noopener noreferrer">British Airways</a> is one of the world’s leading airlines. I contributed to the development of an internal flight-scheduling optimisation platform designed to automate traditionally manual planning processes. The platform replaced spreadsheet-based workflows with a scalable, data-driven system for processing historical flight schedules, evaluating planning scenarios and comparing them against multiple operational metrics, laying the groundwork for future AI-driven optimisation.',es:'<a href="https://www.britishairways.com" target="_blank" rel="noopener noreferrer">British Airways</a> es una de las principales aerolíneas del mundo. Contribuí al desarrollo de una plataforma interna de optimización de la planificación de vuelos, diseñada para automatizar procesos de planificación que tradicionalmente se realizaban de forma manual. La plataforma sustituyó los flujos de trabajo basados en hojas de cálculo por un sistema escalable y orientado a los datos, capaz de procesar históricos de horarios de vuelo, evaluar escenarios de planificación y compararlos mediante múltiples métricas operativas, sentando las bases para futuras optimizaciones impulsadas por IA.'},contributionsLabel:{en:'KEY CONTRIBUTIONS',es:'CONTRIBUCIONES PRINCIPALES'},bullets:{en:['Took an early-stage MVP to a production-ready, scalable platform, replacing fragmented file-based workflows with interconnected services and database-backed data flows.','Restructured the FastAPI backend around Domain-Driven Design (DDD), improving domain modelling, separation of concerns and maintainability.','Optimised Dagster ETL pipelines with parallel execution, branching workflows and reusable components, reducing end-to-end runtime from 7–8 minutes to under 50 seconds.','Built data-ingestion workflows to parse historical flight schedules into normalised structures and make processed data available to downstream services.','Worked with Data Scientists to productionise nine schedule-evaluation metrics, modularising complex analytical code into maintainable, well-tested components.','Developed reusable client modules and libraries for service integration, including a parser for legacy fixed-width, plain-text flight schedule files in SSIM format.','Contributed to frontend features and API integration using React and TypeScript.','Strengthened engineering quality through automated testing, TDD and continuous integration, alongside structured logging and monitoring.'],es:['Llevé un MVP en fase inicial hasta convertirlo en una plataforma escalable y lista para producción, sustituyendo flujos de trabajo fragmentados y basados en archivos por servicios interconectados y flujos de datos respaldados por bases de datos.','Reorganicé el backend de FastAPI en torno al diseño guiado por el dominio (DDD), mejorando el modelado del dominio, la separación de responsabilidades y la mantenibilidad.','Optimicé los pipelines ETL de Dagster mediante ejecución en paralelo, flujos ramificados y componentes reutilizables, reduciendo el tiempo total de ejecución de 7–8 minutos a menos de 50 segundos.','Desarrollé flujos de ingesta para procesar horarios históricos de vuelo y convertirlos en estructuras normalizadas, disponibles para los servicios posteriores.','Colaboré con científicos de datos para llevar a producción nueve métricas de evaluación de horarios, modularizando código analítico complejo en componentes mantenibles y bien probados.','Desarrollé módulos cliente y bibliotecas reutilizables para integrar servicios, incluido un parser para procesar archivos históricos de horarios de vuelo en formato SSIM, en texto plano y con columnas de ancho fijo.','Contribuí a funcionalidades de frontend y a la integración con las API mediante React y TypeScript.','Reforcé la calidad de ingeniería mediante pruebas automatizadas, TDD e integración continua, además de logging estructurado y monitorización.']},stack:['Python','FastAPI','REST API','API integration','Pydantic','React','TypeScript','DDD','Microservices','MongoDB','Data modeling','SSIM','Dagster','ETL','Parallel processing','Pandas','NumPy','AWS','Docker','GitHub','GitHub Actions','CI','Error Handling','Logging & Monitoring','Pytest','TDD','Automated testing']},
  {period:'NOV 2021 — MAY 2024',title:{en:'Lead Backend Engineer',es:'Ingeniero Backend Lead'},company:'Idoven',location:{en:'Remote',es:'Remoto'},sector:{en:'HEALTHTECH · AI · ECG ANALYTICS',es:'SALUD DIGITAL · IA · ANÁLISIS DE ECG'},summary:{en:'<a href="https://www.idoven.ai" target="_blank" rel="noopener noreferrer">IDOVEN</a> is a medical technology company that develops <a href="https://es.idoven.ai/platform" target="_blank" rel="noopener noreferrer">Willem</a>, an artificial intelligence platform for the reading and analysis of electrocardiograms (ECGs) and cardiac pattern detection. The platform integrates data from different devices and healthcare systems, processes it using AI models and provides results to help clinical professionals assess potential cardiac abnormalities.',es:'<a href="https://www.idoven.ai" target="_blank" rel="noopener noreferrer">IDOVEN</a> es una empresa de tecnología médica que desarrolla <a href="https://es.idoven.ai/platform" target="_blank" rel="noopener noreferrer">Willem</a>, una plataforma de inteligencia artificial para la lectura y el análisis de electrocardiogramas (ECG) y la detección de patrones cardíacos. La plataforma integra datos procedentes de distintos dispositivos y sistemas sanitarios, los procesa mediante modelos de IA y proporciona resultados para ayudar a los profesionales clínicos a evaluar posibles alteraciones cardíacas.'},summaryAdditional:{en:'During my time at the company, I contributed to developing the new version of the platform and its evolution into a medical device certified in Europe. Willem obtained CE marking as a Class IIa medical device under the European Medical Device Regulation (MDR) in 2024.',es:'Durante mi etapa en la empresa, contribuí al desarrollo de la nueva versión de la plataforma y a su evolución hacia un producto sanitario certificado en Europa. Willem obtuvo el marcado CE de clase IIa conforme al Reglamento europeo de productos sanitarios (MDR) en 2024.'},contributionsLabel:{en:'KEY CONTRIBUTIONS',es:'CONTRIBUCIONES PRINCIPALES'},bullets:{en:['Technical leadership: As the first backend developer on the new platform version, I defined the technical roadmap with the CTO and Product team. I later led a backend team of three developers and took part in hiring through interviews and technical assessments.','API design and development: Designed and built a new version of the REST API from scratch, including technology selection, data modelling, authentication, authorisation, permission management and integration with external systems. I integrated authentication with Keycloak and managed roles and permissions for users and companies.','Multicloud architecture: Helped adapt the API and data access to run on AWS, Google Cloud and Microsoft Azure. PostgreSQL served as the common relational database, and I worked with the infrastructure team to support compatibility across environments.','ECG integration and processing: Developed ingestion mechanisms for ECGs from hospitals, medical devices and other external sources, transforming them into a normalised internal format. I also developed endpoints to make processing results accessible to external systems. The solution stored metadata and results in Firestore (NoSQL), files in Google Cloud Storage, and coordinated processing through Cloud Run services.','Storage standardisation: Contributed to establishing a Parquet-based ECG storage standard, bringing source data, processed data and results together in a consistent format. I developed conversion tools using PyArrow and Pandas.','Reliability and error recovery: Implemented error-handling mechanisms that allowed failed parts of a process to be rerun without repeating the entire pipeline. I also added logging and monitoring to improve operational visibility.','Notifications: Developed a service with endpoints for sending emails and SMS, integrated with AWS SES and AWS SNS.','Quality and engineering practices: Established and applied clean-code standards, SOLID principles, automated testing and continuous integration through GitHub Actions. I also documented APIs with OpenAPI and Swagger.','Team organisation and growth: Took part in hiring developers and helped establish technical standards and agile practices with Jira and Scrum, supporting collaboration across Backend, Infrastructure, Product and Data Science.'],es:['Liderazgo técnico: Fui el primer desarrollador backend de la nueva versión de la plataforma y definí la hoja de ruta técnica junto con el CTO y el equipo de producto. Posteriormente, lideré un equipo backend de tres desarrolladores y participé en la selección de nuevos integrantes mediante entrevistas y pruebas técnicas.','Diseño y desarrollo de la API: Diseñé y construí desde cero una nueva versión de la API REST, incluyendo la selección tecnológica, el modelado de datos, la autenticación, la autorización, la gestión de permisos y la integración con sistemas externos. Integré la autenticación con Keycloak y gestioné roles y permisos para usuarios y empresas.','Arquitectura multicloud: Contribuí a adaptar la API y el acceso a datos para permitir el funcionamiento de la plataforma en AWS, Google Cloud y Microsoft Azure. Utilizamos PostgreSQL como base de datos relacional común y colaboré con el equipo de infraestructura para facilitar la compatibilidad entre los distintos entornos.','Integración y procesamiento de ECG: Desarrollé mecanismos de entrada para integrar electrocardiogramas procedentes de hospitales, dispositivos médicos y otras fuentes externas, transformándolos a un formato interno normalizado. También desarrollé endpoints para facilitar a sistemas externos el acceso a los resultados del procesamiento. La solución almacenaba metadatos y resultados en Firestore (NoSQL), guardaba archivos en Google Cloud Storage y coordinaba el procesamiento mediante servicios de Cloud Run.','Estandarización del almacenamiento: Contribuí a una iniciativa de la empresa para establecer un estándar de almacenamiento de ECG basado en Parquet, unificando en un formato consistente la información original, los datos procesados y los resultados obtenidos. Desarrollé herramientas de conversión utilizando PyArrow y Pandas.','Fiabilidad y recuperación ante errores: Implementé mecanismos de gestión de errores que permitían volver a ejecutar las partes fallidas de los procesos sin repetir el pipeline completo. También incorporé logging y monitorización para mejorar la visibilidad operativa de los sistemas.','Notificaciones: Desarrollé un servicio con endpoints para enviar correos electrónicos y SMS, integrado con AWS SES y AWS SNS.','Calidad y buenas prácticas: Establecí y apliqué estándares de código limpio, principios SOLID, pruebas automatizadas e integración continua mediante GitHub Actions. También documenté las API con OpenAPI y Swagger.','Organización y crecimiento del equipo: Participé en la contratación de nuevos desarrolladores y contribuí a establecer estándares técnicos y prácticas de trabajo ágiles mediante Jira y Scrum, facilitando la colaboración entre backend, infraestructura, producto y Data Science.']},stack:['Python','FastAPI','REST APIs','OpenAPI','Swagger','SQLModel','Alembic','PostgreSQL','Firestore (NoSQL)','Google Cloud Storage','Cloud Run','Google Cloud Secret Manager','Parquet','PyArrow','Pandas','AWS','AWS SES','AWS SNS','Google Cloud Platform (GCP)','Microsoft Azure','Docker','GitHub','GitHub Actions','Keycloak','OAuth2','JWT','Multicloud Architecture','Authentication & Authorization','External API Integration','Pytest','Automated Testing','CI/CD','Logging & Monitoring','Technical Leadership','Jira','Scrum']},
  {period:'DEC 2020 — NOV 2021',title:{en:'Lead Backend Developer',es:'Desarrollador Backend Lead'},company:'Kado Networks',location:{en:'Remote',es:'Remoto'},sector:{en:'DIGITAL NETWORKING · CONTACT MANAGEMENT',es:'NETWORKING DIGITAL · GESTIÓN DE CONTACTOS'},summary:{en:'<a href="https://www.kadonetworks.com" target="_blank" rel="noopener noreferrer">Kado Networks</a> was building a professional networking platform that began with QR-shared digital business cards and contact management. The product was intended to evolve to capture context from meetings and other professional interactions. I was Kado’s first employee and, together with the CEO—who also led Product—helped start the product from scratch. We analysed requirements, set priorities, and defined the roadmap and delivery schedule. The CTO contributed as an advisor.',es:'<a href="https://www.kadonetworks.com" target="_blank" rel="noopener noreferrer">Kado Networks</a> estaba creando una plataforma de networking profesional que comenzó con tarjetas de visita digitales compartidas mediante QR y gestión de contactos. La evolución prevista del producto contemplaba incorporar contexto de reuniones y otras interacciones profesionales. Fui el primer empleado de Kado y, junto con la CEO —que también llevaba Producto—, puse en marcha el proyecto desde cero. Analizábamos requisitos, definíamos prioridades y trazábamos el roadmap y el calendario de entregas. El CTO participaba como advisor.'},contributionsLabel:{en:'KEY CONTRIBUTIONS',es:'CONTRIBUCIONES PRINCIPALES'},bullets:{en:['Worked directly with the CEO on requirements analysis, product scope, priorities, roadmap and delivery planning from the earliest stages.','Designed and built the Python and Flask backend and REST API with <a href="https://github.com/spec-first/connexion" target="_blank" rel="noopener noreferrer">Zalando Connexion</a> (Swagger), documenting the API with OpenAPI.','Developed backend capabilities for users, companies, digital cards, contacts, events, notes, offices and departments.','Implemented passwordless email authentication using OTPs (one-time passcodes), JWT-based sessions and authorization for users and resources.','Integrated payments with <a href="https://stripe.com/" target="_blank" rel="noopener noreferrer">Stripe</a>, business-card scanning with <a href="https://www.abbyy.com/" target="_blank" rel="noopener noreferrer">ABBYY</a>, transactional email with <a href="https://www.sendwithus.com/" target="_blank" rel="noopener noreferrer">SendWithUs</a>, and product analytics with <a href="https://mixpanel.com/" target="_blank" rel="noopener noreferrer">Mixpanel</a>. I also used AWS S3 for image storage and Redis for one-time passcodes.','Established automated tests and continuous integration with GitHub Actions, prepared the local environment with <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">Docker</a>, and integrated <a href="https://sentry.io/" target="_blank" rel="noopener noreferrer">Sentry</a> for error monitoring.'],es:['Trabajé directamente con la CEO en el análisis de requisitos, el alcance del producto, las prioridades, el roadmap y la planificación de entregas desde las primeras etapas.','Diseñé y desarrollé el backend en Python y Flask y la API REST con el framework <a href="https://github.com/spec-first/connexion" target="_blank" rel="noopener noreferrer">Zalando Connexion</a> (Swagger), documentando la API con OpenAPI.','Desarrollé funcionalidades backend para usuarios, empresas, tarjetas digitales, contactos, eventos, notas, oficinas y departamentos.','Implementé autenticación mediante OTPs (códigos de un sólo uso) por email, sesiones basadas en JWT y autorización para usuarios y recursos.','Integré los pagos con <a href="https://stripe.com/" target="_blank" rel="noopener noreferrer">Stripe</a>, el escaneo de tarjetas con <a href="https://www.abbyy.com/" target="_blank" rel="noopener noreferrer">ABBYY</a>, el email transaccional con <a href="https://www.sendwithus.com/" target="_blank" rel="noopener noreferrer">SendWithUs</a> y la analítica de producto con <a href="https://mixpanel.com/" target="_blank" rel="noopener noreferrer">Mixpanel</a>. También utilicé AWS S3 para almacenar imágenes y Redis para los códigos de un solo uso.','Establecí pruebas automatizadas e integración continua con GitHub Actions, preparé el entorno local con <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">Docker</a> e integré <a href="https://sentry.io/" target="_blank" rel="noopener noreferrer">Sentry</a> para la monitorización de errores.']},stack:['Python','Flask','Zalando Connexion','REST APIs','OpenAPI','Swagger','SQLAlchemy','Alembic','PostgreSQL','Redis','JWT','Authentication','Authorization','AWS','S3','Stripe','ABBYY OCR','SendWithUs','Mixpanel','Sentry','Docker','GitHub','GitHub Actions','Pytest','Automated testing','CI/CD','Jira','Scrum','Startup','Product']},
  {period:'FEB 2020 — JAN 2021',title:{en:'Lead Backend Developer',es:'Desarrollador Backend Lead'},company:'Xfera Consumer Finance',location:{en:'Remote',es:'Remoto'},sector:{en:'FINTECH',es:'FINTECH'},summary:{en:'First development hire and backend lead for a hybrid payment institution distributing consumer credit, personal loans and credit cards through the MásMóvil network.',es:'Primer desarrollador y lead backend de una entidad de pago híbrida dedicada al crédito al consumo, préstamos personales y tarjetas de crédito a través de la red de MásMóvil.'},bullets:{en:['Recruited the backend team through interviews and technical exercises.','Started the API from scratch, defining and implementing infrastructure and technology choices.','Introduced tests and continuous integration.','Managed permissions across systems and documented APIs with Swagger.','Integrated external APIs and introduced agile practices with Jira and Scrum.'],es:['Seleccioné al equipo backend mediante entrevistas y pruebas técnicas.','Inicié la API desde cero, definiendo e implantando la infraestructura y las tecnologías.','Introduje pruebas e integración continua.','Gestioné permisos entre sistemas y documenté las APIs con Swagger.','Integré APIs externas e implanté prácticas ágiles con Jira y Scrum.']},stack:['Python','FastAPI','REST APIs','SQLAlchemy','Alembic','PostgreSQL','Swagger','OpenAPI','System permissions','External API integration','GitHub','Pytest','TDD','Automated testing','CI','Jira','Scrum','Startup','Product']},
  {period:'FEB 2019 — JAN 2020',title:{en:'Senior Backend Developer',es:'Desarrollador Backend Senior'},company:'Savana Médica',location:{en:'Madrid (Spain)',es:'Madrid (España)'},sector:{en:'HEALTHCARE · AI · BIG DATA',es:'SALUD · IA · BIG DATA'},summary:{en:'Led the application backend at a medical AI company analysing millions of clinical cases to support medical research and healthcare decisions.',es:'Lideré el backend del área de aplicaciones en una empresa de IA médica que analizaba millones de casos clínicos para apoyar la investigación y las decisiones sanitarias.'},bullets:{en:['Built the main system’s new API and moved the product towards SaaS using DDD.','Created a back-office API to centralise internal tools.','Maintained and improved the system, adding features and fixing issues.','Improved the reading and detection algorithm.','Migrated user access control to Amazon Cognito and managed permissions.','Worked closely with Product using weekly sprints, Jira and Scrum.','Introduced testing and continuous integration; documented APIs with Swagger and integrated external APIs.'],es:['Creé la nueva API del sistema principal y lo llevé hacia SaaS usando DDD.','Desarrollé una API de back-office para centralizar herramientas internas.','Mantuve y mejoré el sistema, incorporando funcionalidades y resolviendo errores.','Mejoré el algoritmo de lectura y detección.','Migré el control de acceso de usuarios a Amazon Cognito y gestioné permisos.','Colaboré con producto en sprints semanales, Jira y Scrum.','Implanté pruebas e integración continua, documenté APIs con Swagger e integré APIs externas.']},stack:['Python','Flask','FastAPI','SQLAlchemy','Alembic','PostgreSQL','MongoDB','ClickHouse','JWT','DDD','SaaS','Amazon Cognito','REST APIs','Swagger','User permissions','GitHub','Pytest','TDD','Automated testing','CI','Jira','Scrum','Startup','Product']},
  {period:'NOV 2017 — FEB 2019',title:{en:'Senior Backend Developer',es:'Desarrollador Backend Senior'},company:'StyleSage',location:{en:'Madrid (Spain)',es:'Madrid (España)'},sector:{en:'RETAIL · AI · BIG DATA',es:'RETAIL · IA · BIG DATA'},summary:{en:'Built backend systems for an AI-powered retail analytics platform covering pricing, assortment, promotions and trends for global brands.',es:'Desarrollé sistemas backend para una plataforma de analítica retail basada en IA, con información sobre precios, surtido, promociones y tendencias.'},bullets:{en:['Created APIs, token-based access and permissions for internal systems.','Introduced weekly agile sprints, Jira, Kanban and regular reviews.','Added tests and API documentation; built a repository of internal libraries.','Integrated Google Cloud, Gmail API and OpenExchangeRates.','Set up AWS instances, web services and workers.','Implemented a step-based email and screenshot processing system using queues.'],es:['Creé APIs, acceso mediante tokens y permisos para sistemas internos.','Puse en marcha sprints semanales, Jira, Kanban y reuniones periódicas.','Añadí pruebas y documentación de APIs y creé un repositorio de librerías internas.','Integré Google Cloud, Gmail API y OpenExchangeRates.','Preparé instancias en AWS y configuré servicios web y workers.','Implementé un sistema por etapas para procesar emails y capturas mediante colas.']},stack:['Python','Flask','SQLAlchemy','Alembic','PostgreSQL','Celery','RabbitMQ','Queues','workers','JWT','AWS','Google Cloud','Gmail API','OpenExchangeRates','REST APIs','tokens','Pytest','TDD','Automated testing','Jenkins','GitHub','Internal libraries','Jira','Kanban','Startup','Product']},
  {period:'JAN 2016 — SEP 2017',title:{en:'Backend Developer',es:'Desarrollador Backend'},company:'Jinn',location:{en:'London (UK)',es:'Londres (Reino Unido)'},sector:{en:'ON-DEMAND DELIVERY',es:'DELIVERY A DOMICILIO'},summary:{en:'Developed the backend for a London-based on-demand delivery platform operating in the UK and Spain.',es:'Desarrollé el backend de una plataforma londinense de reparto a domicilio bajo demanda, activa en Reino Unido y España.'},bullets:{en:['Built and maintained server features and APIs designed for high demand and scalability.','Internationalised the app to support additional languages.','Integrated SendGrid for email and improved notification and SMS systems.','Improved the testing structure and supported reliable releases.'],es:['Desarrollé y mantuve funcionalidades de servidor y APIs preparadas para alta demanda y escalabilidad.','Internacionalicé la aplicación para añadir idiomas.','Integré SendGrid para email y mejoré los sistemas de notificaciones y SMS.','Mejoré la estructura de pruebas y apoyé entregas fiables.']},stack:['Python','Flask','Backend APIs','PostgreSQL','SQLAlchemy','Alembic','SendGrid','Notifications','SMS','GitHub','CI/CD','Pytest','Automated testing','Internationalisation','Startup','Product']},
  {period:'JAN 2015 — MAY 2016',title:{en:'Backend Developer',es:'Desarrollador Backend'},company:'Novastone Media',location:{en:'London (UK)',es:'Londres (Reino Unido)'},sector:{en:'MESSAGING · SECURITY',es:'MENSAJERÍA · SEGURIDAD'},summary:{en:'Software development and Python testing for a company building secure, mobile-focused platforms for financial services.',es:'Desarrollo de software y pruebas en Python en una empresa de plataformas seguras orientadas a móvil para servicios financieros.'},bullets:{en:['Worked as a software developer and Python tester.'],es:['Trabajé en desarrollo de software y pruebas con Python.']},stack:['Python','Flask','SQLAlchemy','GitHub','Software testing','Startup','Product']},
  {period:'MAR 2011 — FEB 2013',title:{en:'Internship Developer',es:'Desarrollador en prácticas'},company:'Instituto Nacional de Técnica Aeroespacial (INTA)',location:{en:'Huelva (Spain)',es:'Huelva (España)'},sector:{en:'AEROSPACE · GIS',es:'AEROESPACIAL · GIS'},summary:{en:'Developed applications in the radar department, taking part in the full software lifecycle from requirements and design to implementation, installation and testing.',es:'Desarrollé aplicaciones en el departamento de radares, participando en todo el ciclo de software: requisitos, diseño, implementación, implantación y pruebas.'},bullets:{en:['Programmed microcontrollers and real-time applications.','Worked with GIS applications, Ethernet communications, USB and RS-232 ports, and communications with UAVs and drones.'],es:['Programé microcontroladores y aplicaciones en tiempo real.','Trabajé con aplicaciones GIS, comunicaciones Ethernet, puertos USB y RS-232 y comunicaciones con VANT y drones.']},stack:['Java','MySQL · phpMyAdmin','Windows · Eclipse · NetBeans','GIS','Real-time systems','Ethernet · USB · RS-232']},
  {period:'JAN 2010 — JUL 2010',title:{en:'Final Degree Project · Biomedical NLP',es:'Proyecto fin de carrera · NLP biomédico'},company:'University of Huelva',location:{en:'Huelva (Spain)',es:'Huelva (España)'},sector:{en:'RESEARCH · NLP',es:'INVESTIGACIÓN · NLP'},summary:{en:'Built a desktop application to support extractive summarisation and create gold-standard datasets for evaluating automatic biomedical text summarisation.',es:'Desarrollé una aplicación de escritorio para apoyar la creación de resúmenes extractivos y generar conjuntos Gold Standard para evaluar la generación automática de resúmenes biomédicos.'},bullets:{en:['Preprocessed text, identified language and biomedical concepts, split text into sentences and visualised concept frequency.','The project supported corpus creation and evaluation of automatic summarisation.'],es:['Preprocesaba el texto, identificaba el idioma y conceptos biomédicos, dividía el texto en frases y mostraba la frecuencia de los conceptos.','El proyecto servía de apoyo para crear corpus y evaluar sistemas de resumen automático.']},stack:['Java · Hibernate','MySQL','OpenNLP · MetaMap','JDOM · PDFBox','Google API Language','Eclipse · Scrum · Mac OS X']}
];
const experienceContentOverrides={
 'Xfera Consumer Finance':{
  summary:{
   en:'<a href="https://www.moneygo.es/es" target="_blank" rel="noopener noreferrer">Xfera Consumer Finance</a> provided financing through Grupo MásMóvil sales channels, including Yoigo. I was the company’s first developer and built the backend middleware from scratch. It connected applications and documents captured on store tablets with credit-risk assessment, document-management and financing services. Risk assessment could return a decision in one to two minutes, bringing the customer’s wait for an answer down from up to 48 hours to around five minutes. Store staff could also scan documents directly on the tablet.',
   es:'<a href="https://www.moneygo.es/es" target="_blank" rel="noopener noreferrer">Xfera Consumer Finance</a> ofrecía financiación a través de los canales de venta del Grupo MásMóvil, como Yoigo. Fui el primer desarrollador de la empresa y construí desde cero el middleware backend. Este conectaba las solicitudes y los documentos capturados en las tablets de los establecimientos con los servicios de análisis de riesgo, gestión documental y financiación. El análisis de riesgo podía devolver una decisión en uno o dos minutos y redujo la espera del cliente, que podía alcanzar las 48 horas, a unos cinco minutos. El personal de tienda también podía escanear los documentos directamente desde la tablet.'
  },
  contributionsLabel:{en:'KEY CONTRIBUTIONS',es:'CONTRIBUCIONES PRINCIPALES'},
  bullets:{
   en:[
    'Built the backend REST API from the ground up with FastAPI, defining data models for customers, orders, contracts and risk-assessment results.',
    'Connected applications and documents captured on store tablets with credit-risk assessment, document-management and financing services, enabling documents to be scanned directly in store.',
    'Integrated Cetelem for risk assessment, financing and document workflows, alongside Qvantel, Talento and CUCO for connected operational processes.',
    'Automated Yoigo application and cancellation batch processing, including fixed-width file parsing and file exchange over SFTP. Added Google Cloud Storage for batch files.',
    'Implemented PostgreSQL persistence with SQLAlchemy and Alembic migrations. Added automated tests with Pytest, CI/CD with GitHub Actions, and API documentation with OpenAPI and Swagger.',
    'Contributed to reducing the customer’s financing decision wait from up to 48 hours to around five minutes, with risk assessment returning a result in one to two minutes.',
    'Participated in interviews and the selection of two additional developers for the team.',
    'Drove the production launch in October, ahead of the original November–December target.'
   ],
   es:[
    'Desarrollé desde cero la API REST backend con FastAPI y definí los modelos de datos para clientes, pedidos, contratos y respuestas del análisis de riesgo.',
    'Conecté las solicitudes y los documentos capturados en las tablets de los establecimientos con los servicios de análisis de riesgo, gestión documental y financiación, permitiendo escanear la documentación directamente en tienda.',
    'Integré Cetelem para los flujos de análisis de riesgo, financiación y documentación, además de Qvantel, Talento y CUCO para conectar los procesos operativos.',
    'Automaticé el procesamiento por lotes de altas y cancelaciones de Yoigo, incluido el parseo de ficheros de ancho fijo y el intercambio de archivos mediante SFTP. Añadí Google Cloud Storage para almacenar los ficheros.',
    'Implementé la persistencia en PostgreSQL con SQLAlchemy y migraciones Alembic. Añadí pruebas automatizadas con Pytest, CI/CD con GitHub Actions y documentación de API con OpenAPI y Swagger.',
    'Contribuí a reducir la espera del cliente para conocer la viabilidad de la financiación de hasta 48 horas a unos cinco minutos. El análisis de riesgo devolvía una respuesta en uno o dos minutos.',
    'Participé en las entrevistas y en la selección de otros dos desarrolladores para el equipo.',
    'Impulsé la puesta en producción en octubre, antes de la previsión inicial para noviembre o diciembre.'
   ]
  },
  stack:['Python','FastAPI','REST APIs','Pydantic','SQLAlchemy','PostgreSQL','Alembic','OpenAPI','Swagger','OAuth2','JWT','Cetelem','Qvantel','Talento','CUCO','Yoigo','SFTP','Google Cloud Storage','Secret Manager','Cloud Logging','Compute Engine','Container Registry','Docker','Docker Compose','GitHub','GitHub Actions','Pytest','Automated testing','CI/CD','Flake8','Jira','Scrum']
 },
 'Savana Médica':{
  summary:{
   en:'<a href="https://savanamed.com/about-us/" target="_blank" rel="noopener noreferrer">Savana Médica</a> was founded in Silicon Valley in 2014 and moved to Madrid in 2015. It developed <a href="https://savanamed.com/savana-manager-suite/" target="_blank" rel="noopener noreferrer">clinical NLP</a> to turn free-text medical records into structured data for research and large-scale analysis. In 2016, its first clinical NLP application at scale focused on severe asthma in collaboration with <a href="https://www.gsk.com/" target="_blank" rel="noopener noreferrer">GSK</a>. The projects I worked on initially used reports from cancer studies.',
   es:'<a href="https://savanamed.com/about-us/" target="_blank" rel="noopener noreferrer">Savana Médica</a> se fundó en Silicon Valley en 2014 y trasladó su actividad a Madrid en 2015. Desarrollaba <a href="https://savanamed.com/savana-manager-suite/" target="_blank" rel="noopener noreferrer">tecnología de PLN clínico</a> para transformar informes médicos en texto libre en datos estructurados para investigación y análisis a gran escala. En 2016, su primera aplicación de PLN clínico a gran escala se centró en el asma grave junto con <a href="https://www.gsk.com/" target="_blank" rel="noopener noreferrer">GSK</a>. Los proyectos en los que trabajé empezaron con informes de estudios sobre cáncer.'
  },
  summaryAdditional:{
   en:'For hospital clients across Spain, software was installed on premises to collect and de-identify reports before sending them to Savana’s processing platform, with a dedicated database for each client. We normalised reports into an internal format to standardise information across hospitals. When an incoming report was a blood test, it followed a dedicated processing path and its individual parameters were assessed. The team manually annotated reports to evaluate processing quality. The systems handled Spanish and Catalan, while English and other languages were being added.',
   es:'Para los hospitales clientes de España se instalaba software on-premise que recogía y anonimizaba los informes antes de enviarlos a la plataforma de procesamiento de Savana, con una base de datos dedicada a cada cliente. Normalizábamos los informes en un formato interno para estandarizar la información entre hospitales. Cuando llegaba una analítica de sangre, seguía un procesamiento específico y se evaluaba cada uno de sus parámetros. El equipo etiquetaba informes manualmente para evaluar la calidad del procesamiento. Los sistemas trabajaban en castellano y catalán, mientras se incorporaban el inglés y otros idiomas.'
  },
  contributionsLabel:{en:'KEY CONTRIBUTIONS',es:'CONTRIBUCIONES PRINCIPALES'},
  bullets:{
   en:[
    'Built API endpoints for diagnostics, cardiovascular risk factors, signs and symptoms, treatments and medical terminology, using Cerberus for query validation, with filters, data transformation and automated tests.',
    'Contributed to the new v3 backend structure using Domain-Driven Design, with separate domain, application and infrastructure layers and reusable actions, services and repositories.',
    'Helped introduce ClickHouse as a column-oriented database for large-scale clinical data analysis, developing analytical queries alongside PostgreSQL persistence through SQLAlchemy and Alembic.',
    'Improved MySQL queries for finding pending records and assigning processing steps, addressing bottlenecks in the data-processing workflow.',
    'Added user profile, password and initial-settings API functionality, integrating user access with AWS Cognito.',
    'Contributed to the Django evaluation tool used to assess processing against manually labelled reports, adding pharmacovigilance alerts, legal-term acceptance and scheduled study emails and status reports through AWS SES.',
    'Added automated tests and Swagger/OpenAPI documentation, and configured linting and continuous integration in Bitbucket Pipelines.'
   ],
   es:[
    'Desarrollé endpoints para consultar diagnósticos, factores de riesgo cardiovascular, signos y síntomas, tratamientos y terminología médica, utilizando Cerberus para validar las consultas, aplicar filtros, transformar los datos y ejecutar pruebas automatizadas.',
    'Contribuí a la nueva estructura v3 del backend siguiendo diseño guiado por el dominio (DDD), con capas diferenciadas de dominio, aplicación e infraestructura y acciones, servicios y repositorios reutilizables.',
    'Participé en la incorporación de ClickHouse como base de datos columnar para analizar grandes volúmenes de datos clínicos y desarrollé consultas analíticas junto con la persistencia en PostgreSQL mediante SQLAlchemy y Alembic.',
    'Mejoré las consultas MySQL utilizadas para localizar registros pendientes y asignar etapas de procesamiento, abordando cuellos de botella en el flujo de procesamiento de datos.',
    'Añadí funcionalidades de API para perfiles de usuario, contraseñas y configuración inicial, e integré la gestión de acceso con AWS Cognito.',
    'Contribuí a la herramienta de evaluación en Django, utilizada para comparar el procesamiento con informes etiquetados manualmente. Añadí alertas de farmacovigilancia, aceptación de términos legales y correos programados para estudios e informes de estado mediante AWS SES.',
    'Añadí pruebas automatizadas y documentación de API con Swagger/OpenAPI, y configuré el análisis de estilo y la integración continua en Bitbucket Pipelines.'
   ]
  },
  stack:['Python','Flask','Django','REST APIs','Clinical NLP','EHR processing','On-premises','Data anonymisation','Multilingual processing','DDD','PostgreSQL','SQLAlchemy','Alembic','ClickHouse','MySQL','AWS Cognito','AWS SES','Boto3','Cerberus','Flasgger','Pytest','Swagger','OpenAPI','Bitbucket Pipelines','Flake8']
 },
 'Jinn':{
  summary:{
   en:'<a href="https://www.linkedin.com/company/ridee/about/" target="_blank" rel="noopener noreferrer">Jinn</a> was an on-demand delivery platform that let customers order almost anything from nearby shops, not only restaurant food. Its service brought together customer and courier apps with a back-office platform, all coordinated by a central API.',
   es:'<a href="https://www.linkedin.com/company/ridee/about/" target="_blank" rel="noopener noreferrer">Jinn</a> era una plataforma de reparto bajo demanda que permitía pedir casi cualquier cosa en comercios cercanos, no solo comida de restaurantes. El servicio conectaba las aplicaciones de clientes y repartidores con una plataforma de backoffice, todo coordinado por una API central.'
  },
  summaryAdditional:{
   en:'I contributed to backend development as the product expanded from the UK into Spain, including early work to internationalise the app. During this period, the backend team grew from five to more than twenty people and the company from around twenty to about 120 employees. With teams working across the UK and Spain and a new Bilbao office, collaboration across locations became an important part of the work.',
   es:'Contribuí al desarrollo backend durante la expansión del producto desde Reino Unido a España, incluido el trabajo inicial para internacionalizar la aplicación. En ese periodo, el equipo backend pasó de cinco a más de veinte personas y la empresa creció de unas veinte a cerca de 120. Con equipos repartidos entre Reino Unido y España y una nueva oficina en Bilbao, la colaboración entre sedes adquirió un papel importante.'
  },
  contributionsLabel:{en:'KEY CONTRIBUTIONS',es:'CONTRIBUCIONES PRINCIPALES'},
  bullets:{
   en:[
    'Developed REST API features across customer, courier and back-office workflows, supporting ordering, partner operations and delivery management.',
    'Implemented geospatial delivery-zone features and distance controls using PostgreSQL, PostGIS and GeoAlchemy2.',
    'Contributed to early app internationalisation and localisation of customer and courier workflows as the service expanded into Spain.',
    'Built and maintained payment and card-management functionality with Stripe, and supported email, SMS and push-notification integrations.',
    'Expanded automated test coverage and migrated the Admin module tests to Pytest, supporting more reliable changes as the backend team grew.'
   ],
   es:[
    'Desarrollé funcionalidades de la API REST para los flujos de clientes, repartidores y backoffice, dando soporte a los pedidos, las operaciones con comercios y la gestión de entregas.',
    'Implementé funcionalidades geoespaciales para zonas de reparto y controles de distancia mediante PostgreSQL, PostGIS y GeoAlchemy2.',
    'Contribuí a la internacionalización inicial de la aplicación y a la localización de los flujos de clientes y repartidores durante la expansión del servicio a España.',
    'Desarrollé y mantuve funcionalidades de pago y gestión de tarjetas con Stripe, además de colaborar en integraciones de email, SMS y notificaciones push.',
    'Amplié la cobertura de pruebas automatizadas y migré a Pytest las pruebas del módulo Admin, facilitando cambios más fiables durante el crecimiento del equipo backend.'
   ]
  },
  stack:['Python','Flask','REST APIs','PostgreSQL','PostGIS','GeoAlchemy2','SQLAlchemy','Alembic','Celery','Redis','Stripe','SendGrid','Twilio','Algolia','Pytest','Automated testing','CI/CD','GitHub','Startup','Product']
 },
 'StyleSage':{
  summary:{
   en:'<a href="https://www.stylesage.com/" target="_blank" rel="noopener noreferrer">StyleSage</a> developed a competitive analytics platform for fashion brands and retailers. It collected and enriched product data from retailers’ websites so customers could compare products and prices, view product histories and analyse brand assortments, such as the share of items offered in yellow. The platform also used AI to extract additional product attributes from associated images, beyond the information provided by the websites.',
   es:'<a href="https://www.stylesage.com/" target="_blank" rel="noopener noreferrer">StyleSage</a> desarrollaba una plataforma de analítica competitiva para marcas y minoristas de moda. Recopilaba y enriquecía datos de producto de las webs de los comercios para que los clientes pudieran comparar productos y precios, consultar el historial de cada producto y analizar los surtidos de las marcas, por ejemplo, qué proporción de prendas ofrecían en color amarillo. La plataforma también utilizaba IA para extraer atributos adicionales de producto a partir de las imágenes asociadas, más allá de la información que proporcionaban las propias webs.'
  },
  summaryAdditional:{
   en:'In the backend team, we built systems to collect daily crawler data, normalise it and store it in the central database.',
   es:'En el equipo backend desarrollábamos los sistemas que recopilaban los datos diarios de los crawlers, los normalizaban y los almacenaban en la base de datos central.'
  },
  contributionsLabel:{en:'KEY CONTRIBUTIONS',es:'CONTRIBUCIONES PRINCIPALES'},
  bullets:{
   en:[
    'Developed backend services to collect daily crawler data, normalise it and store it in the central database.',
    'Turned a newsletter proof of concept into a near real-time processing system. Built an asynchronous pipeline using <a href="https://docs.celeryq.dev/en/stable/" target="_blank" rel="noopener noreferrer">Celery</a>, <a href="https://www.rabbitmq.com/" target="_blank" rel="noopener noreferrer">RabbitMQ</a> and the <a href="https://developers.google.com/gmail/api" target="_blank" rel="noopener noreferrer">Gmail API</a>, as well as a small <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js</a> service to generate screenshots. Processing grew from around one thousand emails a day to thousands in seconds, clearing the backlog and removing the need to prioritise countries or brands. The new capability became a commercial feature for customers, generated revenue and improved the product.',
    'Developed APIs and supporting services for crawling, including proxy management, <a href="https://www.promptcloud.com/" target="_blank" rel="noopener noreferrer">PromptCloud</a> integration, translation through <a href="https://cloud.google.com/translate" target="_blank" rel="noopener noreferrer">Google Cloud Translation</a> and currency updates through <a href="https://openexchangerates.org/" target="_blank" rel="noopener noreferrer">OpenExchangeRates</a>.',
    'Built Smart Tagging endpoints to retrieve, update and process product predictions in batches, with data validation, permissions, tests and API documentation.',
    'Introduced an agile way of working in the backend team, setting up sprints, tickets and task breakdown. The team moved from assigning work as email requests arrived to planning it through tracked tasks.',
    'Established a culture of automated testing and CI/CD in the backend team. Created the test suite and pipelines for our services, establishing a foundation that other teams later adopted.'
   ],
   es:[
    'Desarrollé servicios backend para recopilar los datos diarios de los crawlers, normalizarlos y almacenarlos en la base de datos central.',
    'Convertí una prueba de concepto de newsletters en un sistema de procesamiento casi en tiempo real. Desarrollé una canalización asíncrona con <a href="https://docs.celeryq.dev/en/stable/" target="_blank" rel="noopener noreferrer">Celery</a>, <a href="https://www.rabbitmq.com/" target="_blank" rel="noopener noreferrer">RabbitMQ</a> y la <a href="https://developers.google.com/gmail/api" target="_blank" rel="noopener noreferrer">Gmail API</a>, además de un sencillo servicio en <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js</a> para generar capturas. El sistema pasó de procesar unos mil correos al día a miles en segundos, liberó la cola acumulada y eliminó la necesidad de priorizar países o marcas. La nueva capacidad se incorporó como una funcionalidad comercial para los clientes, generó ingresos y mejoró el producto.',
    'Desarrollé APIs y servicios de soporte para el crawling, incluidos la gestión de proxies, la integración con <a href="https://www.promptcloud.com/" target="_blank" rel="noopener noreferrer">PromptCloud</a>, la traducción con <a href="https://cloud.google.com/translate" target="_blank" rel="noopener noreferrer">Google Cloud Translation</a> y la actualización de divisas mediante <a href="https://openexchangerates.org/" target="_blank" rel="noopener noreferrer">OpenExchangeRates</a>.',
    'Desarrollé endpoints de Smart Tagging para consultar, actualizar y procesar en lotes predicciones de productos, con validación de datos, gestión de permisos, pruebas y documentación de API.',
    'Implanté una forma de trabajo ágil en el equipo backend, con sprints, tickets y división de tareas. Pasamos de asignarnos el trabajo según llegaban peticiones por email a organizarlo en tareas planificadas.',
    'Implanté la cultura de las pruebas automatizadas y del CI/CD en el equipo backend. Creé la batería de pruebas y los pipelines para nuestros servicios, estableciendo una base que después adoptaron otros equipos.'
   ]
  },
  stack:['Python','Flask','Django REST Framework','Node.js','REST APIs','Celery','RabbitMQ','PostgreSQL','InfluxDB','SQLAlchemy','Alembic','AWS S3','Boto3','Gmail API','Google Cloud Translation','PromptCloud','Scrapyd','OpenExchangeRates','Cerberus','Flasgger','Swagger/OpenAPI','Pytest','Automated testing','CI/CD','Jenkins','GitHub','Jira','Scrum','Kanban']
 }
};
roles.forEach((role)=>{
 const override=experienceContentOverrides[role.company];
 if(override){role.summary=override.summary;if(override.summaryAdditional)role.summaryAdditional=override.summaryAdditional;if(override.contributionsLabel)role.contributionsLabel=override.contributionsLabel;role.bullets=override.bullets;role.stack=override.stack}
});
const roleTitleOverrides={
 'British Airways':{en:'Senior Software Engineer',es:'Ingeniero de Software Senior'},
 'Kado Networks':{en:'Lead Backend Engineer',es:'Ingeniero Backend Lead'},
 'Xfera Consumer Finance':{en:'Lead Backend Engineer',es:'Ingeniero Backend Lead'},
 'Savana Médica':{en:'Senior Backend Engineer',es:'Ingeniero Backend Senior'},
 'StyleSage':{en:'Senior Backend Engineer',es:'Ingeniero Backend Senior'},
 'Jinn':{en:'Backend Engineer',es:'Ingeniero Backend'},
 'Novastone Media':{en:'Backend Engineer',es:'Ingeniero Backend'}
};
roles.forEach((role)=>{if(roleTitleOverrides[role.company])role.title=roleTitleOverrides[role.company]});
const skillData=[
 {name:{en:'Backend & APIs',es:'Backend y APIs'},items:{en:'Python · FastAPI · Flask · REST · OpenAPI · API integrations',es:'Python · FastAPI · Flask · REST · OpenAPI · Integraciones de API'},level:4},
 {name:{en:'Databases',es:'Bases de datos'},items:{en:'PostgreSQL · MongoDB · Redis · ClickHouse · SQLAlchemy · SQLModel',es:'PostgreSQL · MongoDB · Redis · ClickHouse · SQLAlchemy · SQLModel'},level:4},
 {name:{en:'Architecture & Distributed Systems',es:'Arquitectura y sistemas distribuidos'},items:{en:'Microservices · Async · Events · Queues · Distributed systems',es:'Microservicios · Async · Eventos · Colas · Sistemas distribuidos'},level:4},
 {name:{en:'Data Engineering',es:'Ingeniería de datos'},items:{en:'Data pipelines · Data modeling · ETL · Dagster · Pandas · NumPy',es:'Pipelines de datos · Modelado de datos · ETL · Dagster · Pandas · NumPy'},level:4},
 {name:{en:'Cloud & Infrastructure',es:'Cloud e infraestructura'},items:{en:'AWS · GCP · Docker · CI/CD · GitHub Actions',es:'AWS · GCP · Docker · CI/CD · GitHub Actions'},level:3},
 {name:{en:'Security & Authentication',es:'Seguridad y autenticación'},items:{en:'Authentication · Authorization · OAuth2 · JWT',es:'Autenticación · Autorización · OAuth2 · JWT'},level:3},
 {name:{en:'Testing & Quality',es:'Pruebas y calidad'},items:{en:'Test automation · TDD · Unit · Integration · E2E',es:'Automatización de pruebas · TDD · Unit · Integration · E2E'},level:4},
 {name:{en:'Clean Code & Practices',es:'Código limpio y buenas prácticas'},items:{en:'SOLID · Design Patterns · Code Reviews · Black',es:'SOLID · Patrones de diseño · Revisiones de código · Black'},level:4},
 {name:{en:'AI Engineering',es:'Ingeniería de IA'},items:{en:'LLMs · RAG · Agents · Tool calling · Embeddings · Vector databases',es:'LLMs · RAG · Agentes · Tool calling · Embeddings · Bases de datos vectoriales'},level:1}
];;
const jobs=document.querySelector('#jobs');
const companyLogoLinks={
 'British Airways':'https://www.britishairways.com',
 'Idoven':'https://www.idoven.ai',
 'Kado Networks':'https://www.kadonetworks.com',
 'Savana Médica':'https://savanamed.com',
 'StyleSage':'https://www.stylesage.com/',
 'Jinn':'https://www.linkedin.com/company/ridee/about/',
 'Novastone Media':'https://messagematrix.io',
 'Instituto Nacional de Técnica Aeroespacial (INTA)':'https://www.inta.es/'
};
const companyLogos={
 'British Airways':'british-airways.png',
 'Idoven':'idoven.png',
 'Kado Networks':'kado.png',
 'Xfera Consumer Finance':'xfera.png',
 'Savana Médica':'savana.png',
 'StyleSage':'stylesage.png',
 'Jinn':'jinn.png',
 'Novastone Media':'novastone.png',
 'Instituto Nacional de Técnica Aeroespacial (INTA)':'inta.png',
 'University of Huelva':'../asgere-icon.png'
};
const experienceTechLinks={
 'REST API':{
  en:'https://en.wikipedia.org/wiki/Representational_state_transfer',
  es:'https://es.wikipedia.org/wiki/Transferencia_de_estado_representacional'
 },
 'Google Cloud Secret Manager':'https://cloud.google.com/security/products/secret-manager',
 'Google Cloud Logging':'https://cloud.google.com/logging',
 'Google Compute Engine':'https://cloud.google.com/compute',
 'Google Container Registry':'https://cloud.google.com/container-registry/docs',
 'Secret Manager':'https://cloud.google.com/security/products/secret-manager',
 'Cloud Logging':'https://cloud.google.com/logging',
 'Compute Engine':'https://cloud.google.com/compute',
 'Container Registry':'https://cloud.google.com/container-registry/docs',
 'SQLAlchemy':'https://www.sqlalchemy.org/',
 'Alembic':'https://alembic.sqlalchemy.org/',
 'Pydantic':'https://docs.pydantic.dev/',
 'Pytest':'https://docs.pytest.org/',
 'OAuth2':'https://oauth.net/2/',
 'JWT':'https://jwt.io/',
 'Cetelem':'https://www.cetelem.es/',
 'Qvantel':'https://www.qvantel.com/',
 'Yoigo':'https://www.yoigo.com/',
 'SFTP':{
  en:'https://en.wikipedia.org/wiki/SSH_File_Transfer_Protocol',
  es:'https://es.wikipedia.org/wiki/SSH_File_Transfer_Protocol'
 },
 'Microsoft Azure':'https://azure.microsoft.com/',
 'Google Cloud Storage':'https://cloud.google.com/storage',
 'Google Cloud Platform (GCP)':'https://cloud.google.com/',
 'Google Cloud':'https://cloud.google.com/',
 'GCP':'https://cloud.google.com/',
 'Firestore':'https://cloud.google.com/firestore',
 'Cloud Run':'https://cloud.google.com/run',
 'AWS SES':'https://aws.amazon.com/ses/',
 'AWS SNS':'https://aws.amazon.com/sns/',
 'SES':'https://aws.amazon.com/ses/',
 'SNS':'https://aws.amazon.com/sns/',
 'AWS S3':'https://aws.amazon.com/s3/',
 'GitHub Actions':'https://github.com/features/actions',
 'Zalando Connexion':'https://github.com/spec-first/connexion',
 'Stripe':'https://stripe.com/',
 'ABBYY':'https://www.abbyy.com/',
 'SendWithUs':'https://www.sendwithus.com/',
 'Mixpanel':'https://mixpanel.com/',
 'Docker':'https://www.docker.com/',
 'Sentry':'https://sentry.io/',
 'PostGIS':'https://postgis.net/',
 'GeoAlchemy2':'https://geoalchemy-2.readthedocs.io/en/latest/',
 'Redis':'https://redis.io/',
 'Twilio':'https://www.twilio.com/',
 'SendGrid':'https://sendgrid.com/',
 'Algolia':'https://www.algolia.com/',
 'Django':'https://www.djangoproject.com/',
 'Cerberus':'https://docs.python-cerberus.org/',
 'Boto3':'https://boto3.amazonaws.com/v1/documentation/api/latest/index.html',
 'Flasgger':'https://github.com/flasgger/flasgger',
 'clinical NLP':'https://savanamed.com/savana-manager-suite/',
 'ClickHouse':'https://clickhouse.com/',
 'Celery':'https://docs.celeryq.dev/en/stable/',
 'RabbitMQ':'https://www.rabbitmq.com/',
 'Gmail API':'https://developers.google.com/gmail/api',
 'Node.js':'https://nodejs.org/',
 'PromptCloud':'https://www.promptcloud.com/',
 'Google Cloud Translation':'https://cloud.google.com/translate',
 'OpenExchangeRates':'https://openexchangerates.org/',
 'InfluxDB':'https://www.influxdata.com/',
 'Jenkins':'https://www.jenkins.io/',
 'Scrapyd':'https://scrapyd.readthedocs.io/en/latest/',
 'Django REST Framework':'https://www.django-rest-framework.org/',
 'MySQL':'https://www.mysql.com/',
 'AWS Cognito':'https://aws.amazon.com/cognito/',
 'Bitbucket Pipelines':'https://bitbucket.org/product/features/pipelines',
 'FastAPI':'https://fastapi.tiangolo.com/',
 'SSIM':'https://www.iata.org/en/publications/manuals/standard-schedules-information/',
 'Dagster':'https://dagster.io/',
 'React':'https://react.dev/',
 'TypeScript':'https://www.typescriptlang.org/',
 'TDD':{
  en:'https://en.wikipedia.org/wiki/Test-driven_development',
  es:'https://es.wikipedia.org/wiki/Desarrollo_guiado_por_pruebas'
 },
 'DDD':{
  en:'https://en.wikipedia.org/wiki/Domain-driven_design',
  es:'https://es.wikipedia.org/wiki/Dise%C3%B1o_guiado_por_el_dominio'
 },
 'PostgreSQL':'https://www.postgresql.org/',
 'Azure':'https://azure.microsoft.com/',
 'PyArrow':'https://arrow.apache.org/docs/python/',
 'Pandas':'https://pandas.pydata.org/',
 'OpenAPI':'https://www.openapis.org/',
 'Swagger':'https://swagger.io/',
 'Flask':'https://flask.palletsprojects.com/',
 'AWS':'https://aws.amazon.com/',
 'S3':'https://aws.amazon.com/s3/'
};
const experienceTechPattern=new RegExp(`\\b(${Object.keys(experienceTechLinks).sort((a,b)=>b.length-a.length).join('|')})\\b`,'gi');
function linkExperienceTech(text,enabled,lang){
 if(!enabled)return text;
 return text.split(/(<a\b[^>]*>[\s\S]*?<\/a>)/gi).map((part,index)=>{
  if(index%2)return part;
  return part.replace(experienceTechPattern,(term)=>{
   const link=experienceTechLinks[Object.keys(experienceTechLinks).find((key)=>key.toLowerCase()===term.toLowerCase())];
   const href=typeof link==='string'?link:(link[lang]||link.en);
   return `<a href="${href}" target="_blank" rel="noopener noreferrer">${term}</a>`;
  });
 }).join('');
}
function normalizeExperienceCopy(text,company){
 if(company!=='Idoven')return text;
 return text.replaceAll('AWS, Google Cloud and Microsoft Azure','AWS, GCP and Azure').replaceAll('AWS, Google Cloud y Microsoft Azure','AWS, GCP y Azure');
}
function renderJobs(lang){
 if(!jobs)return;
 jobs.innerHTML=roles.map((r)=>{
  const linkTech=r.company==='Kado Networks'||r.company==='British Airways'||r.company==='Idoven'||r.company==='Xfera Consumer Finance'||r.company==='Savana Médica'||r.company==='StyleSage'||r.company==='Jinn';
  const logo=companyLogos[r.company];
  const alt=r.company==='University of Huelva'?(lang==='es'?'Logotipo de AsGeRe, proyecto fin de carrera':'AsGeRe final degree project logo'):(lang==='es'?`Logotipo de ${r.company}`:`${r.company} logo`);
  const logoKey=logo==='../asgere-icon.png'?'asgere-icon':logo?logo.split('.')[0]:'';
  const image=logo?`<img src="assets/logos/${logo}" alt="${alt}" loading="lazy" decoding="async">`:'';
  const external=companyLogoLinks[r.company];
  const logoElement=logo?(external?`<a class="job-logo job-logo-link job-logo-${logoKey}" href="${external}" target="_blank" rel="noopener noreferrer" aria-label="${lang==='es'?`Abrir el sitio de ${r.company} en una pestaña nueva`:`Open ${r.company} website in a new tab`}">${image}</a>`:`<span class="job-logo job-logo-${logoKey}">${image}</span>`):`<span class="job-logo" aria-hidden="true"></span>`;
  return `<details class="job"><summary>${logoElement}<span class="job-head"><h3 class="job-title">${r.title[lang]}</h3><span class="job-company">${r.company} <i>· ${r.location[lang]}</i></span><span class="job-period">${r.period}</span></span><span class="job-sectors" role="list" aria-label="${lang==='es'?'Sectores':'Sectors'}">${r.sector[lang].split(' · ').map(s=>`<span role="listitem">${s}</span>`).join('')}</span><span class="expand" aria-hidden="true"></span></summary><div class="job-details"><p class="job-summary">${linkExperienceTech(normalizeExperienceCopy(r.summary[lang],r.company),linkTech,lang)}</p>${r.summaryAdditional?`<p class="job-summary">${linkExperienceTech(normalizeExperienceCopy(r.summaryAdditional[lang],r.company),linkTech,lang)}</p>`:''}${r.contributionsLabel?`<div class="stack-label">${r.contributionsLabel[lang]}</div>`:''}<ul>${r.bullets[lang].map(b=>`<li>${linkExperienceTech(normalizeExperienceCopy(b,r.company),linkTech,lang)}</li>`).join('')}</ul><div class="stack-label">${lang==='en'?'TECHNOLOGIES & STACK':'TECNOLOGÍAS Y STACK'}</div><div class="tech-tags">${r.stack.flatMap(t=>t.split(' · ')).map(t=>`<span>${t}</span>`).join('')}</div></div></details>`;
 }).join('');
}
function renderSkills(lang){
 const skillList=document.querySelector('#skillList');if(!skillList)return;
 const ratings={en:['Base','Competent','Advanced','Expert'],es:['Inicial','Competente','Avanzado','Experto']};
 skillList.innerHTML=skillData.map(s=>{
  const rating=ratings[lang][s.level-1];
  const label=`${s.level}/4 - ${rating}`;
  const name=s.name[lang].replaceAll('&','&amp;');
  return `<article class="skill-row"><div class="skill-info"><h3>${s.name[lang]}</h3><div class="skill-techs" role="list" aria-label="${lang==='es'?'Tecnologías':'Technologies'}">${s.items[lang].split(' · ').map(item=>`<span role="listitem">${item}</span>`).join('')}</div></div><div class="skill-meter-row"><div class="meter" role="progressbar" aria-label="${name}" aria-valuemin="0" aria-valuemax="4" aria-valuenow="${s.level}" aria-valuetext="${label}">${[1,2,3,4].map(level=>`<span class="meter-segment level-${level}${level<=s.level?' is-filled':''}" aria-hidden="true"></span>`).join('')}</div></div></article>`
 }).join('')
}
function setLanguage(lang,persist=true){document.documentElement.lang=lang;document.querySelectorAll('[data-en][data-es]').forEach(el=>{el.innerHTML=el.dataset[lang]});document.querySelectorAll('[data-en-aria-label][data-es-aria-label]').forEach(el=>el.setAttribute('aria-label',el.dataset[lang+'AriaLabel']));document.querySelectorAll('.lang-switch button').forEach(b=>{const active=b.dataset.lang===lang;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active))});document.title=document.body.dataset.page==='cookies'?(lang==='es'?'Política de cookies · Txema Bermúdez':'Cookie policy · Txema Bermúdez'):'Txema Bermúdez - Software Engineer';document.querySelector('.lang-switch').setAttribute('aria-label',lang==='es'?'Selector de idioma':'Language selector');document.querySelector('header nav[aria-label]').setAttribute('aria-label',lang==='es'?'Navegación principal':'Main navigation');applyTheme(document.documentElement.dataset.theme||'light');document.querySelectorAll('.social-linkedin').forEach(a=>{a.href=`https://www.linkedin.com/in/josemariabermudez/?locale=${lang==='es'?'es-ES':'en-US'}`;a.setAttribute('aria-label',lang==='es'?'Perfil de LinkedIn':'LinkedIn profile')});renderJobs(lang);renderSkills(lang);if(persist){try{localStorage.setItem('txb-lang-choice',lang)}catch(e){}}}
const themeToggle=document.querySelector('#themeToggle');
const systemTheme=window.matchMedia('(prefers-color-scheme: dark)');
let themePreference='system';
try{const savedTheme=localStorage.getItem('txb-theme');if(savedTheme==='dark'||savedTheme==='light')themePreference=savedTheme}catch(e){}
function applyTheme(theme){
 document.documentElement.dataset.theme=theme;
 const lang=document.documentElement.lang;
 const label=theme==='dark'?(lang==='es'?'Cambiar a modo claro':'Switch to light mode'):(lang==='es'?'Cambiar a modo oscuro':'Switch to dark mode');
 themeToggle.setAttribute('aria-label',label);themeToggle.title=label;
 const themeColor=document.querySelector('meta[name="theme-color"]');if(themeColor)themeColor.content=theme==='dark'?'#0c1424':'#101b35';
}
function syncTheme(){applyTheme(themePreference==='system'?(systemTheme.matches?'dark':'light'):themePreference)}
systemTheme.addEventListener('change',()=>{if(themePreference==='system')syncTheme()});
themeToggle.addEventListener('click',()=>{themePreference=document.documentElement.dataset.theme==='dark'?'light':'dark';try{localStorage.setItem('txb-theme',themePreference)}catch(e){}syncTheme()});
document.querySelectorAll('.lang-switch button').forEach(b=>b.addEventListener('click',()=>setLanguage(b.dataset.lang)));
syncTheme();
const preferredLanguage=(navigator.languages&&navigator.languages[0])||navigator.language||'';const normalizedLanguage=preferredLanguage.trim().toLowerCase();const browserPrefersSpanish=normalizedLanguage==='es'||normalizedLanguage.startsWith('es-')||normalizedLanguage.startsWith('es_')||normalizedLanguage==='spanish'||normalizedLanguage.startsWith('spanish ')||normalizedLanguage==='español'||normalizedLanguage.startsWith('español ');let language=browserPrefersSpanish?'es':'en';try{const savedLanguage=localStorage.getItem('txb-lang-choice');if(savedLanguage==='es'||savedLanguage==='en')language=savedLanguage}catch(e){}setLanguage(language,false);

/* Consent choices are kept on-device; no analytics service is loaded by this site. */
const consentDialog=document.querySelector('#consentDialog');
const consentLauncher=document.querySelector('#consentLauncher');
const analyticsConsent=document.querySelector('#analyticsConsent');
const consentPreferences=document.querySelector('#consentPreferences');
const consentPreferencesToggle=document.querySelector('#consentPreferencesToggle');
function readConsent(){try{return JSON.parse(localStorage.getItem('txb-consent')||'null')}catch(e){return null}}
function saveConsent(analytics,choice){try{localStorage.setItem('txb-consent',JSON.stringify({necessary:true,analytics:!!analytics,choice,updatedAt:new Date().toISOString()}))}catch(e){} consentDialog.close();consentLauncher.hidden=true}
function openConsent(showPreferences=false){
 const saved=readConsent();analyticsConsent.checked=!!(saved&&saved.analytics);
 consentPreferences.hidden=!showPreferences;
 consentPreferencesToggle.setAttribute('aria-expanded',String(showPreferences));
 if(!consentDialog.open)consentDialog.showModal();
 (showPreferences?document.querySelector('#consentSave'):document.querySelector('#consentAccept')).focus();
}
consentLauncher.hidden=!!readConsent();
consentLauncher.addEventListener('click',()=>openConsent(false));
const consentManageInline=document.querySelector('#consentManageInline');
if(consentManageInline)consentManageInline.addEventListener('click',()=>openConsent(true));
document.querySelector('#consentAccept').addEventListener('click',()=>saveConsent(true,'accepted'));
document.querySelector('#consentReject').addEventListener('click',()=>saveConsent(false,'rejected'));
document.querySelector('#consentClose').addEventListener('click',()=>consentDialog.close());
consentPreferencesToggle.addEventListener('click',()=>{
 const expanded=consentPreferencesToggle.getAttribute('aria-expanded')!=='true';
 consentPreferences.hidden=!expanded;
 consentPreferencesToggle.setAttribute('aria-expanded',String(expanded));
 if(expanded)document.querySelector('#consentSave').focus();
});
document.querySelector('#consentSave').addEventListener('click',()=>saveConsent(analyticsConsent.checked,'custom'));
document.querySelector('#consentPolicyLink').addEventListener('click',()=>consentDialog.close());
consentDialog.addEventListener('click',event=>{if(event.target===consentDialog)consentDialog.close()});

