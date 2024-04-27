import React from 'react';
import { Link } from 'react-router-dom';

const PropertyCard = ({ tipoVenta, tipoPropiedad, titulo, direccion, valor, tamaño, baños, dormitorios, descripcion, id }) => {
    return (
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="property-item rounded overflow-hidden">
                <div className="position-relative overflow-hidden">
                    <Link to={`/property/${id}`}>
                        <img className="img-fluid" src={require('./../assets/img/property-1.jpg')} alt="" />
                    </Link>
                    <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">{tipoVenta}</div>
                    <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">{tipoPropiedad}</div>
                </div>
                <div className="p-4 pb-0">
                    <h5 className="text-primary mb-3">${valor}</h5>
                    <a className="d-block h5 mb-2" href="">{titulo}</a>
                    <p><i className="fa fa-map-marker-alt text-primary me-2"></i>{direccion}</p>
                </div>
                <div className="d-flex border-top">
                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>{tamaño} Sqft</small>
                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>{dormitorios} Bed</small>
                    <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>{baños} Bath</small>
                </div>
            </div>
        </div>
    )
}

export default PropertyCard;
