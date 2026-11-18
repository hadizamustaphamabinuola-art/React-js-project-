import {
  FaHelmetSafety,
  FaClock,
  FaClipboardCheck,
  FaShieldHalved,
} from "react-icons/fa6";

import Reveal from "./Reveal";

const reasons = [
  {
    id: 1,
    icon: FaHelmetSafety,
    title: "Quality Workmanship",
    description:
      "We focus on durable construction, careful finishing, and professional execution at every stage.",
  },
  {
    id: 2,
    icon: FaClock,
    title: "Timely Delivery",
    description:
      "Projects are planned with clear timelines and coordinated carefully to reduce unnecessary delays.",
  },
  {
    id: 3,
    icon: FaClipboardCheck,
    title: "Transparent Management",
    description:
      "Clients receive clear updates, practical guidance, and better visibility throughout the project.",
  },
  {
    id: 4,
    icon: FaShieldHalved,
    title: "Safety and Compliance",
    description:
      "We encourage safe work practices and ensure construction follows approved plans and standards.",
  },
];

function WhyChooseUs() {
  return (
    <section className="bg-[#0F2747] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-300">
            Why Choose Us
          </p>

          <h2 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
            Built on Reliability, Precision, and Trust
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            We combine careful planning, professional supervision, and
            practical construction experience to deliver dependable results.
          </p>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <Reveal
                key={reason.id}
                delay={index * 0.1}
                className="h-full"
              >
                <article className="group h-full border border-white/15 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:bg-white/10">
                  <div className="flex h-14 w-14 items-center justify-center bg-blue-600 text-2xl text-white">
                    <Icon />
                  </div>

                  <h3 className="mt-6 text-xl font-bold">
                    {reason.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-300">
                    {reason.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
// import Reveal from "./Reveal";
// import {
//   FaHelmetSafety,
//   FaClock,
//   FaClipboardCheck,
//   FaShieldHalved,
// } from "react-icons/fa6";

// <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
//   {reasons.map((reason, index) => {
//     const Icon = reason.icon;

//     return (
//       <Reveal
//         key={reason.id}
//         delay={index * 0.1}
//       >
//         <article className="group h-full border border-white/15 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:bg-white/10">
//           <div className="flex h-14 w-14 items-center justify-center bg-blue-600 text-2xl text-white">
//             <Icon />
//           </div>

//           <h3 className="mt-6 text-xl font-bold">
//             {reason.title}
//           </h3>

//           <p className="mt-4 leading-7 text-gray-300">
//             {reason.description}
//           </p>
//         </article>
//       </Reveal>
//     );
//   })}
// </div>
// // const reasons = [
// //   {
// //     id: 1,
// //     icon: FaHelmetSafety,
// //     title: "Quality Workmanship",
// //     description:
// //       "We focus on durable construction, careful finishing, and professional execution at every stage.",
// //   },
// //   {
// //     id: 2,
// //     icon: FaClock,
// //     title: "Timely Delivery",
// //     description:
// //       "Projects are planned with clear timelines and coordinated carefully to reduce unnecessary delays.",
// //   },
// //   {
// //     id: 3,
// //     icon: FaClipboardCheck,
// //     title: "Transparent Management",
// //     description:
// //       "Clients receive clear updates, practical guidance, and better visibility throughout the project.",
// //   },
// //   {
// //     id: 4,
// //     icon: FaShieldHalved,
// //     title: "Safety and Compliance",
// //     description:
// //       "We encourage safe work practices and ensure construction follows approved plans and standards.",
// //   },
// // ];

// function WhyChooseUs() {
//   return (
//     <section className="bg-[#0F2747] py-24 text-white">
//       <div className="mx-auto max-w-7xl px-6">
//         <div className="mx-auto mb-16 max-w-3xl text-center">
//           <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-300">
//             Why Choose Us
//           </p>

//           <h2 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
//             Built on Reliability, Precision, and Trust
//           </h2>

//           <p className="mt-6 text-lg leading-8 text-gray-300">
//             We combine careful planning, professional supervision, and practical
//             construction experience to deliver dependable results.
//           </p>
//         </div>

//         <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
//           {reasons.map((reason) => {
//             const Icon = reason.icon;

//             return (
//               <article
//                 key={reason.id}
//                 className="group border border-white/15 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:bg-white/10"
//               >
//                 <div className="flex h-14 w-14 items-center justify-center bg-blue-600 text-2xl text-white">
//                   <Icon />
//                 </div>

//                 <h3 className="mt-6 text-xl font-bold">
//                   {reason.title}
//                 </h3>

//                 <p className="mt-4 leading-7 text-gray-300">
//                   {reason.description}
//                 </p>
//               </article>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default WhyChooseUs;