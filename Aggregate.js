db.weather.insertMany([
    {
        "metadata": { "sensorId": 5578, "type": "temperature" },
        "timestamp": ISODate("2021-05-18T00:00:00.000Z"),
        "temp": 12
    },
    {
        "metadata": { "sensorId": 5578, "type": "temperature" },
        "timestamp": ISODate("2021-05-18T04:00:00.000Z"),
        "temp": 11
    },
    {
        "metadata": { "sensorId": 5578, "type": "temperature" },
        "timestamp": ISODate("2021-05-18T08:00:00.000Z"),
        "temp": 11
    },
    {
        "metadata": { "sensorId": 5578, "type": "temperature" },
        "timestamp": ISODate("2021-05-18T12:00:00.000Z"),
        "temp": 12
    },
    {
        "metadata": { "sensorId": 5578, "type": "temperature" },
        "timestamp": ISODate("2021-05-18T16:00:00.000Z"),
        "temp": 16
    },
    {
        "metadata": { "sensorId": 5578, "type": "temperature" },
        "timestamp": ISODate("2021-05-18T20:00:00.000Z"),
        "temp": 15
    }, {
        "metadata": { "sensorId": 5578, "type": "temperature" },
        "timestamp": ISODate("2021-05-19T00:00:00.000Z"),
        "temp": 13
    },
    {
        "metadata": { "sensorId": 5578, "type": "temperature" },
        "timestamp": ISODate("2021-05-19T04:00:00.000Z"),
        "temp": 12
    },
    {
        "metadata": { "sensorId": 5578, "type": "temperature" },
        "timestamp": ISODate("2021-05-19T08:00:00.000Z"),
        "temp": 11
    },
    {
        "metadata": { "sensorId": 5578, "type": "temperature" },
        "timestamp": ISODate("2021-05-19T12:00:00.000Z"),
        "temp": 12
    },
    {
        "metadata": { "sensorId": 5578, "type": "temperature" },
        "timestamp": ISODate("2021-05-19T16:00:00.000Z"),
        "temp": 17
    },
    {
        "metadata": { "sensorId": 5578, "type": "temperature" },
        "timestamp": ISODate("2021-05-19T20:00:00.000Z"),
        "temp": 12
    }
])

//Aggregation
db.weather.aggregate([
    {
        "$group": {
            "_id": "sensorId",
            "tempSum": { "$sum": "$temp" },

        }
    }
])
//output
//{ _id: 'sensorId', tempSum: 154 }



db.weather.aggregate([
    {
        "$group": {
            "_id": {
                "$dateToString": { "format": "%Y-%m-%d", "date": "$timestamp" }
            },
            "tempAverage": { "$avg": "$temp" },

        }
    }
])
//output
// { _id: '2021-05-18', tempAverage: 12.833333333333334}
// { _id: '2021-05-19', tempAverage: 12.833333333333334}


db.weather.aggregate([
    {
        "$group": {
            "_id": "sensorId",
            "tempAverage": { "$avg": "$temp" },

        }
    }
])

//output
//{ _id: 'sensorId', tempAverage: 12.833333333333334 }