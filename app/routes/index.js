import Ember from 'ember';

const kSpot = Symbol.for('spot');
const kMovement = Symbol.for('movement');

const days = [
{
  month: 4,
  day: 30,
  daysOfTheWeek: "土"
},
{
  month: 5,
  day: 1,
  daysOfTheWeek: "日"
},
{
  month: 5,
  day: 2,
  daysOfTheWeek: "月"
},
{
  month: 5,
  day: 3,
  daysOfTheWeek: "火"
},
{
  month: 12,
  day: 23,
  daysOfTheWeek: "月"
},
{
  month: 1,
  day: 1,
  daysOfTheWeek: "月"
},
{
  month: 12,
  day: 23,
  daysOfTheWeek: "月"
},
{
  month: 5,
  day: 3,
  daysOfTheWeek: "火"
}
];

const travelPlans = [
{
  mark: "1",
  icon: "fa fa-paper-plane",
  timespan: ["10:40", "10:50"],
  kind: kSpot,
  name: "新千歳空港",
  lng: 141.670449,
  lat: 42.793302
},
{
  mark: "2",
  icon: "fa fa-paper-plane",
  kind: kMovement,
  name: "飛行機",
  lng: -122.4167,
  lat: 37.7833
},
{
  mark: "1",
  icon: "fa fa-paper-plane",
  kind: kSpot,
  timespan: ["10:40", "10:50"],
  name: "福岡空港",
  lng: 130.446731,
  lat: 33.590583
},
{
  mark: "123",
  icon: "fa fa-paper-plane",
  kind: kSpot,
  timespan: ["10:40", "10:50"],
  name: "カツ丼",
  lng: 130.495413,
  lat: 33.565092
},
{
  mark: "8",
  icon: "fa fa-paper-plane",
  kind: kMovement,
  name: "徒歩",
  lng: -122.4167,
  lat: 37.7833
},
{
  mark: "123",
  icon: "fa fa-paper-plane",
  kind: kSpot,
  timespan: ["10:40", "10:50"],
  name: "小浜ビジネスホテル",
  lng: 130.254570,
  lat: 32.836920
},
];

const tabs = [{
    name: "tab1",
    url: "index",
    icon: "fa fa-clock-o"
}, {
    name: "tab2",
    url: "index",
    icon: "fa fa-heart"
}, {
    name: "tab3",
    url: "index",
    icon: "fa fa-users"
}, {
    name: "tab4",
    url: "index",
    icon: "fa fa-ellipsis-h"
}];

const navigation = {
  title: "長崎旅行2015",
  backIcon: "fa fa-chevron-left"
}

export default Ember.Route.extend({
  model() {
    return Ember.Object.create({
      lng: -122.4167,
      lat: 37.7833,
      navigation: navigation,
      tabs: tabs,
      travelPlans: travelPlans,
      days: days,
    });
  },
});

