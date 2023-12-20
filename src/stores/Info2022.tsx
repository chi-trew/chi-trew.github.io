import { Alert } from "@material-ui/lab";
import { NavLink } from "react-router-dom";
import {
  CFP,
  Metadata,
  People,
  Overview,
  Schedule,
  Speaker,
  Paper,
} from "./Interfaces";
const format = "documentclass [manuscript, review, anonymous] {acmart}";

const overview: Overview = {
  contact: "trait2022@easychair.org",
  timezone: "Central Daylight Time (CDT) / UTC-5, New Orleans Time",
  acronym: "TRAIT",
  year: "2022",
  fullName: "Workshop on Trust and Reliance in AI-Human Teams",
  description: (
    <>
      <p>
        As humans increasingly interact (and even collaborate) with AI systems
        during decision-making, creative exercises, and other
        tasks,appropriatetrust and reliance are necessary to ensure proper usage
        and adoption of these systems. Specifically, people should understand
        when to trust or rely on an algorithm's outputs and when to override
        them. While significant research focus has aimedto measure and promote
        trust in human-AI interaction, the field lacks synthesized definitions
        and understanding of results acrosscontexts. Indeed, conceptualizing
        trust and reliance, and identifying the best ways to measure these
        constructs and effectively shapethem in human-AI interactions remains a
        challenge.This workshop aims to{" "}
        <b className="text-highlight">
          establish building appropriate trust and reliance on (imperfect) AI
          systems as a vital, yet under-explored research problem.
        </b>
      </p>
      <p>
        {" "}
        The workshop will provide a venue for exploring three broad aspects
        related to human-AI trust:{" "}
      </p>

      <ul>
        <li>
          How do we clarify{" "}
          <span className="text-highlight">definitions and frameworks</span>{" "}
          relevant to human-AI trust and reliance (e.g., what does trust mean in
          different contexts)?
        </li>
        <li>
          How do we <span className="text-highlight">measure</span> trust and
          reliance?
        </li>
        <li>
          How do we <span className="text-highlight">shape</span> trust and
          reliance?{" "}
        </li>
      </ul>
      <p>
        As these problems and solutions involving humansand AI are
        interdisciplinary in nature, we invite participants with expertise in
        HCI, AI, ML, psychology, and social science, or otherrelevant fields to
        foster closer communications and collaboration between multiple
        communities.
      </p>
      <p>
        The workshop will be <b className="text-highlight">hybrid</b>.
        Participants can choose to come to New Orleans or participant online.
      </p>
    </>
  ),
  backgroundImg: "background.png",
  confLogoImg: "chi2022.png",
  logoImg: "logo.png",
  logoWithWord: "logo_word.png",
  confName: "CHI",
};

