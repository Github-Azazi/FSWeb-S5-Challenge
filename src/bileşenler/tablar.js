import axios from "axios";

const Tablar = (konu) => {
  // GÖREV 3
  // ---------------------
  // Tek argümanı bir dizi ("konu") olan bu fonksiyonu uygulayın.
  // Örnek olarak, konu dizisi şu şekilde deklare edilmişse ['javascript', 'bootstrap', 'teknoloji']
  // fonksiyon aşağıdaki şekilde bir DOM öğesi döndürecek.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">teknoloji</div>
  // </div>
  //
  const divTopics = document.createElement("div"); 
  divTopics.classList.add("topics");

  konu.forEach((item) => { const divTab = document.createElement("div");
   divTab.classList.add("tab"); 
   divTab.textContent = item; divTopics.appendChild(divTab); 
  });

return divTopics; };



const tabEkleyici = async (secici) => {
  // GÖREV 4
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu işlevi uygulayın.
  // Konuları bu uç noktadan almalıdır: `http://localhost:5001/api/konular` (console.log ile test edin!).
  // Yanıtın içindeki konu dizisini bulun ve Tablar bileşenini kullanarak tabları oluşturun.
  // Tabları, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
  
  /*

  const tabContainer =document.querySelector(secici);
  async function TabEkleme(){
    const tabData = await fetch("http://localhost:5001/api/konular");
    const data1 = await tabData.json();
    return data1;
  }
const data = await TabEkleme();
const tablarEL = Tablar (data.konular);
tabContainer.append(tablarEL);
}*/

const tabContainer = document.querySelector(secici);

  try {
    const response = await axios.get("http://localhost:5001/api/konular");
    const data = response.data;
    
    const tablarEL = Tablar(data.konular);
    tabContainer.append(tablarEL);
  } catch (error) {
    console.log(error);
  }
};

export { Tablar, tabEkleyici };