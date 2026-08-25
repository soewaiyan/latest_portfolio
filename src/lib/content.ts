export const profile = {
  name: "Soe Wai Yan",
  tagline: "Robotics & Computer Vision · MIT EECS",
  motto: "If it doesn't work on real hardware, it doesn't work.",
  bio:
    "I'm an MIT EECS student building perception and manipulation pipelines for real robots — vision-guided arms, autonomous racecars, and embedded sensing systems. I like taking a project from raw camera frames to a physical actuator moving in the real world.",
  email: "waiyan@mit.edu",
  github: "https://github.com/soewaiyan",
  linkedin: "https://linkedin.com/in/soe-wai-yan",
  resumeUrl: "/docs/Soe_Wai_Yan_Resume.pdf",
  location: "Cambridge, MA",
};

export const education = {
  school: "Massachusetts Institute of Technology (MIT)",
  degree: "B.S. in Electrical Engineering and Computer Science",
  gpa: "4.5/5.0",
  graduation: "May 2028",
  coursework: [
    "Introduction to Algorithms",
    "Signal Processing",
    "Electric Circuits",
    "Introduction to C in Assembly",
    "Robotics Science and Systems",
    "Introduction to Autonomous Machines I & II",
  ],
};

export const skills = [
  {
    category: "Programming Languages",
    items: ["Python", "C++", "C", "Assembly"],
  },
  {
    category: "Robotics & ML",
    items: [
      "ROS 2",
      "PyTorch",
      "OpenCV",
      "CUDA",
      "Computer Vision",
      "Imitation Learning",
      "Motion Planning (A*/RRT)",
      "Visual Servoing",
      "Isaac Sim",
    ],
  },
  {
    category: "Hardware",
    items: [
      "Circuit Design",
      "Electronic Prototyping",
      "Arduino",
      "Jetson Nano",
      "ESP32",
      "LiDAR",
      "CAN bus",
    ],
  },
  {
    category: "Tools",
    items: ["Linux", "MATLAB", "AutoCAD", "Fusion 360"],
  },
];

export type ExperienceItem = {
  org: string;
  role: string;
  location: string;
  dates: string;
  stack?: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    org: "MIT SPARK Lab (Robotics Lab)",
    role: "Undergraduate Researcher",
    location: "Cambridge, MA",
    dates: "June 2026 – Present",
    stack: "ROS 2, Python, PyTorch",
    bullets: [
      "Trained vision-based manipulation policies (ACT, π0.5 vision-language-action model) to autonomously grasp objects with a real 7-DoF bimanual robot arm (AgileX Nero ALOHA) from 3-camera RGB input",
      "Collected 300+ teleoperated demonstrations and built the full data pipeline — raw HDF5 capture → normalization → LeRobot format → LoRA fine-tuning of π0.5 on dual RTX 4090 GPUs",
      "Deployed policies for real-time inference on an edge GPU (RTX 4060) and iteratively improved grasp performance through on-hardware debugging and policy tuning",
    ],
  },
  {
    org: "MIT Computer Science and Artificial Intelligence Laboratory (CSAIL)",
    role: "Undergraduate Researcher",
    location: "Cambridge, MA",
    dates: "Sept 2025 – Dec 2025",
    bullets: [
      "Designed and prototyped modular robot hardware, integrating sensors, actuators, and microcontrollers via 3D printing, electronics simulation, and embedded control",
      "Fabricated and tested reconfigurable hardware prototypes for robot morphology optimization",
      "Developed a lightweight UI to visualize design configurations and control mappings",
    ],
  },
  {
    org: "Core Research Program, Georgia State University",
    role: "Undergraduate Researcher",
    location: "Atlanta, GA",
    dates: "June 2024 – May 2025",
    bullets: [
      "Programmed the Arduino IDE to calibrate an Adafruit AS7341 multispectral sensor for soil nutrient detection",
      "Designed and assembled the sensor hardware and communication interface for an autonomous soil-analysis system",
      "Co-authored a research paper presented at the NCUR 2025 conference (Pittsburgh, PA)",
    ],
  },
];

export type MediaItem =
  | { type: "video"; src: string; poster: string; caption?: string }
  | { type: "stl"; src: string; caption?: string }
  | { type: "pdf"; src: string; caption?: string };

export type CodeLink = { label: string; url: string };

export type Project = {
  slug: string;
  title: string;
  dates: string;
  stack: string;
  summary: string;
  bullets: string[];
  media: MediaItem[];
  featured: boolean;
  links?: CodeLink[];
  cover?: string;
};

