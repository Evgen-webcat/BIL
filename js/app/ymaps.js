$(document).ready(function () {
    var mapBlock = document.getElementById('map');

    if (mapBlock) {
        ymaps.ready(init);
        var map,
            Placemark;

        function init() {
            map = new ymaps.Map("map", {
                center: [53.689614, 23.835898],
                controls: [],
                zoom: 17
            });

            map.behaviors.disable('scrollZoom');
            if ($(this).width() < 1200) {
                map.behaviors.disable('drag');
            }

            Placemark = new ymaps.Placemark([53.689614, 23.835898], {
                hintContent: 'Белинтерлогистик',
                balloonContent: 'Белинтерлогистик'
            });

            map.geoObjects.add(Placemark);
        }
    }
});
