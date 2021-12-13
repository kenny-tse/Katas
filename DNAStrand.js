// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

function DNAStrand(dna) {

  let dnaString = "";

  for (const letter of dna) {
    if (letter === "A") {
      dnaString = dnaString + "T";
    }

    if (letter === "T") {
      dnaString = dnaString + "A";
    }

    if (letter === "C") {
      dnaString = dnaString + "G";
    }

    if (letter === "G") {
      dnaString = dnaString + "C";
    }
  }

  return dnaString;

}