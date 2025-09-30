"use client";
import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  alt?: string;
  href?: string;
}

export default function ProjectCard({
  title,
  description,
  imageSrc,
  alt = "Project Image",
  href = "#",
}: ProjectCardProps) {
  return (
    <div className="w-[300px] rounded overflow-hidden shadow-2xl border border-gray-200 bg-white p-4 transition-transform hover:scale-105 hover:shadow-xl">
      <a href={href} target="_blank">
        <img className="w-full h-48 object-cover" src={imageSrc} alt={alt} />
      </a>
      <div className="px-2 pt-4 pb-2">
        <a className="font-bold text-lg mb-2" href={href} target="_blank">
          {title}
        </a>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
    </div>
  );
}
