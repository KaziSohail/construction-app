import "./ChooseUs.css";

const ChooseUs = () => {
  return (
    <div className="chooseUs">
      <div className="chooseUs-heading">
        <h1>WHY CHOOSE US</h1>
        <hr />
      </div>
      <div className="choose-Container">
        <div className="choose-left">
          <div className="main">
            <div className="image">
              <img src="./src/assets/images/logo5.jpg" alt="" />
            </div>
            <div className="details">
              <h4>Best Quality</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
                corporis hic maxime a. Eligendi, doloribus maiores. Ipsam
                suscipit deleniti laborum!
              </p>
            </div>
          </div>
          <div className="main">
            <div className="image">
              <img src="./src/assets/images/logo2.jpg" alt="" />
            </div>
            <div className="details">
              <h4>innovative Solution</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
                corporis hic maxime a. Eligendi, doloribus maiores. Ipsam
                suscipit deleniti laborum!
              </p>
            </div>
          </div>
          <div className="main">
            <div className="image">
              <img src="./src/assets/images/logo1.jpg" alt="" />
            </div>
            <div className="details">
              <h4>Execution</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
                corporis hic maxime a. Eligendi, doloribus maiores. Ipsam
                suscipit deleniti laborum!
              </p>
            </div>
          </div>
        </div>
        <div className="choose-right">
          <img src="./src/assets/images/choose.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
