export default {
    name: 'order',
    type: 'document',
    title: 'Customer Orders',
    fields: [
        {
            name: 'orderStatus',
            type: 'boolean',
            title: 'OrderStatus'
        },
        {
            name: 'totalPrice',
            type: 'number',
            title: 'TotalPrice'
        },
        {
            name: 'order',
            type: 'array',
            title: 'Order',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'photoURL', type: 'string', title: 'photoURL' },
                        { name: 'count', type: 'string', title: 'Count' },
                        { name: 'price', type: 'string', title: 'Price' },
                        { name: 'productId', type: 'string', title: 'ProductId' },
                        { name: 'productName', type: 'string', title: 'ProductName' },
                    ]
                },
            ],
        }
    ]
}