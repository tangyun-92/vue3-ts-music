/*
 * @Author: 唐云 
 * @Date: 2021-05-19 10:43:01 
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-05-20 09:33:08
 * 发现音乐-热门推荐
 */

import request from '@/services/request'

/**
 * 获取banner列表
 */
export function getTopBanners(): Promise<any> {
  return request({
    url: '/banner',
    method: 'post'
  })
}

/**
 * 获取热门推荐列表
 * @param limit 分页
 */
export function getHotRecommend(limit: number): Promise<any> {
  return request({
    url: '/personalized',
    params: {
      limit
    }
  })
}

/**
 * 获取新碟上架列表
 * @param limit 分页
 */
export function getNewAlbums(limit: number): Promise<any> {
  return request({
    url: '/top/album',
    params: {
      limit
    }
  })
}

/**
 * 获取榜单列表
 * @param idx 榜单id
 */
export function getTopList(id: number): Promise<any> {
  return request({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}
// 19723756
// 3779629
// 2884035