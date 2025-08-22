import fs from 'fs';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'data/posts');

const serviceImageMap = {
  "pulizia-della-casa": "https://plus.unsplash.com/premium_photo-1679500354538-0398de125937?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "pulizia-uffici": "https://plus.unsplash.com/premium_photo-1683141112334-d7d404f6e716?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "pulizia-post-costruzione": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "pulizia-per-traslochi": "https://plus.unsplash.com/premium_photo-1661601783135-223c3c6d8486?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "imbiancatura": "https://images.unsplash.com/photo-1708772002725-65e0b9bf6ba1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGhvdXNlJTIwUGFpbnRpbmclMjBTZXJ2aWNlc3xlbnwwfHwwfHx8MA%3D%3D",
  "disinfestazione": "https://plus.unsplash.com/premium_photo-1682126104327-ef7d5f260cf7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UGVzdCUyMENvbnRyb2x8ZW58MHx8MHx8fDA%3D",
  "tuttofare": "https://images.unsplash.com/photo-1676311396794-f14881e9daaa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "elettricista": "https://plus.unsplash.com/premium_photo-1661911309991-cc81afcce97d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "idraulico": "https://plus.unsplash.com/premium_photo-1661963478928-2d2d3e9b1e25?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "giardinaggio": "https://images.unsplash.com/photo-1601001815894-4bb6c81416d7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "assistenza-elettrodomestici": "https://plus.unsplash.com/premium_photo-1682126012378-859ca7a9f4cf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "sanificazione-disinfezione": "https://plus.unsplash.com/premium_photo-1661540818031-20a78d626b22?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

const blogToServiceMap = {
  "pulizia-appartamenti-ville-ecologica-roma": "pulizia-della-casa",
  "pulizia-uffici-sanificazione-teramo": "pulizia-uffici",
  "pulizia-post-ristrutturazione-milano": "pulizia-post-costruzione",
  "pulizia-trasloco-bari": "pulizia-per-traslochi",
  "sanificazione-ozono-palermo": "sanificazione-disinfezione",
  "montaggio-mobili-genova": "tuttofare",
  "impianti-elettrici-bologna": "elettricista",
  "riparazione-idraulica-firenze": "idraulico",
  "giardinaggio-pescara": "giardinaggio",
  "riparazione-elettrodomestici-ancona": "assistenza-elettrodomestici",
  "imbiancatura-verona": "imbiancatura",
  "disinfestazione-napoli": "disinfestazione",
};

const categoryImageMap = {
  "Pulizie": "pulizia-della-casa",
  "Pulizie": "pulizia-uffici",
  "Pulizie": "pulizia-post-costruzione",
  "Pulizie": "pulizia-per-traslochi",
  "Pulizie": "sanificazione-disinfezione",
  "Manutenzione": "giardinaggio",
  "Manutenzione": "assistenza-elettrodomestici",
  "Casa Sicura": "imbiancatura",
  "Casa Sicura": "disinfestazione",
  "Riparazioni": "tuttofare",
  "Riparazioni": "elettricista",
  "Riparazioni": "idraulico",
};

function getBlogPostImage(slug, category) {
  if (blogToServiceMap[slug]) {
    return serviceImageMap[blogToServiceMap[slug]];
  }
  
  if (categoryImageMap[category]) {
    return serviceImageMap[categoryImageMap[category]];
  }
  
  return serviceImageMap["pulizia-della-casa"];
}

export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory).filter(name => name.endsWith('.json'));
  
  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.json$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const postData = JSON.parse(fileContents);
    
    return {
      slug,
      ...postData,
      heroImage: getBlogPostImage(slug, postData.category),
      coverImage: postData.coverImage || getBlogPostImage(slug, postData.category)
    };
  });

  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostBySlug(slug) {
  try {
    const jsonPath = path.join(postsDirectory, `${slug}.json`);
    const jsonContents = fs.readFileSync(jsonPath, 'utf8');
    const postData = JSON.parse(jsonContents);
    
    const mdPath = path.join(postsDirectory, postData.contentFile);
    const mdContents = fs.readFileSync(mdPath, 'utf8');
    
    return {
      slug,
      ...postData,
      content: mdContents,
      heroImage: getBlogPostImage(slug, postData.category),
      coverImage: postData.coverImage || getBlogPostImage(slug, postData.category)
    };
  } catch (error) {
    return null;
  }
}

export function getPostsByCategory(category) {
  const allPosts = getAllPosts();
  if (category === 'Tutti i post') {
    return allPosts;
  }
  return allPosts.filter(post => post.category === category);
}

export function getAllCategories() {
  const allPosts = getAllPosts();
  const categories = [...new Set(allPosts.map(post => post.category))];
  return ['Tutti i post', ...categories];
}