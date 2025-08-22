const cityImageIds = {
  'rome': '1552832230-c0197dd311b5', 
  'milan': '1610016302534-6f67f1c968d8',
  'teramo': '1602188798833-e9250c62b450',
  'pescara': '1738403462111-9c4763f4d893',
  'ancona': '1576053653130-b3fbd594de67', 
  'naples': '1710625361134-332bc2801df3',  
  'turin': '1578072445064-bd0b3f83b847', 
  'palermo': '1586729223498-2cc4a05d3858', 
  'genoa': '1601047197922-156024782afd', 
  'bologna': '1635469019177-7264fc1e013c', 
  'florence': '1476362174823-3a23f4aa6d76', 
  'bari': '1564863756233-e90e6d2f264b', 
  'catania': '1584198686005-d9f5d63efa0e', 
  'venice': '1523906834658-6e24ef2386f9', 
  'verona': '1610574829585-0fc5a279647f', 
  'messina': '1558652361-3d3b72a5dc79', 
  'padua': '1584699232068-ab0eabccc805', 
  'trieste': '1623878991610-7416bc4e8c6f', 
  'brescia': '1701271065696-d959a8f559e9', 
  'prato': '1642169792006-4353d04f255e', 
  'modena': '1641950036463-eca47ef30d70', 
  'parma': '1603056740028-4291336263c8', 
  'reggio-calabria': '1690289793717-f92cc222752c',
  'bergamo': '1645879785888-6f2829ba82c6',
  'bolzano': '1647933611937-448a601c59eb',
  'cagliari': '1630393942966-a3e1264e93d5',
  'como': '1704658861830-e361363d12e8',
  'ferrara': '1745741543923-2112f5bddee4',
  'forli': '1648199144162-313d133cb29c',
  'la-spezia': '1527627929531-505e6a4f19a3',
  'lecce': '1689085383445-3872d2b0d7be',
  'livorno': '1601469197497-8c5d85f5721e',
  'monza': '1606050429723-c57dce848e6a',
  'pavia': '1670953569275-e01c12b811b7',
  'perugia': '1621016142665-1afa6d6d5484',
  'piacenza': '1713713416439-a1f0eee1a524',
  'pisa': '1543429776-2782fc8e1acd',
  'rimini': '1723155094434-aa1e5edb9b03',
  'salerno': '1636806961068-6d02a5d5e32c',
  'sassari': '1664013960519-0de84246e1a2',
  'taranto': '1595796981325-7f91c733bd05',
  'trento': '1609686868751-291d5decb68a',
  'reggio-emilia':'1598814828588-53e86798baa7',
  'chieti':'1591290883270-61eb3b89e620'
};

const fallbackImages = [
  '1610016302534-6f67f1c968d8', 
  '1534445867742-43f4b7c6c463', 
  '1543429187-2d9b4c8e6fcd', 
  '1514890182612-5d21c842c2f8' 
];

export function getCityImageUrl(citySlug, width = 800, height = 600) {
  const imageId = cityImageIds[citySlug] || fallbackImages[Math.floor(Math.random() * fallbackImages.length)];
  return `https://images.unsplash.com/photo-${imageId}?w=${width}&h=${height}&fit=crop&crop=center&auto=format&q=80`;
}

export function getUnsplashCityImage(cityName, width = 800, height = 600, keywords = []) {
  const baseUrl = 'https://source.unsplash.com';
  const searchTerms = [cityName, 'italy', ...keywords].join(',');
  return `${baseUrl}/${width}x${height}/?${encodeURIComponent(searchTerms)}`;
} 