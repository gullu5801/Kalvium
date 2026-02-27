class Blog {
  constructor(title, detail) {
    this.title = title;
    this.detail = detail;
  }

  addTitle() {
    // 1. Create an <h1> element using document.createElement()
    const titleElement = document.createElement('h1');

    // 2. Set the id of the <h1> to "blog-title"
    titleElement.setAttribute('id', 'blog-title');

    // 3. Set the innerHTML of the <h1> to this.title
    titleElement.innerHTML = this.title;

    // 4. Get the element with id "card-text"
    const cardContainer = document.getElementById('card-text');

    // 5. Append the <h1> element to the "card-text" container
    cardContainer.appendChild(titleElement);
  }

  addDescription() {
    // 1. Create a <p> element using document.createElement()
    const descriptionElement = document.createElement('p');

    // 2. Set the id of the <p> to "blog-description"
    descriptionElement.setAttribute('id', 'blog-description');

    // 3. Set the innerHTML of the <p> to this.detail
    descriptionElement.innerHTML = this.detail;

    // 4. Get the element with id "card-text"
    const cardContainer = document.getElementById('card-text');

    // 5. Append the <p> element to the "card-text" container
    cardContainer.appendChild(descriptionElement);
  }
}

let toggle;

function helperAddPost() {
  if (toggle == 1) {
    document.getElementById('popupContact').style.display = 'inline';
    return (toggle = 0);
  } else {
    document.getElementById('popupContact').style.display = 'none';
    return (toggle = 1);
  }
}