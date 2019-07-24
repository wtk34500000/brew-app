import React from 'react'

const Carousel = () => {
    return(
        <div id="carouselExampleIndicators" className="container carousel slide mt-4" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlKIyNGoF8M-qLRb9YMutfORfw2Wj6ZuhMxOksXRovNWLd9xcLSA" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFvLNaq4RdpygBYndJ2-gcRGDUrAunke-xMb32_JZeRrhHzCszdA" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVvg4WNZC1NBIv328hhivaTiz9iAZ57fK1N9QZbRaMLd97jLeL" className="d-block w-100" alt="..."/>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
            <div>
                <h2 className="font-weight-bold">Drink Where Your Beer Is Made Press </h2>
                <p> "Search" to start your local drinking journey... </p>

               
            </div>
        </div>
    )
}

export default Carousel;