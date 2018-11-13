function filter(status='',category='',urgency='',fromDate='',toDate='')
{
    var url = '/api/requests/?status='+status+'&category='+category+'&urgency='+urgency+'&from_date='+fromDate+'T00:00:00.000000Z&to_date='+toDate+'T23:59:59.000000Z'
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
