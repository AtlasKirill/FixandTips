function formDataSet(requests={}, urgency, from ,to, category, status)

    var el, plum, carp;
    for(i in requestList)
    {
        if(requests[i].category == category & requests[i].urgency == category )
        {
            el++;
        }
        else if(requests[i].category='Сантехник')
        {
            plum++;
        }
        else if(requests[i].category='Плотник')
        {
            carp++;
        }
    }
}


export default {
    formDataSet,
};