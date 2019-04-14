export default {
    state: {
        ads: [
            {id: '1', title: 'First ad', desc: 'First ad desc', imgSrc: 'https://loremflickr.com/320/240', promo: true},
            {
                id: '2',
                title: 'Second ad',
                desc: 'Second ad desc',
                imgSrc: 'https://loremflickr.com/320/240',
                promo: false
            },
            {id: '3', title: 'Third ad', desc: 'Third ad desc', imgSrc: 'https://loremflickr.com/320/240', promo: true},
        ]
    },
    getters: {
        getAds(state) {
            return state.ads;
        },
        getAdById(state) {
            return id => state.ads.find(p => p.id === id);
        }
    },
    mutations: {
        createAd(state, payload) {
            state.ads.push(payload);
        }
    },
    actions: {
        createAd({commit}, payload) {

        }
    }
}
