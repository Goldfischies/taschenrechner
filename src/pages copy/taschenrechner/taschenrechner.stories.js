import "./taschenrechner.css";
import { taschenRechner } from "./taschenrechner";
import { taschenRechner2 } from "./taschenrechner2";

export default {
  title: "Pages/Taschenrechner",
  parameters: { layout: "centered" },
};

export const calc = () => taschenRechner();
export const calc2 = () => taschenRechner2();
