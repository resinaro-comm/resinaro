"use client";

export default function StickyHelperChip() {
  const handleClick = () => {
    const el = document.getElementById("monzo-checklist");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="fixed bottom-5 right-4 z-30 inline-flex items-center rounded-full bg-green-900 px-3 py-2 text-xs font-semibold text-white shadow-lg hover:bg-green-800 md:hidden"
      aria-label="Jump back to the Monzo checklist"
    >
      ↑ Back to checklist
    </button>
  );
}
