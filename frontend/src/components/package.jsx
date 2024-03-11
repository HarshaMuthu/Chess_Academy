// import React from 'react';

import NavbarL from "./navbarl";

function PricingPage() {
  return (
    <div>
      <div>
        <NavbarL/>
      </div>
      <br></br>
      <style>
      {`
      @import url("https://fonts.googleapis.com/css?family=Poppins:400,600&display=swap");
      *,
      *:before,
      *:after {
        box-sizing: border-box;
      }
      :root {
        --primary-font: "Poppins", sans-serif;
        --margin-x: 1em;
        --accent-1: #6d6ae2;
        --accent-2: #563677;
        --accent-3: #6865ff;
        --black: #212733;
        --pink: #f3659a;
      }

      html,
      body {
        font-family: var(--primary-font);
        color: var(--black);
        line-height: 1.3;
        max-width: 1250px;
        margin: 0 auto;
      }
      .accent-1 {
        color: var(--accent-1);
      }
      .accent-2 {
        color: var(--accent-2);
      }
      ul {
        padding: 0;
      }
      li {
        list-style: none;
      }
      a {
        color: unset;
        text-decoration: unset;
      }
      .nav {
        margin: 0 var(--margin-x);
      }
      .nav__list {
        display: grid;
        grid-auto-flow: column;
        align-items: center;
        justify-content: flex-end;
        grid-gap: 1em;
      }

      .nav__list-item--bordered {
        border: 1px solid var(--accent-1);
        border-radius: 20px;
        color: var(--accent-1);
        padding: 0.5em 1.1em;
      }
      .pricing {
        text-align: center;
        margin: 0 1em;
      }

      .plan-duration {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 0 auto;
        width: 200px;
      }
      .plan-duration__toggle {
        width: 45px;
        height: 25px;
        background: linear-gradient(130deg, var(--pink), #4e93f1);
        border-radius: 16px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        transition: justify-content 0.2s;
      }
      .plan-duration__toggle-ball {
        --size: 18px;
        margin: 0 4px;
        width: var(--size);
        height: var(--size);
        border-radius: 50%;
        background: white;
      }
      .plan-duration__text {
        color: #21273399;
      }

      .plan-duration--active {
        color: var(--black);
        font-weight: bold;
      }

      .plans__list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 1.5em 0;
      }
      .plan__item {
        --radius: 10px;
        border-radius: var(--radius);
        box-shadow: 1px 2px 15px rgba(80, 80, 80, 0.12);
        margin: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      .plan__item--active {
        box-shadow: 0 0 55px rgba(80, 80, 80, 0.25);
        // todo
        height: 350px;
      }
      .plan__title {
        color: var(--accent-1);
        margin-bottom: -0.5em;
      }
      .plan__price {
        font-size: 2.5em;
      }
      .plan__price:before {
        content: "Rs";
        font-size: 1rem;
      }
      .plan__cta-link {
        color: var(--accent-3);
        padding: 1em 5em;
        border-radius: 0 0 var(--radius) var(--radius);
      }

      .plan__cta-link--active {
        background: var(--accent-3);
        color: white;
      }
      .plan__feature-list {
        display: grid;
        grid-row-gap: 0.6em;
        justify-content: space-around;
      }

      .plans__special-offer a {
        color: var(--accent-2);
        text-decoration: underline;
        text-decoration-color: var(--accent-2);
      }
      .currency {
        margin: 2em var(--margin-x);
        display: grid;
        justify-content: flex-end;
        grid-gap: 0.5em;
        grid-auto-flow: column;
        align-items: center;
      }
      .currency__select {
        border-radius: 15px;
        border: none;
        background: #eee;
        font-weight: bold;
        padding: 2px 4px;
      }

      @media only screen and (min-width: 618px) and (max-width: 900px) {
        .plan__item--active {
          order: 1;
        }
      }
      `}
    </style>
      
      <section className="pricing">
        <header className="pricing__header">
          <h1 className="pricing__title">Programs </h1>
          <h5 className="pricing__subtitle">First trial class completely <span className="accent-1">free</span> for all programs</h5>
          {/* <div className="plan-duration">
            <div className="plan-duration__text plan-duration--active">Monthly</div>
            <div className="plan-duration__toggle">
              <div className="plan-duration__toggle-ball"></div>
            </div>
            <div className="plan-duration__text">Yearly</div>
          </div> */}
          <br></br>
        </header>
        <article className="plans">
          <div className="plans__list">
            <article className="plan__item">
              <div className="plan__header">
                <h2 className="plan__title">Chess Champions</h2>
                <br></br>
                <h1 className="plan__price">2000</h1>
              </div>
              <ul className="plan__feature-list">
                <li className="plan__feature-item"><span className="accent-2">Includes 3 classes per week </span></li>
                <li className="plan__feature-item"><span className="accent-2">for advanced learners.</span></li>
                <li className="plan__feature-item">Monday , Wednesday, Friday</li>
                <li className="plan__feature-item">Evening classes from<span className="accent-2"> 6PM-8PM</span></li>
              </ul>
              <a href="#" className="plan__cta-link plan__cta-link--active">Get Started</a>
            </article>
            <article className="plan__item plan__item--active">
              <div className="plan__header">
                <h2 className="plan__title">Grandmaster</h2>
                <br></br>
                <h1 className="plan__price">3000</h1>
              </div>
              <ul className="plan__feature-list">
                <li className="plan__feature-item"><span className="accent-2">Offers 2 classes per week </span></li>
                <li className="plan__feature-item"><span className="accent-2">for a balanced approach.</span></li>
                <li className="plan__feature-item">Saturday Sunday FN</li>
                <li className="plan__feature-item">Timing from<span className="accent-2"> 10AM-12PM</span></li>
              </ul>
              <a href="#" className="plan__cta-link plan__cta-link--active">Get Started</a>
            </article>
            <article className="plan__item plan__item--active">
              <div className="plan__header">
                <h2 className="plan__title">Strategic Knights</h2>
                <br></br>
                <h1 className="plan__price">3500</h1>
              </div>
              <ul className="plan__feature-list">
                <li className="plan__feature-item"><span className="accent-2">Consists of 2 classes per week,</span></li>
                <li className="plan__feature-item"><span className="accent-2">advanced strategy.</span></li>
                <li className="plan__feature-item">Friday AN, Sunday FN</li>
                <li className="plan__feature-item">Classes <span className="accent-2">6PM-8PM & 10AM-12PM</span> </li><br></br>
              </ul>
              <a href="#" className="plan__cta-link plan__cta-link--active">Get Started</a>
            </article>
            <article className="plan__item">
              <div className="plan__header">
                <h2 className="plan__title">Tactical Rooks</h2>
                <br></br>
                <h1 className="plan__price">3000</h1>
              </div>
              <ul className="plan__feature-list">
                <li className="plan__feature-item"><span className="accent-2">Consists of 3 classes per week,</span></li>
                <li className="plan__feature-item"><span className="accent-2"> focus on tactics.</span></li>
                <li className="plan__feature-item">Saturday Sunday FN</li>
                <li className="plan__feature-item">Classes <span className="accent-2">10AM-12PM</span></li>
                {/* <li className="plan__feature-item">All features</li> */}
              </ul>
              <a href="#" className="plan__cta-link plan__cta-link--active">Get Started</a>
            </article>
          </div>
          {/* <div className="plans__special-offer">
            <p><strong>Limited offer: </strong> Save 20% on annual plans. Get the coupon <a href="#">here</a></p>
          </div> */}
        </article>
      </section>
      {/* <footer>
        <div className="currency">
          <span className="currency__text">Currency</span>
          <select className="currency__select">
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
        </div>
      </footer> */}
    </div>
  );
}

export default PricingPage;
