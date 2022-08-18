import React from 'react'

export default function Contacto() {
    var nameList = [
        { id: "01", title: "titulo de noticia", image: "https://unsplash.com/es/s/fotos/duck", excerpt: "resumen breve de noticia" },
      ];
      const itemList = nameList.map((item) => (
        <article>
          <h3>{item.title}</h3> 
          <img alt='duck' src={item.image}></img>
          <p>{item.excerpt}</p>
        </article>
      ));
  return (
    <div>
    <ol style={{ listStyleType: "none" }}>{itemList}</ol>
  </div>

  )
}
