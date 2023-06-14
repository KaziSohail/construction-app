import "./Founders.css";
const Founders = () => {
  return (
    <div className="founders">
      <div className="f-heading">
        <h1>FOUNDERS</h1>
        <hr className="f-hr" />
      </div>
      <div className="f-container">
        <div className="f-one">
          <img src="./src/assets/images/founder-1.jpg" alt="" />
          <div className="f-details">
            <h3 className="f1-name">LEO McENROY.V</h3>
            <p className="f1-details">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              laboriosam illo soluta vitae ad totam quibusdam provident dicta
              beatae! Magnam repellendus placeat optio dolorem quaerat culpa
              ipsum temporibus accusamus, sint et eligendi? Ipsa nesciunt iste
              cumque voluptatum porro eaque itaque sapiente numquam
              exercitationem, beatae voluptatem debitis non sed qui repudiandae.
            </p>
          </div>
        </div>
        <div className="f-one">
          <img src="./src/assets/images/founder-2.jpg" alt="" />
          <div className="f-details">
            <h3 className="f1-name">HENRY CAVIL</h3>
            <p className="f1-details">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              laboriosam illo soluta vitae ad totam quibusdam provident dicta
              beatae! Magnam repellendus placeat optio dolorem quaerat culpa
              ipsum temporibus accusamus, sint et eligendi? Ipsa nesciunt iste
              cumque voluptatum porro eaque itaque sapiente numquam
              exercitationem, beatae voluptatem debitis non sed qui repudiandae.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founders;
