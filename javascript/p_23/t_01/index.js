document.querySelector("#form").addEventListener("submit", getFace);

async function getFace(e) {
  e.preventDefault();
  const gender = document.querySelector("#gender").value;
  const age = document.querySelector("#age").value;
  const ethnicity = document.querySelector("#ethnicity").value;
  const url = `https://face-studio.p.rapidapi.com/generate?gender=${gender}&age=${age}&ethnicity=${ethnicity}`;

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "8aea282870msha5e608f22912293p17b9d7jsna4260f7a1f59",
      "x-rapidapi-host": "face-studio.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.blob();
    const image = URL.createObjectURL(result);
    const imageDOM = document.createElement("img");
    imageDOM.src = image;
    document.body.appendChild(imageDOM);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
