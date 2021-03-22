

function LeftNavMenuItem(props) {
  return (
    <li className="nav-item">
      <a className={"nav-link "+props.params.menuClasses} key={props.params.key} href="index.html" role="button">
        <div className="d-flex align-items-center"><span className="nav-link-icon">
          {props.params.menuIcon()}
          </span><span className="nav-link-text ps-1">{props.params.menuLabel}</span>
        </div>
      </a>
    </li>
  );
}

export default LeftNavMenuItem;
