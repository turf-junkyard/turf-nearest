turf-nearest
============
[![Build Status](https://travis-ci.org/Turfjs/turf-nearest.svg)](https://travis-ci.org/Turfjs/turf-nearest)

Checks to see if a point is inside of a polygon. The polygon can be convex or concave.

###Install

```sh
npm install turf-nearest
```

###Parameters

|name|description|
|---|---|
|inPoint|a Point Features|
|inFeatures|a FeatureCollection|

###Usage

```js
nearest(inPoint, inFeatures)
```

###Example

Returns the nearest point feature.

```js
var nearest = require('turf-nearest')
var point = require('turf-point')
var featurecollection = require('turf-featurecollection')

var inPoint = point(-75.4, 39.4, {name: 'Location A'})
var pt1 = point(-75.343, 39.984, {name: 'Location B'})
var pt2 = point(-75.833, 39.284, {name: 'Location C'})
var pt3 = point(-75.534, 39.123, {name: 'Location D'})
var inFeatures = featurecollection([pt1, pt2, pt3])

var closestPoint = nearest(inPoint, inFeatures)

console.log(closestPoint)
```