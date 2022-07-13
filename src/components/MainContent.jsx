import SideBar from "../container/SideBar"
import BikeList from "./BikeList"

export const MainContent = (() => {

    return (<>
        <div className="content bg-gray">
            <div className="row g-0">
                <div className="col-12 col-lg-2 bg-white">
                    <SideBar></SideBar>
                </div>
                <div className="col-12 col-lg-10">
                    <BikeList></BikeList>
                </div>
            </div>
        </div>
    </>)
})