const organizers: People[] = [
  {
    name: "Gagan Bansal",
    affliation: "University of Washington",
    webpage: "https://homes.cs.washington.edu/~bansalg/",
    img: "gagan.png",
    twitter: "https://twitter.com/bansalg_",
    description:
      "Gagan is a Ph.D. candidate in the Allen School of Computer Science and Engineering at the University of Washington, Seattle. He is part of the UW Lab for Human-AI Interaction and conducts interdisciplinary research on Artificial Intelligence and Human-Computer Interaction with focus on developing human-centered AI systems for augmenting people.",
  },
  {
    name: "Alison Smith-Renner",
    affliation: "Dataminr",
    webpage: "https://alisonmsmith.github.io/",
    twitter: "https://twitter.com/alison_m_smith",
    img: "alison.png",
    description:
      "Alison is a Senior Research Scientist at Dataminr. Her research interests lie at the intersection of AI and HCI, focusing on transparency and control for human-in-the-loop systems to engender appropriate trust and improve human performance. Alison received her Ph.D. from the University of Maryland, College Park. She has organized various workshops on explainable AI and human-centered ML, including at IUI, CHI, and TEI, and she has held senior committee roles at IUI.",
  },
  {
    name: "Zana Buçinca",
    affliation: "Harvard University",
    twitter: "https://twitter.com/ZanaBucinca",
    webpage: "https://hci.seas.harvard.edu/people/zana-bu%C3%A7inca",
    img: "zana.png",
    description:
      "Zana is a Ph.D. Candidate at Harvard University. Her research lies at the intersection of Human-Computer Interaction and Artificial Intelligence. Informed by cognitive science theories, Zana designs, builds, and evaluates AI for decision-making support.",
  },
  {
    name: "Tongshuang (Sherry) Wu",
    twitter: "https://twitter.com/tongshuangwu",
    affliation: "University of Washington",
    webpage: "https://homes.cs.washington.edu/~wtshuang/",
    img: "sherry.png",
    description:
      "Sherry is a Ph.D. Candidate at the University of Washington, Seattle. " +
      "Her research lies at the intersection of Human-Computer Interaction " +
      "and Natural Language Processing, aiming to support humans interacting with imperfect AIs, " +
      "by debugging and correcting AIs interactively. Her work improves system transparency and " +
      "controllability in human-AI collaborations, and encourages global understanding and " +
      "refinement in model analysis.",
  },
  {
    name: "Ken Holstein",
    twitter: "https://twitter.com/d19fe8",
    affliation: "Carnegie Mellon University",
    webpage: "https://www.thecoalalab.com/kenholstein",
    img: "kenneth.png",
    description:
      "Ken is an Assistant Professor in Human-Computer Interaction at Carnegie Mellon University. His research interests lie at the intersection of HCI, AI, design, and cognitive science, focusing on the design, development, and evaluation of human-AI collaborative systems in complex social contexts.",
  },
  {
    name: "Jessica Hullman",
    twitter: "https://twitter.com/JessicaHullman",
    affliation: "Northwestern University",
    webpage: "http://users.eecs.northwestern.edu/~jhullman/",
    img: "jessica.png",
    description:
      "Jessica is an Associate Professor of Computer Science at Northwestern University. Her research looks at how to design, evaluate, coordinate, and think about visual representations of data and model predictions for inference, decision making, and communication, including the effects of visualizing uncertainty on belief updating and potential for behaviorally induced feedback loops in visualizing model predictions in strategic settings.",
  },
  {
    name: "Simone Stumpf",
    twitter: "https://twitter.com/DrSimoneStumpf",
    affliation: "University of Glasgow",
    webpage: "https://www.gla.ac.uk/schools/computing/staff/simonestumpf/",
    img: "simone.png",
    description:
      "Simone Stumpf is a Reader in Responsible and Interactive AI at University of Glasgow, UK. She has a long-standing research focus on user interactions with machine learning systems. Her work has contributed to shaping the field of Explainable AI (XAI) through the Explanatory Debugging approach to interactive machine learning, providing design principles for crafting explanations. She is a member of the organising committee of the ExSS workshop at IUI, and has held senior committee roles at CHI, IUI and EICS conferences.",
  },
];

const cfp: CFP = {
  description:
    "As humans increasingly interact with AI systems during decision-making, creative tasks, and other workflows, appropriate trust and reliance are necessary to ensure proper usage and adoption of these systems. For example, people should understand when to trust or rely on an algorithm’s outputs and when to override them. While significant research focus has aimed to measure and promote trust in human-AI interaction, the field lacks synthesized results across contexts, formalized key concepts, and definitions. The workshop will provide a venue to explore three broad aspects related to human-AI trust: (1) How do we clarify definitions and frameworks relevant to human-AI trust and reliance (e.g., what does trust mean in different contexts)? (2) How do we measure trust and reliance? And, (3) How do we shape trust and reliance? ",
  themes: [
    "Definitions of trust and reliance",
    "Human-human trust and lessons from social sciences",
    "Qualitative (e.g., user reflection) and quantitative methods (e.g., usage, adoption, team performance, etc.) for evaluating trust and reliance.",
    "Tradeoffs with other objectives (e.g., team performance, creativity, etc)",
    "Solutions (and their limitations) for promoting appropriate trust (e.g., XAI, control mechanisms, human agency, communicating uncertainty etc).",
    "Safety mechanisms for when trust is broken.",
  ],
  dates: [
    {
      date: "February 24, 2022, 11:59 PM (Anywhere on Earth)",

      isPassed: true,
      type: "Submission",
      description:
        "Submission will be reviewed by PC members, in a double-blind manner.",
    },
    {
      date: "March 14, 2022",
      type: "Notification",
      isPassed: true,
    },
    {
      date: "April 11, 2022",
      type: "Camera ready",
      isPassed: true,
      description:
        "Accepted papers will be non-archival, and will be posted on this website & shared via social media.",
    },
    {
      date: "April 30, 2022 (Hybrid)",
      type: "Workshop",
      isPassed: false,
      description:
        "At least one author must register and attend the hybrid workshop.",
    },
  ],
  submit: {
    platform: {
      name: "EasyChair",
      url: "https://easychair.org/conferences/?conf=trait2022",
    },
    format: (
      <span>
        {" "}
        ACM <b>single</b> column, <b>2-10</b> pages, excluding references, fully
        anonymized. [
        <a href="https://www.acm.org/binaries/content/assets/publications/taps/acm_submission_template.docx">
          Word
        </a>
        ][
        <a href="https://www.acm.org/binaries/content/assets/publications/consolidated-tex-template/acmart-primary.zip">
          LaTeX
        </a>
        ][
        <a href="https://www.overleaf.com/latex/templates/acm-conference-proceedings-master-template/pnrfvrrdbfwt">
          Overleaf
        </a>
        ] If you use latex, please use: <code>{format}</code>
      </span>
    ),
    type: 'Position paper; Summarize existing research; Provide industry perspective; In-progress work; "encore" submissions of highly-relevant conference/journal papers.',
  },
};

