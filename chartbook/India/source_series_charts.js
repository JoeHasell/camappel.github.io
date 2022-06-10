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
{'x': 1951, 'y': 36.27809524, 'series': 0},
 {'x': 1952, 'y': 36.07428571, 'series': 0},
 {'x': 1953, 'y': 35.46285714, 'series': 0},
 {'x': 1954, 'y': 37.7047619, 'series': 0},
 {'x': 1955, 'y': 35.66666667, 'series': 0},
 {'x': 1956, 'y': 34.85142857, 'series': 0},
 {'x': 1957, 'y': 36.07428571, 'series': 0},
 {'x': 1958, 'y': 35.15714286, 'series': 0},
 {'x': 1959, 'y': 35.25904762, 'series': 0},
 {'x': 1960, 'y': 33.22095238, 'series': 0},
 {'x': 1961, 'y': 33.73047619, 'series': 0},
 {'x': 1962, 'y': 33.22095238, 'series': 0},
 {'x': 1963, 'y': 31.2847619, 'series': 0},
 {'x': 1964, 'y': 31.59047619, 'series': 0},
 {'x': 1965, 'y': 31.69238095, 'series': 0},
 {'x': 1966, 'y': 31.69238095, 'series': 0},
 {'x': 1967, 'y': 31.08095238, 'series': 0},
 {'x': 1968, 'y': 32.50761905, 'series': 0},
 {'x': 1969, 'y': 32.1, 'series': 0},
 {'x': 1970, 'y': 30.97904762, 'series': 0},
 {'x': 1973, 'y': 32.50761905, 'series': 0},
 {'x': 1974, 'y': 29.75619048, 'series': 0},
 {'x': 1977, 'y': 32.71142857, 'series': 0},
 {'x': 1983, 'y': 32.1, 'series': 0},
 {'x': 1987, 'y': 32.6, 'series': 0},
 {'x': 1993, 'y': 32.7, 'series': 0},
 {'x': 2004, 'y': 36.8, 'series': 0},
 {'x': 2009, 'y': 37.5, 'series': 0},
 {'x': 2011, 'y': 37.8, 'series': 0}], yAxis: 1},
 {key: 'WIID - Per capita household consumption', type: 'scatter', values: [
{'x': 1951, 'y': 35.6, 'series': 1},
 {'x': 1952, 'y': 35.4, 'series': 1},
 {'x': 1953, 'y': 34.8, 'series': 1},
 {'x': 1954, 'y': 37.0, 'series': 1},
 {'x': 1955, 'y': 35.0, 'series': 1},
 {'x': 1956, 'y': 34.2, 'series': 1},
 {'x': 1957, 'y': 35.4, 'series': 1},
 {'x': 1958, 'y': 34.5, 'series': 1},
 {'x': 1959, 'y': 34.6, 'series': 1},
 {'x': 1960, 'y': 32.6, 'series': 1},
 {'x': 1961, 'y': 33.1, 'series': 1},
 {'x': 1962, 'y': 32.6, 'series': 1},
 {'x': 1963, 'y': 30.7, 'series': 1},
 {'x': 1964, 'y': 31.0, 'series': 1},
 {'x': 1965, 'y': 31.1, 'series': 1},
 {'x': 1966, 'y': 31.1, 'series': 1},
 {'x': 1967, 'y': 30.5, 'series': 1},
 {'x': 1968, 'y': 31.9, 'series': 1},
 {'x': 1969, 'y': 31.5, 'series': 1},
 {'x': 1970, 'y': 30.4, 'series': 1},
 {'x': 1973, 'y': 31.9, 'series': 1},
 {'x': 1974, 'y': 29.2, 'series': 1},
 {'x': 1977, 'y': 32.1, 'series': 1},
 {'x': 1983, 'y': 31.5, 'series': 1},
 {'x': 1986, 'y': 32.2, 'series': 1},
 {'x': 1987, 'y': 31.8, 'series': 1},
 {'x': 1988, 'y': 31.1, 'series': 1},
 {'x': 1989, 'y': 30.5, 'series': 1},
 {'x': 1990, 'y': 29.7, 'series': 1},
 {'x': 1991, 'y': 32.5, 'series': 1},
 {'x': 1992, 'y': 32.0, 'series': 1},
 {'x': 2011, 'y': null, 'series': 1}], yAxis: 1},
 {key: 'World Bank-PovCal - Per capita household consumption', type: 'scatter', values: [
{'x': 1951, 'y': null, 'series': 2},
 {'x': 1983, 'y': 32.1, 'series': 2},
 {'x': 1987, 'y': 32.6, 'series': 2},
 {'x': 1993, 'y': 32.7, 'series': 2},
 {'x': 2004, 'y': 36.8, 'series': 2},
 {'x': 2009, 'y': 37.5, 'series': 2},
 {'x': 2011, 'y': 37.8, 'series': 2}], yAxis: 1}]; 
