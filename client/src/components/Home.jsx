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
          <li data-target="#cmyCarousel" data-slide-to="3" class="active"></li>
          <li data-target="#cmyCarousel" data-slide-to="" class="active"></li>
        </ol>

        <div className="carousel-inner">
          <div className=" carousel-item active">
            <div className="overlay-image">
              <img class="d-block w-100" src="https://us.123rf.com/450wm/indianfoodimages/indianfoodimages1806/indianfoodimages180600570/102977092-uncooked-pulses-grains-and-seeds-in-white-bowls-over-white-background-selective-focus.jpg?ver=6" alt="First slide" />
            </div>
            <div className="container">
              <h1>Title 1</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus tempora cumque fugit voluptate placeat mollitia repudiandae voluptates beatae, impedit, ratione voluptatibus. Voluptatum fuga ipsum animi consectetur expedita magni sit nulla?</p>
              <a href="#" className="btn btn-lg btn-success">
                More
              </a>
            </div>
          </div>

          <div className="carousel-item">
            <div className="container">
              <div className="overlay-image">
                <img class="d-block w-100" src="https://sc01.alicdn.com/kf/UT8csCNXvxaXXagOFbXo/fresh-vegetables-from-india-fresh-vegetables-exporters.jpg_350x350.jpg" alt="Second slide" />

              </div>
              <h1>Title 2</h1>

              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae repellendus beatae cum repudiandae. Beatae, alias. Placeat, laudantium eveniet inventore omnis doloribus ipsam rem expedita ad corporis autem rerum voluptatibus vero.</p>
              <a href="#" className="btn btn-lg btn-success">
                More
              </a>
            </div>
          </div>

          <div className="carousel-item">
            <div className="container">
              <h1>Title 3</h1>

              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae repellendus beatae cum repudiandae. Beatae, alias. Placeat, laudantium eveniet inventore omnis doloribus ipsam rem expedita ad corporis autem rerum voluptatibus vero.</p>
              <a href="#" className="btn btn-lg btn-success">
                More
              </a>
            </div>
          </div>

          <div className="carousel-item">
            <div className="container">
              <h1>Title 4</h1>

              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae repellendus beatae cum repudiandae. Beatae, alias. Placeat, laudantium eveniet inventore omnis doloribus ipsam rem expedita ad corporis autem rerum voluptatibus vero.</p>
              <a href="#" className="btn btn-lg btn-success">
                More
              </a>
            </div>
          </div>

          <div className="carousel-item">
            <div className="container">
              <h1>Title 5</h1>

              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae repellendus beatae cum repudiandae. Beatae, alias. Placeat, laudantium eveniet inventore omnis doloribus ipsam rem expedita ad corporis autem rerum voluptatibus vero.</p>
              <a href="#" className="btn btn-lg btn-success">
                More
              </a>
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

      <div className="body-message">
          <h1>Why Us</h1>
          <h4>Our mission is to bring the best ingredients from around the world, right to your doorstep. With a wide variety of authentic regional ingredients, we strive to reconnect people with the familiar flavor of India.
          We offer a full variety of name brand products, fresh produce, hot indian snack and fresh sweets. Our best asset is our great staff of fast, friendly and courteous employees that make sure our customers have a pleasant shopping experience. You can also find lottery tickets, masalas and a smoke shop at this indian store. When you next shop for groceries, call on Apna Bazaar, we look forward to serving you!</h4>
          <a href="/register" className="btn btn-lg btn-primary">
            Sign Up Today!
          </a>
      </div>
      </div>
      

      {/* <div className="product">
        <h1>Top Sellers</h1>
      </div> */}
    <Footer />
    </div>
  );
};

export default Home;