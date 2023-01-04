export default function Catalog(props) {
  props = props.props;
  const locationText = "View on Google Maps";
    return (
      <catalog className="catalog--main">
        <img src={props.imageUrl} className="catalog--img"/>
        <div className="catalog--details">
          <div className="catalog--location">
            <img src="./pin.png" className="catalog--pin-img"/>
            <span className="catalog--country">{props.location}</span>
            <a href="" className="catalog--loc-url">{locationText}</a>
          </div>
          <h2 className="catalog--title">{props.title}</h2>
          <h3 className="catalog--timerange">{props.startDate} - {props.endDate}</h3>
          <p className="catalog--description">{props.description}</p>
        </div>
      </catalog>
    );
  }