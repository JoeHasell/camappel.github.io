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
{'x': 1953.0, 'y': 35.5, 'series': 0},
 {'x': 1959.0, 'y': 39.6, 'series': 0},
 {'x': 1961.0, 'y': 37.1, 'series': 0},
 {'x': 1972.0, 'y': 31.3, 'series': 0},
 {'x': 1974.0, 'y': 31.3, 'series': 0},
 {'x': 1980.0, 'y': 36.6, 'series': 0},
 {'x': 1986.0, 'y': 39.4, 'series': 0},
 {'x': 1987.0, 'y': 41.9, 'series': 0},
 {'x': 1988.0, 'y': 42.5, 'series': 0},
 {'x': 1991.0, 'y': 43.0, 'series': 0},
 {'x': 1992.0, 'y': 41.2, 'series': 0},
 {'x': 1993.0, 'y': 40.6, 'series': 0},
 {'x': 1994.0, 'y': 41.4, 'series': 0},
 {'x': 1995.0, 'y': 44.1, 'series': 0},
 {'x': 1996.0, 'y': 44.4, 'series': 0},
 {'x': 1997.0, 'y': 44.2, 'series': 0},
 {'x': 1998.0, 'y': 46.0, 'series': 0},
 {'x': 1999.0, 'y': 45.0, 'series': 0},
 {'x': 2000.0, 'y': 46.4, 'series': 0},
 {'x': 2001.0, 'y': 48.2, 'series': 0},
 {'x': 2002.0, 'y': 49.3, 'series': 0},
 {'x': 2003.0, 'y': 48.7, 'series': 0},
 {'x': 2004.0, 'y': 46.6, 'series': 0},
 {'x': 2005.0, 'y': 45.5, 'series': 0},
 {'x': 2006.0, 'y': 44.4, 'series': 0},
 {'x': 2007.0, 'y': 43.7, 'series': 0},
 {'x': 2008.0, 'y': 42.5, 'series': 0},
 {'x': 2009.0, 'y': 42.0, 'series': 0},
 {'x': 2010.0, 'y': 41.8, 'series': 0},
 {'x': 2011.0, 'y': 39.8, 'series': 0},
 {'x': 2012.0, 'y': 38.6, 'series': 0},
 {'x': 2013.0, 'y': 38.4, 'series': 0},
 {'x': 2014.0, 'y': 38.3, 'series': 0},
 {'x': 2015.0, 'y': 37.7, 'series': 0},
 {'x': 2016.0, 'y': 39.1, 'series': 0},
 {'x': 2017.0, 'y': 38.5, 'series': 0},
 {'x': 2018.0, 'y': 38.7, 'series': 0},
 {'x': 2019.0, 'y': 39.7, 'series': 0}], yAxis: 1},
 {key: 'Altimir (1986) - Household income', type: 'scatter', values: [
{'x': 1953.0, 'y': 40.0, 'series': 1},
 {'x': 1959.0, 'y': 44.7, 'series': 1},
 {'x': 1961.0, 'y': 41.9, 'series': 1},
 {'x': 1972.0, 'y': 35.3, 'series': 1},
 {'x': 1980.0, 'y': 37.6, 'series': 1},
 {'x': 1986.0, 'y': 40.5, 'series': 1},
 {'x': 1987.0, 'y': 43.1, 'series': 1},
 {'x': 1988.0, 'y': 43.7, 'series': 1},
 {'x': 1991.0, 'y': 44.2, 'series': 1},
 {'x': 1992.0, 'y': 42.4, 'series': 1},
 {'x': 2019.0, 'y': null, 'series': 1}], yAxis: 1},
 {key: 'SEDLAC (2020) Inequality - Equivalised household income (Greater Buenos Aires)', type: 'scatter', values: [
{'x': 1953.0, 'y': null, 'series': 2},
 {'x': 1974.0, 'y': 32.2, 'series': 2},
 {'x': 1980.0, 'y': 37.6, 'series': 2},
 {'x': 1986.0, 'y': 40.5, 'series': 2},
 {'x': 1987.0, 'y': 43.1, 'series': 2},
 {'x': 1988.0, 'y': 43.7, 'series': 2},
 {'x': 1991.0, 'y': 44.2, 'series': 2},
 {'x': 1992.0, 'y': 42.4, 'series': 2},
 {'x': 2019.0, 'y': null, 'series': 2}], yAxis: 1},
 {key: 'SEDLAC (2020) Inequality - Equivalised household income (15 main cities)', type: 'scatter', values: [
{'x': 1953.0, 'y': null, 'series': 3},
 {'x': 1992.0, 'y': 42.9, 'series': 3},
 {'x': 1993.0, 'y': 42.3, 'series': 3},
 {'x': 1994.0, 'y': 43.1, 'series': 3},
 {'x': 1995.0, 'y': 46.0, 'series': 3},
 {'x': 1996.0, 'y': 46.3, 'series': 3},
 {'x': 1997.0, 'y': 46.1, 'series': 3},
 {'x': 1998.0, 'y': 48.0, 'series': 3},
 {'x': 2019.0, 'y': null, 'series': 3}], yAxis: 1},
 {key: 'SEDLAC (2020) Inequality - Equivalised household income (28 main cities)', type: 'scatter', values: [
{'x': 1953.0, 'y': null, 'series': 4},
 {'x': 1998.0, 'y': 47.8, 'series': 4},
 {'x': 1999.0, 'y': 46.8, 'series': 4},
 {'x': 2000.0, 'y': 48.2, 'series': 4},
 {'x': 2001.0, 'y': 50.1, 'series': 4},
 {'x': 2002.0, 'y': 51.2, 'series': 4},
 {'x': 2003.0, 'y': 50.6, 'series': 4},
 {'x': 2019.0, 'y': null, 'series': 4}], yAxis: 1},
 {key: 'SEDLAC (2020) Inequality - Equivalised household income (EPHC)', type: 'scatter', values: [
{'x': 1953.0, 'y': null, 'series': 5},
 {'x': 2003.0, 'y': 48.7, 'series': 5},
 {'x': 2004.0, 'y': 46.6, 'series': 5},
 {'x': 2005.0, 'y': 45.5, 'series': 5},
 {'x': 2006.0, 'y': 44.4, 'series': 5},
 {'x': 2007.0, 'y': 43.7, 'series': 5},
 {'x': 2008.0, 'y': 42.5, 'series': 5},
 {'x': 2009.0, 'y': 42.0, 'series': 5},
 {'x': 2010.0, 'y': 41.8, 'series': 5},
 {'x': 2011.0, 'y': 39.8, 'series': 5},
 {'x': 2012.0, 'y': 38.6, 'series': 5},
 {'x': 2013.0, 'y': 38.4, 'series': 5},
 {'x': 2014.0, 'y': 38.3, 'series': 5},
 {'x': 2015.0, 'y': 37.7, 'series': 5},
 {'x': 2016.0, 'y': 39.1, 'series': 5},
 {'x': 2017.0, 'y': 38.5, 'series': 5},
 {'x': 2018.0, 'y': 38.7, 'series': 5},
 {'x': 2019.0, 'y': 39.7, 'series': 5}], yAxis: 1}]; 
