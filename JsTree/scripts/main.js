const json = {
  services: [
    {
      id: 1,
      head: null,
      name: "Проф.осмотр",
      node: 0,
      price: 100.0,
      sorthead: 20,
    },
    {
      id: 2,
      head: null,
      name: "Хирургия",
      node: 1,
      price: 0.0,
      sorthead: 10,
    },
    {
      id: 3,
      head: 2,
      name: "Удаление зубов",
      node: 1,
      price: 0.0,
      sorthead: 10,
    },
    {
      id: 4,
      head: 3,
      name: "Удаление зуба",
      node: 1,
      price: 800.0,
      sorthead: 10,
    },
    {
      id: 5,
      head: 3,
      name: "Удаление 8ого зуба",
      node: 0,
      price: 1000.0,
      sorthead: 30,
    },
    {
      id: 6,
      head: 3,
      name: "Удаление осколка зуба",
      node: 0,
      price: 2000.0,
      sorthead: 20,
    },
    {
      id: 7,
      head: 2,
      name: "Хирургические вмешательство",
      node: 1,
      price: 200.0,
      sorthead: 10,
    },
    {
      id: 8,
      head: 2,
      name: "Имплантация зубов",
      node: 1,
      price: 0.0,
      sorthead: 20,
    },
    {
      id: 9,
      head: 8,
      name: "Коронка",
      node: 0,
      price: 3000.0,
      sorthead: 10,
    },
    {
      id: 10,
      head: 8,
      name: "Слепок челюсти",
      node: 0,
      price: 500.0,
      sorthead: 20,
    },
    {
      id: 11,
      head: 7,
      name: "Проверка",
      node: 0,
      price: 3000.0,
      sorthead: 10,
    },
    {
      id: 12,
      head: 4,
      name: "Удаление зуба Доп",
      node: 0,
      price: 800.0,
      sorthead: 10,
    },
  ],
  services2: [
    {
      id: 1,
      head: null,
      name: "Проф.осмотр",
      node: 0,
      price: 100.0,
      sorthead: 20,
    },
    {
      id: 2,
      head: null,
      name: "Хирургия",
      node: 1,
      price: 0.0,
      sorthead: 10,
    },
    {
      id: 3,
      head: 2,
      name: "Удаление зубов",
      node: 1,
      price: 0.0,
      sorthead: 10,
    },
    {
      id: 4,
      head: 3,
      name: "Удаление зуба",
      node: 0,
      price: 800.0,
      sorthead: 10,
    },
    {
      id: 5,
      head: 3,
      name: "Удаление 8ого зуба",
      node: 0,
      price: 1000.0,
      sorthead: 30,
    },
    {
      id: 6,
      head: 3,
      name: "Удаление осколка зуба",
      node: 0,
      price: 2000.0,
      sorthead: 20,
    },
    {
      id: 7,
      head: 2,
      name: "Хирургические вмешательство",
      node: 0,
      price: 200.0,
      sorthead: 10,
    },
    {
      id: 8,
      head: 2,
      name: "Имплантация зубов",
      node: 1,
      price: 0.0,
      sorthead: 20,
    },
    {
      id: 9,
      head: 8,
      name: "Коронка",
      node: 0,
      price: 3000.0,
      sorthead: 10,
    },
    {
      id: 10,
      head: 8,
      name: "Слепок челюсти",
      node: 0,
      price: 500.0,
      sorthead: 20,
    },
    {
      id: 11,
      head: 1,
      name: "Слепок челюсти",
      node: 0,
      price: 500.0,
      sorthead: 20,
    },
  ],
};

// Сортировка по Sorthead

const sortJson = (dataArr) => {
  let dataSort = new Array();
  for (let element of dataArr) {
    if (element.head === null) {
      dataSort.push(element);
    }
  }
  dataSort.sort(function (a, b) {
    return a.sorthead - b.sorthead;
  });

  for (let element of dataSort) {
    let foo = new Array();
    for (let element2 of dataArr) {
      if (element2.head === element.id) {
        foo.push(element2);
      }
    }
    foo.sort(function (a, b) {
      return a.sorthead - b.sorthead;
    });
    for (let el of foo) {
      dataSort.push(el);
    }
  }

  return dataSort;
};

// Вывод на экран одного блока услуг

const displayOneInfo = (dataAll, nameCh) => {
  const sortData = sortJson(dataAll);

  const div = document.getElementById("main_list");

  for (let element of sortData) {
    if (element.head === null) {
      //Добавление корневых элементов
      const p = document.createElement("p");
      p.innerHTML = `<a href="javascript:flipflop('${nameCh}root${element.id}');">${element.name} (${element.price}р)</a>
      <ul id="${nameCh}root${element.id}" style="display: none;"></li>`;
      div.appendChild(p);
    } else if (element.node === 1) {
      let ulRoot = document.getElementById(`${nameCh}root${element.head}`);
      let pFirstNode = document.createElement("p");
      pFirstNode.innerHTML = `<a href="javascript:flipflop('${nameCh}root${element.id}');">${element.name} (${element.price}р)</a>
      <ul id="${nameCh}root${element.id}" style="display: none;"></ul>`;
      ulRoot.appendChild(pFirstNode);
    } else {
      let ulRoot = document.getElementById(`${nameCh}root${element.head}`);
      let li = document.createElement("li");
      li.innerHTML = `${element.name} (${element.price}р)`;
      ulRoot.appendChild(li);
    }
  }
};

// Вывод всей иноформации
const displayInfo = (objJson) => {
  for (let el in objJson) {
    const div = document.getElementById("main_list");
    const names = document.createElement("h2");
    names.innerText = `${el}`;
    div.appendChild(names);
    displayOneInfo(objJson[el], el);
  }
};

// Функция раскрытия информации

function flipflop(id) {
  element = document.getElementById(id);
  if (element)
    element.style.display = element.style.display == "none" ? "" : "none";
}

// Вызов функции отображения

displayInfo(json);
