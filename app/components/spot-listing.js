import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
	  onLocationChangeHandler(lat, lng, results) {
	    Ember.Logger.log(`lat: ${lat}, lng: ${lng}`);
	    Ember.Logger.debug(results);
	  },
		onPlanSelected(model, index) {
	    Ember.Logger.log("model[" + index + "]");
	    Ember.Logger.debug(model);

			model.set('lng', model.travelPlans[index].lng);
			model.set('lat', model.travelPlans[index].lat);
		}
	}
});
