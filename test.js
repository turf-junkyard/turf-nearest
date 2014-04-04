var test = require('tape')
var nearest = require('./')
var fs = require('fs')

test('distance', function(t){
  var pt = JSON.parse(fs.readFileSync(__dirname+'/geojson/pt.geojson'))
  var pts = JSON.parse(fs.readFileSync(__dirname+'/geojson/pts.geojson'))

  var closestPt = nearest(pt, pts)

  t.ok(closestPt, 'should return a point')
  t.equal(closestPt.geometry.type, 'Point', 'should be a point')
  t.end()
})