$scope.data1 = [
{key: 'Chartbook series', type: 'line', values: [
{'x': 1932.0, 'y': 17.0, 'series': 0},
 {'x': 1933.0, 'y': 15.5, 'series': 0},
 {'x': 1934.0, 'y': 16.3, 'series': 0},
 {'x': 1935.0, 'y': 16.7, 'series': 0},
 {'x': 1936.0, 'y': 18.4, 'series': 0},
 {'x': 1937.0, 'y': 18.5, 'series': 0},
 {'x': 1938.0, 'y': 18.5, 'series': 0},
 {'x': 1939.0, 'y': 18.9, 'series': 0},
 {'x': 1940.0, 'y': 18.2, 'series': 0},
 {'x': 1941.0, 'y': 20.3, 'series': 0},
 {'x': 1942.0, 'y': 21.5, 'series': 0},
 {'x': 1943.0, 'y': 23.4, 'series': 0},
 {'x': 1944.0, 'y': 22.4, 'series': 0},
 {'x': 1945.0, 'y': 21.1, 'series': 0},
 {'x': 1946.0, 'y': 20.4, 'series': 0},
 {'x': 1947.0, 'y': 21.7, 'series': 0},
 {'x': 1948.0, 'y': 21.0, 'series': 0},
 {'x': 1949.0, 'y': 17.5, 'series': 0},
 {'x': 1950.0, 'y': 17.9, 'series': 0},
 {'x': 1951.0, 'y': 15.3, 'series': 0},
 {'x': 1952.0, 'y': 14.4, 'series': 0},
 {'x': 1953.0, 'y': 13.9, 'series': 0},
 {'x': 1954.0, 'y': 14.9, 'series': 0},
 {'x': 1956.0, 'y': 14.1, 'series': 0},
 {'x': 1958.0, 'y': 12.8, 'series': 0},
 {'x': 1959.0, 'y': 14.4, 'series': 0},
 {'x': 1961.0, 'y': 13.3, 'series': 0},
 {'x': 1980.0, 'y': 13.0, 'series': 0},
 {'x': 1981.0, 'y': 13.0, 'series': 0},
 {'x': 1982.0, 'y': 13.0, 'series': 0},
 {'x': 1983.0, 'y': 13.0, 'series': 0},
 {'x': 1984.0, 'y': 13.0, 'series': 0},
 {'x': 1985.0, 'y': 13.0, 'series': 0},
 {'x': 1986.0, 'y': 13.0, 'series': 0},
 {'x': 1987.0, 'y': 13.0, 'series': 0},
 {'x': 1988.0, 'y': 13.0, 'series': 0},
 {'x': 1989.0, 'y': 13.0, 'series': 0},
 {'x': 1990.0, 'y': 13.0, 'series': 0},
 {'x': 1991.0, 'y': 13.0, 'series': 0},
 {'x': 1992.0, 'y': 13.0, 'series': 0},
 {'x': 1993.0, 'y': 13.0, 'series': 0},
 {'x': 1994.0, 'y': 13.0, 'series': 0},
 {'x': 1995.0, 'y': 13.0, 'series': 0},
 {'x': 1996.0, 'y': 13.0, 'series': 0},
 {'x': 1997.0, 'y': 11.2, 'series': 0},
 {'x': 1998.0, 'y': 11.4, 'series': 0},
 {'x': 1999.0, 'y': 12.2, 'series': 0},
 {'x': 2000.0, 'y': 13.0, 'series': 0},
 {'x': 2001.0, 'y': 12.9, 'series': 0},
 {'x': 2002.0, 'y': 13.4, 'series': 0},
 {'x': 2003.0, 'y': 13.1, 'series': 0},
 {'x': 2004.0, 'y': 12.9, 'series': 0},
 {'x': 2005.0, 'y': 10.7, 'series': 0},
 {'x': 2006.0, 'y': 12.3, 'series': 0},
 {'x': 2007.0, 'y': 17.6, 'series': 0},
 {'x': 2008.0, 'y': 13.9, 'series': 0},
 {'x': 2009.0, 'y': 11.8, 'series': 0},
 {'x': 2010.0, 'y': 11.7, 'series': 0},
 {'x': 2011.0, 'y': 11.7, 'series': 0},
 {'x': 2012.0, 'y': 8.3, 'series': 0},
 {'x': 2013.0, 'y': 9.9, 'series': 0},
 {'x': 2014.0, 'y': 10.4, 'series': 0},
 {'x': 2015.0, 'y': 13.5, 'series': 0},
 {'x': 2016.0, 'y': 16.5, 'series': 0},
 {'x': 2017.0, 'y': 15.2, 'series': 0},
 {'x': 2018.0, 'y': 18.4, 'series': 0},
 {'x': 2019.0, 'y': 21.7, 'series': 0},
 {'x': 2020.0, 'y': 21.7, 'series': 0},
 {'x': 2021.0, 'y': 21.7, 'series': 0}], yAxis: 1},
 {key: 'WID - Pre-tax national income (equal-split adults)', type: 'scatter', values: [
{'x': 1932.0, 'y': 17.0, 'series': 1},
 {'x': 1933.0, 'y': 15.5, 'series': 1},
 {'x': 1934.0, 'y': 16.3, 'series': 1},
 {'x': 1935.0, 'y': 16.7, 'series': 1},
 {'x': 1936.0, 'y': 18.4, 'series': 1},
 {'x': 1937.0, 'y': 18.5, 'series': 1},
 {'x': 1938.0, 'y': 18.5, 'series': 1},
 {'x': 1939.0, 'y': 18.9, 'series': 1},
 {'x': 1940.0, 'y': 18.2, 'series': 1},
 {'x': 1941.0, 'y': 20.3, 'series': 1},
 {'x': 1942.0, 'y': 21.5, 'series': 1},
 {'x': 1943.0, 'y': 23.4, 'series': 1},
 {'x': 1944.0, 'y': 22.4, 'series': 1},
 {'x': 1945.0, 'y': 21.1, 'series': 1},
 {'x': 1946.0, 'y': 20.4, 'series': 1},
 {'x': 1947.0, 'y': 21.7, 'series': 1},
 {'x': 1948.0, 'y': 21.0, 'series': 1},
 {'x': 1949.0, 'y': 17.5, 'series': 1},
 {'x': 1950.0, 'y': 17.9, 'series': 1},
 {'x': 1951.0, 'y': 15.3, 'series': 1},
 {'x': 1952.0, 'y': 14.4, 'series': 1},
 {'x': 1953.0, 'y': 13.9, 'series': 1},
 {'x': 1954.0, 'y': 14.9, 'series': 1},
 {'x': 1956.0, 'y': 14.1, 'series': 1},
 {'x': 1958.0, 'y': 12.8, 'series': 1},
 {'x': 1959.0, 'y': 14.4, 'series': 1},
 {'x': 1961.0, 'y': 13.3, 'series': 1},
 {'x': 1980.0, 'y': 13.0, 'series': 1},
 {'x': 1981.0, 'y': 13.0, 'series': 1},
 {'x': 1982.0, 'y': 13.0, 'series': 1},
 {'x': 1983.0, 'y': 13.0, 'series': 1},
 {'x': 1984.0, 'y': 13.0, 'series': 1},
 {'x': 1985.0, 'y': 13.0, 'series': 1},
 {'x': 1986.0, 'y': 13.0, 'series': 1},
 {'x': 1987.0, 'y': 13.0, 'series': 1},
 {'x': 1988.0, 'y': 13.0, 'series': 1},
 {'x': 1989.0, 'y': 13.0, 'series': 1},
 {'x': 1990.0, 'y': 13.0, 'series': 1},
 {'x': 1991.0, 'y': 13.0, 'series': 1},
 {'x': 1992.0, 'y': 13.0, 'series': 1},
 {'x': 1993.0, 'y': 13.0, 'series': 1},
 {'x': 1994.0, 'y': 13.0, 'series': 1},
 {'x': 1995.0, 'y': 13.0, 'series': 1},
 {'x': 1996.0, 'y': 13.0, 'series': 1},
 {'x': 1997.0, 'y': 11.2, 'series': 1},
 {'x': 1998.0, 'y': 11.4, 'series': 1},
 {'x': 1999.0, 'y': 12.2, 'series': 1},
 {'x': 2000.0, 'y': 13.0, 'series': 1},
 {'x': 2001.0, 'y': 12.9, 'series': 1},
 {'x': 2002.0, 'y': 13.4, 'series': 1},
 {'x': 2003.0, 'y': 13.1, 'series': 1},
 {'x': 2004.0, 'y': 12.9, 'series': 1},
 {'x': 2005.0, 'y': 10.7, 'series': 1},
 {'x': 2006.0, 'y': 12.3, 'series': 1},
 {'x': 2007.0, 'y': 17.6, 'series': 1},
 {'x': 2008.0, 'y': 13.9, 'series': 1},
 {'x': 2009.0, 'y': 11.8, 'series': 1},
 {'x': 2010.0, 'y': 11.7, 'series': 1},
 {'x': 2011.0, 'y': 11.7, 'series': 1},
 {'x': 2012.0, 'y': 8.3, 'series': 1},
 {'x': 2013.0, 'y': 9.9, 'series': 1},
 {'x': 2014.0, 'y': 10.4, 'series': 1},
 {'x': 2015.0, 'y': 13.5, 'series': 1},
 {'x': 2016.0, 'y': 16.5, 'series': 1},
 {'x': 2017.0, 'y': 15.2, 'series': 1},
 {'x': 2018.0, 'y': 18.4, 'series': 1},
 {'x': 2019.0, 'y': 21.7, 'series': 1},
 {'x': 2020.0, 'y': 21.7, 'series': 1},
 {'x': 2021.0, 'y': 21.7, 'series': 1}], yAxis: 1}]; 
