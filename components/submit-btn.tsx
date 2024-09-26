import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function FormComponent() {
  const [pending, setPending] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission behavior
    setPending(true); // Set the button to "pending" state

    // Simulate form submission delay (replace this with your actual form submission logic)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setPending(false); // Set the button back to "not pending"
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <button
          type="submit"
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
          disabled={pending} // Disable button while pending
        >
          {pending ? (
            <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
          ) : (
            <>
              Submit{" "}
              <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
            </>
          )}
        </button>
      </form>
    </section>
  );
}
