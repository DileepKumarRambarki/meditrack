import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Prompt.module.css";
import { FaStethoscope } from "react-icons/fa";
import { FaSyringe } from "react-icons/fa";

export default function Prompt(props) {
  const [prompt, setPrompt] = useState("");
  const [gender, setGender] = useState("Male");

  /* =========================
     Typing Effect Logic
  ========================== */
  const mainText = "Care starts here.";
  const highlightText = "Get started";

  const [typedText, setTypedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < mainText.length) {
      const timer = setTimeout(() => {
        setTypedText((prev) => prev + mainText[charIndex]);
        setCharIndex(charIndex + 1);
      }, 120); // typing speed
      return () => clearTimeout(timer);
    }
  }, [charIndex, mainText]);

  /* =========================
     Submit Handler
  ========================== */
  const handleSubmit = () => {
    if (!prompt.trim()) return;
    console.log("Prompt:", prompt);
    console.log("Gender:", gender);
    props.handlePrompt(prompt,gender);
    setPrompt("");
    setGender("Male")
  };

  return (
    <div className={styles.buildContainer}>
      {/* ===== Heading with Typing Effect ===== */}
      <motion.h1
        className={styles.buildTitle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {typedText}
        {charIndex === mainText.length && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {" "}
            {highlightText}
          </motion.span>
        )}
      </motion.h1>

      {/* ===== Input Card ===== */}
      <motion.div
        className={styles.buildInputBox}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        whileHover={{ boxShadow: "0 0 40px rgba(59,130,246,0.25)" }}
      >
        <input
          type="text"
          placeholder="Describe your symptoms..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          className={styles.input}
        />

        <div className={styles.buildActions}>
          <motion.select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={styles.select}
          >
            <option>Male</option>
            <option>Female</option>
            <option>Guna Saketh</option>
          </motion.select>

          <motion.button
            onClick={handleSubmit}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            initial={{ rotate: -45 }}
            animate={{ rotate: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={styles.button}
          >
            <FaSyringe style={{fontSize:'25px', color:'black'}} />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
