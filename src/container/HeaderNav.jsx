import "../assets/css/header.css";

export const HeaderNav = (() => {

    return (<>
        <header>
            <div className="header-one">
                <ul className="nav justify-content-end my-auto">
                    <li className="nav-item">
                        <div className="position-relative">
                            <div className="position">
                                <img height="16" src="https://d60i6mpkbdpwe.cloudfront.net/assets/ninetyone/images/icon/search.svg" alt="" />
                            </div>
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Register My Bike</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Store Locator</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Warranty</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled"><img height="12" src="https://d60i6mpkbdpwe.cloudfront.net/assets/ninetyone/images/icon/cart.svg" alt="" /></a>
                    </li>
                </ul>
            </div>
            <div className="header-two">
                <nav className="navbar navbar-expand-lg navbar-light bg-white">
                    <div className="container-fluid">
                        <a className="nav-link active" aria-current="page" href="#"><img className="logo-img" src="https://d60i6mpkbdpwe.cloudfront.net/assets/ninetyone/images/logo/ninetyone-ktm.svg" alt="Logo" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="mx-auto navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#">Electric Bicycle</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Bicycle Categories</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Bicycle Types</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Accessories</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Cycling Clothing</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">KTM</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="breadcrumbs">
                <p><span>HOME </span>/<span> MEN BIKES</span> </p>
            </div>
            <div className="banner">
                <div className="content">
                    <div className="row">
                        <div className="col-lg-9 col-12">
                            <h1 className="title">Men Bikes | Cycles By Type</h1>
                            <p className="des">Reliable, affordable and trendy bicycles with unique frame geometries and eye-catching designs that make for a smooth and exhilarating ride</p>
                        </div>
                        <div className="col-lg-3 col-12 text-end mt-auto">
                            <button className="btn sort-btn me-3">Sort By</button>
                            <button className="btn filter-btn">Hide Filter</button>
                        </div>
                        <div className="col-12 text-center mt-5">
                            <button className="btn count-btn">E-BIKE (3)</button>
                            <button className="btn count-btn">MTB (33)</button>
                            <button className="btn count-btn ">ATB (21)</button>
                            <button className="btn count-btn ">MTB (43)</button>
                            <button className="btn count-btn">MTB (65)</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>)
})

export default HeaderNav;