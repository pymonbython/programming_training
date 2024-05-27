const user = (name = "", age) => {
  let userName = name;
  let userAge = age;

  function showName() {
    console.log(
      `Cześć ${userName}, ${userAge >= 18 ? "Możesz kupić piwo" : "Nie możesz kupić piwa"}`
    );
  }

  return showName;
};

const mieszko = user("Mieszko", 20);

mieszko();

const noName = user();

noName();
