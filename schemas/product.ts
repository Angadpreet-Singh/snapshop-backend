export default {
    name: 'product',
    type: 'document',
    title: 'All Shop Product',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'photo',
            type: 'image',
            title: 'Photo'
        },
        {
            name: 'price',
            type: 'string',
            title: 'Price',
        }
    ]
}