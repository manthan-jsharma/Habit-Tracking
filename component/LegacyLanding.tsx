// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const textContent = [
//   {
//     id: "text1",
//     title: "Track Your Time",
//     description: "Effortlessly monitor hours spent on tasks and projects",
//     position: "left",
//     scrollPosition: 0.05,
//   },
//   {
//     id: "text2",
//     title: "Boost Productivity",
//     description: "Identify time-wasting activities and optimize your workflow",
//     position: "right",
//     scrollPosition: 0.25,
//   },
//   {
//     id: "text3",
//     title: "Seamless Timesheets",
//     description: "Automated timesheet generation for hassle-free reporting",
//     position: "left",
//     scrollPosition: 0.35,
//   },
//   {
//     id: "text4",
//     title: "Team Attendance",
//     description: "Monitor team presence and optimize resource allocation",
//     position: "right",
//     scrollPosition: 0.55,
//   },
//   {
//     id: "text5",
//     title: "Smart Budgeting",
//     description: "Track project costs in real-time based on accurate time data",
//     position: "left",
//     scrollPosition: 0.65,
//   },
//   {
//     id: "text6",
//     title: "Integrated Calendar",
//     description: "Visualize your schedule and plan your time effectively",
//     position: "right",
//     scrollPosition: 0.8,
//   },
// ];

// const LegacyLanding = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const textSectionsRef = useRef<HTMLDivElement>(null);
//   useEffect(() => {
//     const canvas = canvasRef.current!;
//     const context = canvas.getContext("2d")!;
//     const frameCount = 300;
//     const images: HTMLImageElement[] = [];
//     const imageSeq = { frame: 0 };

//     const render = () => {
//       const img = images[imageSeq.frame];
//       if (!img || !img.complete) return;

//       const hRatio = canvas.width / img.width;
//       const vRatio = canvas.height / img.height;
//       const ratio = Math.max(hRatio, vRatio);
//       const centerShiftX = (canvas.width - img.width * ratio) / 2;
//       const centerShiftY = (canvas.height - img.height * ratio) / 2;
//       context.clearRect(0, 0, canvas.width, canvas.height);
//       context.drawImage(
//         img,
//         0,
//         0,
//         img.width,
//         img.height,
//         centerShiftX,
//         centerShiftY,
//         img.width * ratio,
//         img.height * ratio
//       );
//     };

//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//       render();
//     };

//     resizeCanvas();
//     window.addEventListener("resize", resizeCanvas);

//     for (let i = 0; i < frameCount; i++) {
//       const img = new Image();
//       const index = (i + 1).toString().padStart(4, "0");
//       img.src = `/CYBERFICTION-IMAGES/male${index}.png`;
//       images.push(img);
//     }

//     images[0].onload = render;

//     gsap.to(imageSeq, {
//       frame: frameCount - 1,
//       snap: "frame",
//       ease: "none",
//       scrollTrigger: {
//         scrub: 0.15,
//         trigger: containerRef.current,
//         start: "top top",
//         end: "5000 top ",
//         pin: true,
//       },
//       onUpdate: render,
//     });

//     textContent.forEach((item) => {
//       const textElement = document.getElementById(item.id);
//       if (!textElement) return;

//       // Create timeline for each text element
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: `top+=${item.scrollPosition * 400}% top`, // Adjusted start position
//           end: `top+=${item.scrollPosition * 400 + 60}% top`, // Adjusted end position
//           scrub: true,
//           toggleActions: "play reverse play reverse",
//         },
//       });

//       // Initial state
//       gsap.set(textElement, {
//         autoAlpha: 0,
//         x: item.position === "left" ? -100 : 100,
//       });

//       // Animation
//       tl.to(textElement, {
//         duration: 1,
//         autoAlpha: 1,
//         x: 0,
//         ease: "power2.out",
//       }).to(
//         textElement,
//         {
//           duration: 1,
//           autoAlpha: 0,
//           x: item.position === "left" ? -100 : 100,
//           ease: "power2.in",
//         },
//         "+=0.5"
//       );
//     });

