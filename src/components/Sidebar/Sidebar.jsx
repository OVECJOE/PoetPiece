import Button from "../Button/Button"
import "./Sidebar.css"

const Sidebar = () => {
  const categories = [
    "All",
    "Love",
    "Nature",
    "Life",
    "Sadness",
    "Friendship",
    "Happiness",
    "Hope",
    "Faith",
    "Family",
    "Religion",
    "Time",
    "Beauty",
    "Death",
    "Peace",
    "War",
  ]

  return (
    <aside className="app-sidebar">
      <div className="menu-list">
        <h4>Categories</h4>
        <div className="box categories-box">
            {categories.map((category, index) => {
                return (
                    <Button
                        key={index}
                        text={category}
                        type="button"
                        style={{
                            padding: '0.5rem 1rem',
                            border: 'none',
                            borderRadius: '5px',
                        }}
                    />
                )
            })}
        </div>
      </div>
      <div className="menu-list">
        <h4>Filters</h4>
        <div className="box filters-box">
            <p className="empty-text">No Filters Available</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar
