const removeButtons = document.querySelectorAll("li button");
function removeElement(e) {
  // this.parentNode.remove();
  // this.parentNode.style.textDecoration = "line-through";
  // this.remove();
  const index = this.dataset.key;

  console.log(index);

  document.querySelector(`li[data-key="${index}"]`).remove();
}
removeButtons.forEach((removeButton) =>
  removeButton.addEventListener("click", removeElement)
);
