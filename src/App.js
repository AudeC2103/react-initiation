import React from 'react';
import Contact from './components/Contact';
import ProfileImage1 from './assets/1.png';
import ProfileImage2 from './assets/2.png';
import ProfileImage3 from './assets/3.png';
import ProfileImage4 from './assets/4.png';

const App = () => {
  return (
    <div>
      <Contact name="Esther" profileImage= {ProfileImage1} isOnline={true} />
      <Contact name="Aude" profileImage= {ProfileImage2} isOnline={false} />
      <Contact name="Alexandre" profileImage= {ProfileImage3} isOnline={true} />
      <Contact name="Patrick" profileImage= {ProfileImage4} isOnline={true} />
    </div>
  );
};

export default App;
