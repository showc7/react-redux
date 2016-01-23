export default {
    home: (store) => {
        return { home: store.home };
    },

    homeLabel: (store) => {
        return store.home.get('label');
    },

    homeCounter: (store) => {
        return store.home.get('counter');
    }
};