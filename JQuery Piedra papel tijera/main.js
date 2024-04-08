  const victoriesUser = 0;
  const victoriesComputer = 0;

  function play() {
    const options = ["piedra", "papel", "tijera"];
    const electionUser = prompt("Elige piedra, papel o tijera:").toLowerCase();
    const electionComputer = options[Math.floor(Math.random() * options.length)];

    document.write("<h2>Your choice: " + electionUser + "</h2>");
    document.write("<h2>Computer choice: " + electionComputer + "</h2>");

    if (electionUser === electionComputer) {
      document.write("<h2>Draw!</h2>");
    } else if (
      (electionUser === "piedra" && electionComputer === "tijera") ||
      (electionUser === "papel" && electionComputer === "piedra") ||
      (electionUser === "tijera" && electionComputer === "papel")
    ) {
      document.write("<h2>You won!🤟</h2>");
      victoriesUser++;
    } else {
      document.write("<h2>You lost!😔</h2>");
      victoriesComputer++;
    }

    document.write("<h2>User victories: " + victoriesUser + "</h2>");
    document.write("<h2>Computer victories: " + victoriesComputer + "</h2>");
  }

  play();