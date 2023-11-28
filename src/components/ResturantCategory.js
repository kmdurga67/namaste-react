import "../index.css";
import ItemList from "./ItemList.js";

const ResturantCategory = (props) => {
  const { data, toggle, setShowIndex } = props;

  const handleClick = () => {
    setShowIndex();
  }
  return (
    <div>
      <div className="category" onClick={handleClick}>
        <div className="category-title">
          <span>
            {data.title} ({data.itemCards.length})
          </span>
          {toggle ? <span>🔽</span> : <span>🔼</span>}
        </div>
        {toggle  ? <ItemList items={data.itemCards} /> : null}
      </div>
    </div>
  );
};

export default ResturantCategory;
