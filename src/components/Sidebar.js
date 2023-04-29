const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="category">
        <h4>Category</h4>
        <div className="cat_item">
          <input type="checkbox" />
          <label>Kid</label>
        </div>
        <div className="cat_item">
          <input type="checkbox" />
          <label>Girl</label>
        </div>
      </div>
      <div className="category">
        <h4>SortBy</h4>
        <div className="cat_item">
          <input type="checkbox" />
          <label>High</label>
        </div>
        <div className="cat_item">
          <input type="checkbox" />
          <label>Low</label>
        </div>
      </div>
      <div className="category">
        <h4>Rating</h4>
        <div className="cat_item">
          <input type="checkbox" />
          <label>5</label>
        </div>
        <div className="cat_item">
          <input type="checkbox" />
          <label>4</label>
        </div>
        <div className="cat_item">
          <input type="checkbox" />
          <label>3</label>
        </div>
      </div>
    </div>
  );
};
export { SideBar };
