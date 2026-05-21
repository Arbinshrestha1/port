import { ArrowUpRight } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const projects = [
  {
    title: "PickNCare",
    description:
      "A modern healthcare platform focused on connecting users with medical services, enabling easy appointment booking, health tracking, and access to reliable care solutions through a clean and user-friendly interface.",
    image: "/projects/pickncare.png",
    tags: ["React", "Typescript", "Tailwind CSS"],
    link: "https://pickncare.com/",
  },
  {
    title: "Binaryburst Solutions",
    description:
      "A professional IT solutions platform providing services such as cybersecurity, cloud infrastructure, and managed IT support, designed to simplify complex technology and deliver reliable business solutions.",
    image: "/projects/binaryburst.png",
    tags: ["React", "Typescript", "Tailwind CSS"],
    link: "https://binaryburstsolutions.com/",
  },
  {
    title: "CrypticaDigital",
    description:
      "A digital agency website showcasing services like web development, branding, and digital marketing, built with a strong focus on performance, modern UI/UX, and helping businesses grow their online presence.",
    image: "/projects/crypticadigital.png",
    tags: ["React", "Typescript", "Tailwind CSS"],
    link: "https://crypticadigital.com/",
  },
  {
    title: "RoversNepal",
    description:
      "A travel agency website showcasing services like hotel bookings, tours, etc.",
    image: "/projects/roversnepal.png",
    tags: ["React", "Typescript", "React Query", "Tailwind CSS"],
    link: "http://roversnepal.com/",
  },
  {
    title: "Vehicle Number Plate Detection",
    description:
      "An Automatic Number Plate Recognition system that detects vehicle number plates using YOLOv8 and recognizes characters using a custom CNN model. Integrated with a FastAPI web application where users can upload images or videos and get recognized plate numbers in real time.",
    image: "/projects/numberplate.png",
    tags: ["React", "Typescript", "React Query", "Tailwind CSS"],
    link: "https://github.com/Arbin13",
  },
];

const getImagePath = (path: string) => {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
};
export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* background glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-100">
            Here are some of the projects I've worked on.
          </p>
        </div>

        {/* Projects grid  */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={getImagePath(project.image)}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />

                {/* Overlay links  */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </a>
                </div>
              </div>
              {/* COntent */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
