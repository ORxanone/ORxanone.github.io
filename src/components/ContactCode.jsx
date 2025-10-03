import styles from "../styles/ContactCode.module.css";

const contactItems = [
  {
    social: "Email",
    link: "orxanracabov@gmail.com",
    href: "mailto:orxanracabov@gmail.com",
  },
  {
    social: "LinkedIn",
    link: "ORkhan Racabov",
    href: "https://www.linkedin.com/in/orxan-racabov/",
  },
  {
    social: "GitHub",
    link: "github.com/ORxanone",
    href: "https://github.com/ORxanone",
  },
  {
    social: "Website",
    link: "Portfolio",
    href: "https://orxanone-github-io.vercel.app/",
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        tag: <a>production</a>
      </p>
      <p className={styles.line}>
        <span>orxan</span>&#58;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;&#8212; <span>socials</span>&#58;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
        </p>
      ))}
    </div>
  );
};

export default ContactCode;
