import React from "react";
import Banner from "../banner/Banner";
import Card from "../card/Card";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* <h1>Home components</h1> */}
      <Banner />

      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
          title="Unique stays"
          description="Spaces that are more than just a place to sleep."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          title="Entire homes"
          description="Comfortable private places, with room for friends or family."
        />
      </div>
      <div className="home__section">
        <Card
          src="	https://a0.muscache.com/im/pictures/caeb48c5-2e1e-4df0-9fa4-2f9e1c04e536.jpg?im_w=720"
          title="3 Bedroom Flat in Bournemouth"
          description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
          price="£130/night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/3f6b83e1-694f-4fcf-a522-53746fcdf5fe.jpg?im_w=720"
          title="Penthouse in London"
          description="Enjoy the amazing sights of London with this stunning penthouse"
          price="£350/night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/8b18f90c-4bae-4a1b-80a1-c1fd527450b2.jpg?im_w=720"
          title="1 Bedroom apartment"
          description="Superhost with great amenities and a fabolous shopping complex nearby"
          price="£70/night"
        />
      </div>
      <div className="home__section">
        <Card
          src="	https://a0.muscache.com/im/pictures/caeb48c5-2e1e-4df0-9fa4-2f9e1c04e536.jpg?im_w=720"
          title="3 Bedroom Flat in Bournemouth"
          description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
          price="£130/night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/3f6b83e1-694f-4fcf-a522-53746fcdf5fe.jpg?im_w=720"
          title="Penthouse in London"
          description="Enjoy the amazing sights of London with this stunning penthouse"
          price="£350/night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/8b18f90c-4bae-4a1b-80a1-c1fd527450b2.jpg?im_w=720"
          title="1 Bedroom apartment"
          description="Superhost with great amenities and a fabolous shopping complex nearby"
          price="£70/night"
        />
      </div>
      <div className="home__section">
        <Card
          src="	https://a0.muscache.com/im/pictures/caeb48c5-2e1e-4df0-9fa4-2f9e1c04e536.jpg?im_w=720"
          title="3 Bedroom Flat in Bournemouth"
          description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
          price="£130/night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/3f6b83e1-694f-4fcf-a522-53746fcdf5fe.jpg?im_w=720"
          title="Penthouse in London"
          description="Enjoy the amazing sights of London with this stunning penthouse"
          price="£350/night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/8b18f90c-4bae-4a1b-80a1-c1fd527450b2.jpg?im_w=720"
          title="1 Bedroom apartment"
          description="Superhost with great amenities and a fabolous shopping complex nearby"
          price="£70/night"
        />
      </div>
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
          title="Unique stays"
          description="Spaces that are more than just a place to sleep."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          title="Entire homes"
          description="Comfortable private places, with room for friends or family."
        />
      </div>
    </div>
  );
};

export default Home;
