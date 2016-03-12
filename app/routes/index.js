import Ember from 'ember';

const kSpot = Symbol('spot');
const kMovement = Symbol('movement');

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
}
];

const travelPlans = [
{
  mark: "1",
  icon: "fa fa-paper-plane",
  timespan: ["10:40", "10:50"],
  kind: kSpot,
  name: "新千歳空港"
},
{
  mark: "",
  icon: "fa fa-paper-plane",
  kind: kMovement,
  name: "飛行機"
},
{
  mark: "1",
  icon: "fa fa-paper-plane",
  kind: kSpot,
  timespan: ["10:40", "10:50"],
  name: "福岡空港"
},
{
  mark: "123",
  icon: "fa fa-paper-plane",
  kind: kSpot,
  timespan: ["10:40", "10:50"],
  name: "カツ丼"
},
{
  mark: "",
  icon: "fa fa-paper-plane",
  kind: kMovement,
  name: "徒歩"
},
{
  mark: "123",
  icon: "fa fa-paper-plane",
  kind: kSpot,
  timespan: ["10:40", "10:50"],
  name: "小浜ビジネスホテル"
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
    return {
      navigation: navigation,
      tabs: tabs,
      travelPlans: travelPlans,
      days: days,
    }
  },
});

