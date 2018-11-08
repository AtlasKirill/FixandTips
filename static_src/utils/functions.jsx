function formDataSet(requests = {}) {

    var tmp = [];
    var result = new Map();
    
    for (let i in requests) {
    
        var date = new Date(requests[i].created_at);
        var resultDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        tmp.push([resultDate, requests[i].category]);
    
    }
    console.log("hello");
    console.log(tmp);
    tmp.sort();

    for (let i in tmp) {
        if (!result.has(tmp[i][0])) {
            result.set(tmp[i][0], {Электрик: 0, Плотник: 0, Сантехник: 0, Другое: 0});
            tmp[i][1] == 'Электрик' ? result[tmp[i][0]] = [1, 0, 0, 0] :
            tmp[i][1] == 'Плотник' ? result[tmp[i][0]] = [0, 1, 0, 0] :
            tmp[i][1] == 'Сантехник' ? result[tmp[i][0]] = [0, 0, 1, 0] :
            result[tmp[i][0]] = [0, 0, 0, 1];
        } else {
            tmp[i][1] == 'Электрик' ? result[tmp[i][0]][0]++ :
            tmp[i][1] == 'Плотник' ? result[tmp[i][0]][1]++ :
            tmp[i][1] == 'Сантехник' ? result[tmp[i][0]][2]++ :
            result[tmp[i][0]][3]++;
        }   
    }
    
    var el = 0, pl = 0, plum = 0, other = 0;
    for (var [key, value] of result) {
        if (value[0] == 0)
            el++;
        if (value[1] == 0)
            pl++;
        if (value[2] == 0)
            plum++;
        if (value[3] == 0)
            other++;
    }
    
    var size = result.size;
    for (var [key, value] of result) {
        if (el == size)
            value.splice(pos, 0);
        if (pl == size)
            value.splice(pos, 1);
        if (plum == size)
            value.splice(pos, 2);
        if (other == size)
            value.splice(pos, 3);
    }
    
    var finalResult = [];
    
    for (var [key, value] of result) {
        finalResult.push({date: key,value});
    }
    return finalResult;
}
    


export default {
    formDataSet,
};