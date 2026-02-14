
export type Language = 'zh' | 'en';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export interface Content {
  name: string;
  role: string;
  links: {
    email: string;
    github: string;
    telegram: string;
  };
  sections: {
    about: { title: string; content: string };
    thoughts: { title: string; content: string };
    skills: { title: string; items: string[] };
    projects: { title: string; items: Project[]; cta: string };
  };
  ui: {
    copied: string;
    backToTop: string;
  };
}
