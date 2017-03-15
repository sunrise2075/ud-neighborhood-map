function initMap(){map=new BMap.Map("map-canvas"),localSearch4Map=new BMap.LocalSearch(map,{renderOptions:{map:map}}),map.addControl(new BMap.NavigationControl),map.addControl(new BMap.NavigationControl),map.addControl(new BMap.ScaleControl),map.addControl(new BMap.OverviewMapControl),map.addControl(new BMap.MapTypeControl),map.setCurrentCity(currentCity),map.enableScrollWheelZoom(),map.enableKeyboard();var e=new BMap.Point(center.location.lng,center.location.lat);map.centerAndZoom(e,INIT_ZOOM_NUM),window.setTimeout(function(){map.panTo(e)},2e3);var o=0;geoLocations.forEach(function(e){var t=new BMap.Point(e.location.lng,e.location.lat),n=new BMap.Icon(e.icon,new BMap.Size(40,50)),a=new BMap.Marker(t,{title:e.title,icon:n});a.enableDragging(),a.addEventListener("click",function(e){openInfoWindow(a)}),a.setAnimation(BMAP_ANIMATION_DROP),markers.push(a),o++})}function openInfoWindow(e,o,t){var n={width:250,height:100,title:e.z.title};infoWindow=new BMap.InfoWindow("World",n),map.openInfoWindow(infoWindow,e.z.point)}function showLocationDetail(e){var o="https://maps.googleapis.com/maps/api/geocode/json?latlng="+e.position.lat()+","+e.position.lng()+"&key="+MY_API_KEY;$.ajax({url:o}).done(function(e,o,t){console.log(e);var n="";if("OK"===e.status){var a=e.results[0].place_id;n+="<div>地址ID:"+a+"</div>";var i=e.results[0].formatted_address;n+="<div>详情:"+i+"</div>";var l=e.results[0].geometry;n+="<div>类型:"+l.location_type+"</div>",n+="<div>纬度:"+l.location.lat+"</div>",n+="<div>经度:"+l.location.lng+"</div>",infoWindow.setContent(n)}}).fail(function(e,o,t){console.log("textStatus:"+o+", errorThrown:"+t)}).always(function(e,o,t){console.log("ajax request to foursquare is completed, textStatus:"+o)})}function loadCoffeeShopInfo(e){coffeeShopMarkers.forEach(function(e){e.setMap(null)}),coffeeShopMarkers.length=0;var o="XBEVRWM1JGYOB2WS5LMPM35BJZFAANOTAPEEGNNHQ52BDOXV",t="P1XBXTSAGOKAWMGYIMHOALG1NSBPOJYVZLUAD5RSQEGJ3MN5",n="https://api.foursquare.com/v2/venues/explore?",a="ll="+e.position.lat()+"%2C"+e.position.lng()+"&section=coffee&limit=10&novelty=new",i="&client_id="+o+"&client_secret="+t+"&v=20170308",l=n+a+i;$.ajax({url:l}).done(function(e,o,t){var n=e.response.groups[0].items;n.forEach(function(e){var o=e.venue,t=new google.maps.Marker({position:new google.maps.LatLng(o.location.lat,o.location.lng),map:map,title:o.name,icon:{url:"./dist/images/coffee-n-tea.png"}});t.addListener("click",function(){t.setAnimation(4),openInfoWindow(t)}),coffeeShopMarkers.push(t)})}).fail(function(e,o,t){console.log("textStatus:"+o+", errorThrown:"+t)}).always(function(e,o,t){console.log("ajax request to foursquare is completed, textStatus:"+o)})}function zoomIn2Marker(e){map.centerAndZoom(e.z.point,DETAIL_ZOOM_NUM)}function zoomOut2InitStatus(){map.setCenter(center.location),map.setZoom(INIT_ZOOM_NUM)}function searchPlaces(e,o){}var styles=[{featureType:"water",stylers:[{color:"#19a0d8"}]},{featureType:"administrative",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"},{weight:6}]},{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#e85113"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#efe9e4"},{lightness:-40}]},{featureType:"transit.station",stylers:[{weight:9},{hue:"#e85113"}]},{featureType:"road.highway",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{lightness:100}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{lightness:-100}]},{featureType:"poi",elementType:"geometry",stylers:[{visibility:"on"},{color:"#f0e4d3"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#efe9e4"},{lightness:-25}]}],currentCity="深圳",map=null,localSearch4Map=null,markers=[],MY_API_KEY="HW1hgQNz18TYRRn7BjN6BOMALz6h5G1C",infoWindow=null,INIT_ZOOM_NUM=11,DETAIL_ZOOM_NUM=14;initMap();var coffeeShopMarkers=[];
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC52aWV3LmpzIl0sIm5hbWVzIjpbImluaXRNYXAiLCJtYXAiLCJCTWFwIiwiTWFwIiwibG9jYWxTZWFyY2g0TWFwIiwiTG9jYWxTZWFyY2giLCJyZW5kZXJPcHRpb25zIiwiYWRkQ29udHJvbCIsIk5hdmlnYXRpb25Db250cm9sIiwiU2NhbGVDb250cm9sIiwiT3ZlcnZpZXdNYXBDb250cm9sIiwiTWFwVHlwZUNvbnRyb2wiLCJzZXRDdXJyZW50Q2l0eSIsImN1cnJlbnRDaXR5IiwiZW5hYmxlU2Nyb2xsV2hlZWxab29tIiwiZW5hYmxlS2V5Ym9hcmQiLCJwb2ludCIsIlBvaW50IiwiY2VudGVyIiwibG9jYXRpb24iLCJsbmciLCJsYXQiLCJjZW50ZXJBbmRab29tIiwiSU5JVF9aT09NX05VTSIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJwYW5UbyIsImluZGV4IiwiZ2VvTG9jYXRpb25zIiwiZm9yRWFjaCIsImxvYyIsIm15SWNvbiIsIkljb24iLCJpY29uIiwiU2l6ZSIsIm1hcmtlciIsIk1hcmtlciIsInRpdGxlIiwiZW5hYmxlRHJhZ2dpbmciLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsIm9wZW5JbmZvV2luZG93Iiwic2V0QW5pbWF0aW9uIiwiQk1BUF9BTklNQVRJT05fRFJPUCIsIm1hcmtlcnMiLCJwdXNoIiwiY29udGVudCIsIm9wdHMiLCJ3aWR0aCIsImhlaWdodCIsInoiLCJpbmZvV2luZG93IiwiSW5mb1dpbmRvdyIsInNob3dMb2NhdGlvbkRldGFpbCIsInVybCIsInBvc2l0aW9uIiwiTVlfQVBJX0tFWSIsIiQiLCJhamF4IiwiZG9uZSIsImRhdGEiLCJ0ZXh0U3RhdHVzIiwianFYaHIiLCJjb25zb2xlIiwibG9nIiwiZGV0YWlsU3RyaW5nIiwic3RhdHVzIiwicGxhY2VfaWQiLCJyZXN1bHRzIiwiZm9ybWF0dGVkX2FkZHJlc3MiLCJnZW9tZXRyeSIsImxvY2F0aW9uX3R5cGUiLCJzZXRDb250ZW50IiwiZmFpbCIsImVycm9yVGhyb3duIiwiYWx3YXlzIiwianFYSFJPckRhdGEiLCJqcVhIUk9yRXJyb3JUaHJvd24iLCJsb2FkQ29mZmVlU2hvcEluZm8iLCJjb2ZmZWVTaG9wTWFya2VycyIsImNvZmZlZUJhck1hcmtlciIsInNldE1hcCIsImxlbmd0aCIsImNsaWVudElkIiwiY2xpZW50U2VjcmV0IiwiYmFzZVVybCIsInF1ZXJ5UGFyYW1zIiwidXNlckluZm8iLCJpdGVtcyIsInJlc3BvbnNlIiwiZ3JvdXBzIiwiaXRlbSIsInZlbnVlIiwiZ29vZ2xlIiwibWFwcyIsIkxhdExuZyIsIm5hbWUiLCJhZGRMaXN0ZW5lciIsInpvb21JbjJNYXJrZXIiLCJERVRBSUxfWk9PTV9OVU0iLCJ6b29tT3V0MkluaXRTdGF0dXMiLCJzZXRDZW50ZXIiLCJzZXRab29tIiwic2VhcmNoUGxhY2VzIiwia2V5V29yZHMiLCJzdHlsZXMiLCJmZWF0dXJlVHlwZSIsInN0eWxlcnMiLCJjb2xvciIsImVsZW1lbnRUeXBlIiwid2VpZ2h0IiwibGlnaHRuZXNzIiwiaHVlIiwidmlzaWJpbGl0eSJdLCJtYXBwaW5ncyI6IkFBMkZBLFFBQUFBLFdBRUFDLElBQUEsR0FBQUMsTUFBQUMsSUFBQSxjQUVBQyxnQkFBQSxHQUFBRixNQUFBRyxZQUFBSixLQUNBSyxlQUFBTCxJQUFBQSxPQUdBQSxJQUFBTSxXQUFBLEdBQUFMLE1BQUFNLG1CQUNBUCxJQUFBTSxXQUFBLEdBQUFMLE1BQUFNLG1CQUNBUCxJQUFBTSxXQUFBLEdBQUFMLE1BQUFPLGNBQ0FSLElBQUFNLFdBQUEsR0FBQUwsTUFBQVEsb0JBQ0FULElBQUFNLFdBQUEsR0FBQUwsTUFBQVMsZ0JBQ0FWLElBQUFXLGVBQUFDLGFBQ0FaLElBQUFhLHdCQUNBYixJQUFBYyxnQkFHQSxJQUFBQyxHQUFBLEdBQUFkLE1BQUFlLE1BQUFDLE9BQUFDLFNBQUFDLElBQUFGLE9BQUFDLFNBQUFFLElBQ0FwQixLQUFBcUIsY0FBQU4sRUFBQU8sZUFDQUMsT0FBQUMsV0FBQSxXQUNBeEIsSUFBQXlCLE1BQUFWLElBQ0EsSUFN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LEdBQ0FkLFFBQUFDLElBQUEsdURBQUFILEtBU0EsUUFBQXFDLGVBQUEvRCxHQUNBbEMsSUFBQXFCLGNBQUFhLEVBQUFlLEVBQUFsQyxNQUFBbUYsaUJBUUEsUUFBQUMsc0JBQ0FuRyxJQUFBb0csVUFBQW5GLE9BQUFDLFVBQ0FsQixJQUFBcUcsUUFBQS9FLGVBSUEsUUFBQWdGLGNBQUFwRSxFQUFBcUUsSUF6U0EsR0FBQUMsVUFFQUMsWUFBQSxRQUNBQyxVQUNBQyxNQUFBLGNBR0FGLFlBQUEsaUJBQ0FHLFlBQUEscUJBQ0FGLFVBQ0FDLE1BQUEsWUFDQUUsT0FBQSxNQUdBSixZQUFBLGlCQUNBRyxZQUFBLG1CQUNBRixVQUNBQyxNQUFBLGNBR0FGLFlBQUEsZUFDQUcsWUFBQSxrQkFDQUYsVUFDQUMsTUFBQSxZQUNBRyxXQUFBLE9BR0FMLFlBQUEsa0JBQ0FDLFVBQ0FHLE9BQUEsSUFDQUUsSUFBQSxjQUdBTixZQUFBLGVBQ0FHLFlBQUEsY0FDQUYsVUFDQU0sV0FBQSxVQUdBUCxZQUFBLFFBQ0FHLFlBQUEscUJBQ0FGLFVBQ0FJLFVBQUEsUUFHQUwsWUFBQSxRQUNBRyxZQUFBLG1CQUNBRixVQUNBSSxXQUFBLFFBR0FMLFlBQUEsTUFDQUcsWUFBQSxXQUNBRixVQUNBTSxXQUFBLE9BQ0FMLE1BQUEsY0FHQUYsWUFBQSxlQUNBRyxZQUFBLGdCQUNBRixVQUNBQyxNQUFBLFlBQ0FHLFdBQUEsT0FNQWxHLFlBQUEsS0FHQVosSUFBQSxLQUVBRyxnQkFBQSxLQUVBd0MsV0FHQVksV0FBQSxtQ0FHQUwsV0FBQSxLQUVBNUIsY0FBQSxHQUNBNEUsZ0JBQUEsRUFzREFuRyxVQTBFQSxJQUFBK0UiLCJmaWxlIjoidmlldy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBzdW5yaXNlMjA3NSBvbiAyMDE3LzIvMjYuXHJcbiAqL1xyXG4vLyBDcmVhdGUgYSBzdHlsZXMgYXJyYXkgdG8gdXNlIHdpdGggdGhlIG1hcC5cclxudmFyIHN0eWxlcyA9IFtcclxuICAgIHtcclxuICAgICAgICBmZWF0dXJlVHlwZTogJ3dhdGVyJyxcclxuICAgICAgICBzdHlsZXJzOiBbXHJcbiAgICAgICAgICAgIHsgY29sb3I6ICcjMTlhMGQ4JyB9XHJcbiAgICAgICAgXVxyXG4gICAgfSx7XHJcbiAgICAgICAgZmVhdHVyZVR5cGU6ICdhZG1pbmlzdHJhdGl2ZScsXHJcbiAgICAgICAgZWxlbWVudFR5cGU6ICdsYWJlbHMudGV4dC5zdHJva2UnLFxyXG4gICAgICAgIHN0eWxlcnM6IFtcclxuICAgICAgICAgICAgeyBjb2xvcjogJyNmZmZmZmYnIH0sXHJcbiAgICAgICAgICAgIHsgd2VpZ2h0OiA2IH1cclxuICAgICAgICBdXHJcbiAgICB9LHtcclxuICAgICAgICBmZWF0dXJlVHlwZTogJ2FkbWluaXN0cmF0aXZlJyxcclxuICAgICAgICBlbGVtZW50VHlwZTogJ2xhYmVscy50ZXh0LmZpbGwnLFxyXG4gICAgICAgIHN0eWxlcnM6IFtcclxuICAgICAgICAgICAgeyBjb2xvcjogJyNlODUxMTMnIH1cclxuICAgICAgICBdXHJcbiAgICB9LHtcclxuICAgICAgICBmZWF0dXJlVHlwZTogJ3JvYWQuaGlnaHdheScsXHJcbiAgICAgICAgZWxlbWVudFR5cGU6ICdnZW9tZXRyeS5zdHJva2UnLFxyXG4gICAgICAgIHN0eWxlcnM6IFtcclxuICAgICAgICAgICAgeyBjb2xvcjogJyNlZmU5ZTQnIH0sXHJcbiAgICAgICAgICAgIHsgbGlnaHRuZXNzOiAtNDAgfVxyXG4gICAgICAgIF1cclxuICAgIH0se1xyXG4gICAgICAgIGZlYXR1cmVUeXBlOiAndHJhbnNpdC5zdGF0aW9uJyxcclxuICAgICAgICBzdHlsZXJzOiBbXHJcbiAgICAgICAgICAgIHsgd2VpZ2h0OiA5IH0sXHJcbiAgICAgICAgICAgIHsgaHVlOiAnI2U4NTExMycgfVxyXG4gICAgICAgIF1cclxuICAgIH0se1xyXG4gICAgICAgIGZlYXR1cmVUeXBlOiAncm9hZC5oaWdod2F5JyxcclxuICAgICAgICBlbGVtZW50VHlwZTogJ2xhYmVscy5pY29uJyxcclxuICAgICAgICBzdHlsZXJzOiBbXHJcbiAgICAgICAgICAgIHsgdmlzaWJpbGl0eTogJ29mZicgfVxyXG4gICAgICAgIF1cclxuICAgIH0se1xyXG4gICAgICAgIGZlYXR1cmVUeXBlOiAnd2F0ZXInLFxyXG4gICAgICAgIGVsZW1lbnRUeXBlOiAnbGFiZWxzLnRleHQuc3Ryb2tlJyxcclxuICAgICAgICBzdHlsZXJzOiBbXHJcbiAgICAgICAgICAgIHsgbGlnaHRuZXNzOiAxMDAgfVxyXG4gICAgICAgIF1cclxuICAgIH0se1xyXG4gICAgICAgIGZlYXR1cmVUeXBlOiAnd2F0ZXInLFxyXG4gICAgICAgIGVsZW1lbnRUeXBlOiAnbGFiZWxzLnRleHQuZmlsbCcsXHJcbiAgICAgICAgc3R5bGVyczogW1xyXG4gICAgICAgICAgICB7IGxpZ2h0bmVzczogLTEwMCB9XHJcbiAgICAgICAgXVxyXG4gICAgfSx7XHJcbiAgICAgICAgZmVhdHVyZVR5cGU6ICdwb2knLFxyXG4gICAgICAgIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnknLFxyXG4gICAgICAgIHN0eWxlcnM6IFtcclxuICAgICAgICAgICAgeyB2aXNpYmlsaXR5OiAnb24nIH0sXHJcbiAgICAgICAgICAgIHsgY29sb3I6ICcjZjBlNGQzJyB9XHJcbiAgICAgICAgXVxyXG4gICAgfSx7XHJcbiAgICAgICAgZmVhdHVyZVR5cGU6ICdyb2FkLmhpZ2h3YXknLFxyXG4gICAgICAgIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnkuZmlsbCcsXHJcbiAgICAgICAgc3R5bGVyczogW1xyXG4gICAgICAgICAgICB7IGNvbG9yOiAnI2VmZTllNCcgfSxcclxuICAgICAgICAgICAgeyBsaWdodG5lc3M6IC0yNSB9XHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG5dO1xyXG5cclxuLy9jdXJyZW50IGNpdHkgZ29yIEJhaUR1IG1hcFxyXG52YXIgY3VycmVudENpdHkgPSBcIua3seWcs1wiO1xyXG5cclxuLy9jYWNoZSBnb29nbGUgbWFwIG9iamVjdCBhcyBnbG9iYWwgdmFyaWFibGVcclxudmFyIG1hcCA9IG51bGw7XHJcblxyXG52YXIgbG9jYWxTZWFyY2g0TWFwID0gbnVsbDtcclxuXHJcbnZhciBtYXJrZXJzID0gW107XHJcblxyXG4vLyBjYWNoZSBteSBnb29nbGUgbWFwIGFwaSBrZXlcclxudmFyIE1ZX0FQSV9LRVkgPSBcIkhXMWhnUU56MThUWVJSbjdCak42Qk9NQUx6Nmg1RzFDXCI7XHJcblxyXG4vL2NhY2hlIGluZm9XaW5kb3cgb2JqZWN0IGFzIGdsb2JhbCB2YXJpYWJsZVxyXG52YXIgaW5mb1dpbmRvdyA9IG51bGw7XHJcblxyXG52YXIgSU5JVF9aT09NX05VTSA9IDExO1xyXG52YXIgREVUQUlMX1pPT01fTlVNID0gMTQ7XHJcblxyXG4vL2dvb2dsZSBtYXAgQVBJIGNhbGxiYWNrIGZ1bmN0aW9uXHJcbmZ1bmN0aW9uIGluaXRNYXAoKXtcclxuXHJcbiAgICBtYXAgPSBuZXcgQk1hcC5NYXAoXCJtYXAtY2FudmFzXCIpOyAvLyDliJvlu7rlnLDlm77lrp7kvotcclxuICAgIC8v5aKe5Yqg5Zyw5Zu+5pCc57Si5Yqf6IO9XHJcbiAgICBsb2NhbFNlYXJjaDRNYXAgPSBuZXcgQk1hcC5Mb2NhbFNlYXJjaChtYXAsIHtcclxuICAgICAgICByZW5kZXJPcHRpb25zOnttYXA6IG1hcH1cclxuICAgIH0pO1xyXG4gICAgLy8g57u05Zyw5Zu+5aKe5Yqg5o6n5Yi257uE5Lu2XHJcbiAgICBtYXAuYWRkQ29udHJvbChuZXcgQk1hcC5OYXZpZ2F0aW9uQ29udHJvbCgpKTtcclxuICAgIG1hcC5hZGRDb250cm9sKG5ldyBCTWFwLk5hdmlnYXRpb25Db250cm9sKCkpO1xyXG4gICAgbWFwLmFkZENvbnRyb2wobmV3IEJNYXAuU2NhbGVDb250cm9sKCkpO1xyXG4gICAgbWFwLmFkZENvbnRyb2wobmV3IEJNYXAuT3ZlcnZpZXdNYXBDb250cm9sKCkpO1xyXG4gICAgbWFwLmFkZENvbnRyb2wobmV3IEJNYXAuTWFwVHlwZUNvbnRyb2woKSk7XHJcbiAgICBtYXAuc2V0Q3VycmVudENpdHkoY3VycmVudENpdHkpOyAvLyDku4XlvZPorr7nva7ln47luILkv6Hmga/ml7bvvIxNYXBUeXBlQ29udHJvbOeahOWIh+aNouWKn+iDveaJjeiDveWPr+eUqFxyXG4gICAgbWFwLmVuYWJsZVNjcm9sbFdoZWVsWm9vbSgpOy8v5ZCv5Yqo6byg5qCH5rua6L2u57yp5pS+5Zyw5Zu+XHJcbiAgICBtYXAuZW5hYmxlS2V5Ym9hcmQoKTsvL+WQr+WKqOmUruebmOaTjeS9nOWcsOWbvlxyXG5cclxuICAgIC8vIOS9v+eUqOWcsOeCueeahOe7j+W6puWSjOe6rOW6pizliJvlu7rngrnlnZDmoIdcclxuICAgIHZhciBwb2ludCA9IG5ldyBCTWFwLlBvaW50KGNlbnRlci5sb2NhdGlvbi5sbmcsIGNlbnRlci5sb2NhdGlvbi5sYXQpO1xyXG4gICAgbWFwLmNlbnRlckFuZFpvb20ocG9pbnQsIElOSVRfWk9PTV9OVU0pO1xyXG4gICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICBtYXAucGFuVG8ocG9pbnQpO1xyXG4gICAgfSwgMjAwMCk7XHJcblxyXG4gICAgLy/lnKjlnLDlm77kuIrov73liqDlm77moIdcclxuICAgIC8vIHZhciBtYXJrZXIgPSBuZXcgQk1hcC5NYXJrZXIocG9pbnQpO1xyXG4gICAgLy8gbWFwLmFkZE92ZXJsYXkobWFya2VyKTtcclxuXHJcbiAgICB2YXIgaW5kZXggPSAwO1xyXG4gICAgZ2VvTG9jYXRpb25zLmZvckVhY2goZnVuY3Rpb24obG9jKXtcclxuICAgICAgICAvLyDlkJHlnLDlm77mt7vliqDmoIfms6hcclxuICAgICAgICB2YXIgcG9pbnQgPSBuZXcgQk1hcC5Qb2ludChsb2MubG9jYXRpb24ubG5nLFxyXG4gICAgICAgICAgICBsb2MubG9jYXRpb24ubGF0KTtcclxuICAgICAgICAvLyDliJvlu7rmoIfms6jlr7nosaHlubbmt7vliqDliLDlnLDlm75cclxuICAgICAgICB2YXIgbXlJY29uID0gbmV3IEJNYXAuSWNvbihsb2MuaWNvbiwgbmV3IEJNYXAuU2l6ZSg0MCwgNTApKTtcclxuICAgICAgICB2YXIgbWFya2VyID0gbmV3IEJNYXAuTWFya2VyKHBvaW50LCB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBsb2MudGl0bGUsXHJcbiAgICAgICAgICAgIGljb246IG15SWNvblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG1hcmtlci5lbmFibGVEcmFnZ2luZygpO1xyXG4gICAgICAgIG1hcmtlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgIG9wZW5JbmZvV2luZG93KG1hcmtlcik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBtYXJrZXIuc2V0QW5pbWF0aW9uKEJNQVBfQU5JTUFUSU9OX0RST1ApOy8v6Lez5Yqo55qE5Yqo55S7XHJcbiAgICAgICAgbWFya2Vycy5wdXNoKG1hcmtlcik7XHJcbiAgICAgICAgaW5kZXgrKztcclxuICAgIH0pO1xyXG5cclxuXHJcbn1cclxuXHJcbmluaXRNYXAoKTtcclxuXHJcbi8qXHJcbiogQGRlc2NyaXB0aW9uOiBvcGVuIGluZm8gd2luZG93IGZvclxyXG4qICAgICAgICAgICAgICB0aGUgZ2l2ZW4gZ29vZ2xlIG1hcCBtYXJrZXJcclxuKiBAcGFyYW0gIG1hcmtlciB0aGUgb2JqZWN0IG9mIG1hcmtlclxyXG4qIEBwYXJhbSB0aXRsZVxyXG4qIEBwYXJhbSBjb250ZW50XHJcbiogQHJldHVybiB2b2lkXHJcbiogKi9cclxuZnVuY3Rpb24gb3BlbkluZm9XaW5kb3cobWFya2VyLCB0aXRsZSwgY29udGVudCl7XHJcbiAgICAvL2NyZWF0ZSBhbiBpbmZvIHdpbmRvdyBvYmplY3RcclxuICAgIC8vb3Igc2V0IGNvbnRlbnQgb24gdGhlIGV4aXN0aW5nIGluZm8gd2luZG93XHJcbiAgICAvL3dlIG5lZWRuJ3QgY3JlYXRlIGluZm8gd2luZG93IG9iamVjdCByZXBlYXRlZGx5XHJcbiAgICB2YXIgb3B0cyA9IHtcclxuICAgICAgICB3aWR0aCA6IDI1MCwgICAgIC8vIOS/oeaBr+eql+WPo+WuveW6plxyXG4gICAgICAgIGhlaWdodDogMTAwLCAgICAgLy8g5L+h5oGv56qX5Y+j6auY5bqmXHJcbiAgICAgICAgdGl0bGUgOiBtYXJrZXIuei50aXRsZSAgLy8g5L+h5oGv56qX5Y+j5qCH6aKYXHJcbiAgICB9XHJcbiAgICBpbmZvV2luZG93ID0gbmV3IEJNYXAuSW5mb1dpbmRvdyhcIldvcmxkXCIsIG9wdHMpOyAgLy8g5Yib5bu65L+h5oGv56qX5Y+j5a+56LGhXHJcblxyXG4gICAgbWFwLm9wZW5JbmZvV2luZG93KGluZm9XaW5kb3csIG1hcmtlci56LnBvaW50KTsgICAgICAvLyDmiZPlvIDkv6Hmga/nqpflj6NcclxuXHJcblxyXG59XHJcblxyXG5cclxuLypcclxuICogQGRlc2NyaXB0aW9uOiBxdWVyeSBkZXRhaWxlZCBpbmZvcm1hdGlvblxyXG4gKiBmb3IgdGhlIGdpdmVuIG1hcmtlciBhbmQgc2V0IGNvbnRlbnQgZm9yXHJcbiAqIGN1cnJlbnQgaW5mbyB3aW5kb3dcclxuICogQHBhcmFtICBtYXJrZXIgdGhlIG9iamVjdCBvZiBtYXJrZXJcclxuICogQHJldHVybiB2b2lkXHJcbiogKi9cclxuZnVuY3Rpb24gc2hvd0xvY2F0aW9uRGV0YWlsKG1hcmtlcil7XHJcblxyXG4gICAgdmFyIHVybCA9IFwiaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2dlb2NvZGUvanNvbj9sYXRsbmc9XCIgK1xyXG4gICAgICAgIG1hcmtlci5wb3NpdGlvbi5sYXQoKSArXHJcbiAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgIG1hcmtlci5wb3NpdGlvbi5sbmcoKSArXHJcbiAgICAgICAgXCIma2V5PVwiICtcclxuICAgICAgICBNWV9BUElfS0VZO1xyXG5cclxuICAgIC8vbWFrZSBhamF4IHJlcXVlc3QgdG8gZm91cnNxdWFyZSBhcGlcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsIDogdXJsXHJcbiAgICAgICAgLy9kbyByZXNwb25zZSBzdWNjZXNzIGhhbmRsaW5nXHJcbiAgICB9KS5kb25lKGZ1bmN0aW9uKGRhdGEsIHRleHRTdGF0dXMsIGpxWGhyKXtcclxuICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgdmFyIGRldGFpbFN0cmluZyA9IFwiXCI7XHJcbiAgICAgICBpZihkYXRhLnN0YXR1cyA9PT0gXCJPS1wiKXtcclxuICAgICAgICAgICAgdmFyIHBsYWNlX2lkID0gZGF0YS5yZXN1bHRzWzBdLnBsYWNlX2lkO1xyXG4gICAgICAgICAgIGRldGFpbFN0cmluZyArPSBcIjxkaXY+5Zyw5Z2ASUQ6XCIgKyBwbGFjZV9pZCArIFwiPC9kaXY+XCI7XHJcblxyXG4gICAgICAgICAgIHZhciBmb3JtYXR0ZWRfYWRkcmVzcyA9IGRhdGEucmVzdWx0c1swXS5mb3JtYXR0ZWRfYWRkcmVzcztcclxuICAgICAgICAgICBkZXRhaWxTdHJpbmcgKz0gXCI8ZGl2PuivpuaDhTpcIiArIGZvcm1hdHRlZF9hZGRyZXNzICsgXCI8L2Rpdj5cIjtcclxuXHJcbiAgICAgICAgICAgdmFyIGdlb21ldHJ5ID0gZGF0YS5yZXN1bHRzWzBdLmdlb21ldHJ5O1xyXG4gICAgICAgICAgIGRldGFpbFN0cmluZyArPSBcIjxkaXY+57G75Z6LOlwiICsgZ2VvbWV0cnkubG9jYXRpb25fdHlwZSArIFwiPC9kaXY+XCI7XHJcbiAgICAgICAgICAgZGV0YWlsU3RyaW5nICs9IFwiPGRpdj7nuqzluqY6XCIgKyBnZW9tZXRyeS5sb2NhdGlvbi5sYXQgKyBcIjwvZGl2PlwiO1xyXG4gICAgICAgICAgIGRldGFpbFN0cmluZyArPSBcIjxkaXY+57uP5bqmOlwiICsgZ2VvbWV0cnkubG9jYXRpb24ubG5nICsgXCI8L2Rpdj5cIjtcclxuICAgICAgICAgICBpbmZvV2luZG93LnNldENvbnRlbnQoZGV0YWlsU3RyaW5nKTtcclxuICAgICAgIH1cclxuICAgICAgICAvL2RvIHJlc3BvbnNlIGVycm9yIGhhbmRsaW5nXHJcbiAgICB9KS5mYWlsKGZ1bmN0aW9uKGpxWGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bil7XHJcbiAgICAgICAgY29uc29sZS5sb2coIFwidGV4dFN0YXR1czpcIiArIHRleHRTdGF0dXMgKyBcIiwgZXJyb3JUaHJvd246XCIgK2Vycm9yVGhyb3duKTtcclxuICAgICAgICAvL2RvIGFqYXggbG9nZ2luZyBvbiB0aGUgYnJvd3NlciBjb25zb2xlXHJcbiAgICB9KS5hbHdheXMgKGZ1bmN0aW9uKGpxWEhST3JEYXRhLCB0ZXh0U3RhdHVzLCBqcVhIUk9yRXJyb3JUaHJvd24pIHtcclxuICAgICAgICBjb25zb2xlLmxvZyggXCJhamF4IHJlcXVlc3QgdG8gZm91cnNxdWFyZSBpcyBjb21wbGV0ZWQsIHRleHRTdGF0dXM6XCIgKyB0ZXh0U3RhdHVzKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuLy9hZGQgZ2xvYmFsIGFycmF5IGZvciBjb2ZmZWUgc2hvcCBtYXJrZXJzXHJcbnZhciBjb2ZmZWVTaG9wTWFya2VycyA9IFtdO1xyXG5cclxuLypcclxuKiBAZGVzY3JpcHRpb246IGxvYWQgY29mZmVlIHNob3AgaW5mb3JtYXRpb25cclxuKiAgICAgICAgICAgICAgIGJ5IGZvdXJzcXVhcmUgYXBpXHJcbiogQHBhcmFtIG1hcmtlcjogdGhlIGNsaWNrZWQgbWFya2VyIG9iamVjdFxyXG4qIEByZXR1cm4gdm9pZFxyXG4qICovXHJcbmZ1bmN0aW9uIGxvYWRDb2ZmZWVTaG9wSW5mbyhtYXJrZXIpe1xyXG4gICAgLy9jbGVhciBvbGQgbWFya2Vyc1xyXG4gICAgY29mZmVlU2hvcE1hcmtlcnMuZm9yRWFjaChmdW5jdGlvbihjb2ZmZWVCYXJNYXJrZXIpe1xyXG4gICAgICAgIGNvZmZlZUJhck1hcmtlci5zZXRNYXAobnVsbCk7XHJcbiAgICB9KTtcclxuICAgIC8vZ3JhbnQgcGVybWlzc2lvbiBvZiByZWN5Y2xpbmcgdGhlIG9sZC1mYXNoaW9uZWQgb2JqZWN0cyB0byBqcyBlbmdpbmVcclxuICAgIGNvZmZlZVNob3BNYXJrZXJzLmxlbmd0aCA9IDA7XHJcblxyXG4gICAgLypcclxuICAgICogbmVpZ2hib3Job29kLW1hcFxyXG4gICAgIEFwcCBJbmZvcm1hdGlvblxyXG4gICAgKiAqL1xyXG4gICAgdmFyIGNsaWVudElkID0gJ1hCRVZSV00xSkdZT0IyV1M1TE1QTTM1QkpaRkFBTk9UQVBFRUdOTkhRNTJCRE9YVic7XHJcbiAgICB2YXIgY2xpZW50U2VjcmV0ID0gJ1AxWEJYVFNBR09LQVdNR1lJTUhPQUxHMU5TQlBPSllWWkxVQUQ1UlNRRUdKM01ONSc7XHJcblxyXG4gICAgLypcclxuICAgICogY29uY2F0ZW5hdGUgdGhlIHJlcXVlc3QgdXJsIHN0cmluZ1xyXG4gICAgKiAqL1xyXG4gICAgdmFyIGJhc2VVcmwgPSBcImh0dHBzOi8vYXBpLmZvdXJzcXVhcmUuY29tL3YyL3ZlbnVlcy9leHBsb3JlP1wiO1xyXG4gICAgdmFyIHF1ZXJ5UGFyYW1zID0gXCJsbD1cIisgbWFya2VyLnBvc2l0aW9uLmxhdCgpICtcIiUyQ1wiKyBtYXJrZXIucG9zaXRpb24ubG5nKCkgK1wiJnNlY3Rpb249Y29mZmVlJmxpbWl0PTEwJm5vdmVsdHk9bmV3XCI7XHJcbiAgICB2YXIgdXNlckluZm8gPSAnJmNsaWVudF9pZD0nICsgY2xpZW50SWQgKyAnJmNsaWVudF9zZWNyZXQ9JyArIGNsaWVudFNlY3JldCArIFwiJnY9MjAxNzAzMDhcIjtcclxuICAgIHZhciB1cmwgPSBiYXNlVXJsICsgcXVlcnlQYXJhbXMgKyB1c2VySW5mbztcclxuXHJcbiAgICAvL21ha2UgYWpheCByZXF1ZXN0IHRvIGZvdXJzcXVhcmUgYXBpXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybCA6IHVybFxyXG4gICAgLy9kbyByZXNwb25zZSBzdWNjZXNzIGhhbmRsaW5nXHJcbiAgICB9KS5kb25lKGZ1bmN0aW9uKGRhdGEsIHRleHRTdGF0dXMsIGpxWGhyKXtcclxuICAgICAgICB2YXIgaXRlbXMgPSBkYXRhLnJlc3BvbnNlLmdyb3Vwc1swXS5pdGVtcztcclxuICAgICAgICBpdGVtcy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pe1xyXG4gICAgICAgICAgICAgICAgdmFyIHZlbnVlID0gaXRlbS52ZW51ZTtcclxuICAgICAgICAgICAgICAgIC8vIHBsYWNlIHRoZSBhIG1hcmtlciBvbiB0aGUgbWFwXHJcbiAgICAgICAgICAgICAgICB2YXIgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IG5ldyBnb29nbGUubWFwcy5MYXRMbmcodmVudWUubG9jYXRpb24ubGF0LHZlbnVlLmxvY2F0aW9uLmxuZyksXHJcbiAgICAgICAgICAgICAgICAgICAgbWFwOiBtYXAsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHZlbnVlLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogey8vXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCIuL2Rpc3QvaW1hZ2VzL2NvZmZlZS1uLXRlYS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgbWFya2VyLmFkZExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vaGF2ZSB0aGUgIG1hcmtlciBib3VuY2UgZm9yIGEgbGltaXRlZCB0aW1lc1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmtlci5zZXRBbmltYXRpb24oNCk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BlbkluZm9XaW5kb3cobWFya2VyKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY29mZmVlU2hvcE1hcmtlcnMucHVzaChtYXJrZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIC8vZG8gcmVzcG9uc2UgZXJyb3IgaGFuZGxpbmdcclxuICAgIH0pLmZhaWwoZnVuY3Rpb24oanFYaHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKXtcclxuICAgICAgICBjb25zb2xlLmxvZyggXCJ0ZXh0U3RhdHVzOlwiICsgdGV4dFN0YXR1cyArIFwiLCBlcnJvclRocm93bjpcIiArZXJyb3JUaHJvd24pO1xyXG4gICAgLy9kbyBhamF4IGxvZ2dpbmcgb24gdGhlIGJyb3dzZXIgY29uc29sZVxyXG4gICAgfSkuYWx3YXlzIChmdW5jdGlvbihqcVhIUk9yRGF0YSwgdGV4dFN0YXR1cywganFYSFJPckVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coIFwiYWpheCByZXF1ZXN0IHRvIGZvdXJzcXVhcmUgaXMgY29tcGxldGVkLCB0ZXh0U3RhdHVzOlwiICsgdGV4dFN0YXR1cyk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLypcclxuKiBAZGVzY3JpcHRpb246IHpvb20gaW4gYW5kIHNldCBjZW50ZXIgb2YgdGhlIG1hcFxyXG4qIEBwYXJhbSBtYXJrZXIgdGhlIGdpdmVuIG1hcmtlclxyXG4qIEByZXR1cm4gdm9pZFxyXG4qICovXHJcbmZ1bmN0aW9uIHpvb21JbjJNYXJrZXIobWFya2VyKXtcclxuICAgIG1hcC5jZW50ZXJBbmRab29tKG1hcmtlci56LnBvaW50LCBERVRBSUxfWk9PTV9OVU0pO1xyXG59XHJcblxyXG4vKlxyXG4gKiBAZGVzY3JpcHRpb246IHpvb20gb3V0IHRvIHRoZSBpbml0aWFsIHN0YXRlIG9mIGdvb2dsZSBtYXBcclxuICogQHBhcmFtIG5vbmVcclxuICogQHJldHVybiB2b2lkXHJcbiAqICovXHJcbmZ1bmN0aW9uIHpvb21PdXQySW5pdFN0YXR1cygpe1xyXG4gICAgbWFwLnNldENlbnRlcihjZW50ZXIubG9jYXRpb24pO1xyXG4gICAgbWFwLnNldFpvb20oSU5JVF9aT09NX05VTSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBzZWFyY2hQbGFjZXMobWFya2VyLCBrZXlXb3Jkcyl7XHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG4iXX0=
