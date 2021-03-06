const SCTagSchema = {
    'title': 'SC Tag schema',
    'description': 'describes a single SC tag',
    'version': 0,
    'type': 'object',
    'properties': {
        'key': {
            'type': 'string',
            'primary': true // juse string of id
        },
        'id': {
            'type': 'number'
            // 'primary': true
        },
        'name': {
            'type': 'string'
        },
        'description': {
            'type': 'string'
        },
        'reposCount': {
            'type': 'number'
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
    'required': ['id']
}

export default SCTagSchema
