/**
 * local | dev | test | pre | production
 * 本地 | dev | 测试 | 预发 | 生产
 */

export const $appMetaEnv = import.meta.env || {} // 全部全局变量
export const $appEnv = $appMetaEnv.VITE_APP_BASE_ENV // 当前环境
export const $isLocal = $appMetaEnv.DEV // 是否在本地
export const $apiHosts = $appMetaEnv.VITE_APP_BASE_GATEWAY // 服务端接口主域
export const $apiHostsPath = $appMetaEnv.VITE_APP_BASE_API // 服务端接口

export default {
  $appEnv,
  $appMetaEnv,
  $isLocal,
  $apiHosts,
  $apiHostsPath
}
