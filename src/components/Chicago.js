import restaurant from '../image/restaurant.jpg'
import rest from '../image/restaurantchefB.jpg'
function Chicago() {
    return (
        <>
      <div className="chicago">
          <div className="chicago_text">
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit. Exercitation veniam consequat
                sunt nostrud amet.
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit.
            </p>
          </div>
          <div className="chicago_img_div">
            <img src={rest} alt="about_chicago"/>
            <img src={restaurant} alt="about_chicago"/>
          </div>
      </div>
        </>
      );
    }

export default Chicago;