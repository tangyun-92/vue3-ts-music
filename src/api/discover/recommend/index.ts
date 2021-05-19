/*
 * @Author: 唐云 
 * @Date: 2021-05-19 10:43:01 
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-05-19 10:45:30
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
 * @param limit 
 */
export function getHotRecommend(limit: number): Promise<any> {
  return request({
    url: '/personalized',
    params: {
      limit
    }
  })
}