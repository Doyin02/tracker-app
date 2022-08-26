export default function Profile({ view, viewTo }) {
  function handleClick(e) {
    const { id: viewValue } = e.target.dataset;
    viewTo(viewValue);
  }

  return (
    <div className="grid-item main-section profile common-blue-bg">
      <div className="main-person">
        <img src="./images/image-jeremy.png" alt="jeremy.png" />
        <div className="text-area">
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </div>
      </div>
      <div className="period">
        <p
          data-id="0"
          className="first"
          onClick={handleClick}
        style={{cursor:"pointer"}}>
          daily
        </p>
        <p
          data-id="1"
          className="second"
          onClick={handleClick}
        style={{cursor: "pointer"}}>
          weekly
        </p>
        <p
          data-id="2"
          className="third"
          onClick={handleClick}
        style={{cursor: "pointer"}}>
          monthly
        </p>
      </div>
    </div>
  );
}
