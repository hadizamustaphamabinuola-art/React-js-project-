import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 500);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  if (!visible) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-24 right-8 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-[#0F2747] text-white shadow-lg transition hover:-translate-y-1 hover:bg-blue-700"
    >
      <FaArrowUp />
    </button>
  );
}

export default BackToTop;