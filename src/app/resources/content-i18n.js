import { InlineCode } from "@/once-ui/components";

const createI18nContent = (t) => {
    const person = {
        firstName: 'Adrien',
        lastName:  'Hors',
        get name() {
            return `${this.firstName} ${this.lastName}`;
        },
        role:      t("person.role"),
        avatar:    '/images/adrien-avatar.jpg',
        location:  'Europe/Paris',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
        languages: ['French', 'English', 'Spanish']  // optional: Leave the array empty if you don't want to display languages
    }

    const newsletter = {
        display: false,
        title: <>{t("newsletter.title", {firstName: person.firstName})}</>,
        description: <>{t("newsletter.description")}</>
    }

    const social = [
        // Links are automatically displayed.
        // Import new icons in /once-ui/icons.ts
        {
            name: 'GitHub',
            icon: 'github',
            link: 'https://github.com/adrih1',
        },
        {
            name: 'LinkedIn',
            icon: 'linkedin',
            link: 'https://www.linkedin.com/in/adrien-hors1/',
        },
        {
            name: 'Email',
            icon: 'email',
            link: 'mailto:adrienhors1@gmail.com',
        },
    ]

    const home = {
        label: t("home.label"),
        title: t("home.title", {name: person.name}),
        description: t("home.description", {role: person.role}),
        headline: <>{t("home.headline")}</>,
        subline: <>{t("home.subline")}</>
    }

    const about = {
        label: t("about.label"),
        title: t("about.label"),
        description: t("about.description", {name: person.name, role: person.role, location: person.location}),
        tableOfContent: {
            display: true,
            subItems: true
        },
        avatar: {
            display: true
        },
        calendar: {
            display: true,
            link: 'https://cal.com'
        },
        intro: {
            display: true,
            title: t("about.intro.title"),
            description: <>{t("about.intro.description")}</>
        },
        work: {
            display: true, // set to false to hide this section
            title: 'Work Experience',
            experiences: [
                {
                    company: 'Wanderlust',
                    timeframe: '2023 - Present',
                    role: 'Lead Front Dev Developer',
                    achievements: [
                        <>UX/UI Collaboration</>,
                        <>Architecting Front-End Solutions</>,
                        <>Code Quality and Standards</>,
                        <>Testing and Debugging</>,
                    ],
                    images: [ // optional: leave the array empty if you don't want to display images
                    ]
                },
                {
                    company: 'Hélios',
                    timeframe: 'January 2023 - July 2023',
                    role: 'Internship - Fullstack Developer',
                    achievements: [
                        <>Refonte du site vitrine d’hélios</>, 
                        <>Développement d’un simulateur d’empreinte carbone</>, 
                        <>Migration et maintenance et évolution du blog Wordpress</>,
                    ],
                    images: [ ]
                }
            ]
        },
        studies: {
            display: true, // set to false to hide this section
            title: 'Studies',
            institutions: [
                {
                    name: 'École 42',
                    description: <>Studied software engineering.</>,
                },
                {
                    name: 'ESSEC - Global BBA',
                    description: <>Studied online marketing and personal branding.</>,
                }
            ]
        },
        technical: {
            display: true, // set to false to hide this section
            title: 'Technical skills',
            skills: [
                {
                    title: 'Figma',
                    description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
                    images: [
                    ]
                },
                {
                    title: 'Next.js',
                    description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
                    images: [
                    ]
                }
            ]
        }
    }

    const blog = {
        label: t("blog.label"),
        title: t("blog.title"),
        description: t("blog.description", {name: person.name})
        // Create new blog posts by adding a new .mdx file to app/blog/posts
        // All posts will be listed on the /blog route
    }

    const work = {
        label: t("work.label"),
        title: t("work.title"),
        description: t("work.description", {name: person.name})
        // Create new project pages by adding a new .mdx file to app/blog/posts
        // All projects will be listed on the /home and /work routes
    }

    const gallery = {
        label: t("gallery.label"),
        title: t("gallery.title"),
        description: t("gallery.description", {name: person.name}),
        // Images from https://pexels.com
        images: [
            {
                src: '/images/gallery/img-01.jpg',
                alt: 'image',
                orientation: 'vertical'
            },
            {
                src: '/images/gallery/img-02.jpg',
                alt: 'image',
                orientation: 'horizontal'
            },
            { 
                src: '/images/gallery/img-03.jpg',
                alt: 'image',
                orientation: 'vertical'
            },
            { 
                src: '/images/gallery/img-04.jpg',
                alt: 'image',
                orientation: 'horizontal'
            },
            {
                src: '/images/gallery/img-05.jpg',
                alt: 'image',
                orientation: 'horizontal'
            },
            {
                src: '/images/gallery/img-06.jpg',
                alt: 'image',
                orientation: 'vertical'
            },
            {
                src: '/images/gallery/img-07.jpg',
                alt: 'image',
                orientation: 'horizontal'
            },
            {
                src: '/images/gallery/img-08.jpg',
                alt: 'image',
                orientation: 'vertical'
            },
            {
                src: '/images/gallery/img-09.jpg',
                alt: 'image',
                orientation: 'horizontal'
            },
            {
                src: '/images/gallery/img-10.jpg',
                alt: 'image',
                orientation: 'horizontal'
            },
            { 
                src: '/images/gallery/img-11.jpg',
                alt: 'image',
                orientation: 'vertical'
            },
            {
                src: '/images/gallery/img-12.jpg',
                alt: 'image',
                orientation: 'horizontal'
            },
            {
                src: '/images/gallery/img-13.jpg',
                alt: 'image',
                orientation: 'horizontal'
            },
            { 
                src: '/images/gallery/img-14.jpg',
                alt: 'image',
                orientation: 'horizontal'
            },
        ]
    }
    return {
        person,
        social,
        newsletter,
        home,
        about,
        blog,
        work,
        gallery
    }
};

export { createI18nContent };