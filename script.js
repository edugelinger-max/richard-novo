// Header Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.main-header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});



const translations = {
    en: {
        nav_home: "HOME",
        nav_about: "ABOUT",
        nav_collections: "COLLECTIONS",
        nav_where: "WHERE TO BUY",

        // About
        about_title: "ABOUT",
        about_text1: "Born in SÃ£o Paulo, Brazil, Richard Fiszman discovered his passion for jewelry through his family's love of craftsmanship. After inheriting a box of gemstones from his grandparents, he developed a fascination that evolved into a lifelong pursuit. His travels through Thailand, China and the United States deepened his knowledge and inspired his aesthetic.",
        about_text2: "Before dedicating himself to jewelry, Richard trained as a chef in the world of New York haute cuisine, learning precision and creativity, the very qualities he now brings to every piece he designs. After his culinary career, Richard devoted himself to years of gemological study, and focuses on exceptional gemstones, with a focus on Brazilian varieties such as tourmaline, rubellite, ParaÃ­ba tourmaline, and emerald. Guided by art, architecture, and travel, his creations tell stories through color, light, and form. His work, under the Fiszman brand, is internationally recognized, having been showcased at the Couture Show, Bergdorf Goodman, and Marissa Collections.",

        // Brand Philosophy
        phil_title: "BRAND <span class='serif-italic'>philosophy</span>",
        phil_text1: "FISZMAN always chooses the finest stonesâ€”either colored stones, or yellow and white diamonds. \"For me, the glamour is in the gems. The gems come first, then I work with gold to create the architecture or decorative frame that showcases the stones,\" he notes. His inspirations are drawn from design and culture, often taking old word references translated for the modern day. He credits travel with most of his design inspiration. Each piece carries a story. Each design is born from a memory, an emotion, or discovery, then translated into jewels by Richard's imagination.",
        phil_text2: "In recent years, he has moved into using special Brazilian stones, such as fine green tourmaline and rubellite, as well bi-color rubellite, and brightly colored Paraiba tourmaline and emerald.",

        // Creative Process
        video_subtitle: "CRUZEIRO MINE CONVIDA",
        video_title: "Richard Fiszman",
        video_headline: "Joalheiro visita Ã <br>Mina do Cruzeiro",
        video_overlay: "speechless, right? I have to thank you.",
        process_logo_text: "<strong>Cruzeiro</strong> & HERITAGE | Mina", // Keep HTML or specific styling
        process_desc: "In 2022, Fiszman was selected by the legendary Cruzeiro Mine of Minas Gerais, Brazil to collaborate on a collection of top-quality rubellite and tourmaline pieces. In this mine-to-market model, Fiszman has created a collection of entirely traceable Brazil-made products that have gained attention in Brazil and worldwide. The careful process of curating the world-class Cruzeiro gems is the result of careful collaboration.",

        // Collections
        coll_title: "HERITAGE COLLECTION",
        coll_desc: "The Heritage Collection honors the roots of jewelry making, combining classic techniques with contemporary design. Each piece is a tribute to the timeless beauty of natural gemstones, featuring bold cuts and intricate settings that highlight the stone's unique character. This collection represents the foundation of the Fiszman brand: respect for tradition and a passion for innovation.",

        // Certification
        cert_text: "The mineâ€™s exceptional gems and Richardâ€™s expertise yield true works of art, elevating Cruzeiroâ€™s natural gems to the highest levels of artistry. Every piece in the collection is one-of-a kind, a truly Brazilian work of art found nowhere else in the world. Each piece includes a certificate of origin and a full report from the International Gemological Institute (IGI).",

        // Heritage II
        heritage2_title: "HERITAGE II COLLECTION",
        heritage2_text1: "In 2025, Richard added newer, more wearable pieces to complement his original Heritage Collection, which contained many special occasion pieces.",
        heritage2_text2: "The mine's exceptional gems and Richard's expertise are still apparent in this collection, in smaller stone sizes to work with more casual looks and occasions. Every piece in the collection can be worn from morning to night. Each piece includes a certificate of origin and a full report from the International Gemological Institute (IGI).",

        // Palmas
        palmas_title: "PALMAS COLLECTION",
        palmas_text1: "Similar to the Heritage Collection in that it is inspired by Brazilian nature, the Palmas Collection by Fiszman was born after an inspirational trip to Goiana, Brazil.",
        palmas_text2: "The collection uses only Brazilian stones, as well as tucum, which is the seed of a species of palm tree native to the Amazon. In this collection, Richard works the Brazilian stones in unexpected ways, carving them into organic forms and shapes, including feathers and leaves. The tucum seed, which holds significant cultural and spiritual meaning, is another unexpected element of these creations. Combined with the Brazilian stones, the look is unique and entirely original, and appeals to a range of clientele in Brazil and abroad.",

        // All Day Long
        allday_title: "ALL DAY LONG COLLECTION",
        allday_text: "Though he is known for spectacular creations, Richard also offers what he calls \"all day long\" pieces. This is jewelry that works for any occasion--and feels effortless, personal, and alive with character. These pieces are elegant but not fussy, comfortable yet visually striking, working with smaller but high-quality diamonds and white or yellow 18K gold. The goal is jewelry that isn't just wornâ€”it becomes part of someone's signature look, all day long. These pieces are often purchased by women looking for a classic piece, as well as clients searching for a simple but specific birthday or anniversary gift.",

        // Classic
        classic_title: "CLASSIC COLLECTION",
        classic_text: "In these pieces, the stones come first. Whether it is top-quality diamonds or other fine gemstones, Fiszman places the stone at the center of the story. These are special pieces for special occasions, for lovers of jewelry who seek a classic statement that is not tied to fashion or fast jewelry.",

        // Inspiration
        insp_title: "FISZMAN INSPIRATION",
        insp_1_title: "SAINTE-CHAPELLE<br>IN PARIS, FRANCE",
        insp_1_text: "\"The Sainte-Chapelle feels like a jewelbox, with its walls almost completely made of stained glass. There are deep reds, similar to the rubellite I use, as well as deep sapphire blues, and touches of gold that change throughout the day, just like light moving through a cut gem. Every detail feels carefully crafted. As a jeweler, I can't help but see the connection, this perfect balance between structure and beauty. I will never forget the first time I visited.\"",
        insp_2_title: "THE BROOKLYN BRIDGE",
        insp_2_text: "As a child, Richard visited New York and was mesmerized by the city's pulse, the skyline, and particularly the architecture of the bridges, anticipating the excitement of Manhattan. Among them, the Brooklyn Bridge stood apart. Its gothic arches remained with him, and years later, that same fascination found form in a piece of jewelry: an earring that echoes the bridge's architecture, a long held memory transformed in tangible art though gemstones and metal.",
        insp_3_title: "STAIRCASE AT<br>MUSÃ‰E GUSTAVE<br>MOREAU IN PARIS",
        insp_3_text: "\"The Art Nouveau spiral staircase is like a piece of jewelry brought to life. There's a sumptuousness to the way the iron twists, curves and coils. As a jeweler, I can't help but see it in terms of design: the staircase embodies the same principles I use in my work: careful attention to curves, balance, and proportion, always designed to suit the features and personalities of my clients.\"",
        insp_4_title: "BAMBOO WEAVING",
        insp_4_text: "During a trip to Asia to display his works at a jewelry fair, Richard became fascinated by the many uses of woven bamboo. In architecture, Richard noted the frequent use in walls, screens, roofs, and even structural frameworks and scaffoldings, in which the structure was also a pleasing pattern. Just like gold, bamboo is a remarkably strong and versatile material, and its use in jewelry art is both structural and decorative.",

        // Where to Buy
        wtb_where: "WHERE",
        wtb_tobuy: "to buy",
        wtb_text1: "At Fiszman, true luxury is permanence and meaning. Each piece is born from the earth, shaped by history, refined by culture and design with craftsmanship and artistry.",
        wtb_text2: "Fiszman pieces have been exhibited at several Couture Shows, at retail locations including Bergdorf Goodman in New York City and are currently available at Marissa Collections in Palm Beach and The Jewelry Edit.",

        // Media Coverage
        media_title: "MEDIA COVERAGE",
        media_text: "The quality and the provenance of the gems used in Fiszman pieces have not only captured the attention of consumers, but also experts from gem and gemology magazines abroad who have documented the importance of his designs and craftsmanship.",

        // Footer
        footer_nav_title: "NAVIGATION",
        fo_home: "Home",
        fo_about: "About",
        fo_coll: "Collections",
        fo_wtb: "Where to Buy",
        fo_press: "Press",
        footer_care_title: "CUSTOMER CARE",
        fo_contact: "Contact Us",
        fo_ship: "Shipping & Returns",
        fo_terms: "Terms & Conditions",
        fo_privacy: "Privacy Policy",
        footer_follow_title: "FOLLOW US",
        footer_lorem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        footer_copy: "&copy; 2026 FISZMAN JEWELRY. ALL RIGHTS RESERVED."
    },
    pt: {
        nav_home: "HOME",
        nav_about: "SOBRE",
        nav_collections: "COLEÃ‡Ã•ES",
        nav_where: "ONDE COMPRAR",

        // About
        about_title: "SOBRE",
        about_text1: "Nascido em SÃ£o Paulo, Brasil, Richard Fiszman descobriu sua paixÃ£o por joias atravÃ©s do amor de sua famÃ­lia pelo trabalho artesanal. Depois de herdar uma caixa de pedras preciosas de seus avÃ³s, desenvolveu um fascÃ­nio que evoluiu para uma busca de vida inteira. Suas viagens pela TailÃ¢ndia, China e Estados Unidos aprofundaram seu conhecimento e inspiraram sua estÃ©tica.",
        about_text2: "Antes de se dedicar Ã  joalheria, Richard treinou como chef no mundo da alta gastronomia de Nova York, aprendendo precisÃ£o e criatividade, as mesmas qualidades que agora traz para cada peÃ§a que desenha. ApÃ³s sua carreira culinÃ¡ria, Richard dedicou-se a anos de estudo gemolÃ³gico, focando em pedras excepcionais, com Ãªnfase em variedades brasileiras como turmalina, rubelita, turmalina ParaÃ­ba e esmeralda. Guiado pela arte, arquitetura e viagens, suas criaÃ§Ãµes contam histÃ³rias atravÃ©s da cor, luz e forma. Seu trabalho, sob a marca Fiszman, Ã© reconhecido internacionalmente, tendo sido exibido no Couture Show, Bergdorf Goodman e Marissa Collections.",

        // Brand Philosophy
        phil_title: "FILOSOFIA DA <span class='serif-italic'>marca</span>",
        phil_text1: "FISZMAN sempre escolhe as melhores pedrasâ€”sejam pedras coloridas, ou diamantes amarelos e brancos. \"Para mim, o glamour estÃ¡ nas gemas. As gemas vÃªm primeiro, entÃ£o trabalho com o ouro para criar a arquitetura ou moldura decorativa que destaca as pedras\", observa. Suas inspiraÃ§Ãµes vÃªm do design e cultura, muitas vezes tomando referÃªncias antigas traduzidas para os dias modernos. Ele credita Ã s viagens a maior parte de sua inspiraÃ§Ã£o de design. Cada peÃ§a carrega uma histÃ³ria. Cada design nasce de uma memÃ³ria, emoÃ§Ã£o ou descoberta, depois traduzida em joias pela imaginaÃ§Ã£o de Richard.",
        phil_text2: "Nos Ãºltimos anos, ele passou a usar pedras brasileiras especiais, como turmalina verde fina e rubelita, bem como rubelita bicolor, e turmalina ParaÃ­ba e esmeralda de cores vivas.",

        // Creative Process
        video_subtitle: "CRUZEIRO MINE CONVIDA",
        video_title: "Richard Fiszman",
        video_headline: "Joalheiro visita Ã <br>Mina do Cruzeiro",
        video_overlay: "sem palavras, nÃ©? Eu tenho que te agradecer.",
        process_logo_text: "<strong>Cruzeiro</strong> & HERITAGE | Mina",
        process_desc: "Em 2022, Fiszman foi selecionado pela lendÃ¡ria Mina Cruzeiro de Minas Gerais, Brasil, para colaborar em uma coleÃ§Ã£o de peÃ§as de rubelita e turmalina de alta qualidade. Neste modelo da mina ao mercado, Fiszman criou uma coleÃ§Ã£o de produtos inteiramente rastreÃ¡veis feitos no Brasil que ganharam atenÃ§Ã£o no Brasil e no mundo. O processo cuidadoso de curadoria das gemas Cruzeiro de classe mundial Ã© o resultado de uma colaboraÃ§Ã£o cuidadosa.",

        // Collections
        coll_title: "COLEÃ‡ÃƒO HERITAGE",
        coll_desc: "A ColeÃ§Ã£o Heritage honra as raÃ­zes da joalheria, combinando tÃ©cnicas clÃ¡ssicas com design contemporÃ¢neo. Cada peÃ§a Ã© um tributo Ã  beleza atemporal das gemas naturais, apresentando cortes ousados e engastes intrincados que destacam o carÃ¡ter Ãºnico da pedra. Esta coleÃ§Ã£o representa a fundaÃ§Ã£o da marca Fiszman: respeito pela tradiÃ§Ã£o e paixÃ£o pela inovaÃ§Ã£o.",

        // Certification
        cert_text: "As gemas excepcionais da mina e a experiÃªncia de Richard produzem verdadeiras obras de arte, elevando as gemas naturais da Cruzeiro aos mais altos nÃ­veis de arte. Cada peÃ§a da coleÃ§Ã£o Ã© Ãºnica, uma verdadeira obra de arte brasileira encontrada em nenhum outro lugar do mundo. Cada peÃ§a inclui um certificado de origem e um relatÃ³rio completo do International Gemological Institute (IGI).",

        // Heritage II
        heritage2_title: "COLEÃ‡ÃƒO HERITAGE II",
        heritage2_text1: "Em 2025, Richard adicionou peÃ§as mais novas e usÃ¡veis para complementar sua ColeÃ§Ã£o Heritage original, que continha muitas peÃ§as para ocasiÃµes especiais.",
        heritage2_text2: "As gemas excepcionais da mina e a experiÃªncia de Richard ainda sÃ£o aparentes nesta coleÃ§Ã£o, em tamanhos de pedra menores para trabalhar com visuais e ocasiÃµes mais casuais. Cada peÃ§a da coleÃ§Ã£o pode ser usada da manhÃ£ Ã  noite. Cada peÃ§a inclui um certificado de origem e um relatÃ³rio completo do International Gemological Institute (IGI).",

        // Palmas
        palmas_title: "COLEÃ‡ÃƒO PALMAS",
        palmas_text1: "Semelhante Ã  ColeÃ§Ã£o Heritage por ser inspirada na natureza brasileira, a ColeÃ§Ã£o Palmas da Fiszman nasceu apÃ³s uma viagem inspiradora a Goiana, Brasil.",
        palmas_text2: "A coleÃ§Ã£o usa apenas pedras brasileiras, bem como tucum, que Ã© a semente de uma espÃ©cie de palmeira nativa da AmazÃ´nia. Nesta coleÃ§Ã£o, Richard trabalha as pedras brasileiras de maneiras inesperadas, esculpindo-as em formas orgÃ¢nicas, incluindo penas e folhas. A semente de tucum, que possui significado cultural e espiritual significativo, Ã© outro elemento inesperado dessas criaÃ§Ãµes. Combinada com as pedras brasileiras, o visual Ã© Ãºnico e inteiramente original, e atrai uma gama de clientes no Brasil e no exterior.",

        // All Day Long
        allday_title: "COLEÃ‡ÃƒO ALL DAY LONG",
        allday_text: "Embora seja conhecido por criaÃ§Ãµes espetaculares, Richard tambÃ©m oferece o que chama de peÃ§as \"all day long\" (para o dia todo). SÃ£o joias que funcionam para qualquer ocasiÃ£o â€” e parecem naturais, pessoais e cheias de personalidade. Essas peÃ§as sÃ£o elegantes sem serem exageradas, confortÃ¡veis mas visualmente marcantes, trabalhando com diamantes menores mas de alta qualidade e ouro 18K branco ou amarelo. O objetivo Ã© uma joia que nÃ£o Ã© apenas usada â€” ela se torna parte da assinatura visual de alguÃ©m, o dia todo. Essas peÃ§as sÃ£o frequentemente compradas por mulheres que procuram uma peÃ§a clÃ¡ssica, bem como clientes em busca de um presente de aniversÃ¡rio simples mas especÃ­fico.",

        // Classic
        classic_title: "COLEÃ‡ÃƒO CLÃSSICA",
        classic_text: "Nessas peÃ§as, as pedras vÃªm primeiro. Seja diamantes de alta qualidade ou outras gemas finas, Fiszman coloca a pedra no centro da histÃ³ria. SÃ£o peÃ§as especiais para ocasiÃµes especiais, para amantes de joias que buscam uma afirmaÃ§Ã£o clÃ¡ssica que nÃ£o estÃ¡ ligada Ã  moda ou joalheria rÃ¡pida.",

        // Inspiration
        insp_title: "INSPIRAÃ‡ÃƒO FISZMAN",
        insp_1_title: "SAINTE-CHAPELLE<br>EM PARIS, FRANÃ‡A",
        insp_1_text: "\"A Sainte-Chapelle parece uma caixa de joias, com suas paredes quase completamente feitas de vitrais. HÃ¡ vermelhos profundos, semelhantes Ã  rubelita que uso, bem como azuis safira profundos e toques de ouro que mudam ao longo do dia, assim como a luz se movendo atravÃ©s de uma gema lapidada. Cada detalhe parece cuidadosamente trabalhado. Como joalheiro, nÃ£o consigo deixar de ver a conexÃ£o, esse equilÃ­brio perfeito entre estrutura e beleza. Nunca esquecerei a primeira vez que visitei.\"",
        insp_2_title: "A PONTE DO BROOKLYN",
        insp_2_text: "Quando crianÃ§a, Richard visitou Nova York e ficou hipnotizado pela pulsaÃ§Ã£o da cidade, o horizonte e, particularmente, a arquitetura das pontes, antecipando a emoÃ§Ã£o de Manhattan. Entre elas, a Ponte do Brooklyn se destacou. Seus arcos gÃ³ticos permaneceram com ele, e anos depois, esse mesmo fascÃ­nio encontrou forma em uma peÃ§a de joia: um brinco que ecoa a arquitetura da ponte, uma memÃ³ria guardada hÃ¡ muito tempo transformada em arte tangÃ­vel atravÃ©s de gemas e metal.",
        insp_3_title: "ESCADARIA NO<br>MUSÃ‰E GUSTAVE<br>MOREAU EM PARIS",
        insp_3_text: "\"A escadaria em espiral Art Nouveau Ã© como uma peÃ§a de joia trazida Ã  vida. HÃ¡ uma suntuosidade na maneira como o ferro torce, curva e enrola. Como joalheiro, nÃ£o consigo deixar de ver isso em termos de design: a escadaria incorpora os mesmos princÃ­pios que uso no meu trabalho: atenÃ§Ã£o cuidadosa Ã s curvas, equilÃ­brio e proporÃ§Ã£o, sempre desenhados para se adequar Ã s caracterÃ­sticas e personalidades dos meus clientes.\"",
        insp_4_title: "TRANÃ‡ADO DE BAMBU",
        insp_4_text: "Durante uma viagem Ã  Ãsia para expor seus trabalhos em uma feira de joias, Richard ficou fascinado pelos muitos usos do bambu tranÃ§ado. Na arquitetura, Richard notou o uso frequente em paredes, telas, telhados e atÃ© estruturas e andaimes, nos quais a estrutura tambÃ©m era um padrÃ£o agradÃ¡vel. Assim como o ouro, o bambu Ã© um material notavelmente forte e versÃ¡til, e seu uso na arte da joalheria Ã© tanto estrutural quanto decorativo.",

        // Where to Buy
        wtb_where: "ONDE",
        wtb_tobuy: "comprar",
        wtb_text1: "Na Fiszman, o verdadeiro luxo Ã© permanÃªncia e significado. Cada peÃ§a nasce da terra, moldada pela histÃ³ria, refinada pela cultura e design com artesanato e arte.",
        wtb_text2: "As peÃ§as Fiszman foram exibidas em vÃ¡rios Couture Shows, em locais de varejo incluindo Bergdorf Goodman em Nova York e estÃ£o atualmente disponÃ­veis na Marissa Collections em Palm Beach e The Jewelry Edit.",

        // Media Coverage
        media_title: "NA MÃDIA",
        media_text: "A qualidade e a procedÃªncia das gemas usadas nas peÃ§as Fiszman nÃ£o sÃ³ capturaram a atenÃ§Ã£o dos consumidores, mas tambÃ©m de especialistas de revistas de gemas e gemologia no exterior que documentaram a importÃ¢ncia de seus designs e artesanato.",

        // Footer
        footer_nav_title: "NAVEGAÃ‡ÃƒO",
        fo_home: "InÃ­cio",
        fo_about: "Sobre",
        fo_coll: "ColeÃ§Ãµes",
        fo_wtb: "Onde Comprar",
        fo_press: "Imprensa",
        footer_care_title: "ATENDIMENTO",
        fo_contact: "Fale Conosco",
        fo_ship: "Envio e DevoluÃ§Ãµes",
        fo_terms: "Termos e CondiÃ§Ãµes",
        fo_privacy: "PolÃ­tica de Privacidade",
        footer_follow_title: "SIGA-NOS",
        footer_lorem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        footer_copy: "&copy; 2026 FISZMAN JEWELRY. TODOS OS DIREITOS RESERVADOS."
    }
};

