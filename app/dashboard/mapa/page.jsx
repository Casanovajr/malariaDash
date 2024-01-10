// Seu componente de mapa (MapContainer) - atualizado
"use client"

import { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapContainer = () => {
  const [marcadores, setMarcadores] = useState([]);
  const defaultCenter = { lat: -7.6270, lng: -72.6758 };

  console.log(marcadores)

  useEffect(() => {
    // Função para buscar marcadores da API
    const fetchMarcadores = async () => {
      try {
        const response = await fetch('pages/api/marcadores'); // Rota da API
        const data = await response.json();
        setMarcadores(data.marcadores);
      } catch (error) {
        console.error('Erro ao buscar marcadores:', error);
      }
    };

    // Chame a função para buscar marcadores ao montar o componente
    fetchMarcadores();
  }, []);

  return (
    <LoadScript googleMapsApiKey="AIzaSyAvX5qlT9J0VmMqWUsNKdADacg42GfauYw">
      <GoogleMap
        mapContainerStyle={{ height: '100vh', width: '100%' }}
        zoom={12}
        center={defaultCenter}
      >
        
          {/* Adiciona um marcador no centro do mapa */}
          <Marker position={defaultCenter} />

        {/* Renderize marcadores no mapa */}
        {marcadores.map((marcador) => (
          <Marker key={marcador._id} position={{ lat: marcador.lat, lng: marcador.long }} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
