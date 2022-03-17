export const TheHeaderListItem = ({ classes, label }) => {
  return (
    <li>
      <a key={label} className={classes} href="/">
        {label}
      </a>
    </li>
  );
};
