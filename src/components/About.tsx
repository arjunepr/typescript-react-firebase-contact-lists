import * as React from 'react';

export default () => (
  <div className="about content">
    <header>
      <h3>About Me (&amp; This App)</h3>
      <hr />
    </header>
    <main>
      <p>
        Greetings. My name is Arjun Raju Pillai, and I'm the author of this tiny app. I'm a 20 year old Javascript developer, living in India. I'm still learning, but I'm getting better each day.
      </p>

      <p>
        Thanks for taking the time to view my app. This was built mainly for a learning experience.. and to start filling up my portfolio.
        I've made use of React, React-Router, Typescript, Webpack, and Stylus in this project. I've used NeDB for the front end database.
        Feel free to use the source code as you see fit.
      </p>

      <p>
        Want to check out my portfolio and/or contact me? Click <a href="https://arjunepr.github.io" target="_blank">here</a>.
      </p>
    </main>
  </div>
);