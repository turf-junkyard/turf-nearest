distance = require('turf-distance')

module.exports = function(targetPoint, points){
  var nearestPoint
  var count = 0
  var dist = Infinity
  points.features.forEach(function(pt){
    if(!nearestPoint){
      nearestPoint = pt
      var dist = distance(targetPoint, pt, 'miles')
      nearestPoint.properties.distance = dist 
    }
    else{
      var dist = distance(targetPoint, pt, 'miles')
      if(dist < nearestPoint.properties.distance){
        nearestPoint = pt
        nearestPoint.properties.distance = dist
      }
    }
  })
  delete nearestPoint.properties.distance
  return nearestPoint
}