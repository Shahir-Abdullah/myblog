import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import diagram from "../assets/images/pareto.png";
import wall from "../assets/images/wall.jpg";
import screenshot from "../assets/images/screenshot.png";
import simulation from "../assets/images/simulation.gif";
import article from "../components/Article"

export default function Dashboard({ dashboardName, axios }) {
  const config = useSelector(({ DashboardReducer }) => DashboardReducer.config);
  const dispatch = useDispatch();
  let [resize, setResize] = useState(false);
  let [timer, setTimer] = useState(0);

  const titlestyle = {
    fontSize: 40,
  };
  const introstyle = {
    backgroundColor: "white",
    fontSize: 20,
    fontFamily: "DejaVu Serif",
  };
  const paragraphstyle = {
    backgroundColor: "white",
    fontSize: 20,
    fontFamily: "DejaVu Serif",
  };
  const focusparagraphstyle = {
    backgroundColor: "#F5F5DC",
    fontSize: 26,
    fontFamily: "DejaVu Serif",
    fontStyle: "Italic",
  };
  const codesectionstyle = {
    backgroundColor: "#A9A9A9",
    fontSize: 20,
    fontFamily: "DejaVu Serif",
  };
  const footerstyle = {
    backgroundColor: "#FFFAFA",
    fontSize: 15,
    fontFamily: "Monospace",
  };

  const triggerResize = useCallback(() => {
    if (timer) {
      window.cancelAnimationFrame(timer);
    }
    // Debounce the window resize event
    setTimer(
      window.requestAnimationFrame(function () {
        setResize(true);
        setTimeout(() => {
          setResize(false);
        }, 0);
      })
    );
  }, [setResize, timer]);

  useEffect(() => {
    window.addEventListener("resize", triggerResize, { passive: true });
    axios.get(`/api/dashboard/${dashboardName}`).then(({ data }) => {
      dispatch({
        type: "SET_CONFIG",
        payload: data,
      });

      const getData = ({ endpoint }, index) => {
        axios.get(endpoint).then(({ data }) => {
          dispatch({
            type: "SET_DATA",
            payload: [index, data],
          });
        });
      };

      data.forEach((conf, index) => {
        getData(conf, index);
      });
    });
    return () => {
      window.removeEventListener("resize", triggerResize, { passive: true });
    };
    // eslint-disable-next-line
  }, []);

  return (
    <section className="dashboard">
      <article></article>

      {/*

        {config &&
        config.map((conf, idx) => {
          const component = require(`../components/${conf.type}.jsx`).default;
          return conf.data
            ? React.createElement(component, { config: conf, key: idx, resize })
            : "";
        })}

      */}
    </section>
  );
}
