
"use client";

import Image from "next/image";

const projects = [
    {
        id: 1,
        title: "Prayer Time – Location-Based Prayer Schedule",
        description:
            "A location-based prayer time website that provides daily prayer schedules based on the user's current location. Integrated with geolocation and reverse geocoding using OpenStreetMap (Nominatim) to automatically detect and display the user's city. Built with a responsive interface and dynamic prayer time fetching, with Redis and QStash integration for scheduled background tasks and notification infrastructure.",
        image: "/images/projects/project-1.png",
        category: "Web Development",
        liveUrl: "https://jadwal-shalat-app.vercel.app/",
        githubUrl: "https://github.com/dyalamuhammad/jadwal-shalat-app.git",
    },
    { id: 2,
        title: "Kirim Satset – Fast File Sharing Platform",
        description:
            "A fast and easy-to-use file sharing platform that allows users to upload files and instantly generate shareable links and QR codes. Recipients can access and download shared files through the generated link or by scanning the QR code. Supports password-protected file sharing to provide an additional layer of privacy and security. Built with Next.js, Supabase, and QR Code integration.",
        image: "/images/projects/project-2.png",
        category: "Web Development",
        liveUrl: "https://kirim-satset-app.vercel.app/",
        githubUrl: "https://github.com/dyalamuhammad/kirim-satset-app.git",
    },
];

const FeaturedProject = () => {
    return (
        <section>
            <div className="container">
                <div className="border border-primary/10">
                    <div className="max-w-4xl mx-auto py-10 px-4 sm:px-7">

                        {/* Section Header */}
                        <div className="flex flex-col xs:flex-row gap-5 items-center justify-between">
                            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">
                                Featured Projects
                            </p>
                        </div>
                    </div>
                </div>
                <div className="border-x border-primary/10">
                    <div className="max-w-4xl mx-auto py-10 px-4 sm:px-7">

                        {/* Project Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {projects.map((project) => (
                                <div
                                    key={project.id}
                                    className="group flex flex-col gap-4"
                                >
                                    {/* Project Image */}
                                    <div className="relative aspect-video overflow-hidden rounded-lg bg-primary/5">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            sizes="(max-width: 640px) 100vw, 50vw"
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>

                                    {/* Project Information */}
                                    <div className="flex flex-col gap-2">
                                        <p className="text-xs uppercase tracking-wider text-primary font-medium">
                                            {project.category}
                                        </p>

                                        <h3 className="text-lg font-semibold">
                                            {project.title}
                                        </h3>

                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>
                                    {/* Project Links */}
                                        <div className="flex items-center gap-4 pt-1">
                                            {project.liveUrl && (
                                                <a
                                                    href={project.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-sm font-medium text-primary hover:underline underline-offset-4"
                                                >
                                                    Live Preview ↗
                                                </a>
                                            )}

                                            {project.githubUrl && (
                                                <a
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                                                >
                                                    GitHub ↗
                                                </a>
                                            )}
                                        </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProject;
