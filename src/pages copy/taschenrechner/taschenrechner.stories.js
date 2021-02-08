import "./taschenrechner.css";
import { taschenRechner } from "./taschenrechner";

export default {
  title: "Pages/Taschenrechner",
  parameters: { layout: "centered" },
};

export const calc = () => taschenRechner();
