"use client";

import { useState } from "react";
import sections from "../data/info.json";

export default function InfoAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4 space-y-4">
      {sections.map((section, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className="border rounded-lg shadow-md bg-white dark:bg-gray-800 dark:border-gray-700 transition-colors duration-300"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-4 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 font-semibold text-gray-800 dark:text-white transition-colors duration-300 rounded-t-lg"
            >
              {section.title}
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out px-4 ${
                isOpen ? "max-h-[1000px] py-3" : "max-h-0 py-0"
              }`}
            >
              <div className="text-sm text-gray-800 dark:text-gray-100 space-y-2">
                {section.content.map((paragraph, i) => (
                  <p
                    key={i}
                    className={
                      paragraph === paragraph.toUpperCase()
                        ? "font-semibold mt-4"
                        : ""
                    }
                  >
                    {paragraph.includes("9292.nl") ? (
                      <a
                        href="https://9292.nl"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline dark:text-blue-400"
                      >
                        {paragraph}
                      </a>
                    ) : (
                      paragraph
                    )}
                  </p>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
