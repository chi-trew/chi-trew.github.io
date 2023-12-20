import { Email } from "@material-ui/icons";
import { ReactElement } from "react";
import "./styles.scss";

export default function Footer({ contact }: { contact: string }): ReactElement {
  return (
    <footer className="footer">
      If you have any questions, please contact us at{" "}
      <Email className="icon" fontSize="small" color="primary" />{" "}
      <a href={`mailto:${contact}`}>{contact}</a>
    </footer>
  );
}
