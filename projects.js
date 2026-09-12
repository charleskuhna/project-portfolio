/**
 * projects.js — Add your engineering projects here.
 *
 * Fields:
 *   id         — unique slug (no spaces)
 *   title      — project name
 *   date       — e.g. "Spring 2025"
 *   tags       — array of short labels, e.g. ["Electronics", "PCB", "C++"]
 *   summary    — short description shown on the card (2-3 sentences)
 *   cover      — path to cover image, e.g. "images/my-project/cover.jpg"
 *                leave "" to show an emoji placeholder instead
 *   emoji      — fallback if no cover image, e.g. "⚙️"
 *   overview   — longer paragraph shown in the detail modal
 *   howIBuiltIt — paragraph or bullet list describing the build process
 *   steps      — array of strings, each a key build step (shown as bullets)
 *   tools      — array of tools/software/components used
 *   photos     — array of image paths shown in the photo grid
 *   links      — array of { label, url } for external links (GitHub, docs, etc.)
 */

const PROJECTS = [
  {
    id: "Project_1",
    title: "Seizure Detection System",
    date: "Spring 2025",
    tags: ["Sensors", "C++", "Arduino"],
    summary: "Made for Bioinstrumentaion class in undergrad. Uses a EMG, an accelerometer and a heart rate sensor to notify user of a Seizure.",
    cover: "images/IMG_2460.jpeg",
    overview: "This robot was built for my embedded systems course. It uses five IR reflectance sensors to detect a black line and a PID controller to keep it on track. Everything runs on a custom PCB I designed in KiCad.",
    howIBuiltIt: "I started by prototyping on a breadboard to validate the sensor readings, then moved to a custom PCB to reduce noise and clean up the wiring. The firmware is written in C and flashed over ISP.",
    steps: [
      "Designed schematic and tested out puts on Simetrix",
      "Assembled ciruit layout on breadboard and gatherred inital readings",
      "Visualized sensor feeback and calibrated",
      "Tested under conditions of seizure, replicating movements",
      "Presented 'proof of concept' prototype at Expo"
    ],
    tools: ["KiCad", "AVR-GCC", "ATmega328P", "IR QRE1113 sensors", "L298N motor driver"],
    photos: [],
    links: [
      { label: "GitHub", url: "https://github.com/charleskuhna/bioinstrum_final" }
    ]
  },
  {
    id: "Project_2",
    title: "Electronic Jaw Rehab Device",
    date: "2025-2026",
    tags: ["PCB Design", "Data Analysis", "SolidWorks"],
    summary: "This project was a collaboration with a local dentist to design a device that helps patients recover from jaw surgery. The device measures jaw movement and provides feedback to the patient.",
    cover: "images/IMG_4897.PNG",
    overview: "A project to redesign a jaw rehab device for patients recovering from surgery. The device measures jaw movement and bite force using a custom PCB with sensors and provides feedback to the patient through a mobile app. The enclosure was designed in SolidWorks and 3D printed for durability and comfort.",
    howIBuiltIt: "I started by drawing the PCB schematic in Altium Designer, then laid out the PCB and ordered it from a manufacturer. We alligned strain gauges and a hall effect sensor to measure jaw movement and bite force.",
    steps: [
      "I designed the PCB schematic in Altium Designer and laid out the PCB.",
      "We aligned strain gauges and a hall effect sensor to measure jaw movement and bite force.",
      "The enclosure was designed in SolidWorks and 3D printed for with TPU for durability and comfort.",
      "We tested the device on an Instron testing machine."
    ],
    tools: ["SolidWorks", "Altium Designer", "3D Printing", "Strain Gauges", "Hall Effect Sensor"],
    photos: ["images/IMG_4898.jpeg", "images/IMG_4895.jpeg", "images/IMG_4896.jpeg"],
    links: []
  },
  {
    id: "Project_3",
    title: "lAIRinx",
    date: "Fall 2026",
    tags: ["Solidworks", "Preform", "Frequency"],
    summary: "Hired by a college professor to simulate human vocal chords to let those with laryngectmys speak. Took the project from concet to prototype to be released in november 2026.",
    cover: "images/IMG_LAIR.jpeg",
    overview: "A project to simulate human vocal chords for patients who have undergone a laryngectomy. The device uses biomechanical principles to generate sound and allows patients to speak. The project, starting in summer 2026, involved designing the device in SolidWorks, testing with real patients, and releasing a device to market in November 2026.",
    howIBuiltIt: "I am unable to disclose the exact details of the project due to a non-disclosure agreement, but I can say that I was responsible for the mechanical design and simulation of the device, as well as testing and iterating on prototypes.",
    steps: [
      "Early concept design and simulation in SolidWorks",
      "Prototyping and testing with real patients",
      "Iterating on design based on feedback and test results",
      "Finalizing design for production and release"
    ],
    tools: ["SolidWorks", "Preform", "Frequency Analysis", "3D Printing"],
    photos: [],
    links: []
  }
];
