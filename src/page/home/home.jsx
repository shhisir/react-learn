

import React from "react";
import image from "../../assets/hero.png";

const Card = (props) => {
  const { data } = props;
  return (
    <div>
  
      {data ? (
        <div className="w-[20vw]">
          <div>
            <img src={`${data.imageLink}`} alt="" />
          </div>
          <div className="w-[20vw]">
            <p>title:{data.title}</p>
            <p>Descrition:{data.discription}</p>
          </div>
        </div>
        
      ) : (
        <div> no data</div>
      )}
    </div>
  );


};
function Home() {
  return (
    <div className="flex gap-10">
      <Card
        data={{
          title: "card1",
          discription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt delectus dolores sit, libero praesentium tempora consectetur ab optio iusto at quia porro hic totam repellat? Excepturi rerum fuga nesciunt aut.",
          imageLink: image,
        }}
      />

      <Card
       data={{
          title: "card2",
          discription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt delectus dolores sit, libero praesentium tempora consectetur ab optio iusto at quia porro hic totam repellat? Excepturi rerum fuga nesciunt aut.",
          imageLink: image,
        }} />
    </div>
  );
}

export default Home;