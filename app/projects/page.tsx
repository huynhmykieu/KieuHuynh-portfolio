import ProjectCard from "@/components/ProjectCard";
import React from "react";

export default function ProjectsPage() {
  return (
    <div className="flex flex-wrap gap-4 justify-center mx-auto max-w-6xl pt-4">
      <ProjectCard
        title="Company Intranet Website"
        description="A web-based intranet platform developed for internal use within the company. It centralizes employee information, departmental structures, project tracking, and internal announcements. The system is designed to enhance communication between departments and allow directors to monitor production activities in Vietnam, while also supporting day-to-day operations across teams."
        imageSrc="/images/wnk.png"
        href="https://www.wanekcareer.com/Home/HomePage"
      />
      <ProjectCard
        title="HCLTech"
        description="Developed frontend projects for HCLTech, delivering user-friendly and responsive web applications that support digital, cloud, and AI solutions across various industries worldwide."
        imageSrc="/images/hcl.png"
        href="https://www.hcltech.com"
      />
    </div>
  );
}
