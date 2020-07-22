const initialState = {
       
    username: '',
    userLocation: {
        lat: '',
        lng: ''
    },
    shops: [],
    selectedShop: {},
    selectedShopLocation: {
        lat: '',
        lng: ''
    },
    distance: '',
    duration: '',
    durationSeconds: undefined,
    items: [],
    item:[],
    specialInstructions: '',
    notification: {
        add: false,
        delete: false,
        error: false,
        form: false,
        additionalInfo: false,
        userLocation: false
    },
    methodOfTrans: '',
    methodOfTransShow: true,
    pickupTime: true,
    expectedPickupTime: '',
    favorite: false,
    paymentInfo: {
        nameOnCard: '',
        cardNumber: undefined,
        expMonth: '',
        expYear: '',
        cvv: undefined
    },
    previousOrders: [],
    favoriteOrders: [],
    menuShow: false,
}

export default initialState;