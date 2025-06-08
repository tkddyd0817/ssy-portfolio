export interface Project  {
  name: string;
  period: string;
  desc: string;
  stack: string[];
  role: string[];
  troubleshooting?: string[];
  github: string;
  link: string;
  images: string[];
};

export interface ProjectAccordionProps {
  projects: Project[];
}