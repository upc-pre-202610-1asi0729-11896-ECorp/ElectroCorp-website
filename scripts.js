/* ==========================================
   SMART SEARCH ENGINE ON PAGE (AUTOMATIC SCROLL)
   ========================================== */
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const btnBuscar = document.getElementById('btn-buscar'); 

    if (searchInput && btnBuscar) {
        
        // 1. Dictionary: Keywords -> HTML section ID
        const diccionarioSecciones = {
            'inicio': 'hero',
            'descripcion': 'description',
            'que es': 'description',
            'startup': 'description',
            'objetivos': 'goals',
            'mision': 'goals',
            'servicios': 'service',
            'planes': 'service',
            'precios': 'service',
            'gratis': 'service',
            'pagos': 'service',
            'testimonios': 'reviews',
            'opiniones': 'reviews',
            'que dice la gente': 'reviews',
            'enchufes': 'device',
            'dispositivos': 'device',
            'hardware': 'device',
            'soporte': 'contact',
            'contacto': 'contact',
            'boletin': 'contact'
        };

        const realizarBusqueda = () => {
            const termino = searchInput.value.toLowerCase().trim();
            if (termino === '') return; // If I didn't write anything, nothing happens.

            let seccionEncontrada = null;

            // 2. We check if what we write matches our dictionary
            for (const [clave, idSeccion] of Object.entries(diccionarioSecciones)) {
                if (termino.includes(clave)) {
                    seccionEncontrada = document.getElementById(idSeccion);
                    break; // If you find one, stop the search.
                }
            }

            // 3. We execute the action
            if (seccionEncontrada) {
                // Smoothly travel to the section
                seccionEncontrada.scrollIntoView({ behavior: 'smooth' });
                searchInput.value = ''; // Clear the text box
            } else {
                // Message if you can't find anything
                alert(`No encontramos resultados para "${termino}". Intenta buscar "planes", "hardware" o "soporte".`);
            }
        };

        // Listen to the click on the magnifying glass
        btnBuscar.addEventListener('click', realizarBusqueda);

        // Listen for the "Enter" key for added convenience
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault(); // Prevents the page from attempting to reload
                realizarBusqueda();
            }
        });
    }
});


/* ==========================================
   SUBSCRIPTION NEWSLETTER FUNCTIONALITY
   ========================================== */
document.getElementById('form-suscripcion')?.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the page from reloading
    
    const email = document.getElementById('email-boletin').value;
    const mensaje = document.getElementById('mensaje-suscripcion');
    
    // Here (in the future) you would send the data to your MySQL/MongoDB database
    console.log("Nuevo lead capturado:", email); 
    
    mensaje.innerText = "¡Gracias por unirte a la revolución energética! Te hemos enviado un correo de confirmación.";
    mensaje.style.display = "block";
    
    // Clear the input
    document.getElementById('form-suscripcion').reset();
    
    // Hide message after 4 seconds
    setTimeout(() => {
        mensaje.style.display = "none";
    }, 4000);
});

/* ==========================================
   TRANSLATION SYSTEM (i18n)
   Default: English (Native HTML)
   ========================================== */

