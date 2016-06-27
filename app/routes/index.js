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

function createEventViewModel(event) {
  return {
    mark: event.mark || "0",
    icon: "fa fa-" + ( event.category || "0"),
    timespan: event.timespan || [],
    kind: event.kind || 'nokind',
    name: event.name || "",
    memo: event.memo || "",
    lng: event.lng || 0,
    lat: event.lat || 0,
    is_spot: event.kind == kSpot,
    }
  ;
}

export default Ember.Route.extend({
  model(params) {
    let paramDate = moment(params.day_id, "YYYY-MM-DD")
    let travelPlanPromise = Ember.$.getJSON("/travel.json").then((travel) => {
      let startDate = moment(travel.start, "YYYY-MM-DD")
      let dayIndex = paramDate.diff(startDate, "days")

      return Ember.Object.create({
        lng: -122.4167,
        lat: 37.7833,
        navigation: {
          title: travel.title,
          backIcon: "fa fa-chevron-left"
        },
        tabs: tabs,
        eventsOfDay: travel.days[dayIndex].events.map((event)=>{
          return createEventViewModel(event);
        }),
        days: travel.days,
      });
    });
            
    return travelPlanPromise;
  },
});
