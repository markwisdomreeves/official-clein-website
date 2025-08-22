"use client";

import { useState } from "react";

const imageMap = {
  "pulizia-della-casa": "https://plus.unsplash.com/premium_photo-1679500354538-0398de125937?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "pulizia-uffici": "https://plus.unsplash.com/premium_photo-1683141112334-d7d404f6e716?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "pulizia-post-costruzione": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "pulizia-profonda": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "pulizia-per-traslochi": "https://plus.unsplash.com/premium_photo-1661601783135-223c3c6d8486?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "tuttofare": "https://images.unsplash.com/photo-1676311396794-f14881e9daaa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "elettricista": "https://plus.unsplash.com/premium_photo-1661911309991-cc81afcce97d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "idraulico": "https://plus.unsplash.com/premium_photo-1661963478928-2d2d3e9b1e25?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "giardinaggio": "https://images.unsplash.com/photo-1601001815894-4bb6c81416d7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "assistenza-elettrodomestici": "https://plus.unsplash.com/premium_photo-1682126012378-859ca7a9f4cf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "sanificazione-disinfezione": "https://plus.unsplash.com/premium_photo-1661540818031-20a78d626b22?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "falegnameria": "https://plus.unsplash.com/premium_photo-1664300494539-313eac2a6095?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q2FycGVudGVyfGVufDB8fDB8fHww",
  "imbiancatura": "https://images.unsplash.com/photo-1708772002725-65e0b9bf6ba1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGhvdXNlJTIwUGFpbnRpbmclMjBTZXJ2aWNlc3xlbnwwfHwwfHx8MA%3D%3D",
  "piastrellista-e-pavimentazioni": "https://plus.unsplash.com/premium_photo-1679121588085-81f8fd508496?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY3fHxUaWxpbmclMjBhbmQlMjBGbG9vcmluZ3xlbnwwfHwwfHx8MA%3D%3D",
  "installazione-climatizzatori": "https://plus.unsplash.com/premium_photo-1678766819199-5660bab7085b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QWlyJTIwQ29uZGl0aW9uZXIlMjBJbnN0YWxsYXRpb258ZW58MHx8MHx8fDA%3D",
  "servizi-caldaie": "https://plus.unsplash.com/premium_photo-1663047166207-fd717b9a0ba7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIwfHxCb2lsZXIlMjBTZXJ2aWNlc3xlbnwwfHwwfHx8MA%3D%3D",
  "servizi-infissi-e-serramenti": "https://images.unsplash.com/photo-1570025919570-bc24c2fc7468?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE1fHxXaW5kb3dzJTIwYW5kJTIwRG9vcnMlMjByZXBhaXJzfGVufDB8fDB8fHww",
  "servizi-zanzariere": "https://plus.unsplash.com/premium_photo-1718204438772-84b287d1fc7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fE1vc3F1aXRvJTIwTmV0JTIwU2VydmljZXN8ZW58MHx8MHx8fDA%3D",
  "disinfestazione": "https://plus.unsplash.com/premium_photo-1682126104327-ef7d5f260cf7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UGVzdCUyMENvbnRyb2x8ZW58MHx8MHx8fDA%3D",
  "sgomberi-e-smaltimento": "https://plus.unsplash.com/premium_photo-1683141120496-f5921a97f5c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q2xlYXJhbmNlJTIwYW5kJTIwV2FzdGUlMjBSZW1vdmFsfGVufDB8fDB8fHww",
}

export default function ServiceHeroImage({ serviceSlug, serviceName, coverImage }) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  const fallbackImage = imageMap[serviceSlug];

  return (
    <>
      {/* Background Image */}
      {!imageError && (
        <img
          src={fallbackImage || coverImage}
          alt={`${serviceName} service`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      )}
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0057B8]/40 to-[#4C9AFF]/40">
        <div className="absolute inset-0 bg-black/30" />
      </div>
      
      {/* Fallback gradient if image fails to load */}
      {imageError && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#0057B8] to-[#4C9AFF]">
          <div className="absolute inset-0 bg-black/20" />
        </div>
      )}
    </>
  );
} 