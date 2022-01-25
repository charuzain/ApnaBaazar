import React from 'react';
import Header from './Header';
import Footer from './Footer';
import "../styles/home.css"
import FeaturedProducts from './FeaturedProducts';

const Home = () => {
  return (
    <div className='body-container'>
      <Header />
      <div className='carousel'>
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#cmyCarousel" data-slide-to="1" class="active"></li>
            <li data-target="#cmyCarousel" data-slide-to="2" class="active"></li>
            {/* <li data-target="#cmyCarousel" data-slide-to="3" class="active"></li>
            <li data-target="#cmyCarousel" data-slide-to="" class="active"></li> */}
          </ol>

          <div className="carousel-inner">
            <div className=" carousel-item active">
              <div className="overlay-image">
                <img class="d-block w-100" src="https://cdn.pixabay.com/photo/2021/01/11/06/52/vegetables-5907330_1280.jpg" alt="First slide"/>
                {/* <img class="d-block w-100" src="https://previews.123rf.com/images/barmalini/barmalini1609/barmalini160900285/65228797-collection-assorted-of-lentils-beans-peas-grain-groats-soybeans-legumes-in-wooden-box.jpg" alt="First slide" /> */}
             {/* src="https://cdn.pixabay.com/photo/2021/01/11/06/52/vegetables-5907330_1280.jpg" alt="First slide" /> */}
             
              </div>
            </div>

            <div className=" carousel-item ">
              <div className="overlay-image">
                <img class="d-block w-100" src="https://static.toiimg.com/photo/65993311.cms" alt="First slide" />
              </div>
            </div>

            <div className=" carousel-item ">
              <div className="overlay-image">
                <img class="d-block w-100" src="https://cdn.pixabay.com/photo/2014/08/26/15/28/jam-428094_1280.jpg" alt="First slide" />
              </div>
            </div>





          </div>

          <a href="#myCarousel"
            className="carousel-control-prev" role="button"
            data-slide="prev">
            <span className="sr-only"></span>
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </a>

          <a href="#myCarousel"
            className="carousel-control-next" role="button"
            data-slide="next">
            <span className="sr-only"></span>
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </a>

        </div>

        {/* <div className="body-message">
          <h1>Why Us</h1>
          <h4>Our mission is to bring the best ingredients from around the world, right to your doorstep. With a wide variety of authentic regional ingredients, we strive to reconnect people with the familiar flavor of India.
            We offer a full variety of name brand products, fresh produce, hot indian snack and fresh sweets. Our best asset is our great staff of fast, friendly and courteous employees that make sure our customers have a pleasant shopping experience. You can also find lottery tickets, masalas and a smoke shop at this indian store. When you next shop for groceries, call on Apna Bazaar, we look forward to serving you!</h4>
          <a href="/register" className="btn btn-lg btn-primary">
            Sign Up Today!
          </a>
        </div> */}
      </div>
<div className="filler">


</div>
      <div className="filler1">


      </div>

      <FeaturedProducts/>
      <Footer />
    </div>
  );
};

export default Home;