function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (key.includes('title') || key.includes('desc') || key.includes('text') || key.includes('headline')) {
                // Allow HTML for titles and text blocks (e.g. for <br> or <span>)
                element.innerHTML = translations[lang][key];
            } else {
                element.innerText = translations[lang][key];
            }
        }
    });
}

// Attach to window so it's accessible from inline onclick attributes even when bundled by Vite.
window.changeLanguage = changeLanguage;

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.main-header');
    const app = document.getElementById('app');
    const transitionDuration = 520;
    const transitionEasing = 'cubic-bezier(0.22, 1, 0.36, 1)';

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    console.log('Site initialized');

    // Set default language to Portuguese
    changeLanguage('pt');

    if (header && header.animate) {
        header.animate(
            [
                { opacity: 0, transform: 'translateY(-20px)', filter: 'blur(10px)' },
                { opacity: 1, transform: 'translateY(0)', filter: 'blur(0)' }
            ],
            {
                duration: 760,
                easing: transitionEasing,
                fill: 'both'
            }
        );
    }

    if (app && app.animate) {
        app.animate(
            [
                { opacity: 0, transform: 'translateY(30px)', filter: 'blur(16px)' },
                { opacity: 1, transform: 'translateY(0)', filter: 'blur(0)' }
            ],
            {
                duration: 880,
                delay: 60,
                easing: transitionEasing,
                fill: 'both'
            }
        );
    }

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mainNav = document.getElementById('mainNav');

    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            mainNav.classList.toggle('active');
        });

        // Close menu when a link is clicked
        const navLinks = mainNav.querySelectorAll('ul a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('active');
                mainNav.classList.remove('active');
            });
        });
    }

    const internalPageLinks = document.querySelectorAll('a[href]');
    internalPageLinks.forEach(link => {
        link.addEventListener('click', event => {
            const href = link.getAttribute('href');

            if (!href || href.startsWith('#')) {
                return;
            }

            if (link.target === '_blank' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
                return;
            }

            const url = new URL(link.href, window.location.href);
            const isSameOrigin = url.origin === window.location.origin;
            const isSamePageAnchor = url.pathname === window.location.pathname && url.hash;
            const isPageNavigation = url.pathname !== window.location.pathname;

            if (!isSameOrigin || isSamePageAnchor || !isPageNavigation) {
                return;
            }

            event.preventDefault();
            document.body.classList.add('is-transitioning');

            if (header && header.animate) {
                header.animate(
                    [
                        { opacity: 1, transform: 'translateY(0)', filter: 'blur(0)' },
                        { opacity: 0, transform: 'translateY(-14px)', filter: 'blur(8px)' }
                    ],
                    {
                        duration: transitionDuration,
                        easing: transitionEasing,
                        fill: 'forwards'
                    }
                );
            }

            if (app && app.animate) {
                app.animate(
                    [
                        { opacity: 1, transform: 'translateY(0) scale(1)', filter: 'blur(0)' },
                        { opacity: 0, transform: 'translateY(20px) scale(0.992)', filter: 'blur(12px)' }
                    ],
                    {
                        duration: transitionDuration,
                        easing: transitionEasing,
                        fill: 'forwards'
                    }
                );
            }

            window.setTimeout(() => {
                window.location.href = url.href;
            }, transitionDuration);
        });
    });
});


