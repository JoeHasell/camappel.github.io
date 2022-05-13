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
$scope.data0 = [{key: 'Chartbook series', type: 'line', values: [{'x': 1918.0, 'y': 40.82335952, 'series': 0}, {'x': 1929.0, 'y': 48.91159093, 'series': 0}, {'x': 1936.0, 'y': 45.53505112, 'series': 0}, {'x': 1941.0, 'y': 43.12323697, 'series': 0}, {'x': 1944.0, 'y': 39.14567308, 'series': 0}, {'x': 1945.0, 'y': 36.90108173, 'series': 0}, {'x': 1947.0, 'y': 38.60697115, 'series': 0}, {'x': 1948.0, 'y': 38.06826923, 'series': 0}, {'x': 1949.0, 'y': 38.42740385, 'series': 0}, {'x': 1950.0, 'y': 38.69675481, 'series': 0}, {'x': 1951.0, 'y': 37.35, 'series': 0}, {'x': 1952.0, 'y': 37.35, 'series': 0}, {'x': 1954.0, 'y': 38.5171875, 'series': 0}, {'x': 1955.0, 'y': 37.70913462, 'series': 0}, {'x': 1956.0, 'y': 37.26021635, 'series': 0}, {'x': 1957.0, 'y': 37.52956731, 'series': 0}, {'x': 1958.0, 'y': 37.35, 'series': 0}, {'x': 1959.0, 'y': 37.88870192, 'series': 0}, {'x': 1960.0, 'y': 37.97848558, 'series': 0}, {'x': 1961.0, 'y': 38.78653846, 'series': 0}, {'x': 1962.0, 'y': 37.79891827, 'series': 0}, {'x': 1963.0, 'y': 37.52956731, 'series': 0}, {'x': 1964.0, 'y': 37.61935096, 'series': 0}, {'x': 1965.0, 'y': 37.43978365, 'series': 0}, {'x': 1966.0, 'y': 37.08064904, 'series': 0}, {'x': 1967.0, 'y': 37.35, 'series': 0}, {'x': 1968.0, 'y': 36.25, 'series': 0}, {'x': 1969.0, 'y': 36.45, 'series': 0}, {'x': 1970.0, 'y': 36.85, 'series': 0}, {'x': 1971.0, 'y': 37.05, 'series': 0}, {'x': 1972.0, 'y': 37.35, 'series': 0}, {'x': 1973.0, 'y': 37.15, 'series': 0}, {'x': 1974.0, 'y': 36.55, 'series': 0}, {'x': 1975.0, 'y': 37.05, 'series': 0}, {'x': 1976.0, 'y': 37.05, 'series': 0}, {'x': 1977.0, 'y': 37.35, 'series': 0}, {'x': 1978.0, 'y': 37.45, 'series': 0}, {'x': 1979.0, 'y': 37.75, 'series': 0}, {'x': 1980.0, 'y': 37.85, 'series': 0}, {'x': 1981.0, 'y': 38.45, 'series': 0}, {'x': 1982.0, 'y': 39.55, 'series': 0}, {'x': 1983.0, 'y': 40.05, 'series': 0}, {'x': 1984.0, 'y': 40.05, 'series': 0}, {'x': 1985.0, 'y': 40.55, 'series': 0}, {'x': 1986.0, 'y': 40.85, 'series': 0}, {'x': 1987.0, 'y': 41.05, 'series': 0}, {'x': 1988.0, 'y': 41.35, 'series': 0}, {'x': 1989.0, 'y': 41.95, 'series': 0}, {'x': 1990.0, 'y': 41.75, 'series': 0}, {'x': 1991.0, 'y': 41.75, 'series': 0}, {'x': 1992.0, 'y': 42.45, 'series': 0}, {'x': 1993.0, 'y': 43.6, 'series': 0}, {'x': 1994.0, 'y': 43.6, 'series': 0}, {'x': 1995.0, 'y': 43.3, 'series': 0}, {'x': 1996.0, 'y': 43.7, 'series': 0}, {'x': 1997.0, 'y': 44.0, 'series': 0}, {'x': 1998.0, 'y': 43.9, 'series': 0}, {'x': 1999.0, 'y': 44.1, 'series': 0}, {'x': 2000.0, 'y': 44.2, 'series': 0}, {'x': 2001.0, 'y': 44.6, 'series': 0}, {'x': 2002.0, 'y': 44.3, 'series': 0}, {'x': 2003.0, 'y': 44.5, 'series': 0}, {'x': 2004.0, 'y': 44.7, 'series': 0}, {'x': 2005.0, 'y': 45.0, 'series': 0}, {'x': 2006.0, 'y': 45.2, 'series': 0}, {'x': 2007.0, 'y': 44.4, 'series': 0}, {'x': 2008.0, 'y': 45.0, 'series': 0}, {'x': 2009.0, 'y': 45.6, 'series': 0}, {'x': 2010.0, 'y': 45.6, 'series': 0}, {'x': 2011.0, 'y': 46.3, 'series': 0}, {'x': 2012.0, 'y': 46.3, 'series': 0}, {'x': 2013.0, 'y': 45.9, 'series': 0}, {'x': 2014.0, 'y': 45.60513919, 'series': 0}, {'x': 2015.0, 'y': 45.40856531, 'series': 0}, {'x': 2016.0, 'y': 45.60513919, 'series': 0}, {'x': 2017.0, 'y': 45.50685225, 'series': 0}, {'x': 2018.0, 'y': 47.76745182, 'series': 0}, {'x': 2019.0, 'y': 47.57087794, 'series': 0}, {'x': 2020.0, 'y': 48.06231263, 'series': 0}], yAxis: 1}, {key: 'Mitchell et al (1921) - Gross equivalised household income', type: 'scatter', values: [{'x': 1918.0, 'y': 39.52, 'series': 1}, {'x': 1929.0, 'y': 47.35, 'series': 1}, {'x': 2020.0, 'y': null, 'series': 0}], yAxis: 1}, {key: 'Brandolini (2002) - Gross family income', type: 'scatter', values: [{'x': 1918.0, 'y': null, 'series': 0}, {'x': 1929.0, 'y': 50.7, 'series': 2}, {'x': 1936.0, 'y': 47.2, 'series': 2}, {'x': 1941.0, 'y': 44.7, 'series': 2}, {'x': 1944.0, 'y': 40.577, 'series': 2}, {'x': 2020.0, 'y': null, 'series': 0}], yAxis: 1}, {key: 'Budd (1970) - Money income (consumer units) (family and unrelated individuals)', type: 'scatter', values: [{'x': 1918.0, 'y': null, 'series': 0}, {'x': 1944.0, 'y': 43.6, 'series': 3}, {'x': 1945.0, 'y': 41.1, 'series': 3}, {'x': 1947.0, 'y': 43.0, 'series': 3}, {'x': 1948.0, 'y': 42.4, 'series': 3}, {'x': 1949.0, 'y': 42.8, 'series': 3}, {'x': 1950.0, 'y': 43.1, 'series': 3}, {'x': 1951.0, 'y': 41.6, 'series': 3}, {'x': 1952.0, 'y': 41.6, 'series': 3}, {'x': 1954.0, 'y': 42.9, 'series': 3}, {'x': 1955.0, 'y': 42.0, 'series': 3}, {'x': 1956.0, 'y': 41.5, 'series': 3}, {'x': 1957.0, 'y': 41.8, 'series': 3}, {'x': 1958.0, 'y': 41.6, 'series': 3}, {'x': 1959.0, 'y': 42.2, 'series': 3}, {'x': 1960.0, 'y': 42.3, 'series': 3}, {'x': 1961.0, 'y': 43.2, 'series': 3}, {'x': 1962.0, 'y': 42.1, 'series': 3}, {'x': 1963.0, 'y': 41.8, 'series': 3}, {'x': 1964.0, 'y': 41.9, 'series': 3}, {'x': 1965.0, 'y': 41.7, 'series': 3}, {'x': 1966.0, 'y': 41.3, 'series': 3}, {'x': 1967.0, 'y': 41.6, 'series': 3}, {'x': 1968.0, 'y': 40.6, 'series': 3}, {'x': 2020.0, 'y': null, 'series': 0}], yAxis: 1}, {key: 'United States Census Bureau (2016) - Gross equivalised household income', type: 'scatter', values: [{'x': 1918.0, 'y': null, 'series': 0}, {'x': 1967.0, 'y': 36.2, 'series': 4}, {'x': 1968.0, 'y': 35.1, 'series': 4}, {'x': 1969.0, 'y': 35.3, 'series': 4}, {'x': 1970.0, 'y': 35.7, 'series': 4}, {'x': 1971.0, 'y': 35.9, 'series': 4}, {'x': 1972.0, 'y': 36.2, 'series': 4}, {'x': 1973.0, 'y': 36.0, 'series': 4}, {'x': 1974.0, 'y': 35.4, 'series': 4}, {'x': 1975.0, 'y': 35.9, 'series': 4}, {'x': 1976.0, 'y': 35.9, 'series': 4}, {'x': 1977.0, 'y': 36.2, 'series': 4}, {'x': 1978.0, 'y': 36.3, 'series': 4}, {'x': 1979.0, 'y': 36.6, 'series': 4}, {'x': 1980.0, 'y': 36.7, 'series': 4}, {'x': 1981.0, 'y': 37.3, 'series': 4}, {'x': 1982.0, 'y': 38.4, 'series': 4}, {'x': 1983.0, 'y': 38.9, 'series': 4}, {'x': 1984.0, 'y': 38.9, 'series': 4}, {'x': 1985.0, 'y': 39.4, 'series': 4}, {'x': 1986.0, 'y': 39.7, 'series': 4}, {'x': 1987.0, 'y': 39.9, 'series': 4}, {'x': 1988.0, 'y': 40.2, 'series': 4}, {'x': 1989.0, 'y': 40.8, 'series': 4}, {'x': 1990.0, 'y': 40.6, 'series': 4}, {'x': 1991.0, 'y': 40.6, 'series': 4}, {'x': 1992.0, 'y': 41.3, 'series': 4}, {'x': 1993.0, 'y': 43.6, 'series': 4}, {'x': 1994.0, 'y': 43.6, 'series': 4}, {'x': 1995.0, 'y': 43.3, 'series': 4}, {'x': 1996.0, 'y': 43.7, 'series': 4}, {'x': 1997.0, 'y': 44.0, 'series': 4}, {'x': 1998.0, 'y': 43.9, 'series': 4}, {'x': 1999.0, 'y': 44.1, 'series': 4}, {'x': 2000.0, 'y': 44.2, 'series': 4}, {'x': 2001.0, 'y': 44.6, 'series': 4}, {'x': 2002.0, 'y': 44.3, 'series': 4}, {'x': 2003.0, 'y': 44.5, 'series': 4}, {'x': 2004.0, 'y': 44.7, 'series': 4}, {'x': 2005.0, 'y': 45.0, 'series': 4}, {'x': 2006.0, 'y': 45.2, 'series': 4}, {'x': 2007.0, 'y': 44.4, 'series': 4}, {'x': 2008.0, 'y': 45.0, 'series': 4}, {'x': 2009.0, 'y': 45.6, 'series': 4}, {'x': 2010.0, 'y': 45.6, 'series': 4}, {'x': 2011.0, 'y': 46.3, 'series': 4}, {'x': 2012.0, 'y': 46.3, 'series': 4}, {'x': 2013.0, 'y': 45.9, 'series': 4}, {'x': 2020.0, 'y': null, 'series': 0}], yAxis: 1}, {key: 'United States Census Bureau (2016) - Gross equivalised household income', type: 'scatter', values: [{'x': 1918.0, 'y': null, 'series': 0}, {'x': 2013.0, 'y': 46.7, 'series': 5}, {'x': 2014.0, 'y': 46.4, 'series': 5}, {'x': 2015.0, 'y': 46.2, 'series': 5}, {'x': 2016.0, 'y': 46.4, 'series': 5}, {'x': 2017.0, 'y': 46.3, 'series': 5}, {'x': 2020.0, 'y': null, 'series': 0}], yAxis: 1}, {key: 'United States Census Bureau (2018) - Gross equivalised household income', type: 'scatter', values: [{'x': 1918.0, 'y': null, 'series': 0}, {'x': 2017.0, 'y': 48.9, 'series': 6}, {'x': 2018.0, 'y': 48.6, 'series': 6}, {'x': 2020.0, 'y': null, 'series': 0}], yAxis: 1}, {key: 'United States Census Bureau (2020) - Gross equivalised household income', type: 'scatter', values: [{'x': 1918.0, 'y': null, 'series': 0}, {'x': 2019.0, 'y': 48.4, 'series': 7}, {'x': 2020.0, 'y': 48.9, 'series': 7}], yAxis: 1}]; 
$scope.data1 = [{key: 'Chartbook series', type: 'line', values: [{'x': 1913.0, 'y': 20.52, 'series': 0}, {'x': 1914.0, 'y': 21.01, 'series': 0}, {'x': 1915.0, 'y': 20.37, 'series': 0}, {'x': 1916.0, 'y': 21.46, 'series': 0}, {'x': 1917.0, 'y': 21.39, 'series': 0}, {'x': 1918.0, 'y': 19.78, 'series': 0}, {'x': 1919.0, 'y': 21.73, 'series': 0}, {'x': 1920.0, 'y': 19.21, 'series': 0}, {'x': 1921.0, 'y': 19.26, 'series': 0}, {'x': 1922.0, 'y': 18.65, 'series': 0}, {'x': 1923.0, 'y': 17.78, 'series': 0}, {'x': 1924.0, 'y': 18.55, 'series': 0}, {'x': 1925.0, 'y': 20.77, 'series': 0}, {'x': 1926.0, 'y': 22.0, 'series': 0}, {'x': 1927.0, 'y': 21.33, 'series': 0}, {'x': 1928.0, 'y': 22.38, 'series': 0}, {'x': 1929.0, 'y': 22.27, 'series': 0}, {'x': 1930.0, 'y': 19.46, 'series': 0}, {'x': 1931.0, 'y': 16.83, 'series': 0}, {'x': 1932.0, 'y': 16.58, 'series': 0}, {'x': 1933.0, 'y': 17.55, 'series': 0}, {'x': 1934.0, 'y': 19.14, 'series': 0}, {'x': 1935.0, 'y': 19.41, 'series': 0}, {'x': 1936.0, 'y': 21.02, 'series': 0}, {'x': 1937.0, 'y': 20.74, 'series': 0}, {'x': 1938.0, 'y': 18.74, 'series': 0}, {'x': 1939.0, 'y': 19.66, 'series': 0}, {'x': 1940.0, 'y': 20.96, 'series': 0}, {'x': 1941.0, 'y': 21.67, 'series': 0}, {'x': 1942.0, 'y': 20.83, 'series': 0}, {'x': 1943.0, 'y': 18.84, 'series': 0}, {'x': 1944.0, 'y': 15.56, 'series': 0}, {'x': 1945.0, 'y': 14.38, 'series': 0}, {'x': 1946.0, 'y': 14.41, 'series': 0}, {'x': 1947.0, 'y': 15.11, 'series': 0}, {'x': 1948.0, 'y': 16.36, 'series': 0}, {'x': 1949.0, 'y': 15.77, 'series': 0}, {'x': 1950.0, 'y': 16.75, 'series': 0}, {'x': 1951.0, 'y': 16.03, 'series': 0}, {'x': 1952.0, 'y': 15.01, 'series': 0}, {'x': 1953.0, 'y': 14.08, 'series': 0}, {'x': 1954.0, 'y': 13.99, 'series': 0}, {'x': 1955.0, 'y': 14.68, 'series': 0}, {'x': 1956.0, 'y': 13.86, 'series': 0}, {'x': 1957.0, 'y': 13.58, 'series': 0}, {'x': 1958.0, 'y': 12.72, 'series': 0}, {'x': 1959.0, 'y': 13.24, 'series': 0}, {'x': 1960.0, 'y': 12.71, 'series': 0}, {'x': 1961.0, 'y': 12.55, 'series': 0}, {'x': 1962.0, 'y': 12.78, 'series': 0}, {'x': 1963.0, 'y': 12.91, 'series': 0}, {'x': 1964.0, 'y': 13.04, 'series': 0}, {'x': 1965.0, 'y': 12.97, 'series': 0}, {'x': 1966.0, 'y': 12.92, 'series': 0}, {'x': 1967.0, 'y': 12.4, 'series': 0}, {'x': 1968.0, 'y': 12.59, 'series': 0}, {'x': 1969.0, 'y': 11.58, 'series': 0}, {'x': 1970.0, 'y': 10.63, 'series': 0}, {'x': 1971.0, 'y': 11.02, 'series': 0}, {'x': 1972.0, 'y': 11.0, 'series': 0}, {'x': 1973.0, 'y': 10.92, 'series': 0}, {'x': 1974.0, 'y': 10.41, 'series': 0}, {'x': 1975.0, 'y': 10.45, 'series': 0}, {'x': 1976.0, 'y': 10.35, 'series': 0}, {'x': 1977.0, 'y': 10.61, 'series': 0}, {'x': 1978.0, 'y': 10.39, 'series': 0}, {'x': 1979.0, 'y': 10.91, 'series': 0}, {'x': 1980.0, 'y': 10.48, 'series': 0}, {'x': 1981.0, 'y': 10.69, 'series': 0}, {'x': 1982.0, 'y': 10.97, 'series': 0}, {'x': 1983.0, 'y': 11.35, 'series': 0}, {'x': 1984.0, 'y': 11.99, 'series': 0}, {'x': 1985.0, 'y': 12.1, 'series': 0}, {'x': 1986.0, 'y': 11.76, 'series': 0}, {'x': 1987.0, 'y': 12.92, 'series': 0}, {'x': 1988.0, 'y': 14.72, 'series': 0}, {'x': 1989.0, 'y': 14.28, 'series': 0}, {'x': 1990.0, 'y': 14.31, 'series': 0}, {'x': 1991.0, 'y': 13.59, 'series': 0}, {'x': 1992.0, 'y': 14.53, 'series': 0}, {'x': 1993.0, 'y': 14.02, 'series': 0}, {'x': 1994.0, 'y': 13.87, 'series': 0}, {'x': 1995.0, 'y': 14.4, 'series': 0}, {'x': 1996.0, 'y': 15.15, 'series': 0}, {'x': 1997.0, 'y': 15.86, 'series': 0}, {'x': 1998.0, 'y': 16.29, 'series': 0}, {'x': 1999.0, 'y': 16.66, 'series': 0}, {'x': 2000.0, 'y': 17.37, 'series': 0}, {'x': 2001.0, 'y': 16.58, 'series': 0}, {'x': 2002.0, 'y': 16.07, 'series': 0}, {'x': 2003.0, 'y': 16.27, 'series': 0}, {'x': 2004.0, 'y': 16.95, 'series': 0}, {'x': 2005.0, 'y': 17.78, 'series': 0}, {'x': 2006.0, 'y': 18.37, 'series': 0}, {'x': 2007.0, 'y': 18.51, 'series': 0}, {'x': 2008.0, 'y': 18.12, 'series': 0}, {'x': 2009.0, 'y': 16.72, 'series': 0}, {'x': 2010.0, 'y': 17.72, 'series': 0}, {'x': 2011.0, 'y': 18.22, 'series': 0}, {'x': 2012.0, 'y': 19.33, 'series': 0}, {'x': 2013.0, 'y': 18.4, 'series': 0}, {'x': 2014.0, 'y': 18.93, 'series': 0}, {'x': 2015.0, 'y': 18.88, 'series': 0}, {'x': 2016.0, 'y': 18.63, 'series': 0}, {'x': 2017.0, 'y': 18.8, 'series': 0}, {'x': 2018.0, 'y': 18.96, 'series': 0}, {'x': 2019.0, 'y': 18.76, 'series': 0}, {'x': 2020.0, 'y': 18.76, 'series': 0}, {'x': 2021.0, 'y': 18.76, 'series': 0}], yAxis: 1}, {key: 'WID - Pre-tax national income (equal-split adults)', type: 'scatter', values: [{'x': 1913.0, 'y': 20.52, 'series': 1}, {'x': 1914.0, 'y': 21.01, 'series': 1}, {'x': 1915.0, 'y': 20.37, 'series': 1}, {'x': 1916.0, 'y': 21.46, 'series': 1}, {'x': 1917.0, 'y': 21.39, 'series': 1}, {'x': 1918.0, 'y': 19.78, 'series': 1}, {'x': 1919.0, 'y': 21.73, 'series': 1}, {'x': 1920.0, 'y': 19.21, 'series': 1}, {'x': 1921.0, 'y': 19.26, 'series': 1}, {'x': 1922.0, 'y': 18.65, 'series': 1}, {'x': 1923.0, 'y': 17.78, 'series': 1}, {'x': 1924.0, 'y': 18.55, 'series': 1}, {'x': 1925.0, 'y': 20.77, 'series': 1}, {'x': 1926.0, 'y': 22.0, 'series': 1}, {'x': 1927.0, 'y': 21.33, 'series': 1}, {'x': 1928.0, 'y': 22.38, 'series': 1}, {'x': 1929.0, 'y': 22.27, 'series': 1}, {'x': 1930.0, 'y': 19.46, 'series': 1}, {'x': 1931.0, 'y': 16.83, 'series': 1}, {'x': 1932.0, 'y': 16.58, 'series': 1}, {'x': 1933.0, 'y': 17.55, 'series': 1}, {'x': 1934.0, 'y': 19.14, 'series': 1}, {'x': 1935.0, 'y': 19.41, 'series': 1}, {'x': 1936.0, 'y': 21.02, 'series': 1}, {'x': 1937.0, 'y': 20.74, 'series': 1}, {'x': 1938.0, 'y': 18.74, 'series': 1}, {'x': 1939.0, 'y': 19.66, 'series': 1}, {'x': 1940.0, 'y': 20.96, 'series': 1}, {'x': 1941.0, 'y': 21.67, 'series': 1}, {'x': 1942.0, 'y': 20.83, 'series': 1}, {'x': 1943.0, 'y': 18.84, 'series': 1}, {'x': 1944.0, 'y': 15.56, 'series': 1}, {'x': 1945.0, 'y': 14.38, 'series': 1}, {'x': 1946.0, 'y': 14.41, 'series': 1}, {'x': 1947.0, 'y': 15.11, 'series': 1}, {'x': 1948.0, 'y': 16.36, 'series': 1}, {'x': 1949.0, 'y': 15.77, 'series': 1}, {'x': 1950.0, 'y': 16.75, 'series': 1}, {'x': 1951.0, 'y': 16.03, 'series': 1}, {'x': 1952.0, 'y': 15.01, 'series': 1}, {'x': 1953.0, 'y': 14.08, 'series': 1}, {'x': 1954.0, 'y': 13.99, 'series': 1}, {'x': 1955.0, 'y': 14.68, 'series': 1}, {'x': 1956.0, 'y': 13.86, 'series': 1}, {'x': 1957.0, 'y': 13.58, 'series': 1}, {'x': 1958.0, 'y': 12.72, 'series': 1}, {'x': 1959.0, 'y': 13.24, 'series': 1}, {'x': 1960.0, 'y': 12.71, 'series': 1}, {'x': 1961.0, 'y': 12.55, 'series': 1}, {'x': 1962.0, 'y': 12.78, 'series': 1}, {'x': 1963.0, 'y': 12.91, 'series': 1}, {'x': 1964.0, 'y': 13.04, 'series': 1}, {'x': 1965.0, 'y': 12.97, 'series': 1}, {'x': 1966.0, 'y': 12.92, 'series': 1}, {'x': 1967.0, 'y': 12.4, 'series': 1}, {'x': 1968.0, 'y': 12.59, 'series': 1}, {'x': 1969.0, 'y': 11.58, 'series': 1}, {'x': 1970.0, 'y': 10.63, 'series': 1}, {'x': 1971.0, 'y': 11.02, 'series': 1}, {'x': 1972.0, 'y': 11.0, 'series': 1}, {'x': 1973.0, 'y': 10.92, 'series': 1}, {'x': 1974.0, 'y': 10.41, 'series': 1}, {'x': 1975.0, 'y': 10.45, 'series': 1}, {'x': 1976.0, 'y': 10.35, 'series': 1}, {'x': 1977.0, 'y': 10.61, 'series': 1}, {'x': 1978.0, 'y': 10.39, 'series': 1}, {'x': 1979.0, 'y': 10.91, 'series': 1}, {'x': 1980.0, 'y': 10.48, 'series': 1}, {'x': 1981.0, 'y': 10.69, 'series': 1}, {'x': 1982.0, 'y': 10.97, 'series': 1}, {'x': 1983.0, 'y': 11.35, 'series': 1}, {'x': 1984.0, 'y': 11.99, 'series': 1}, {'x': 1985.0, 'y': 12.1, 'series': 1}, {'x': 1986.0, 'y': 11.76, 'series': 1}, {'x': 1987.0, 'y': 12.92, 'series': 1}, {'x': 1988.0, 'y': 14.72, 'series': 1}, {'x': 1989.0, 'y': 14.28, 'series': 1}, {'x': 1990.0, 'y': 14.31, 'series': 1}, {'x': 1991.0, 'y': 13.59, 'series': 1}, {'x': 1992.0, 'y': 14.53, 'series': 1}, {'x': 1993.0, 'y': 14.02, 'series': 1}, {'x': 1994.0, 'y': 13.87, 'series': 1}, {'x': 1995.0, 'y': 14.4, 'series': 1}, {'x': 1996.0, 'y': 15.15, 'series': 1}, {'x': 1997.0, 'y': 15.86, 'series': 1}, {'x': 1998.0, 'y': 16.29, 'series': 1}, {'x': 1999.0, 'y': 16.66, 'series': 1}, {'x': 2000.0, 'y': 17.37, 'series': 1}, {'x': 2001.0, 'y': 16.58, 'series': 1}, {'x': 2002.0, 'y': 16.07, 'series': 1}, {'x': 2003.0, 'y': 16.27, 'series': 1}, {'x': 2004.0, 'y': 16.95, 'series': 1}, {'x': 2005.0, 'y': 17.78, 'series': 1}, {'x': 2006.0, 'y': 18.37, 'series': 1}, {'x': 2007.0, 'y': 18.51, 'series': 1}, {'x': 2008.0, 'y': 18.12, 'series': 1}, {'x': 2009.0, 'y': 16.72, 'series': 1}, {'x': 2010.0, 'y': 17.72, 'series': 1}, {'x': 2011.0, 'y': 18.22, 'series': 1}, {'x': 2012.0, 'y': 19.33, 'series': 1}, {'x': 2013.0, 'y': 18.4, 'series': 1}, {'x': 2014.0, 'y': 18.93, 'series': 1}, {'x': 2015.0, 'y': 18.88, 'series': 1}, {'x': 2016.0, 'y': 18.63, 'series': 1}, {'x': 2017.0, 'y': 18.8, 'series': 1}, {'x': 2018.0, 'y': 18.96, 'series': 1}, {'x': 2019.0, 'y': 18.76, 'series': 1}, {'x': 2020.0, 'y': 18.76, 'series': 1}, {'x': 2021.0, 'y': 18.76, 'series': 1}], yAxis: 1}]; 
$scope.data2 = [{key: 'Chartbook series', type: 'line', values: [{'x': 1961.0, 'y': 16.4, 'series': 0}, {'x': 1972.0, 'y': 15.8, 'series': 0}, {'x': 1973.0, 'y': 15.2, 'series': 0}, {'x': 1980.0, 'y': 15.9, 'series': 0}, {'x': 1981.0, 'y': 16.3, 'series': 0}, {'x': 1982.0, 'y': 17.3, 'series': 0}, {'x': 1983.0, 'y': 18.1, 'series': 0}, {'x': 1984.0, 'y': 18.2, 'series': 0}, {'x': 1985.0, 'y': 17.8, 'series': 0}, {'x': 1986.0, 'y': 18.0, 'series': 0}, {'x': 1987.0, 'y': 18.6, 'series': 0}, {'x': 1988.0, 'y': 18.1, 'series': 0}, {'x': 1989.0, 'y': 18.2, 'series': 0}, {'x': 1990.0, 'y': 18.1, 'series': 0}, {'x': 1991.0, 'y': 18.3, 'series': 0}, {'x': 1992.0, 'y': 18.6, 'series': 0}, {'x': 1993.0, 'y': 18.6, 'series': 0}, {'x': 1994.0, 'y': 17.8, 'series': 0}, {'x': 1995.0, 'y': 17.1, 'series': 0}, {'x': 1996.0, 'y': 17.2, 'series': 0}, {'x': 1997.0, 'y': 17.2, 'series': 0}, {'x': 1998.0, 'y': 17.1, 'series': 0}, {'x': 1999.0, 'y': 17.1, 'series': 0}, {'x': 2000.0, 'y': 16.9, 'series': 0}, {'x': 2001.0, 'y': 16.8, 'series': 0}, {'x': 2002.0, 'y': 16.9, 'series': 0}, {'x': 2003.0, 'y': 17.5, 'series': 0}, {'x': 2004.0, 'y': 17.4, 'series': 0}, {'x': 2005.0, 'y': 17.3, 'series': 0}, {'x': 2006.0, 'y': 17.0, 'series': 0}, {'x': 2007.0, 'y': 17.5, 'series': 0}, {'x': 2008.0, 'y': 17.3, 'series': 0}, {'x': 2009.0, 'y': 16.5, 'series': 0}, {'x': 2010.0, 'y': 17.4, 'series': 0}, {'x': 2011.0, 'y': 17.1, 'series': 0}, {'x': 2012.0, 'y': 17.4, 'series': 0}, {'x': 2013.0, 'y': 17.2, 'series': 0}, {'x': 2014.0, 'y': 17.5, 'series': 0}, {'x': 2015.0, 'y': 16.8, 'series': 0}, {'x': 2016.0, 'y': 17.8, 'series': 0}, {'x': 2017.0, 'y': 17.8, 'series': 0}, {'x': 2018.0, 'y': 18.1, 'series': 0}, {'x': 2019.0, 'y': 18.0, 'series': 0}], yAxis: 1}, {key: 'Meyer and Sullivan (2010) - Equivalised household income', type: 'scatter', values: [{'x': 1961.0, 'y': 16.4, 'series': 1}, {'x': 1972.0, 'y': 15.8, 'series': 1}, {'x': 1973.0, 'y': 15.2, 'series': 1}, {'x': 1980.0, 'y': 15.9, 'series': 1}, {'x': 1981.0, 'y': 16.3, 'series': 1}, {'x': 1982.0, 'y': 17.3, 'series': 1}, {'x': 1983.0, 'y': 18.1, 'series': 1}, {'x': 1984.0, 'y': 18.2, 'series': 1}, {'x': 1985.0, 'y': 17.8, 'series': 1}, {'x': 1986.0, 'y': 18.0, 'series': 1}, {'x': 1987.0, 'y': 18.6, 'series': 1}, {'x': 1988.0, 'y': 18.1, 'series': 1}, {'x': 1989.0, 'y': 18.2, 'series': 1}, {'x': 1990.0, 'y': 18.1, 'series': 1}, {'x': 1991.0, 'y': 18.3, 'series': 1}, {'x': 1992.0, 'y': 18.6, 'series': 1}, {'x': 1993.0, 'y': 18.6, 'series': 1}, {'x': 1994.0, 'y': 17.8, 'series': 1}, {'x': 1995.0, 'y': 17.1, 'series': 1}, {'x': 1996.0, 'y': 17.2, 'series': 1}, {'x': 1997.0, 'y': 17.2, 'series': 1}, {'x': 1998.0, 'y': 17.1, 'series': 1}, {'x': 1999.0, 'y': 17.1, 'series': 1}, {'x': 2000.0, 'y': 16.9, 'series': 1}, {'x': 2001.0, 'y': 16.8, 'series': 1}, {'x': 2002.0, 'y': 16.9, 'series': 1}, {'x': 2003.0, 'y': 17.5, 'series': 1}, {'x': 2004.0, 'y': 17.4, 'series': 1}, {'x': 2005.0, 'y': 17.3, 'series': 1}, {'x': 2006.0, 'y': 17.0, 'series': 1}, {'x': 2007.0, 'y': 17.5, 'series': 1}, {'x': 2008.0, 'y': 17.3, 'series': 1}, {'x': 2019.0, 'y': null, 'series': 0}], yAxis: 1}, {key: 'OECD - Equivalised disposable household income (2011 methodology)', type: 'scatter', values: [{'x': 1961.0, 'y': null, 'series': 0}, {'x': 2004.0, 'y': 17.0, 'series': 2}, {'x': 2005.0, 'y': 17.0, 'series': 2}, {'x': 2006.0, 'y': 16.8, 'series': 2}, {'x': 2007.0, 'y': 17.6, 'series': 2}, {'x': 2008.0, 'y': 17.3, 'series': 2}, {'x': 2009.0, 'y': 16.5, 'series': 2}, {'x': 2010.0, 'y': 17.4, 'series': 2}, {'x': 2011.0, 'y': 17.1, 'series': 2}, {'x': 2012.0, 'y': 17.4, 'series': 2}, {'x': 2019.0, 'y': null, 'series': 0}], yAxis: 1}, {key: 'OECD - Equivalised disposable household income (2012 methodology)', type: 'scatter', values: [{'x': 1961.0, 'y': null, 'series': 0}, {'x': 2013.0, 'y': 17.2, 'series': 3}, {'x': 2014.0, 'y': 17.5, 'series': 3}, {'x': 2015.0, 'y': 16.8, 'series': 3}, {'x': 2016.0, 'y': 17.8, 'series': 3}, {'x': 2017.0, 'y': 17.8, 'series': 3}, {'x': 2018.0, 'y': 18.1, 'series': 3}, {'x': 2019.0, 'y': 18.0, 'series': 3}], yAxis: 1}]; 
$scope.data3 = [{key: 'Chartbook series', type: 'line', values: [{'x': 1917.0, 'y': 34.33170732, 'series': 0}, {'x': 1918.0, 'y': 31.36476965, 'series': 0}, {'x': 1919.0, 'y': 33.90785908, 'series': 0}, {'x': 1920.0, 'y': 30.17799458, 'series': 0}, {'x': 1921.0, 'y': 31.19523035, 'series': 0}, {'x': 1922.0, 'y': 33.82308943, 'series': 0}, {'x': 1923.0, 'y': 30.00845528, 'series': 0}, {'x': 1924.0, 'y': 31.70384824, 'series': 0}, {'x': 1925.0, 'y': 34.67078591, 'series': 0}, {'x': 1926.0, 'y': 36.11186992, 'series': 0}, {'x': 1927.0, 'y': 38.06157182, 'series': 0}, {'x': 1928.0, 'y': 40.5198916, 'series': 0}, {'x': 1929.0, 'y': 40.68943089, 'series': 0}, {'x': 1930.0, 'y': 36.7900271, 'series': 0}, {'x': 1931.0, 'y': 32.72108401, 'series': 0}, {'x': 1932.0, 'y': 32.29723577, 'series': 0}, {'x': 1933.0, 'y': 34.24693767, 'series': 0}, {'x': 1934.0, 'y': 34.75555556, 'series': 0}, {'x': 1935.0, 'y': 34.33170732, 'series': 0}, {'x': 1936.0, 'y': 36.45094851, 'series': 0}, {'x': 1937.0, 'y': 36.9595664, 'series': 0}, {'x': 1938.0, 'y': 33.65355014, 'series': 0}, {'x': 1939.0, 'y': 34.58601626, 'series': 0}, {'x': 1940.0, 'y': 31.87338753, 'series': 0}, {'x': 1941.0, 'y': 29.3302981, 'series': 0}, {'x': 1942.0, 'y': 28.90644986, 'series': 0}, {'x': 1943.0, 'y': 29.16075881, 'series': 0}, {'x': 1944.0, 'y': 26.95674797, 'series': 0}, {'x': 1945.0, 'y': 27.21105691, 'series': 0}, {'x': 1946.0, 'y': 25.34612466, 'series': 0}, {'x': 1947.0, 'y': 24.24411924, 'series': 0}, {'x': 1948.0, 'y': 23.73550136, 'series': 0}, {'x': 1949.0, 'y': 23.05734417, 'series': 0}, {'x': 1950.0, 'y': 24.15934959, 'series': 0}, {'x': 1951.0, 'y': 23.820271, 'series': 0}, {'x': 1952.0, 'y': 23.48119241, 'series': 0}, {'x': 1953.0, 'y': 22.46395664, 'series': 0}, {'x': 1954.0, 'y': 23.05734417, 'series': 0}, {'x': 1955.0, 'y': 23.31165312, 'series': 0}, {'x': 1956.0, 'y': 23.65073171, 'series': 0}, {'x': 1957.0, 'y': 23.31165312, 'series': 0}, {'x': 1958.0, 'y': 22.97257453, 'series': 0}, {'x': 1959.0, 'y': 23.56596206, 'series': 0}, {'x': 1960.0, 'y': 23.56596206, 'series': 0}, {'x': 1961.0, 'y': 23.73550136, 'series': 0}, {'x': 1962.0, 'y': 23.820271, 'series': 0}, {'x': 1963.0, 'y': 23.39642276, 'series': 0}, {'x': 1964.0, 'y': 22.97257453, 'series': 0}, {'x': 1965.0, 'y': 22.80303523, 'series': 0}, {'x': 1966.0, 'y': 22.54872629, 'series': 0}, {'x': 1967.0, 'y': 22.46395664, 'series': 0}, {'x': 1968.0, 'y': 22.71826558, 'series': 0}, {'x': 1969.0, 'y': 22.2096477, 'series': 0}, {'x': 1970.0, 'y': 21.95533875, 'series': 0}, {'x': 1971.0, 'y': 21.53149051, 'series': 0}, {'x': 1972.0, 'y': 20.93810298, 'series': 0}, {'x': 1973.0, 'y': 20.2599458, 'series': 0}, {'x': 1974.0, 'y': 19.83609756, 'series': 0}, {'x': 1975.0, 'y': 19.32747967, 'series': 0}, {'x': 1976.0, 'y': 18.73409214, 'series': 0}, {'x': 1977.0, 'y': 18.56455285, 'series': 0}, {'x': 1978.0, 'y': 18.39501355, 'series': 0}, {'x': 1979.0, 'y': 18.98840108, 'series': 0}, {'x': 1980.0, 'y': 19.07317073, 'series': 0}, {'x': 1981.0, 'y': 19.83609756, 'series': 0}, {'x': 1982.0, 'y': 20.17517615, 'series': 0}, {'x': 1983.0, 'y': 19.24271003, 'series': 0}, {'x': 1984.0, 'y': 19.41224932, 'series': 0}, {'x': 1985.0, 'y': 19.58178862, 'series': 0}, {'x': 1986.0, 'y': 19.49701897, 'series': 0}, {'x': 1987.0, 'y': 20.85333333, 'series': 0}, {'x': 1988.0, 'y': 22.46395664, 'series': 0}, {'x': 1989.0, 'y': 22.54872629, 'series': 0}, {'x': 1990.0, 'y': 22.63349593, 'series': 0}, {'x': 1991.0, 'y': 22.0401084, 'series': 0}, {'x': 1992.0, 'y': 23.39642276, 'series': 0}, {'x': 1993.0, 'y': 23.48119241, 'series': 0}, {'x': 1994.0, 'y': 23.39642276, 'series': 0}, {'x': 1995.0, 'y': 23.65073171, 'series': 0}, {'x': 1996.0, 'y': 24.24411924, 'series': 0}, {'x': 1997.0, 'y': 25.00704607, 'series': 0}, {'x': 1998.0, 'y': 26.02428184, 'series': 0}, {'x': 1999.0, 'y': 26.70243902, 'series': 0}, {'x': 2000.0, 'y': 27.38059621, 'series': 0}, {'x': 2001.0, 'y': 26.53289973, 'series': 0}, {'x': 2002.0, 'y': 25.6004336, 'series': 0}, {'x': 2003.0, 'y': 25.68520325, 'series': 0}, {'x': 2004.0, 'y': 26.70243902, 'series': 0}, {'x': 2005.0, 'y': 27.21105691, 'series': 0}, {'x': 2006.0, 'y': 27.80444444, 'series': 0}, {'x': 2007.0, 'y': 28.82168022, 'series': 0}, {'x': 2008.0, 'y': 30.60184282, 'series': 0}, {'x': 2009.0, 'y': 30.60184282, 'series': 0}, {'x': 2010.0, 'y': 31.87338753, 'series': 0}, {'x': 2011.0, 'y': 31.70384824, 'series': 0}, {'x': 2012.0, 'y': 32.89062331, 'series': 0}, {'x': 2013.0, 'y': 31.36476965, 'series': 0}, {'x': 2014.0, 'y': 31.53430894, 'series': 0}, {'x': 2015.0, 'y': 31.53430894, 'series': 0}, {'x': 2016.0, 'y': 31.28, 'series': 0}, {'x': 2017.0, 'y': 31.2, 'series': 0}, {'x': 2018.0, 'y': 31.05, 'series': 0}, {'x': 2019.0, 'y': 30.98, 'series': 0}, {'x': 2020.0, 'y': 30.6, 'series': 0}], yAxis: 1}, {key: 'Zuccman (2019) - Equivalised household net wealth', type: 'scatter', values: [{'x': 1917.0, 'y': 40.5, 'series': 1}, {'x': 1918.0, 'y': 37.0, 'series': 1}, {'x': 1919.0, 'y': 40.0, 'series': 1}, {'x': 1920.0, 'y': 35.6, 'series': 1}, {'x': 1921.0, 'y': 36.8, 'series': 1}, {'x': 1922.0, 'y': 39.9, 'series': 1}, {'x': 1923.0, 'y': 35.4, 'series': 1}, {'x': 1924.0, 'y': 37.4, 'series': 1}, {'x': 1925.0, 'y': 40.9, 'series': 1}, {'x': 1926.0, 'y': 42.6, 'series': 1}, {'x': 1927.0, 'y': 44.9, 'series': 1}, {'x': 1928.0, 'y': 47.8, 'series': 1}, {'x': 1929.0, 'y': 48.0, 'series': 1}, {'x': 1930.0, 'y': 43.4, 'series': 1}, {'x': 1931.0, 'y': 38.6, 'series': 1}, {'x': 1932.0, 'y': 38.1, 'series': 1}, {'x': 1933.0, 'y': 40.4, 'series': 1}, {'x': 1934.0, 'y': 41.0, 'series': 1}, {'x': 1935.0, 'y': 40.5, 'series': 1}, {'x': 1936.0, 'y': 43.0, 'series': 1}, {'x': 1937.0, 'y': 43.6, 'series': 1}, {'x': 1938.0, 'y': 39.7, 'series': 1}, {'x': 1939.0, 'y': 40.8, 'series': 1}, {'x': 1940.0, 'y': 37.6, 'series': 1}, {'x': 1941.0, 'y': 34.6, 'series': 1}, {'x': 1942.0, 'y': 34.1, 'series': 1}, {'x': 1943.0, 'y': 34.4, 'series': 1}, {'x': 1944.0, 'y': 31.8, 'series': 1}, {'x': 1945.0, 'y': 32.1, 'series': 1}, {'x': 1946.0, 'y': 29.9, 'series': 1}, {'x': 1947.0, 'y': 28.6, 'series': 1}, {'x': 1948.0, 'y': 28.0, 'series': 1}, {'x': 1949.0, 'y': 27.2, 'series': 1}, {'x': 1950.0, 'y': 28.5, 'series': 1}, {'x': 1951.0, 'y': 28.1, 'series': 1}, {'x': 1952.0, 'y': 27.7, 'series': 1}, {'x': 1953.0, 'y': 26.5, 'series': 1}, {'x': 1954.0, 'y': 27.2, 'series': 1}, {'x': 1955.0, 'y': 27.5, 'series': 1}, {'x': 1956.0, 'y': 27.9, 'series': 1}, {'x': 1957.0, 'y': 27.5, 'series': 1}, {'x': 1958.0, 'y': 27.1, 'series': 1}, {'x': 1959.0, 'y': 27.8, 'series': 1}, {'x': 1960.0, 'y': 27.8, 'series': 1}, {'x': 1961.0, 'y': 28.0, 'series': 1}, {'x': 1962.0, 'y': 28.1, 'series': 1}, {'x': 1963.0, 'y': 27.6, 'series': 1}, {'x': 1964.0, 'y': 27.1, 'series': 1}, {'x': 1965.0, 'y': 26.9, 'series': 1}, {'x': 1966.0, 'y': 26.6, 'series': 1}, {'x': 1967.0, 'y': 26.5, 'series': 1}, {'x': 1968.0, 'y': 26.8, 'series': 1}, {'x': 1969.0, 'y': 26.2, 'series': 1}, {'x': 1970.0, 'y': 25.9, 'series': 1}, {'x': 1971.0, 'y': 25.4, 'series': 1}, {'x': 1972.0, 'y': 24.7, 'series': 1}, {'x': 1973.0, 'y': 23.9, 'series': 1}, {'x': 1974.0, 'y': 23.4, 'series': 1}, {'x': 1975.0, 'y': 22.8, 'series': 1}, {'x': 1976.0, 'y': 22.1, 'series': 1}, {'x': 1977.0, 'y': 21.9, 'series': 1}, {'x': 1978.0, 'y': 21.7, 'series': 1}, {'x': 1979.0, 'y': 22.4, 'series': 1}, {'x': 1980.0, 'y': 22.5, 'series': 1}, {'x': 1981.0, 'y': 23.4, 'series': 1}, {'x': 1982.0, 'y': 23.8, 'series': 1}, {'x': 1983.0, 'y': 22.7, 'series': 1}, {'x': 1984.0, 'y': 22.9, 'series': 1}, {'x': 1985.0, 'y': 23.1, 'series': 1}, {'x': 1986.0, 'y': 23.0, 'series': 1}, {'x': 1987.0, 'y': 24.6, 'series': 1}, {'x': 1988.0, 'y': 26.5, 'series': 1}, {'x': 1989.0, 'y': 26.6, 'series': 1}, {'x': 1990.0, 'y': 26.7, 'series': 1}, {'x': 1991.0, 'y': 26.0, 'series': 1}, {'x': 1992.0, 'y': 27.6, 'series': 1}, {'x': 1993.0, 'y': 27.7, 'series': 1}, {'x': 1994.0, 'y': 27.6, 'series': 1}, {'x': 1995.0, 'y': 27.9, 'series': 1}, {'x': 1996.0, 'y': 28.6, 'series': 1}, {'x': 1997.0, 'y': 29.5, 'series': 1}, {'x': 1998.0, 'y': 30.7, 'series': 1}, {'x': 1999.0, 'y': 31.5, 'series': 1}, {'x': 2000.0, 'y': 32.3, 'series': 1}, {'x': 2001.0, 'y': 31.3, 'series': 1}, {'x': 2002.0, 'y': 30.2, 'series': 1}, {'x': 2003.0, 'y': 30.3, 'series': 1}, {'x': 2004.0, 'y': 31.5, 'series': 1}, {'x': 2005.0, 'y': 32.1, 'series': 1}, {'x': 2006.0, 'y': 32.8, 'series': 1}, {'x': 2007.0, 'y': 34.0, 'series': 1}, {'x': 2008.0, 'y': 36.1, 'series': 1}, {'x': 2009.0, 'y': 36.1, 'series': 1}, {'x': 2010.0, 'y': 37.6, 'series': 1}, {'x': 2011.0, 'y': 37.4, 'series': 1}, {'x': 2012.0, 'y': 38.8, 'series': 1}, {'x': 2013.0, 'y': 37.0, 'series': 1}, {'x': 2014.0, 'y': 37.2, 'series': 1}, {'x': 2015.0, 'y': 37.2, 'series': 1}, {'x': 2016.0, 'y': 36.9, 'series': 1}, {'x': 2020.0, 'y': null, 'series': 0}], yAxis: 1}, {key: 'Batty et al (2019) - Household net wealth', type: 'scatter', values: [{'x': 1917.0, 'y': null, 'series': 0}, {'x': 2016.0, 'y': 31.28, 'series': 2}, {'x': 2017.0, 'y': 31.2, 'series': 2}, {'x': 2018.0, 'y': 31.05, 'series': 2}, {'x': 2019.0, 'y': 30.98, 'series': 2}, {'x': 2020.0, 'y': 30.6, 'series': 2}], yAxis: 1}]
});