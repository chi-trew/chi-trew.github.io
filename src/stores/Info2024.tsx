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
  contact: "trew2024@easychair.org",
  timezone: "GMT-10, Hawaii Time",
  acronym: "TREW",
  year: "2024",
  fullName: "Trust and Reliance in Evolving Human-AI Workflows",
  description: (
    <>
      <p>
        State-of-the-art AIs, including Large Language Models (LLMs) like GPT-4,
        now possess the capabilities once unique to humans, such as coding, idea
        generation, and planning. These advanced AIs are now integrated into a
        plethora of platforms and tools, including GitHub Copilot, Bing Chat,
        Bard, ChatGPT, and Advanced Data Analytics. In contrast to conventional,
        specialized AIs that typically offer singular solutions, these LLMs
        redefine human-AI dynamics. Instead of perceiving AIs merely as
        supportive tools, there's a growing trend where humans view them as
        collaborative counterparts. This shift leads to enhanced dialogues,
        negotiations, and task delegation between humans and AI. With these
        rapid advancements, the nature of human roles in the AI collaboration
        spectrum is evolving. While our{" "}
        <a href="https://chi-trait.github.io/#/">
          previous workshops like CHI TRAIT 2022 and 2023
        </a>{" "}
        delved into the trust and reliance concerning traditional AIs, the
        pressing question now is: how should humans gauge trust and reliance
        with these emerging AI technologies? As these systems witness widespread
        adoption, there's also a need to assess their impact on human skill
        development. Does AI assistance amplify human skill progression, or does
        it inadvertently inhibit it? Considering the multifaceted challenges and
        solutions that revolve around human-AI interactions, we invite experts
        from diverse fields, including HCI, AI, ML, psychology, and social
        science. Our aim is to bridge communication gaps and facilitate rich
        collaborations across these domains. Formerly the workshop on{" "}
        <i>Trust and Reliance in AI-Human Teams</i>, this sequel workshop aims
        to{" "}
        <b className="text-highlight">
          revisit the topic of trust and reliance in in the evolving context of
          human-AI collaboration in the age of LLMs.
        </b>
      </p>
      <p>
        Specifically, in this new context, we want to synthesize and
        conceptualize:
      </p>

      <ul>
        <li>
          How the AI roles change, and how the user roles have changed with
          these new AI;
        </li>
        <li>
          Whether and how trust and reliance definitions and measures should be
          changed;
        </li>
        <li>
          The impact of these new interactions on users, especially their
          individual skills and learning
        </li>
      </ul>
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
  logoImg: "logo_chi2024.png",
  logoWithWord: "logo_chi2024.png",
  confName: "CHI",
};

const organizers: People[] = [
  {
    name: "Zahra Ashktorab",
    affliation: "IBM Research",
    webpage: "http://zahraashktorab.com/",
    img: "zahra.png",
    twitter: "https://twitter.com/zashktorab",
    description:
      "Zahra is a Research Scientist at IBM Research, New York. Her research lies at the intersection of HCI and AI, primarily focusing on human-AI collaboration, with a special emphasis on enhancing the efficacy of these interactions.",
  },

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
      "Alison is a Research Manager at Dataminr. Her research interests lie at the intersection of NLP and HCI, focusing on transparency and control for interactive NLP systems to engender appropriate trust and improve human performance. Alison received her Ph.D. from the University of Maryland, College Park. She has organized various workshops and tutorials on explainable AI, human-AI trust, and human-centered AI, including at IUI, CHI, NAACL, and TEI, and she has held senior committee roles at IUI, CHI, and EMNLP.",
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
  {
    name: "Isabel Zhang",
    twitter: "",
    affliation: "Carnegie Mellon University",
    webpage: "https://isabelzhanguxr.weebly.com/",
    img: "isabel.png",
    description:
      "Isabel is a Staff Research Scientist at Dataminr. Her research interest lies in human interaction with various automation technologies, including Artificial Intelligence. Her research has focused on understanding human workflow, situational awareness, and overall system performance in collaborative human-automation workflows. Isabel received her Ph.D. in Human-Systems Engineering from North Carolina State University.",
  },
];

const pcs: ProgramCommittee[] = [{ name: "TBD", affiliation: "" }];

const cfp: CFP = {
  description: (
    <>
      <p>
        State-of-the-art AIs and LLMs (e.g., GPT-4) can now perform tasks
        previously exclusive to humans (e.g., writing code, generating ideas,
        planning), and are being widely used in various domains, applications,
        and commercial tools (e.g., GitHub Copilot, Bing Chat, Bard, ChatGPT,
        Advanced Data Analytics, etc). Compared to more traditional forms of
        specialized AI, these LLMs introduce new dynamics to human-AI
        interaction. For example, instead of simply trusting and depending on AI
        models as supportive tools that offer single-shot suggestions, humans
        may increasingly come to rely on AIs as <b>collaborative peers</b> and
        engage in dialogs and negotiations, delegate various tasks. Given these
        impressive capabilities and evolving landscape of LLMs, what will the
        new human roles in human-AI collaboration become? how will we adopt and
        rely on these models differently? As these systems move to large-scale
        adoption, how will people's skills on the task be impacted? Will AI
        assistance help or hinder people's skill improvement over time?
      </p>
      <p>
        This workshop will provide a venue for exploring how the collaboration
        between humans and AIs evolve, and how humans' trust and reliance on AIs
        evolve accordingly. We invite participants with expertise in HCI, AI,
        ML, psychology, and social science, or other relevant fields to come
        together and discuss three themes: (1) What should be the new roles of
        humans and AIs when the latter are so versatile? (2) How should we
        define and measure trust and reliance in these new contexts? (3) What
        are the long term impact of such human-AI collaboration on each other?
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
    "Investigating how humans adapt to being collaborators and decision-makers alongside AI systems;",
    "Assessing the challenges and opportunities for individuals in evolving AI-driven work environments;",
    "Investigating the psychological aspects of trust when working with LLMs and AI systems as collaborative peers;",
    "Analyzing the impact of factors like transparency, explainability, and system performance on trust and reliance;",
    "Examining the sustained effects of using AI assistance on human skills and expertise.",
  ],
  dates: [
    {
      date: "February 23, 2024, 11:59 PM (Anywhere on Earth)",

      isPassed: false,
      type: "Submission",
      description:
        "Submission will be reviewed by PC members, in a single-blind manner.",
    },
    {
      date: "March 14, 2024",
      type: "Notification",
      isPassed: false,
    },
    {
      date: "April 11, 2024",
      type: "Camera ready",
      isPassed: false,
      description:
        "Accepted papers will be non-archival, and will be posted on this website & shared via social media.",
    },
    {
      date: "May 11, 2024",
      type: "Workshop",
      isPassed: false,
      description:
        "At least one author must register and attend the hybrid workshop.",
    },
  ],
  submit: {
    platform: {
      name: "EasyChair",
      url: "https://easychair.org/conferences/?conf=trew2024",
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
export const schedule: Schedule[] = [];

const speakers: Speaker[] = [];

const papers: Paper[] = [];

const announce = (
  <div>
    Our Call for Papers is open! Accepted papers are <b>NON-ARCHIVAL</b> and you
    can still submit to other places; We also welcome{" "}
    <b>shortened, encore submission</b> of highly-relevant conference/journal
    papers pubslished elsewhere!
  </div>
);

export const Info2024: Metadata = {
  overview,
  organizers,
  cfp,
  pcs,
  schedule,
  speakers,
  papers,
  announce,
};
