
import { Content } from './types';

export const TRANSLATIONS: Record<'zh' | 'en', Content> = {
  zh: {
    name: "qeeryyu",
    role: "Learner / Developer",
    links: {
      email: "qeeryyu@outlook.com",
      github: "https://github.com/anyuxurl",
      telegram: "https://t.me/qeeryyuz",
    },
    sections: {
      about: {
        title: "关于",
        content: "你好！我是一名对编程和设计充满好奇的高中生。我喜欢把生活中的小麻烦，或是一些一闪而过的念头，变成一个个有趣的 Web 项目。"
      },
      thoughts: {
        title: "一些想法",
        content: "我相信最好的学习方式是通过实践创造。比起单纯地记忆理论，我更喜欢动手将想法变为现实，并在解决问题的过程中不断成长。保持好奇，持续学习，乐于分享。"
      },
      skills: {
        title: "技术栈",
        items: ["Python", "JavaScript", "HTML5 & CSS3", "Vue.js", "Flask", "Git", "React", "TypeScript"]
      },
      projects: {
        title: "个人项目",
        cta: "立即体验",
        items: [
          {
            title: "Sentence Flow 句流",
            description: "一款专门为英语学习者和写作者设计的智能辅助工具，利用 AI 帮助用户分析英语句子的语法结构、从句成分，并提供语法错误检查和改进建议。",
            tags: ["React 19", "TypeScript", "Vite 6"],
            link: "https://sf.134687.xyz"
          }
        ]
      }
    },
    ui: {
      copied: "已复制到剪贴板",
      backToTop: "回到顶部"
    }
  },
  en: {
    name: "Kevin Cheng",
    role: "Learner / Developer",
    links: {
      email: "qeeryyu@outlook.com",
      github: "https://github.com/anyuxurl",
      telegram: "https://t.me/qeeryyuz",
    },
    sections: {
      about: {
        title: "About",
        content: "Hello! I'm a high school student driven by curiosity for programming and design. I love transforming daily life inconveniences or fleeting ideas into engaging Web projects."
      },
      thoughts: {
        title: "Thoughts",
        content: "I believe the best way to learn is through creation. Instead of rote memorization, I prefer hands-on building to turn ideas into reality, growing through problem-solving. Stay curious, keep learning, and share often."
      },
      skills: {
        title: "Tech Stack",
        items: ["Python", "JavaScript", "HTML5 & CSS3", "Vue.js", "Flask", "Git", "React", "TypeScript"]
      },
      projects: {
        title: "Projects",
        cta: "Try it out",
        items: [
          {
            title: "Sentence Flow",
            description: "An AI-powered assistant for English learners and writers, analyzing syntax structures and providing grammar corrections and improvement suggestions.",
            tags: ["React 19", "TypeScript", "Vite 6"],
            link: "#"
          }
        ]
      }
    },
    ui: {
      copied: "Copied to clipboard",
      backToTop: "Back to Top"
    }
  }
};
