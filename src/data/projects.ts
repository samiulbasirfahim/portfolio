export interface ProjectLink {
  icon: string;
  name: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  images: string[];
  headerTags?: string[];
  tags: string[];
  links: ProjectLink[];
}

export const projects: Project[] = [
  {
    id: "rxwm",
    title: "RXWM",
    description: "A streamlined and efficient dynamic window manager forked from DWM. Built with C and Xlib, providing deep customization, smooth keybindings, and a polished interface for minimal desktop environments.",
    images: [
      "https://github.com/user-attachments/assets/db1eefa1-30a6-49f2-829a-5389edfd2f91",
      "https://github.com/user-attachments/assets/7135a8d3-dd12-4493-9c2d-422a1d27acb3",
      "https://github.com/user-attachments/assets/3c315ac7-652f-4617-9bef-5dc7d032c7f2"
    ],
    headerTags: ["WINDOW MANAGER", "C / XLIB"],
    tags: ["C", "X11", "Xlib", "DWM", "Linux"],
    links: [
      {
        icon: "mdi:github",
        name: "GitHub",
        url: "https://github.com/samiulbasirfahim/rxwm"
      }
    ]
  },
  {
    id: "eternal-link",
    title: "EternaLink",
    description: "A cross-platform mobile application for real-time voice AI calling. Built with React Native & Expo, featuring on-device speech-to-text, low-latency streaming responses, and voice-cloned synthesis via ElevenLabs.",
    images: [
      "https://github.com/user-attachments/assets/f40b4d0d-619e-49b9-ad2b-43738c1b242e",
      "https://github.com/user-attachments/assets/c73dde73-86ad-4644-a3a9-0bf05022d572",
      "https://github.com/user-attachments/assets/b1fb208a-2539-4b3a-9e5b-20c7bc2a2255",
      "https://github.com/user-attachments/assets/041be3ba-f6dd-46cd-b155-32f5632b8f8c",
      "https://github.com/user-attachments/assets/2c581b4f-47c7-4933-9999-d2a2189ae839"
    ],
    headerTags: ["MOBILE APP", "VOICE AI"],
    tags: ["React Native", "TypeScript", "ElevenLabs", "GraphQL", "Reanimated"],
    links: [
      {
        icon: "mdi:apple",
        name: "App Store",
        url: "https://apps.apple.com/il/app/eterna-link/id6761394083"
      },
      {
        icon: "mdi:github",
        name: "GitHub",
        url: "https://github.com/samiulbasirfahim/EternaLink"
      }
    ]
  }
];
