import Link from "next/link";

import classes from "./button.module.css";

export const Button = ({ href, children, onClick }) => {
  if (href) {
    return (
      <Link href={href}>
        <a className={classes.btn}>{children}</a>
      </Link>
    );
  }

  return (
    <button className={classes.btn} onClick={onClick}>
      {children}
    </button>
  );
};
