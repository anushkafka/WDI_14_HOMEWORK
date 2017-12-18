var line1 = ['flindersstreet', 'richmond', 'eastrichmond', 'burnley', 'hawthorn', 'glenferrie']
var line2 = ['flagstaff', 'melbournecentral', 'parliament', 'richmond', 'kooyong', 'tooronga']
var line3 = ['southerncross', 'richmond', 'southyarra', 'prahran', 'windsor'];

var lines = [line1, line2, line3];

var start = 'burnley';
var end = 'flindersstreet';
var finalArray = [];
var tempArray = [];

function getLineWhichContainsStop(stopToFind) {
  var indexOfLine = lines.findIndex(line => {
    var lineHasStop = false;

    line.forEach(lineStop => {
      if (stopToFind === lineStop) {
        lineHasStop = true;
      }
    });
    return lineHasStop;
  });
  return lines[indexOfLine];
}

// 0 - 2
var startline = getLineWhichContainsStop(start);
var endLine = getLineWhichContainsStop(end);

// if same line
if (startline === endLine) {
  var line = startline;
  //there is an edge case if going backwards
  finalArray = line.slice(line.indexOf(start), line.indexOf(end + 1));

} else { // if two different lines
  var commonStartIdx = startline.indexOf('richmond');
  var startIdx = startline.indexOf(start);
  var endIdx = endLine.indexOf(end);
  var commonEndIdx = endLine.indexOf('richmond');

  if (startIdx > commonStartIdx) { // go back to common stop
    tempArray = startline.slice((commonStartIdx + 1), startIdx);
    tempArray.reverse();
    finalArray = finalArray.concat(tempArray);

  } else if (startIdx < commonStartIdx) {
    tempArray = startline.slice(startIdx, (commonStartIdx + 1));
    finalArray = finalArray.concat(tempArray);

  }
  if (endIdx < commonEndIdx) {
    tempArray = endLine.slice(endIdx, commonEndIdx);
    tempArray.reverse();
    finalArray = finalArray.concat(tempArray);


  } else if (endIdx > commonEndIdx) {
    tempArray = endLine.slice(commonEndIdx, (endIdx + 1));
    finalArray = finalArray.concat(tempArray);
  }
}
console.log(finalArray);