const translations = {
    es: {
        /* Spanish Text */
        nav_home: "Inicio",
        nav_desc: "Descripción",
        nav_goals: "Objetivos",
        nav_plans: "Planes",
        nav_reviews: "Testimonios",
        nav_smart: "Enchufes Smart",
        nav_support: "Soporte",
        hero_title: "Domina el consumo de tu hogar",
        hero_subtitle: "La fusión definitiva entre Sensores IoT e Inteligencia de Consumo.",
        desc_title: "Descripción de la Start-Up",
        desc_text1: "Es una startup de tecnología enfocada en democratizar la domótica y la eficiencia energética para los hogares peruanos.",
        desc_text2: "Actualmente, el convertir una casa tradicional en un 'hogar inteligente' es percibido como un lujo costoso, que requiere modificar el cableado eléctrico, contratar técnicos especializados y lidiar con aplicaciones genéricas que no reflejan la realidad del consumo local o que simplemente son complicados de comprender. Además, los altos costos de energía eléctrica son una preocupación constante para las familias y negocios nuevos.",
        desc_text3: "Hemos desarrollado un ecosistema IoT (Internet de las Cosas) plug-and-play que se instala en minutos sobre los interruptores y enchufes existentes, sin necesidad de romper paredes, quebrar techos, ni alterar la red eléctrica. A través de nuestra plataforma web y móvil, los usuarios pueden controlar sus electrodomésticos de forma remota, podrán programar horarios de encendido y monitorear el consumo de energía de su hogar en tiempo real.",
        goals_title: "Nuestros Objetivos",
        goals_text: "Desarrollar un ecosistema de Internet de las Cosas (IoT) de arquitectura plug-and-play de fácil entendimiento que permita a las familias y nuevos negocios en el Perú gestionar su consumo eléctrico de manera eficiente, optimizando su gasto económico y fomentando la sostenibilidad a través de una plataforma de software: una app y/o sitio web.",
        plans_title: "Nuestros Planes",
        plans_subtitle: "Elige el plan que mejor se adapte a tu consumo y tamaño de infraestructura.",
        plan_free_price: "S/ 0 <span>/mes</span>",
        plan_free_desc: "Ideal para departamentos y casas tradicionales.",
        plan_free_li1: "Hasta 3 enchufes inteligentes",
        plan_free_li2: "Monitoreo de watts en tiempo real",
        plan_free_li3: "App ElectroCorp Básica",
        btn_start: "Empezar Gratis",
        plan_ent_price: "A Medida",
        plan_ent_desc: "Ideal para empresas, oficinas y casas grandes.",
        plan_ent_li1: "Dispositivos Ilimitados",
        plan_ent_li2: "Dashboard Administrativo Web",
        plan_ent_li3: "Soporte técnico 24/7",
        btn_contact: "Contactar Ventas",
        reviews_title: "Lo que dicen nuestros usuarios:",
        review_1: '"La precisión con la que ElectroCorp mide los watts de mi PC es increíble. Gracias a las alertas de sobrecarga, evité que se quemara mi fuente de poder."',
        review_2: '"Poder apagar la cafetera y las luces de la sala desde el trabajo con la ElectroCorpAPP es un alivio total. Mi recibo de luz bajó un 25% el primer mes."',
        review_3: '"Implementamos los sensores en toda la oficina. Ahora tenemos un dashboard centralizado que nos dice exactamente dónde estamos desperdiciando energía."',
        device_title: "Sistemas I.O.T. de ElectroCorp",
        device_subtitle: "Enchufes Inteligentes a tu alcance",
        contact_title: "Únete a la Revolución Eléctrica",
        contact_subtitle: "El futuro es eficiente. Suscríbete para recibir consejos de ahorro, actualizaciones de la app y ofertas exclusivas en nuestro próximo pack de enchufes inteligentes.",
        btn_send: "Enviar",
        footer_rights: "Todos los derechos reservados."
    },
    en: {
        /* Original Text */
        nav_home: "Home",
        nav_desc: "Description",
        nav_goals: "Goals",
        nav_plans: "Pricing",
        nav_reviews: "Reviews",
        nav_smart: "Smart Plugs",
        nav_support: "Support",
        hero_title: "Take control of your home's electricity consumption",
        hero_subtitle: "The ultimate fusion between IoT Sensors and Consumer Intelligence",
        desc_title: "Start-Up Description",
        desc_text1: "We are a tech startup focused on democratizing home automation and energy efficiency for Peruvian households.",
        desc_text2: "Currently, converting a traditional house into a 'smart home' is perceived as a costly luxury, requiring electrical wiring modifications, hiring specialized technicians, and dealing with generic applications that do not reflect local consumption realities or are simply complicated to understand. Furthermore, high electricity costs are a constant concern for families and new businesses.",
        desc_text3: "We have developed a plug-and-play IoT (Internet of Things) ecosystem that installs in minutes over existing switches and outlets, without the need to break walls, smash ceilings, or alter the electrical grid. Through our web and mobile platform, users can control their appliances remotely, schedule turn-on times, and monitor their home's energy consumption in real-time.",
        goals_title: "Our Goals",
        goals_text: "To develop an easy-to-understand plug-and-play Internet of Things (IoT) ecosystem that allows families and new businesses in Peru to efficiently manage their electrical consumption, optimizing their economic expenses and promoting sustainability through a software platform: an app and/or website.",
        plans_title: "Our Plans",
        plans_subtitle: "Choose the plan that best fits your consumption and infrastructure size.",
        plan_free_price: "S/ 0 <span>/mo</span>",
        plan_free_desc: "Ideal for apartments and traditional homes.",
        plan_free_li1: "Up to 3 smart plugs",
        plan_free_li2: "Real-time watt monitoring",
        plan_free_li3: "Basic ElectroCorp App",
        btn_start: "Start for Free",
        plan_ent_price: "Custom",
        plan_ent_desc: "Ideal for businesses, offices, and large homes.",
        plan_ent_li1: "Unlimited Devices",
        plan_ent_li2: "Web Administrative Dashboard",
        plan_ent_li3: "24/7 Technical Support",
        btn_contact: "Contact Sales",
        reviews_title: "What our users say:",
        review_1: '"The precision with which ElectroCorp measures my PC\'s watts is incredible. Thanks to the overload alerts, I prevented my power supply from burning out."',
        review_2: '"Being able to turn off the coffee maker and living room lights from work with the ElectroCorpAPP is a total relief. My light bill dropped 25% the first month."',
        review_3: '"We implemented the sensors throughout the office. Now we have a centralized dashboard that tells us exactly where we are wasting energy."',
        device_title: "ElectroCorp I.O.T. Systems",
        device_subtitle: "Smart Plugs at your fingertips",
        contact_title: "Join the Electrical Revolution",
        contact_subtitle: "The future is efficient. Subscribe to receive saving tips, app updates, and exclusive offers on our upcoming smart plug pack.",
        btn_send: "Submit",
        footer_rights: "All rights reserved."
    }
};

