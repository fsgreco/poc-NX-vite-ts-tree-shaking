import { MyProgress } from "@ui";
import { Link } from "react-router-dom";

export const AboutPage = () => (
  <div>
    <MyProgress />
    <Link to="/">Click here to go back to root page.</Link>
  </div>
);

export default AboutPage