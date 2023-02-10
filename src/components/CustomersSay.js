import reviewer1 from '../image/reviewer1'
import reviewer2 from '../image/reviewer2'
import reviewer3 from '../image/reviewer3'
import reviewer4 from '../image/reviewer4'
import star from '../image/star'

function CustomersSay() {
    return (
        <>
        <div className="testimonials">
            <h2>Testimonials</h2>
        <div className="ratingsrow">

            <div class="ratingsbox">
                <h4>4/5 <img src={star} alt="star" className="star"/></h4>
                <h4>Naruto <img src={reviewer1} alt="avatar" className="avatar"/></h4>
                <p>The food here was good but they did not have ramen.</p>
            </div>

            <div class="ratingsbox">
                <h4>1/5 <img src={star} alt="star" className="star"/></h4>
                <h4>Sasuke <img src={reviewer2} alt="avatar" className="avatar"/></h4>
                <p>Terrible food!</p>
            </div>

            <div class="ratingsbox">
                <h4>3/5 <img src={star} alt="star" className="star"/></h4>
                <h4>Sakura <img src={reviewer3} alt="avatar" className="avatar"/></h4>
                <p>Food was alright but they could have done better with the seasoning.</p>
            </div>

            <div class="ratingsbox">
                <h4>5/5 <img src={star} alt="star" className="star"/></h4>
                <h4>Hinata <img src={reviewer4} alt="avatar" className="avatar"/></h4>
                <p>Best food I have had in years.</p>
            </div>
        </div>
        </div>

        </>
      );
    }

export default CustomersSay;