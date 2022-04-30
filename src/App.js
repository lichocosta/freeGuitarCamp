import Testimonio from './components/Testimonio.js';
import Navbar from './components/Navbar.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar 
        imagelupa='lupa'
        imagetitle='guitar'
        imagecorner='corner'
      />
      <div className='main-container'>
        <h1>Esto es lo que usaban mis ídolos freeGuitarCamp:</h1>
      </div>  
      <Testimonio 
        name='Dann Huff'
        country='EEUU'
        image='dh'
        charge='Guitarrista'
        band='Giant'
        description='Dann Huff nacido el (15 de noviembre de 1960) es un músico estadounidense, músico de sesión, cantante, compositor y productor.  Ha tocado la guitarra en álbumes para Keith Urban, Reba McEntire, Suzy Bogguss, Kathy Mattea, Faith Hill, Roger Hodgson, Martina McBride, Trisha Yearwood, Steven Curtis Chapman, Lonestar, George Benson, en el debut del álbum de Whitney Houston Whitney Houston (álbum), Barbra Streisand, Kenny Rogers y mucho más.'
      />
      <Testimonio 
        name='Reb Beach'
        country='EEUU'
        image='rb'
        charge='Guitarrista'
        band='Winger'
        description='Richard Earl "Reb" Beach, Jr. (31 de agosto de 1963 en Pittsburgh) es un músico estadounidense, reconocido principalmente por su trabajo en las bandas de hard rock Whitesnake, Winger y Dokken. Beach ha sido miembro de las bandas Winger, Dokken y Whitesnake. También hizo parte de la banda de Alice Cooper y participó con muchas otras agrupaciones como músico de sesión.'
      />
      <Testimonio 
        name='George Lynch'
        country='EEUU'
        image='gl'
        charge='Guitarrista'
        band='Dokken'
        description='George Lynch (28 de septiembre de 1954 en Spokane, Washington) es un guitarrista de Heavy Metal estadounidense, integrante de las bandas Dokken, Lynch Mob, Souls Of We, T&N y KXM, entre otros proyectos. Sus principales influencias han sido Jimi Hendrix, Randy Rhoads, Michael Schenker, Jeff Beck, Eddie Van Halen, Allan Holdsworth, Jan Akkerman, Christopher Parkening, Al Di Meola, Roy Buchanan, Albert King, Frank Marino, Muddy Waters, Yngwie Malmsteen entre otros.'
      />
    </div>
  );
}

export default App;