const pcs = [
  { name: "Zahra Ashkortab", affiliation: "IBM Research" },
  { name: "Michael Bernstein", affiliation: "Stanford University" },
  { name: "Jim Chen", affiliation: "University of Washington" },
  { name: "Erin Chiou", affiliation: "ASU Adapt Lab" },
  { name: "Ian Covert", affiliation: "University of Washington" },
  { name: "Hal Daume III", affiliation: "University of Maryland" },
  { name: "Maria De-Arteaga", affiliation: "UT Austin" },
  { name: "Victor Dibia", affiliation: "Microsoft Research" },
  { name: "Fan Du", affiliation: "Adobe Research" },
  { name: "Krzysztof Gajos", affiliation: "Harvard University" },
  { name: "Elena Glassman", affiliation: "Harvard University" },
  { name: "Ella Glikson", affiliation: "Bar Ilan University" },
  { name: "Shi Feng", affiliation: "University of Maryland" },
  { name: "Matthew Kay", affiliation: "Northwestern University" },
  { name: "Maia Jacobs", affiliation: "Northwestern University" },
  { name: "Alon Jacovi", affiliation: "Bar Ilan University" },
  { name: "Joseph Janizek", affiliation: "University of Washington" },
  { name: "Retno Larasati", affiliation: "The Open University" },
  { name: "Vera Liao", affiliation: "Microsoft Research" },
  { name: "Brian Lim", affiliation: "National University of Singapore" },
  { name: "Tim Miller", affiliation: "University of Melbourne" },
  { name: "Hussein Mozannar", affiliation: "MIT" },
  { name: "Ishan Nigam", affiliation: "UT Austin" },
  { name: "Marissa Radensky", affiliation: "University of Washington" },
  { name: "Gonzalo Ramos", affiliation: "Microsoft Research" },
  { name: "Jenn Wortman Vaughan", affiliation: "Microsoft Research" },
  { name: "Jakob Schoeffer", affiliation: "Karlsruhe Institute of Technology" },
  { name: "Ben Shneiderman", affiliation: "University of Maryland" },
  { name: "Tom Williams", affiliation: "Colorado School of Mines" },
  { name: "Michael Terry", affiliation: "Google Research" },
  { name: "Ming Yin", affiliation: "Purdue University" },
  { name: "Tony Zhang", affiliation: "Fortiss" },
  { name: "Joyce Zhou", affiliation: "Cornell University" },
];

