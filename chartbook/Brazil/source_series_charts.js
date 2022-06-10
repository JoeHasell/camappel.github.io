var app = angular.module('plunker', ['nvd3']);

app.controller('MainCtrl', function ($scope) {
    $scope.options = {
        chart: {
            type: 'multiChart',
            height: 450,
            margin: {
                top: 30,
                right: 60,
                bottom: 50,
                left: 70
            },
            color: d3.scale.category10().range(),
            duration: 500,
            yAxis1: {
                tickFormat: function (d) {
                    return d3.format(',.1f')(d);
                }
            },
            interpolate: false,
            legend: {
                align: false,
                height: 200,
                margin: {
                    top: 10,
                    bottom: 25,
                }
            },
        }
    };

    //insert data
$scope.data0 = [
{key: 'Chartbook series', type: 'line', values: [
{'x': 1981, 'y': 54.98496728, 'series': 0},
 {'x': 1982, 'y': 55.61849695, 'series': 0},
 {'x': 1983, 'y': 56.19994698, 'series': 0},
 {'x': 1984, 'y': 55.69574439, 'series': 0},
 {'x': 1985, 'y': 52.9200266, 'series': 0},
 {'x': 1986, 'y': 56.03962867, 'series': 0},
 {'x': 1987, 'y': 57.12079666, 'series': 0},
 {'x': 1988, 'y': 59.16790084, 'series': 0},
 {'x': 1989, 'y': 61.04483393, 'series': 0},
 {'x': 1990, 'y': 58.57812692, 'series': 0},
 {'x': 1993, 'y': 58.57812692, 'series': 0},
 {'x': 1995, 'y': 57.98281961, 'series': 0},
 {'x': 1996, 'y': 57.75868267, 'series': 0},
 {'x': 1997, 'y': 57.30060943, 'series': 0},
 {'x': 1998, 'y': 56.87711775, 'series': 0},
 {'x': 1999, 'y': 56.32133422, 'series': 0},
 {'x': 2001, 'y': 56.4995316, 'series': 0},
 {'x': 2002, 'y': 56.2210432, 'series': 0},
 {'x': 2003, 'y': 55.62445054, 'series': 0},
 {'x': 2004, 'y': 54.455671, 'series': 0},
 {'x': 2005, 'y': 54.262507, 'series': 0},
 {'x': 2006, 'y': 53.640847, 'series': 0},
 {'x': 2007, 'y': 52.923978, 'series': 0},
 {'x': 2008, 'y': 52.021875, 'series': 0},
 {'x': 2009, 'y': 51.669721, 'series': 0},
 {'x': 2011, 'y': 50.966762, 'series': 0},
 {'x': 2012, 'y': 50.560458, 'series': 0},
 {'x': 2013, 'y': 50.81677, 'series': 0},
 {'x': 2014, 'y': 49.615752, 'series': 0},
 {'x': 2015, 'y': 49.474347, 'series': 0},
 {'x': 2016, 'y': 51.587947, 'series': 0},
 {'x': 2017, 'y': 51.578692, 'series': 0},
 {'x': 2018, 'y': 52.275937, 'series': 0}], yAxis: 1},
 {key: 'SEDLAC (2020) Inequality - Equivalised household income (PNAD)', type: 'scatter', values: [
{'x': 1981, 'y': 54.952623, 'series': 1},
 {'x': 1982, 'y': 55.58578, 'series': 1},
 {'x': 1983, 'y': 56.166888, 'series': 1},
 {'x': 1984, 'y': 55.662982, 'series': 1},
 {'x': 1985, 'y': 52.888897, 'series': 1},
 {'x': 1986, 'y': 56.006664, 'series': 1},
 {'x': 1987, 'y': 57.087196, 'series': 1},
 {'x': 1988, 'y': 59.133096, 'series': 1},
 {'x': 1989, 'y': 61.008925, 'series': 1},
 {'x': 1990, 'y': 58.543669, 'series': 1},
 {'x': 2018, 'y': null, 'series': 1}], yAxis: 1},
 {key: 'SEDLAC (2020) Inequality - Equivalised household income (New PNAD)', type: 'scatter', values: [
{'x': 1981, 'y': null, 'series': 2},
 {'x': 1993, 'y': 58.516203, 'series': 2},
 {'x': 1995, 'y': 57.921525, 'series': 2},
 {'x': 1996, 'y': 57.697625, 'series': 2},
 {'x': 1997, 'y': 57.240036, 'series': 2},
 {'x': 1998, 'y': 56.816992, 'series': 2},
 {'x': 1999, 'y': 56.261796, 'series': 2},
 {'x': 2001, 'y': 56.439805, 'series': 2},
 {'x': 2002, 'y': 56.161611, 'series': 2},
 {'x': 2003, 'y': 55.565649, 'series': 2},
 {'x': 2004, 'y': 54.398105, 'series': 2},
 {'x': 2018, 'y': null, 'series': 2}], yAxis: 1},
 {key: 'SEDLAC (2020) Inequality - Equivalised household income (with Rural North)', type: 'scatter', values: [
{'x': 1981, 'y': null, 'series': 3},
 {'x': 2004, 'y': 54.455671, 'series': 3},
 {'x': 2005, 'y': 54.262507, 'series': 3},
 {'x': 2006, 'y': 53.640847, 'series': 3},
 {'x': 2007, 'y': 52.923978, 'series': 3},
 {'x': 2008, 'y': 52.021875, 'series': 3},
 {'x': 2009, 'y': 51.669721, 'series': 3},
 {'x': 2011, 'y': 50.966762, 'series': 3},
 {'x': 2012, 'y': 50.560458, 'series': 3},
 {'x': 2013, 'y': 50.81677, 'series': 3},
 {'x': 2014, 'y': 49.615752, 'series': 3},
 {'x': 2015, 'y': 49.474347, 'series': 3},
 {'x': 2018, 'y': null, 'series': 3}], yAxis: 1},
 {key: 'SEDLAC (2020) Inequality - Equivalised household income (PNADC with implicit rent)', type: 'scatter', values: [
{'x': 1981, 'y': null, 'series': 4},
 {'x': 2016, 'y': 51.587947, 'series': 4},
 {'x': 2017, 'y': 51.578692, 'series': 4},
 {'x': 2018, 'y': 52.275937, 'series': 4}], yAxis: 1}]; 
$scope.data1 = [
{key: 'Chartbook series', type: 'line', values: [
{'x': 1960, 'y': 12.1, 'series': 0},
 {'x': 1970, 'y': 14.1, 'series': 0}], yAxis: 1},
 {key: 'Langoni (1978) - Household income (excluding capital gains)', type: 'scatter', values: [
{'x': 1960, 'y': 12.1, 'series': 1},
 {'x': 1970, 'y': 14.1, 'series': 1}], yAxis: 1}]; 
$scope.data2 = [
{key: 'Chartbook series', type: 'line', values: [
{'x': 1980, 'y': 25.21, 'series': 0},
 {'x': 1981, 'y': 25.21, 'series': 0},
 {'x': 1982, 'y': 25.21, 'series': 0},
 {'x': 1983, 'y': 25.21, 'series': 0},
 {'x': 1984, 'y': 25.21, 'series': 0},
 {'x': 1985, 'y': 25.21, 'series': 0},
 {'x': 1986, 'y': 25.21, 'series': 0},
 {'x': 1987, 'y': 25.21, 'series': 0},
 {'x': 1988, 'y': 25.21, 'series': 0},
 {'x': 1989, 'y': 25.21, 'series': 0},
 {'x': 1990, 'y': 25.21, 'series': 0},
 {'x': 1991, 'y': 25.21, 'series': 0},
 {'x': 1992, 'y': 25.21, 'series': 0},
 {'x': 1993, 'y': 25.21, 'series': 0},
 {'x': 1994, 'y': 25.21, 'series': 0},
 {'x': 1995, 'y': 25.21, 'series': 0},
 {'x': 1996, 'y': 25.21, 'series': 0},
 {'x': 1997, 'y': 25.21, 'series': 0},
 {'x': 1998, 'y': 25.21, 'series': 0},
 {'x': 1999, 'y': 25.21, 'series': 0},
 {'x': 2000, 'y': 24.68, 'series': 0},
 {'x': 2001, 'y': 24.68, 'series': 0},
 {'x': 2002, 'y': 23.73, 'series': 0},
 {'x': 2003, 'y': 24.62, 'series': 0},
 {'x': 2004, 'y': 25.55, 'series': 0},
 {'x': 2005, 'y': 25.31, 'series': 0},
 {'x': 2006, 'y': 26.53, 'series': 0},
 {'x': 2007, 'y': 22.8, 'series': 0},
 {'x': 2008, 'y': 26.78, 'series': 0},
 {'x': 2009, 'y': 27.92, 'series': 0},
 {'x': 2010, 'y': 28.05, 'series': 0},
 {'x': 2011, 'y': 28.19, 'series': 0},
 {'x': 2012, 'y': 29.88, 'series': 0},
 {'x': 2013, 'y': 27.05, 'series': 0},
 {'x': 2014, 'y': 26.27, 'series': 0},
 {'x': 2015, 'y': 26.25, 'series': 0},
 {'x': 2016, 'y': 26.49, 'series': 0},
 {'x': 2017, 'y': 27.42, 'series': 0},
 {'x': 2018, 'y': 24.71, 'series': 0},
 {'x': 2019, 'y': 26.6, 'series': 0},
 {'x': 2020, 'y': 26.6, 'series': 0},
 {'x': 2021, 'y': 26.6, 'series': 0}], yAxis: 1},
 {key: 'WID - Pre-tax national income (equal-split adults)', type: 'scatter', values: [
{'x': 1980, 'y': 25.21, 'series': 1},
 {'x': 1981, 'y': 25.21, 'series': 1},
 {'x': 1982, 'y': 25.21, 'series': 1},
 {'x': 1983, 'y': 25.21, 'series': 1},
 {'x': 1984, 'y': 25.21, 'series': 1},
 {'x': 1985, 'y': 25.21, 'series': 1},
 {'x': 1986, 'y': 25.21, 'series': 1},
 {'x': 1987, 'y': 25.21, 'series': 1},
 {'x': 1988, 'y': 25.21, 'series': 1},
 {'x': 1989, 'y': 25.21, 'series': 1},
 {'x': 1990, 'y': 25.21, 'series': 1},
 {'x': 1991, 'y': 25.21, 'series': 1},
 {'x': 1992, 'y': 25.21, 'series': 1},
 {'x': 1993, 'y': 25.21, 'series': 1},
 {'x': 1994, 'y': 25.21, 'series': 1},
 {'x': 1995, 'y': 25.21, 'series': 1},
 {'x': 1996, 'y': 25.21, 'series': 1},
 {'x': 1997, 'y': 25.21, 'series': 1},
 {'x': 1998, 'y': 25.21, 'series': 1},
 {'x': 1999, 'y': 25.21, 'series': 1},
 {'x': 2000, 'y': 24.68, 'series': 1},
 {'x': 2001, 'y': 24.68, 'series': 1},
 {'x': 2002, 'y': 23.73, 'series': 1},
 {'x': 2003, 'y': 24.62, 'series': 1},
 {'x': 2004, 'y': 25.55, 'series': 1},
 {'x': 2005, 'y': 25.31, 'series': 1},
 {'x': 2006, 'y': 26.53, 'series': 1},
 {'x': 2007, 'y': 22.8, 'series': 1},
 {'x': 2008, 'y': 26.78, 'series': 1},
 {'x': 2009, 'y': 27.92, 'series': 1},
 {'x': 2010, 'y': 28.05, 'series': 1},
 {'x': 2011, 'y': 28.19, 'series': 1},
 {'x': 2012, 'y': 29.88, 'series': 1},
 {'x': 2013, 'y': 27.05, 'series': 1},
 {'x': 2014, 'y': 26.27, 'series': 1},
 {'x': 2015, 'y': 26.25, 'series': 1},
 {'x': 2016, 'y': 26.49, 'series': 1},
 {'x': 2017, 'y': 27.42, 'series': 1},
 {'x': 2018, 'y': 24.71, 'series': 1},
 {'x': 2019, 'y': 26.6, 'series': 1},
 {'x': 2020, 'y': 26.6, 'series': 1},
 {'x': 2021, 'y': 26.6, 'series': 1}], yAxis: 1}]; 
$scope.data3 = [
{key: 'Chartbook series', type: 'line', values: [
{'x': 2001, 'y': 24.64, 'series': 0},
 {'x': 2002, 'y': 24.04, 'series': 0},
 {'x': 2003, 'y': 23.18, 'series': 0},
 {'x': 2004, 'y': 23.2, 'series': 0},
 {'x': 2005, 'y': 23.33, 'series': 0},
 {'x': 2006, 'y': 22.97, 'series': 0},
 {'x': 2007, 'y': 22.5, 'series': 0},
 {'x': 2008, 'y': 24.31, 'series': 0},
 {'x': 2009, 'y': 23.17, 'series': 0},
 {'x': 2010, 'y': 23.76, 'series': 0},
 {'x': 2011, 'y': 25.12, 'series': 0},
 {'x': 2012, 'y': 23.91, 'series': 0},
 {'x': 2013, 'y': 23.02, 'series': 0},
 {'x': 2014, 'y': 23.06, 'series': 0},
 {'x': 2015, 'y': 23.6, 'series': 0}], yAxis: 1},
 {key: 'WID - Pre-tax fiscal income (equal-split adults)', type: 'scatter', values: [
{'x': 2001, 'y': 24.64, 'series': 1},
 {'x': 2002, 'y': 24.04, 'series': 1},
 {'x': 2003, 'y': 23.18, 'series': 1},
 {'x': 2004, 'y': 23.2, 'series': 1},
 {'x': 2005, 'y': 23.33, 'series': 1},
 {'x': 2006, 'y': 22.97, 'series': 1},
 {'x': 2007, 'y': 22.5, 'series': 1},
 {'x': 2008, 'y': 24.31, 'series': 1},
 {'x': 2009, 'y': 23.17, 'series': 1},
 {'x': 2010, 'y': 23.76, 'series': 1},
 {'x': 2011, 'y': 25.12, 'series': 1},
 {'x': 2012, 'y': 23.91, 'series': 1},
 {'x': 2013, 'y': 23.02, 'series': 1},
 {'x': 2014, 'y': 23.06, 'series': 1},
 {'x': 2015, 'y': 23.6, 'series': 1}], yAxis: 1}]; 
$scope.data4 = [
{key: 'Chartbook series', type: 'line', values: [
{'x': 1981, 'y': 24.23297855, 'series': 0},
 {'x': 1982, 'y': 24.6154515, 'series': 0},
 {'x': 1983, 'y': 23.9816661, 'series': 0},
 {'x': 1984, 'y': 23.58717504, 'series': 0},
 {'x': 1985, 'y': 24.23904291, 'series': 0},
 {'x': 1986, 'y': 24.10589447, 'series': 0},
 {'x': 1987, 'y': 25.43934567, 'series': 0},
 {'x': 1988, 'y': 26.28509205, 'series': 0},
 {'x': 1989, 'y': 26.19049367, 'series': 0},
 {'x': 1990, 'y': 26.00318128, 'series': 0},
 {'x': 1992, 'y': 26.00318128, 'series': 0},
 {'x': 1993, 'y': 25.74341146, 'series': 0},
 {'x': 1995, 'y': 26.358757, 'series': 0},
 {'x': 1996, 'y': 26.92999799, 'series': 0},
 {'x': 1997, 'y': 27.23420141, 'series': 0},
 {'x': 1998, 'y': 25.91867856, 'series': 0},
 {'x': 1999, 'y': 25.83764419, 'series': 0},
 {'x': 2001, 'y': 25.92652437, 'series': 0},
 {'x': 2002, 'y': 25.34816564, 'series': 0},
 {'x': 2003, 'y': 25.28928956, 'series': 0},
 {'x': 2004, 'y': 24.49187021, 'series': 0},
 {'x': 2005, 'y': 24.28841073, 'series': 0},
 {'x': 2006, 'y': 23.58667551, 'series': 0},
 {'x': 2007, 'y': 24.20414241, 'series': 0},
 {'x': 2008, 'y': 23.48035165, 'series': 0},
 {'x': 2009, 'y': 23.3502511, 'series': 0},
 {'x': 2011, 'y': 22.9351019, 'series': 0},
 {'x': 2012, 'y': 22.775259, 'series': 0},
 {'x': 2013, 'y': 22.487825, 'series': 0},
 {'x': 2014, 'y': 21.997732, 'series': 0},
 {'x': 2015, 'y': 22.326182, 'series': 0},
 {'x': 2016, 'y': 23.015323, 'series': 0},
 {'x': 2017, 'y': 23.087791, 'series': 0},
 {'x': 2018, 'y': 23.56737, 'series': 0}], yAxis: 1},
 {key: 'SEDLAC (2018) Poverty - Household per capita income (PNAD)', type: 'scatter', values: [
{'x': 1981, 'y': 24.099675, 'series': 1},
 {'x': 1982, 'y': 24.480044, 'series': 1},
 {'x': 1983, 'y': 23.849745, 'series': 1},
 {'x': 1984, 'y': 23.457424, 'series': 1},
 {'x': 1985, 'y': 24.105706, 'series': 1},
 {'x': 1986, 'y': 23.97329, 'series': 1},
 {'x': 1987, 'y': 25.299406, 'series': 1},
 {'x': 1988, 'y': 26.1405, 'series': 1},
 {'x': 1989, 'y': 26.046422, 'series': 1},
 {'x': 1990, 'y': 25.86014, 'series': 1},
 {'x': 2018, 'y': null, 'series': 1}], yAxis: 1},
 {key: 'SEDLAC (2020) Poverty - Household per capita income (New PNAD)', type: 'scatter', values: [
{'x': 1981, 'y': null, 'series': 2},
 {'x': 1992, 'y': 26.000496, 'series': 2},
 {'x': 1993, 'y': 25.740753, 'series': 2},
 {'x': 1995, 'y': 26.356035, 'series': 2},
 {'x': 1996, 'y': 26.927217, 'series': 2},
 {'x': 1997, 'y': 27.231389, 'series': 2},
 {'x': 1998, 'y': 25.916002, 'series': 2},
 {'x': 1999, 'y': 25.834976, 'series': 2},
 {'x': 2001, 'y': 25.923847, 'series': 2},
 {'x': 2002, 'y': 25.345548, 'series': 2},
 {'x': 2003, 'y': 25.286678, 'series': 2},
 {'x': 2004, 'y': 24.489341, 'series': 2},
 {'x': 2018, 'y': null, 'series': 2}], yAxis: 1},
 {key: 'SEDLAC (2020) Poverty - Household per capita income (with Rural North)', type: 'scatter', values: [
{'x': 1981, 'y': null, 'series': 3},
 {'x': 2004, 'y': 24.517934, 'series': 3},
 {'x': 2005, 'y': 24.314258, 'series': 3},
 {'x': 2006, 'y': 23.611776, 'series': 3},
 {'x': 2007, 'y': 24.2299, 'series': 3},
 {'x': 2008, 'y': 23.505339, 'series': 3},
 {'x': 2009, 'y': 23.3751, 'series': 3},
 {'x': 2011, 'y': 22.959509, 'series': 3},
 {'x': 2012, 'y': 22.799496, 'series': 3},
 {'x': 2013, 'y': 22.890467, 'series': 3},
 {'x': 2014, 'y': 22.056945, 'series': 3},
 {'x': 2015, 'y': 22.182665, 'series': 3},
 {'x': 2018, 'y': null, 'series': 3}], yAxis: 1},
 {key: 'SEDLAC (2020) Poverty - Household per capita income (New PNADC)', type: 'scatter', values: [
{'x': 1981, 'y': null, 'series': 4},
 {'x': 2012, 'y': 22.775259, 'series': 4},
 {'x': 2013, 'y': 22.487825, 'series': 4},
 {'x': 2014, 'y': 21.997732, 'series': 4},
 {'x': 2015, 'y': 22.326182, 'series': 4},
 {'x': 2016, 'y': 23.015323, 'series': 4},
 {'x': 2017, 'y': 23.087791, 'series': 4},
 {'x': 2018, 'y': 23.56737, 'series': 4}], yAxis: 1}]; 
$scope.data5 = [
{key: 'Chartbook series', type: 'line', values: [
{'x': 2002, 'y': 75.9, 'series': 0},
 {'x': 2003, 'y': 74.7, 'series': 0},
 {'x': 2004, 'y': 73.4, 'series': 0},
 {'x': 2005, 'y': 71.6, 'series': 0},
 {'x': 2006, 'y': 71.3, 'series': 0},
 {'x': 2007, 'y': 70.5, 'series': 0},
 {'x': 2008, 'y': 68.6, 'series': 0},
 {'x': 2009, 'y': 68.8, 'series': 0}], yAxis: 1},
 {key: 'Neri (2010) - Individual earnings (Metropolitan regions)', type: 'scatter', values: [
{'x': 2002, 'y': 75.9, 'series': 1},
 {'x': 2003, 'y': 74.7, 'series': 1},
 {'x': 2004, 'y': 73.4, 'series': 1},
 {'x': 2005, 'y': 71.6, 'series': 1},
 {'x': 2006, 'y': 71.3, 'series': 1},
 {'x': 2007, 'y': 70.5, 'series': 1},
 {'x': 2008, 'y': 68.6, 'series': 1},
 {'x': 2009, 'y': 68.8, 'series': 1}], yAxis: 1}]
});