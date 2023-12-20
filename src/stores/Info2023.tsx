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
  ProgramCommittee,
} from "./Interfaces";
const format = "documentclass [manuscript, review, anonymous] {acmart}";

const overview: Overview = {
  contact: "trait2023@easychair.org",
  timezone: "GMT+2, Hamburg, Germany time",
  acronym: "TRAIT",
  year: "2023",
  fullName: "Workshop on Trust and Reliance in AI-Assisted Tasks",
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
        challenge. Formerly the workshop on{" "}
        <i>Trust and Reliance in AI-Human Teams</i>, this sequel workshop aims
        to{" "}
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
        <b>
          The workshop will build on the success from running it at CHI 2022
          with a focus on{" "}
          <span className="text-highlight">Learning from Practice</span> --- how
          can we better tie theory-building to real-life use cases?
        </b>
      </p>
      <p>
        As these problems and solutions involving humansand AI are
        interdisciplinary in nature, we invite participants with expertise in
        HCI, AI, ML, psychology, and social science, or otherrelevant fields to
        foster closer communications and collaboration between multiple
        communities.
      </p>
      {/*<p>
        The workshop will be <b className="text-highlight">hybrid</b>.
        Participants can choose to come to New Orleans or participant online.
          </p>*/}
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
    affliation: "Microsoft Research",
    webpage: "https://gagb.github.io/",
    img: "gagan.png",
    twitter: "https://twitter.com/bansalg_",
    description:
      "Gagan is a a Senior Researcher at Microsoft Research, Redmond. He received his Ph.D. degree from the Allen School of Computer Science and Engineering at the University of Washington, Seattle. He conducts interdisciplinary research on Artificial Intelligence and Human-Computer Interaction with focus on developing human-centered AI systems for augmenting people.",
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
      "Jessica is an Associate Professor of Computer Science at Northwestern University. Her research looks at how to design, evaluate, coordinate, and think about visual representations of data and model predictions for inference, decision making, and communication, including the effects of visualizing uncertainty on belief updating and potential for behaviorally induced feedback loops in visualizing model predictions in strategic settings. ",
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
    name: "Simone Stumpf",
    twitter: "https://twitter.com/DrSimoneStumpf",
    affliation: "University of Glasgow",
    webpage: "https://www.gla.ac.uk/schools/computing/staff/simonestumpf/",
    img: "simone.png",
    description:
      "Simone is a Reader in Responsible and Interactive AI at University of Glasgow, UK. She has a long-standing research focus on user interactions with machine learning systems. Her work has contributed to shaping the field of Explainable AI (XAI) through the Explanatory Debugging approach to interactive machine learning, providing design principles for crafting explanations. She has been a member of the organising committee of the ExSS workshop at IUI, and has held senior committee roles at CHI, IUI and EICS conferences. ",
  },
  {
    name: "Sherry Tongshuang Wu",
    twitter: "https://twitter.com/tongshuangwu",
    affliation: "Carnegie Mellon University",
    webpage: "http://cs.cmu.edu/~sherryw",
    img: "sherry.png",
    description:
      "Sherry is an Assistant Professor in the Human-Computer Interaction Institute at Carnegie Mellon University. Her research lies at the intersection of Human-Computer Interaction and Natural Language Processing, aiming to design, evaluate, build, and interact with AI systems that are compatible with actual human goals. Before joining CMU, Sherry received her Ph.D. degree from the University of Washington.",
  },
];

