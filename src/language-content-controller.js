export const homeContent = {
    'es':{
        frase:'< Construlle el futuro con tu codigo />',
    },
    'en':{
        frase:'< Build the future with your code />',
    }
}

export const aboutMe = {
    'es':{
        title:'Hola, Bienvenid@ a mi portafolio', 
        content:`Si puedes imaginarlo, puedes programarlo. 
                Esa frase me cambió la vida. Hola, estoy estudiando ingeniería informática, 
                y estoy buscando un trabajo como autónomo o de medio tiempo mientras estudio. 
                Tengo sólidas habilidades en desarrollo web con proyectos freelance y personales. 
                Estoy estudiando programación desde 2020 hasta ahora y quiero dar valor a una empresa y 
                crecer en mi carrera profesional.`,
    },
    'en':{
        title:'Hi, Welcome to my portfolio',
        content:`If you can imagine it, you can program it. 
                That phrase changed my life. Hi, i'm studying computing engineering, 
                looking for a job as freelancer or middle time while i'm studying. 
                I have solid skills on web development with freelance projects and personal ones. 
                I'm studying programming since 2020 until now and i want to give value to a company and grow up in 
                my profesional carreer.`,
    },
}

export const education = {
    'es':{
        title:'Education',
        content:{
            education1:{
                title:'Ingeniería Informática',
                content:`En el 2021 entré en la carrera Ingeniería Informática en la Universidad de Holguín, 
                        la cual me ha servido para adquirir una gran cantidad de habilidades blandas como la investigación, 
                        trabajo en equipo, exposición de proyectos en público, ayudar a mis compañeros, aprender rápido, etc .
                        Me uní a un grupo de investigación de la universidad para colaborar con un proyecto de informatización
                        de la parte oncológica en mi hospital local, para ayudar a agilizar el proceso de de atención a los pacientes
                        con cancer.`,
            },
            education2:{
                title:'Autodidacta',
                content:`La mayoría de mis habilidades de programación las he aprendido por mi cuenta,
                        leyendo documentación, tomando ayuda de videos,
                        tutoriales y haciendo un montón de proyectos para poner en práctica las habilidades que adquirí.`,
            },
            education3:{
                title:'Platzi',
                content:`Gracias a la ayuda de algunos familiares y amigos logre obtener una subscripcion en Platzi,
                        donde he tomado un grupo de cursos que me han servido para profundizar en mis conocimientos, 
                        aprender nuevas tecnologías, hacer networking y conocer nuevas personas que les apasiona la tecnología como a mi.`,
            }
        },
    },
    'en':{
        title:'Education',
        content:{
            education1:{
                title:'Computing Engineering',
                content:`In 2021 I entered the Computer Engineering career at the University of Holguín,
                        which has helped me to acquire a large number of soft skills such as research,
                        teamwork, exposing projects in public, helping my colleagues, learning quickly, etc .
                        I joined a research group at the university to collaborate on a computerization project
                        oncology at my local hospital to help expedite the patient care process
                        with cancer.`,
            },
            education2:{
                title:'Autodidact',
                content:`Most of my programming skills i have learned by my
                        own, reading documentation, taking help from videos, 
                        tutorials and making a lot of projects to put on in practice the skills that i got.`,
            },
            education3:{
                title:'Platzi',
                content:`Thanks to the help of some family and friends I managed to get a subscription to Platzi,
                        where I have taken a group of courses that have helped me to deepen my knowledge,
                        learn new technologies, make some networking and meeting new people who are passionate about technology like me.`,
            }
        },
    },
}

export const navbar = {
    'es':{
        home:'Hogar',
        about:'Acerca',
        skills:'Destrezas',
        projects:'Proyectos',
    },
    'en':{
        home:'Home',
        about:'About',
        skills:'Skills',
        projects:'Projects',
    }
}