$scope.data2 = [
{key: 'Chartbook series', type: 'line', values: [
{'x': 1932.0, 'y': 18.8, 'series': 0},
 {'x': 1933.0, 'y': 17.2, 'series': 0},
 {'x': 1934.0, 'y': 18.1, 'series': 0},
 {'x': 1935.0, 'y': 18.4, 'series': 0},
 {'x': 1936.0, 'y': 20.4, 'series': 0},
 {'x': 1937.0, 'y': 20.4, 'series': 0},
 {'x': 1938.0, 'y': 20.5, 'series': 0},
 {'x': 1939.0, 'y': 20.9, 'series': 0},
 {'x': 1940.0, 'y': 20.1, 'series': 0},
 {'x': 1941.0, 'y': 22.4, 'series': 0},
 {'x': 1942.0, 'y': 23.8, 'series': 0},
 {'x': 1943.0, 'y': 26.0, 'series': 0},
 {'x': 1944.0, 'y': 24.8, 'series': 0},
 {'x': 1945.0, 'y': 23.4, 'series': 0},
 {'x': 1946.0, 'y': 22.6, 'series': 0},
 {'x': 1947.0, 'y': 24.0, 'series': 0},
 {'x': 1948.0, 'y': 23.2, 'series': 0},
 {'x': 1949.0, 'y': 19.3, 'series': 0},
 {'x': 1950.0, 'y': 19.8, 'series': 0},
 {'x': 1951.0, 'y': 17.0, 'series': 0},
 {'x': 1952.0, 'y': 16.0, 'series': 0},
 {'x': 1953.0, 'y': 15.4, 'series': 0},
 {'x': 1954.0, 'y': 16.5, 'series': 0},
 {'x': 1956.0, 'y': 15.7, 'series': 0},
 {'x': 1958.0, 'y': 14.2, 'series': 0},
 {'x': 1959.0, 'y': 15.9, 'series': 0},
 {'x': 1961.0, 'y': 14.7, 'series': 0},
 {'x': 1997.0, 'y': 12.4, 'series': 0},
 {'x': 1998.0, 'y': 12.6, 'series': 0},
 {'x': 1999.0, 'y': 13.5, 'series': 0},
 {'x': 2000.0, 'y': 14.3, 'series': 0},
 {'x': 2001.0, 'y': 12.9, 'series': 0},
 {'x': 2002.0, 'y': 15.5, 'series': 0},
 {'x': 2003.0, 'y': 16.9, 'series': 0},
 {'x': 2004.0, 'y': 16.8, 'series': 0}], yAxis: 1},
 {key: 'WID - Pre-tax fiscal income (individuals, excluding capital gains)', type: 'scatter', values: [
{'x': 1932.0, 'y': 18.8, 'series': 1},
 {'x': 1933.0, 'y': 17.2, 'series': 1},
 {'x': 1934.0, 'y': 18.1, 'series': 1},
 {'x': 1935.0, 'y': 18.4, 'series': 1},
 {'x': 1936.0, 'y': 20.4, 'series': 1},
 {'x': 1937.0, 'y': 20.4, 'series': 1},
 {'x': 1938.0, 'y': 20.5, 'series': 1},
 {'x': 1939.0, 'y': 20.9, 'series': 1},
 {'x': 1940.0, 'y': 20.1, 'series': 1},
 {'x': 1941.0, 'y': 22.4, 'series': 1},
 {'x': 1942.0, 'y': 23.8, 'series': 1},
 {'x': 1943.0, 'y': 26.0, 'series': 1},
 {'x': 1944.0, 'y': 24.8, 'series': 1},
 {'x': 1945.0, 'y': 23.4, 'series': 1},
 {'x': 1946.0, 'y': 22.6, 'series': 1},
 {'x': 1947.0, 'y': 24.0, 'series': 1},
 {'x': 1948.0, 'y': 23.2, 'series': 1},
 {'x': 1949.0, 'y': 19.3, 'series': 1},
 {'x': 1950.0, 'y': 19.8, 'series': 1},
 {'x': 1951.0, 'y': 17.0, 'series': 1},
 {'x': 1952.0, 'y': 16.0, 'series': 1},
 {'x': 1953.0, 'y': 15.4, 'series': 1},
 {'x': 1954.0, 'y': 16.5, 'series': 1},
 {'x': 1956.0, 'y': 15.7, 'series': 1},
 {'x': 1958.0, 'y': 14.2, 'series': 1},
 {'x': 1959.0, 'y': 15.9, 'series': 1},
 {'x': 1961.0, 'y': 14.7, 'series': 1},
 {'x': 1997.0, 'y': 12.4, 'series': 1},
 {'x': 1998.0, 'y': 12.6, 'series': 1},
 {'x': 1999.0, 'y': 13.5, 'series': 1},
 {'x': 2000.0, 'y': 14.3, 'series': 1},
 {'x': 2001.0, 'y': 12.9, 'series': 1},
 {'x': 2002.0, 'y': 15.5, 'series': 1},
 {'x': 2003.0, 'y': 16.9, 'series': 1},
 {'x': 2004.0, 'y': 16.8, 'series': 1}], yAxis: 1}]; 
