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
$scope.data0 = [{key: 'Chartbook series', type: 'line', values: [{'x': 1980.0, 'y': 30.29608939, 'series': 0}, {'x': 1985.0, 'y': 29.91620112, 'series': 0}, {'x': 1990.0, 'y': 28.68156425, 'series': 0}, {'x': 1995.0, 'y': 34.0, 'series': 0}, {'x': 1996.0, 'y': 34.0, 'series': 0}, {'x': 1997.0, 'y': 35.0, 'series': 0}, {'x': 1998.0, 'y': 34.0, 'series': 0}, {'x': 1999.0, 'y': 33.0, 'series': 0}, {'x': 2000.0, 'y': 32.0, 'series': 0}, {'x': 2001.0, 'y': 33.0, 'series': 0}, {'x': 2002.0, 'y': 31.0, 'series': 0}, {'x': 2004.0, 'y': 31.0, 'series': 0}, {'x': 2005.0, 'y': 32.2, 'series': 0}, {'x': 2006.0, 'y': 31.9, 'series': 0}, {'x': 2007.0, 'y': 31.9, 'series': 0}, {'x': 2008.0, 'y': 32.4, 'series': 0}, {'x': 2009.0, 'y': 32.9, 'series': 0}, {'x': 2010.0, 'y': 33.5, 'series': 0}, {'x': 2011.0, 'y': 34.0, 'series': 0}, {'x': 2012.0, 'y': 34.2, 'series': 0}, {'x': 2013.0, 'y': 33.7, 'series': 0}, {'x': 2014.0, 'y': 34.7, 'series': 0}, {'x': 2015.0, 'y': 34.6, 'series': 0}, {'x': 2016.0, 'y': 34.5, 'series': 0}, {'x': 2017.0, 'y': 34.1, 'series': 0}, {'x': 2018.0, 'y': 33.2, 'series': 0}, {'x': 2019.0, 'y': 33.0, 'series': 0}, {'x': 2020.0, 'y': 32.1, 'series': 0}], yAxis: 1}, {key: 'LIS - Equivalised disposable household income', type: 'scatter', values: [{'x': 1980.0, 'y': 31.9, 'series': 1}, {'x': 1985.0, 'y': 31.5, 'series': 1}, {'x': 1990.0, 'y': 30.2, 'series': 1}, {'x': 1995.0, 'y': 35.8, 'series': 1}, {'x': 2000.0, 'y': 33.7, 'series': 1}, {'x': 2004.0, 'y': 32.1, 'series': 1}, {'x': 2007.0, 'y': 30.7, 'series': 1}, {'x': 2010.0, 'y': 33.7, 'series': 1}, {'x': 2013.0, 'y': 34.5, 'series': 1}, {'x': 2016.0, 'y': 34.1, 'series': 1}, {'x': 2020.0, 'y': null, 'series': 0}], yAxis: 1}, {key: 'Eurostat - Equivalised disposable household income', type: 'scatter', values: [{'x': 1980.0, 'y': null, 'series': 0}, {'x': 1995.0, 'y': 34.0, 'series': 2}, {'x': 1996.0, 'y': 34.0, 'series': 2}, {'x': 1997.0, 'y': 35.0, 'series': 2}, {'x': 1998.0, 'y': 34.0, 'series': 2}, {'x': 1999.0, 'y': 33.0, 'series': 2}, {'x': 2000.0, 'y': 32.0, 'series': 2}, {'x': 2001.0, 'y': 33.0, 'series': 2}, {'x': 2002.0, 'y': 31.0, 'series': 2}, {'x': 2004.0, 'y': 31.0, 'series': 2}, {'x': 2005.0, 'y': 32.2, 'series': 2}, {'x': 2006.0, 'y': 31.9, 'series': 2}, {'x': 2007.0, 'y': 31.9, 'series': 2}, {'x': 2008.0, 'y': 32.4, 'series': 2}, {'x': 2009.0, 'y': 32.9, 'series': 2}, {'x': 2010.0, 'y': 33.5, 'series': 2}, {'x': 2011.0, 'y': 34.0, 'series': 2}, {'x': 2012.0, 'y': 34.2, 'series': 2}, {'x': 2013.0, 'y': 33.7, 'series': 2}, {'x': 2014.0, 'y': 34.7, 'series': 2}, {'x': 2015.0, 'y': 34.6, 'series': 2}, {'x': 2016.0, 'y': 34.5, 'series': 2}, {'x': 2017.0, 'y': 34.1, 'series': 2}, {'x': 2018.0, 'y': 33.2, 'series': 2}, {'x': 2019.0, 'y': 33.0, 'series': 2}, {'x': 2020.0, 'y': 32.1, 'series': 2}], yAxis: 1}]; 
$scope.data1 = [{key: 'Chartbook series', type: 'line', values: [{'x': 1964.0, 'y': 41.92, 'series': 0}, {'x': 1973.0, 'y': 35.45, 'series': 0}], yAxis: 1}, {key: 'UN (1981) - Household income ', type: 'scatter', values: [{'x': 1964.0, 'y': 41.92, 'series': 1}, {'x': 1973.0, 'y': 35.45, 'series': 1}], yAxis: 1}]; 
$scope.data2 = [{key: 'Chartbook series', type: 'line', values: [{'x': 1980.0, 'y': 11.35, 'series': 0}, {'x': 1981.0, 'y': 11.15, 'series': 0}, {'x': 1982.0, 'y': 11.22, 'series': 0}, {'x': 1983.0, 'y': 10.9, 'series': 0}, {'x': 1984.0, 'y': 10.81, 'series': 0}, {'x': 1985.0, 'y': 10.98, 'series': 0}, {'x': 1986.0, 'y': 11.74, 'series': 0}, {'x': 1987.0, 'y': 11.79, 'series': 0}, {'x': 1988.0, 'y': 11.85, 'series': 0}, {'x': 1989.0, 'y': 12.18, 'series': 0}, {'x': 1990.0, 'y': 11.7, 'series': 0}, {'x': 1991.0, 'y': 11.45, 'series': 0}, {'x': 1992.0, 'y': 11.24, 'series': 0}, {'x': 1993.0, 'y': 10.99, 'series': 0}, {'x': 1994.0, 'y': 11.43, 'series': 0}, {'x': 1995.0, 'y': 11.66, 'series': 0}, {'x': 1996.0, 'y': 11.53, 'series': 0}, {'x': 1997.0, 'y': 11.02, 'series': 0}, {'x': 1998.0, 'y': 10.92, 'series': 0}, {'x': 1999.0, 'y': 11.18, 'series': 0}, {'x': 2000.0, 'y': 11.0, 'series': 0}, {'x': 2001.0, 'y': 10.58, 'series': 0}, {'x': 2002.0, 'y': 10.88, 'series': 0}, {'x': 2003.0, 'y': 11.12, 'series': 0}, {'x': 2004.0, 'y': 10.98, 'series': 0}, {'x': 2005.0, 'y': 10.85, 'series': 0}, {'x': 2006.0, 'y': 11.32, 'series': 0}, {'x': 2007.0, 'y': 11.34, 'series': 0}, {'x': 2008.0, 'y': 11.61, 'series': 0}, {'x': 2009.0, 'y': 12.63, 'series': 0}, {'x': 2010.0, 'y': 11.54, 'series': 0}, {'x': 2011.0, 'y': 11.35, 'series': 0}, {'x': 2012.0, 'y': 12.14, 'series': 0}, {'x': 2013.0, 'y': 12.04, 'series': 0}, {'x': 2014.0, 'y': 12.15, 'series': 0}, {'x': 2015.0, 'y': 12.42, 'series': 0}, {'x': 2016.0, 'y': 12.5, 'series': 0}, {'x': 2017.0, 'y': 12.61, 'series': 0}, {'x': 2018.0, 'y': 12.5, 'series': 0}, {'x': 2019.0, 'y': 12.66, 'series': 0}, {'x': 2020.0, 'y': 12.38, 'series': 0}, {'x': 2021.0, 'y': 12.38, 'series': 0}], yAxis: 1}, {key: 'WID - Pre-tax national income (equal-split adults)', type: 'scatter', values: [{'x': 1980.0, 'y': 11.35, 'series': 1}, {'x': 1981.0, 'y': 11.15, 'series': 1}, {'x': 1982.0, 'y': 11.22, 'series': 1}, {'x': 1983.0, 'y': 10.9, 'series': 1}, {'x': 1984.0, 'y': 10.81, 'series': 1}, {'x': 1985.0, 'y': 10.98, 'series': 1}, {'x': 1986.0, 'y': 11.74, 'series': 1}, {'x': 1987.0, 'y': 11.79, 'series': 1}, {'x': 1988.0, 'y': 11.85, 'series': 1}, {'x': 1989.0, 'y': 12.18, 'series': 1}, {'x': 1990.0, 'y': 11.7, 'series': 1}, {'x': 1991.0, 'y': 11.45, 'series': 1}, {'x': 1992.0, 'y': 11.24, 'series': 1}, {'x': 1993.0, 'y': 10.99, 'series': 1}, {'x': 1994.0, 'y': 11.43, 'series': 1}, {'x': 1995.0, 'y': 11.66, 'series': 1}, {'x': 1996.0, 'y': 11.53, 'series': 1}, {'x': 1997.0, 'y': 11.02, 'series': 1}, {'x': 1998.0, 'y': 10.92, 'series': 1}, {'x': 1999.0, 'y': 11.18, 'series': 1}, {'x': 2000.0, 'y': 11.0, 'series': 1}, {'x': 2001.0, 'y': 10.58, 'series': 1}, {'x': 2002.0, 'y': 10.88, 'series': 1}, {'x': 2003.0, 'y': 11.12, 'series': 1}, {'x': 2004.0, 'y': 10.98, 'series': 1}, {'x': 2005.0, 'y': 10.85, 'series': 1}, {'x': 2006.0, 'y': 11.32, 'series': 1}, {'x': 2007.0, 'y': 11.34, 'series': 1}, {'x': 2008.0, 'y': 11.61, 'series': 1}, {'x': 2009.0, 'y': 12.63, 'series': 1}, {'x': 2010.0, 'y': 11.54, 'series': 1}, {'x': 2011.0, 'y': 11.35, 'series': 1}, {'x': 2012.0, 'y': 12.14, 'series': 1}, {'x': 2013.0, 'y': 12.04, 'series': 1}, {'x': 2014.0, 'y': 12.15, 'series': 1}, {'x': 2015.0, 'y': 12.42, 'series': 1}, {'x': 2016.0, 'y': 12.5, 'series': 1}, {'x': 2017.0, 'y': 12.61, 'series': 1}, {'x': 2018.0, 'y': 12.5, 'series': 1}, {'x': 2019.0, 'y': 12.66, 'series': 1}, {'x': 2020.0, 'y': 12.38, 'series': 1}, {'x': 2021.0, 'y': 12.38, 'series': 1}], yAxis: 1}]; 
$scope.data3 = [{key: 'Chartbook series', type: 'line', values: [{'x': 1985.0, 'y': 21.65363128, 'series': 0}, {'x': 1986.0, 'y': 17.72625698, 'series': 0}, {'x': 1987.0, 'y': 18.15083799, 'series': 0}, {'x': 1988.0, 'y': 18.04469274, 'series': 0}, {'x': 1989.0, 'y': 16.45251397, 'series': 0}, {'x': 1990.0, 'y': 16.66480447, 'series': 0}, {'x': 1991.0, 'y': 16.24022346, 'series': 0}, {'x': 1992.0, 'y': 16.55865922, 'series': 0}, {'x': 1993.0, 'y': 16.98324022, 'series': 0}, {'x': 1994.0, 'y': 18.68156425, 'series': 0}, {'x': 1995.0, 'y': 19.0, 'series': 0}, {'x': 1996.0, 'y': 18.0, 'series': 0}, {'x': 1997.0, 'y': 20.0, 'series': 0}, {'x': 1998.0, 'y': 18.0, 'series': 0}, {'x': 1999.0, 'y': 19.0, 'series': 0}, {'x': 2000.0, 'y': 18.0, 'series': 0}, {'x': 2001.0, 'y': 19.0, 'series': 0}, {'x': 2002.0, 'y': 19.0, 'series': 0}, {'x': 2004.0, 'y': 20.1, 'series': 0}, {'x': 2005.0, 'y': 20.1, 'series': 0}, {'x': 2006.0, 'y': 20.3, 'series': 0}, {'x': 2007.0, 'y': 19.7, 'series': 0}, {'x': 2008.0, 'y': 19.8, 'series': 0}, {'x': 2009.0, 'y': 20.4, 'series': 0}, {'x': 2010.0, 'y': 20.7, 'series': 0}, {'x': 2011.0, 'y': 20.6, 'series': 0}, {'x': 2012.0, 'y': 20.8, 'series': 0}, {'x': 2013.0, 'y': 20.4, 'series': 0}, {'x': 2014.0, 'y': 22.2, 'series': 0}, {'x': 2015.0, 'y': 22.1, 'series': 0}, {'x': 2016.0, 'y': 22.3, 'series': 0}, {'x': 2017.0, 'y': 21.6, 'series': 0}, {'x': 2018.0, 'y': 21.5, 'series': 0}, {'x': 2019.0, 'y': 20.7, 'series': 0}, {'x': 2020.0, 'y': 21.0, 'series': 0}], yAxis: 1}, {key: 'Cantó (2003) - Equivalised disposable household income', type: 'scatter', values: [{'x': 1985.0, 'y': 20.4, 'series': 1}, {'x': 1986.0, 'y': 16.7, 'series': 1}, {'x': 1987.0, 'y': 17.1, 'series': 1}, {'x': 1988.0, 'y': 17.0, 'series': 1}, {'x': 1989.0, 'y': 15.5, 'series': 1}, {'x': 1990.0, 'y': 15.7, 'series': 1}, {'x': 1991.0, 'y': 15.3, 'series': 1}, {'x': 1992.0, 'y': 15.6, 'series': 1}, {'x': 1993.0, 'y': 16.0, 'series': 1}, {'x': 1994.0, 'y': 17.6, 'series': 1}, {'x': 1995.0, 'y': 17.9, 'series': 1}, {'x': 2020.0, 'y': null, 'series': 0}], yAxis: 1}, {key: 'Eurostat - Equivalised disposable household income (after social transfers)', type: 'scatter', values: [{'x': 1985.0, 'y': null, 'series': 0}, {'x': 1995.0, 'y': 19.0, 'series': 2}, {'x': 1996.0, 'y': 18.0, 'series': 2}, {'x': 1997.0, 'y': 20.0, 'series': 2}, {'x': 1998.0, 'y': 18.0, 'series': 2}, {'x': 1999.0, 'y': 19.0, 'series': 2}, {'x': 2000.0, 'y': 18.0, 'series': 2}, {'x': 2001.0, 'y': 19.0, 'series': 2}, {'x': 2002.0, 'y': 19.0, 'series': 2}, {'x': 2004.0, 'y': 20.1, 'series': 2}, {'x': 2005.0, 'y': 20.1, 'series': 2}, {'x': 2006.0, 'y': 20.3, 'series': 2}, {'x': 2007.0, 'y': 19.7, 'series': 2}, {'x': 2008.0, 'y': 19.8, 'series': 2}, {'x': 2009.0, 'y': 20.4, 'series': 2}, {'x': 2010.0, 'y': 20.7, 'series': 2}, {'x': 2011.0, 'y': 20.6, 'series': 2}, {'x': 2012.0, 'y': 20.8, 'series': 2}, {'x': 2013.0, 'y': 20.4, 'series': 2}, {'x': 2014.0, 'y': 22.2, 'series': 2}, {'x': 2015.0, 'y': 22.1, 'series': 2}, {'x': 2016.0, 'y': 22.3, 'series': 2}, {'x': 2017.0, 'y': 21.6, 'series': 2}, {'x': 2018.0, 'y': 21.5, 'series': 2}, {'x': 2019.0, 'y': 20.7, 'series': 2}, {'x': 2020.0, 'y': 21.0, 'series': 2}], yAxis: 1}]; 
$scope.data4 = [{key: 'Chartbook series', type: 'line', values: [{'x': 1901.0, 'y': 65.1, 'series': 0}, {'x': 1902.0, 'y': 61.9, 'series': 0}, {'x': 1903.0, 'y': 62.9, 'series': 0}, {'x': 1904.0, 'y': 60.6, 'series': 0}, {'x': 1905.0, 'y': 62.7, 'series': 0}, {'x': 1906.0, 'y': 60.9, 'series': 0}, {'x': 1907.0, 'y': 59.7, 'series': 0}, {'x': 1908.0, 'y': 59.4, 'series': 0}, {'x': 1909.0, 'y': 58.2, 'series': 0}, {'x': 1910.0, 'y': 56.4, 'series': 0}, {'x': 1911.0, 'y': 55.7, 'series': 0}, {'x': 1912.0, 'y': 62.7, 'series': 0}, {'x': 1913.0, 'y': 59.2, 'series': 0}, {'x': 1914.0, 'y': 59.8, 'series': 0}, {'x': 1915.0, 'y': 57.7, 'series': 0}, {'x': 1916.0, 'y': 60.1, 'series': 0}, {'x': 1917.0, 'y': 57.5, 'series': 0}, {'x': 1918.0, 'y': 59.9, 'series': 0}, {'x': 1919.0, 'y': 61.4, 'series': 0}, {'x': 1920.0, 'y': 60.8, 'series': 0}, {'x': 1921.0, 'y': 60.9, 'series': 0}, {'x': 1922.0, 'y': 57.6, 'series': 0}, {'x': 1923.0, 'y': 55.5, 'series': 0}, {'x': 1924.0, 'y': 54.0, 'series': 0}, {'x': 1925.0, 'y': 59.8, 'series': 0}, {'x': 1926.0, 'y': 60.0, 'series': 0}, {'x': 1927.0, 'y': 52.0, 'series': 0}, {'x': 1928.0, 'y': 60.3, 'series': 0}, {'x': 1929.0, 'y': 52.2, 'series': 0}, {'x': 1930.0, 'y': 57.6, 'series': 0}, {'x': 1931.0, 'y': 56.2, 'series': 0}, {'x': 1932.0, 'y': 50.1, 'series': 0}, {'x': 1933.0, 'y': 54.1, 'series': 0}, {'x': 1934.0, 'y': 57.7, 'series': 0}, {'x': 1935.0, 'y': 53.3, 'series': 0}, {'x': 1941.0, 'y': 53.2, 'series': 0}, {'x': 1942.0, 'y': 48.0, 'series': 0}, {'x': 1943.0, 'y': 52.4, 'series': 0}, {'x': 1944.0, 'y': 55.0, 'series': 0}, {'x': 1945.0, 'y': 53.7, 'series': 0}, {'x': 1946.0, 'y': 54.6, 'series': 0}, {'x': 1947.0, 'y': 52.6, 'series': 0}, {'x': 1948.0, 'y': 51.7, 'series': 0}, {'x': 1954.0, 'y': 48.7, 'series': 0}, {'x': 1955.0, 'y': 49.7, 'series': 0}, {'x': 1956.0, 'y': 48.7, 'series': 0}, {'x': 1957.0, 'y': 41.8, 'series': 0}, {'x': 1958.0, 'y': 46.7, 'series': 0}], yAxis: 1}, {key: 'Alvaredo & Blanco (Forthcoming) - Individual net estates', type: 'scatter', values: [{'x': 1901.0, 'y': 65.1, 'series': 1}, {'x': 1902.0, 'y': 61.9, 'series': 1}, {'x': 1903.0, 'y': 62.9, 'series': 1}, {'x': 1904.0, 'y': 60.6, 'series': 1}, {'x': 1905.0, 'y': 62.7, 'series': 1}, {'x': 1906.0, 'y': 60.9, 'series': 1}, {'x': 1907.0, 'y': 59.7, 'series': 1}, {'x': 1908.0, 'y': 59.4, 'series': 1}, {'x': 1909.0, 'y': 58.2, 'series': 1}, {'x': 1910.0, 'y': 56.4, 'series': 1}, {'x': 1911.0, 'y': 55.7, 'series': 1}, {'x': 1912.0, 'y': 62.7, 'series': 1}, {'x': 1913.0, 'y': 59.2, 'series': 1}, {'x': 1914.0, 'y': 59.8, 'series': 1}, {'x': 1915.0, 'y': 57.7, 'series': 1}, {'x': 1916.0, 'y': 60.1, 'series': 1}, {'x': 1917.0, 'y': 57.5, 'series': 1}, {'x': 1918.0, 'y': 59.9, 'series': 1}, {'x': 1919.0, 'y': 61.4, 'series': 1}, {'x': 1920.0, 'y': 60.8, 'series': 1}, {'x': 1921.0, 'y': 60.9, 'series': 1}, {'x': 1922.0, 'y': 57.6, 'series': 1}, {'x': 1923.0, 'y': 55.5, 'series': 1}, {'x': 1924.0, 'y': 54.0, 'series': 1}, {'x': 1925.0, 'y': 59.8, 'series': 1}, {'x': 1926.0, 'y': 60.0, 'series': 1}, {'x': 1927.0, 'y': 52.0, 'series': 1}, {'x': 1928.0, 'y': 60.3, 'series': 1}, {'x': 1929.0, 'y': 52.2, 'series': 1}, {'x': 1930.0, 'y': 57.6, 'series': 1}, {'x': 1931.0, 'y': 56.2, 'series': 1}, {'x': 1932.0, 'y': 50.1, 'series': 1}, {'x': 1933.0, 'y': 54.1, 'series': 1}, {'x': 1934.0, 'y': 57.7, 'series': 1}, {'x': 1935.0, 'y': 53.3, 'series': 1}, {'x': 1941.0, 'y': 53.2, 'series': 1}, {'x': 1942.0, 'y': 48.0, 'series': 1}, {'x': 1943.0, 'y': 52.4, 'series': 1}, {'x': 1944.0, 'y': 55.0, 'series': 1}, {'x': 1945.0, 'y': 53.7, 'series': 1}, {'x': 1946.0, 'y': 54.6, 'series': 1}, {'x': 1947.0, 'y': 52.6, 'series': 1}, {'x': 1948.0, 'y': 51.7, 'series': 1}, {'x': 1954.0, 'y': 48.7, 'series': 1}, {'x': 1955.0, 'y': 49.7, 'series': 1}, {'x': 1956.0, 'y': 48.7, 'series': 1}, {'x': 1957.0, 'y': 41.8, 'series': 1}, {'x': 1958.0, 'y': 46.7, 'series': 1}], yAxis: 1}]; 
$scope.data5 = [{key: 'Chartbook series', type: 'line', values: [{'x': 1982.0, 'y': 18.43, 'series': 0}, {'x': 1983.0, 'y': 18.07, 'series': 0}, {'x': 1984.0, 'y': 17.54, 'series': 0}, {'x': 1985.0, 'y': 17.78, 'series': 0}, {'x': 1986.0, 'y': 18.16, 'series': 0}, {'x': 1987.0, 'y': 17.71, 'series': 0}, {'x': 1988.0, 'y': 17.28, 'series': 0}, {'x': 1989.0, 'y': 16.88, 'series': 0}, {'x': 1990.0, 'y': 16.82, 'series': 0}, {'x': 1991.0, 'y': 16.12, 'series': 0}, {'x': 1992.0, 'y': 16.02, 'series': 0}, {'x': 1993.0, 'y': 16.62, 'series': 0}, {'x': 1994.0, 'y': 16.33, 'series': 0}, {'x': 1995.0, 'y': 15.93, 'series': 0}, {'x': 1996.0, 'y': 16.62, 'series': 0}, {'x': 1997.0, 'y': 17.39, 'series': 0}, {'x': 1998.0, 'y': 17.23, 'series': 0}, {'x': 1999.0, 'y': 17.19, 'series': 0}, {'x': 2000.0, 'y': 18.53, 'series': 0}, {'x': 2001.0, 'y': 18.47, 'series': 0}, {'x': 2002.0, 'y': 20.01, 'series': 0}, {'x': 2003.0, 'y': 19.44, 'series': 0}, {'x': 2004.0, 'y': 19.56, 'series': 0}, {'x': 2005.0, 'y': 18.93, 'series': 0}, {'x': 2006.0, 'y': 19.22, 'series': 0}, {'x': 2007.0, 'y': 19.65, 'series': 0}], yAxis: 1}, {key: 'Alvaredo & Saez (2010) - Individual net wealth including real estate', type: 'scatter', values: [{'x': 1982.0, 'y': 18.43, 'series': 1}, {'x': 1983.0, 'y': 18.07, 'series': 1}, {'x': 1984.0, 'y': 17.54, 'series': 1}, {'x': 1985.0, 'y': 17.78, 'series': 1}, {'x': 1986.0, 'y': 18.16, 'series': 1}, {'x': 1987.0, 'y': 17.71, 'series': 1}, {'x': 1988.0, 'y': 17.28, 'series': 1}, {'x': 1989.0, 'y': 16.88, 'series': 1}, {'x': 1990.0, 'y': 16.82, 'series': 1}, {'x': 1991.0, 'y': 16.12, 'series': 1}, {'x': 1992.0, 'y': 16.02, 'series': 1}, {'x': 1993.0, 'y': 16.62, 'series': 1}, {'x': 1994.0, 'y': 16.33, 'series': 1}, {'x': 1995.0, 'y': 15.93, 'series': 1}, {'x': 1996.0, 'y': 16.62, 'series': 1}, {'x': 1997.0, 'y': 17.39, 'series': 1}, {'x': 1998.0, 'y': 17.23, 'series': 1}, {'x': 1999.0, 'y': 17.19, 'series': 1}, {'x': 2000.0, 'y': 18.53, 'series': 1}, {'x': 2001.0, 'y': 18.47, 'series': 1}, {'x': 2002.0, 'y': 20.01, 'series': 1}, {'x': 2003.0, 'y': 19.44, 'series': 1}, {'x': 2004.0, 'y': 19.56, 'series': 1}, {'x': 2005.0, 'y': 18.93, 'series': 1}, {'x': 2006.0, 'y': 19.22, 'series': 1}, {'x': 2007.0, 'y': 19.65, 'series': 1}], yAxis: 1}]
});