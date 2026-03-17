import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import Migration "migration";

// Specify the data migration function in with-clause
(with migration = Migration.run)
actor {
  var hero = "Jérôme Ceyrac\nSenior Product Manager\nProduct leader with 15+ years bridging technology and business. Based in Pully, Switzerland.";

  var about = "Product Manager and developer based in Pully, Switzerland.\n\nI bridge product strategy and hands-on development — from managing API products at scale to building smart contracts and AI-driven tools.\n\nCurrently: Product Owner at Vaudoise Assurances (Lausanne) and self-directed Web3 developer.";

  var experience = "### Product Owner | AI and Web3 Developer · April 2024 to Now\n**Vaudoise Assurances (day role) | Self directed Web3 (concurrent)** - Lausanne, Switzerland\n- Built a Cloud Service Center (\"Cloud Assembly Factory\") providing Azure infrastructure for Vaudoise's digital products\n- Developed and deployed Solidity smart contracts (Cyfrin Updraft program)\n- Active governance contributor at Hyperlink and ICP GoldDAO\n- Built expertise in Machine Learning, Neural Networks, Deep Learning and LLM (DeepLearning.AI, Stanford University)\n\n### Product Manager · Jan to Nov 2022\n**Powens** – Paris, France\n- Managed the API Bank product, the bank data aggregation market leader in France\n- Led the integration of PSD2 APIs covering more than 90% of the French banking market\n- Increased end-user conversion rates by 30% via app-to-app authentication\n- Developed the B2B services client segment (accounting, ERP, payroll) by conducting discovery research with clients to consolidate leadership in the market\n\n### Product Manager · Jan to Sep 2021\n**Adeo** – Lille, France\n- Managed Data Finder, an internal portal and API for sharing and discovering group data\n- Designed and delivered an orchestrator to automate Data Finder service subscriptions, improving UX and reducing support workload\n- Designed efficient onboarding workflows for non-technical users to easily share their data\n\n### Product Manager · Apr 2018 to Dec 2019\n**Allianz Trade** – Paris, France\n- Managed API Single Invoice Cover (SIC), the first B2B API in the market for real-time invoice cover requests\n- Increased revenues via higher invoice volumes while containing loss ratio\n- Collaborated with Crédit Agricole on the launch of their factoring product Cash in Time, using SIC API to insure invoices\n- Continuous improvement of the product\n\n### Product Manager · Jan 2011 to Dec 2013\n**GENIAC** – London, UK and Madrid, Spain\n- Managed GENIAC, a platform handling SME administrative and compliance tasks (accounting, HR, legal) to enable them to focus on growth\n- Designed the MVP securing a Series A investment, then led a strategic pivot into HR and payroll services\n\n### Product Owner · Jan to Jun 2014\n**Business of Fashion** – London, UK\n- Designed, shipped and launched the BoF career website\n\n### Java Developer → Release Manager → Project Manager → Business Analyst · Jan 2006 to Apr 2013\n**Accenture** – Paris, France\n- Progressed from developer and release manager to business analyst and project manager, delivering loan and payment applications for Société Générale, Crédit du Nord and Banque Populaire";

  var skills = "## Skills\n\n### Product Management\nProduct Strategy, Roadmapping, Agile/Scrum, OKRs, User Research, API Product Management, B2B/B2C, Stakeholder Management\n\n### Development\nSolidity, Motoko, Python, Java, React, TypeScript, REST APIs, Cloud (Azure)\n\n### AI & Data\nMachine Learning, Neural Networks, Deep Learning, LLMs, Data Analysis\n\n### Tools\nJira, Confluence, Figma, GitHub, VS Code, dfx";

  var certifications = "- **Solidity Smart Contract Development** – Cyfrin Updraft - 2025\n- **Machine Learning Specialization** – DeepLearning.AI / Stanford University - 2024\n- **UX Design Specialization** – Google - 2024\n- **Drone Pilote** – 2023\n- **Scrum Master** – 2010";

  var education = "**Engineering Degree – Computer Science** - EPF-Ecole d'ingénieurs – Paris, France - 2005\n\n**Scientific Baccalaureate (' A' Levels)** - Lille, France - 2000";

  var projects = "## Projects\n\n### Cloud Assembly Factory\nCloud Service Center providing Azure infrastructure as a service for Vaudoise Assurances digital products.\n\n### GoldDAO Governance\nActive contributor to ICP GoldDAO governance on the Internet Computer Protocol.\n\n### Web3 Smart Contracts\nSolidity smart contracts via the Cyfrin Updraft certification program.\n\n### This CV Website\nBuilt on the Internet Computer using Motoko backend and React frontend. All content stored on-chain.";

  var contact = "## Contact\n\n- **Email:** jerome.ceyrac@gmail.com\n- **LinkedIn:** linkedin.com/in/jeromeceyrac\n- **GitHub:** github.com/jeromeceyrac\n- **Location:** Pully, Switzerland";

  public query ({ caller }) func getHero() : async Text {
    hero;
  };

  public query ({ caller }) func getAbout() : async Text {
    about;
  };

  public query ({ caller }) func getExperience() : async Text {
    experience;
  };

  public query ({ caller }) func getSkills() : async Text {
    skills;
  };

  public query ({ caller }) func getCertifications() : async Text {
    certifications;
  };

  public query ({ caller }) func getEducation() : async Text {
    education;
  };

  public query ({ caller }) func getProjects() : async Text {
    projects;
  };

  public query ({ caller }) func getContact() : async Text {
    contact;
  };

  public shared ({ caller }) func updateHero(newHero : Text) : async () {
    if (newHero.isEmpty()) {
      Runtime.trap("No new hero given");
    };
    hero := newHero;
  };

  public shared ({ caller }) func updateAbout(newAbout : Text) : async () {
    if (newAbout.isEmpty()) {
      Runtime.trap("No new about given");
    };
    about := newAbout;
  };

  public shared ({ caller }) func updateExperience(newExperience : Text) : async () {
    if (newExperience.isEmpty()) {
      Runtime.trap("No new experience given");
    };
    experience := newExperience;
  };

  public shared ({ caller }) func updateSkills(newSkills : Text) : async () {
    if (newSkills.isEmpty()) {
      Runtime.trap("No new skills given");
    };
    skills := newSkills;
  };

  public shared ({ caller }) func updateCertifications(newCertifications : Text) : async () {
    if (newCertifications.isEmpty()) {
      Runtime.trap("No new certifications given");
    };
    certifications := newCertifications;
  };

  public shared ({ caller }) func updateEducation(newEducation : Text) : async () {
    if (newEducation.isEmpty()) {
      Runtime.trap("No new education given");
    };
    education := newEducation;
  };

  public shared ({ caller }) func updateProjects(newProjects : Text) : async () {
    if (newProjects.isEmpty()) {
      Runtime.trap("No new projects given");
    };
    projects := newProjects;
  };

  public shared ({ caller }) func updateContact(newContact : Text) : async () {
    if (newContact.isEmpty()) {
      Runtime.trap("No new contact given");
    };
    contact := newContact;
  };
};
