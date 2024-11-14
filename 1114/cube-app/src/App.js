import './App.css';
import Face1 from './components/Face1';
import Face2 from './components/Face2';
import Face3 from './components/Face3';
import Face4 from './components/Face4';
import Face5 from './components/Face5';
import Face6 from './components/Face6';
import Face7 from './components/Face7';
import Face8 from './components/Face8';

function App() {
  return (
    <main className="wrap">
      <video src="img/bg.mp4" loop autoplay muted></video>
      <section id="circle">
        <Face1/>
        <Face2/>
        <Face3/>
        <Face4/>
        <Face5/>
        <Face6/>
        <Face7/>
        <Face8/>
      </section>
    </main>
  );
}

export default App;
