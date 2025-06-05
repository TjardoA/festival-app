"use client";

import { useState } from "react";

const sections = [
  {
    title: "Algemeen & contact",
    content: (
      <>
        <p>
          Het ❤️U Festival is voor (nieuwe) studenten in de regio Utrecht en is
          een aanvulling op UIT.
        </p>
        <h3 className="font-semibold mt-4">Adres</h3>
        <p>Locatie: Strijkviertel, Utrecht</p>
        <p>Navigatieadres: Strijkviertelweg, Utrecht</p>
        <h3 className="font-semibold mt-4">Datum & Openingstijden</h3>
        <p>Zaterdag 6 september 2025 - 12:00 tot 23:00 uur</p>
      </>
    ),
  },
  {
    title: "Bereikbaarheid",
    content: (
      <>
        <h3 className="font-semibold mt-2">Fiets</h3>
        <p>
          Er is een grote gratis fietsenstalling aanwezig waar je jouw fiets de
          gehele dag kunt stallen.
        </p>
        <h3 className="font-semibold mt-2">Auto</h3>
        <p>
          Parkeren kan op P+R Papendorp, volg de borden 'P online ticket'. Geen
          ticket? Koop er een bij de parkeerwachter (PIN ONLY). Let op: VOL=VOL.
        </p>
        <h3 className="font-semibold mt-2">OV</h3>
        <p>
          Plan je trip via{" "}
          <a
            href="https://9292.nl"
            className="text-blue-600 underline dark:text-blue-400"
            target="_blank"
          >
            9292.nl
          </a>
          .
        </p>
        <h3 className="font-semibold mt-2">Shuttlebus</h3>
        <p>
          Gratis shuttlebus vanaf Utrecht Centraal (Mineurslaan). Heen tussen
          12:00 en 19:00, terug vanaf 21:00.
        </p>
        <h3 className="font-semibold mt-2">Taxi + Kiss & Ride</h3>
        <p>Navigeer naar Strijkviertel, De Meern. Volg de borden.</p>
      </>
    ),
  },
  {
    title: "Lockers",
    content: (
      <p>
        Er zijn lockers aanwezig op het terrein (3 à 4 jassen). Je kunt ze de
        hele dag gebruiken. Online reserveren is niet mogelijk.
      </p>
    ),
  },
  {
    title: "FAQ",
    content: (
      <>
        <h3 className="font-semibold mt-2">Ik gebruik medicatie. Wat nu?</h3>
        <p>
          Je mag medicatie meenemen met doktersverklaring. EHBO kan dit bewaren
          indien nodig.
        </p>
        <h3 className="font-semibold mt-2">
          Mag ik tussentijds het terrein verlaten?
        </h3>
        <p>
          Nee, dat is niet toegestaan. Er zijn genoeg voorzieningen op het
          terrein.
        </p>
        <h3 className="font-semibold mt-2">Zijn er lockers?</h3>
        <p>Yes! Medium & grote lockers zijn beschikbaar op het terrein.</p>
      </>
    ),
  },
  {
    title: "Golden-GLU",
    content: (
      <p>
        Studenten van het GLU met een gouden armbandje krijgen privileges:
        gouden toiletten en priority service bij speciale barpunten.
      </p>
    ),
  },
];

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
              <div className="text-sm text-gray-800 dark:text-gray-100">
                {section.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
