import React, { useEffect, useState } from 'react';
import { useHistory } from 'umi';

function IndexPage() {

  const [count, setCount] = useState(0)
  const history = useHistory();

  const toPageA=()=>{
    history.push('/a');
  }


  const filePath = `http://www.hunanjz.com/img/in5.png`
  function drawImg() {
    const img = document.querySelector('#Img');

    img.onload = () => {
     
    };
    img.onerror = (err) => {
      let xmlHttp;
      if (window.ActiveXObject) {
        xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
      } else if (window.XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();
      }
      debugger
      xmlHttp.open('Get', filePath, false);
      xmlHttp.send();
      if (xmlHttp.status === 404) {
        console.log('文件正在上传，请稍后再试！');
      } else {
        console.log('文件预览异常，请下载后查看！');
      }
    };
    debugger
    img.src = filePath;
  }

  useEffect(() => {
    drawImg()
  }, [])

  return (
    <div>
      <h1>Page c</h1>
      <div>
        <p>count: {count}</p>
        <button onClick={() => setCount(count + 1)}>add</button>
        <button onClick={toPageA}>(history.push)go to page a</button>

        <button onClick={()=> { window.location.href = `/a`}}>(window.location.href)go to page a</button>
      </div>
      
      <img src="/images/steve.jpg" />
      <img src="" alt="" id="Img" />
    </div>
  );
}


export default IndexPage
