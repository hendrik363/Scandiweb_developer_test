import { setProduct } from "./products.actions";
import { handleFetchProduct } from "./products.helpers";

export function* fetchProduct({ payload }) {
    try {
        const product = yield handleFetchProduct(payload);
        yield put(
            setProduct(product)
        )

    } catch (error) {
        // console.log(error);
    }
}

export function* onFetchProductStart() {
    yield takeLatest(productTypes.FETCH_PRODUCT_START, fetchProduct)
}

export default function* productSagas() {
    yield all([
        call(onFetchProductStart),
    ])
}