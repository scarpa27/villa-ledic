import { quickInfoItems } from "../data/quickInfo";

// QuickInfo shows four short highlights about the apartments.
// Bootstrap's grid classes control how many items sit per row at each screen size:
// col-lg-3  -> 4 per row on desktop
// col-md-6  -> 2 per row on tablet
// col-12    -> 1 per row on mobile
// All colors/spacing/fonts are defined in global.css, not here.
// The content itself lives in src/data/quickInfo.js — this component only renders it.
function QuickInfo() {
  return (
    <section className="quick-info">
      <div className="container">
        <div className="row">
          {/* We render one column per item using .map() so we don't repeat JSX */}
          {quickInfoItems.map((item) => (
            <div className="col-12 col-md-6 col-lg-3" key={item.label}>
              <div className="quick-info-item">
                {/* Small gold circular badge showing an icon for this item */}
                <span className="quick-info-icon">{item.icon}</span>
                <span className="quick-info-label">{item.label}</span>
                <h3 className="quick-info-title">{item.title}</h3>
                <p className="quick-info-text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default QuickInfo;