export const projects = {
    krolNails:{
        name:'Krol Nails',
        description:{
            'es':`Proyecto freelance para un salón de belleza, consiste en un catálogo para mostrar los trabajos realizados
                por el salón, dar a conocer los distintos precios y ofertas que ofrecen, realizar reservaciones, etc. 
                Utilicé Vue js lo que me permitió ampliar mi conocimiento en frontend ya que hasta ese momento solo había trabajado 
                con React js`,

            'en':`Freelance project for a beauty salon, consists of a catalog to show the work done
                around the show, publicize the different prices and offers they offer, make reservations, etc.
                I made the site with Vue js, it allowed me to increment my knowledge in front end because until the moment i had jus 
                worked with React js.`,
        },
        link:'https://krol-nails.onrender.com/',
        images:['projects/krol_nails/img1.webp', 'projects/krol_nails/img2.webp', 'projects/krol_nails/img3.webp', 'projects/krol_nails/img4.webp'],
        tecnologies:['tecnologies_images/vue.svg','tecnologies_images/git.svg', 'tecnologies_images/github.svg'],
    },
    gummawaka:{
        name:'Gumma Waka',
        description:{
            'es':`Proyecto freelance para una empresa vendedora de productos de caucho. Consiste de un catálogo para mostrar
                las distintas piezas que fabrica la empresa, y las distintas vias de contacto para encargar la fabricación de un lote
                de algun producto. Fue un reto ya que el cliente era turco y al hablar no muy bien el inglés tuve que utilizar técnicas como 
                la encuesta para extraer los requisitos y el tipo de aplicación web que se deseaba crear.`,

            'en':`Freelance project for a company that sells rubber products. It consists of a catalog to display
                the different pieces that the company manufactures, and the different ways of contact to commission the manufacture of a batch
                of some product. It was a challenge since the client was Turkish and speaking English not very well I had to use techniques such as
                the survey to extract the requirements and the type of web application to be created.`,
        },
        link:'https://gumawaka.com/',
        images:['projects/gumawaka/img1.webp'],
        tecnologies:['tecnologies_images/react.svg','tecnologies_images/django.svg', 'tecnologies_images/git.svg', 'tecnologies_images/github.svg'],
    },
    greennotes:{
        name:'Green Notes',
        description:{
            'es':`Aplicacion de notas que permite crear, editar, borrar y listar notas. Fue un proyecto interesante porque fue mi 
                primera vez trabajando con Graphql, me encantó esta tecnología. Este fue mi segundo proyecto construido con Vue js, 
                permitiendomeme profundizar más en mis conocimientos sobre el framework.`,

            'en':`Notes application that allows you to create, edit, delete and list notes. It was an interesting project because it was my
                first time working with Graphql, I loved this technology. This was my second project built with Vue js,
                allowing me to deepen my knowledge about the framework.`,
        },
        link:'https://green-notes-app.onrender.com/',
        images:['projects/green_notes/img1.webp', 'projects/green_notes/img2.webp', 'projects/green_notes/img3.webp', 'projects/green_notes/img4.webp'],
        tecnologies:['tecnologies_images/vue.svg','tecnologies_images/django.svg', 'tecnologies_images/graphql.svg', 'tecnologies_images/git.svg', 'tecnologies_images/github.svg', 'tecnologies_images/docker.svg'],
    },
    bestore:{
        name:'BeStore',
        description:{
            'es':`Mi pais natal es Cuba, allí es dificil conseguir los productos básicos necesarios para vivir, 
                a raiz de este problema los cubanos se han auxiliado de los grupos de compra y venta de facebook creando un mercado informal 
                para así adquirir todo tipo de artículos. Por este motivo me dispuse la tarea de crear una tienda 
                en línea donde las personas pudieran comprar y vender productos en un solo sitio y asi brindar una mayor facilidad y 
                acceso para comprar y vender. La aplicación brinda las funcionalidades de tiendas como Amazon permitiendo 
                comprar, vender, puntuar productos, agregar a favoritos, dispone de un panel de administración para que los vendedores 
                administren sus productos, historial de pedidos,entre otras funcionalidades. `,

            'en':`My native country is Cuba, there it is difficult to get the basic products necessary to live,
                As a result of this problem, Cubans have taken the help of Facebook buying and selling groups, creating an informal market
                in order to acquire all kinds of items. For this reason I set myself the task of creating a store
                online where people could buy and sell products in one place and thus provide greater ease and
                Access to buy and sell. The application provides the functionalities of stores such as Amazon allowing
                buy, sell, rate products, add to favorites, it has an administration panel for sellers to
                manage your products, order history, among other features.`,
        },
        link:'',
        images:['projects/bestore/img1.webp', 'projects/bestore/img2.webp', 'projects/bestore/img3.webp'],
        tecnologies:['tecnologies_images/react.svg','tecnologies_images/django.svg', 'tecnologies_images/git.svg', 'tecnologies_images/github.svg', 'tecnologies_images/docker.svg'],
    },
    chatcat:{
        name:'ChatCat',
        description:{
            'es':`ChatCat es un chat en linea que me propuse hacer como proyecto personal para entender en profundidad como funcionan los 
                sockets y las conexiones en tiempo real. La aplicacion brinda las funcionalidades de otras aplicaciones de chat como WhatsApp,
                con creación de grupos, chats privados, una red de amigos, una sala pública para conocer nuevas personas, pero con un toque personal 
                inspirado en los gatos.`,

            'en':`ChatCat is an online chat that I decided to do as a personal project to understand in depth how the
                sockets and connections in real time. The application provides the functionalities of other chat applications such as Wattsap,
                with group creation, private chats, a network of friends, a public room to meet new people, but with a personal touch inspired 
                by cats.`,
        },
        link:'',
        images:['projects/chatcat/img1.webp', 'projects/chatcat/img2.webp'],
        tecnologies:['tecnologies_images/react.svg','tecnologies_images/django.svg', 'tecnologies_images/git.svg', 'tecnologies_images/github.svg', 'tecnologies_images/docker.svg'],
    },
    
}