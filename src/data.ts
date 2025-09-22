// TypeScript interfaces for data structure
interface NavItem {
  title: string;
  link: string;
}

interface AccordionItem {
  count?: string;
  title: string;
  content: string;
}

interface RoadmapItem {
  imgURL: string;
  phase: string;
  timePeriod: string;
}

interface RoadmapContentBox {
  list: string;
}

interface RoadmapContent {
  box: RoadmapContentBox[];
}

interface TeamMember {
  imgURL: string;
  name: string;
  profession: string;
  socialLink: string;
  details: string;
}

interface SocialLink {
  iconSrc: string;
  iconAlt: string;
  link: string;
}

interface RoadmapPhase {
  title: string;
  content: string[];
}

interface NewRoadMap {
  allTabs: string[];
  allTabsContent: {
    [key: string]: RoadmapPhase[];
  };
}

interface ValueData {
  heading: string;
  paragraph: string;
}

interface CountryCode {
  code: string;
}

interface ContactUs {
  countryCodes: CountryCode[];
}

interface ContentData {
  header: NavItem[];
  Footer: NavItem[];
  accordionData: AccordionItem[];
  faqAccordionData: AccordionItem[];
  faqPageAccordion: AccordionItem[];
  roadmap: RoadmapItem[];
  roadmapContent: RoadmapContent[];
  Team: TeamMember[];
  socialLinks: SocialLink[];
  newRoadMap: NewRoadMap;
  valuesData: ValueData[];
  contactUs: ContactUs;
}

