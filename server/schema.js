const jsonSchema = {
    $jsonSchema: {
        bsonType: "object",
        required: ["name", "position", "level"],
        additionalProperties: false,
        properties: {
            _id: {},
            name: {
                bsonType: "string",
                description: "'name' is required and is a string",
            },
            position: {
                bsonType: "string",
                description: "'position' is required and is a string",
                minLength: 5
            },
            level: {
                bsonType: "string",
                description: "level' 1s required and 1s one of 'juntor', 'mid', 'senior'",
                enum: ("junior", "mid", "senior"),
            },
        },
    },
}