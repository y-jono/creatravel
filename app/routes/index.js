import Ember from 'ember';
import {kSpot, kMovement} from '../constants';

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
  model(params) {
    let paramDate = moment(params.day_id, "YYYY-MM-DD")
    let travelPromise = Ember.$.getJSON("/travel.json").then((data) => {
      let startDate = moment(data.start, "YYYY-MM-DD")
      let dayIndex = paramDate.diff(startDate, "days")

      return Ember.Object.create({
        lng: -122.4167,
        lat: 37.7833,
        navigation: {
          title: data.title,
          backIcon: "fa fa-chevron-left"
        },
        tabs: tabs,
        travelPlans: data.days[dayIndex].events.map((plan)=>{
          return createPlanViewModel(plan);
        }),
        days: data.days,
      });
    });
            
    return travelPromise;
  },
});

