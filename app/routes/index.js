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
    url: "http://"
}, {
    name: "tab2",
    url: "http://"
}, {
    name: "tab3",
    url: "http://"
}, {
    name: "tab4",
    url: "http://"
}];

const navigation = {
  title: "title",
  back: "back"
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

