import { useEffect, useState } from "react";
import "./styles.css";

export function Sidebar() {
  const [toggleState, setToggleState] = useState(1);
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const handleWithSidebar = () => setIsSidebarActive(!isSidebarActive);

  useEffect(() => {
    setIsSidebarActive(false);
  }, [toggleState]);

  return (
    <div className={isSidebarActive === true ? "nav show-menu" : "nav"}>
      <nav className="nav__content">
        <div
          className={
            isSidebarActive === true ? "nav__toggle rotate-icon" : "nav__toggle"
          }
          onClick={handleWithSidebar}
        >
          <i className="bx bx-chevron-right"></i>
        </div>

        <a href="/#" className="nav__logo">
          <i className="bx bxs-ghost"></i>
          <span className="nav__logo-name">Hércules</span>
        </a>

        <div className="nav__list">
          <a
            href="/#dashboard"
            className={
              toggleState === 1 ? "nav__link active-link" : "nav__link"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="bx bx-grid-alt"></i>
            <span className="nav__name">Dashboard</span>
          </a>

          <a
            href="/#appointments"
            className={
              toggleState === 2 ? "nav__link active-link" : "nav__link"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="bx bx-file"></i>
            <span className="nav__name">Appointments</span>
          </a>

          <a
            href="/#messages"
            className={
              toggleState === 3 ? "nav__link active-link" : "nav__link"
            }
            onClick={() => toggleTab(3)}
          >
            <i className="bx bx-envelope"></i>
            <span className="nav__name">Messages</span>
          </a>

          <a
            href="/#statistic"
            className={
              toggleState === 4 ? "nav__link active-link" : "nav__link"
            }
            onClick={() => toggleTab(4)}
          >
            <i className="bx bx-bar-chart-square"></i>
            <span className="nav__name">Statistic</span>
          </a>

          <a
            href="/#settings"
            className={
              toggleState === 5 ? "nav__link active-link" : "nav__link"
            }
            onClick={() => toggleTab(5)}
          >
            <i className="bx bx-cog"></i>
            <span className="nav__name">Settings</span>
          </a>
        </div>
      </nav>
    </div>
  );
}
