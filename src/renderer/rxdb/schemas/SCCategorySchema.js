const SCCategorySchema = {
    'title': 'SC Category schema',
    'description': 'describes a single SC category',
    'version': 0,
    'type': 'object',
    'properties': {
        'key': {
            'type': 'string',
            'primary': true // just string of id
        },
        'id': {
            'type': 'number'
        },
        'name': {
            'type': 'string'
        },
        'description': {
            'type': 'string'
        },
        'repos': {
            'type': 'array',
            'uniqueItems': true,
            'item': 'number'
        },
        'createdAt': {
            'type': 'string'
        },
        'createdTime': {
            'type': 'number'
        },
        'updatedAt': {
            'type': 'string'
        },
        'updatedTime': {
            'type': 'number'
        }
    },
    'required': ['id', 'name']
}

export default SCCategorySchema
