let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(1000)
  .typeString('Estudiante de Ingeniería en Computación y desarrollo de sitios web.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
