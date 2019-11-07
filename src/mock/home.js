import Mock from 'mockjs'

// const weekList=[];
// const count = 100
//
// for (let i = 0; i < count; i++) {
//     List.push(Mock.mock({
//         id: '@increment',
//         timestamp: +Mock.Random.date('T'),
//         author: '@first',
//         reviewer: '@first',
//         title: '@title(5, 10)',
//         content_short: 'mock data',
//         content: baseContent,
//         forecast: '@float(0, 100, 2, 2)',
//         importance: '@integer(1, 3)',
//         'type|1': ['CN', 'US', 'JP', 'EU'],
//         'status|1': ['published', 'draft', 'deleted'],
//         display_time: '@datetime',
//         comment_disabled: true,
//         pageviews: '@integer(300, 5000)',
//         image_uri,
//         platforms: ['a-platform']
//     }))
// }


// var data = {
//     "msg": "获取信息成功",
//     "status": 1,
//     "week|7": [
//         {
//             // "d": "2019-07-26",
//             'time|+1': Mock.Random.date('yyyy-MM-dd'),
//             "week": Mock.Random.cname(),
//             "type": 1
//         }
//
//     ],
//     "data": [{
//         "pid": "2468",
//         "course_id": "622",
//         "course_name": "动感单车",
//         "coach_id": "6781",
//         "order_number": "2",
//         "up_limit": "10",
//         "price": "0.00",
//         "price_member": "0.00",
//         "st_time": "1562821200",
//         "end_time": "1562827200",
//         "del": "0",
//         "city_id": "17",
//         "suspend": "1",
//         "userids": "0",
//         "week": "4",
//         "ts": "0",
//         "ts_time": "0",
//         "seat_num": "20",
//         "seat_list": "4",
//         "courseimage": "@image('100x40', '#FFFFFF', '@word')"
//         }
//     ],
//     "image": [
//         "@image('100x40', '#FFFFFF', '@word')"
//     ]
// };

//
export default [{
    path: '/home',
    data: function(){

        var res1 = [];
        for(var i = 0; i < 7; i++){
            res1.push(Mock.mock({
                "d|+1": Mock.Random.date('yyyy-MM-dd'),
                'time|+1': Mock.Random.date('MM-dd'),
                "week": Mock.Random.cname(),
                "type": 1,
            }))
        }

        var res2=[];
        res2.push(Mock.mock({
                "pid": "2468",
                "course_id": "622",
                "course_name": "动感单车",
                "coach_id": "6781",
                "order_number": "2",
                "up_limit": "10",
                "price": "0.00",
                "price_member": "0.00",
                "st_time": "1562821200",
                "end_time": "1562827200",
                "del": "0",
                "city_id": "17",
                "suspend": "1",
                "userids": "0",
                "week": "4",
                "ts": "0",
                "ts_time": "0",
                "seat_num": "20",
                "seat_list": "4",
                "courseimage": "https://spt.zmtek.net/statics/Wx/images/shouye/zanwu.jpg"
        }))
        var res3=[];
            res3.push(res1,res2);
        return res3
    }
}];

// Mock.mock('/home1', function(options) {
//
//     return   Mock.mock({
//             "user|1-3": [{
//                 'name': Mock.Random.cname(),
//                 'id|+1': 88
//             }],
//             "data|1-7": [{
//                 "d":  Mock.Random.date('yyyy-MM-dd'),
//                 'time|+1': Mock.Random.date('MM-dd'),
//                 "week": Mock.Random.cname(),
//                 "type": 1
//             }],
//         })
//
// });

Mock.Random.extend({
    year: function(date) {
        return  Mock.Random.date('yyyy-MM-dd');
    },
    day: function(date) {
        return  Mock.Random.date('MM-dd');
    },
    boo:function(date) {
        return Mock.Random.boolean( 1, 6, 1 );
    },
})

Mock.mock('/home1', "get",{
    // "code": 0,

    'dateArr|7': [{
        "d|+1": '@year',
        "week|+1": '@day',
        "type": '@boo',
        "id|+1":0,
    }],
    // "msg": "success"
})

