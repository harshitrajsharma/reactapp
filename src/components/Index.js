import React from "react";

export default function Index() {
    const handleButtonClick = (url) => {
        // Open the specified URL in a new tab
        window.open(url, '_blank');
    };
    return (
        <div className="header-div">
            <div className="WrapperTransparent">
                <div className="frontLeft">
                    <div className="logo">
                        <img src="/Suryabhailogo.png" alt="" />
                    </div>
                </div>
                <div className="frontRight">
                    <div className="front_content">
                        <span>
                            <h1 className="front-banner-content-heading">
                                SuryaBhai <br />ONLINE BOOK
                            </h1>
                        </span>
                        <h4 className="front-banner-content-sub-heading">
                            Favourite of north and south punters
                        </h4>
                        <br />
                        <h4 className="front-banner-content-sub-heading">
                            Play online for real money in India and make bet on games like Cricket, Casino, Football, Tennis and many more.
                        </h4>
                    </div>
                    <div className="queries">
                        <div className="box1 box">
                            <h5>Veiw Our Partners</h5>
                            <button className="btn golden-btn btn-warning" >Click for demo</button>
                        </div>
                        <div className="box2 box">
                            <h5>For Any Queries WhatsApp Us On</h5>
                            <button className="btn golden-btn btn-warning" onClick={() => handleButtonClick("https://wa.me/918988811133")}>+91 8988811133</button> &nbsp;
                            <button className="btn golden-btn btn-warning" onClick={() => handleButtonClick("https://wa.me/918988811144")}>+91 8988811144</button>
                        </div>
                    </div>
                    <div className="front-banner-image">
                    <img className='bottom-right-image' src="./girl.png" alt=""
                    />
                </div>
                </div>
            </div>
        </div>
    );
}

