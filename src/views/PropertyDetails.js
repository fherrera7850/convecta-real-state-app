import React from 'react'
import { useParams } from 'react-router-dom';
import ImageSlider from '../components/ImageSlider';
import image1 from './../assets/img/property-1.jpg';
import image2 from './../assets/img/property-2.jpg';
import image3 from './../assets/img/property-3.jpg';
import Master from '../components/Master';

export default function PropertyDetails() {

    const { id } = useParams();
    const images = [image1, image2, image3];
    return (
        <Master>
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="row g-5 align-items-center">
                        <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <ImageSlider images={images} />
                        </div>
                        <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <h8><i>Código de propiedad: #{id}</i></h8>
                            <h6 style={{ color: 'green', marginTop: '20px' }}>Tipo de propiedad: Casa</h6>
                            <h1 class="mb-4">SECTOR MANQUEHUE ISABEL LA CATOLICA</h1>
                            <p class="mb-4">Esta hermosa propiedad ofrece un estilo de vida exclusivo en una ubicación privilegiada.
                                Con impresionantes vistas panorámicas de la ciudad, esta residencia de lujo combina elegancia y comodidad en cada detalle.
                                Con espacios amplios y luminosos, esta casa es ideal para el entretenimiento y el relax.
                                Sus modernas comodidades incluyen una cocina gourmet, amplios dormitorios con baños en suite, y un exuberante jardín
                                con piscina privada. Además, su ubicación céntrica ofrece fácil acceso a restaurantes, tiendas y áreas recreativas</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </Master>
        /* <div class="container-xxl py-5">
            <div class="container">
                <div class="row g-5 align-items-center">
                    <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                        <ImageSlider images={images} />
                    </div>
                    <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                        <h1 class="mb-4">Propiedad #{id}</h1>
                        <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        <p><i class="fa fa-check text-primary me-3"></i>Tempor erat elitr rebum at clita</p>
                        <p><i class="fa fa-check text-primary me-3"></i>Aliqu diam amet diam et eos</p>
                        <p><i class="fa fa-check text-primary me-3"></i>Clita duo justo magna dolore erat amet</p>
                    </div>
                </div>
            </div>
        </div> */
    );
}
