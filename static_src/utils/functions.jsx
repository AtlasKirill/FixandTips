function formDataSet(requests = {}) {
    var tmp = [];
    var result = new Map();

    for (let i in requests) {

        var date = new Date(requests[i].created_at);
        tmp.push([[date.getFullYear(), date.getMonth(), date.getDate()].join('.'), requests[i].category]);

    }

    tmp.sort();

    for (let i in tmp) {
        if (!result.has(tmp[i][0])) {
            result.set(tmp[i][0], {Электрик: 0, Плотник: 0, Сантехник: 0, Другое: 0});
            tmp[i][1] === 'Электрик' ? result.set(tmp[i][0], {Электрик: 1, Плотник: 0, Сантехник: 0, Другое: 0}) :
                tmp[i][1] === 'Плотник' ? result.set(tmp[i][0], {Электрик: 0, Плотник: 1, Сантехник: 0, Другое: 0}) :
                    tmp[i][1] === 'Сантехник' ? result.set(tmp[i][0], {
                            Электрик: 0,
                            Плотник: 0,
                            Сантехник: 1,
                            Другое: 0
                        }) :
                        result.set(tmp[i][0], {Электрик: 0, Плотник: 0, Сантехник: 0, Другое: 1});
            console.log("hello");
            console.log(result);
        } else {
            if (tmp[i][1] === 'Электрик') {
                result.forEach((value, key, map) => {
                    if (key === tmp[i][0]) value.Электрик++;
                });
            }
            if (tmp[i][1] === 'Плотник') {
                result.forEach((value, key, map) => {
                    if (key === tmp[i][0]) value.Плотник++;
                });
            }
            if (tmp[i][1] === 'Сантехник') {
                result.forEach((value, key, map) => {
                    if (key === tmp[i][0]) value.Сантехник++;
                });
            }
            if (tmp[i][1] === 'Другое') {
                result.forEach((value, key, map) => {
                    if (key === tmp[i][0]) value.Другое++;
                });
            }
        }
    }

    var el = 0, pl = 0, plum = 0, other = 0;
    for (var [key, value] of result) {
        if (value.Электрик === 0)
            el++;
        if (value.Плотник === 0)
            pl++;
        if (value.Сантехник === 0)
            plum++;
        if (value.Другое === 0)
            other++;
    }
    var size = result.size;

    result.forEach((value, key, map) => {
        if (el === size)
            delete value.Электрик;
        if (pl === size)
            delete value.Плотник;
        if (plum === size)
            delete value.Сантехник;
        if (other === size)
            delete value.Другое;
    });

    var finalResult = [];

    for (var [key, value] of result) {
        var tmp = {};
        tmp['date'] = key;
        if (value.Электрик != undefined)
            tmp['Электрик'] = value.Электрик;

        if (value.Плотник != undefined)
            tmp['Плотник'] = value.Плотник;

        if (value.Сантехник != undefined)
            tmp['Сантехник'] = value.Сантехник;

        if (value.Другое != undefined)
            tmp['Другое'] = value.Другое;
        finalResult.push(tmp);
    }

    return finalResult;
}


export default {
    formDataSet,
};