export const schedule: Schedule[] = [
  {
    start: "09:00",
    end: "09:15",
    title: "Welcome",
    leader: "Gagan Bansal and Alison Smith-Renner",
    format: "Virtual (pre-recorded)",
    type: "break",
    //description: "Welcome and registration",
  },
  {
    start: "09:15",
    end: "10:20",
    title:
      "Keynote: Managing and measuring trust in human-AI teams (Prof. John D. Lee)",
    leader: "Kenneth Holstein",
    format: "Virtual (live)",
    type: "keynote",
    description:
      "Despite the rapid growth of AI, there is still a lack of understanding about how humans trust and rely on these systems. As AI becomes more sophisticated, it becomes difficult to determine where the AI interaction ends and the human interaction begins. This makes it difficult to determine who or what we are trusting, and who or what is controlling these interactions and influencing trust. I discuss three themes to establish a better understanding of trust in AI: blurring boundaries as AI moves from tool to teammate; challenges in defining and aligning goals; and the difference between trust in AI and trusting AI. These themes suggest new approaches for measuring and managing trust. Ongoing challenges include understanding how adapt these approaches to different contexts and populations.",
  },
  {
    start: "10:20",
    end: "10:55",
    title: "Paper Session 1: Frameworks & Measuring Trust and Reliance",
    sessionId: 0,
    leader: "Simone Stumpf",
    format: "Virtual (pre-recorded), slack Q&A",
    type: "paper",
  },
  {
    start: "10:55",
    end: "11:15",
    title: "Coffee break",
    format: "",
    type: "break",
  },
  {
    start: "11:15",
    end: "11:50",
    sessionId: 1,
    title:
      "Paper Session 2: Factors and Strategies for Shaping Trust and Reliance",
    leader: "Sherry Tongshuang Wu",
    format: "Virtual (pre-recorded), slack Q&A",
    type: "paper",
  },
  {
    start: "11:50",
    end: "12:30",
    sessionId: 2,
    title:
      "Paper Session 3: Understanding User Needs and New Perspectives for Trust and Reliance",
    leader: "Gagan Bansal",
    format: "Virtual (pre-recorded), slack Q&A",
    type: "paper",
  },
  {
    start: "12:30",
    end: "14:00",
    title: "Lunch",
    format: "on your own",
    type: "break",
  },
  {
    start: "14:00",
    end: "15:00",
    title: "Group activity 1 (40 min) + Results (20 mins)",
    leader: "Kenneth Holstein and Zana Buçinca",
    format: "Hybrid",
    type: "group",
  },
  {
    start: "15:00",
    end: "15:45",
    title: "Group activity 2 (30 min) + Results (15 mins)",
    leader: "Kenneth Holstein and Zana Buçinca",
    format: "Hybrid",
    type: "group",
  },
  {
    start: "15:45",
    end: "16:00",
    title: "Coffee break",
    format: "",
    type: "break",
  },
  {
    start: "16:00",
    end: "16:45",
    title: "Panel",
    leader: "Jessica Hullman",
    format: "Virtual (live)",
    type: "panel",
    description:
      "With Saleema Amershi, Maria De-Arteaga, Krzystof Gajos, and Tim Miller",
  },
  {
    start: "16:45",
    end: "17:00",
    title: "Closing remarks",
    leader: "Gagan Bansal and Alison Smith-Renner",
    format: "Virtual (live)",
    type: "break",
  },
];

