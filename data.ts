import { ProfileData, Publication, NewsItem, ExperienceItem, AwardItem, SectionConfig } from './types';
import newsData from './news.json';
import publicationsData from './publications.json';

export const data = {
  en: {
    PROFILE: {
      name: "Yuhang Yang",
      title: "Undergraduate Student",
      affiliation: "Mathematics,Nanjing University",
      email: "yuhangyang@smail.nju.edu.cn",
      location: "Nanjing, China",
      bio: `
      Hi, I'm Yuhang Yang, a sophomore Mathematics major at **Nanjing University**. I am driven by a core philosophy: mathematics is the soul of Artificial Intelligence. I firmly believe that the next quantum leap in AI will be sparked by novel mathematical applications.
      Built upon a rigorous foundation in advanced mathematics—including mathematical analysis, linear algebra, probability, differential equations, and abstract algebra—my passion lies at the intersection of pure math and deep learning. Rather than focusing solely on engineering applications, I am captivated by the fundamental "what" and "why." My current academic curiosity is deeply inspired by generalized mathematical frameworks for associative memory models. I am fascinated by how abstract mathematical operations, such as similarity metrics and separation functions, can fundamentally define a machine's memory capacity and learning behavior. I am dedicated to using rigorous math to establish the underlying logic of AI, with a specific interest in Explainable AI (XAI) and redefining how machines truly understand and learn.
      I thrive on extracting the essence of complex systems and expressing them with elegant simplicity. I also find immense magic in coding, seamlessly translating rigorous mathematical equations into clean Python algorithms. Equipped with strong proficiencies in Python and LaTeX, alongside a highly developed personal knowledge management system, I approach every task with meticulous attention to detail.
      I value both collaborative teamwork and deep, independent work. When I'm away from equations and code, you can find me playing basketball, table tennis, or currently challenging myself to learn how to swim.
      As I actively transition my academic focus towards an AI-oriented graduate path, I am eagerly seeking opportunities to join a dynamic AI research lab where I can learn, grow, and contribute to cutting-edge research.
       `,
      researchInterests: [
        "Mathematical Foundations of Deep Learning",
        "Explainable AI (XAI)",
        "Associative Memory Models",
        "Cognitive & Learning Mechanisms in AI"  
      ],
      socials: [
        { platform: 'email', url: 'mailto:yuhangyang@smail.nju.edu.cn' },
        // { platform: 'scholar', url: 'https://scholar.google.com', username: 'Google Scholar' },
        { platform: 'github', url: 'https://github.com/Emrys-yyh', username: 'GitHub' },
        { platform: 'zhihu', url: 'https://www.zhihu.com/people/74-44-50-26-39', username: 'Zhihu' },
        { platform: 'xiaohongshu', url: 'https://www.xiaohongshu.com/user/profile/692941e000000000380194d0', username: 'Xiaohongshu' },
      ],
      lastUpdated: "2026-03-14"
    } as ProfileData,

    SECTIONS: [
      { id: 'about', title: 'About', type: 'about' },
      { id: 'news', title: 'Recent News', navLabel: 'News', type: 'news', content: newsData.en },
      { id: 'publications', title: 'Selected Publications', navLabel: 'Publications', type: 'publications', content: publicationsData.en },
      { 
        id: 'awards', 
        title: 'Awards & Honors', 
        type: 'awards', 
        content: [
          { id: 'aw1', title: "Jiangsu Provincial Third Prize, Contemporary Undergraduate Mathematical Contest in Modeling",organization: "China Society for Industrial and Applied Mathematics",year: " Sep 2025"},
          { id: 'aw2', title: "Jiangsu Provincial Second Prize, The Chinese Mathematics Competitions", organization: "Chinese Mathematical Society", year: "Oct 2025"},
          { id: 'aw3', title: "People's Scholarship", organization: "Nanjing University", year: "Dec 2025" },
        ] 
      },
      { 
        id: 'education', 
        title: 'Education', 
        type: 'timeline', 
        content: [
          { id: 'ed1', role: "Undergraduate Student", organization: "Nanjing University", period: "2024 - present", description: "Major: Mathematics" },
          { id: 'ed2', role: "Senior High Student", organization: "Hengyang No.8 High School", period: "2021 - 2024", description: "An unforgettable experience" },
          ] 
      },
      { 
        id: 'internships', 
        title: 'Internships', 
        type: 'timeline', 
        content: [
          { id: 'in1', role: "Research Intern", organization: "X-lance Lab", period: "2024.08 - present", description: "Worked on speech generation." }
        ] 
      }
    ] as SectionConfig[]
  },
  zh: {
    PROFILE: {
      name: "阳宇航",
      title: "本科生",
      affiliation: "南京大学 数学",
      email: "yuhangyang@smail.nju.edu.cn",
      location: "中国 南京",
      bio: `
        你好，我是阳宇航，**南京大学**数学学院大二学生。我始终坚信一个观点：数学是人工智能的灵魂，而 AI 领域的下一次飞跃，必然源于数学向 AI 赋能的全新应用。
        基于在数学分析、线性代数、概率论、微分方程以及抽象代数等高级数学领域打下的坚实基础，我正致力于探索纯数学与深度学习的交叉地带。相较于单纯的工程调参，我更痴迷于探究事物的本质——“是什么”与“为什么”。我近期的学术好奇心深受联想记忆模型（Associative Memory Models）等广义数学框架的启发，热衷于探索如何通过抽象的数学操作（如相似性度量与分离函数）来从底层重构和定义机器的记忆容量与学习行为。我希望用严谨的数学逻辑去解释 AI，特别是在可解释性 AI (Explainable AI) 和记忆模型领域。
        我享受抽丝剥茧的研究过程，也极度热爱编写代码，将复杂的数学方程转化为简洁高效的 Python 逻辑对我而言是一件充满魔力的事情。在日常学习中，我不仅熟练掌握 Python 和 LaTeX，还建立了一套极具逻辑性的个人知识管理系统，这让我在推进任何项目时依然能保持一丝不苟、精益求精的研究状态。
        在学术之外，我是一个注重团队协作也享受独立思考的人。脱离屏幕和草稿纸时，我通常活跃在篮球场和乒乓球桌旁，或者正在努力解锁我的游泳新技能。
        目前，我正全面系统地进行 AI 领域的入门与进阶学习，并计划在研究生阶段彻底转向 AI 研究方向。我非常渴望能加入一个充满活力的 AI 课题组，跟随优秀的前辈学习，参与到激动人心的前沿科研中去。
      `,
      researchInterests: [
        "深度学习的数学基础",
        "可解释性人工智能 (XAI)",
        "联想记忆模型",
        "AI 认知与学习机制"
      ],
      socials: [
        { platform: 'email', url: 'mailto:yuhangyang@smail.nju.edu.cn' },
        // { platform: 'scholar', url: 'https://scholar.google.com', username: 'Google Scholar' },
        { platform: 'github', url: 'https://github.com/Emrys-yyh', username: 'GitHub' },
        { platform: 'zhihu', url: 'https://www.zhihu.com/people/74-44-50-26-39', username: '知乎' },
        { platform: 'xiaohongshu', url: 'https://www.xiaohongshu.com/user/profile/692941e000000000380194d0', username: '小红书' },
      ],
      lastUpdated: "2026-03-14"
    } as ProfileData,

    SECTIONS: [
      { id: 'about', title: '关于我', type: 'about' },
      { id: 'news', title: '最新动态', type: 'news', content: newsData.zh },
      { id: 'publications', title: '学术论文', type: 'publications', content: publicationsData.zh },
      { 
        id: 'awards', 
        title: '荣誉奖项', 
        type: 'awards', 
        content: [
          { id: 'aw1', title: "全国大学生数学建模竞赛江苏省三等奖", organization: "中国工业与应用数学学会", year: "2025年9月" },
          { id: 'aw2', title: "全国大学生数学竞赛江苏省二等奖", organization: "中国数学会", year: "2025年10月" },
          { id: 'aw3', title: "人民奖学金", organization: "南京大学", year: "2025年12月" },
        ] 
      },
      { 
        id: 'education', 
        title: '教育背景', 
        type: 'timeline', 
        content: [
          { id: 'ed1', role: "本科生", organization: "南京大学（Nanjing University)", period: "2024 - 至今", description: "专业：数学" },
          { id: 'ed2', role: "高中生", organization: "衡阳市第八中学", period: "2021 - 2024", description: "这是一段难忘的回忆" },
          // { id: 'ed3', role: "计算机科学学士", organization: "加州大学伯克利分校 (UC Berkeley)", period: "2014 - 2018" }
        ] 
      },
      { 
        id: 'internships', 
        title: '实习经历', 
        type: 'timeline', 
        content: [
    
        ] 
      }
    ] as SectionConfig[]
  }
};
