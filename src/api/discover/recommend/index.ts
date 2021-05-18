/*
 * @Author: 唐云 
 * @Date: 2021-05-17 14:38:35 
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-05-18 15:25:11
 * 发现音乐-推荐
 */
import request from '@/services/request'
// import { AxiosPromise } from 'axios'

/**
 * 获取banner列表
 */
export function getTopBanners(): Promise<any> {
  return request({
    url: '/banner',
    method: 'post'
  })
}