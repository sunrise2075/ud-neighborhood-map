function initKoViewModel4App(e){ko.applyBindings(new ViewModel(e))}var ViewModel=function(e){var r=this;r.searchText=ko.observable(""),r.markers=ko.observableArray(e),r.currentMarker=ko.observable(null),r.markersFiltered=ko.computed(function(){var e=this.searchText();return e?ko.utils.arrayFilter(this.markers(),function(r){var i=r.title,t=i.indexOf(e)>-1;return t?r.setVisible(!0):r.setVisible(!1),t}):(this.markers().forEach(function(e){e.setVisible(!0)}),this.markers())},r),r.dispose=function(){r.markersFiltered.dispose()},r.alertMarker=function(e){r.currentMarker(e),r.currentMarker().setAnimation(google.maps.Animation.DROP)}};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJpbml0S29WaWV3TW9kZWw0QXBwIiwibWFya2VycyIsImtvIiwiYXBwbHlCaW5kaW5ncyIsIlZpZXdNb2RlbCIsInNlbGYiLCJ0aGlzIiwic2VhcmNoVGV4dCIsIm9ic2VydmFibGUiLCJvYnNlcnZhYmxlQXJyYXkiLCJjdXJyZW50TWFya2VyIiwibWFya2Vyc0ZpbHRlcmVkIiwiY29tcHV0ZWQiLCJmaWx0ZXIiLCJ1dGlscyIsImFycmF5RmlsdGVyIiwibWFya2VyIiwidGl0bGUiLCJmbGFnIiwiaW5kZXhPZiIsInNldFZpc2libGUiLCJmb3JFYWNoIiwiZGlzcG9zZSIsImFsZXJ0TWFya2VyIiwic2V0QW5pbWF0aW9uIiwiZ29vZ2xlIiwibWFwcyIsIkFuaW1hdGlvbiIsIkRST1AiXSwibWFwcGluZ3MiOiJBQStEQSxRQUFBQSxxQkFBQUMsR0FDQUMsR0FBQUMsY0FBQSxHQUFBQyxXQUFBSCxJQTVEQSxHQUFBRyxXQUFBLFNBQUFILEdBSUEsR0FBQUksR0FBQUMsSUFHQUQsR0FBQUUsV0FBQUwsR0FBQU0sV0FBQSxJQUdBSCxFQUFBSixRQUFBQyxHQUFBTyxnQkFBQVIsR0FHQUksRUFBQUssY0FBQVIsR0FBQU0sV0FBQSxNQUlBSCxFQUFBTSxnQkFBQVQsR0FBQVUsU0FBQSxXQUNBLEdBQUFDLEdBQUFQLEtBQUFDLFlBQ0EsT0FBQU0sR0FPQVgsR0FBQVksTUFBQUMsWUFBQVQsS0FBQUwsVUFBQSxTQUFBZSxHQUNBLEdBQUFDLEdBQUFELEVBQUFDLE1BRUFDLEVBQUFELEVBQUFFLFFBQUFOLElBQUEsQ0FNQSxPQUxBSyxHQUNBRixFQUFBSSxZQUFBLEdBRUFKLEVBQUFJLFlBQUEsR0FFQUYsS0FkQVosS0FBQUwsVUFBQW9CLFFBQUEsU0FBQUwsR0FDQUEsRUFBQUksWUFBQSxLQUVBZCxLQUFBTCxZQWNBSSxHQUVBQSxFQUFBaUIsUUFBQSxXQUNBakIsRUFBQU0sZ0JBQUFXLFdBR0FqQixFQUFBa0IsWUFBQSxTQUFBUCxHQUVBWCxFQUFBSyxjQUFBTSxHQUdBWCxFQUFBSyxnQkFBQWMsYUFBQUMsT0FBQUMsS0FBQUMsVUFBQUMiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHN1bnJpc2UyMDc1IG9uIDIwMTcvMi8yNi5cclxuICovXHJcbi8vIEhlcmUncyBteSBkYXRhIG1vZGVsXHJcbnZhciBWaWV3TW9kZWwgPSBmdW5jdGlvbihtYXJrZXJzKSB7XHJcblxyXG4gICAgLy/mmoLlrZhWaWV3TW9kZWzlr7nosaFcclxuICAgIC8vY2FjaGUgdGhlIG9iamVjdCBvZiBWaWV3TW9kZWxcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAvL2JpbmQgdGhlIHRleHQgaW5wdXQgZmllbGQgb24gaW5kZXguaHRtbFxyXG4gICAgc2VsZi5zZWFyY2hUZXh0ID0ga28ub2JzZXJ2YWJsZShcIlwiKTtcclxuXHJcbiAgICAvL2NvbnN0cnVjdCBhIGtub2Nrb3V0IG9ic2VydmFibGUgYXJyYXkgZm9yIGZ1bGwgbWFya2VycyBsaXN0XHJcbiAgICBzZWxmLm1hcmtlcnMgICAgID0gIGtvLm9ic2VydmFibGVBcnJheShtYXJrZXJzKTtcclxuXHJcbiAgICAvL3VzZWQgdG8gcmVjb3JkIHRoZSBsYXN0bHktY2xpY2tlZCBsaXN0IGl0ZW0gb2YgIGxlZnQgdW5vcmRlcmVkIGxpc3RcclxuICAgIHNlbGYuY3VycmVudE1hcmtlciA9IGtvLm9ic2VydmFibGUobnVsbCk7XHJcblxyXG4gICAgLy9maWx0ZXIgdGhlIGl0ZW1zIHdpdGggdGhlIHNlYXJjaCB0ZXh0XHJcbiAgICAvL1JlZu+8mmh0dHA6Ly93d3cua25vY2ttZW91dC5uZXQvMjAxMS8wNC91dGlsaXR5LWZ1bmN0aW9ucy1pbi1rbm9ja291dGpzLmh0bWxcclxuICAgIHNlbGYubWFya2Vyc0ZpbHRlcmVkID0ga28uY29tcHV0ZWQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGZpbHRlciA9IHRoaXMuc2VhcmNoVGV4dCgpO1xyXG4gICAgICAgIGlmICghZmlsdGVyKSB7XHJcbiAgICAgICAgICAgIC8vc2V0IGFsbCB0aGUgbWFya2VycyB0byBiZSB2aXNpYmxlXHJcbiAgICAgICAgICAgIHRoaXMubWFya2VycygpLmZvckVhY2goZnVuY3Rpb24obWFya2VyKXtcclxuICAgICAgICAgICAgICAgIG1hcmtlci5zZXRWaXNpYmxlKHRydWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFya2VycygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBrby51dGlscy5hcnJheUZpbHRlcih0aGlzLm1hcmtlcnMoKSwgZnVuY3Rpb24obWFya2VyKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGl0bGUgPSBtYXJrZXIudGl0bGU7XHJcbiAgICAgICAgICAgICAgICAvL3NlZSB3aGV0aGVyIGN1cnJlbnQgbWFya2VyIHNob3VsZCBiZSByZXRhaW5lZCBvbiBtYXBcclxuICAgICAgICAgICAgICAgIHZhciBmbGFnID0gKHRpdGxlLmluZGV4T2YoZmlsdGVyKSA+IC0xKTtcclxuICAgICAgICAgICAgICAgIGlmKGZsYWcpe1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmtlci5zZXRWaXNpYmxlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFya2VyLnNldFZpc2libGUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZsYWc7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sIHNlbGYpO1xyXG5cclxuICAgIHNlbGYuZGlzcG9zZSA9IGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIHNlbGYubWFya2Vyc0ZpbHRlcmVkLmRpc3Bvc2UoKTtcclxuICAgIH07XHJcblxyXG4gICAgc2VsZi5hbGVydE1hcmtlciA9IGZ1bmN0aW9uKG1hcmtlcil7XHJcbiAgICAgICAgLy9zZXQgdmFsdWUgb2YgdGhlIGN1cnJlbnQgbWFwIG1hcmtlclxyXG4gICAgICAgIHNlbGYuY3VycmVudE1hcmtlcihtYXJrZXIpO1xyXG4gICAgICAgIC8vIGFkZCBhbmltYXRpb24gb24gdGhlIG1hcmtlclxyXG4gICAgICAgIC8vIHRoZSBtYXJrZXIgc2hvdWxkIGJlIGRyb3BwZWQgb250byB0aGUgY29ycmVzcG9uZGluZyBsb2NhdGlvblxyXG4gICAgICAgIHNlbGYuY3VycmVudE1hcmtlcigpLnNldEFuaW1hdGlvbihnb29nbGUubWFwcy5BbmltYXRpb24uRFJPUCk7XHJcbiAgICB9O1xyXG5cclxufTtcclxuXHJcbi8qXHJcbiogSSBuZWVkIHRvIGluaXRpYWxpc2UgaW5kZXguaHRtbFxyXG4qIGFmdGVyIHRoZSBnb29nbGUgbWFwIGlzIGxvYWRlZO+8jFxyXG4qIFRoaXMgbWFrZXMgS25vY2tvdXQgZ2V0IHRvIHdvcmtcclxuKiAqL1xyXG5mdW5jdGlvbiBpbml0S29WaWV3TW9kZWw0QXBwKG1hcmtlcnMpe1xyXG4gICAga28uYXBwbHlCaW5kaW5ncyhuZXcgVmlld01vZGVsKG1hcmtlcnMpKTtcclxufVxyXG4iXX0=
