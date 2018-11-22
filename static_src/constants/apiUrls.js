function filter(status1='',status2='',status3='', category1='',category2='',category3='',category4='',category5='',urgency='',fromDate='',toDate='')
{
    if( category1 != '')
    {
        category1 = '&category=Плотник';
    }
    if( category2 != '')
    {
        category2 = '&category=Сантехник';
    }
    if( category3 != '')
    {
        category3 = '&category=Электрик';
    }
    if( category4 != '')
    {
        category4 = '&category=Хим обработка';
    }
    if( category5 != '')
    {
        category5 = '&category=Другое';
    }
    if( status1 != '')
    {
        status1 = '&status=Отправлена';
    }
    if( status2 != '')
    {
        status2 = '&status=В процессе';
    }
    if( status3 != '')
    {
        status3 = '&status=Выполнена';
    }

    var url = '/api/requests/?urgency='+urgency+category1+category2+category3+category4+category5+status1+status2+status3+'&from_date='+fromDate+'T00:00:00.000000Z&to_date='+toDate+'T23:59:59.000000Z'
    
    return url
}

function requestDetail(pk='')
{
    var url = '/api/requests/'+pk+'/'
    return url
}

function newsDetail(pk='')
{
    var url = '/api/news/'+pk+'/'
    return url
}

function userDetail(pk='')
{
    var url = '/api/users/'+pk+'/'
    return url
}

function myRequests(author_id='')
{
    var url = '/api/requests/?author='+author_id
    return url
}

function myNews(author_id='')
{
    var url = '/api/news/?author='+author_id
    return url
}

export default {
    requests: '/api/requests/',
    news: '/api/news/',
    session: '/api/session/',
    filter,
    requestDetail,
    newsDetail,
    userDetail,
    myRequests,
    myNews,
};