const speakers: Speaker[] = [
  {
    name: "John D. Lee",
    affliation: "University of Wisconsin-Madison",
    webpage: "https://directory.engr.wisc.edu/ie/Faculty/Lee_John/",
    img: "john_lee.png",
    type: "keynote",
    description:
      "Dr. John D. Lee is the Emerson Electric Professor at the University of Wisconsin-Madison. He investigates the issues of human-automation interaction, particularly trust in automation. John has investigated trust in domains that include UAVs, maritime operations, highly automated vehicles, and deep space exploration. His work also involves assessing interface and interaction methods to enhance trust calibration, as well as statistical approaches to assess trust and user state estimation. He helped to edit the Handbook of Cognitive Engineering, the APA Handbook of Human Systems Integration, and is also a co-author of a popular textbook: Designing for People: An introduction to human factors engineering. This research has been funded by NSF, ONR, NHTSA, NASA, Nissan, Toyota, Honda, and GM.",
  },
  {
    name: "Saleema Amershi",
    affliation: "Microsoft Research",
    webpage: "https://www.microsoft.com/en-us/research/people/samershi/",
    img: "saleema.jpg",
    type: "panelist",
    description:
      "Dr. Saleema Amershi is a Senior Principal Research Manager at Microsoft Research where she leads the Human-AI eXperiences (HAX) team, building tools for creating responsible AI experiences. She also currently co-chairs Microsoft's Aether Working Group on Human-AI Interaction and Collaboration. Aether is Microsoft’s advisory committee on responsible and ethical AI. Her research focuses on helping people create effective and responsible AI user experiences. Her recent work includes leading Microsoft’s effort to develop general Guidelines for Human-AI Interaction, a unified and validated set of guidelines to establish a foundation for human-AI interaction Design. Throughout the years, she has developed tools and methodologies to support practitioners in designing and building AI-based products and services, including general purpose platforms and visualizations for data scientists building predictive models, and application specific techniques for supporting end-users interacting with AI-systems in their everyday lives.",
  },
  {
    name: "Maria De-Arteaga",
    type: "panelist",
    affliation: "University of Texas at Austin",
    webpage: "https://mariadearteaga.com/",
    img: "maria_dearteaga.jpg",
    description:
      "Dr. Maria De-Arteaga is an Assistant Professor at the Information, Risk and Operation Management Department at the University of Texas at Austin, where she is also a core faculty member in the Machine Learning Laboratory and a Good Systems researcher. She holds a joint PhD in Machine Learning and Public Policy from Carnegie Mellon University. Her research focuses on the risks and opportunities of using machine learning to support experts’ decisions in high-stakes settings, with a particular interest in algorithmic fairness and human-AI collaboration. Her work has received best paper awards at WITS’21, NAACL’19 and Data for Policy’16, and research awards from Google and Microsoft Research.",
  },
  {
    name: "Krzysztof Gajos",
    type: "panelist",
    affliation: "Harvard University",
    webpage: "http://www.eecs.harvard.edu/~kgajos/",
    img: "krzysztof.png",
    description:
      "Krzysztof Gajos is a Gordon McKay professor of Computer Science at the Harvard Paulson School of Engineering and Applied Sciences. Krzysztof’s current interests include 1. Principles and applications of intelligent interactive systems; 2. Tools and methods for behavioral research at scale (e.g., LabintheWild.org); and 3. Design for equity and social justice. He has also made contributions in the areas of accessible computing, creativity support tools, social computing, and health informatics. Prior to arriving at Harvard, Krzysztof was a postdoctoral researcher at Microsoft Research. He received his Ph.D. from the University of Washington and his M.Eng. and B.Sc. degrees from MIT. From 2013 to 2016 Krzysztof was a coeditor-in-chief of the ACM Transactions on Interactive Intelligent Systems (ACM TiiS), he was the general chair of ACM UIST 2017, and he is currently a program co-chair of the 2022 ACM Conference on Intelligent User Interfaces. His work was recognized with best paper awards at ACM CHI, ACM COMPASS, and ACM IUI. In 2019, his received the Most Impactful Paper Award at ACM IUI for his work on automatically generating personalized user interfaces.",
  },
  {
    name: "Tim Miller",
    type: "panelist",
    affliation: "University of Melbourne",
    webpage: "https://people.eng.unimelb.edu.au/tmiller/",
    img: "tim_miller.png",
    description:
      "Dr. Tim Miller is a Professor in the School of Computing and Information Systems at The University of Melbourne, and Co-Director for the Centre of AI and Digital Ethics (CAIDE). His primary area of expertise is in artificial intelligence, with particular emphasis on Human-AI interaction and collaboration; Explainable Artificial Intelligence (XAI); Decision making in complex, multi-agent environments; and Reasoning about action and knowledge. His work is at the intersection of artificial intelligence, interaction design, and cognitive science/psychology. His areas of education expertise is in artificial intelligence, software engineering, and technology innovation. He has extensive experience developing novel and innovative solution with industry and defence collaborators.",
  },
];