//     return () => {
//       window.removeEventListener("resize", resizeCanvas);
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   return (
//     <div ref={containerRef} className="relative h-[100vh] bg-black">
//       <canvas
//         ref={canvasRef}
//         className="fixed top-0 left-0 w-full h-full z-10"
//       />

//       <div
//         ref={textSectionsRef}
//         className="fixed inset-0 z-20 pointer-events-none"
//       >
//         {textContent.map((item) => (
//           <div
//             key={item.id}
//             id={item.id}
//             className={`absolute ${
//               item.position === "left"
//                 ? "left-10 md:left-20"
//                 : "right-10 md:right-20"
//             } top-1/2 transform -translate-y-1/2 max-w-md p-6 bg-black/70 backdrop-blur-md rounded-xl text-white habit-text`}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold mb-2 text-primary">
//               {item.title}
//             </h2>
//             <p className="text-lg text-white/80">{item.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LegacyLanding;
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const textContent = [
  {
    id: "text1",
    title: "Track Your Time",
    description: "Effortlessly monitor hours spent on tasks and projects",
    position: "left",
    scrollPosition: 0.05,
  },
  {
    id: "text2",
    title: "Boost Productivity",
    description: "Identify time-wasting activities and optimize your workflow",
    position: "right",
    scrollPosition: 0.25,
  },
  {
    id: "text3",
    title: "Project Creation",
    description:
      "Option for Project Creation Under Which your Associated Habits Converge",
    position: "left",
    scrollPosition: 0.35,
  },
  {
    id: "text4",
    title: "Team-Project",
    description: "Monitor team presence and optimize resource allocation",
    position: "right",
    scrollPosition: 0.55,
  },
  {
    id: "text5",
    title: "Smart-reports",
    description: "Track Your Reports and Analysis",
    position: "left",
    scrollPosition: 0.65,
  },
  {
    id: "text6",
    title: "Integrated Calendar",
    description: "Visualize your schedule and plan your time effectively",
    position: "right",
    scrollPosition: 0.8,
  },
];

const LegacyLanding = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const context = canvas.getContext("2d")!;
    const frameCount = 300;
    const images: HTMLImageElement[] = [];
    const imageSeq = { frame: 0 };

    // Load images
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      const index = (i + 1).toString().padStart(4, "0");
      img.src = `/CYBERFICTION-IMAGES/male${index}.png`;
      images.push(img);
    }

    const render = () => {
      const img = images[imageSeq.frame];
      if (!img || !img.complete) return;

      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      const ratio = Math.max(hRatio, vRatio);
      const centerShiftX = (canvas.width - img.width * ratio) / 2;
      const centerShiftY = (canvas.height - img.height * ratio) / 2;
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShiftX,
        centerShiftY,
        img.width * ratio,
        img.height * ratio
      );
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    images[0].onload = render;

    // Canvas scroll animation
    gsap.to(imageSeq, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        scrub: 0.15,
        trigger: containerRef.current,
        start: "top top",
        end: "5000 top",
        pin: true,
      },
      onUpdate: render,
    });

    // Text animation control
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "5000 top",
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;

        textContent.forEach((item) => {
          const textElement = document.getElementById(item.id);
          if (!textElement) return;

          const fadeInStart = item.scrollPosition - 0.05;
          const fadeInEnd = item.scrollPosition + 0.05;
          const isVisible = progress >= fadeInStart && progress <= fadeInEnd;

          gsap.to(textElement, {
            autoAlpha: isVisible ? 1 : 0,
            x: isVisible ? 0 : item.position === "left" ? -100 : 100,
            duration: 0.4,
            ease: "power2.out",
          });
        });
      },
    });

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative h-[100vh] bg-purple-50">
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full z-10"
      />

      <div className="fixed inset-0 z-20 pointer-events-none">
        {textContent.map((item) => (
          <div
            key={item.id}
            id={item.id}
            className={`absolute ${
              item.position === "left"
                ? "left-10 md:left-20"
                : "right-10 md:right-20"
            } top-1/2 transform -translate-y-1/2 max-w-md p-6 bg-black/70 backdrop-blur-md rounded-xl text-white`}
            style={{ opacity: 0 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-primary">
              {item.title}
            </h2>
            <p className="text-lg text-white/80">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LegacyLanding;
