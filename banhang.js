const listItem = [
  {
    nameProduct: "Iphone 13 Pro Max",
    price: 30000000,
    description: "Mo ta san pham 1",
    avatar: "iphone.jpeg",
  },
  {
    nameProduct: "Iphone 14 Pro Max",
    price: 40000000,
    description: "Mo ta san pham 2",
    avatar: "iphone1.jpeg",
  },
  {
    nameProduct: "Iphone 15 Pro Max",
    price: 50000000,
    description: "Mo ta san pham 3",
    avatar: "iphone3.jpeg",
  },
];

const itemEl = document.querySelector(".list-item");

listItem.forEach((el, index) => {
  const h1 = document.createElement("h3");
  h1.innerText = el.nameProduct;

  const img = document.createElement("img");
  img.src = el.avatar;

  const span = document.createElement("span");
  span.innerText = el.price;

  if (el.price < 40000000) {
    span.style.color = "red";
  } else span.style.fontWeight = "bold";

  const p = document.createElement("p");
  p.innerText = el.description;

  const div = document.createElement("div");
  div.appendChild(h1);
  div.appendChild(img);
  div.appendChild(span);
  div.appendChild(p);

  itemEl.appendChild(div);
});