$scope.data1 = [
{key: 'Chartbook series', type: 'line', values: [
{'x': 2004, 'y': 49.0, 'series': 0},
 {'x': 2011, 'y': 50.1, 'series': 0}], yAxis: 1},
 {key: 'LIS - Equivalised disposable household income', type: 'scatter', values: [
{'x': 2004, 'y': 49.0, 'series': 1},
 {'x': 2011, 'y': 50.1, 'series': 1}], yAxis: 1}]; 
$scope.data2 = [
{key: 'Chartbook series', type: 'line', values: [
{'x': 1922, 'y': 13.09, 'series': 0},
 {'x': 1923, 'y': 13.15, 'series': 0},
 {'x': 1924, 'y': 14.12, 'series': 0},
 {'x': 1925, 'y': 12.64, 'series': 0},
 {'x': 1926, 'y': 13.04, 'series': 0},
 {'x': 1927, 'y': 13.39, 'series': 0},
 {'x': 1928, 'y': 13.67, 'series': 0},
 {'x': 1929, 'y': 13.26, 'series': 0},
 {'x': 1930, 'y': 13.65, 'series': 0},
 {'x': 1931, 'y': 13.34, 'series': 0},
 {'x': 1932, 'y': 16.28, 'series': 0},
 {'x': 1933, 'y': 16.79, 'series': 0},
 {'x': 1934, 'y': 18.32, 'series': 0},
 {'x': 1935, 'y': 20.2, 'series': 0},
 {'x': 1936, 'y': 19.76, 'series': 0},
 {'x': 1937, 'y': 19.11, 'series': 0},
 {'x': 1938, 'y': 19.62, 'series': 0},
 {'x': 1939, 'y': 20.71, 'series': 0},
 {'x': 1940, 'y': 19.49, 'series': 0},
 {'x': 1941, 'y': 18.87, 'series': 0},
 {'x': 1943, 'y': 13.77, 'series': 0},
 {'x': 1944, 'y': 10.41, 'series': 0},
 {'x': 1945, 'y': 10.61, 'series': 0},
 {'x': 1947, 'y': 13.02, 'series': 0},
 {'x': 1948, 'y': 11.53, 'series': 0},
 {'x': 1949, 'y': 10.31, 'series': 0},
 {'x': 1950, 'y': 11.72, 'series': 0},
 {'x': 1951, 'y': 11.77, 'series': 0},
 {'x': 1952, 'y': 12.08, 'series': 0},
 {'x': 1953, 'y': 11.37, 'series': 0},
 {'x': 1954, 'y': 12.85, 'series': 0},
 {'x': 1955, 'y': 13.94, 'series': 0},
 {'x': 1956, 'y': 14.08, 'series': 0},
 {'x': 1957, 'y': 14.44, 'series': 0},
 {'x': 1958, 'y': 13.94, 'series': 0},
 {'x': 1959, 'y': 13.28, 'series': 0},
 {'x': 1960, 'y': 13.54, 'series': 0},
 {'x': 1961, 'y': 13.03, 'series': 0},
 {'x': 1962, 'y': 12.91, 'series': 0},
 {'x': 1963, 'y': 12.56, 'series': 0},
 {'x': 1964, 'y': 12.33, 'series': 0},
 {'x': 1965, 'y': 12.99, 'series': 0},
 {'x': 1966, 'y': 13.26, 'series': 0},
 {'x': 1967, 'y': 12.94, 'series': 0},
 {'x': 1968, 'y': 12.46, 'series': 0},
 {'x': 1969, 'y': 13.28, 'series': 0},
 {'x': 1970, 'y': 13.31, 'series': 0},
 {'x': 1971, 'y': 11.71, 'series': 0},
 {'x': 1972, 'y': 11.29, 'series': 0},
 {'x': 1973, 'y': 10.54, 'series': 0},
 {'x': 1974, 'y': 10.42, 'series': 0},
 {'x': 1975, 'y': 10.7, 'series': 0},
 {'x': 1976, 'y': 10.56, 'series': 0},
 {'x': 1977, 'y': 10.01, 'series': 0},
 {'x': 1978, 'y': 9.52, 'series': 0},
 {'x': 1979, 'y': 8.24, 'series': 0},
 {'x': 1980, 'y': 7.54, 'series': 0},
 {'x': 1981, 'y': 6.88, 'series': 0},
 {'x': 1982, 'y': 6.28, 'series': 0},
 {'x': 1983, 'y': 10.57, 'series': 0},
 {'x': 1984, 'y': 9.12, 'series': 0},
 {'x': 1985, 'y': 10.72, 'series': 0},
 {'x': 1986, 'y': 11.09, 'series': 0},
 {'x': 1987, 'y': 10.59, 'series': 0},
 {'x': 1988, 'y': 11.4, 'series': 0},
 {'x': 1989, 'y': 11.31, 'series': 0},
 {'x': 1990, 'y': 10.74, 'series': 0},
 {'x': 1991, 'y': 10.44, 'series': 0},
 {'x': 1992, 'y': 10.27, 'series': 0},
 {'x': 1993, 'y': 12.79, 'series': 0},
 {'x': 1994, 'y': 12.67, 'series': 0},
 {'x': 1995, 'y': 13.35, 'series': 0},
 {'x': 1996, 'y': 13.56, 'series': 0},
 {'x': 1997, 'y': 14.19, 'series': 0},
 {'x': 1998, 'y': 14.73, 'series': 0},
 {'x': 1999, 'y': 15.08, 'series': 0},
 {'x': 2000, 'y': 15.51, 'series': 0},
 {'x': 2001, 'y': 16.29, 'series': 0},
 {'x': 2002, 'y': 17.1, 'series': 0},
 {'x': 2003, 'y': 17.94, 'series': 0},
 {'x': 2004, 'y': 18.81, 'series': 0},
 {'x': 2005, 'y': 19.71, 'series': 0},
 {'x': 2006, 'y': 20.1, 'series': 0},
 {'x': 2007, 'y': 20.5, 'series': 0},
 {'x': 2008, 'y': 20.88, 'series': 0},
 {'x': 2009, 'y': 21.27, 'series': 0},
 {'x': 2010, 'y': 21.64, 'series': 0},
 {'x': 2011, 'y': 21.54, 'series': 0},
 {'x': 2012, 'y': 21.7, 'series': 0},
 {'x': 2013, 'y': 22.0, 'series': 0},
 {'x': 2014, 'y': 21.73, 'series': 0},
 {'x': 2015, 'y': 21.73, 'series': 0},
 {'x': 2016, 'y': 21.73, 'series': 0},
 {'x': 2017, 'y': 21.73, 'series': 0},
 {'x': 2018, 'y': 21.73, 'series': 0},
 {'x': 2019, 'y': 21.73, 'series': 0}], yAxis: 1},
 {key: 'WID - Pre-tax national income (equal-split adults)', type: 'scatter', values: [
{'x': 1922, 'y': 13.09, 'series': 1},
 {'x': 1923, 'y': 13.15, 'series': 1},
 {'x': 1924, 'y': 14.12, 'series': 1},
 {'x': 1925, 'y': 12.64, 'series': 1},
 {'x': 1926, 'y': 13.04, 'series': 1},
 {'x': 1927, 'y': 13.39, 'series': 1},
 {'x': 1928, 'y': 13.67, 'series': 1},
 {'x': 1929, 'y': 13.26, 'series': 1},
 {'x': 1930, 'y': 13.65, 'series': 1},
 {'x': 1931, 'y': 13.34, 'series': 1},
 {'x': 1932, 'y': 16.28, 'series': 1},
 {'x': 1933, 'y': 16.79, 'series': 1},
 {'x': 1934, 'y': 18.32, 'series': 1},
 {'x': 1935, 'y': 20.2, 'series': 1},
 {'x': 1936, 'y': 19.76, 'series': 1},
 {'x': 1937, 'y': 19.11, 'series': 1},
 {'x': 1938, 'y': 19.62, 'series': 1},
 {'x': 1939, 'y': 20.71, 'series': 1},
 {'x': 1940, 'y': 19.49, 'series': 1},
 {'x': 1941, 'y': 18.87, 'series': 1},
 {'x': 1943, 'y': 13.77, 'series': 1},
 {'x': 1944, 'y': 10.41, 'series': 1},
 {'x': 1945, 'y': 10.61, 'series': 1},
 {'x': 1947, 'y': 13.02, 'series': 1},
 {'x': 1948, 'y': 11.53, 'series': 1},
 {'x': 1949, 'y': 10.31, 'series': 1},
 {'x': 1950, 'y': 11.72, 'series': 1},
 {'x': 1951, 'y': 11.77, 'series': 1},
 {'x': 1952, 'y': 12.08, 'series': 1},
 {'x': 1953, 'y': 11.37, 'series': 1},
 {'x': 1954, 'y': 12.85, 'series': 1},
 {'x': 1955, 'y': 13.94, 'series': 1},
 {'x': 1956, 'y': 14.08, 'series': 1},
 {'x': 1957, 'y': 14.44, 'series': 1},
 {'x': 1958, 'y': 13.94, 'series': 1},
 {'x': 1959, 'y': 13.28, 'series': 1},
 {'x': 1960, 'y': 13.54, 'series': 1},
 {'x': 1961, 'y': 13.03, 'series': 1},
 {'x': 1962, 'y': 12.91, 'series': 1},
 {'x': 1963, 'y': 12.56, 'series': 1},
 {'x': 1964, 'y': 12.33, 'series': 1},
 {'x': 1965, 'y': 12.99, 'series': 1},
 {'x': 1966, 'y': 13.26, 'series': 1},
 {'x': 1967, 'y': 12.94, 'series': 1},
 {'x': 1968, 'y': 12.46, 'series': 1},
 {'x': 1969, 'y': 13.28, 'series': 1},
 {'x': 1970, 'y': 13.31, 'series': 1},
 {'x': 1971, 'y': 11.71, 'series': 1},
 {'x': 1972, 'y': 11.29, 'series': 1},
 {'x': 1973, 'y': 10.54, 'series': 1},
 {'x': 1974, 'y': 10.42, 'series': 1},
 {'x': 1975, 'y': 10.7, 'series': 1},
 {'x': 1976, 'y': 10.56, 'series': 1},
 {'x': 1977, 'y': 10.01, 'series': 1},
 {'x': 1978, 'y': 9.52, 'series': 1},
 {'x': 1979, 'y': 8.24, 'series': 1},
 {'x': 1980, 'y': 7.54, 'series': 1},
 {'x': 1981, 'y': 6.88, 'series': 1},
 {'x': 1982, 'y': 6.28, 'series': 1},
 {'x': 1983, 'y': 10.57, 'series': 1},
 {'x': 1984, 'y': 9.12, 'series': 1},
 {'x': 1985, 'y': 10.72, 'series': 1},
 {'x': 1986, 'y': 11.09, 'series': 1},
 {'x': 1987, 'y': 10.59, 'series': 1},
 {'x': 1988, 'y': 11.4, 'series': 1},
 {'x': 1989, 'y': 11.31, 'series': 1},
 {'x': 1990, 'y': 10.74, 'series': 1},
 {'x': 1991, 'y': 10.44, 'series': 1},
 {'x': 1992, 'y': 10.27, 'series': 1},
 {'x': 1993, 'y': 12.79, 'series': 1},
 {'x': 1994, 'y': 12.67, 'series': 1},
 {'x': 1995, 'y': 13.35, 'series': 1},
 {'x': 1996, 'y': 13.56, 'series': 1},
 {'x': 1997, 'y': 14.19, 'series': 1},
 {'x': 1998, 'y': 14.73, 'series': 1},
 {'x': 1999, 'y': 15.08, 'series': 1},
 {'x': 2000, 'y': 15.51, 'series': 1},
 {'x': 2001, 'y': 16.29, 'series': 1},
 {'x': 2002, 'y': 17.1, 'series': 1},
 {'x': 2003, 'y': 17.94, 'series': 1},
 {'x': 2004, 'y': 18.81, 'series': 1},
 {'x': 2005, 'y': 19.71, 'series': 1},
 {'x': 2006, 'y': 20.1, 'series': 1},
 {'x': 2007, 'y': 20.5, 'series': 1},
 {'x': 2008, 'y': 20.88, 'series': 1},
 {'x': 2009, 'y': 21.27, 'series': 1},
 {'x': 2010, 'y': 21.64, 'series': 1},
 {'x': 2011, 'y': 21.54, 'series': 1},
 {'x': 2012, 'y': 21.7, 'series': 1},
 {'x': 2013, 'y': 22.0, 'series': 1},
 {'x': 2014, 'y': 21.73, 'series': 1},
 {'x': 2015, 'y': 21.73, 'series': 1},
 {'x': 2016, 'y': 21.73, 'series': 1},
 {'x': 2017, 'y': 21.73, 'series': 1},
 {'x': 2018, 'y': 21.73, 'series': 1},
 {'x': 2019, 'y': 21.73, 'series': 1}], yAxis: 1}]; 
