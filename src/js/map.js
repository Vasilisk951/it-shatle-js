function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: {lat: 53.89979378678366, lng: 27.55869137841202},
    });

    //массив координат
    const bounds = [
        {lat: 53.95085118887747, lng: 27.70882084014367},
        {lat: 53.904129365496345, lng: 27.55268293719863},
        {lat: 53.902651919950586, lng: 27.552518989008732},
        {lat: 54.34678865889989, lng: 26.556622147000812},
        {lat: 53.974689164474874, lng: 27.416639638075203},
        {lat: 53.85355687152397, lng: 27.586726611674198},
        {lat: 55.575682590237086, lng: 27.731685721615467},
        {lat: 55.76047166223036, lng: 27.617295942711507},
        {lat: 56.046948463407595, lng: 28.119671996519397},
        {lat: 55.719975352405, lng: 27.055837430516636},
        {lat: 55.57677668619091, lng: 26.685240474369245},
        {lat: 53.22276371940064, lng: 26.691720453259734},
        {lat: 52.7658293255776, lng: 25.121548867556893},
        {lat: 53.25431187821722, lng: 24.42141417903952}, 
        {lat: 53.410546824533874, lng: 24.545528813947513},
    ];


    //сообщения по клику на маркер
    const secretMessages = ["Дворец спорта Уручье", "Robinzon.by Магазин туристического снаряжения",
    "Красный дворик", "Касцёл Святой Тройцы", "Пляж № 5", 'Развалины мельницы',
    'Экологическая тропа «Озеравки-Ельня»', 'Водопад на реке Вята', 'остров Ду', 'Гора Маяк',
    'ГЭС Дружба народов', 'Несвижский замок', 'Дворец Пусловских', 'Красносельские карьеры', 'Подвесной мост'];
    

    for (let i = 0; i < secretMessages.length; ++i) {
      const marker = new google.maps.Marker({
        position: bounds[i],
        map: map,
      });
      attachSecretMessage(marker, secretMessages[i]);
    }
  }

  // Attaches an info window to a marker with the provided message. When the
  // marker is clicked, the info window will open with the secret message.
   function attachSecretMessage(marker, secretMessage) {
    const infowindow = new google.maps.InfoWindow({
      content: secretMessage,
    });
    marker.addListener("click", () => {
      infowindow.open(marker.get("map"), marker);
    });
  }
  
  window.initMap = initMap;