function Location(o,i,t,n){this.title=o,this.location={lat:i,lng:t},this.icon=n}Location.prototype.toString=function(){var o="Location:[title]="+this.title+",[latitude]="+this.lat+",[longitude]="+this.lng+",[icon]="+this.icon;return o};var center=new Location("罗湖火车站",22.53796,114.123611,"./dist/images/train.png"),geoLocations=[];geoLocations.push(center),geoLocations.push(new Location("盐田三村洛阳牛肉汤馆",22.5873974299,114.2492887069,"./dist/images/restaurants.png")),geoLocations.push(new Location("布吉木棉湾新区",22.6078382425,114.1336685829,"./dist/images/community.png")),geoLocations.push(new Location("深圳市中心书城-图书馆",22.5465078091,114.0571807461,"./dist/images/books-media.png")),geoLocations.push(new Location("宝安F518时尚创意园",22.5679972163,113.8638327151,"./dist/images/education.png")),geoLocations.push(new Location("布吉荣超花园",22.5936225811,114.1191613209,"./dist/images/community.png")),geoLocations.push(new Location("龙岗区南联摩尔城",22.7226220179,114.2689040872,"./dist/images/community.png")),geoLocations.push(new Location("盐田区大梅沙海滨浴场",22.5927712953,114.3071665727,"./dist/images/entertainment.png")),geoLocations.push(new Location("深圳会展中心",22.5307046884,114.0608319529,"./dist/images/exhibitions.png")),geoLocations.push(new Location("惠州大亚湾德丰天麓",22.7386632649,114.5218435154,"./dist/images/real-estate.png")),geoLocations.push(new Location("南山科技园",22.5375611168,113.9489650818,"./dist/images/business.png")),geoLocations.push(new Location("783国珍健康生活馆",22.6069223601,114.1280916434,"./dist/images/retail-stores.png"));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvY2FsdGlvbi5tb2RlbC5qcyJdLCJuYW1lcyI6WyJMb2NhdGlvbiIsInRpdGxlIiwibGF0IiwibG5nIiwiaWNvbiIsInRoaXMiLCJsb2NhdGlvbiIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwicmVzdWx0IiwiY2VudGVyIiwiZ2VvTG9jYXRpb25zIiwicHVzaCJdLCJtYXBwaW5ncyI6IkFBV0EsUUFBQUEsVUFBQUMsRUFBQUMsRUFBQUMsRUFBQUMsR0FDQUMsS0FBQUosTUFBQUEsRUFDQUksS0FBQUMsVUFDQUosSUFBQUEsRUFDQUMsSUFBQUEsR0FFQUUsS0FBQUQsS0FBQUEsRUFHQUosU0FBQU8sVUFBQUMsU0FBQSxXQUNBLEdBQUFDLEdBQUEsb0JBQUFKLEtBQUFKLE1BQUEsZUFBQUksS0FBQUgsSUFDQSxnQkFBQUcsS0FBQUYsSUFBQSxXQUFBRSxLQUFBRCxJQUNBLE9BQUFLLEdBR0EsSUFBQUMsUUFBQSxHQUFBVixVQUFBLFFBQUEsU0FBQSxXQUFBLDJCQUVBVyxlQUNBQSxjQUFBQyxLQUFBRixRQUNBQyxhQUFBQyxLQUFBLEdBQUFaLFVBQUEsYUFBQSxjQUFBLGVBQUEsa0NBQ0FXLGFBQUFDLEtBQUEsR0FBQVosVUFBQSxVQUFBLGNBQUEsZUFBQSxnQ0FDQVcsYUFBQUMsS0FBQSxHQUFBWixVQUFBLGNBQUEsY0FBQSxlQUFBLGtDQUNBVyxhQUFBQyxLQUFBLEdBQUFaLFVBQUEsY0FBQSxjQUFBLGVBQUEsZ0NBQ0FXLGFBQUFDLEtBQUEsR0FBQVosVUFBQSxTQUFBLGNBQUEsZUFBQSxnQ0FDQVcsYUFBQUMsS0FBQSxHQUFBWixVQUFBLFdBQUEsY0FBQSxlQUFBLGdDQUNBVyxhQUFBQyxLQUFBLEdBQUFaLFVBQUEsYUFBQSxjQUFBLGVBQUEsb0NBQ0FXLGFBQUFDLEtBQUEsR0FBQVosVUFBQSxTQUFBLGNBQUEsZUFBQSxrQ0FDQVcsYUFBQUMsS0FBQSxHQUFBWixVQUFBLFlBQUEsY0FBQSxlQUFBLGtDQUNBVyxhQUFBQyxLQUFBLEdBQUFaLFVBQUEsUUFBQSxjQUFBLGVBQUEsK0JBQ0FXLGFBQUFDLEtBQUEsR0FBQVosVUFBQSxhQUFBLGNBQUEsZUFBQSIsImZpbGUiOiJtb2RlbC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBzdW5yaXNlMjA3NSBvbiAyMDE3LzIvMjYuXHJcbiAqL1xyXG4vKlxyXG4qIEBjb25zdHJ1Y3RvclxyXG4qIEBkZXNjcmlwdGlvbiA6IGNvbnN0cnVjdG9yIGZ1bmN0aW9uIHRvIGJ1aWxkIGdlby1sb2NhdGlvbiBvYmplY3QgZm9yIG15IE5laWdoYm9yaG9vZCBBcHBcclxuKiBAcGFyYW0ge3N0cmluZ30gdGl0bGUgOiB0aXRsZSBvZiB0aGUgbG9jYXRpb25cclxuKiBAcGFyYW0ge2xvbmd9IGxhdCAgIDogbGF0aXR1ZGUgb2YgY3VycmVudCBsb2NhdGlvblxyXG4qIEBwYXJhbSB7bG9uZ30gbG5nICAgOiBsb25naXR1ZGUgb2YgY3VycmVudCBsb2NhdGlvblxyXG4qIEBwYXJhbSB7Ym9vbGVhbn0gaXNDZW50ZXIgOiB3aGV0aGVyIGl0IGlzIHRoZSBjZW50ZXIgb2YgdGhlIG1hcFxyXG4qICovXHJcbmZ1bmN0aW9uIExvY2F0aW9uKHRpdGxlLCBsYXQsIGxuZyxpY29uKXtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMubG9jYXRpb24gPSB7XHJcbiAgICAgICAgbGF0OiBsYXQsXHJcbiAgICAgICAgbG5nOmxuZ1xyXG4gICAgfTtcclxuICAgIHRoaXMuaWNvbiA9IGljb247XHJcbn1cclxuXHJcbkxvY2F0aW9uLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCl7XHJcbiAgICB2YXIgcmVzdWx0ID0gXCJMb2NhdGlvbjpbdGl0bGVdPVwiICsgdGhpcy50aXRsZSArIFwiLFtsYXRpdHVkZV09XCIgKyB0aGlzLmxhdFxyXG4gICAgICAgICsgXCIsW2xvbmdpdHVkZV09XCIgKyB0aGlzLmxuZyArIFwiLFtpY29uXT1cIiArIHRoaXMuaWNvbjtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbnZhciBjZW50ZXIgPSBuZXcgTG9jYXRpb24oXCLnvZfmuZbngavovabnq5lcIiwgMjIuNTM3OTYwMDAwMCwgMTE0LjEyMzYxMTAwMDAsIFwiLi9kaXN0L2ltYWdlcy90cmFpbi5wbmdcIikgO1xyXG5cclxudmFyIGdlb0xvY2F0aW9ucyA9IFtdO1xyXG5nZW9Mb2NhdGlvbnMucHVzaChjZW50ZXIpO1xyXG5nZW9Mb2NhdGlvbnMucHVzaChuZXcgTG9jYXRpb24oXCLnm5DnlLDkuInmnZHmtJvpmLPniZvogonmsaTppoZcIiwyMi41ODczOTc0Mjk5LCAxMTQuMjQ5Mjg4NzA2OSwgXCIuL2Rpc3QvaW1hZ2VzL3Jlc3RhdXJhbnRzLnBuZ1wiKSk7XHJcbmdlb0xvY2F0aW9ucy5wdXNoKG5ldyBMb2NhdGlvbihcIuW4g+WQieacqOajiea5vuaWsOWMulwiLCAyMi42MDc4MzgyNDI1LCAxMTQuMTMzNjY4NTgyOSwgXCIuL2Rpc3QvaW1hZ2VzL2NvbW11bml0eS5wbmdcIikpO1xyXG5nZW9Mb2NhdGlvbnMucHVzaChuZXcgTG9jYXRpb24oXCLmt7HlnLPluILkuK3lv4Pkuabln44t5Zu+5Lmm6aaGXCIsIDIyLjU0NjUwNzgwOTEsIDExNC4wNTcxODA3NDYxLCBcIi4vZGlzdC9pbWFnZXMvYm9va3MtbWVkaWEucG5nXCIpKTtcclxuZ2VvTG9jYXRpb25zLnB1c2gobmV3IExvY2F0aW9uKFwi5a6d5a6JRjUxOOaXtuWwmuWIm+aEj+WbrVwiLCAyMi41Njc5OTcyMTYzLCAxMTMuODYzODMyNzE1MSwgXCIuL2Rpc3QvaW1hZ2VzL2VkdWNhdGlvbi5wbmdcIikpO1xyXG5nZW9Mb2NhdGlvbnMucHVzaChuZXcgTG9jYXRpb24oXCLluIPlkInojaPotoXoirHlm61cIiwgMjIuNTkzNjIyNTgxMSwgMTE0LjExOTE2MTMyMDksXCIuL2Rpc3QvaW1hZ2VzL2NvbW11bml0eS5wbmdcIikpO1xyXG5nZW9Mb2NhdGlvbnMucHVzaChuZXcgTG9jYXRpb24oXCLpvpnlspfljLrljZfogZTmkanlsJTln45cIiwgMjIuNzIyNjIyMDE3OSwgMTE0LjI2ODkwNDA4NzIsXCIuL2Rpc3QvaW1hZ2VzL2NvbW11bml0eS5wbmdcIikpO1xyXG5nZW9Mb2NhdGlvbnMucHVzaChuZXcgTG9jYXRpb24oXCLnm5DnlLDljLrlpKfmooXmspnmtbfmu6jmtbTlnLpcIiwgMjIuNTkyNzcxMjk1MywgMTE0LjMwNzE2NjU3MjcsIFwiLi9kaXN0L2ltYWdlcy9lbnRlcnRhaW5tZW50LnBuZ1wiKSk7XHJcbmdlb0xvY2F0aW9ucy5wdXNoKG5ldyBMb2NhdGlvbihcIua3seWcs+S8muWxleS4reW/g1wiLCAyMi41MzA3MDQ2ODg0LCAxMTQuMDYwODMxOTUyOSwgXCIuL2Rpc3QvaW1hZ2VzL2V4aGliaXRpb25zLnBuZ1wiKSk7XHJcbmdlb0xvY2F0aW9ucy5wdXNoKG5ldyBMb2NhdGlvbihcIuaDoOW3nuWkp+S6mua5vuW+t+S4sOWkqem6k1wiLCAyMi43Mzg2NjMyNjQ5LCAxMTQuNTIxODQzNTE1NCwgXCIuL2Rpc3QvaW1hZ2VzL3JlYWwtZXN0YXRlLnBuZ1wiKSk7XHJcbmdlb0xvY2F0aW9ucy5wdXNoKG5ldyBMb2NhdGlvbihcIuWNl+WxseenkeaKgOWbrVwiLCAyMi41Mzc1NjExMTY4LCAxMTMuOTQ4OTY1MDgxOCwgXCIuL2Rpc3QvaW1hZ2VzL2J1c2luZXNzLnBuZ1wiKSk7XHJcbmdlb0xvY2F0aW9ucy5wdXNoKG5ldyBMb2NhdGlvbihcIjc4M+WbveePjeWBpeW6t+eUn+a0u+mmhlwiLCAyMi42MDY5MjIzNjAxLCAxMTQuMTI4MDkxNjQzNCwgXCIuL2Rpc3QvaW1hZ2VzL3JldGFpbC1zdG9yZXMucG5nXCIpKTtcclxuIl19
