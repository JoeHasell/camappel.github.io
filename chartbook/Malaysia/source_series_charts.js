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
        {
            key: 'Chartbook series', type: 'line', values: [
                { 'x': 1957.0, 'y': 45.6, 'series': 0 },
                { 'x': 1967.0, 'y': 50.5, 'series': 0 },
                { 'x': 1970.0, 'y': 51.3, 'series': 0 },
                { 'x': 1974.0, 'y': 53.0, 'series': 0 },
                { 'x': 1976.0, 'y': 55.7, 'series': 0 },
                { 'x': 1979.0, 'y': 50.5, 'series': 0 },
                { 'x': 1984.0, 'y': 48.3, 'series': 0 },
                { 'x': 1987.0, 'y': 45.6, 'series': 0 },
                { 'x': 1989.0, 'y': 44.2, 'series': 0 },
                { 'x': 1992.0, 'y': 45.1, 'series': 0 },
                { 'x': 1995.0, 'y': 45.6, 'series': 0 },
                { 'x': 1997.0, 'y': 45.9, 'series': 0 },
                { 'x': 1999.0, 'y': 44.3, 'series': 0 },
                { 'x': 2002.0, 'y': 46.1, 'series': 0 },
                { 'x': 2004.0, 'y': 46.2, 'series': 0 },
                { 'x': 2007.0, 'y': 44.1, 'series': 0 },
                { 'x': 2009.0, 'y': 44.1, 'series': 0 },
                { 'x': 2012.0, 'y': 43.1, 'series': 0 },
                { 'x': 2014.0, 'y': 40.1, 'series': 0 },
                { 'x': 2016.0, 'y': 39.9, 'series': 0 },
                { 'x': 2019.0, 'y': 40.7, 'series': 0 }], yAxis: 1
        },
        {
            key: 'Ikemoto (1985) - Househould income', type: 'scatter', values: [
                { 'x': 1957.0, 'y': 44.9, 'series': 1 },
                { 'x': 1970.0, 'y': 50.5, 'series': 1 },
                { 'x': 1979.0, 'y': 49.3, 'series': 1 },
                { 'x': 2019.0, 'y': null, 'series': 1 }], yAxis: 1
        },
        {
            key: 'Krongkaew & Ragayah (2006) - Househould income', type: 'scatter', values: [
                { 'x': 1957.0, 'y': null, 'series': 2 },
                { 'x': 1967.0, 'y': 49.8, 'series': 2 },
                { 'x': 1970.0, 'y': 50.6, 'series': 2 },
                { 'x': 1979.0, 'y': 49.3, 'series': 2 },
                { 'x': 1981.0, 'y': 44.3, 'series': 2 },
                { 'x': 1982.0, 'y': 46.5, 'series': 2 },
                { 'x': 1984.0, 'y': 47.4, 'series': 2 },
                { 'x': 1993.0, 'y': 45.9, 'series': 2 },
                { 'x': 1995.0, 'y': 46.4, 'series': 2 },
                { 'x': 1997.0, 'y': 47.0, 'series': 2 },
                { 'x': 1999.0, 'y': 45.2, 'series': 2 },
                { 'x': 2002.0, 'y': 46.1, 'series': 2 },
                { 'x': 2004.0, 'y': 46.2, 'series': 2 },
                { 'x': 2019.0, 'y': null, 'series': 2 }], yAxis: 1
        },
        {
            key: 'HI & BAS (2019) - Household income', type: 'scatter', values: [
                { 'x': 1957.0, 'y': null, 'series': 3 },
                { 'x': 1970.0, 'y': 51.3, 'series': 3 },
                { 'x': 1974.0, 'y': 53.0, 'series': 3 },
                { 'x': 1976.0, 'y': 55.7, 'series': 3 },
                { 'x': 1979.0, 'y': 50.5, 'series': 3 },
                { 'x': 1984.0, 'y': 48.3, 'series': 3 },
                { 'x': 1987.0, 'y': 45.6, 'series': 3 },
                { 'x': 1989.0, 'y': 44.2, 'series': 3 },
                { 'x': 1992.0, 'y': 45.1, 'series': 3 },
                { 'x': 1995.0, 'y': 45.6, 'series': 3 },
                { 'x': 1997.0, 'y': 45.9, 'series': 3 },
                { 'x': 1999.0, 'y': 44.3, 'series': 3 },
                { 'x': 2002.0, 'y': 46.1, 'series': 3 },
                { 'x': 2004.0, 'y': 46.2, 'series': 3 },
                { 'x': 2007.0, 'y': 44.1, 'series': 3 },
                { 'x': 2009.0, 'y': 44.1, 'series': 3 },
                { 'x': 2012.0, 'y': 43.1, 'series': 3 },
                { 'x': 2014.0, 'y': 40.1, 'series': 3 },
                { 'x': 2016.0, 'y': 39.9, 'series': 3 },
                { 'x': 2019.0, 'y': 40.7, 'series': 3 }], yAxis: 1
        }];
    $scope.data1 = [
        {
            key: 'Chartbook series', type: 'line', values: [
                { 'x': 1980.0, 'y': 18.8, 'series': 0 },
                { 'x': 1981.0, 'y': 18.8, 'series': 0 },
                { 'x': 1982.0, 'y': 18.8, 'series': 0 },
                { 'x': 1983.0, 'y': 18.8, 'series': 0 },
                { 'x': 1984.0, 'y': 18.8, 'series': 0 },
                { 'x': 1985.0, 'y': 18.8, 'series': 0 },
                { 'x': 1986.0, 'y': 18.8, 'series': 0 },
                { 'x': 1987.0, 'y': 18.8, 'series': 0 },
                { 'x': 1988.0, 'y': 18.8, 'series': 0 },
                { 'x': 1989.0, 'y': 18.8, 'series': 0 },
                { 'x': 1990.0, 'y': 18.8, 'series': 0 },
                { 'x': 1991.0, 'y': 18.8, 'series': 0 },
                { 'x': 1992.0, 'y': 18.8, 'series': 0 },
                { 'x': 1993.0, 'y': 18.8, 'series': 0 },
                { 'x': 1994.0, 'y': 18.8, 'series': 0 },
                { 'x': 1995.0, 'y': 18.8, 'series': 0 },
                { 'x': 1996.0, 'y': 18.8, 'series': 0 },
                { 'x': 1997.0, 'y': 18.8, 'series': 0 },
                { 'x': 1998.0, 'y': 18.8, 'series': 0 },
                { 'x': 1999.0, 'y': 18.8, 'series': 0 },
                { 'x': 2000.0, 'y': 18.8, 'series': 0 },
                { 'x': 2001.0, 'y': 18.8, 'series': 0 },
                { 'x': 2002.0, 'y': 18.8, 'series': 0 },
                { 'x': 2003.0, 'y': 17.9, 'series': 0 },
                { 'x': 2004.0, 'y': 16.9, 'series': 0 },
                { 'x': 2005.0, 'y': 17.3, 'series': 0 },
                { 'x': 2006.0, 'y': 17.7, 'series': 0 },
                { 'x': 2007.0, 'y': 18.1, 'series': 0 },
                { 'x': 2008.0, 'y': 18.1, 'series': 0 },
                { 'x': 2009.0, 'y': 18.1, 'series': 0 },
                { 'x': 2010.0, 'y': 17.5, 'series': 0 },
                { 'x': 2011.0, 'y': 17.0, 'series': 0 },
                { 'x': 2012.0, 'y': 16.5, 'series': 0 },
                { 'x': 2013.0, 'y': 15.7, 'series': 0 },
                { 'x': 2014.0, 'y': 14.9, 'series': 0 },
                { 'x': 2015.0, 'y': 14.9, 'series': 0 },
                { 'x': 2016.0, 'y': 14.9, 'series': 0 },
                { 'x': 2017.0, 'y': 14.9, 'series': 0 },
                { 'x': 2018.0, 'y': 14.9, 'series': 0 },
                { 'x': 2019.0, 'y': 14.9, 'series': 0 },
                { 'x': 2020.0, 'y': 14.9, 'series': 0 }], yAxis: 1
        },
        {
            key: 'WID - Pre-tax national income (equal-split adults)', type: 'scatter', values: [
                { 'x': 1980.0, 'y': 18.8, 'series': 1 },
                { 'x': 1981.0, 'y': 18.8, 'series': 1 },
                { 'x': 1982.0, 'y': 18.8, 'series': 1 },
                { 'x': 1983.0, 'y': 18.8, 'series': 1 },
                { 'x': 1984.0, 'y': 18.8, 'series': 1 },
                { 'x': 1985.0, 'y': 18.8, 'series': 1 },
                { 'x': 1986.0, 'y': 18.8, 'series': 1 },
                { 'x': 1987.0, 'y': 18.8, 'series': 1 },
                { 'x': 1988.0, 'y': 18.8, 'series': 1 },
                { 'x': 1989.0, 'y': 18.8, 'series': 1 },
                { 'x': 1990.0, 'y': 18.8, 'series': 1 },
                { 'x': 1991.0, 'y': 18.8, 'series': 1 },
                { 'x': 1992.0, 'y': 18.8, 'series': 1 },
                { 'x': 1993.0, 'y': 18.8, 'series': 1 },
                { 'x': 1994.0, 'y': 18.8, 'series': 1 },
                { 'x': 1995.0, 'y': 18.8, 'series': 1 },
                { 'x': 1996.0, 'y': 18.8, 'series': 1 },
                { 'x': 1997.0, 'y': 18.8, 'series': 1 },
                { 'x': 1998.0, 'y': 18.8, 'series': 1 },
                { 'x': 1999.0, 'y': 18.8, 'series': 1 },
                { 'x': 2000.0, 'y': 18.8, 'series': 1 },
                { 'x': 2001.0, 'y': 18.8, 'series': 1 },
                { 'x': 2002.0, 'y': 18.8, 'series': 1 },
                { 'x': 2003.0, 'y': 17.9, 'series': 1 },
                { 'x': 2004.0, 'y': 16.9, 'series': 1 },
                { 'x': 2005.0, 'y': 17.3, 'series': 1 },
                { 'x': 2006.0, 'y': 17.7, 'series': 1 },
                { 'x': 2007.0, 'y': 18.1, 'series': 1 },
                { 'x': 2008.0, 'y': 18.1, 'series': 1 },
                { 'x': 2009.0, 'y': 18.1, 'series': 1 },
                { 'x': 2010.0, 'y': 17.5, 'series': 1 },
                { 'x': 2011.0, 'y': 17.0, 'series': 1 },
                { 'x': 2012.0, 'y': 16.5, 'series': 1 },
                { 'x': 2013.0, 'y': 15.7, 'series': 1 },
                { 'x': 2014.0, 'y': 14.9, 'series': 1 },
                { 'x': 2015.0, 'y': 14.9, 'series': 1 },
                { 'x': 2016.0, 'y': 14.9, 'series': 1 },
                { 'x': 2017.0, 'y': 14.9, 'series': 1 },
                { 'x': 2018.0, 'y': 14.9, 'series': 1 },
                { 'x': 2019.0, 'y': 14.9, 'series': 1 },
                { 'x': 2020.0, 'y': 14.9, 'series': 1 }], yAxis: 1
        }];
    $scope.data2 = [
        {
            key: 'Chartbook series', type: 'line', values: [
                { 'x': 1951.0, 'y': 8.8, 'series': 0 },
                { 'x': 1955.0, 'y': 10.1, 'series': 0 },
                { 'x': 1956.0, 'y': 10.5, 'series': 0 },
                { 'x': 1957.0, 'y': 10.3, 'series': 0 },
                { 'x': 1958.0, 'y': 10.7, 'series': 0 },
                { 'x': 1959.0, 'y': 10.6, 'series': 0 },
                { 'x': 1960.0, 'y': 10.8, 'series': 0 },
                { 'x': 1961.0, 'y': 11.9, 'series': 0 },
                { 'x': 1962.0, 'y': 11.1, 'series': 0 },
                { 'x': 1963.0, 'y': 11.6, 'series': 0 },
                { 'x': 1964.0, 'y': 12.0, 'series': 0 },
                { 'x': 1965.0, 'y': 13.0, 'series': 0 },
                { 'x': 1966.0, 'y': 10.9, 'series': 0 },
                { 'x': 1967.0, 'y': 10.7, 'series': 0 },
                { 'x': 1968.0, 'y': 11.7, 'series': 0 },
                { 'x': 1969.0, 'y': 11.3, 'series': 0 },
                { 'x': 1970.0, 'y': 14.8, 'series': 0 },
                { 'x': 1971.0, 'y': 15.1, 'series': 0 },
                { 'x': 1972.0, 'y': 18.5, 'series': 0 },
                { 'x': 1973.0, 'y': 17.5, 'series': 0 },
                { 'x': 1974.0, 'y': 15.3, 'series': 0 },
                { 'x': 1975.0, 'y': 16.0, 'series': 0 },
                { 'x': 1983.0, 'y': 12.3, 'series': 0 },
                { 'x': 1984.0, 'y': 11.6, 'series': 0 },
                { 'x': 1989.0, 'y': 10.8, 'series': 0 },
                { 'x': 1997.0, 'y': 12.4, 'series': 0 },
                { 'x': 2002.0, 'y': 12.4, 'series': 0 },
                { 'x': 2004.0, 'y': 11.9, 'series': 0 },
                { 'x': 2007.0, 'y': 16.0, 'series': 0 },
                { 'x': 2009.0, 'y': 13.9, 'series': 0 },
                { 'x': 2012.0, 'y': 13.6, 'series': 0 },
                { 'x': 2014.0, 'y': 13.5, 'series': 0 }], yAxis: 1
        },
        {
            key: 'WID - Pre-tax fiscal income (equal-split adults)', type: 'scatter', values: [
                { 'x': 1951.0, 'y': 8.8, 'series': 1 },
                { 'x': 1955.0, 'y': 10.1, 'series': 1 },
                { 'x': 1956.0, 'y': 10.5, 'series': 1 },
                { 'x': 1957.0, 'y': 10.3, 'series': 1 },
                { 'x': 1958.0, 'y': 10.7, 'series': 1 },
                { 'x': 1959.0, 'y': 10.6, 'series': 1 },
                { 'x': 1960.0, 'y': 10.8, 'series': 1 },
                { 'x': 1961.0, 'y': 11.9, 'series': 1 },
                { 'x': 1962.0, 'y': 11.1, 'series': 1 },
                { 'x': 1963.0, 'y': 11.6, 'series': 1 },
                { 'x': 1964.0, 'y': 12.0, 'series': 1 },
                { 'x': 1965.0, 'y': 13.0, 'series': 1 },
                { 'x': 1966.0, 'y': 10.9, 'series': 1 },
                { 'x': 1967.0, 'y': 10.7, 'series': 1 },
                { 'x': 1968.0, 'y': 11.7, 'series': 1 },
                { 'x': 1969.0, 'y': 11.3, 'series': 1 },
                { 'x': 1970.0, 'y': 14.8, 'series': 1 },
                { 'x': 1971.0, 'y': 15.1, 'series': 1 },
                { 'x': 1972.0, 'y': 18.5, 'series': 1 },
                { 'x': 1973.0, 'y': 17.5, 'series': 1 },
                { 'x': 1974.0, 'y': 15.3, 'series': 1 },
                { 'x': 1975.0, 'y': 16.0, 'series': 1 },
                { 'x': 1983.0, 'y': 12.3, 'series': 1 },
                { 'x': 1984.0, 'y': 11.6, 'series': 1 },
                { 'x': 1989.0, 'y': 10.8, 'series': 1 },
                { 'x': 1997.0, 'y': 12.4, 'series': 1 },
                { 'x': 2002.0, 'y': 12.4, 'series': 1 },
                { 'x': 2004.0, 'y': 11.9, 'series': 1 },
                { 'x': 2007.0, 'y': 16.0, 'series': 1 },
                { 'x': 2009.0, 'y': 13.9, 'series': 1 },
                { 'x': 2012.0, 'y': 13.6, 'series': 1 },
                { 'x': 2014.0, 'y': 13.5, 'series': 1 }], yAxis: 1
        }];
    $scope.data3 = [
        {
            key: 'Chartbook series', type: 'line', values: [
                { 'x': 1970.0, 'y': 11.5, 'series': 0 },
                { 'x': 1974.0, 'y': 11.4, 'series': 0 },
                { 'x': 1976.0, 'y': 10.8, 'series': 0 },
                { 'x': 1979.0, 'y': 11.9, 'series': 0 },
                { 'x': 1984.0, 'y': 12.7, 'series': 0 },
                { 'x': 1987.0, 'y': 13.7, 'series': 0 },
                { 'x': 1990.0, 'y': 14.5, 'series': 0 },
                { 'x': 1992.0, 'y': 13.9, 'series': 0 },
                { 'x': 1995.0, 'y': 13.7, 'series': 0 },
                { 'x': 1997.0, 'y': 13.2, 'series': 0 },
                { 'x': 1999.0, 'y': 14.0, 'series': 0 },
                { 'x': 2002.0, 'y': 13.5, 'series': 0 },
                { 'x': 2004.0, 'y': 13.2, 'series': 0 },
                { 'x': 2007.0, 'y': 14.6, 'series': 0 },
                { 'x': 2009.0, 'y': 14.3, 'series': 0 },
                { 'x': 2012.0, 'y': 14.8, 'series': 0 },
                { 'x': 2014.0, 'y': 16.8, 'series': 0 },
                { 'x': 2019.0, 'y': 16.0, 'series': 0 }], yAxis: 1
        },
        {
            key: 'HI & BAS (2014-19) - Gross household income', type: 'scatter', values: [
                { 'x': 1970.0, 'y': 11.5, 'series': 1 },
                { 'x': 1974.0, 'y': 11.4, 'series': 1 },
                { 'x': 1976.0, 'y': 10.8, 'series': 1 },
                { 'x': 1979.0, 'y': 11.9, 'series': 1 },
                { 'x': 1984.0, 'y': 12.7, 'series': 1 },
                { 'x': 1987.0, 'y': 13.7, 'series': 1 },
                { 'x': 1990.0, 'y': 14.5, 'series': 1 },
                { 'x': 1992.0, 'y': 13.9, 'series': 1 },
                { 'x': 1995.0, 'y': 13.7, 'series': 1 },
                { 'x': 1997.0, 'y': 13.2, 'series': 1 },
                { 'x': 1999.0, 'y': 14.0, 'series': 1 },
                { 'x': 2002.0, 'y': 13.5, 'series': 1 },
                { 'x': 2004.0, 'y': 13.2, 'series': 1 },
                { 'x': 2007.0, 'y': 14.6, 'series': 1 },
                { 'x': 2009.0, 'y': 14.3, 'series': 1 },
                { 'x': 2012.0, 'y': 14.8, 'series': 1 },
                { 'x': 2014.0, 'y': 16.8, 'series': 1 },
                { 'x': 2019.0, 'y': 16.0, 'series': 1 }], yAxis: 1
        }];
    $scope.data4 = [
        {
            key: 'Chartbook series', type: 'line', values: [
                { 'x': 1970.0, 'y': 49.3, 'series': 0 },
                { 'x': 1976.0, 'y': 37.7, 'series': 0 },
                { 'x': 1979.0, 'y': 37.4, 'series': 0 },
                { 'x': 1984.0, 'y': 20.7, 'series': 0 },
                { 'x': 1987.0, 'y': 19.4, 'series': 0 },
                { 'x': 1989.0, 'y': 16.5, 'series': 0 },
                { 'x': 1992.0, 'y': 12.4, 'series': 0 },
                { 'x': 1995.0, 'y': 8.7, 'series': 0 },
                { 'x': 1997.0, 'y': 6.1, 'series': 0 },
                { 'x': 1999.0, 'y': 7.5, 'series': 0 },
                { 'x': 2002.0, 'y': 5.1, 'series': 0 },
                { 'x': 2004.0, 'y': 5.7, 'series': 0 },
                { 'x': 2007.0, 'y': 3.6, 'series': 0 },
                { 'x': 2009.0, 'y': 3.8, 'series': 0 },
                { 'x': 2012.0, 'y': 1.7, 'series': 0 },
                { 'x': 2014.0, 'y': 0.6, 'series': 0 },
                { 'x': 2016.0, 'y': 0.4, 'series': 0 },
                { 'x': 2019.0, 'y': 0.2, 'series': 0 }], yAxis: 1
        },
        {
            key: 'HI & BAS (2019) - Household income', type: 'scatter', values: [
                { 'x': 1970.0, 'y': 49.3, 'series': 1 },
                { 'x': 1976.0, 'y': 37.7, 'series': 1 },
                { 'x': 1979.0, 'y': 37.4, 'series': 1 },
                { 'x': 1984.0, 'y': 20.7, 'series': 1 },
                { 'x': 1987.0, 'y': 19.4, 'series': 1 },
                { 'x': 1989.0, 'y': 16.5, 'series': 1 },
                { 'x': 1992.0, 'y': 12.4, 'series': 1 },
                { 'x': 1995.0, 'y': 8.7, 'series': 1 },
                { 'x': 1997.0, 'y': 6.1, 'series': 1 },
                { 'x': 1999.0, 'y': 7.5, 'series': 1 },
                { 'x': 2002.0, 'y': 5.1, 'series': 1 },
                { 'x': 2004.0, 'y': 5.7, 'series': 1 },
                { 'x': 2007.0, 'y': 3.6, 'series': 1 },
                { 'x': 2009.0, 'y': 3.8, 'series': 1 },
                { 'x': 2012.0, 'y': 1.7, 'series': 1 },
                { 'x': 2014.0, 'y': 0.6, 'series': 1 },
                { 'x': 2016.0, 'y': 0.4, 'series': 1 },
                { 'x': 2019.0, 'y': 0.2, 'series': 1 }], yAxis: 1
        }]
});