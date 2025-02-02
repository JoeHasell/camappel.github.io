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
                { 'x': 2003.0, 'y': 24.1, 'series': 0 },
                { 'x': 2004.0, 'y': 25.1, 'series': 0 },
                { 'x': 2005.0, 'y': 26.3, 'series': 0 },
                { 'x': 2006.0, 'y': 28.0, 'series': 0 },
                { 'x': 2007.0, 'y': 27.3, 'series': 0 },
                { 'x': 2008.0, 'y': 29.6, 'series': 0 },
                { 'x': 2009.0, 'y': 25.7, 'series': 0 },
                { 'x': 2010.0, 'y': 23.6, 'series': 0 },
                { 'x': 2011.0, 'y': 24.0, 'series': 0 },
                { 'x': 2012.0, 'y': 24.0, 'series': 0 },
                { 'x': 2013.0, 'y': 22.7, 'series': 0 },
                { 'x': 2014.0, 'y': 24.7, 'series': 0 },
                { 'x': 2015.0, 'y': 24.1, 'series': 0 },
                { 'x': 2016.0, 'y': 25.2, 'series': 0 },
                { 'x': 2017.0, 'y': 23.2, 'series': 0 }], yAxis: 1
        },
        {
            key: 'Eurostat - Equivalised disposable household income', type: 'scatter', values: [
                { 'x': 2003.0, 'y': 24.1, 'series': 1 },
                { 'x': 2004.0, 'y': 25.1, 'series': 1 },
                { 'x': 2005.0, 'y': 26.3, 'series': 1 },
                { 'x': 2006.0, 'y': 28.0, 'series': 1 },
                { 'x': 2007.0, 'y': 27.3, 'series': 1 },
                { 'x': 2008.0, 'y': 29.6, 'series': 1 },
                { 'x': 2009.0, 'y': 25.7, 'series': 1 },
                { 'x': 2010.0, 'y': 23.6, 'series': 1 },
                { 'x': 2011.0, 'y': 24.0, 'series': 1 },
                { 'x': 2012.0, 'y': 24.0, 'series': 1 },
                { 'x': 2013.0, 'y': 22.7, 'series': 1 },
                { 'x': 2014.0, 'y': 24.7, 'series': 1 },
                { 'x': 2015.0, 'y': 24.1, 'series': 1 },
                { 'x': 2016.0, 'y': 25.2, 'series': 1 },
                { 'x': 2017.0, 'y': 23.2, 'series': 1 }], yAxis: 1
        }];
    $scope.data1 = [
        {
            key: 'Chartbook series', type: 'line', values: [
                { 'x': 1980.0, 'y': 7.5, 'series': 0 },
                { 'x': 1981.0, 'y': 7.5, 'series': 0 },
                { 'x': 1982.0, 'y': 7.5, 'series': 0 },
                { 'x': 1983.0, 'y': 7.5, 'series': 0 },
                { 'x': 1984.0, 'y': 7.5, 'series': 0 },
                { 'x': 1985.0, 'y': 7.5, 'series': 0 },
                { 'x': 1986.0, 'y': 7.5, 'series': 0 },
                { 'x': 1987.0, 'y': 7.5, 'series': 0 },
                { 'x': 1988.0, 'y': 7.5, 'series': 0 },
                { 'x': 1989.0, 'y': 7.5, 'series': 0 },
                { 'x': 1990.0, 'y': 7.5, 'series': 0 },
                { 'x': 1991.0, 'y': 7.4, 'series': 0 },
                { 'x': 1992.0, 'y': 7.6, 'series': 0 },
                { 'x': 1993.0, 'y': 7.5, 'series': 0 },
                { 'x': 1994.0, 'y': 7.5, 'series': 0 },
                { 'x': 1995.0, 'y': 7.5, 'series': 0 },
                { 'x': 1996.0, 'y': 7.6, 'series': 0 },
                { 'x': 1997.0, 'y': 7.7, 'series': 0 },
                { 'x': 1998.0, 'y': 7.8, 'series': 0 },
                { 'x': 1999.0, 'y': 8.0, 'series': 0 },
                { 'x': 2000.0, 'y': 8.3, 'series': 0 },
                { 'x': 2001.0, 'y': 10.1, 'series': 0 },
                { 'x': 2002.0, 'y': 10.9, 'series': 0 },
                { 'x': 2003.0, 'y': 10.9, 'series': 0 },
                { 'x': 2004.0, 'y': 9.2, 'series': 0 },
                { 'x': 2005.0, 'y': 10.2, 'series': 0 },
                { 'x': 2006.0, 'y': 10.6, 'series': 0 },
                { 'x': 2007.0, 'y': 14.6, 'series': 0 },
                { 'x': 2008.0, 'y': 7.9, 'series': 0 },
                { 'x': 2009.0, 'y': 6.6, 'series': 0 },
                { 'x': 2010.0, 'y': 5.6, 'series': 0 },
                { 'x': 2011.0, 'y': 5.8, 'series': 0 },
                { 'x': 2012.0, 'y': 6.3, 'series': 0 },
                { 'x': 2013.0, 'y': 8.3, 'series': 0 },
                { 'x': 2014.0, 'y': 8.4, 'series': 0 },
                { 'x': 2015.0, 'y': 8.3, 'series': 0 },
                { 'x': 2016.0, 'y': 8.4, 'series': 0 },
                { 'x': 2017.0, 'y': 8.8, 'series': 0 },
                { 'x': 2018.0, 'y': 8.8, 'series': 0 },
                { 'x': 2019.0, 'y': 8.8, 'series': 0 },
                { 'x': 2020.0, 'y': 8.8, 'series': 0 }], yAxis: 1
        },
        {
            key: 'WID - Pre-tax national income (equal-split adults)', type: 'scatter', values: [
                { 'x': 1980.0, 'y': 7.5, 'series': 1 },
                { 'x': 1981.0, 'y': 7.5, 'series': 1 },
                { 'x': 1982.0, 'y': 7.5, 'series': 1 },
                { 'x': 1983.0, 'y': 7.5, 'series': 1 },
                { 'x': 1984.0, 'y': 7.5, 'series': 1 },
                { 'x': 1985.0, 'y': 7.5, 'series': 1 },
                { 'x': 1986.0, 'y': 7.5, 'series': 1 },
                { 'x': 1987.0, 'y': 7.5, 'series': 1 },
                { 'x': 1988.0, 'y': 7.5, 'series': 1 },
                { 'x': 1989.0, 'y': 7.5, 'series': 1 },
                { 'x': 1990.0, 'y': 7.5, 'series': 1 },
                { 'x': 1991.0, 'y': 7.4, 'series': 1 },
                { 'x': 1992.0, 'y': 7.6, 'series': 1 },
                { 'x': 1993.0, 'y': 7.5, 'series': 1 },
                { 'x': 1994.0, 'y': 7.5, 'series': 1 },
                { 'x': 1995.0, 'y': 7.5, 'series': 1 },
                { 'x': 1996.0, 'y': 7.6, 'series': 1 },
                { 'x': 1997.0, 'y': 7.7, 'series': 1 },
                { 'x': 1998.0, 'y': 7.8, 'series': 1 },
                { 'x': 1999.0, 'y': 8.0, 'series': 1 },
                { 'x': 2000.0, 'y': 8.3, 'series': 1 },
                { 'x': 2001.0, 'y': 10.1, 'series': 1 },
                { 'x': 2002.0, 'y': 10.9, 'series': 1 },
                { 'x': 2003.0, 'y': 10.9, 'series': 1 },
                { 'x': 2004.0, 'y': 9.2, 'series': 1 },
                { 'x': 2005.0, 'y': 10.2, 'series': 1 },
                { 'x': 2006.0, 'y': 10.6, 'series': 1 },
                { 'x': 2007.0, 'y': 14.6, 'series': 1 },
                { 'x': 2008.0, 'y': 7.9, 'series': 1 },
                { 'x': 2009.0, 'y': 6.6, 'series': 1 },
                { 'x': 2010.0, 'y': 5.6, 'series': 1 },
                { 'x': 2011.0, 'y': 5.8, 'series': 1 },
                { 'x': 2012.0, 'y': 6.3, 'series': 1 },
                { 'x': 2013.0, 'y': 8.3, 'series': 1 },
                { 'x': 2014.0, 'y': 8.4, 'series': 1 },
                { 'x': 2015.0, 'y': 8.3, 'series': 1 },
                { 'x': 2016.0, 'y': 8.4, 'series': 1 },
                { 'x': 2017.0, 'y': 8.8, 'series': 1 },
                { 'x': 2018.0, 'y': 8.8, 'series': 1 },
                { 'x': 2019.0, 'y': 8.8, 'series': 1 },
                { 'x': 2020.0, 'y': 8.8, 'series': 1 }], yAxis: 1
        }];
    $scope.data2 = [
        {
            key: 'Chartbook series', type: 'line', values: [
                { 'x': 1990.0, 'y': 6.2, 'series': 0 },
                { 'x': 1991.0, 'y': 6.2, 'series': 0 },
                { 'x': 1992.0, 'y': 6.4, 'series': 0 },
                { 'x': 1993.0, 'y': 6.3, 'series': 0 },
                { 'x': 1994.0, 'y': 6.3, 'series': 0 },
                { 'x': 1995.0, 'y': 6.2, 'series': 0 },
                { 'x': 1996.0, 'y': 6.3, 'series': 0 },
                { 'x': 1997.0, 'y': 6.5, 'series': 0 },
                { 'x': 1998.0, 'y': 6.5, 'series': 0 },
                { 'x': 1999.0, 'y': 6.8, 'series': 0 },
                { 'x': 2000.0, 'y': 7.0, 'series': 0 },
                { 'x': 2001.0, 'y': 9.0, 'series': 0 },
                { 'x': 2002.0, 'y': 9.7, 'series': 0 },
                { 'x': 2003.0, 'y': 9.2, 'series': 0 },
                { 'x': 2004.0, 'y': 7.5, 'series': 0 },
                { 'x': 2005.0, 'y': 8.8, 'series': 0 },
                { 'x': 2006.0, 'y': 9.8, 'series': 0 },
                { 'x': 2007.0, 'y': 13.1, 'series': 0 },
                { 'x': 2008.0, 'y': 6.9, 'series': 0 },
                { 'x': 2009.0, 'y': 5.6, 'series': 0 },
                { 'x': 2010.0, 'y': 4.3, 'series': 0 },
                { 'x': 2011.0, 'y': 4.4, 'series': 0 },
                { 'x': 2012.0, 'y': 4.7, 'series': 0 },
                { 'x': 2013.0, 'y': 6.9, 'series': 0 },
                { 'x': 2014.0, 'y': 6.7, 'series': 0 },
                { 'x': 2015.0, 'y': 6.5, 'series': 0 },
                { 'x': 2016.0, 'y': 6.7, 'series': 0 },
                { 'x': 2017.0, 'y': 7.0, 'series': 0 },
                { 'x': 2018.0, 'y': 7.0, 'series': 0 },
                { 'x': 2019.0, 'y': 7.0, 'series': 0 },
                { 'x': 2020.0, 'y': 6.9, 'series': 0 }], yAxis: 1
        },
        {
            key: 'WID - Post-tax national income (equal-split adults)', type: 'scatter', values: [
                { 'x': 1990.0, 'y': 6.2, 'series': 1 },
                { 'x': 1991.0, 'y': 6.2, 'series': 1 },
                { 'x': 1992.0, 'y': 6.4, 'series': 1 },
                { 'x': 1993.0, 'y': 6.3, 'series': 1 },
                { 'x': 1994.0, 'y': 6.3, 'series': 1 },
                { 'x': 1995.0, 'y': 6.2, 'series': 1 },
                { 'x': 1996.0, 'y': 6.3, 'series': 1 },
                { 'x': 1997.0, 'y': 6.5, 'series': 1 },
                { 'x': 1998.0, 'y': 6.5, 'series': 1 },
                { 'x': 1999.0, 'y': 6.8, 'series': 1 },
                { 'x': 2000.0, 'y': 7.0, 'series': 1 },
                { 'x': 2001.0, 'y': 9.0, 'series': 1 },
                { 'x': 2002.0, 'y': 9.7, 'series': 1 },
                { 'x': 2003.0, 'y': 9.2, 'series': 1 },
                { 'x': 2004.0, 'y': 7.5, 'series': 1 },
                { 'x': 2005.0, 'y': 8.8, 'series': 1 },
                { 'x': 2006.0, 'y': 9.8, 'series': 1 },
                { 'x': 2007.0, 'y': 13.1, 'series': 1 },
                { 'x': 2008.0, 'y': 6.9, 'series': 1 },
                { 'x': 2009.0, 'y': 5.6, 'series': 1 },
                { 'x': 2010.0, 'y': 4.3, 'series': 1 },
                { 'x': 2011.0, 'y': 4.4, 'series': 1 },
                { 'x': 2012.0, 'y': 4.7, 'series': 1 },
                { 'x': 2013.0, 'y': 6.9, 'series': 1 },
                { 'x': 2014.0, 'y': 6.7, 'series': 1 },
                { 'x': 2015.0, 'y': 6.5, 'series': 1 },
                { 'x': 2016.0, 'y': 6.7, 'series': 1 },
                { 'x': 2017.0, 'y': 7.0, 'series': 1 },
                { 'x': 2018.0, 'y': 7.0, 'series': 1 },
                { 'x': 2019.0, 'y': 7.0, 'series': 1 },
                { 'x': 2020.0, 'y': 6.9, 'series': 1 }], yAxis: 1
        }];
    $scope.data3 = [
        {
            key: 'Chartbook series', type: 'line', values: [
                { 'x': 1988.0, 'y': 9.5, 'series': 0 },
                { 'x': 1989.0, 'y': 8.0, 'series': 0 },
                { 'x': 1991.0, 'y': 9.0, 'series': 0 },
                { 'x': 1992.0, 'y': 9.6, 'series': 0 },
                { 'x': 1993.0, 'y': 10.5, 'series': 0 },
                { 'x': 1995.0, 'y': 12.5, 'series': 0 }], yAxis: 1
        },
        {
            key: 'Ólafsson and Sigurðsson (1996) - Equivalised disposable household income', type: 'scatter', values: [
                { 'x': 1988.0, 'y': 9.5, 'series': 1 },
                { 'x': 1989.0, 'y': 8.0, 'series': 1 },
                { 'x': 1991.0, 'y': 9.0, 'series': 1 },
                { 'x': 1992.0, 'y': 9.6, 'series': 1 },
                { 'x': 1993.0, 'y': 10.5, 'series': 1 },
                { 'x': 1995.0, 'y': 12.5, 'series': 1 }], yAxis: 1
        }];
    $scope.data4 = [
        {
            key: 'Chartbook series', type: 'line', values: [
                { 'x': 2003.0, 'y': 10.0, 'series': 0 },
                { 'x': 2004.0, 'y': 9.7, 'series': 0 },
                { 'x': 2005.0, 'y': 9.6, 'series': 0 },
                { 'x': 2006.0, 'y': 10.1, 'series': 0 },
                { 'x': 2007.0, 'y': 10.1, 'series': 0 },
                { 'x': 2008.0, 'y': 10.2, 'series': 0 },
                { 'x': 2009.0, 'y': 9.8, 'series': 0 },
                { 'x': 2010.0, 'y': 9.2, 'series': 0 },
                { 'x': 2011.0, 'y': 7.9, 'series': 0 },
                { 'x': 2012.0, 'y': 9.3, 'series': 0 },
                { 'x': 2013.0, 'y': 7.9, 'series': 0 },
                { 'x': 2014.0, 'y': 9.2, 'series': 0 },
                { 'x': 2015.0, 'y': 8.8, 'series': 0 },
                { 'x': 2016.0, 'y': 10.1, 'series': 0 },
                { 'x': 2017.0, 'y': 8.8, 'series': 0 }], yAxis: 1
        },
        {
            key: 'Eurostat - Equivalised disposable household income', type: 'scatter', values: [
                { 'x': 2003.0, 'y': 10.0, 'series': 1 },
                { 'x': 2004.0, 'y': 9.7, 'series': 1 },
                { 'x': 2005.0, 'y': 9.6, 'series': 1 },
                { 'x': 2006.0, 'y': 10.1, 'series': 1 },
                { 'x': 2007.0, 'y': 10.1, 'series': 1 },
                { 'x': 2008.0, 'y': 10.2, 'series': 1 },
                { 'x': 2009.0, 'y': 9.8, 'series': 1 },
                { 'x': 2010.0, 'y': 9.2, 'series': 1 },
                { 'x': 2011.0, 'y': 7.9, 'series': 1 },
                { 'x': 2012.0, 'y': 9.3, 'series': 1 },
                { 'x': 2013.0, 'y': 7.9, 'series': 1 },
                { 'x': 2014.0, 'y': 9.2, 'series': 1 },
                { 'x': 2015.0, 'y': 8.8, 'series': 1 },
                { 'x': 2016.0, 'y': 10.1, 'series': 1 },
                { 'x': 2017.0, 'y': 8.8, 'series': 1 }], yAxis: 1
        }];
    $scope.data5 = [
        {
            key: 'Chartbook series', type: 'line', values: [
                { 'x': 2002.0, 'y': 167.8, 'series': 0 },
                { 'x': 2006.0, 'y': 176.6, 'series': 0 },
                { 'x': 2010.0, 'y': 171.1, 'series': 0 },
                { 'x': 2014.0, 'y': 171.0, 'series': 0 },
                { 'x': 2018.0, 'y': 169.6, 'series': 0 }], yAxis: 1
        },
        {
            key: 'OECD - Gross individual earnings', type: 'scatter', values: [
                { 'x': 2002.0, 'y': 167.8, 'series': 1 },
                { 'x': 2006.0, 'y': 176.6, 'series': 1 },
                { 'x': 2010.0, 'y': 171.1, 'series': 1 },
                { 'x': 2014.0, 'y': 171.0, 'series': 1 },
                { 'x': 2018.0, 'y': 169.6, 'series': 1 }], yAxis: 1
        }];
    $scope.data6 = [
        {
            key: 'Chartbook series', type: 'line', values: [
                { 'x': 1986.0, 'y': 39.8, 'series': 0 },
                { 'x': 1987.0, 'y': 40.0, 'series': 0 },
                { 'x': 1988.0, 'y': 40.2, 'series': 0 },
                { 'x': 1989.0, 'y': 42.0, 'series': 0 },
                { 'x': 1990.0, 'y': 42.5, 'series': 0 },
                { 'x': 1991.0, 'y': 42.5, 'series': 0 },
                { 'x': 1992.0, 'y': 42.5, 'series': 0 },
                { 'x': 1993.0, 'y': 43.0, 'series': 0 },
                { 'x': 1994.0, 'y': 43.5, 'series': 0 }], yAxis: 1
        },
        {
            key: 'Ólafsson and Sigurðsson (1996) - Employment earnings', type: 'scatter', values: [
                { 'x': 1986.0, 'y': 39.8, 'series': 1 },
                { 'x': 1987.0, 'y': 40.0, 'series': 1 },
                { 'x': 1988.0, 'y': 40.2, 'series': 1 },
                { 'x': 1989.0, 'y': 42.0, 'series': 1 },
                { 'x': 1990.0, 'y': 42.5, 'series': 1 },
                { 'x': 1991.0, 'y': 42.5, 'series': 1 },
                { 'x': 1992.0, 'y': 42.5, 'series': 1 },
                { 'x': 1993.0, 'y': 43.0, 'series': 1 },
                { 'x': 1994.0, 'y': 43.5, 'series': 1 }], yAxis: 1
        }]
});