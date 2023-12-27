export default function addNodeToDom(id, node) {
  const element = document.getElementById(id)
  if (element) {
    element.appendChild(node);
  } else {
    console.error("Element o podanym id nie został znaleziony.");
  }
  }
  