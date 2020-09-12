import React from "react";
import diagram from "../assets/images/pareto.png";
import wall from "../assets/images/wall.jpg";
import screenshot from "../assets/images/screenshot.png";
import simulation from "../assets/images/simulation.gif";

export default function Article() {
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

  return (
    <div>
      <section className="article">
        <section className="coverphoto">
          <img src={wall} alt="wall"></img>
        </section>

        <section className="title" style={titlestyle}>
          <h1>Why the rich get richer?</h1>
        </section>

        <section className="intro" style={introstyle}>
          <p>
            The <b>Pareto principle</b> (also known as the <b>80/20 rule</b>,
            the <b>law of the vital few</b>, or the{" "}
            <b>principle of factor sparsity</b>) states that, for many events,
            roughly 80% of the effects come from 20% of the causes.
          </p>
        </section>

        <section>
          <img src={diagram} alt="Diagram"></img>
        </section>

        <section className="paragraph" style={paragraphstyle}>
          <p>
            Italian economist Vilfredo Pareto, who noted the 80/20 connection in
            1896. In his first work, Cours d'économie politique, Pareto showed
            that approximately 80% of the land in Italy was owned by 20% of the
            population.
          </p>
        </section>

        <section className="paragraph" style={paragraphstyle}>
          <p>
            I was looking for some sort of mathematical simulation for this
            distribution and came across a very nice experiment. So
          </p>
        </section>

        <section className="focusparagraph" style={focusparagraphstyle}>
          <p>I wrote a python script to visualize </p>
          <p>this law</p>
        </section>

        <section className="paragraph" style={paragraphstyle}>
          <p>
            There are 10 people in this simulation. Each starts out with 10
            dollar. And each will flip a coin. If it's head he will give up 1
            dollar to the person he's trading with, and if tail he will get 1
            dollar from that person. Everyone gets his turn to trade with
            everyone else.If anyone ends up with zero dollar he will be out of
            the trading.
          </p>
        </section>

        <section className="codesection" style={codesectionstyle}>
          def pareto(): for x in range(0, 9): for y in range(0, 9): if x == y:
          continue flip = random.randint(0, 1) if wealth[x] == 0 or wealth[y] ==
          0: continue if flip == 1: wealth[x] += 1 wealth[y] -= 1
          wealth.sort(reverse=True)
        </section>

        <section className="paragraph" style={paragraphstyle}>
          Initially someone wins and someone loses and the money distribution
          curve is almost Normal distribution curve.
        </section>

        <section className="images">
          <img src={screenshot} alt="normal curve"></img>
        </section>

        <section className="paragraph" style={paragraphstyle}>
          <p>
            But as time goes by someone loses more and someone wins more. And
            people who won more they got more chances of staying in the game
            than those who got less money in their pocket. That's why their
            chances help them to earn even more. And people who drops to zero
            drops their probability of earning money to zero too.
          </p>
        </section>

        <section className="images">
          <img src={simulation} alt="simulation"></img>
        </section>

        <section className="paragraph">
          <p>
            This simulation only used the probability factor of coin flip. But
            in real life there are many probability factors that add up in 80/20
            rule. Which makes the distribution curve even more accurate to the
            law. It's not always exactly maintaining 80/20 distribution. But
            it's a benchmark. It follows the{" "}
            <b>Law of Economic Productivity.</b>.
          </p>
        </section>

        <section className="focusparagraph" style={focusparagraphstyle}>
          <p>To those who have everything; more </p>
          <p>will be given from those who have</p>
          <p>nothing; everything will be taken</p>
        </section>

        <section className="paragraph" style={paragraphstyle}>
          <p>
            I was amazed to see that even a simple coin flip can make a big
            difference over time. So whatever you do in your life,
          </p>
        </section>

        <section className="focusparagraph" style={focusparagraphstyle}>
          <p>if you are a beginner, your primary </p>
          <p>goal is to not drop to zero.</p>
        </section>

        <section className="footer" style={footerstyle}>
          <footer>
            <p>
              Author: Shahir Abdullah<br></br>
              A.I Engineer<br></br>
              <a href="http://shahir-abdullah.glitch.me/">website</a>
            </p>
          </footer>
        </section>

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
    </div>
  );
}
