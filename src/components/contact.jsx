import { useState } from "react";
import Reveal from "./Reveal";

import {
  FaEnvelope,
  FaLocationDot,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa6";
<div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2">
  <Reveal direction="right">
    <div>
      {/* Contact information */}
    </div>
  </Reveal>

  <Reveal direction="left" delay={0.15}>
    <form>
      {/* Contact form */}
    </form>
  </Reveal>
</div>

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const whatsappNumber = "2348022307367";

    const whatsappMessage = `
Hello Rafmus Builders Consult,

I would like to make a project enquiry.

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Service Required: ${formData.service}

Project Details:
${formData.message}
    `;

    const encodedMessage = encodeURIComponent(whatsappMessage);

    const whatsappURL = `https://wa.me/${2348032168432}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
  }

  return (
    <section id="contact" className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2">
        {/* Contact information */}
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-600">
            Contact Us
          </p>

          <h2 className="mt-4 text-4xl font-extrabold leading-tight text-[#0F2747] md:text-5xl">
            Let’s Discuss Your Next Project
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Tell us what you want to build, renovate, or supervise. Our team
            will review your request and help you understand the next steps.
          </p>

          <div className="mt-10 space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-blue-100 text-xl text-blue-700">
                <FaPhone />
              </div>

              <div>
                <h3 className="font-bold text-[#0F2747]">
                  Phone
                </h3>

                <a
                  href="tel:+2348022307367, +2348032168432"
                  className="mt-1 block text-gray-600 transition hover:text-blue-700"
                >
                  +234 8032168432
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-blue-100 text-xl text-blue-700">
                <FaEnvelope />
              </div>

              <div>
                <h3 className="font-bold text-[#0F2747]">
                  Email
                </h3>

                <a
                  href="mailto:rbclimited05@gmail.com"
                  className="mt-1 block break-all text-gray-600 transition hover:text-blue-700"
                >
                  rbclimited05@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-blue-100 text-xl text-blue-700">
                <FaLocationDot />
              </div>

              <div>
                <h3 className="font-bold text-[#0F2747]">
                  Office
                </h3>

                <p className="mt-1 text-gray-600">
                  Lagos, Nigeria
                </p>
              </div>
            </div>
          </div>

          <a
            href="https://wa.me/2348022307367"
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-3 rounded-md bg-green-600 px-7 py-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-green-700"
          >
            <FaWhatsapp className="text-xl" />
            Chat on WhatsApp
          </a>
        </div>

        {/* Contact form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 p-7 shadow-xl sm:p-10"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block font-semibold text-[#0F2747]"
              >
                Full name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
                className="w-full border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="mb-2 block font-semibold text-[#0F2747]"
              >
                Phone number
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+234..."
                className="w-full border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />
            </div>
          </div>

          <div className="mt-6">
            <label
              htmlFor="email"
              className="mb-2 block font-semibold text-[#0F2747]"
            >
              Email address
            </label>

            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="w-full border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div className="mt-6">
            <label
              htmlFor="service"
              className="mb-2 block font-semibold text-[#0F2747]"
            >
              Service needed
            </label>

            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            >
              <option value="" disabled>
                Select a service
              </option>

              <option value="Building Construction">
                Building Construction
              </option>

              <option value="Renovation and Remodeling">
                Renovation and Remodeling
              </option>

              <option value="Project Management">
                Project Management
              </option>

              <option value="Building Consultancy">
                Building Consultancy
              </option>

              <option value="Site Supervision">
                Site Supervision
              </option>

              <option value="Cost Estimation">
                Cost Estimation
              </option>
            </select>
          </div>

          <div className="mt-6">
            <label
              htmlFor="message"
              className="mb-2 block font-semibold text-[#0F2747]"
            >
              Project details
            </label>

            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell us about your project..."
              className="w-full resize-none border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <button
            type="submit"
            className="mt-7 flex w-full items-center justify-center gap-3 bg-[#0F2747] px-7 py-4 font-bold text-white transition hover:bg-[#1E5AA8]"
          >
            <FaWhatsapp className="text-xl" />
            Send Enquiry via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
// import {
//   FaEnvelope,
//   FaLocationDot,
//   FaPhone,
//   FaWhatsapp,
// } from "react-icons/fa6";

// function Contact() {
//   function handleSubmit(event) {
//     event.preventDefault();

//     alert("Your message has been received.");
//   }

//   return (
//     <section id="contact" className="bg-white py-24">
//       <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2">
        
//         {/* Contact information */}
//         <div>
//           <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-600">
//             Contact Us
//           </p>

//           <h2 className="mt-4 text-4xl font-extrabold leading-tight text-[#0F2747] md:text-5xl">
//             Let’s Discuss Your Next Project
//           </h2>

//           <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
//             Tell us what you want to build, renovate, or supervise. Our team
//             will review your request and help you understand the next steps.
//           </p>

//           <div className="mt-10 space-y-6">
//             <div className="flex items-start gap-4">
//               <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-blue-100 text-xl text-blue-700">
//                 <FaPhone />
//               </div>

//               <div>
//                 <h3 className="font-bold text-[#0F2747]">
//                   Phone
//                 </h3>

//                 <a
//                   href="tel:+2348032168432, +2348022307367"
//                   className="mt-1 block text-gray-600 hover:text-blue-700"
//                 >
//                   +234 803218432, +234 8022307367
//                 </a>
//               </div>
//             </div>

//             <div className="flex items-start gap-4">
//               <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-blue-100 text-xl text-blue-700">
//                 <FaEnvelope />
//               </div>

//               <div>
//                 <h3 className="font-bold text-[#0F2747]">
//                   Email
//                 </h3>

//                 <a
//                   href="mailto:rbclimited05@gmail.com"
//                   className="mt-1 block text-gray-600 hover:text-blue-700"
//                 >
//                   rbclimited05@gmail.com
//                 </a>
//               </div>
//             </div>

//             <div className="flex items-start gap-4">
//               <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-blue-100 text-xl text-blue-700">
//                 <FaLocationDot />
//               </div>

//               <div>
//                 <h3 className="font-bold text-[#0F2747]">
//                   Office
//                 </h3>

//                 <p className="mt-1 text-gray-600">
//                   Lagos, Nigeria
//                 </p>
//               </div>
//             </div>
//           </div>

//           <a
//             href="https://wa.me/2348032168432"
//             href="https://wa.me/2348022307367"
//             target="_blank"
//             rel="noreferrer"
//             className="mt-10 inline-flex items-center gap-3 rounded-md bg-green-600 px-7 py-4 font-semibold text-white transition hover:bg-green-700"
//           >
//             <FaWhatsapp className="text-xl" />
//             Chat on WhatsApp
//           </a>
//         </div>

//         {/* Contact form */}
//         <form
//           onSubmit={handleSubmit}
//           className="bg-gray-50 p-7 shadow-lg sm:p-10"
//         >
//           <div className="grid gap-6 sm:grid-cols-2">
//             <div>
//               <label
//                 htmlFor="name"
//                 className="mb-2 block font-semibold text-[#0F2747]"
//               >
//                 Full name
//               </label>

//               <input
//                 id="name"
//                 name="name"
//                 type="text"
//                 required
//                 placeholder="Your full name"
//                 className="w-full border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
//               />
//             </div>

//             <div>
//               <label
//                 htmlFor="phone"
//                 className="mb-2 block font-semibold text-[#0F2747]"
//               >
//                 Phone number
//               </label>

//               <input
//                 id="phone"
//                 name="phone"
//                 type="tel"
//                 required
//                 placeholder="+234..."
//                 className="w-full border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
//               />
//             </div>
//           </div>

//           <div className="mt-6">
//             <label
//               htmlFor="email"
//               className="mb-2 block font-semibold text-[#0F2747]"
//             >
//               Email address
//             </label>

//             <input
//               id="email"
//               name="email"
//               type="email"
//               required
//               placeholder="you@example.com"
//               className="w-full border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
//             />
//           </div>

//           <div className="mt-6">
//             <label
//               htmlFor="service"
//               className="mb-2 block font-semibold text-[#0F2747]"
//             >
//               Service needed
//             </label>

//             <select
//               id="service"
//               name="service"
//               defaultValue=""
//               required
//               className="w-full border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
//             >
//               <option value="" disabled>
//                 Select a service
//               </option>

//               <option value="construction">
//                 Building Construction
//               </option>

//               <option value="renovation">
//                 Renovation and Remodeling
//               </option>

//               <option value="management">
//                 Project Management
//               </option>

//               <option value="consultancy">
//                 Building Consultancy
//               </option>

//               <option value="supervision">
//                 Site Supervision
//               </option>

//               <option value="estimation">
//                 Cost Estimation
//               </option>
//             </select>
//           </div>

//           <div className="mt-6">
//             <label
//               htmlFor="message"
//               className="mb-2 block font-semibold text-[#0F2747]"
//             >
//               Project details
//             </label>

//             <textarea
//               id="message"
//               name="message"
//               rows="6"
//               required
//               placeholder="Tell us about your project..."
//               className="w-full resize-none border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
//             />
//           </div>

//           <button
//             type="submit"
//             className="mt-7 w-full bg-[#0F2747] px-7 py-4 font-bold text-white transition hover:bg-[#1E5AA8]"
//           >
//             Send Project Enquiry
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }

// export default Contact;