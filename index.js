const listItem = [
    {
        name: "san pham 1",
        price: 500,
        description: 'Mo ta san pham 1'
    },
    {
        name: "san pham 2",
        price: 500,
        description: 'Mo ta san pham 2'
    },
    {
        name: "san pham 3",
        price: 50,
        description: 'Mo ta san pham 3',
        avatar: '1984.jfif' // Sửa từ "avarta" thành "avatar"
    }
];

const listItemEl = document.getElementById("list-item")

listItem.forEach((el, index) => {
    const h1 = document.createElement('h1');
    h1.innerHTML = el.name;
    const p = document.createElement('p');
    p.innerHTML = el.price;
    const d = document.createElement('p');
    d.innerHTML = el.description;
    const avatar = document.createElement('img');
    avatar.src = el.avatar; // Thiết lập src của thẻ img

    if (el.price === 50) {
        p.style.color = "red";
    }

    const item = document.createElement('div');
    item.appendChild(h1);
    item.appendChild(p);
    item.appendChild(d);
    item.appendChild(avatar);

    listItemEl.appendChild(item);
    
});
