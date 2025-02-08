// "use client";
// import React, { useTransition, useState } from "react";
// import Image from "next/image";
// import TabButton from "./TabButton";

// // Define the tab data
// const TAB_DATA = [
//   {
//     title: "Skills",
//     id: "skills",
//     content: (
//       <ul className="list-disc pl-2">
//         <li>Html</li>
//         <li>Css</li>
//         <li>Javascript</li>
//         <li>Next.js</li>
//         <li>Tailwindcss</li>
//         <li>Typescript</li>
//       </ul>
//     ),
//   },
//   {
//     title: "Certifications",
//     id: "certifications",
//     content: (
//       <ul className="list-disc pl-2">
//         <li>ABC Developer</li>
//       </ul>
//     ),
//   },
// ];

// const AboutSection = () => {
//   const [tab, setTab] = useState("skills");
//   const [isPending, startTransition] = useTransition();

//   // Handle tab change
//   const handleTabChange = (id: string) => {
//     startTransition(() => {
//       setTab(id);
//     });
//   };

//   return (
//     <section className="text-white" id="about">
//       <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
//         {/* Make sure to update the path for the image correctly */}
//         <Image 
//           src="/aboutsetion/about-image.png" 
//           alt="About image" 
//           width={500} 
//           height={500} 
//         />
//         <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
//           <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
//           <p className="text-base lg:text-lg">
//             I am a full stack web developer with a passion for creating
//             interactive and responsive web applications. I have experience
//             working with HTML, CSS, JavaScript , typeScript ,Next.js ,tailwindcss and Git. I am a quick learner and I am always
//             looking to expand my knowledge and skill set. I am a team player and
//             I am excited to work with others to create amazing applications.
//           </p>
//           <div className="flex flex-row justify-start mt-8">
//             {/* Tab buttons for Skills, Education, Certifications */}
//             <TabButton
//               selectTab={() => handleTabChange("skills")}
//               active={tab === "skills"}
//             >
//               Skills
//             </TabButton>
//             <TabButton
//               selectTab={() => handleTabChange("certifications")}
//               active={tab === "certifications"}
//             >
//               Certifications
//             </TabButton>
//           </div>
//           <div className="mt-8">
//             {/* Render the content for the active tab */}
//             {TAB_DATA.find((t) => t.id === tab)?.content}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;

"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

// Define the tab data
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Html</li>
        <li>Css</li>
        <li>Javascript</li>
        <li>Next.js</li>
        <li>Tailwindcss</li>
        <li>Typescript</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>ABC Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  // Remove isPending since it's not used:
  const [, startTransition] = useTransition();

  // Handle tab change
  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image 
          src="/aboutsetion/about-image.png" 
          alt="About image" 
          width={500} 
          height={500} 
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with HTML, CSS, JavaScript, TypeScript, Next.js, Tailwindcss, and Git. I am a quick learner and always looking to expand my knowledge and skill set. I am a team player and excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
