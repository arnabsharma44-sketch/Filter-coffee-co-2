import Hero     from '../components/Hero';
import Ticker   from '../components/Ticker';
import Work     from '../components/Work';

import About    from '../components/About';
import Team     from '../components/Team';
import Contact  from '../components/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Ticker />
      <Work />
      <About />
      <Team />
      <Contact />
    </>
  );
}
