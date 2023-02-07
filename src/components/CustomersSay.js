function CustomersSay() {
    return (
        <>
        <div className="customers">
            <h2>Customer Say</h2>
            <div class="testimonials">
                <h4>Rating</h4>
                <div className="text-right">
                    {/* <img src={""} alt="avatar" className="Customer Image"/> */}
                    <p class="name"><img src={""} alt="avatar" className="avatar"/>Name</p>
                </div>
                <p>Review text</p>
        </div>
        </div>
        </>
      );
    }

export default CustomersSay;