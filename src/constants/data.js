import images from "./images"
import SchoolIcon from '@mui/icons-material/School'
import { LocalHospitalOutlined } from "@mui/icons-material"
import { WaterDropOutlined } from "@mui/icons-material"

const hero = {
    title1: "Let's Save More Lifes With Our Helping Hand",
    body1: "Aliqu diam amet diam et eos. Clita erat ipsum et lorem sed stet lorem sit clita duo justo erat amet",
    title2: "Let's Change The World With Humanity",
    body2: "Aliqu diam amet diam et eos. Clita erat ipsum et lorem sed stet lorem sit clita duo justo erat amet",
}

const about = {
    title: "We Help People In Need Around The World",
    body1: "Aliqu diam amet diam et eos. Clita erat ipsum et lorem sed stet lorem sit clita duo justo erat amet",
    Founder: "Jhon Doe, Founder",
    body2: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet"
}

const WhatWeDo = {
    title: 'What We Do',
    body: 'Learn More What We Do And Get Involved',
    card: [
        {
            id: '1',
            icon: <SchoolIcon />,
            title: 'Child Education',
            body: 'Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.',
            duration:1000
        },
        {
            id: '2',
            icon: <LocalHospitalOutlined />,
            title: 'Medical Treatment',
            body: 'Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.',
            duration:2000
        },
        {
            id: '3',
            icon: <WaterDropOutlined />,
            title: 'Pure Drinking Water',
            body: 'Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.',
            duration:3000
        }
    ]
}

const couses = {
    title: "Every Child Deserves The Opportunity To Learn",
    card: [
        {
            id:1,
            subject: "Education",
            title: "Education For African Children",
            body: "empor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos",
            goal: '$1000',
            raised: '$9000',
            imageurl: images.courses1,
            duration:1000
        },
        {
            id:2,
            subject: "Pure Water",
            title: "Ensure Pure Drinking Water",
            body: "empor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos",
            goal: '$1000',
            raised: '$9000',
            imageurl: images.courses2,
            duration:2000
        },
        {
            id:3,
            subject: "Healthy Life",
            title: "Ensure Medical Treatment",
            body: "empor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos",
            goal: '$1000',
            raised: '$9000',
            imageurl: images.courses3,
            duration:3000
        }
    ],
}

const contact = {
    title: "If You Have Any Query, Please Contact Us",
    body: "The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. Download Now.",
}

const service = {
    title: "Learn More What We Do And Get Involved",
    card: [
        {
            title: "Child Education",
            body: "empor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos",
            imageurl: images.icon1
        },
        {
            title: "Medical Treatment",
            body: "empor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos",
            imageurl: images.icon2
        },
        {
            title: "Pure Drinking Water",
            body: "empor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos",
            imageurl: images.icon3
        }
    ],
}

const donate = {
    title: "Thanks For The Results Achieved With You",
    body: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet",
}

const ourteam = {
    card: [
        {
            id: 1,
            name: "Full name",
            job: "Desingation",
            facebook: "",
            gitHub: "",
            instagram: "",
            image: images.team1

        },
        {
            id: 2,
            name: "Full name",
            job: "Desingation",
            facebook: "",
            gitHub: "",
            instagram: "",
            image: images.team2

        },
        {
            id: 3,
            name: "Full name",
            job: "Desingation",
            facebook: "",
            gitHub: "",
            instagram: "",
            image: images.team3

        },
        {
            id: 4,
            name: "Full name",
            job: "Desingation",
            facebook: "",
            gitHub: "",
            instagram: "",
            image: images.team4

        },
    ]
}

const testimonial = {
    title: "Trusted By Thousands Of People And Nonprofits",
    card: [
        {
            id:1,
            name: "Full name",
            job: "Profession",
            body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, odit! Quo tenetur, eligendi blanditiis at ut, unde quidem, labore asperiores quaerat aspernatur soluta sed? Harum.",
            image: images.testimonial1
        },
        {
            id:2,
            name: "Full name",
            job: "Profession",
            body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, odit! Quo tenetur, eligendi blanditiis at ut, unde quidem, labore asperiores quaerat aspernatur soluta sed? Harum.",
            image: images.testimonial2
        },
        {
            id:3,
            name: "Full name",
            job: "Profession",
            body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, odit! Quo tenetur, eligendi blanditiis at ut, unde quidem, labore asperiores quaerat aspernatur soluta sed? Harum.",
            image: images.testimonial3
        },

    ]
}

const errorpage = {
    errornumber: 404,
    title: "Page Not Found",
    body: `We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?`,
}


export default { about, contact, couses, donate, errorpage, hero, ourteam, service, testimonial, WhatWeDo }