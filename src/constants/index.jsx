import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm, FiHelpCircle, FiSettings } from "react-icons/fi";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { ImNewspaper } from "react-icons/im";
import { IoGameControllerSharp } from "react-icons/io5";
import { MdLiveTv, MdLocalFireDepartment } from "react-icons/md";
import { RiFeedbackLine, RiLightbulbLine } from "react-icons/ri";

export const categories = [
  { name: "Accueil", icon: <AiFillHome />, type: "home" },
  {
    name: "Tendances",
    icon: <MdLocalFireDepartment />,
    type: "trending",
  },

  {
    name: "Musique",
    icon: <CgMusicNote />,
    type: "category",
  },
  { name: "Films", icon: <FiFilm />, type: "category" },
  { name: "Direct", icon: <MdLiveTv />, type: "category" },
  {
    name: "Jeux Vidéo",
    icon: <IoGameControllerSharp />,
    type: "category",
  },
  {
    name: "Info",
    icon: <ImNewspaper />,
    type: "category",
  },
  {
    name: "Sport",
    icon: <GiDiamondTrophy />,
    type: "category",
  },
  {
    name: "Cours",
    icon: <RiLightbulbLine />,
    type: "category",
  },
  {
    name: "Beauté & Cosmétigues",
    icon: <GiEclipse />,
    type: "category",
    divider: true,
  },
  { name: "Paramétres", icon: <FiSettings />, type: "menu" },
  {
    name: "Rapporter l'historique",
    icon: <AiOutlineFlag />,
    type: "menu",
  },
  { name: "Aide", icon: <FiHelpCircle />, type: "menu" },
  {
    name: "Retour",
    icon: <RiFeedbackLine />,
    type: "menu",
  },
];
