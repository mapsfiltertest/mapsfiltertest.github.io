var map;
var center = new google.maps.LatLng(13, 10);

var markers = [];

var information = {
    '123 main street' : {
        pos: new google.maps.LatLng(10, 10),
        type: 'entertainment',
        rating: 5
    },
    '124 main street' : {
        pos: new google.maps.LatLng(11, 10),
        type: 'food',
        rating: 4
    },
    '125 main street' : {
        pos: new google.maps.LatLng(12, 10),
        type: 'park',
        rating: 3
    },
    '126 main street' : {
        pos: new google.maps.LatLng(13, 10),
        type: 'theater',
        rating: 2
    },
    '127 main street' : {
        pos: new google.maps.LatLng(14, 10),
        type: 'food',
        rating: 1
    },
    '128 main street' : {
        pos: new google.maps.LatLng(15, 10),
        type: 'other',
        rating: 0
    }
};

var init = function () {
    var options = {
        center : center,
        zoom : 4
    };

    map = new google.maps.Map(document.getElementById("mapFilter"), options);

    for(var k in information)
    {
        var marker = new google.maps.Marker({
            position : information[k].pos,
            title: k,
            type: information[k].type,
            rating: information[k].rating
        });

        markers.push(marker);
    }

    $(".check").each(function(){
        $(this).change(function(){
            console.log($(this).attr('id') + ", " + $(this).is(':checked'));
            updateMarkers();
        });
    });

    function updateMarkers(){
        $(".check:checked").each(function(){
            for(var i in markers)
            {
                var marker = markers[i];

                if(marker.type === $(this).attr("checkoff"))
                {
                    marker.setMap(map);
                }
            }
        });

        $(".check:not(:checked)").each(function(){
           for(var i in markers)
           {
               var marker = markers[i];

               if(marker.type === $(this).attr("checkoff"))
               {
                   marker.setMap(null);
               }
           }
        });
    }
};

google.maps.event.addDomListener(window, 'load', init);