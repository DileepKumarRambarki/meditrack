import { useEffect, useState } from "react";
import Prompt from "./Prompt.jsx";
import styles from "./Symptom.module.css";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
// 🔥 Auto import all images from organs folder (Vite)
const organImages = import.meta.glob(
  "../assets/organs/*.{png,jpg,jpeg,svg}",
  { eager: true }
);

// Convert images to usable array
const organs = Object.entries(organImages).map(([path, file], index) => {
  const fileName = path.split("/").pop().split(".")[0];

  return {
    id: index,
    label: fileName.charAt(0).toUpperCase() + fileName.slice(1),
    icon: file.default,
  };
});

const Symptom = () => {
  const [prompt, setPrompt] = useState("");
  const [gender, setGender] = useState("Male");
  const [specialist, setSpecialist] = useState("");
  const [selected, setSelected] = useState(null);
  const specialization={
    "Dermatologist": "Dermatology",
    "Allergist": "Dermatology",
    "Gastroenterologist": "Gastroenterology",
    "Hepatologist": "Gastroenterology",
    "Osteopathic": "Orthopedics",
    "Endocrinologist": "General Medicine",
    "Pulmonologist": "Pulmonology",
    "Cardiologist": "Cardiology",
    "Neurologist": "Neurology",
    "Internal Medcine": "General Medicine",
    "Pediatrician": "Pediatrics",
    "Common Cold": "General Medicine",
    "Phlebologist": "Neurology",
    "Osteoarthristis": "Orthopedics",
    "Rheumatologists": "Orthopedics",
    "Otolaryngologist": "ENT",
    "Dermatologists": "Dermatology",
    "Gynecologist": "Gynecology"
  }
  
  const navigate=useNavigate();
  const handlePrompt = (msg, gen) => {
    setPrompt(msg);
    setGender(gen);
  };

  // 🔄 Fetch specialist based on prompt
  useEffect(() => {
    const fetchSpecialist = async () => {
      try {
        const resp = await axios.post(
          "http://localhost:3000/getSpecialist",
          { prompt }
        );
        console.log(specialization[resp.data.specialist]);
        setSpecialist(specialization[resp.data.specialist]);
        setSelected(specialization[resp.data.specialist]);
      } catch (error) {
        console.error("Error fetching specialist:", error);
      }
    };

    if (prompt) {
      fetchSpecialist();
    }
  }, [prompt]);
  useEffect(()=>{
    if(!selected) return;
    const timer=setTimeout(()=>{
      // console.log('specialist:',specialist);
      navigate("/nearbyhos",{state:{specialist:specialist}});
    },3000);
    return ()=>clearTimeout(timer);
  },[selected,navigate]);
  return (
    <>
      <Prompt handlePrompt={handlePrompt} />

      <div className={styles.buttonContainer}>
        {organs.map(item => (
          <OrganButton
            key={item.id}
            icon={item.icon}
            label={item.label}
            isSelected={selected === item.label}
            hasSelection={selected !== null}
            onClick={() =>{ setSelected(item.label); setSpecialist(item.label)}}
          />
        ))}
      </div>
    </>
  );
};

const OrganButton = ({
  icon,
  label,
  isSelected,
  hasSelection,
  onClick,
}) => {
  return (
    <button
      className={`${styles["c-button"]} 
        ${isSelected ? styles.active : ""} `}
      onClick={onClick}
    >
      <span className={styles["c-main"]}>
        <span className={styles["c-ico"]}>
          <span className={styles["c-blur"]}></span>
          <span className={styles["ico-text"]}>
            <img src={icon} alt={label} width={40} height={40} />
          </span>
        </span>
        <span className={styles["c-text"]}>{label}</span>
      </span>
    </button>
  );
};

export default Symptom;
