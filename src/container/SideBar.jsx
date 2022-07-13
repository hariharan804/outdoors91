import "../assets/css/sideBar.css";

export const SideBar = (() => {

    return (<>
        <div className="sidebar">
            <h1 className="pb-3 border-bottom filter-title">Filters</h1>
            <h4 className="sub-filter">CYCLE CATEGORIES</h4>
            <h5 className="filter-list active">Men Bikes</h5>
            <h5 className="filter-list">Women Bikes</h5>
            <h5 className="filter-list">Boys Bikes</h5>
            <h5 className="filter-list">Girls Bikes</h5>
            <hr />
            <h4 className="sub-filter">GEARS</h4>
            <h5 className="filter-list active">Men Bikes</h5>
            <h5 className="filter-list">Women Bikes</h5>
            <h5 className="filter-list">Boys Bikes</h5>
            <h5 className="filter-list">Girls Bikes</h5>
            <hr />
        </div>
    </>)
})

export default SideBar;