"use client";

import type React from "react";

export function ContactCtaButton() {
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Dispatch a custom event that the Header listens for to open the contact modal.
    // Include context so the modal knows to show Products-specific questions.
    const evt = new CustomEvent("open-contact-modal", {
      detail: { source: "products" },
    });
    window.dispatchEvent(evt);
  };

  return (
    <button
      type="button"
      className="inline-flex items-center justify-center rounded-md bg-black px-5 py-3 text-white font-medium hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-black/30"
      onClick={onClick}
    >
      Contact Us for Demo
    </button>
  );
}
