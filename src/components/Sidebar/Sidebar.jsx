import PropTypes from "prop-types";
import { useState } from "react";

import Button from "../Button/Button";
import "./Sidebar.css";
import { poetryCategories } from "../../constants";

const Sidebar = () => {
    const [showSidebar, setShowSidebar] = useState(true);

    return (
        <>
            <aside className={`app-sidebar ${showSidebar ? "" : "closed"}`}>
                <div className="menu-list">
                    <h4>Categories</h4>
                    <div className="box categories-box">
                        {poetryCategories.map((category, index) => {
                            return (
                                <Button
                                    key={index}
                                    className='padding-1 rounded-1'
                                >{category}</Button>
                            );
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
            <div
                className="sidebar-toggler"
                aria-label="Sidebar Menu"
                onClick={() => setShowSidebar(!showSidebar)}
            >
                {showSidebar ? (
                    <i className="fa-solid fa-arrow-left"></i>
                ) : (
                    <i className="fa-solid fa-arrow-right"></i>
                )}
            </div>
        </>
    );
};

Sidebar.propTypes = {
    show: PropTypes.bool,
};

export default Sidebar;
