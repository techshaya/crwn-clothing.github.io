import {createSelector} from 'reselect';
const selectShop =(state) =>state.shop;
export const selectShopCollections = createSelector([selectShop],(shop)=>shop.collections);

export const SelectCollection = (collectionUrlParam)=>
{
    return createSelector([selectShopCollections],(collections)=>collections[collectionUrlParam])
}

export const selectCollectionsForPreview = createSelector([selectShopCollections],(collections)=>Object.keys(collections).map(key=>collections[key]))