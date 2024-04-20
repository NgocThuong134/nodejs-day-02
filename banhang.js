const listItem = [
  {
    nameProduct: "Iphone 13 Pro Max",
    price: 12000000,
    disprice: 21,
    description: "Mo ta san pham 1",
    avatar: "iphone.jpeg",
  },
  {
    nameProduct: "Iphone 14 Pro Max",
    price: 13500000,
    disprice: 12,
    description: "Mo ta san pham 2",
    avatar: "iphone1.jpeg",
  },
  {
    nameProduct: "Iphone 15 Pro Max",
    price: 21000000,
    disprice: 15,
    description: "Mo ta san pham 3",
    avatar: "iphone3.jpeg",
  },
  {
    nameProduct: "Iphone 10 Pro Max",
    price: 8000000,
    disprice: 17,
    description: "Mo ta san pham 4",
    avatar: "iphone2.jpeg",
  },
  {
    nameProduct: "Samsung A50",
    price: 9250000,
    disprice: 16,
    description: "Mo ta san pham 5",
    avatar: "samsung.jpeg",
  },
  {
    nameProduct: "Samsung S24 Ultra",
    price: 24870000,
    disprice: 7,
    description: "Mo ta san pham 6",
    avatar: "samsung1.jpeg",
  },
  {
    nameProduct: "Iphone 11 Promax",
    price: 14680000,
    disprice: 11,
    description: "Mo ta san pham 7",
    avatar: "iphone4.jpeg",
  },
  {
    nameProduct: "OPPO A78",
    price: 9460000,
    disprice: 17,
    description: "Mo ta san pham 8",
    avatar: "oppo.jpeg",
  },
];

const itemEl = document.querySelector(".list-item");
itemEl.style.display = "grid";
itemEl.style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
itemEl.style.gridGap = "20px";

listItem.forEach((el, index) => {
  const img = document.createElement("img");
  img.src = el.avatar;
  img.style.width = "300px";
  img.style.height = "300px";
  img.style.borderRadius = "10px";
  img.style.margin = "0 auto";

  const h1 = document.createElement("h3");
  h1.innerText = el.nameProduct;

  const price = el.price;
  const discount = el.price * (el.disprice / 100);
  const discountedPrice = price - discount;
  const priceContainer = document.createElement("div");
  priceContainer.style.display = "flex";
  priceContainer.style.alignItems = "center";
  priceContainer.style.gap = "5px";
  const originalPrice = document.createElement("span");
  originalPrice.innerText = price.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  originalPrice.style.textDecoration = "line-through";
  originalPrice.style.color = "gray";
  originalPrice.style.fontSize = "13px";
  priceContainer.appendChild(originalPrice);

  const discountedPriceSpan = document.createElement("span");
  discountedPriceSpan.innerText = discountedPrice.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  discountedPriceSpan.style.fontSize = "20px";
  discountedPriceSpan.style.fontWeight = "bold";
  discountedPriceSpan.style.color = "red";
  priceContainer.appendChild(discountedPriceSpan);

  const discountPercent = document.createElement("span");
  discountPercent.innerHTML = `<i class='bx bx-down-arrow-alt'></i>${el.disprice}%`;
  discountPercent.style.backgroundColor = "red";
  discountPercent.style.color = "white";
  discountPercent.style.padding = "2px 3px";
  discountPercent.style.borderRadius = "50%";
  discountPercent.style.fontWeight = "bold";
  discountPercent.style.fontSize = "14px";
  priceContainer.appendChild(discountPercent);

  const p = document.createElement("p");
  p.innerText = el.description;

  const div = document.createElement("div");
  div.style.backgroundColor = "#f5f5f5";
  div.style.display = "flex";
  div.style.flexDirection = "column";
  div.style.padding = "10px 15px";
  div.style.borderRadius = "10px";
  div.style.transition = "transform 0.3s ease";
  div.appendChild(img);
  div.appendChild(h1);
  div.appendChild(priceContainer);
  div.appendChild(p);

  const icon = document.createElement("i");
  icon.className = "bx bx-cart-add";
  icon.style.position = "absolute";
  icon.style.right = "25px";
  icon.style.bottom = "20px";
  icon.style.fontSize = "30px";
  icon.style.transition = "transform 0.3s ease";
  icon.style.color = "orange";
  icon.style.cursor = "pointer";
  icon.style.padding = "5px";
  icon.style.backgroundColor = "white";
  icon.style.borderRadius = "50%";
  icon.style.boxShadow = "0 0 5px rgba(0, 0, 0, 0.3)";
  div.style.position = "relative";
  div.appendChild(icon);

  itemEl.appendChild(div);

  icon.addEventListener("mouseover", () => {
    icon.style.color = "red";
    icon.style.transform = "scale(1.4)";
  });

  icon.addEventListener("mouseout", () => {
    icon.style.color = "orange";
    icon.style.transform = "none";
  });

  icon.addEventListener("click", () => {
    alert("Đã thêm vào giỏ hàng!");
  });
  div.addEventListener("mouseover", () => {
    div.style.boxShadow = "0 0 5px rgba(0, 0, 0, 0.3)";
    div.style.transform = "scale(1.03)";
  });

  div.addEventListener("mouseout", () => {
    div.style.boxShadow = "none";
    div.style.transform = "none";
  });
});