const pcs: ProgramCommittee[] = [
  { name: "Vivian Lai", affiliation: "Visa Research" },
  { name: "Jennifer Wortman Vaughan", affiliation: "Microsoft" },
  { name: "Tim	Miller", affiliation: "The University of Melbourne" },
  { name: "Philipp	Wintersberger", affiliation: "Visual Computing" },
  { name: "Ming Yin", affiliation: "Purdue University" },
  { name: "Brian	Lim", affiliation: "National University of Singapore" },

  { name: "Hal Daume III", affiliation: "University of Maryland" },
  { name: "Anna Kawakami", affiliation: "Carnegie Mellon University" },
  { name: "Shi Feng", affiliation: "University of Chicago" },
  {
    name: "Jakob Schoeffer",
    affiliation: "Karlsruhe Institute of Technology (KIT)",
  },
  { name: "Alon Jacovi", affiliation: "Bar-Ilan University" },
  { name: "Quan Ze Chen", affiliation: "University of Washington" },
  { name: "Max Schemmer", affiliation: "Karlsruhe Institute of Technology" },

  { name: "Valerie Chen", affiliation: "Carnegie Mellon University" },
  { name: "Zelun Tony Zhang", affiliation: "fortiss GmbH" },
  {
    name: "Ángel Alexander Cabrera",
    affiliation: "Carnegie Mellon University",
  },
  { name: "Elena Glassman", affiliation: "Harvard University" },
  { name: "Maria De-Arteaga", affiliation: "University of Texas at Austin" },
  { name: "Krzysztof Gajos", affiliation: "Harvard University" },
  { name: "Marissa Radensky", affiliation: "University of Washington" },
  { name: "Aaron Springer", affiliation: "Google" },
  { name: "Retno Larasati", affiliation: "The Open University" },

  { name: "Isaac Lage", affiliation: "Harvard University" },
  { name: "Patrick Hemmer", affiliation: "Karlsruhe Institute of Technology" },
  { name: "Ella Glikson", affiliation: "Bar Ilan University" },
  {
    name: "Elizabeth Watkins",
    affiliation: "Intelligent Systems Research, Intel Labs",
  },
  { name: "Michael Bernstein", affiliation: "Stanford University" },
  { name: "Zahra Ashktorab", affiliation: "University of Maryland" },
  { name: "Vera Liao", affiliation: "Microsoft Research" },

  {
    name: "Madeleine Grunde-McLaughlin",
    affiliation: "University of Washington",
  },
  { name: "Michael Terry", affiliation: "Google" },
  { name: "Joyce Zhou", affiliation: "Cornell University" },
];

