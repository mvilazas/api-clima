      var map;
      var coords = {
        'stgo' : {lat:-33.4724228,lng:-70.7699155},
        'conc' : {lat:-36.8261412,lng:-73.1030855},
        'vina' : {lat:-33.0053654,lng:-71.6002955}
      }
 
 
 
      function initMap() {
       
        map = new google.maps.Map(document.getElementById('map'), {
          center: coords['stgo'],
          zoom: 8
        });
 
        var marker = new google.maps.Marker({
              position: coords['stgo'],
              map: map,
              title: 'Hello World!'
        });
      }
 
 
      $('#city').on('change',function(event){
 
            var _coords = coords[$(this).val()]
           
            map.setCenter(_coords)
           
            var marker = new google.maps.Marker({
                  position: _coords,
                  map: map,
                  title: 'Hello World2!'
            });
      })