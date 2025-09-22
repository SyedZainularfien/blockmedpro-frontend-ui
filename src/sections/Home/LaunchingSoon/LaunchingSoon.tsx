"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";

const LAUNCHLIST_ENDPOINT = "https://getlaunchlist.com/s/nWgBb8";

const LaunchingSoon: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const searchParams = useSearchParams();
  const refValue = searchParams.get("ref");

  const validateEmail = (val: string): boolean =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(val).toLowerCase());

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    if (!trimmedName || trimmedName.length < 2) {
      setError("Please enter your name (at least 2 characters).");
      return;
    }
    if (!trimmedEmail) {
      setError("Please enter your email.");
      return;
    }
    if (!validateEmail(trimmedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setSubmitting(true);

    const form = document.createElement("form");
    form.method = "POST";
    form.action = refValue
      ? `${LAUNCHLIST_ENDPOINT}?ref=${refValue}`
      : LAUNCHLIST_ENDPOINT;
    form.target = "_blank";
    form.style.display = "none";

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.name = "name";
    nameInput.value = trimmedName;
    form.appendChild(nameInput);

    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.name = "email";
    emailInput.value = trimmedEmail;
    form.appendChild(emailInput);

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);

    setTimeout(() => {
      setSuccess(true);
      setName("");
      setEmail("");
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div id="launching-soon" className="py-5 pt-5">
      <div className="mx-auto max-w-[980px] px-4">
        <div className="mb-8 text-center">
          <h2 className="text-[32px] font-bold tracking-tight text-river-blue">
            Launching Soon
          </h2>
        </div>

        {success ? (
          <div className="w-full sm:w-[490px] flex flex-col gap-6 p-10 mx-auto bg-white border shadow-sm rounded-2xl border-gray">
            <div className="flex flex-col gap-4 text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-green-100 rounded-full">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-green-600">
                You're on the list!
              </h3>
              <p className="text-neutral-600">
                Thank you for joining our waiting list. We'll notify you when
                BlockMed Pro is ready for early access.
              </p>
              <button
                onClick={() => {
                  setSuccess(false);
                  setName("");
                  setEmail("");
                }}
                className="mt-4 text-blue-600 underline transition-colors hover:text-blue-700"
              >
                Add another email
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full sm:w-[490px] flex flex-col gap-6 p-6 sm:p-8 mx-auto bg-white border shadow-sm rounded-2xl border-gray">
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold text-center text-sky-blue">
                Join Waiting List
              </h3>
              <p className="text-center text-md text-neutral-600">
                Enter your name & email to join our waiting list and get early
                access + exclusive perks
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              data-ref={refValue}
              className="flex flex-col gap-3 launchlist-form"
            >
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name here"
                className="relative text-river-blue bg-light-blue outline-0.5 w-full h-[60px] px-4 sm:px-6 rounded-lg
                  focus:outline-0 border border-light-blue focus:border-white"
                required
              />
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                maxLength={35}
                placeholder="Your email here"
                className="relative text-river-blue bg-light-blue outline-0.5 w-full h-[60px] px-4 sm:px-6 rounded-lg
                  focus:outline-0 border border-light-blue focus:border-white"
                required
              />
              <button
                type="submit"
                disabled={submitting}
                className="button-gradient disabled:!cursor-not-allowed md:px-[47px] md:py-[21px] justify-center items-center gap-2.5 inline-flex text-white text-base !font-bold leading-[14.40px] py-[22px] !px-3 sm:!px-[20px] sm:!py-4 text-md rounded-[7px] w-full"
              >
                {submitting ? "Submitting…" : "Get Early Access"}
              </button>
            </form>

            {error && (
              <p className="mt-3 text-sm text-center text-red-600">{error}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default LaunchingSoon;
