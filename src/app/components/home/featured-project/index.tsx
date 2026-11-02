
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const projects = [
    {
        id: 1,
        title: "Prayer Time – Location-Based Prayer Schedule",
        description:
            "A location-based prayer time website that provides daily prayer schedules based on the user's current location. Integrated with geolocation and reverse geocoding using OpenStreetMap (Nominatim) to automatically detect and display the user's city. Built with a responsive interface and dynamic prayer time fetching, with Redis and QStash integration for scheduled background tasks and notification infrastructure.",
        image: "/images/projects/project-1.png",
        category: "Web Development",
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