let currentLanguage = 'en';

function applyTranslations(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // Preservamos íconos si existen
            if (element.innerHTML.includes('<i class="fa')) {
                const icon = element.querySelector('i').outerHTML;
                element.innerHTML = `${icon} ${translations[lang][key]}`;
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });

    // Actualizar Placeholders
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.placeholder = lang === 'en' ? "Search keyword or question" : "Buscar palabra clave o pregunta";
    }

    // Actualizar texto del botón de idioma
    document.getElementById('lang-text').innerText = lang === 'en' ? 'ES' : 'EN';
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
    applyTranslations(currentLanguage);
}


/* ==========================================
   CONTROLLED GLOBAL AUDIO SYSTEM
   ========================================== */
document.addEventListener('DOMContentLoaded', () => {
    const musica = document.getElementById('musical-background');
    const btnAudio = document.getElementById('btn-audio');0  
    const iconoAudio = document.getElementById('icono-audio');

    if (musica && btnAudio) {
        musica.volume = 0.3; // Maintains smooth volume (30%)
        let estaReproduciendo = false;

        btnAudio.addEventListener('click', () => {
            if (estaReproduciendo) {
                musica.pause();
                // Change the icon to off
                iconoAudio.classList.remove('fa-volume-up');
                iconoAudio.classList.add('fa-volume-off');
            } else {
                musica.play();
                // Change the icon to on.
                iconoAudio.classList.remove('fa-volume-off');
                iconoAudio.classList.add('fa-volume-up');
            }
            estaReproduciendo = !estaReproduciendo;
        });
    }
});