$scope.data3 = [
{key: 'Chartbook series', type: 'line', values: [
{'x': 1922, 'y': 13.09, 'series': 0},
 {'x': 1923, 'y': 13.15, 'series': 0},
 {'x': 1924, 'y': 14.12, 'series': 0},
 {'x': 1925, 'y': 12.64, 'series': 0},
 {'x': 1926, 'y': 13.04, 'series': 0},
 {'x': 1927, 'y': 13.39, 'series': 0},
 {'x': 1928, 'y': 13.67, 'series': 0},
 {'x': 1929, 'y': 13.26, 'series': 0},
 {'x': 1930, 'y': 13.65, 'series': 0},
 {'x': 1931, 'y': 13.34, 'series': 0},
 {'x': 1932, 'y': 16.28, 'series': 0},
 {'x': 1933, 'y': 16.79, 'series': 0},
 {'x': 1934, 'y': 18.32, 'series': 0},
 {'x': 1935, 'y': 20.2, 'series': 0},
 {'x': 1936, 'y': 19.76, 'series': 0},
 {'x': 1937, 'y': 19.11, 'series': 0},
 {'x': 1938, 'y': 19.62, 'series': 0},
 {'x': 1939, 'y': 20.71, 'series': 0},
 {'x': 1940, 'y': 19.49, 'series': 0},
 {'x': 1941, 'y': 18.87, 'series': 0},
 {'x': 1943, 'y': 13.77, 'series': 0},
 {'x': 1944, 'y': 10.41, 'series': 0},
 {'x': 1945, 'y': 10.61, 'series': 0},
 {'x': 1947, 'y': 13.02, 'series': 0},
 {'x': 1948, 'y': 11.53, 'series': 0},
 {'x': 1949, 'y': 10.31, 'series': 0},
 {'x': 1950, 'y': 11.72, 'series': 0},
 {'x': 1951, 'y': 11.53, 'series': 0},
 {'x': 1952, 'y': 11.81, 'series': 0},
 {'x': 1953, 'y': 11.12, 'series': 0},
 {'x': 1954, 'y': 12.56, 'series': 0},
 {'x': 1955, 'y': 13.72, 'series': 0},
 {'x': 1956, 'y': 13.76, 'series': 0},
 {'x': 1957, 'y': 14.09, 'series': 0},
 {'x': 1958, 'y': 13.61, 'series': 0},
 {'x': 1959, 'y': 12.93, 'series': 0},
 {'x': 1960, 'y': 13.18, 'series': 0},
 {'x': 1961, 'y': 12.71, 'series': 0},
 {'x': 1962, 'y': 12.58, 'series': 0},
 {'x': 1963, 'y': 12.21, 'series': 0},
 {'x': 1964, 'y': 11.99, 'series': 0},
 {'x': 1965, 'y': 12.64, 'series': 0},
 {'x': 1966, 'y': 12.9, 'series': 0},
 {'x': 1967, 'y': 12.6, 'series': 0},
 {'x': 1968, 'y': 12.11, 'series': 0},
 {'x': 1969, 'y': 12.93, 'series': 0},
 {'x': 1970, 'y': 12.95, 'series': 0},
 {'x': 1971, 'y': 11.38, 'series': 0},
 {'x': 1972, 'y': 10.97, 'series': 0},
 {'x': 1973, 'y': 10.24, 'series': 0},
 {'x': 1974, 'y': 10.13, 'series': 0},
 {'x': 1975, 'y': 10.41, 'series': 0},
 {'x': 1976, 'y': 10.28, 'series': 0},
 {'x': 1977, 'y': 9.74, 'series': 0},
 {'x': 1978, 'y': 9.26, 'series': 0},
 {'x': 1979, 'y': 8.02, 'series': 0},
 {'x': 1980, 'y': 7.34, 'series': 0},
 {'x': 1981, 'y': 6.7, 'series': 0},
 {'x': 1982, 'y': 6.11, 'series': 0},
 {'x': 1983, 'y': 10.31, 'series': 0},
 {'x': 1984, 'y': 8.89, 'series': 0},
 {'x': 1985, 'y': 10.45, 'series': 0},
 {'x': 1986, 'y': 10.81, 'series': 0},
 {'x': 1987, 'y': 10.32, 'series': 0},
 {'x': 1988, 'y': 11.11, 'series': 0},
 {'x': 1989, 'y': 11.02, 'series': 0},
 {'x': 1990, 'y': 10.46, 'series': 0},
 {'x': 1991, 'y': 10.16, 'series': 0},
 {'x': 1992, 'y': 10.01, 'series': 0},
 {'x': 1993, 'y': 12.47, 'series': 0},
 {'x': 1994, 'y': 12.36, 'series': 0},
 {'x': 1995, 'y': 13.01, 'series': 0},
 {'x': 1996, 'y': 13.21, 'series': 0},
 {'x': 1997, 'y': 13.83, 'series': 0},
 {'x': 1998, 'y': 14.36, 'series': 0},
 {'x': 1999, 'y': 14.7, 'series': 0},
 {'x': 2000, 'y': 15.12, 'series': 0},
 {'x': 2001, 'y': 15.89, 'series': 0},
 {'x': 2002, 'y': 16.68, 'series': 0},
 {'x': 2003, 'y': 17.51, 'series': 0},
 {'x': 2004, 'y': 18.37, 'series': 0},
 {'x': 2005, 'y': 19.26, 'series': 0},
 {'x': 2006, 'y': 19.66, 'series': 0},
 {'x': 2007, 'y': 20.05, 'series': 0},
 {'x': 2008, 'y': 20.45, 'series': 0},
 {'x': 2009, 'y': 20.83, 'series': 0},
 {'x': 2010, 'y': 21.22, 'series': 0},
 {'x': 2011, 'y': 21.14, 'series': 0},
 {'x': 2012, 'y': 21.3, 'series': 0},
 {'x': 2013, 'y': 21.59, 'series': 0},
 {'x': 2014, 'y': 21.34, 'series': 0},
 {'x': 2015, 'y': 21.34, 'series': 0}], yAxis: 1},
 {key: 'WID - Pre-tax fiscal income (equal-split adults) (including capital gains)', type: 'scatter', values: [
{'x': 1922, 'y': 13.09, 'series': 1},
 {'x': 1923, 'y': 13.15, 'series': 1},
 {'x': 1924, 'y': 14.12, 'series': 1},
 {'x': 1925, 'y': 12.64, 'series': 1},
 {'x': 1926, 'y': 13.04, 'series': 1},
 {'x': 1927, 'y': 13.39, 'series': 1},
 {'x': 1928, 'y': 13.67, 'series': 1},
 {'x': 1929, 'y': 13.26, 'series': 1},
 {'x': 1930, 'y': 13.65, 'series': 1},
 {'x': 1931, 'y': 13.34, 'series': 1},
 {'x': 1932, 'y': 16.28, 'series': 1},
 {'x': 1933, 'y': 16.79, 'series': 1},
 {'x': 1934, 'y': 18.32, 'series': 1},
 {'x': 1935, 'y': 20.2, 'series': 1},
 {'x': 1936, 'y': 19.76, 'series': 1},
 {'x': 1937, 'y': 19.11, 'series': 1},
 {'x': 1938, 'y': 19.62, 'series': 1},
 {'x': 1939, 'y': 20.71, 'series': 1},
 {'x': 1940, 'y': 19.49, 'series': 1},
 {'x': 1941, 'y': 18.87, 'series': 1},
 {'x': 1943, 'y': 13.77, 'series': 1},
 {'x': 1944, 'y': 10.41, 'series': 1},
 {'x': 1945, 'y': 10.61, 'series': 1},
 {'x': 1947, 'y': 13.02, 'series': 1},
 {'x': 1948, 'y': 11.53, 'series': 1},
 {'x': 1949, 'y': 10.31, 'series': 1},
 {'x': 1950, 'y': 11.72, 'series': 1},
 {'x': 1951, 'y': 11.53, 'series': 1},
 {'x': 1952, 'y': 11.81, 'series': 1},
 {'x': 1953, 'y': 11.12, 'series': 1},
 {'x': 1954, 'y': 12.56, 'series': 1},
 {'x': 1955, 'y': 13.72, 'series': 1},
 {'x': 1956, 'y': 13.76, 'series': 1},
 {'x': 1957, 'y': 14.09, 'series': 1},
 {'x': 1958, 'y': 13.61, 'series': 1},
 {'x': 1959, 'y': 12.93, 'series': 1},
 {'x': 1960, 'y': 13.18, 'series': 1},
 {'x': 1961, 'y': 12.71, 'series': 1},
 {'x': 1962, 'y': 12.58, 'series': 1},
 {'x': 1963, 'y': 12.21, 'series': 1},
 {'x': 1964, 'y': 11.99, 'series': 1},
 {'x': 1965, 'y': 12.64, 'series': 1},
 {'x': 1966, 'y': 12.9, 'series': 1},
 {'x': 1967, 'y': 12.6, 'series': 1},
 {'x': 1968, 'y': 12.11, 'series': 1},
 {'x': 1969, 'y': 12.93, 'series': 1},
 {'x': 1970, 'y': 12.95, 'series': 1},
 {'x': 1971, 'y': 11.38, 'series': 1},
 {'x': 1972, 'y': 10.97, 'series': 1},
 {'x': 1973, 'y': 10.24, 'series': 1},
 {'x': 1974, 'y': 10.13, 'series': 1},
 {'x': 1975, 'y': 10.41, 'series': 1},
 {'x': 1976, 'y': 10.28, 'series': 1},
 {'x': 1977, 'y': 9.74, 'series': 1},
 {'x': 1978, 'y': 9.26, 'series': 1},
 {'x': 1979, 'y': 8.02, 'series': 1},
 {'x': 1980, 'y': 7.34, 'series': 1},
 {'x': 1981, 'y': 6.7, 'series': 1},
 {'x': 1982, 'y': 6.11, 'series': 1},
 {'x': 1983, 'y': 10.31, 'series': 1},
 {'x': 1984, 'y': 8.89, 'series': 1},
 {'x': 1985, 'y': 10.45, 'series': 1},
 {'x': 1986, 'y': 10.81, 'series': 1},
 {'x': 1987, 'y': 10.32, 'series': 1},
 {'x': 1988, 'y': 11.11, 'series': 1},
 {'x': 1989, 'y': 11.02, 'series': 1},
 {'x': 1990, 'y': 10.46, 'series': 1},
 {'x': 1991, 'y': 10.16, 'series': 1},
 {'x': 1992, 'y': 10.01, 'series': 1},
 {'x': 1993, 'y': 12.47, 'series': 1},
 {'x': 1994, 'y': 12.36, 'series': 1},
 {'x': 1995, 'y': 13.01, 'series': 1},
 {'x': 1996, 'y': 13.21, 'series': 1},
 {'x': 1997, 'y': 13.83, 'series': 1},
 {'x': 1998, 'y': 14.36, 'series': 1},
 {'x': 1999, 'y': 14.7, 'series': 1},
 {'x': 2000, 'y': 15.12, 'series': 1},
 {'x': 2001, 'y': 15.89, 'series': 1},
 {'x': 2002, 'y': 16.68, 'series': 1},
 {'x': 2003, 'y': 17.51, 'series': 1},
 {'x': 2004, 'y': 18.37, 'series': 1},
 {'x': 2005, 'y': 19.26, 'series': 1},
 {'x': 2006, 'y': 19.66, 'series': 1},
 {'x': 2007, 'y': 20.05, 'series': 1},
 {'x': 2008, 'y': 20.45, 'series': 1},
 {'x': 2009, 'y': 20.83, 'series': 1},
 {'x': 2010, 'y': 21.22, 'series': 1},
 {'x': 2011, 'y': 21.14, 'series': 1},
 {'x': 2012, 'y': 21.3, 'series': 1},
 {'x': 2013, 'y': 21.59, 'series': 1},
 {'x': 2014, 'y': 21.34, 'series': 1},
 {'x': 2015, 'y': 21.34, 'series': 1}], yAxis: 1}]; 
