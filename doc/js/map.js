function initMap(){

    //お店のPlaceIDを含むrequestオブジェクト
    var request = {
        placeId: 'ChIJqzI306UBm18RsB3OuLLG8FA'
    };

    var myLatlng = new google.maps.LatLng(40.617574, 140.484455); // 中心の位置座標
    // 地図のインスタンスを作成する
    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatlng, // 中心の位置座標
        zoom: 17// ズーム値
    });
    var marker;

    // お店の情報をPlacesAPIから取得、マーカーに反映
    var infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);
    function callback(place, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            marker = new google.maps.Marker({
                position: place.geometry.location,
                map: map
            });
            google.maps.event.addListener(marker, 'click', function () {
            var setDes = place.name + " " + place.vicinity;
            infowindow.setContent(setDes);
            infowindow.open(map, this);
          });
            //念の為PlaceIDを元にした位置情報より地図センターをセット
            map.setCenter(marker.getPosition());
            //console.log(place);
            console.log(marker.getPosition());
        }
    }
    service.getDetails(request,callback);

    //ウィンドウをリサイズしたら再度読み込み
    google.maps.event.addDomListener(window, 'resize', map.panTo(myLatlng));
}