const papers: Paper[] = [
  {
    paper_id: 49,
    session_id: 0,
    paper_order: 0,
    title:
      "Under-reliance or misalignment? How proxy outcomes limit measurement of appropriate reliance in AI-assisted decision-making",
    authors: "Luke Guerdan, Kenneth Holstein and Steven Wu",
    type: "long",
    is_encore: false,
  },
  {
    paper_id: 47,
    session_id: 1,
    paper_order: 0,
    title:
      "Shaping Trust in Machine Translation Suggestions Through AI-Assisted Context Building",
    authors: "Jordan Huffaker and Sai Gouravajhala",
    type: "long",
    is_encore: false,
  },
  {
    paper_id: 19,
    session_id: 2,
    paper_order: 3,
    title:
      "Building Trust by Supporting Situation Awareness: Exploring Pilots' Design Requirements for Decision Support Tools",
    authors:
      "Cara Storath, Zelun Tony Zhang, Yuanting Liu and Heinrich Hussmann",
    type: "long",
    is_encore: false,
  },
  {
    paper_id: 55,
    session_id: 0,
    paper_order: 1,
    title:
      "Should I Follow AI-based Advice? Measuring Appropriate Reliance in Human-AI Decision-Making",
    authors:
      "Max Schemmer, Patrick Hemmer, Niklas K\u00fchl, Carina Benz and Gerhard Satzger",
    type: "long",
    is_encore: false,
  },
  {
    paper_id: 28,
    session_id: 2,
    paper_order: 2,
    title:
      "Addressing the Spread of Trust and Distrust in Distributed Human-AI Teaming Constellations",
    authors:
      "Beau Schelble, Christopher Flathmann, Matthew Scalia, Shiwen Zhou, Christopher Myers, Nathan McNeese, Jamie Gorman and Guo Freeman",
    type: "long",
    is_encore: false,
  },
  {
    paper_id: 29,
    session_id: 1,
    paper_order: 1,
    title: "Impact of Awareness Cues on Trust in Human-AI Shared Control",
    authors: "Gabriele Cimolino, Carl Gutwin and T.C. Nicholas Graham",
    type: "long",
    is_encore: false,
  },
  {
    paper_id: 43,
    session_id: 1,
    paper_order: 2,
    title:
      "Exploring How Anomalous Model Input and Output Alerts Affect Decision-Making in Healthcare",
    authors: "Marissa Radensky, Dustin Burson, Rajya Bhaiya and Daniel Weld",
    type: "long",
    is_encore: false,
  },
  {
    paper_id: 59,
    session_id: 1,
    paper_order: 3,
    title:
      "The Disagreement Problem in Explainable Machine Learning: A Practitioner's Perspective",
    authors:
      "Satyapriya Krishna, Tessa Han, Alex Gu, Javin Pombra, Shahin Jabbari, Zhiwei Steven Wu and Himabindu Lakkaraju",
    type: "long",
    is_encore: false,
  },
  {
    paper_id: 52,
    session_id: 2,
    paper_order: 1,
    title:
      "The Look of Trust: How Does Physical Embodiment Shape Trust in Human-Agent Interaction?",
    authors: "Angel Hsing-Chi Hwang",
    type: "long",
    is_encore: false,
  },
  {
    paper_id: 26,
    session_id: 2,
    paper_order: 0,
    title: "Vulnerability, Trust, and AI",
    authors: "Ahmer Arif and Os Keyes",
    type: "long",
    is_encore: false,
  },
  {
    paper_id: 11,
    session_id: 0,
    paper_order: 2,
    title:
      "MATCH: A Conceptual Model on Trust Judgments in AI Towards Designing for Responsible Trust",
    authors: "Q. Vera Liao and S. Shyam Sundar",
    type: "short",
    is_encore: false,
  },
  {
    paper_id: 21,
    session_id: 0,
    paper_order: 3,
    title:
      "The Value of Measuring Trust in AI \u2013 A Socio-Technical System Perspective",
    authors:
      "Michaela Benk, Suzanne Tolmeijer, Florian von Wangenheim and Andrea Ferrario",
    type: "short",
    is_encore: false,
  },
  {
    paper_id: 25,
    session_id: 0,
    paper_order: 4,
    title: "Behavioral Measures of Trust in Human-autonomy Teams",
    authors: "Daniel Gonzalez, David Piorkowski and David Mendonca",
    type: "short",
    is_encore: false,
  },
  {
    paper_id: 33,
    session_id: 2,
    paper_order: 4,
    title:
      "Trust and explainability as tools for improving automated writing evaluation",
    authors: "Maria Goldshtein, Erin Chiou, Amin Alhashim and Rod Roscoe",
    type: "short",
    is_encore: false,
  },
  {
    paper_id: 45,
    session_id: 1,
    paper_order: 4,
    title:
      "How Can AI Earn Trust of System Administrators in the IT-Security Domain?",
    authors: "Daria Soroko, Gian-Luca Savino and Nicholas Gray",
    type: "short",
    is_encore: false,
  },
  {
    paper_id: 46,
    session_id: 0,
    paper_order: 5,
    title:
      "Review: Mathematical Models for Trust in Human-Automation Interactions",
    authors:
      "Lucero Rodriguez Rodriguez, Carlos Bustamante Orellana, Yun Kang, Erin Chiou and Lixiao Huang",
    type: "short",
    is_encore: false,
  },
  {
    paper_id: 53,
    session_id: 0,
    paper_order: 6,
    title:
      "Perceive, Understand & Predict - Empirical Indication for Facets in Subjective Information Processing Awareness",
    authors: "Tim Schrills, Mona Bickel, Susanne Kargl and Thomas Franke",
    type: "short",
    is_encore: false,
  },
  {
    paper_id: 48,
    session_id: 1,
    paper_order: 5,
    title:
      "Beyond General Purpose Machine Translation: The Need for Context-specific Empirical Research to Design for Appropriate User Trust",
    authors:
      "Wesley Hanwen Deng, Nikita Mehandru, Samantha Roberston and Niloufar Salehi",
    type: "short",
    is_encore: false,
  },
  {
    paper_id: 23,
    session_id: 2,
    paper_order: 5,
    title:
      "Understanding non-adoption of ``optimal'' algorithmic tips for problem-solving: how people view and use tips and the barriers they encounter",
    authors: "David Lee and Wichinpong Park Sinchaisri",
    type: "short",
    is_encore: false,
  },
  {
    paper_id: 27,
    session_id: 1,
    paper_order: 6,
    title:
      "Doubting AI Predictions: Influence-Driven Second Opinion Recommendation",
    authors: "Maria De-Arteaga, Alexandra Chouldechova and Artur Dubrawski",
    type: "short",
    is_encore: false,
  },
  {
    paper_id: 30,
    session_id: 2,
    paper_order: 6,
    title:
      "Trust in AI in Under-resourced Environments: Lessons from Local Journalism",
    authors: "Marianne Aubin Le Quere and Maurice Jakesch",
    type: "short",
    is_encore: false,
  },
  {
    paper_id: 42,
    session_id: 0,
    paper_order: 12,
    title:
      "Towards a Framework for Evaluating Trust Based on User Confidence in Outcomes in the Human-AI Collaboration Setting",
    authors: "Submission        Joshua Boley, Katelyn Kozinski and Maoyuan Sun",
    type: "short",
    is_encore: false,
  },
  {
    paper_id: 7,
    session_id: 2,
    paper_order: 12,
    title: "AI for human assessment: What do professional assessors need?",
    authors: "Riku Arakawa and Hiromu Yakura.",
    type: "short",
    is_encore: false,
  },
  {
    paper_id: 40,
    session_id: 0,
    paper_order: 7,
    title:
      "Are we measuring trust correctly in explainability, interpretability, and transparency research?",
    authors: "Tim Miller",
    type: "short",
    is_encore: false,
  },
  {
    paper_id: 57,
    session_id: 2,
    paper_order: 7,
    title:
      "Towards Understanding Trust and Reassurance in Human-Robot Teams: A User Study with a UV-C Disinfection Robot",
    authors:
      "Maria Jose Galvez Trigo, Joel Fischer, Horia Maior, Dominic Price, Pauline Leonard, Chira Tochia, Richard Hyde and Nicholas Watson.",
    type: "short",
    is_encore: false,
  },
  {
    paper_id: 17,
    session_id: 2,
    paper_order: 8,
    title:
      "Towards a Framework for Trust in Clinical AI: Expanding the Unit of Analysis",
    authors:
      "Jacob Browne, Saskia Bakker, Bin Yu, Jeroen Raijmakers, Jon Pluyter, Nick Ruijs and Eva Deckers",
    type: "short",
    is_encore: false,
  },
  {
    paper_id: 32,
    session_id: 0,
    paper_order: 8,
    title:
      "Exploring Trust Indicators in Human-Agent Conversation with Epistemic Network Analysis",
    authors: "Mengyao Li, Varshini Kamaraj and John Lee",
    type: "short",
    is_encore: false,
  },
  {
    paper_id: 44,
    session_id: 1,
    paper_order: 7,
    title:
      "When Do XAI Methods Work? A Cost-Benefit Approach to Human-AI Collaboration",
    authors:
      "Helena Vasconcelos, Matthew J\u00f6rke, Madeleine Grunde-McLaughlin, Ranjay Krishna, Tobias Gerstenberg and Michael Bernstein",
    type: "short",
    is_encore: false,
  },
  {
    paper_id: 51,
    session_id: 0,
    paper_order: 9,
    title:
      "Towards a Generalized Scale to Measure Situational Trust in AI Systems",
    authors: "Lena Dolinek and Philipp Wintersberger",
    type: "short",
    is_encore: false,
  },
  {
    paper_id: 13,
    session_id: 2,
    paper_order: 13,
    title:
      "User Trust on an Explainable AI-based Medical Diagnosis Support System",
    authors: "Yao Rong, Nora Castner, Efe Bozkir and Enkelejda Kasneci",
    type: "short",
    is_encore: false,
  },
  {
    paper_id: 15,
    session_id: 1,
    paper_order: 10,
    title:
      "Walking on Eggshells: Using Analogies to Promote Appropriate Reliance in Human-AI Decision Making",
    authors: "Gaole He and Ujwal Gadiraju",
    type: "short",
    is_encore: false,
  },
  {
    paper_id: 20,
    session_id: 0,
    paper_order: 10,
    title:
      "Trust and Reliance in XAI - Distinguishing Between Attitudinal and Behavioral Measures",
    authors:
      "Nicolas Scharowski, Sebastian A. C. Perrig, Nick von Felten and Florian Br\u00fchlmann",
    type: "short",
    is_encore: false,
  },
  {
    paper_id: 5,
    session_id: 1,
    paper_order: 11,
    title: "Teaching Humans When To Defer to a Classifier via Exemplars",
    authors: "Hussein Mozannar, Arvind Satyanarayan and David Sontag",
    type: "short",
    is_encore: true,
  },
  {
    paper_id: 9,
    session_id: 0,
    paper_order: 13,
    title: "Dynamics of Human Trust in Recommender Systems",
    authors:
      "Jason Harman, John O'Donovan, Tarek Abdelzaher and Cleotilde Gonzalez",
    type: "short",
    is_encore: true,
  },
  {
    paper_id: 12,
    session_id: 2,
    paper_order: 9,
    title:
      "Investigations of Performance and Bias in Human-AI Teamwork in Hiring",
    authors:
      "Andi Peng, Besmira Nushi, Emre Kiciman, Kori Inkpen and Ece Kamar",
    type: "short",
    is_encore: true,
  },
  {
    paper_id: 14,
    session_id: 1,
    paper_order: 12,
    title:
      "Exploring the Effect of Value Similarity on Trust in Human-AI Interaction",
    authors: "Siddharth Mehrotra, Catholijn M. Jonker and Myrthe L. Tielman",
    type: "short",
    is_encore: true,
  },
  {
    paper_id: 31,
    session_id: 1,
    paper_order: 13,
    title:
      "Do Exact Explanations Make a Difference? A Case Study Among Weight Management Experts",
    authors:
      "Glenn Fernandes, Arthur Choi, Maia Jacobs, Adnan Darwiche and Nabil Alshurafa",
    type: "short",
    is_encore: false,
  },
  {
    paper_id: 36,
    session_id: 0,
    paper_order: 11,
    title: "Pragmatic delegation of work by humans and machines",
    authors: "Jordan Suchow and Jeffrey Nickerson",
    type: "short",
    is_encore: false,
  },
  {
    paper_id: 37,
    session_id: 2,
    paper_order: 10,
    title:
      "Improving Human-AI Partnerships in Child Welfare: Understanding Worker Practices, Challenges, and Desires for Algorithmic Decision Support",
    authors:
      "Anna Kawakami, Venkatesh Sivaraman, Hao-Fei Cheng, Logan Stapleton, Yanghuidi Cheng, Diana Qing, Adam Perer, Zhiwei Steven Wu, Haiyi Zhu and Kenneth Holstein",
    type: "short",
    is_encore: true,
  },
  {
    paper_id: 38,
    session_id: 1,
    paper_order: 8,
    title:
      "An Empirical Investigation of Reliance on AI-Assistance in a Noisy-Image Classification Task",
    authors: "Aakriti Kumar, Heliodoro Tejeda Lemus and Mark Steyvers",
    type: "short",
    is_encore: false,
  },
  {
    paper_id: 58,
    session_id: 2,
    paper_order: 11,
    title: "Recognizing the Problem of High Trust",
    authors: "Shivani Kapania",
    type: "short",
    is_encore: true,
  },
  {
    paper_id: 24,
    session_id: 1,
    paper_order: 9,
    title: "Trust and Reliance in Human-AI Collaborative Text Summarization",
    authors:
      "Ruijia Cheng, Alison Smith-Renner, Ke Zhang, Joel Tetreault and Alejandro Jaimes",
    type: "short",
    is_encore: false,
  },
];

const announce = (
  <div>
    Workshop registration is <b>closed</b>. However, if you have already
    registered for it but <b>have not joined the workshop Slack</b>, please
    email us at <a href={`mailto:${overview.contact}`}>{overview.contact}</a> to
    get access!
  </div>
);

export const Info2022: Metadata = {
  overview,
  organizers,
  cfp,
  pcs,
  schedule,
  speakers,
  papers,
  announce,
};