$scope.data4 = [
{key: 'Chartbook series', type: 'line', values: [
{'x': 1973, 'y': 54.9, 'series': 0},
 {'x': 1977, 'y': 51.3, 'series': 0},
 {'x': 1983, 'y': 44.5, 'series': 0},
 {'x': 1987, 'y': 38.9, 'series': 0},
 {'x': 1993, 'y': 36.0, 'series': 0},
 {'x': 2004, 'y': 27.5, 'series': 0}], yAxis: 1},
 {key: 'Rangarajan (2014) - Per capita household consumption', type: 'scatter', values: [
{'x': 1973, 'y': 54.9, 'series': 1},
 {'x': 1977, 'y': 51.3, 'series': 1},
 {'x': 1983, 'y': 44.5, 'series': 1},
 {'x': 1987, 'y': 38.9, 'series': 1},
 {'x': 1993, 'y': 36.0, 'series': 1},
 {'x': 2004, 'y': 27.5, 'series': 1}], yAxis: 1}]; 
$scope.data5 = [
{key: 'Chartbook series', type: 'line', values: [
{'x': 1993, 'y': 45.3, 'series': 0},
 {'x': 2004, 'y': 37.2, 'series': 0},
 {'x': 2009, 'y': 29.8, 'series': 0},
 {'x': 2011, 'y': 21.9, 'series': 0}], yAxis: 1},
 {key: 'Rangarajan (2014) - Per capita household consumption', type: 'scatter', values: [
{'x': 1993, 'y': 45.3, 'series': 1},
 {'x': 2004, 'y': 37.2, 'series': 1},
 {'x': 2009, 'y': 29.8, 'series': 1},
 {'x': 2011, 'y': 21.9, 'series': 1}], yAxis: 1}]; 
