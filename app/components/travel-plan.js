import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
	  onLocationChangeHandler(lat, lng, results) {
	    Ember.Logger.log(`lat: ${lat}, lng: ${lng}`);
	    Ember.Logger.debug(results);
	  },
		onEventSelected(model, index) {
	    Ember.Logger.log("model[" + index + "]");
	    Ember.Logger.debug(model);

			model.set('lng', model.travelEvents[index].lng);
			model.set('lat', model.travelEvents[index].lat);
		}
	}
});