export const content: ContentData = {
  header: [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/about-us",
    },
    {
      title: "FAQ’s",
      link: "/faq",
    },
    {
      title: "Contact",
      link: "/contact-us",
    },
  ],
  Footer: [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/about-us",
    },
    {
      title: "FAQ",
      link: "/faq",
    },
    {
      title: "Contact Us",
      link: "/contact-us",
    },
  ],
  accordionData: [
    {
      count: "01",
      title: "The Ecosystem",
      content:
        "BlockMed Pro uses blockchain technology to keep your medical records secure, private, and tamper-proof. Every update or access to a record is encrypted and stored across multiple locations, ensuring transparency and security.  This decentralised system ensures that only users that you authorise can access your data, setting a new standard for patient empowerment & data protection in the digital age.",
    },
    {
      count: "02",
      title: "Passive Income for Users",
      content:
        "BlockMed Pro uses advanced encryption and pseudonymisation to let patients securely sell their health data to pharmaceutical companies. This gives patients full control over their records while contributing to medical research. Pharma companies benefit from detailed, long-term patient data to track treatments, health outcomes, and responses. AI-powered tools enhance analytics, helping with cohort selection, predictive modelling, and data visualisation.",
    },
    {
      count: "03",
      title: "Personalised Care",
      content:
        "AI-powered tools in BlockMed Pro will use machine learning to process vast amounts of health data quickly and accurately. These tools can identify patterns in users’ health data including analysing wider patient cohorts, predicting health trends, and generating clear visual insights, thereby enabling more targeted interventions, better treatment planning, and improved health outcomes.",
    },
    {
      count: "04",
      title: "Complete Interoperability",
      content:
        "BlockMed Pro is shaping the future of healthcare by putting patients in control of their medical data. The platform enables a seamless patient journey, with users being able to share their health records with clinics, pharmacies, and pharmaceutical companies. With interoperability at its core, it ensures a smooth flow of information, allowing healthcare providers to make informed decisions based on a complete patient history. This leads to better treatment outcomes, improved coordination, and a more efficient healthcare experience for users.",
    },
  ],
  faqAccordionData: [
    {
      title: "How can I access my medical records through BlockMed Pro?",
      content:
        "You can access your medical records securely through the BlockMed Pro platform using their unique login credentials. Our user-friendly interface ensures easy navigation for viewing, managing, and sharing your health information.",
    },
    {
      title: "How can I benefit financially from using BlockMed Pro?",
      content:
        "BlockMed Pro offers a unique feature where you can choose to share your anonymized health data with pharmaceutical companies for research purposes. In return for contributing to medical research, you will receive remuneration, providing a financial incentive while advancing healthcare innovation.",
    },
    {
      title: "What payment methods are accepted on BlockMed Pro?",
      content:
        "BlockMed Pro is designed to accommodate a wide range of payment methods for its services, including traditional currencies like USD and GBP, as well as cryptocurrencies, offering flexibility and convenience to you.",
    },
    {
      title: "How does BlockMed Pro ensure ease of use for clinicians?",
      content:
        "BlockMed Pro is designed by clinicians for clinicians, featuring customizable medical templates for various specialties, simplified prescribing processes, and multiple communication methods with patients, pharmacies, and other healthcare professionals. This user-friendly interface allows for efficient record-keeping and coordination of care, all within a secure and compliant platform.",
    },
  ],
  faqPageAccordion: [
    {
      title: "How can I access my medical records through BlockMed Pro?",
      content:
        "You can access your medical records securely through the BlockMed Pro platform using their unique login credentials. Our user-friendly interface ensures easy navigation for viewing, managing, and sharing your health information.",
    },
    {
      title: "Who can access my health data without my permission",
      content:
        "Absolutely no one. BlockMed Pro prioritizes your privacy; only you have the control to grant or revoke access to your medical records to healthcare providers, pharmacies, and other entities.",
    },
    // {
    //   title:
    //     "How can I share my medical history with new healthcare providers within the BlockMed Pro network?",
    //   content:
    //     "Within the BlockMed Pro ecosystem, sharing your medical history with new or existing healthcare providers is streamlined and secure. With your consent, providers can easily access your records for a comprehensive view of your health history, facilitating better-coordinated care and informed medical decisions.",
    // },
    {
      title: "How can I benefit financially from using BlockMed Pro?",
      content:
        "BlockMed Pro offers a unique feature where you can choose to share your anonymized health data with pharmaceutical companies for research purposes. In return for contributing to medical research, you will receive remuneration, providing a financial incentive while advancing healthcare innovation.",
    },
    // {
    //   title: "What payment methods are accepted on BlockMed Pro?",
    //   content:
    //     "BlockMed Pro is designed to accommodate a wide range of payment methods for its services, including traditional currencies like USD and GBP, as well as cryptocurrencies, offering flexibility and convenience to you.",
    // },
    // {
    //   title:
    //     "How does the platform ensure the accuracy and integrity of medical records?",
    //   content:
    //     "The platform utilizes blockchain technology to maintain the integrity of medical records. Once information is entered into the blockchain, it cannot be altered or deleted, ensuring the accuracy and reliability of medical data.",
    // },
    {
      title:
        "What measures are in place for data security and patient privacy?",
      content:
        "BlockMed Pro employs advanced encryption, Smart Contract enabled security, and strict access controls to protect patient data and ensure privacy. Only authorized individuals with explicit patient consent can access specific health records, in compliance with global privacy regulations.",
    },
    // {
    //   title:
    //     "How does BlockMed Pro serve as the gold standard for electronic health records?",
    //   content:
    //     "BlockMed Pro is not just another EHR platform; it's a comprehensive solution that all clinics and pharmacies utilize as the primary, all-encompassing EHR system, ensuring uniformity, security, and efficiency in managing patient records. With advanced security, seamless integration capabilities, and a patient-centered approach, it sets a new benchmark for quality and efficiency in healthcare management.",
    // },
    // {
    //   title: "How does BlockMed Pro ensure ease of use for clinicians?",
    //   content:
    //     "BlockMed Pro is designed by clinicians for clinicians, featuring customizable medical templates for various specialties, simplified prescribing processes, and multiple communication methods with patients, pharmacies, and other healthcare professionals. This user-friendly interface allows for efficient record-keeping and coordination of care, all within a secure and compliant platform.",
    // },
    // {
    //   title:
    //     "How can healthcare providers collaborate within the BlockMed Pro ecosystem?",
    //   content:
    //     "Within the BlockMed Pro ecosystem, healthcare providers can seamlessly refer patients to one another, request investigations, and share patient information securely, all with patient consent. This interoperability fosters a collaborative environment, ensuring that every healthcare touchpoint is connected and efficient.",
    // },
    // {
    //   title:
    //     "How does BlockMed Pro cater to the needs of community pharmacies?",
    //   content:
    //     "Community pharmacies play a crucial role in patient care, and BlockMed Pro seamlessly integrates pharmacy operations with our EHR system. Pharmacies can access prescriptions, manage medication records, and communicate with prescribers directly, ensuring accurate and efficient dispensing of medications.",
    // },
    {
      title:
        "What benefits does BlockMed Pro offer to pharmaceutical company users?",
      content:
        "Pharmaceutical companies on BlockMed Pro can access a wealth of anonymized patient data, with consent, for research and development purposes. This access provides valuable insights into patient outcomes and medication efficacy, driving innovation while ensuring patient privacy and data security.",
    },
    // {
    //   title:
    //     "How does blockchain technology benefit the BlockMed Pro platform?",
    //   content:
    //     "Blockchain technology offers a decentralized, secure, and transparent way to store and manage electronic health records. It enhances data security, patient privacy, and enables the immutable recording of transactions, ensuring data integrity and trust across the healthcare ecosystem.",
    // },
    // {
    //   title: "Are Smart Contracts secure?",
    //   content:
    //     "Yes, Smart Contracts are highly secure. They automate and enforce the execution of agreements based on pre-defined rules, significantly reducing the risk of data breaches and unauthorized access, while ensuring compliance with healthcare regulations.",
    // },
    {
      title:
        "Why is BlockMed Pro's use of blockchain technology unique in the field of electronic health records?",
      content:
        "BlockMed Pro leverages blockchain technology to offer unparalleled security, transparency, and patient control over health data. Our implementation of smart contracts automates consent management and compliance, setting us apart from traditional EHR systems and redefining data integrity in healthcare.",
    },
    // {
    //   title:
    //     "What are electronic health records (EHRs), and how does BlockMed Pro enhance their utility?",
    //   content:
    //     "Electronic Health Records (EHRs) are digital versions of patients' paper charts, offering a real-time, patient-centered record accessible to authorized users. BlockMed Pro enhances EHRs by integrating blockchain for secure, immutable record-keeping and ensuring that data is accessible across the healthcare continuum with patient consent.",
    // },
  ],
  roadmap: [
    {
      imgURL: "/assets/Images/phase-1.svg",
      phase: "Phase 1, Q1 & Q2",
      timePeriod: "2024",
    },
    {
      imgURL: "/assets/Images/phase-2.svg",
      phase: "Phase 2, Q3",
      timePeriod: "2024",
    },
    {
      imgURL: "/assets/Images/phase-3.svg",
      phase: "Phase 3, Q4",
      timePeriod: "2024",
    },
    // {
    //   imgURL: "/assets/Images/phase-3.svg",
    //   phase: "Phase 4, Q1",
    //   timePeriod: "2025",
    // },
  ],
  roadmapContent: [
    {
      box: [
        {
          list: "Platform Design",
        },
        {
          list: "Development of Web3 dApp",
        },
      ],
    },
    {
      box: [
        // {
        //   list: "BlockMed Pro Token Pre-sale",
        // },
        {
          list: "Onboarding of clinics and pharmaceutical companies",
        },
      ],
    },
    {
      box: [
        {
          list: "Launch of Mobile App",
        },
        // {
        //   list: "BlockMed Pro Token Public Launch",
        // },
      ],
    },
    // {
    //   box: [
    //     {
    //       list: "Token Launch",
    //     },
    //   ],
    // },
  ],
  Team: [
    {
      imgURL: "/assets/Images/ceo.png",
      name: "Dr. Burhan Ahmed",
      profession: "CEO & Co-Founder",
      socialLink: "https://www.linkedin.com/in/mirza-burhan-ahmed-b1528086/",
      details:
        'Dr Burhan identified a niche where patients could securely monetise their data. Using blockchain technology, his vision ensures data security while empowering individuals to own and control their health information as a "One True Record." With 31 years of combined healthcare experience, BlockMed Pro understands system limitations and the features needed for transformative solutions. Dr Burhan, member of the UK APPG for Blockchain Technologies, holds numerous roles within the NHS (GP Partner, LMC, PCN Clinical Director) and brings expertise in the blockchain in healthcare space and unmatched access to trial solutions and influence policy at local and national levels.',
    },
    {
      imgURL: "/assets/Images/employee2.png",
      name: "Sadia Akhtar",
      profession: "COO & Co-Founder",
      socialLink: "https://www.linkedin.com/in/sadia-a-88547172/",
      details:
        "A prescribing superintendent pharmacist and pharmacy owner, Sadia leverages her strong pharmaceutical network to provide BlockMed Pro with key insights, shaping our platform to meet industry needs. With over 15 years of experience spanning NHS, private health sector, and the Pharmaceutical industry, Sadia has gained management and operational skills ideal for driving BlockMed Pro to its full potential.",
    },
    {
      imgURL: "/assets/Images/cdo.png",
      name: "Arbab Khan",
      profession: "CDO & Co-Founder",
      socialLink: "https://www.linkedin.com/in/bobbiekhan/",
      details:
        "Arbab Khan has over 12 years of experience in blockchain, web3, and e-commerce. As a co-founder of BlockMed Pro, Arbab’s experience within blockchain and Web3 will be instrumental for BlockMed Pro in creating a decentralised ecosystem. Her expertise spans talent acquisition, digital transformation, and emerging technologies, honed through roles at McKinsey & Company, Babylon Health, Chainalysis, and Coincover.",
    },
    // {
    //   imgURL: "/assets/Images/lambat.png",
    //   name: "Mohammed Lambat",
    //   profession: "CFO & Co-Founder",
    //   socialLink: "https://www.linkedin.com/in/mohammed-ali-lambat-92526768",
    // },
  ],
  socialLinks: [
    {
      iconSrc: "/assets/Images/social-icons/facebook.svg",
      iconAlt: "facebook.svg",
      link: "https://www.facebook.com/profile.php?id=61573077896410&",
    },
    {
      iconSrc: "/assets/Images/social-icons/twitter.svg",
      iconAlt: "twitter.svg",
      link: "https://x.com/BlockMedPro",
    },
    {
      iconSrc: "/assets/Images/social-icons/instagram.svg",
      iconAlt: "instagram.svg",
      link: "https://www.instagram.com/blockmedpro/",
    },
    {
      iconSrc: "/assets/Images/social-icons/linkedin.svg",
      iconAlt: "linkedin.svg",
      link: "https://www.linkedin.com/company/blockmed-pro",
    },
  ],

  newRoadMap: {
    // New Roadmap
    allTabs: [
      "Phase 1",
      "Phase 2",
      // , "Phase 3", "Phase 4"
    ],
    allTabsContent: {
      "Phase 1": [
        {
          title: "2024",
          content: ["Platform Design", "Company incorporation in ADGM"],
        },
        {
          title: "2025",
          content: [
            "Opening of Pre-seed round for BlockMed Pro Global Ltd",
            "Proof of Concept for MVP",
            "Signing of licensing agreement with BlockMed Pro UK Ltd",
            "Open SEIS/EIS for BlockMed Pro UK Ltd",
            "Launch of MVP",
          ],
        },
      ],
      "Phase 2": [
        {
          title: "2026",
          content: [
            "Development of EHR & Pharmacy modules",
            "Mobile App",
            "Opening of Seed round raise for BlockMed Pro Global Ltd",
            "Broad market launch in other global markets",
          ],
        },
      ],
      // "Phase 3": [
      //   {
      //     title: "2025 - Q2",
      //     content: [
      //       "LAUNCH OF MVP - Data Marketplace (initial versions of Patient & Pharma modules)",
      //       "Scale customer acquisition through UK vendor including completion of IM1 Integration for NHS",
      //       "Completion of Super Admin Module (CRM & CMS)",
      //       "Start development of Clinic & Pharmacy Modules",
      //     ],
      //   },
      //   {
      //     title: "2025 - Q3",
      //     content: [
      //       "Scaling marketing",
      //       "Development of advanced patient engagement features (AI integration & personalised care)",
      //       "Design & development of mobile App",
      //     ],
      //   },
      //   {
      //     title: "2025 - Q4",
      //     content: [
      //       "Completion of Clinics, Pharmacy Modules and advanced patient engagement features ",
      //       "Broad market launch in other global markets via third party partnerships",
      //     ],
      //   },
      // ],
      // "Phase 4": [
      //   {
      //     title: "2026 - Q1",
      //     content: [
      //       "Optimisation of all modules",
      //       "Launch of mobile App",
      //       "Launch of full EHR system ",
      //       "Opening of Seed round raise for BlockMed Pro Global Ltd",
      //     ],
      //   },
      // ],
    },
  },

  // Sample data (replace with real source)
  valuesData: [
    {
      heading: "Always Innovating",
      paragraph:
        "BlockMed Pro values creativity and forward-thinking, promoting a culture where team members are encouraged to think outside the box, explore new ideas, and experiment with emerging technologies. This is crucial in developing cutting-edge solutions that push the boundaries of traditional healthcare practices",
    },
    {
      heading: "Empowering People",
      paragraph:
        "The platform gives patients full control over their health records and data, allowing them to make informed decisions about their care and even monetize their data if they choose. This value extends to empowering employees, fostering a culture of continuous learning and development, promoting collaborative working and diversity of workforce.",
    },
    {
      heading: "Product Driven",
      paragraph:
        "BlockMed Pro is deeply committed to providing a user-centric experience for both patients and healthcare providers. The platform is designed with the end-users in mind, ensuring that it is intuitive and accessible, facilitating seamless management of electronic health records.",
    },
    {
      heading: "Building Trust",
      paragraph:
        "Ensuring the security and privacy of patient data is a core value. BlockMed Pro utilizes blockchain technology to provide the highest levels of data encryption and security, fostering trust among users thus setting the platform apart in the healthcare technology industry.",
    },
    {
      heading: "Safeguarding Integrity",
      paragraph:
        "The company is dedicated to ethical practices, particularly in handling sensitive patient data. BlockMed Pro ensures that all operations comply with regulatory standards and that the privacy and autonomy of patients are maintained at all times.",
    },
    {
      heading: "Continuing Commitment",
      paragraph:
        "At our health tech company, we believe that dedication from our teams is the foundation of our success. By fostering a results driven culture, we enable each individual to reach our collective goal of giving patients autonomy over their data.",
    },
  ],

  contactUs: {
    countryCodes: [
      { code: "+1" },
      { code: "+7" },
      { code: "+20" },
      { code: "+27" },
      { code: "+30" },
      { code: "+31" },
      { code: "+32" },
      { code: "+33" },
      { code: "+34" },
      { code: "+36" },
      { code: "+39" },
      { code: "+40" },
      { code: "+41" },
      { code: "+43" },
      { code: "+44" },
      { code: "+45" },
      { code: "+46" },
      { code: "+47" },
      { code: "+48" },
      { code: "+49" },
      { code: "+51" },
      { code: "+52" },
      { code: "+53" },
      { code: "+54" },
      { code: "+55" },
      { code: "+56" },
      { code: "+57" },
      { code: "+58" },
      { code: "+60" },
      { code: "+61" },
      { code: "+62" },
      { code: "+63" },
      { code: "+64" },
      { code: "+65" },
      { code: "+66" },
      { code: "+81" },
      { code: "+82" },
      { code: "+84" },
      { code: "+86" },
      { code: "+90" },
      { code: "+91" },
      { code: "+92" },
      { code: "+93" },
      { code: "+94" },
      { code: "+95" },
      { code: "+98" },
      { code: "+211" },
      { code: "+212" },
      { code: "+213" },
      { code: "+216" },
      { code: "+218" },
      { code: "+220" },
      { code: "+221" },
      { code: "+222" },
      { code: "+223" },
      { code: "+224" },
      { code: "+225" },
      { code: "+226" },
      { code: "+227" },
      { code: "+228" },
      { code: "+229" },
      { code: "+230" },
      { code: "+231" },
      { code: "+232" },
      { code: "+233" },
      { code: "+234" },
      { code: "+235" },
      { code: "+236" },
      { code: "+237" },
      { code: "+238" },
      { code: "+239" },
      { code: "+240" },
      { code: "+241" },
      { code: "+242" },
      { code: "+243" },
      { code: "+244" },
      { code: "+245" },
      { code: "+246" },
      { code: "+248" },
      { code: "+249" },
      { code: "+250" },
      { code: "+251" },
      { code: "+252" },
      { code: "+253" },
      { code: "+254" },
      { code: "+255" },
      { code: "+256" },
      { code: "+257" },
      { code: "+258" },
      { code: "+260" },
      { code: "+261" },
      { code: "+262" },
      { code: "+263" },
      { code: "+264" },
      { code: "+265" },
      { code: "+266" },
      { code: "+267" },
      { code: "+268" },
      { code: "+269" },
      { code: "+290" },
      { code: "+291" },
      { code: "+297" },
      { code: "+298" },
      { code: "+299" },
      { code: "+350" },
      { code: "+351" },
      { code: "+352" },
      { code: "+353" },
      { code: "+354" },
      { code: "+355" },
      { code: "+356" },
      { code: "+357" },
      { code: "+358" },
      { code: "+359" },
      { code: "+370" },
      { code: "+371" },
      { code: "+372" },
      { code: "+373" },
      { code: "+374" },
      { code: "+375" },
      { code: "+376" },
      { code: "+377" },
      { code: "+378" },
      { code: "+379" },
      { code: "+380" },
      { code: "+381" },
      { code: "+382" },
      { code: "+383" },
      { code: "+385" },
      { code: "+386" },
      { code: "+387" },
      { code: "+389" },
      { code: "+420" },
      { code: "+421" },
      { code: "+423" },
      { code: "+500" },
      { code: "+501" },
      { code: "+502" },
      { code: "+503" },
      { code: "+504" },
      { code: "+505" },
      { code: "+506" },
      { code: "+507" },
      { code: "+508" },
      { code: "+509" },
      { code: "+590" },
      { code: "+591" },
      { code: "+592" },
      { code: "+593" },
      { code: "+594" },
      { code: "+595" },
      { code: "+596" },
      { code: "+597" },
      { code: "+598" },
      { code: "+599" },
      { code: "+670" },
      { code: "+672" },
      { code: "+673" },
      { code: "+674" },
      { code: "+675" },
      { code: "+676" },
      { code: "+677" },
      { code: "+678" },
      { code: "+679" },
      { code: "+680" },
      { code: "+681" },
      { code: "+682" },
      { code: "+683" },
      { code: "+685" },
      { code: "+686" },
      { code: "+687" },
      { code: "+688" },
      { code: "+689" },
      { code: "+690" },
      { code: "+691" },
      { code: "+692" },
      { code: "+850" },
      { code: "+852" },
      { code: "+853" },
      { code: "+855" },
      { code: "+856" },
      { code: "+880" },
      { code: "+886" },
      { code: "+960" },
      { code: "+961" },
      { code: "+962" },
      { code: "+963" },
      { code: "+964" },
      { code: "+965" },
      { code: "+966" },
      { code: "+967" },
      { code: "+968" },
      { code: "+970" },
      { code: "+971" },
      { code: "+972" },
      { code: "+973" },
      { code: "+974" },
      { code: "+975" },
      { code: "+976" },
      { code: "+977" },
      { code: "+992" },
      { code: "+993" },
      { code: "+994" },
      { code: "+995" },
      { code: "+996" },
      { code: "+998" },
    ],
  },
};
