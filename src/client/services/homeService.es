import Promise from 'bluebird';

export default {
    setTime: () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 1000)
        });
    }
};