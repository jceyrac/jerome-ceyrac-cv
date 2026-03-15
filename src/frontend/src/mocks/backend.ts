import type { backendInterface } from "../backend";

export const mockBackend: backendInterface = {
  getHero: async () =>
    `Jérôme Ceyrac\nSenior Product Manager\nProduct leader with 15+ years bridging technology and business. Based in Pully, Switzerland.`,

  getAbout: async () =>
    `Product Manager and developer based in Pully, Switzerland.\n\nI bridge product strategy and hands-on development — from managing API products at scale to building smart contracts and AI-driven tools.\n\nCurrently: Product Owner at Vaudoise Assurances (Lausanne) and self-directed Web3 developer.`,

 getExperience: async () =>
  `

### Product Owner | AI and Web3 Developer · April 2024 to Now 
**Vaudoise Assurances (day role) |Self directed Web3 (concurrent)** - Lausanne, Switzerland
- Built a Cloud Service Center ("Cloud Assembly Factory") providing Azure infrastructure for Vaudoise's digital products
- Developed and deployed Solidity smart contracts (Cyfrin Updraft program)
- Active governance contributor at Hyperlink and ICP GoldDAO
- Built expertise in Machine Learning, Neural Networks, Deep Learning and LLM (DeepLearning.AI, Stanford University)

### Product Manager · Jan to Nov 2022
**Powens** – Paris, France
- Managed the API Bank product, the bank data aggregation market leader in France
- Led the integration of PSD2 APIs covering more than 90% of the French banking market
- Increased end-user conversion rates by 30% via app-to-app authentication
- Developed the B2B services client segment (accounting, ERP, payroll) by conducting discovery research with clients to consolidate leadership in the market

### Product Manager · Jan to Sep 2021 
**Adeo** – Lille, France
- Managed Data Finder, an internal portal and API for sharing and discovering group data
- Designed and delivered an orchestrator to automate Data Finder service subscriptions, improving UX and reducing support workload
- Designed efficient onboarding workflows for non-technical users to easily share their data

### Product Manager · Apr 2018 to Dec 2019 
**Allianz Trade** – Paris, France
- Managed API Single Invoice Cover (SIC), the first B2B API in the market for real-time invoice cover requests
- Increased revenues via higher invoice volumes while containing loss ratio
- Collaborated with Crédit Agricole on the launch of their factoring product Cash in Time, using SIC API to insure invoices
- Continuous improvement of the product

### Product Manager · Jan 2011 to Dec 2013
**GENIAC** – London, UK and Madrid, Spain
- Managed GENIAC, a platform handling SME administrative and compliance tasks (accounting, HR, legal) to enable them to focus on growth
- Designed the MVP securing a Series A investment, then led a strategic pivot into HR and payroll services

### Product Owner · Jan to Jun 2014 
**Business of Fashion** – London, UK
- Designed, shipped and launched the BoF career website

### Java Developer → Release Manager → Project Manager → Business Analyst · Jan 2006 to Apr 2013 
**Accenture** – Paris, France
- Progressed from developer and release manager to business analyst and project manager, delivering loan and payment applications for Société Générale, Crédit du Nord and Banque Populaire`,

  getSkills: async () =>
    `## Skills\n\n### Product Management\nProduct Strategy · Roadmapping · Agile/Scrum · OKRs · User Research · API Product Management · B2B/B2C · Stakeholder Management\n\n### Development\nSolidity · Motoko · Python · Java · React · TypeScript · REST APIs · Cloud (Azure)\n\n### AI & Data\nMachine Learning · Neural Networks · Deep Learning · LLMs · Data Analysis\n\n### Tools\nJira · Confluence · Figma · GitHub · VS Code · dfx`,

  getCertifications: async () =>
    `- **Solidity Smart Contract Development** – Cyfrin Updraft\n- **Machine Learning Specialization** – DeepLearning.AI / Stanford University\n- **Deep Learning Specialization** – DeepLearning.AI\n- **ICP Developer** – DFINITY Foundation`,

  getEducation: async () =>
    `## Education\n\n### 2003 – 2006 | Engineering Degree – Computer Science\n**ESIEA** – Paris, France\n\n### 2001 – 2003 | DUT Informatique\n**IUT de Cachan** – Cachan, France`,

  getProjects: async () =>
    `## Projects\n\n### Cloud Assembly Factory\nCloud Service Center providing Azure infrastructure as a service for Vaudoise Assurances digital products.\n\n### GoldDAO Governance\nActive contributor to ICP GoldDAO governance on the Internet Computer Protocol.\n\n### Web3 Smart Contracts\nSolidity smart contracts via the Cyfrin Updraft certification program.\n\n### This CV Website\nBuilt on the Internet Computer using Motoko backend and React frontend. All content stored on-chain.`,

  getContact: async () =>
    `## Contact\n\n- **Email:** jerome.ceyrac@gmail.com\n- **LinkedIn:** linkedin.com/in/jeromeceyrac\n- **GitHub:** github.com/jeromeceyrac\n- **Location:** Pully, Switzerland`,

  updateHero: async () => {},
  updateAbout: async () => {},
  updateExperience: async () => {},
  updateSkills: async () => {},
  updateCertifications: async () => {},
  updateEducation: async () => {},
  updateProjects: async () => {},
  updateContact: async () => {},
};