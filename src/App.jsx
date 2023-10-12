import "./App.css";
import one from "./assets/img/1.png";
import two from "./assets/img/2.png";
import three from "./assets/img/3.png";

function App() {
  return (
    <div className="wrapper">
      <header>
        <nav>
          <a href="">Home</a>
          <a href="">Articles</a>
          <h1>
            <div className="h1-one">Express</div>
            <div className="h1-two">Yourself</div>
          </h1>
          <a href="">Guides</a>
          <a href="">Contact</a>
        </nav>
      </header>
      <main>
        <div className="small">
          <h2>A Note About Style</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
            maiores voluptas, animi nostrum atque, molestias delectus
            voluptatibus placeat, quaerat quo repellendus voluptatem vel esse
            qui adipisci expedita laudantium non aspernatur.
          </p>
          <a href="">Read More</a>
        </div>
        <img src={one} alt="skeleton shirt" className="large" />
        <div className="small">
          <h2>A Note About Style</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
            maiores voluptas, animi nostrum atque, molestias delectus
            voluptatibus placeat, quaerat quo repellendus voluptatem vel esse
            qui adipisci expedita laudantium non aspernatur.
          </p>
          <a href="">Read More</a>
        </div>
        <img src={two} alt="fancy hat" className="large" />
        <img src={three} alt="man" className="large" />
        <div className="large">
          <h2>A Note About Style</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
            maiores voluptas, animi nostrum atque, molestias delectus
            voluptatibus placeat, quaerat quo repellendus voluptatem vel esse
            qui adipisci expedita laudantium non aspernatur.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
            maiores voluptas, animi nostrum atque, molestias delectus
            voluptatibus placeat, quaerat quo repellendus voluptatem vel esse
            qui adipisci expedita laudantium non aspernatur.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
            maiores voluptas, animi nostrum atque, molestias delectus
            voluptatibus placeat, quaerat quo repellendus voluptatem vel esse
            qui adipisci expedita laudantium non aspernatur.
          </p>
          <a href="">Read More</a>
        </div>
        <img src={one} alt="skeleton shirt" className="large" />
        <div className="small">
          <h2>A Note About Style</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
            maiores voluptas, animi nostrum atque, molestias delectus
            voluptatibus placeat, quaerat quo repellendus voluptatem vel esse
            qui adipisci expedita laudantium non aspernatur.
          </p>
          <a href="">Read More</a>
        </div>
        <div className="small">
          <h2>A Note About Style</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
            maiores voluptas, animi nostrum atque, molestias delectus
            voluptatibus placeat, quaerat quo repellendus voluptatem vel esse
            qui adipisci expedita laudantium non aspernatur.
          </p>
          <a href="">Read More</a>
        </div>
      </main>
    </div>
  );
}

export default App;
