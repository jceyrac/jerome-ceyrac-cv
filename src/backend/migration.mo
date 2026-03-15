import Text "mo:core/Text";

module {
  // Old actor type
  type OldActor = {
    var hero : Text;
    var about : Text;
    var experience : Text;
    var skills : Text;
    var certifications : Text;
    var education : Text;
    var projects : Text;
    var contact : Text;
  };

  // New actor type (identical structure for this migration)
  type NewActor = {
    var hero : Text;
    var about : Text;
    var experience : Text;
    var skills : Text;
    var certifications : Text;
    var education : Text;
    var projects : Text;
    var contact : Text;
  };

  // Migration function called by the main actor via the with-clause
  public func run(old : OldActor) : NewActor {
    {
      var hero = "Jérôme Ceyrac\nSenior Product Manager\nProduct leader with 15+ years bridging technology and business. Based in Pully, Switzerland.";
      var about = "## About\nProduct Manager and developer based in Pully, Switzerland.\n\nI bridge product strategy and hands-on development — from managing API products at scale to building smart contracts and AI-driven tools. I thrive at the intersection of technology, business, and users.\n\nCurrently: Product Owner at Vaudoise Assurances (Lausanne) and self-directed Web3 developer.";
      var experience = "## Experience\n\n### April 2024 – Now | Product Owner · AI and Web3 Developer\n**Vaudoise Assurances** – Lausanne, Switzerland (day role) | Self-directed Web3 (concurrent)\n- Built a Cloud Service Center (\"Cloud Assembly Factory\") providing Azure infrastructure for Vaudoise's digital products\n- Developed and deployed Solidity smart contracts (Cyfrin Updraft program)\n- Active governance contributor at Hyperlink and ICP GoldDAO\n- Built expertise in Machine Learning, Neural Networks, Deep Learning and LLM (DeepLearning.AI, Stanford University)\n\n### Jan – Nov 2022 | Product Manager (11 months)\n**Powens** (ex-Budget Insight) – Paris, France\n- Managed the API Bank product, the bank data aggregation market leader in France\n- Led the integration of PSD2 APIs covering more than 90% of the French banking market\n- Increased end-user conversion rates by 30% via app-to-app authentication\n- Developed the B2B services client segment (accounting, ERP, payroll)\n\n### Jan – Sep 2021 | Product Manager (9 months)\n**Adeo** – Lille, France\n- Managed Data Finder, an internal portal and API for sharing and discovering group data\n- Designed and delivered an orchestrator to automate Data Finder service subscriptions\n- Designed efficient onboarding workflows for non-technical users\n\n### Apr 2018 – Dec 2019 | Product Manager (1 yr 8 months)\n**Allianz Trade** (ex-Euler Hermes Digital Agency) – Paris, France\n- Managed API Single Invoice Cover (SIC), the first B2B API in the market for real-time invoice cover requests\n- Increased revenues via higher invoice volumes while containing loss ratio\n- Collaborated with Crédit Agricole on the launch of Cash in Time factoring product\n\n### May 2014 – Aug 2017 | Product Manager (3 years)\n**GENIAC** – London, UK and Madrid, Spain\n- Managed GENIAC, a platform handling SME administrative and compliance tasks (accounting, HR, legal)\n- Designed the MVP securing Series A investment, then led a strategic pivot into HR and payroll services\n\n### Jan – Jun 2014 | Product Owner (6 months)\n**Business of Fashion** – London, UK\n- Designed, shipped and launched the BoF career website\n\n### Jan 2006 – Apr 2013 | Java Developer → Release Manager → Project Manager → Business Analyst (7+ years)\n**Accenture** – Paris, France\n- Progressed from developer and release manager to business analyst and project manager\n- Delivered loan and payment applications for Société Générale, Crédit du Nord and Banque Populaire";
      var skills = "## Skills\n\n### Product Management\nProduct Strategy · Roadmapping · Agile/Scrum · OKRs · User Research · API Product Management · B2B/B2C · Stakeholder Management\n\n### Development\nSolidity · Motoko · Python · Java · React · TypeScript · REST APIs · Cloud (Azure)\n\n### AI & Data\nMachine Learning · Neural Networks · Deep Learning · LLMs · Data Analysis\n\n### Tools\nJira · Confluence · Figma · GitHub · VS Code · dfx";
      var certifications = "## Certifications\n\n- **Solidity Smart Contract Development** – Cyfrin Updraft\n- **Machine Learning Specialization** – DeepLearning.AI / Stanford University\n- **Deep Learning Specialization** – DeepLearning.AI\n- **ICP Developer** – DFINITY Foundation";
      var education = "## Education\n\n### 2003 – 2006 | Engineering Degree – Computer Science\n**ESIEA** – Paris, France\nSpecialisation in software engineering and information systems.\n\n### 2001 – 2003 | DUT Informatique\n**IUT de Cachan** – Cachan, France";
      var projects = "## Projects\n\n### Cloud Assembly Factory\nCloud Service Center providing Azure infrastructure as a service for Vaudoise Assurances digital products. Built internal tooling and automation pipelines.\n\n### GoldDAO Governance\nActive contributor to ICP GoldDAO governance. Participating in proposals and community discussions on the Internet Computer Protocol.\n\n### Web3 Smart Contracts\nDeveloped and deployed Solidity smart contracts as part of the Cyfrin Updraft certification program.\n\n### This CV Website\nBuilt on the Internet Computer using Motoko backend and React frontend. All content is stored on-chain and updatable via canister functions.";
      var contact = "## Contact\n\n- **Email:** jerome.ceyrac@gmail.com\n- **LinkedIn:** linkedin.com/in/jeromeceyrac\n- **GitHub:** github.com/jeromeceyrac\n- **Location:** Pully, Switzerland";
    };
  };
};
