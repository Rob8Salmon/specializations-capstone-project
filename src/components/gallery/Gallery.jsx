import React, { useState } from "react";
import "./gallery.css";
import CloseIcon from '@mui/icons-material/Close';

import img1 from "../../photos/img1.jpg";
import img2 from "../../photos/img2.jpg";
import img3 from "../../photos/img3.jpg";
import img4 from "../../photos/img4.jpg";
import img5 from "../../photos/img5.jpg";
import img6 from "../../photos/img6.jpg";
import img7 from "../../photos/img7.jpg";
import img8 from "../../photos/img8.jpg";
import img9 from "../../photos/img9.jpg";
import img10 from "../../photos/img10.jpg";
import img11 from "../../photos/img11.jpg";
import img12 from "../../photos/img12.jpg";
import img13 from "../../photos/img13.jpg";
import img14 from "../../photos/img14.jpg";
import img15 from "../../photos/img15.jpg";
import img16 from "../../photos/img16.jpg";
import img17 from "../../photos/img17.jpg";
import img18 from "../../photos/img18.jpg";
import img19 from "../../photos/img19.jpg";
import img20 from "../../photos/img20.jpg";
import img21 from "../../photos/img21.jpg";

const Gallery = () => {
  let data = [
    {
      id: 1,
      imgSrc: `${img1}`,
    },
    {
      id: 2,
      imgSrc: `${img2}`,
    },
    {
      id: 3,
      imgSrc: `${img3}`,
    },
    {
      id: 4,
      imgSrc: `${img4}`,
    },
    {
      id: 5,
      imgSrc: `${img5}`,
    },
    {
      id: 6,
      imgSrc: `${img6}`,
    },
    {
      id: 7,
      imgSrc: `${img7}`,
    },
    {
      id: 8,
      imgSrc: `${img8}`,
    },
    {
      id: 9,
      imgSrc: `${img9}`,
    },
    {
      id: 10,
      imgSrc: `${img10}`,
    },
    {
      id: 11,
      imgSrc: `${img11}`,
    },
    {
      id: 12,
      imgSrc: `${img12}`,
    },
    {
      id: 13,
      imgSrc: `${img13}`,
    },
    {
      id: 14,
      imgSrc: `${img14}`,
    },
    {
      id: 15,
      imgSrc: `${img15}`,
    },
    {
      id: 16,
      imgSrc: `${img16}`,
    },
    {
      id: 17,
      imgSrc: `${img17}`,
    },
    {
      id: 18,
      imgSrc: `${img18}`,
    },
    {
      id: 19,
      imgSrc: `${img19}`,
    },
    {
      id: 20,
      imgSrc: `${img20}`,
    },
    {
      id: 21,
      imgSrc: `${img21}`,
    },
  ];
  const [model, setModel] = useState(true);
  const [tempimgSrc, setTempimgSrc] = useState("");

  const getImg = (imgSrc) => {
    setTempimgSrc(imgSrc);
    setModel(true);
  };

  return (
    <main>

   
    {model ? <div className="model open">

    <img src={tempimgSrc} />
    <CloseIcon onClick={()=>setModel(false)}/>
    </div>
    : <div className="gallery">
        {data.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImg(item.imgSrc)}
            >
              <img src={item.imgSrc} style={{ width: "100%" }} />
            </div>
          );
        })}
        </div>}
     </main>
  );
};

export default Gallery;
