const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers

let reversedTeachers = [];
for (let i = teachers.length - 1; i >= 0; i--) {
  reversedTeachers = teachers[i];
  console.log(reversedTeachers);
}



// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];
for (let i = 0; i < teachers.length; i++) {
  const CurrentName = teachers[i];
  if (CurrentName.length >= 5) {
    longNames.push(CurrentName);
  }

}

console.log(longNames);


// 3. Rimuovi 'Ed' dall'array teachers
teachers.splice(1, 1);
console.log(teachers);
// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
let isFabioPresent = false;
for (let i = 0; i < teachers.length; i++) {

  const CurrentFabio = teachers[i];
  if (CurrentFabio === "Fabio") {
    console.log("Trovato Fabio");
    isFabioPresent = true;

  }
}
console.log(isFabioPresent);
/**
 * const isFabioPresent = teachers.includes("Fabio");
 * console.log(isFabioPresent);
 */

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = teachers.join(",");
console.log(teachersString);

/**
 * const teachersString="";
 * 
 * for(let i =0;i<teachers.length;i++) {
 * const curTeacher = teachers[i];
 * teachersString=teachersString + ", "+curTeacher;
 * }
 * console.log(teachersString);
 */