function initKoViewModel4IndexPage(e){ko.applyBindings(new ViewModel(e))}var ViewModel=function(e){var i=this;i.searchText=ko.observable(""),i.locations=ko.observableArray(e),i.locationsFiltered=ko.computed(function(){var e=this.searchText();return e?ko.utils.arrayFilter(this.locations(),function(i){var o=i.title,t=o.indexOf(e)>-1;return t?i.setVisible(!0):i.setVisible(!1),t}):this.locations()},i),i.dispose=function(){i.locationsFiltered.dispose()}};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJpbml0S29WaWV3TW9kZWw0SW5kZXhQYWdlIiwibWFya2VycyIsImtvIiwiYXBwbHlCaW5kaW5ncyIsIlZpZXdNb2RlbCIsInNlbGYiLCJ0aGlzIiwic2VhcmNoVGV4dCIsIm9ic2VydmFibGUiLCJsb2NhdGlvbnMiLCJvYnNlcnZhYmxlQXJyYXkiLCJsb2NhdGlvbnNGaWx0ZXJlZCIsImNvbXB1dGVkIiwiZmlsdGVyIiwidXRpbHMiLCJhcnJheUZpbHRlciIsIml0ZW0iLCJ0aXRsZSIsImZsYWciLCJpbmRleE9mIiwic2V0VmlzaWJsZSIsImRpc3Bvc2UiXSwibWFwcGluZ3MiOiJBQThDQSxRQUFBQSwyQkFBQUMsR0FDQUMsR0FBQUMsY0FBQSxHQUFBQyxXQUFBSCxJQTNDQSxHQUFBRyxXQUFBLFNBQUFILEdBSUEsR0FBQUksR0FBQUMsSUFFQUQsR0FBQUUsV0FBQUwsR0FBQU0sV0FBQSxJQUVBSCxFQUFBSSxVQUFBUCxHQUFBUSxnQkFBQVQsR0FHQUksRUFBQU0sa0JBQUFULEdBQUFVLFNBQUEsV0FDQSxHQUFBQyxHQUFBUCxLQUFBQyxZQUNBLE9BQUFNLEdBR0FYLEdBQUFZLE1BQUFDLFlBQUFULEtBQUFHLFlBQUEsU0FBQU8sR0FDQSxHQUFBQyxHQUFBRCxFQUFBQyxNQUVBQyxFQUFBRCxFQUFBRSxRQUFBTixJQUFBLENBTUEsT0FMQUssR0FDQUYsRUFBQUksWUFBQSxHQUVBSixFQUFBSSxZQUFBLEdBRUFGLElBWEFaLEtBQUFHLGFBY0FKLEdBR0FBLEVBQUFnQixRQUFBLFdBQ0FoQixFQUFBTSxrQkFBQVUiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHN1bnJpc2UyMDc1IG9uIDIwMTcvMi8yNi5cclxuICovXHJcbi8vIEhlcmUncyBteSBkYXRhIG1vZGVsXHJcbnZhciBWaWV3TW9kZWwgPSBmdW5jdGlvbihtYXJrZXJzKSB7XHJcblxyXG4gICAgLy/mmoLlrZhWaWV3TW9kZWzlr7nosaFcclxuICAgIC8vY2FjaGUgdGhlIG9iamVjdCBvZiBWaWV3TW9kZWxcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIC8vYmluZCB0aGUgdGV4dCBpbnB1dCBmaWVsZCBvbiBpbmRleC5odG1sXHJcbiAgICBzZWxmLnNlYXJjaFRleHQgPSBrby5vYnNlcnZhYmxlKFwiXCIpO1xyXG4gICAgLy9jb25zdHJ1Y3QgYSBrbm9ja291dCBvYnNlcnZhYmxlIGFycmF5IGZvciBmdWxsIGxvY2F0aW9ucyBsaXN0XHJcbiAgICBzZWxmLmxvY2F0aW9ucyAgICAgPSAga28ub2JzZXJ2YWJsZUFycmF5KG1hcmtlcnMpO1xyXG4gICAgLy9maWx0ZXIgdGhlIGl0ZW1zIHdpdGggdGhlIHNlYXJjaCB0ZXh0XHJcbiAgICAvL1JlZu+8mmh0dHA6Ly93d3cua25vY2ttZW91dC5uZXQvMjAxMS8wNC91dGlsaXR5LWZ1bmN0aW9ucy1pbi1rbm9ja291dGpzLmh0bWxcclxuICAgIHNlbGYubG9jYXRpb25zRmlsdGVyZWQgPSBrby5jb21wdXRlZChmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgZmlsdGVyID0gdGhpcy5zZWFyY2hUZXh0KCk7XHJcbiAgICAgICAgaWYgKCFmaWx0ZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9jYXRpb25zKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGtvLnV0aWxzLmFycmF5RmlsdGVyKHRoaXMubG9jYXRpb25zKCksIGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHZhciB0aXRsZSA9IGl0ZW0udGl0bGU7XHJcbiAgICAgICAgICAgICAgICAvL3NlZSB3aGV0aGVyIGN1cnJlbnQgbWFya2VyIHNob3VsZCBiZSByZXRhaW5lZCBvbiBtYXBcclxuICAgICAgICAgICAgICAgIHZhciBmbGFnID0gKHRpdGxlLmluZGV4T2YoZmlsdGVyKSA+IC0xKTtcclxuICAgICAgICAgICAgICAgIGlmKGZsYWcpe1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uc2V0VmlzaWJsZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmxhZztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgc2VsZik7XHJcblxyXG5cclxuICAgIHNlbGYuZGlzcG9zZSA9IGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIHNlbGYubG9jYXRpb25zRmlsdGVyZWQuZGlzcG9zZSgpO1xyXG4gICAgfTtcclxuXHJcbn07XHJcblxyXG4vKlxyXG4qIEkgbmVlZCBvdCBpbml0aWFsaXNlIGluZGV4Lmh0bWxcclxuKiBhZnRlciB0aGUgZ29vZ2xlIG1hcCBpcyBsb2FkZWTvvIxcclxuKiBUaGlzIG1ha2VzIEtub2Nrb3V0IGdldCB0byB3b3JrXHJcbiogKi9cclxuZnVuY3Rpb24gaW5pdEtvVmlld01vZGVsNEluZGV4UGFnZShtYXJrZXJzKXtcclxuICAgIGtvLmFwcGx5QmluZGluZ3MobmV3IFZpZXdNb2RlbChtYXJrZXJzKSk7XHJcbn1cclxuIl19
