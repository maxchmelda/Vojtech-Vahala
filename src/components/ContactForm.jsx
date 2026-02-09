import { useState } from "react";
import axios from "axios";
import { FaPaperPlane } from "react-icons/fa6";

const API_URL = `${import.meta.env.VITE_API_URL}/contact`;

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    shootType: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setSuccess(false);
    setError(false);

    try {
      await axios.post(API_URL, form, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      setSuccess(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        shootType: "",
        message: "",
      });
    } catch (err) {
      console.error("Contact form error:", err);
      setError(true);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        z-40 flex flex-col gap-4 sm:gap-6
        justify-center items-start
        bg-[#00171F] text-white font-lexend
        p-6 sm:p-8
        max-sm:mx-auto
        w-[90%]
        max-[1023px]:max-w-[600px]
        min-[1023px]:w-[550px]
      "
    >
      <h2 className="font-lexendMega text-xl sm:text-3xl font-semibold">
        Kontaktní
        <br />
        formulář
      </h2>

      <input
        type="text"
        name="name"
        required
        placeholder="Jméno a příjmení *"
        value={form.name}
        onChange={handleChange}
        className="text-white max-sm:text-sm py-3 border-b border-b-white outline-none placeholder-white focus:placeholder-white/60 w-full bg-transparent"
      />

      <input
        type="email"
        name="email"
        required
        placeholder="E-mail *"
        value={form.email}
        onChange={handleChange}
        className="text-white max-sm:text-sm py-3 border-b border-b-white outline-none placeholder-white focus:placeholder-white/60 w-full bg-transparent"
      />

      <input
        type="text"
        name="phone"
        placeholder="Telefon"
        value={form.phone}
        onChange={handleChange}
        className="text-white max-sm:text-sm py-3 border-b border-b-white outline-none placeholder-white focus:placeholder-white/60 w-full bg-transparent"
      />

      <input
        type="text"
        name="shootType"
        required
        placeholder="Typ focení"
        value={form.shootType}
        onChange={handleChange}
        className="text-white max-sm:text-sm py-3 border-b border-b-white outline-none placeholder-white focus:placeholder-white/60 w-full bg-transparent"
      />

      <textarea
        name="message"
        rows={4}
        placeholder="Poznámka"
        value={form.message}
        onChange={handleChange}
        className="text-white max-sm:text-sm py-3 border-b border-b-white outline-none placeholder-white focus:placeholder-white/60 w-full resize-none bg-transparent"
      />

      {/* zprava o uspechu/chybe */}
      {success && (
        <p className="text-green-400 text-sm">
          Zpráva byla úspěšně odeslána ✅
        </p>
      )}

      {error && (
        <p className="text-red-400 text-sm">Nepodařilo se odeslat zprávu ❌</p>
      )}

      <button
        type="submit"
        disabled={isSending}
        className="
          mt-2 ml-auto flex items-center gap-2
          py-2 px-6 rounded-full
          bg-white text-black
          hover:scale-105 transition-transform duration-300
          disabled:opacity-50 disabled:cursor-not-allowed
          cursor-pointer
        "
      >
        <span className="max-sm:text-sm">
          {isSending ? "Odesílám…" : "Odeslat"}
        </span>
        <FaPaperPlane />
      </button>
    </form>
  );
};

export default ContactForm;
