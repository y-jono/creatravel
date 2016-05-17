import Ember from 'ember';
import {kSpot, kMovement} from '../constants';

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
  month: 5,
  day: 4,
  daysOfTheWeek: "水"
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

function createPlanViewModel(obj) {
  return {
    mark: obj.mark || "0",
    icon: "fa fa-" + ( obj.category || "0"),
    timespan: obj.timespan || [],
    kind: obj.kind || 'nokind',
    name: obj.name || "",
    memo: obj.memo || "",
    lng: obj.lng || 0,
    lat: obj.lat || 0,
    is_spot: obj.kind == kSpot,
    }
  ;
}

export default Ember.Route.extend({
  model() {
    let travelPromise = Ember.$.getJSON("/travel.json").then((data) => {
//      Ember.Logger.debug(data);
      return Ember.Object.create({
        lng: -122.4167,
        lat: 37.7833,
        navigation: {
          title: data.title,
          backIcon: "fa fa-chevron-left"
        },
        tabs: tabs,
        travelPlans: data.travelPlan[0].map((plan)=>{
          return createPlanViewModel(plan);
        }),
        days: days,
      });
    });
            
    return travelPromise;
  },
});
