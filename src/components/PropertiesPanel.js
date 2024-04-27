import PropertyCard from "./PropertyCard";

const propertiesData = [
    {
        "id": 1,
        "tipoVenta": "Venta",
        "tipoPropiedad": "Casa",
        "titulo": "Amplia casa en zona residencial",
        "direccion": "Calle 123, Ciudad Ejemplo",
        "valor": 250000,
        "tamaño": 300,
        "baños": 3,
        "dormitorios": 4,
        "descripcion": "Hermosa casa de dos pisos con jardín y garaje."
    },
    {
        "id": 2,
        "tipoVenta": "Venta",
        "tipoPropiedad": "Apartamento",
        "titulo": "Moderno apartamento con vistas panorámicas",
        "direccion": "Avenida Principal 456, Ciudad Ejemplo",
        "valor": 180000,
        "tamaño": 120,
        "baños": 2,
        "dormitorios": 3,
        "descripcion": "Apartamento de lujo en edificio con gimnasio y piscina."
    },
    {
        "id": 3,
        "tipoVenta": "Arriendo",
        "tipoPropiedad": "Oficina",
        "titulo": "Oficina en zona comercial",
        "direccion": "Carrera 789, Ciudad Ejemplo",
        "valor": 1500,
        "tamaño": 80,
        "baños": 1,
        "dormitorios": 0,
        "descripcion": "Oficina bien iluminada y espaciosa en edificio corporativo."
    },
    {
        "id": 4,
        "tipoVenta": "Venta",
        "tipoPropiedad": "Terreno",
        "titulo": "Terreno para desarrollo residencial",
        "direccion": "Barrio Nuevo, Ciudad Ejemplo",
        "valor": 100000,
        "tamaño": 500,
        "baños": 0,
        "dormitorios": 0,
        "descripcion": "Terreno plano listo para construir casas o apartamentos."
    },
    {
        "id": 5,
        "tipoVenta": "Arriendo",
        "tipoPropiedad": "Local Comercial",
        "titulo": "Local en centro comercial",
        "direccion": "Centro Comercial Plaza Mayor, Ciudad Ejemplo",
        "valor": 2000,
        "tamaño": 150,
        "baños": 2,
        "dormitorios": 0,
        "descripcion": "Local comercial en excelente ubicación dentro del centro comercial."
    },
    {
        "id": 6,
        "tipoVenta": "Venta",
        "tipoPropiedad": "Apartamento",
        "titulo": "Apartamento con terraza y vistas al mar",
        "direccion": "Calle del Mar 789, Ciudad Ejemplo",
        "valor": 300000,
        "tamaño": 200,
        "baños": 2,
        "dormitorios": 3,
        "descripcion": "Espacioso apartamento con amplia terraza y vista al mar."
    },
    {
        "id": 7,
        "tipoVenta": "Arriendo",
        "tipoPropiedad": "Casa",
        "titulo": "Casa con piscina y jardín",
        "direccion": "Avenida Principal 123, Ciudad Ejemplo",
        "valor": 2000,
        "tamaño": 400,
        "baños": 4,
        "dormitorios": 5,
        "descripcion": "Casa amplia y cómoda con piscina y hermoso jardín."
    },
    {
        "id": 8,
        "tipoVenta": "Venta",
        "tipoPropiedad": "Apartamento",
        "titulo": "Apartamento en centro histórico",
        "direccion": "Calle Principal 456, Ciudad Ejemplo",
        "valor": 220000,
        "tamaño": 150,
        "baños": 2,
        "dormitorios": 2,
        "descripcion": "Moderno apartamento ubicado en el corazón del centro histórico."
    },
    {
        "id": 9,
        "tipoVenta": "Arriendo",
        "tipoPropiedad": "Oficina",
        "titulo": "Oficina en edificio ejecutivo",
        "direccion": "Calle Ejecutiva 789, Ciudad Ejemplo",
        "valor": 1800,
        "tamaño": 100,
        "baños": 1,
        "dormitorios": 0,
        "descripcion": "Oficina en edificio corporativo con acceso a sala de reuniones."
    }
]

const PropertiesPanel = () => {
    return (
        <div class="container-xxl py-5">
            <div class="container">
                <div class="row g-0 gx-5 align-items-end">
                    <div class="col-lg-6">
                        <div class="text-start mx-auto mb-5 wow slideInLeft" data-wow-delay="0.1s">
                            <h1 class="mb-3">Propiedades Disponibles</h1>
                        </div>
                    </div>
                </div>
                <div class="tab-content">
                    <div id="tab-1" class="tab-pane fade show p-0 active">
                        <div class="row g-4">
                            {propertiesData.map(property => (
                                <PropertyCard
                                    key={property.id}
                                    tipoVenta={property.tipoVenta}
                                    tipoPropiedad={property.tipoPropiedad}
                                    titulo={property.titulo}
                                    direccion={property.direccion}
                                    valor={property.valor}
                                    tamaño={property.tamaño}
                                    baños={property.baños}
                                    dormitorios={property.dormitorios}
                                    descripcion={property.descripcion}
                                    id={property.id}
                                />
                            ))}
                            <div class="col-12 text-center wow fadeInUp" data-wow-delay="0.1s">
                                <a class="btn btn-primary py-3 px-5" href="">Mostrar más propiedades...</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertiesPanel;