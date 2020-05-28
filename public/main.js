let n = 1;
getPage.onclick = () => {
  const request = new XMLHttpRequest();
  console.log(12);
  request.open("GET", `/page${n + 1}`);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const array = JSON.parse(request.response);
      array.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item.id;
        xxx.appendChild(li);
      });
      n += 1;
    }
  };
  request.send();
};
getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/5.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.response);
      const object = JSON.parse(request.response);
      myName.textContent = object.name;
    }
  };
  request.send();
};

getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/4.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const dom = request.responseXML;
      const text = dom.getElementsByTagName("warning")[0].textContent;
      console.log(text.trim());
    }
  };
  request.send();
};

getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/3.html");
  request.onload = () => {
    console.log(request.response);
    const div = document.createElement("div");
    div.innerHTML = request.response;
    document.body.appendChild(div);
  };
  request.onerror = () => {};
  request.send();
};

getJS.onclick = () => {
  const request = new XMLHttpRequest();
  //创建请求对象
  request.open("GET", "/2.js");
  //调用它的open方法
  request.onload = () => {
    const script = document.createElement("script");
    //创建一个script标签
    script.innerHTML = request.response;
    //插入script标签里面
    document.body.appendChild(script);
  };
  request.onerror = () => {};
  request.send();
};

getCss.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/style.css");
  request.onload = () => {
    console.log(request.response);
    console.log("request.response");
    //创建style标签
    const style = document.createElement("style");
    //填写style 内容
    style.innerHTML = request.response;
    //将style内容写入head
    document.head.appendChild(style);
  };
  request.onerror = () => {
    console.log("对不起主人！open没能帮您请求成功");
  };
  request.send();
};