$scope.data3 = [
{key: 'Chartbook series', type: 'line', values: [
{'x': 1974.0, 'y': 15.6, 'series': 0},
 {'x': 1980.0, 'y': 20.0, 'series': 0},
 {'x': 1986.0, 'y': 20.9, 'series': 0},
 {'x': 1987.0, 'y': 22.1, 'series': 0},
 {'x': 1988.0, 'y': 25.6, 'series': 0},
 {'x': 1991.0, 'y': 20.5, 'series': 0},
 {'x': 1992.0, 'y': 20.5, 'series': 0},
 {'x': 1993.0, 'y': 21.0, 'series': 0},
 {'x': 1994.0, 'y': 21.7, 'series': 0},
 {'x': 1995.0, 'y': 22.2, 'series': 0},
 {'x': 1996.0, 'y': 23.6, 'series': 0},
 {'x': 1997.0, 'y': 23.3, 'series': 0},
 {'x': 1998.0, 'y': 23.0, 'series': 0},
 {'x': 1999.0, 'y': 22.4, 'series': 0},
 {'x': 2000.0, 'y': 24.4, 'series': 0},
 {'x': 2001.0, 'y': 25.0, 'series': 0},
 {'x': 2002.0, 'y': 25.9, 'series': 0},
 {'x': 2003.0, 'y': 24.8, 'series': 0},
 {'x': 2004.0, 'y': 24.2, 'series': 0},
 {'x': 2005.0, 'y': 23.6, 'series': 0},
 {'x': 2006.0, 'y': 23.7, 'series': 0},
 {'x': 2007.0, 'y': 23.5, 'series': 0},
 {'x': 2008.0, 'y': 22.4, 'series': 0},
 {'x': 2009.0, 'y': 22.5, 'series': 0},
 {'x': 2010.0, 'y': 22.4, 'series': 0},
 {'x': 2011.0, 'y': 20.7, 'series': 0},
 {'x': 2012.0, 'y': 20.9, 'series': 0},
 {'x': 2013.0, 'y': 20.2, 'series': 0},
 {'x': 2014.0, 'y': 20.0, 'series': 0},
 {'x': 2015.0, 'y': 19.8, 'series': 0},
 {'x': 2016.0, 'y': 20.7, 'series': 0},
 {'x': 2017.0, 'y': 19.9, 'series': 0},
 {'x': 2018.0, 'y': 20.2, 'series': 0}], yAxis: 1},
 {key: 'SEDLAC (2016) Poverty - Household per capita income (Greater Buenos Aires)', type: 'scatter', values: [
{'x': 1974.0, 'y': 13.1, 'series': 1},
 {'x': 1980.0, 'y': 16.8, 'series': 1},
 {'x': 1986.0, 'y': 17.6, 'series': 1},
 {'x': 1987.0, 'y': 18.6, 'series': 1},
 {'x': 1988.0, 'y': 21.6, 'series': 1},
 {'x': 1991.0, 'y': 17.2, 'series': 1},
 {'x': 1992.0, 'y': 17.2, 'series': 1},
 {'x': 2018.0, 'y': null, 'series': 1}], yAxis: 1},
 {key: 'SEDLAC (2016) Poverty - Household per capita income (15 main cities)', type: 'scatter', values: [
{'x': 1974.0, 'y': null, 'series': 2},
 {'x': 1992.0, 'y': 19.6, 'series': 2},
 {'x': 1993.0, 'y': 20.1, 'series': 2},
 {'x': 1994.0, 'y': 20.7, 'series': 2},
 {'x': 1995.0, 'y': 21.2, 'series': 2},
 {'x': 1996.0, 'y': 22.6, 'series': 2},
 {'x': 1997.0, 'y': 22.2, 'series': 2},
 {'x': 1998.0, 'y': 21.9, 'series': 2},
 {'x': 2018.0, 'y': null, 'series': 2}], yAxis: 1},
 {key: 'SEDLAC (2016) Poverty - Household per capita income (28 main cities)', type: 'scatter', values: [
{'x': 1974.0, 'y': null, 'series': 3},
 {'x': 1998.0, 'y': 23.0, 'series': 3},
 {'x': 1999.0, 'y': 22.5, 'series': 3},
 {'x': 2000.0, 'y': 24.5, 'series': 3},
 {'x': 2001.0, 'y': 25.1, 'series': 3},
 {'x': 2002.0, 'y': 25.9, 'series': 3},
 {'x': 2003.0, 'y': 24.9, 'series': 3},
 {'x': 2018.0, 'y': null, 'series': 3}], yAxis: 1},
 {key: 'SEDLAC (2020) Poverty - Household per capita income (EPHC) (28 main cities)', type: 'scatter', values: [
{'x': 1974.0, 'y': null, 'series': 4},
 {'x': 2003.0, 'y': 24.8, 'series': 4},
 {'x': 2004.0, 'y': 24.2, 'series': 4},
 {'x': 2005.0, 'y': 23.6, 'series': 4},
 {'x': 2006.0, 'y': 23.7, 'series': 4},
 {'x': 2007.0, 'y': 23.5, 'series': 4},
 {'x': 2008.0, 'y': 22.4, 'series': 4},
 {'x': 2009.0, 'y': 22.5, 'series': 4},
 {'x': 2010.0, 'y': 22.4, 'series': 4},
 {'x': 2011.0, 'y': 20.7, 'series': 4},
 {'x': 2012.0, 'y': 20.9, 'series': 4},
 {'x': 2013.0, 'y': 20.2, 'series': 4},
 {'x': 2014.0, 'y': 20.0, 'series': 4},
 {'x': 2015.0, 'y': 19.8, 'series': 4},
 {'x': 2016.0, 'y': 20.7, 'series': 4},
 {'x': 2017.0, 'y': 19.9, 'series': 4},
 {'x': 2018.0, 'y': 20.2, 'series': 4}], yAxis: 1}]
});