$scope.data6 = [
{key: 'Chartbook series', type: 'line', values: [
{'x': 2009, 'y': 38.2, 'series': 0},
 {'x': 2011, 'y': 29.5, 'series': 0}], yAxis: 1},
 {key: 'Rangarajan (2014) - Per capita household consumption', type: 'scatter', values: [
{'x': 2009, 'y': 38.2, 'series': 1},
 {'x': 2011, 'y': 29.5, 'series': 1}], yAxis: 1}]; 
$scope.data7 = [
{key: 'Chartbook series', type: 'line', values: [
{'x': 1983, 'y': 41.9, 'series': 0},
 {'x': 1993, 'y': 40.0, 'series': 0},
 {'x': 2004, 'y': 48.4, 'series': 0}], yAxis: 1},
 {key: 'Majumdar (2010) - Individual earnings of regular workers', type: 'scatter', values: [
{'x': 1983, 'y': 41.9, 'series': 1},
 {'x': 1993, 'y': 40.0, 'series': 1},
 {'x': 2004, 'y': 48.4, 'series': 1}], yAxis: 1}]; 
$scope.data8 = [
{key: 'Chartbook series', type: 'line', values: [
{'x': 1961, 'y': 11.87, 'series': 0},
 {'x': 1971, 'y': 11.23, 'series': 0},
 {'x': 1981, 'y': 12.5, 'series': 0},
 {'x': 1991, 'y': 16.11, 'series': 0},
 {'x': 2002, 'y': 24.37, 'series': 0},
 {'x': 2012, 'y': 30.69, 'series': 0}], yAxis: 1},
 {key: 'WID - Individual net wealth', type: 'scatter', values: [
{'x': 1961, 'y': 11.87, 'series': 1},
 {'x': 1971, 'y': 11.23, 'series': 1},
 {'x': 1981, 'y': 12.5, 'series': 1},
 {'x': 1991, 'y': 16.11, 'series': 1},
 {'x': 2002, 'y': 24.37, 'series': 1},
 {'x': 2012, 'y': 30.69, 'series': 1}], yAxis: 1}]
});