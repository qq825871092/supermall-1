import {request} from './request'
export function getCategory() {
  return request(
    {
      url: '/category',

    }
  ).catch(err => err)
}

// 右侧图文等数据
export function getSubcategory (maitKey) {
  return request({
    url: '/subcategory',
    params: {
      maitKey
    }
  }).catch(err => err)
}
// 右侧下方三个分类数据
export function getSubCategoryDetail(miniWallkey,type) {
  return request({
    url: '/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  }).catch(err => err)
}

