// health/src/App.js
import React from 'react';
import Button from './components/Button';
import Map from './components/Map'; 
import NavigationBar from './components/NavigationBar';

function App() {
  return (

    
    <div className="App">

<       NavigationBar
        logo="logo.png"
        links={[
          { url: '/', text: 'Home' },
          { url: '/about', text: 'About' },
          { url: '/contact', text: 'Contact' },
        ]}
       />

            <Button text="Click me to do nothing" color="blue" size="16px" onClick={() => console.log('Button clicked')} />


            <Map
        title="Primary title"
        subtitle="Subtitle"
        content="Hello there, the angel from my nightmares the shadows of the background of the morgue."
        variant="primary"
      />


      <Map
        title="Secondary title"
        subtitle="Subtitle"
        content="Hello there, the angel from my nightmares the shadows of the background of the morgue."
        variant="secondary"
      />
    </div>
  );
}

export default App;
