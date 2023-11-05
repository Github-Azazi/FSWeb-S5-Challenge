import axios from "axios";

const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //
  const divCard = document.createElement("div");
  divCard.classList.add("card");

  const divHeadline = document.createElement("div");
  divHeadline.classList.add("headline");
  divHeadline.textContent = makale.anabaslik;

  const divAuthor = document.createElement("div");
  divAuthor.classList.add("author");

  const divImgContainer = document.createElement("div");
  divImgContainer.classList.add("img-container");

  const imgYazarFoto = document.createElement("img");
  imgYazarFoto.src = makale.yazarFoto;

  const spanYazarAdi = document.createElement("span");
  spanYazarAdi.textContent = makale.yazarAdi + " tarafından";

  divImgContainer.appendChild(imgYazarFoto);
  divAuthor.appendChild(divImgContainer);
  divAuthor.appendChild(spanYazarAdi);

  divCard.appendChild(divHeadline);
  divCard.appendChild(divAuthor);

  divCard.addEventListener("click", () => {
    console.log(makale.anabaslik);
  });

  return divCard;
};

const cardEkleyici = async (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
     const cselector = document.querySelector(secici);
    axios.get("http://localhost:5001/api/makaleler").then((response)=> {
      const article = response.data.makaleler;
      for (const key in article ) {
        articles [key].forEach((makale)=>{
        const card =Card(makale);
        selector.append(card);
        });
      }
    });
  };

/*
cardsContainer.append(cardSide);
axios.get("http://localhost:5001/api/makaleler").them((res) => {
  const {makaleler} = res.data;
  for ( const key in makaleler) {
    const array = makaleler [key];
    array.forEach((el) => {
      const card = Card (el);
      cardsContainer.append(card);
   });
  }
});
},*/
export { Card, cardEkleyici }
