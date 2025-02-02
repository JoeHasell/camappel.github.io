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
                { 'x': 1981.0, 'y': 55.0, 'series': 0 },
                { 'x': 1982.0, 'y': 55.6, 'series': 0 },
                { 'x': 1983.0, 'y': 56.2, 'series': 0 },
                { 'x': 1984.0, 'y': 55.7, 'series': 0 },
                { 'x': 1985.0, 'y': 52.9, 'series': 0 },
                { 'x': 1986.0, 'y': 56.0, 'series': 0 },
                { 'x': 1987.0, 'y': 57.1, 'series': 0 },
                { 'x': 1988.0, 'y': 59.2, 'series': 0 },
                { 'x': 1989.0, 'y': 61.0, 'series': 0 },
                { 'x': 1990.0, 'y': 58.6, 'series': 0 },
                { 'x': 1993.0, 'y': 58.6, 'series': 0 },
                { 'x': 1995.0, 'y': 58.0, 'series': 0 },
                { 'x': 1996.0, 'y': 57.8, 'series': 0 },
                { 'x': 1997.0, 'y': 57.3, 'series': 0 },
                { 'x': 1998.0, 'y': 56.9, 'series': 0 },
                { 'x': 1999.0, 'y': 56.3, 'series': 0 },
                { 'x': 2001.0, 'y': 56.5, 'series': 0 },
                { 'x': 2002.0, 'y': 56.2, 'series': 0 },
                { 'x': 2003.0, 'y': 55.6, 'series': 0 },
                { 'x': 2004.0, 'y': 54.5, 'series': 0 },
                { 'x': 2005.0, 'y': 54.3, 'series': 0 },
                { 'x': 2006.0, 'y': 53.6, 'series': 0 },
                { 'x': 2007.0, 'y': 52.9, 'series': 0 },
                { 'x': 2008.0, 'y': 52.0, 'series': 0 },
                { 'x': 2009.0, 'y': 51.7, 'series': 0 },
                { 'x': 2011.0, 'y': 51.0, 'series': 0 },
                { 'x': 2012.0, 'y': 50.6, 'series': 0 },
                { 'x': 2013.0, 'y': 50.8, 'series': 0 },
                { 'x': 2014.0, 'y': 49.6, 'series': 0 },
                { 'x': 2015.0, 'y': 49.5, 'series': 0 },
                { 'x': 2016.0, 'y': 51.6, 'series': 0 },
                { 'x': 2017.0, 'y': 51.6, 'series': 0 },
                { 'x': 2018.0, 'y': 52.3, 'series': 0 }], yAxis: 1
        },
        {
            key: 'SEDLAC (2020) Inequality - Equivalised household income (PNAD)', type: 'scatter', values: [
                { 'x': 1981.0, 'y': 55.0, 'series': 1 },
                { 'x': 1982.0, 'y': 55.6, 'series': 1 },
                { 'x': 1983.0, 'y': 56.2, 'series': 1 },
                { 'x': 1984.0, 'y': 55.7, 'series': 1 },
                { 'x': 1985.0, 'y': 52.9, 'series': 1 },
                { 'x': 1986.0, 'y': 56.0, 'series': 1 },
                { 'x': 1987.0, 'y': 57.1, 'series': 1 },
                { 'x': 1988.0, 'y': 59.1, 'series': 1 },
                { 'x': 1989.0, 'y': 61.0, 'series': 1 },
                { 'x': 1990.0, 'y': 58.5, 'series': 1 },
                { 'x': 2018.0, 'y': null, 'series': 1 }], yAxis: 1
        },
        {
            key: 'SEDLAC (2020) Inequality - Equivalised household income (New PNAD)', type: 'scatter', values: [
                { 'x': 1981.0, 'y': null, 'series': 2 },
                { 'x': 1993.0, 'y': 58.5, 'series': 2 },
                { 'x': 1995.0, 'y': 57.9, 'series': 2 },
                { 'x': 1996.0, 'y': 57.7, 'series': 2 },
                { 'x': 1997.0, 'y': 57.2, 'series': 2 },
                { 'x': 1998.0, 'y': 56.8, 'series': 2 },
                { 'x': 1999.0, 'y': 56.3, 'series': 2 },
                { 'x': 2001.0, 'y': 56.4, 'series': 2 },
                { 'x': 2002.0, 'y': 56.2, 'series': 2 },
                { 'x': 2003.0, 'y': 55.6, 'series': 2 },
                { 'x': 2004.0, 'y': 54.4, 'series': 2 },
                { 'x': 2018.0, 'y': null, 'series': 2 }], yAxis: 1
        },
        {
            key: 'SEDLAC (2020) Inequality - Equivalised household income (with Rural North)', type: 'scatter', values: [
                { 'x': 1981.0, 'y': null, 'series': 3 },
                { 'x': 2004.0, 'y': 54.5, 'series': 3 },
                { 'x': 2005.0, 'y': 54.3, 'series': 3 },
                { 'x': 2006.0, 'y': 53.6, 'series': 3 },
                { 'x': 2007.0, 'y': 52.9, 'series': 3 },
                { 'x': 2008.0, 'y': 52.0, 'series': 3 },
                { 'x': 2009.0, 'y': 51.7, 'series': 3 },
                { 'x': 2011.0, 'y': 51.0, 'series': 3 },
                { 'x': 2012.0, 'y': 50.6, 'series': 3 },
                { 'x': 2013.0, 'y': 50.8, 'series': 3 },
                { 'x': 2014.0, 'y': 49.6, 'series': 3 },
                { 'x': 2015.0, 'y': 49.5, 'series': 3 },
                { 'x': 2018.0, 'y': null, 'series': 3 }], yAxis: 1
        },
        {
            key: 'SEDLAC (2020) Inequality - Equivalised household income (PNADC with implicit rent)', type: 'scatter', values: [
                { 'x': 1981.0, 'y': null, 'series': 4 },
                { 'x': 2016.0, 'y': 51.6, 'series': 4 },
                { 'x': 2017.0, 'y': 51.6, 'series': 4 },
                { 'x': 2018.0, 'y': 52.3, 'series': 4 }], yAxis: 1
        }];
    $scope.data1 = [
        {
            key: 'Chartbook series', type: 'line', values: [
                { 'x': 1960.0, 'y': 12.1, 'series': 0 },
                { 'x': 1970.0, 'y': 14.1, 'series': 0 }], yAxis: 1
        },
        {
            key: 'Langoni (1978) - Household income (excluding capital gains)', type: 'scatter', values: [
                { 'x': 1960.0, 'y': 12.1, 'series': 1 },
                { 'x': 1970.0, 'y': 14.1, 'series': 1 }], yAxis: 1
        }];
    $scope.data2 = [
        {
            key: 'Chartbook series', type: 'line', values: [
                { 'x': 1980.0, 'y': 25.2, 'series': 0 },
                { 'x': 1981.0, 'y': 25.2, 'series': 0 },
                { 'x': 1982.0, 'y': 25.2, 'series': 0 },
                { 'x': 1983.0, 'y': 25.2, 'series': 0 },
                { 'x': 1984.0, 'y': 25.2, 'series': 0 },
                { 'x': 1985.0, 'y': 25.2, 'series': 0 },
                { 'x': 1986.0, 'y': 25.2, 'series': 0 },
                { 'x': 1987.0, 'y': 25.2, 'series': 0 },
                { 'x': 1988.0, 'y': 25.2, 'series': 0 },
                { 'x': 1989.0, 'y': 25.2, 'series': 0 },
                { 'x': 1990.0, 'y': 25.2, 'series': 0 },
                { 'x': 1991.0, 'y': 25.2, 'series': 0 },
                { 'x': 1992.0, 'y': 25.2, 'series': 0 },
                { 'x': 1993.0, 'y': 25.2, 'series': 0 },
                { 'x': 1994.0, 'y': 25.2, 'series': 0 },
                { 'x': 1995.0, 'y': 25.2, 'series': 0 },
                { 'x': 1996.0, 'y': 25.2, 'series': 0 },
                { 'x': 1997.0, 'y': 25.2, 'series': 0 },
                { 'x': 1998.0, 'y': 25.2, 'series': 0 },
                { 'x': 1999.0, 'y': 25.2, 'series': 0 },
                { 'x': 2000.0, 'y': 24.7, 'series': 0 },
                { 'x': 2001.0, 'y': 24.7, 'series': 0 },
                { 'x': 2002.0, 'y': 23.7, 'series': 0 },
                { 'x': 2003.0, 'y': 24.6, 'series': 0 },
                { 'x': 2004.0, 'y': 25.6, 'series': 0 },
                { 'x': 2005.0, 'y': 25.3, 'series': 0 },
                { 'x': 2006.0, 'y': 26.5, 'series': 0 },
                { 'x': 2007.0, 'y': 22.8, 'series': 0 },
                { 'x': 2008.0, 'y': 26.8, 'series': 0 },
                { 'x': 2009.0, 'y': 27.9, 'series': 0 },
                { 'x': 2010.0, 'y': 28.1, 'series': 0 },
                { 'x': 2011.0, 'y': 28.2, 'series': 0 },
                { 'x': 2012.0, 'y': 29.9, 'series': 0 },
                { 'x': 2013.0, 'y': 27.1, 'series': 0 },
                { 'x': 2014.0, 'y': 26.3, 'series': 0 },
                { 'x': 2015.0, 'y': 26.3, 'series': 0 },
                { 'x': 2016.0, 'y': 26.5, 'series': 0 },
                { 'x': 2017.0, 'y': 27.4, 'series': 0 },
                { 'x': 2018.0, 'y': 24.7, 'series': 0 },
                { 'x': 2019.0, 'y': 26.6, 'series': 0 },
                { 'x': 2020.0, 'y': 26.6, 'series': 0 },
                { 'x': 2021.0, 'y': 26.6, 'series': 0 }], yAxis: 1
        },
        {
            key: 'WID - Pre-tax national income (equal-split adults)', type: 'scatter', values: [
                { 'x': 1980.0, 'y': 25.2, 'series': 1 },
                { 'x': 1981.0, 'y': 25.2, 'series': 1 },
                { 'x': 1982.0, 'y': 25.2, 'series': 1 },
                { 'x': 1983.0, 'y': 25.2, 'series': 1 },
                { 'x': 1984.0, 'y': 25.2, 'series': 1 },
                { 'x': 1985.0, 'y': 25.2, 'series': 1 },
                { 'x': 1986.0, 'y': 25.2, 'series': 1 },
                { 'x': 1987.0, 'y': 25.2, 'series': 1 },
                { 'x': 1988.0, 'y': 25.2, 'series': 1 },
                { 'x': 1989.0, 'y': 25.2, 'series': 1 },
                { 'x': 1990.0, 'y': 25.2, 'series': 1 },
                { 'x': 1991.0, 'y': 25.2, 'series': 1 },
                { 'x': 1992.0, 'y': 25.2, 'series': 1 },
                { 'x': 1993.0, 'y': 25.2, 'series': 1 },
                { 'x': 1994.0, 'y': 25.2, 'series': 1 },
                { 'x': 1995.0, 'y': 25.2, 'series': 1 },
                { 'x': 1996.0, 'y': 25.2, 'series': 1 },
                { 'x': 1997.0, 'y': 25.2, 'series': 1 },
                { 'x': 1998.0, 'y': 25.2, 'series': 1 },
                { 'x': 1999.0, 'y': 25.2, 'series': 1 },
                { 'x': 2000.0, 'y': 24.7, 'series': 1 },
                { 'x': 2001.0, 'y': 24.7, 'series': 1 },
                { 'x': 2002.0, 'y': 23.7, 'series': 1 },
                { 'x': 2003.0, 'y': 24.6, 'series': 1 },
                { 'x': 2004.0, 'y': 25.6, 'series': 1 },
                { 'x': 2005.0, 'y': 25.3, 'series': 1 },
                { 'x': 2006.0, 'y': 26.5, 'series': 1 },
                { 'x': 2007.0, 'y': 22.8, 'series': 1 },
                { 'x': 2008.0, 'y': 26.8, 'series': 1 },
                { 'x': 2009.0, 'y': 27.9, 'series': 1 },
                { 'x': 2010.0, 'y': 28.1, 'series': 1 },
                { 'x': 2011.0, 'y': 28.2, 'series': 1 },
                { 'x': 2012.0, 'y': 29.9, 'series': 1 },
                { 'x': 2013.0, 'y': 27.1, 'series': 1 },
                { 'x': 2014.0, 'y': 26.3, 'series': 1 },
                { 'x': 2015.0, 'y': 26.3, 'series': 1 },
                { 'x': 2016.0, 'y': 26.5, 'series': 1 },
                { 'x': 2017.0, 'y': 27.4, 'series': 1 },
                { 'x': 2018.0, 'y': 24.7, 'series': 1 },
                { 'x': 2019.0, 'y': 26.6, 'series': 1 },
                { 'x': 2020.0, 'y': 26.6, 'series': 1 },
                { 'x': 2021.0, 'y': 26.6, 'series': 1 }], yAxis: 1
        }];
    $scope.data3 = [
        {
            key: 'Chartbook series', type: 'line', values: [
                { 'x': 2001.0, 'y': 24.6, 'series': 0 },
                { 'x': 2002.0, 'y': 24.0, 'series': 0 },
                { 'x': 2003.0, 'y': 23.2, 'series': 0 },
                { 'x': 2004.0, 'y': 23.2, 'series': 0 },
                { 'x': 2005.0, 'y': 23.3, 'series': 0 },
                { 'x': 2006.0, 'y': 23.0, 'series': 0 },
                { 'x': 2007.0, 'y': 22.5, 'series': 0 },
                { 'x': 2008.0, 'y': 24.3, 'series': 0 },
                { 'x': 2009.0, 'y': 23.2, 'series': 0 },
                { 'x': 2010.0, 'y': 23.8, 'series': 0 },
                { 'x': 2011.0, 'y': 25.1, 'series': 0 },
                { 'x': 2012.0, 'y': 23.9, 'series': 0 },
                { 'x': 2013.0, 'y': 23.0, 'series': 0 },
                { 'x': 2014.0, 'y': 23.1, 'series': 0 },
                { 'x': 2015.0, 'y': 23.6, 'series': 0 }], yAxis: 1
        },
        {
            key: 'WID - Pre-tax fiscal income (equal-split adults)', type: 'scatter', values: [
                { 'x': 2001.0, 'y': 24.6, 'series': 1 },
                { 'x': 2002.0, 'y': 24.0, 'series': 1 },
                { 'x': 2003.0, 'y': 23.2, 'series': 1 },
                { 'x': 2004.0, 'y': 23.2, 'series': 1 },
                { 'x': 2005.0, 'y': 23.3, 'series': 1 },
                { 'x': 2006.0, 'y': 23.0, 'series': 1 },
                { 'x': 2007.0, 'y': 22.5, 'series': 1 },
                { 'x': 2008.0, 'y': 24.3, 'series': 1 },
                { 'x': 2009.0, 'y': 23.2, 'series': 1 },
                { 'x': 2010.0, 'y': 23.8, 'series': 1 },
                { 'x': 2011.0, 'y': 25.1, 'series': 1 },
                { 'x': 2012.0, 'y': 23.9, 'series': 1 },
                { 'x': 2013.0, 'y': 23.0, 'series': 1 },
                { 'x': 2014.0, 'y': 23.1, 'series': 1 },
                { 'x': 2015.0, 'y': 23.6, 'series': 1 }], yAxis: 1
        }];
    $scope.data4 = [
        {
            key: 'Chartbook series', type: 'line', values: [
                { 'x': 1981.0, 'y': 24.2, 'series': 0 },
                { 'x': 1982.0, 'y': 24.6, 'series': 0 },
                { 'x': 1983.0, 'y': 24.0, 'series': 0 },
                { 'x': 1984.0, 'y': 23.6, 'series': 0 },
                { 'x': 1985.0, 'y': 24.2, 'series': 0 },
                { 'x': 1986.0, 'y': 24.1, 'series': 0 },
                { 'x': 1987.0, 'y': 25.4, 'series': 0 },
                { 'x': 1988.0, 'y': 26.3, 'series': 0 },
                { 'x': 1989.0, 'y': 26.2, 'series': 0 },
                { 'x': 1990.0, 'y': 26.0, 'series': 0 },
                { 'x': 1992.0, 'y': 26.0, 'series': 0 },
                { 'x': 1993.0, 'y': 25.7, 'series': 0 },
                { 'x': 1995.0, 'y': 26.4, 'series': 0 },
                { 'x': 1996.0, 'y': 26.9, 'series': 0 },
                { 'x': 1997.0, 'y': 27.2, 'series': 0 },
                { 'x': 1998.0, 'y': 25.9, 'series': 0 },
                { 'x': 1999.0, 'y': 25.8, 'series': 0 },
                { 'x': 2001.0, 'y': 25.9, 'series': 0 },
                { 'x': 2002.0, 'y': 25.3, 'series': 0 },
                { 'x': 2003.0, 'y': 25.3, 'series': 0 },
                { 'x': 2004.0, 'y': 24.5, 'series': 0 },
                { 'x': 2005.0, 'y': 24.3, 'series': 0 },
                { 'x': 2006.0, 'y': 23.6, 'series': 0 },
                { 'x': 2007.0, 'y': 24.2, 'series': 0 },
                { 'x': 2008.0, 'y': 23.5, 'series': 0 },
                { 'x': 2009.0, 'y': 23.4, 'series': 0 },
                { 'x': 2011.0, 'y': 22.9, 'series': 0 },
                { 'x': 2012.0, 'y': 22.8, 'series': 0 },
                { 'x': 2013.0, 'y': 22.5, 'series': 0 },
                { 'x': 2014.0, 'y': 22.0, 'series': 0 },
                { 'x': 2015.0, 'y': 22.3, 'series': 0 },
                { 'x': 2016.0, 'y': 23.0, 'series': 0 },
                { 'x': 2017.0, 'y': 23.1, 'series': 0 },
                { 'x': 2018.0, 'y': 23.6, 'series': 0 }], yAxis: 1
        },
        {
            key: 'SEDLAC (2018) Poverty - Household per capita income (PNAD)', type: 'scatter', values: [
                { 'x': 1981.0, 'y': 24.1, 'series': 1 },
                { 'x': 1982.0, 'y': 24.5, 'series': 1 },
                { 'x': 1983.0, 'y': 23.8, 'series': 1 },
                { 'x': 1984.0, 'y': 23.5, 'series': 1 },
                { 'x': 1985.0, 'y': 24.1, 'series': 1 },
                { 'x': 1986.0, 'y': 24.0, 'series': 1 },
                { 'x': 1987.0, 'y': 25.3, 'series': 1 },
                { 'x': 1988.0, 'y': 26.1, 'series': 1 },
                { 'x': 1989.0, 'y': 26.0, 'series': 1 },
                { 'x': 1990.0, 'y': 25.9, 'series': 1 },
                { 'x': 2018.0, 'y': null, 'series': 1 }], yAxis: 1
        },
        {
            key: 'SEDLAC (2020) Poverty - Household per capita income (New PNAD)', type: 'scatter', values: [
                { 'x': 1981.0, 'y': null, 'series': 2 },
                { 'x': 1992.0, 'y': 26.0, 'series': 2 },
                { 'x': 1993.0, 'y': 25.7, 'series': 2 },
                { 'x': 1995.0, 'y': 26.4, 'series': 2 },
                { 'x': 1996.0, 'y': 26.9, 'series': 2 },
                { 'x': 1997.0, 'y': 27.2, 'series': 2 },
                { 'x': 1998.0, 'y': 25.9, 'series': 2 },
                { 'x': 1999.0, 'y': 25.8, 'series': 2 },
                { 'x': 2001.0, 'y': 25.9, 'series': 2 },
                { 'x': 2002.0, 'y': 25.3, 'series': 2 },
                { 'x': 2003.0, 'y': 25.3, 'series': 2 },
                { 'x': 2004.0, 'y': 24.5, 'series': 2 },
                { 'x': 2018.0, 'y': null, 'series': 2 }], yAxis: 1
        },
        {
            key: 'SEDLAC (2020) Poverty - Household per capita income (with Rural North)', type: 'scatter', values: [
                { 'x': 1981.0, 'y': null, 'series': 3 },
                { 'x': 2004.0, 'y': 24.5, 'series': 3 },
                { 'x': 2005.0, 'y': 24.3, 'series': 3 },
                { 'x': 2006.0, 'y': 23.6, 'series': 3 },
                { 'x': 2007.0, 'y': 24.2, 'series': 3 },
                { 'x': 2008.0, 'y': 23.5, 'series': 3 },
                { 'x': 2009.0, 'y': 23.4, 'series': 3 },
                { 'x': 2011.0, 'y': 23.0, 'series': 3 },
                { 'x': 2012.0, 'y': 22.8, 'series': 3 },
                { 'x': 2013.0, 'y': 22.9, 'series': 3 },
                { 'x': 2014.0, 'y': 22.1, 'series': 3 },
                { 'x': 2015.0, 'y': 22.2, 'series': 3 },
                { 'x': 2018.0, 'y': null, 'series': 3 }], yAxis: 1
        },
        {
            key: 'SEDLAC (2020) Poverty - Household per capita income (New PNADC)', type: 'scatter', values: [
                { 'x': 1981.0, 'y': null, 'series': 4 },
                { 'x': 2012.0, 'y': 22.8, 'series': 4 },
                { 'x': 2013.0, 'y': 22.5, 'series': 4 },
                { 'x': 2014.0, 'y': 22.0, 'series': 4 },
                { 'x': 2015.0, 'y': 22.3, 'series': 4 },
                { 'x': 2016.0, 'y': 23.0, 'series': 4 },
                { 'x': 2017.0, 'y': 23.1, 'series': 4 },
                { 'x': 2018.0, 'y': 23.6, 'series': 4 }], yAxis: 1
        }];
    $scope.data5 = [
        {
            key: 'Chartbook series', type: 'line', values: [
                { 'x': 2002.0, 'y': 75.9, 'series': 0 },
                { 'x': 2003.0, 'y': 74.7, 'series': 0 },
                { 'x': 2004.0, 'y': 73.4, 'series': 0 },
                { 'x': 2005.0, 'y': 71.6, 'series': 0 },
                { 'x': 2006.0, 'y': 71.3, 'series': 0 },
                { 'x': 2007.0, 'y': 70.5, 'series': 0 },
                { 'x': 2008.0, 'y': 68.6, 'series': 0 },
                { 'x': 2009.0, 'y': 68.8, 'series': 0 }], yAxis: 1
        },
        {
            key: 'Neri (2010) - Individual earnings (Metropolitan regions)', type: 'scatter', values: [
                { 'x': 2002.0, 'y': 75.9, 'series': 1 },
                { 'x': 2003.0, 'y': 74.7, 'series': 1 },
                { 'x': 2004.0, 'y': 73.4, 'series': 1 },
                { 'x': 2005.0, 'y': 71.6, 'series': 1 },
                { 'x': 2006.0, 'y': 71.3, 'series': 1 },
                { 'x': 2007.0, 'y': 70.5, 'series': 1 },
                { 'x': 2008.0, 'y': 68.6, 'series': 1 },
                { 'x': 2009.0, 'y': 68.8, 'series': 1 }], yAxis: 1
        }]
});