const cfp: CFP = {
  description: (
    <>
      <div>
        As humans increasingly interact with AI systems during decision-making,
        creative tasks, and other workflows, appropriate trust and reliance are
        necessary to ensure proper usage and adoption of these systems. For
        example, people should understand when to trust or rely on an
        algorithm's outputs and when to override them. While significant
        research focus has aimed to measure and promote trust in human-AI
        interaction, the field lacks synthesized results across contexts,
        formalized key concepts, and definitions. The workshop will provide a
        venue to explore three broad aspects related to human-AI trust: (1) How
        do we clarify definitions and frameworks relevant to human-AI trust and
        reliance (e.g., what does trust mean in different contexts)? (2) How do
        we measure trust and reliance? And, (3) How do we shape trust and
        reliance?"
      </div>
      <p>
        We welcome work that discusses interactions between one human and AI, as
        well as those that involve multiple humans / multiple AI systems.
      </p>
      <p>
        <b>
          We welcome submissions to either the{" "}
          <span className="text-highlight">research</span> track, or the{" "}
          <span className="text-highlight">industry</span> track.
        </b>{" "}
        Research track papers may present a new position, summarize existing
        research, or discuss in-progress works. Industrial track papers should
        focus more on providing industry perspective, e.g., How do practitioners
        in startups, non-profits, etc. think about trust and reliance on AI
        models? How do they view the theoretical work and case studies coming
        out of academia?
      </p>
      <p>
        Submission will be reviewed by PC members, in a{" "}
        <b>single-blind manner</b> --- The authors should feel free to reveal
        your identity in the submission, but they will not know who the
        reviewers are.
      </p>
    </>
  ),
  themes: [
    "Definitions of trust and reliance",
    "Human-human trust and lessons from social sciences",
    "Qualitative (e.g., user reflection) and quantitative methods (e.g., usage, adoption, human-AI performance, etc.) for evaluating trust and reliance.",
    "Tradeoffs with other objectives (e.g., human-AI performance, creativity, etc)",
    "Solutions (and their limitations) for promoting appropriate trust (e.g., XAI, control mechanisms, human agency, communicating uncertainty etc).",
    "Safety mechanisms for when trust is broken.",
  ],
  dates: [
    {
      date: "February 23, 2023, 11:59 PM (Anywhere on Earth)",

      isPassed: true,
      type: "Submission",
      description:
        "Submission will be reviewed by PC members, in a single-blind manner.",
    },
    {
      date: "March 10, 2023",
      type: "Notification",
      isPassed: true,
    },
    {
      date: "April 11, 2023",
      type: "Camera ready",
      isPassed: true,
      description:
        "Accepted papers will be non-archival, and will be posted on this website & shared via social media.",
    },
    {
      date: "April 23, 2023, 9:00am - 5:30pm (Room: Y09)",
      type: "Workshop",
      isPassed: false,
      description:
        "At least one author must register and attend the hybrid workshop.",
    },
  ],
  submit: {
    platform: {
      name: "EasyChair",
      url: "https://easychair.org/conferences/?conf=trait2023",
    },
    format: (
      <span>
        {" "}
        ACM <b>single</b> column, <b>4-10</b> pages, excluding references. [
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

export const schedule: Schedule[] = [
  {
    start: "09:00",
    end: "09:15",
    title: "Welcome",
    leader: "Zana Buçinca and Alison Smith-Renner",
    format: "Hybrid",
    type: "break",
    //description: "Welcome and registration",
  },
  {
    start: "09:15",
    end: "10:00",
    title: "Keynote from Carrie Cai and Michael Terry",
    leader: "Simone Stumpf and Sherry Wu",
    format: "Hybrid",
    type: "keynote",
    //description:
  },
  {
    start: "10:00",
    end: "10:30",
    sessionId: 0,
    title: "Paper Session 1 - Modeling Human Trust and Reliance",
    leader: "Ken Holstein",
    format: "Hybrid, slack Q&A",
    type: "paper",
  },
  {
    start: "10:30",
    end: "11:00",
    title: "Coffee Break",
    format: "",
    type: "break",
  },
  {
    start: "11:00",
    end: "11:25",
    sessionId: 2,
    title: "Paper Session 2 - Trust for Fairness and Ethics",
    leader: "Zana Buçinca",
    format: "Hybrid, slack Q&A",
    type: "paper",
  },
  {
    start: "11:25",
    end: "11:55",
    sessionId: 1,
    title: "Paper Session 3 - Trust-Calibrating Interfaces",
    leader: "Alison Smith-Renner",
    format: "Hybrid, slack Q&A",
    type: "paper",
  },
  {
    start: "11:55",
    end: "12:30",
    title: "Posters: Break out rooms",
    sessionId: -1,
    format:
      "Virtual with in-person option (ie. huddle around a table for in-person poster presenters)",
    type: "poster",
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
    end: "14:45",
    title: "Group activity: State of the art and future directions",
    leader: "Simone Stumpf",
    format: "Hybrid (in person and breakout rooms)",
    type: "group",
  },
  {
    start: "14:45",
    end: "15:30",
    title:
      "Panel: Stephanie Ballard, Pamela Mishkin, Devansh Saxena, Aaron Halfaker",
    leader: "Jessica Hullman",
    format: "Hybrid",
    type: "panel",
  },
  {
    start: "15:30",
    end: "15:45",
    title: "Coffee Break",
    format: "",
    type: "break",
  },
  {
    start: "15:45",
    end: "16:45",
    title: "Group activity: discussion of panel content",
    leader: "Ken Holstein",
    format: "Hybrid (in person and breakout rooms)",
    type: "group",
  },
  {
    start: "16:45",
    end: "17:00",
    title: "Closing Remarks",
    leader: "Gagan Bansal and Alison Smith-Renner",
    format: "Hybrid",
    type: "break",
  },
];

const speakers: Speaker[] = [
  {
    name: "Michael Terry",
    type: "keynote",
    affliation: "Google PAIR",
    webpage: "https://research.google/people/107786/",
    img: "michael_terry.png",
    description:
      "Michael Terry is a Research Scientist at Google, where he co-leads the People and AI Research (PAIR) group. He and Carrie Cai have been long-time collaborators in PAIR. Their research is situated in the realm of human-AI interaction (HAI), with a particular focus on enabling rapid prototyping with AI. Michael was previously an Associate Professor at the University of Waterloo where he co-founded the HCI Research Lab with Ed Lank.",
  },
  {
    name: "Carrie Cai",
    type: "keynote",
    affliation: "Google PAIR",
    webpage: "https://sites.google.com/view/carriecai/home",
    img: "carrie_cai.png",
    description:
      "Carrie Cai is a Research Scientist and research manager at Google in the PAIR group. She and Michael Terry have been long-time collaborators in PAIR. Her work has received 7 best paper / honorable mention recognitions and was profiled in the MIT Technology Review and Boston Globe. Carrie holds a PhD in Computer Science at MIT, as well as master’s and bachelor’s degrees in Education and Human Biology at Stanford University. Coming from an interdisciplinary background, she believes that the best AI innovations arise from a deep understanding of both machine learning technologies and human behavior.",
  },
  {
    name: "Aaron Halfaker",
    type: "panelist",
    affliation: "Microsoft / University of Minnesota",
    webpage: "https://www.microsoft.com/en-us/research/people/ahalfaker/",
    img: "aaron_halfaker.png",
    description:
      "Aaron Halfaker is a principal applied research scientist working in the Office of Applied Research in Microsoft’s Experiences and Devices organization. He is also a Senior Scientist at the University of Minnesota. Dr. Halfaker's research explores the intersection of productive information work and the application of advanced technologies (AI) to support productivity.",
  },
  {
    name: "Devansh Saxena",
    type: "panelist",
    affliation: "Marquette University",
    webpage: "https://devsaxena.info/",
    img: "devansh_saxena.png",
    description:
      "Devansh Saxena is a PhD candidate in the Department of Computer Science at Marquette University. His research interests include studying algorithmic systems used in the public sector, especially the child-welfare system. His current research examines collaborative child-welfare practice where decisions are mediated by policies, practice, and algorithms. He seeks to understand the discretionary choices that workers make as they navigate bureaucratic processes, conflicting interests, and algorithmic decisions in complex sociotechnical environments.",
  },
  {
    name: "Pamela Mishkin",
    type: "panelist",
    affliation: "OpenAI",
    webpage: "https://manlikemishap.github.io/",
    img: "pamela_mishkin.png",
    description:
      "Pamela Mishkin is a policy researcher at OpenAI, where she works to identify and measure risks associated with AI deployments and develop technical and policy mitigations to address those risks. Her main focus areas include economic impacts of large language models, and work on overreliance on powerful large language models.",
  },
  {
    name: "Stephanie Ballard",
    type: "panelist",
    affliation: "Microsoft",
    webpage: "https://www.linkedin.com/in/ballardstephanie",
    img: "stephanie_ballard.png",
    description:
      "Stephanie Ballard is a senior practice development manager in Microsoft’s Office of Responsible AI. In this role, Steph works with stakeholders across Microsoft to develop practices, templates, patterns, and implementation guidance for Microsoft’s Responsible AI Standard. Recently, she has been working on transparency mechanisms for large language model powered features.",
  },
];

const papers: Paper[] = [
  {
    paper_id: 20,
    session_id: -1,
    paper_order: -1,
    title:
      "The Importance of Trust and Acceptance in User-Centred XAI - Practical Implications for a Manufacturing Scenario",
    authors: "Erika Puiutta, Larbi Abdenebaoui and Susanne Boll",
    type: "Poster",
  },
  {
    paper_id: 46,
    session_id: 2,
    paper_order: 0,
    title:
      "The Impact of Explanations on Fairness in Human-AI Decision Making: Protected vs Proxy Features",
    authors: "Navita Goyal, Connor Baumler, Tin Nguyen and Hal Daum\u00e9",
    type: "Talk",
  },
  {
    paper_id: 7,
    session_id: 0,
    paper_order: 0,
    title:
      "Dunning-Kruger Effect Can Hinder Appropriate Reliance on AI Systems",
    authors: "Gaole He, Lucie Kuiper and Ujwal Gadiraju",
    type: "Talk",
  },
  {
    paper_id: 8,
    session_id: 2,
    paper_order: 1,
    title:
      "Explanations, Fairness, and Appropriate Reliance in Human-AI Decision-Making",
    authors: "Jakob Schoeffer, Maria De-Arteaga and Niklas Kuehl",
    type: "Talk",
  },
  {
    paper_id: 13,
    session_id: 1,
    paper_order: 0,
    title:
      "Does More Advice Help? The Effects of Second Opinions from Peers in AI-Assisted Decision Making",
    authors: "Zhuoran Lu, Dakuo Wang and Ming Yin",
    type: "Talk",
  },
  {
    paper_id: 14,
    session_id: 0,
    paper_order: 1,
    title:
      "Introducing the trustworthiness assessment model and its implications for research on trust in artificial intelligence",
    authors: "Nadine Schlicker and Markus Langer",
    type: "Talk",
  },
  {
    paper_id: 17,
    session_id: 0,
    paper_order: 2,
    title:
      "Chatbots as decision aids: investigating reliance in Human-Chatbot collaboration vs. Human-Human collaboration",
    authors:
      "Cl\u00e9lie Amiot, Fran\u00e7ois Charoy and J\u00e9r\u00f4me Dinet",
    type: "Talk",
  },
  {
    paper_id: 18,
    session_id: 1,
    paper_order: 1,
    title:
      "Team At Your Service: Can Multiple Conversational Agents Increase Functional Specificity in Automated Driving?",
    authors: "Dinara Talypova and Philipp Wintersberger",
    type: "Talk",
  },
  {
    paper_id: 34,
    session_id: 1,
    paper_order: 2,
    title:
      "Are Machine Rationales (Not) Useful to Humans? Measuring and Improving Human Utility of Free-text Rationales",
    authors:
      "Brihi Joshi, Ziyi Liu, Sahana Ramnath, Aaron Chan, Zhewei Tong, Qifan Wang, Yejin Choi and Xiang Ren",
    type: "Talk",
  },
  {
    paper_id: 37,
    session_id: 0,
    paper_order: 3.0,
    title:
      "Measuring, Predicting, and Leveraging Trust for Proactive Dialog in Human-AI Teams",
    authors: "Matthias Kraus",
    type: "Talk",
  },
  {
    paper_id: 6,
    session_id: -1,
    paper_order: -1,
    title: "Distrust in (X)AI - Measurement Artifact or Distinct Construct?",
    authors: "Nicolas Scharowski and Sebastian A.C. Perrig",
    type: "Poster",
  },
  {
    paper_id: 9,
    session_id: -1,
    paper_order: -1,
    title:
      "Humans, AI, and Context: Understanding End-Users\u2019 Trust in a Real-World Computer Vision Application",
    authors:
      "Sunnie S. Y. Kim, Elizabeth Watkins, Olga Russakovsky, Ruth Fong and Andr\u00e9s Monroy-Hern\u00e1ndez",
    type: "Poster",
  },
  {
    paper_id: 22,
    session_id: -1,
    paper_order: -1,
    title: "Designing AI for Appropriation Will Calibrate Trust",
    authors: "Zelun Tony Zhang, Yuanting Liu and Andreas Butz",
    type: "Poster",
  },
  {
    paper_id: 23,
    session_id: 2,
    paper_order: 2,
    title:
      "Addressing Trust Repair for AI Ethicality: The Influence of Team Role and Violation Type",
    authors:
      "Beau Schelble, Subhasree Sengupta, Alyssa Williams and Nathan McNeese",
    type: "Talk",
  },
  {
    paper_id: 36,
    session_id: -1,
    paper_order: -1,
    title: "Co-Design of Autonomous Drones for Interactions with Bystanders",
    authors:
      "Eyal Ginosar, Susanna Kraemer, Marion Koelle, Heiko M\u00fcller, Susanne Boll and Jessica Cauchard",
    type: "Poster",
  },
  {
    paper_id: 44,
    session_id: -1,
    paper_order: -1,
    title:
      "Chronic Heart Patients Perspectives on 30-Day ML-based Predictions: Exploring Implications for Self-Care Practice and Patient-Physician Collaboration",
    authors: "Tariq Andersen, Stina Matthiesen and Emil Vogt S\u00f8rensen",
    type: "Poster",
  },
  {
    paper_id: 27,
    session_id: 1,
    paper_order: 3.0,
    title:
      "I Think You Might Like This': Exploring Effects of Confidence Signal Patterns on Trust in and Reliance on Conversational Recommender Systems",
    authors:
      "Marissa Radensky, Julie Anne S\u00e9guin, Jang Soo Lim, Kristen Olson and Robert Geiger",
    type: "Talk",
  },
  {
    paper_id: 29,
    session_id: -1,
    paper_order: -1,
    title:
      "Human and AI Trust: Trust Attitude Measurement Instrument Development",
    authors: "Retno Larasati, Anna De Liddo and Enrico Motta",
    type: "Poster",
  },
  {
    paper_id: 30,
    session_id: -1,
    paper_order: -1,
    title: "Human-AI Trust Calibration Should Be Contextual and Continuous",
    authors:
      "Steven R. Gomez, Kevin K. Nam, Kimberlee Chestnut Chang, Gregg Marcus and Erin K. Chiou",
    type: "Poster",
  },
  {
    paper_id: 39,
    session_id: -1,
    paper_order: -1,
    title:
      "A Task-based Metric for Measuring Trust in Autonomous Robots for Everyday Activities",
    authors: "Rachel Ringe and Robert Porzel",
    type: "Poster",
  },
  {
    paper_id: 31,
    session_id: -1,
    paper_order: -1,
    title:
      "Evaluating User Trust in Active Learning Systems Through Query Policy and Uncertainty Visualization",
    authors: "Ian Thomas and Danielle Szafir",
    type: "Poster",
  },
  {
    paper_id: 35,
    session_id: -1,
    paper_order: -1,
    title:
      "Eyes Are the Windows to AI Reliance: Towards Real-Time Human-AI Reliance Assessment",
    authors: "Shiye Cao, Shichang Ke, Yanyan Mo, Anqi Liu and Chien-Ming Huang",
    type: "Poster",
  },
  {
    paper_id: 42,
    session_id: -1,
    paper_order: -1,
    title:
      "You haven't changed a bit! Initial Findings from a Bibliometric Analysis of Two Decades of Empirical Trust in AI Research",
    authors: "Michaela Benk, Sophie Kerstan and Andrea Ferrario",
    type: "Poster",
  },
  {
    paper_id: 4,
    session_id: -1,
    paper_order: -1,
    title: "The Duet of Representations and How Explanations Exacerbate It",
    authors: "Charles Wan, Rodrigo Belo, Leid Zejnilovic and Susana Lavado",
    type: "Poster",
  },
  {
    paper_id: 26,
    session_id: -1,
    paper_order: -1,
    title:
      "Simplicity is Complexity Resolved: Considering Task Complexity in Empirical HC(X)AI Studies",
    authors: "Sara Salimzadeh and Ujwal Gadiraju",
    type: "Poster",
  },
  {
    paper_id: 41,
    session_id: -1,
    paper_order: -1,
    title: "Trust and Reliance in Compositional Control Teams",
    authors: "Kazuhiko Momose, Troy Weekes, Thomas Eskridge and Daniel Kidwell",
    type: "Poster",
  },
  {
    paper_id: 45,
    session_id: -1,
    paper_order: -1,
    title:
      "Background Explanations Reduce User's Over-reliance on AI: A Case Study on Multi-Hop Question Answering",
    authors:
      "Navita Goyal, Eleftheria Briakou, Marine Carpuat and Hal Daum\u00e9 III",
    type: "Poster",
  },
  {
    paper_id: 12,
    session_id: -1,
    paper_order: -1,
    title:
      "Responsible Human-AI Teaming: Interface Designs to Promote Bias Awareness in Human-AI Fact-checking Teams",
    authors:
      "Caitlin Lancaster, Heba Aly, Subhasree Sengupta and Nathan McNeese",
    type: "Poster",
  },
];

const announce = (
  <div>
    Our{" "}
    <NavLink exact to={`/cfp`}>
      Call for Papers
    </NavLink>{" "}
    is open! Accepted papers are <b>NON-ARCHIVAL</b> and you can still submit to
    other places; We also welcome <b>shortened, encore submission</b> of
    highly-relevant conference/journal papers pubslished elsewhere!
  </div>
);

export const Info2023: Metadata = {
  overview,
  organizers,
  cfp,
  pcs,
  schedule,
  speakers,
  papers,
  announce,
};
