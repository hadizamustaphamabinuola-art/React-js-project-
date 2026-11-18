import { FaWhatsapp } from "react-icons/fa6";

function FloatingWhatsApp() {
  const whatsappNumber = "2348022307367";

  const message = encodeURIComponent(
    "Hello Rafmus Builders Consult, I would like to enquire about your services."
  );

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Rafmus Builders Consult on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-3xl text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-green-700"
    >
      <FaWhatsapp />
    </a>
  );
}

export default FloatingWhatsApp;