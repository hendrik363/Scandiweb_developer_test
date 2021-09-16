import { firestore } from "./../../firebase/utils";

export const handleFetchProduct = ProductId => {
    return new Promise((resolve, reject) => {
        firestore
            .collection('product')
            .doc(ProductId)
            .get()
            .then(snapshot => {
                if(snapshot.exists) {
                    resolve(
                        snapshot.data()
                    );
                }
            })
            .catch(err => {
                reject(err);
            })
    })
}