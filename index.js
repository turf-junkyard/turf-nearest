var distance = require('turf-distance');

/**
 * Returns the {@link Point} feature closest to the input.
 *
 * @module turf/nearest
 * @param {Point} point the reference point
 * @param {FeatureCollection} against a collection of {@link Feature|features}
 * with {@link Point} geometries
 * @returns {Feature} the closest point feature to point
 */
module.exports = function(targetPoint, points){
  var nearestPoint;
  var count = 0;
  var dist = Infinity;
  points.features.forEach(function(pt){
    if(!nearestPoint){
      nearestPoint = pt;
      var dist = distance(targetPoint, pt, 'miles');
      nearestPoint.properties.distance = dist;
    }
    else{
      var dist = distance(targetPoint, pt, 'miles');
      if(dist < nearestPoint.properties.distance){
        nearestPoint = pt;
        nearestPoint.properties.distance = dist;
      }
    }
  });
  delete nearestPoint.properties.distance;
  return nearestPoint;
}
