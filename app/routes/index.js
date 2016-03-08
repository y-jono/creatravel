import Ember from 'ember';

const travelPlans = [
{
  name: "tokyo2016"
},
{
  name: "nagasaki2017"
},
{
  name: "okinawa2018"
},
{
  name: "nagoya2020"
},
{
  name: "hakata2025"
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
    }
  },
});