export const projects: Project[] = [
  {
    slug: "elevator-button-press",
    title: "Autonomous Elevator-Button-Press System",
    dates: "June 2026 – Present",
    stack: "ROS 2, Computer Vision, Perception, Manipulation",
    summary:
      "A vision-guided pipeline that finds and presses an elevator call button using only a depth camera and a calibrated extrinsic — no fiducial markers, no pre-mapped environment.",
    cover: "/media/elevator/cover.jpg",
    bullets: [
      "Detected the button in 2D with a temporal tracker that smooths out per-frame jitter before any detection is trusted, then back-projected the pixel through the depth image into a real 3D point in the arm's own coordinate frame",
      "Kept the camera-to-arm calibration live through ROS's TF tree instead of hardcoding the matrix — when the calibration was updated mid-project, the TF-based lookup picked up the change automatically instead of silently going stale",
      "Diagnosed an intermittent low-level fault on the direct hardware connection that didn't isolate to one clean trigger (a mode switch, a real Cartesian move, or even the enable sequence could each set it off independently); built a diagnostic script that isolates the exact triggering command and exercises every recovery path the vendor SDK exposes, and routed execution through an already-validated ROS 2 control node instead of continuing to chase it at the firmware level",
      "Traced a systematic depth/height error to the wrong correction frame: nudging the end-effector's tool offset (which lives in the flange's local frame, not the true approach direction) fixed depth but quietly introduced sideways error; moving the correction into the camera's own depth axis, before the extrinsic transform, fixed it cleanly",
    ],
    media: [
      {
        type: "video",
        src: "/media/elevator/demo1.mp4",
        poster: "/media/elevator/demo1-poster.jpg",
        caption: "Arm locating and pressing an elevator call button",
      },
      {
        type: "video",
        src: "/media/elevator/demo1-cv-zoom.mp4",
        poster: "/media/elevator/demo1-cv-zoom-poster.jpg",
        caption:
          "Zoomed on the onboard CV overlay: 2D UP/DOWN button detection, filtered over time before being trusted and back-projected to 3D",
      },
      {
        type: "video",
        src: "/media/elevator/demo2.mp4",
        poster: "/media/elevator/demo2-poster.jpg",
        caption: "Full pipeline run, detection through actuation",
      },
    ],
    featured: true,
  },
  {
    slug: "drill-pickup",
    title: "Drill Pick-Up — Diagnosing a VLA Policy in Production",
    dates: "June 2026 – Present",
    stack: "π0.5 (OpenPI), PyTorch, ROS 2, Imitation Learning",
    summary:
      "Debugging real-hardware inference for a fine-tuned π0.5 vision-language-action policy picking up a drill with a 7-DoF arm — tracking down an intermittent miss that only showed up on real hardware.",
    cover: "/media/drill/cover.jpg",
    bullets: [
      "Ran and debugged real-hardware inference for a fine-tuned π0.5 vision-language-action policy picking up a drill with a 7-DoF arm, split across a GPU-side policy server and a ROS 2 control node talking over a local socket",
      "Traced an intermittent, real-hardware-only failure — the arm would sometimes miss the drill with no obvious pattern — to nondeterministic replanning: a fresh action chunk was swapped in the instant background inference finished, so the swap point drifted with GPU timing jitter instead of the task itself",
      "Reworked the control loop to a deterministic fixed-horizon consumption pattern, matching the approach openpi's own reference clients use, so the arm always finishes the same number of steps of its current plan before a swap is considered",
      "Caught a regression in the first version of that fix — forcing every swap to block until the next chunk was ready made the arm stutter noticeably more; fixed it by keeping the prefetch that hides inference latency while still making the swap point fixed and never early",
    ],
    media: [
      {
        type: "video",
        src: "/media/drill/demo.mp4",
        poster: "/media/drill/demo-poster.jpg",
        caption: "π0.5 policy picking up the drill on real hardware",
      },
    ],
    featured: true,
  },
  {
    slug: "autonomous-racecar",
    title: "Autonomous Racecar Perception & Control",
    dates: "Feb 2026 – March 2026",
    stack: "Python, C++, ROS 2, OpenCV",
    summary:
      "A full-stack perception, planning, and control system for a physical autonomous racecar, built with a team of 5.",
    bullets: [
      "Built a camera-based visual servoing pipeline (HSV segmentation, SIFT, YOLO, homography ground-plane projection) for real-time detection and localization, reaching 0.79 median IoU and 1.5 cm mean positioning error",
      "Designed a LiDAR wall-following controller (PD control + RANSAC line fitting) and an independent >180°-FOV safety controller, achieving stable 0.55–0.71 m wall tracking at 1–2 m/s with sub-0.25 m emergency braking",
      "Implemented and benchmarked A* and RRT planners over an occupancy grid and a pure-pursuit controller with off-path recovery, completing the 400 m race lane at a 95% success rate on a physical autonomous racecar",
    ],
    media: [],
    featured: true,
    links: [
      { label: "Final Challenge", url: "https://github.com/rss2026-7/final_challenge2026" },
      { label: "Visual Servoing", url: "https://github.com/rss2026-7/visual_servoing_pkg" },
      { label: "Wall Follower", url: "https://github.com/rss2026-7/wall_follower_pkg" },
      { label: "Path Planning", url: "https://github.com/rss2026-7/path_planning_pkg" },
      { label: "Safety Controller", url: "https://github.com/rss2026-7/safety_controller_pkg" },
    ],
  },
  {
    slug: "modular-robot-hardware",
    title: "Modular Robot Hardware — MIT CSAIL",
    dates: "Sept 2025 – Dec 2025",
    stack: "3D Printing, Electronics, Embedded Control",
    summary:
      "Reconfigurable joint and linkage hardware for robot morphology optimization, designed and fabricated at CSAIL.",
    bullets: [
      "Designed and prototyped modular robot hardware, integrating sensors, actuators, and microcontrollers via 3D printing, electronics simulation, and embedded control",
      "Fabricated and tested reconfigurable hardware prototypes for robot morphology optimization",
      "Developed a lightweight UI to visualize design configurations and control mappings",
    ],
    media: [
      { type: "stl", src: "/media/csail/cubic-joint.stl", caption: "Cubic joint" },
      { type: "stl", src: "/media/csail/cylindrical-joint.stl", caption: "Cylindrical joint" },
      { type: "stl", src: "/media/csail/rotational-cubic-joint.stl", caption: "Rotational cubic joint" },
      { type: "stl", src: "/media/csail/rotational-cylindrical-joint.stl", caption: "Rotational cylindrical joint" },
      { type: "stl", src: "/media/csail/link.stl", caption: "Link" },
      { type: "stl", src: "/media/csail/lock-mechanism.stl", caption: "Lock mechanism" },
    ],
    featured: true,
  },
  {
    slug: "soil-nutrient-sensing",
    title: "Autonomous Soil-Analysis System — Core Research Program",
    dates: "June 2024 – May 2025",
    stack: "Arduino, Multispectral Sensing, Signal Processing",
    summary:
      "A calibrated multispectral sensing system for autonomous soil nutrient detection, co-authored as a research paper presented at NCUR 2025.",
    bullets: [
      "Programmed the Arduino IDE to calibrate an Adafruit AS7341 multispectral sensor for soil nutrient detection",
      "Designed and assembled the sensor hardware and communication interface for an autonomous soil-analysis system",
      "Co-authored a research paper presented at the NCUR 2025 conference (Pittsburgh, PA)",
    ],
    media: [
      { type: "pdf", src: "/docs/core-research-paper.pdf", caption: "Read the full paper" },
    ],
    featured: true,
  },
  {
    slug: "busmate",
    title: "School Bus Tracking App (BUSMATE)",
    dates: "Aug 2024 – May 2025",
    stack: "IoT, GPS, Figma",
    summary:
      "An affordable IoT-based school bus tracking prototype, built with a team of 4 — 1st place, 2024 Perimeter College Innovative Challenge.",
    bullets: [
      "Developed an affordable IoT-based school bus tracking prototype using a low-cost GPS sensor; led user research and prototype design in Figma",
      "Won 1st Place in the 2024 Perimeter College Innovative Challenge Competition",
    ],
    media: [
      {
        type: "video",
        src: "/media/busmate/demo.mp4",
        poster: "/media/busmate/demo-poster.jpg",
        caption: "App walkthrough",
      },
    ],
    featured: false,
  },
  {
    slug: "rss-labs",
    title: "Robotics Science & Systems — Lab Highlights",
    dates: "Coursework",
    stack: "ROS 2, Control, State Estimation",
    summary:
      "Selected lab demos from MIT's Robotics Science & Systems course, covering control and autonomy on a physical racecar platform.",
    bullets: [
      "Coursework labs applying control, estimation, and planning techniques on a physical racecar platform",
    ],
    media: [
      {
        type: "video",
        src: "/media/rss/demo1.mp4",
        poster: "/media/rss/demo1-poster.jpg",
        caption: "Lab demo",
      },
      {
        type: "video",
        src: "/media/rss/demo2.mp4",
        poster: "/media/rss/demo2-poster.jpg",
        caption: "Final lab project",
      },
    ],
    featured: false,
  },
];
