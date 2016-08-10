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

function createTravelPlanViewModel(travel, day_id) {
  let paramDate = moment(day_id, "YYYY-MM-DD")
  let startDate = moment(travel.start, "YYYY-MM-DD")
  let dayIndex = paramDate.diff(startDate, "days")

  return {
        navigation: {
          title: travel.title,
          backIcon: "fa fa-chevron-left"
        },
        lng: -122.4167,
        lat: 37.7833,
        days: travel.days,
        eventsOfDay: travel.days[dayIndex].events.map((event)=>{
          return createEventViewModel(event);
        }),
        tabs: tabs,
      }
}

export default Ember.Route.extend({
  model(params) {
    let travelPlanPromise = Ember.$.getJSON("/travel.json").then((travel) => {
      return Ember.Object.create(createTravelPlanViewModel(travel, params.day_id));
    });
            
    return travelPlanPromise;
  },
});
