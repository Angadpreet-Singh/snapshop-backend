export default {
    name: 'shop',
    type: 'document',
    title: 'Customer Shop',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'product',
            type: 'array',
            title: 'Product',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'product' }]
                },
            ],
        }
    ]
}