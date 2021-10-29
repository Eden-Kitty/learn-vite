
import { $apiHostsPath, postAsync, getAsync } from '@/utils/'
const api = {
  // 以下是新疆GPO
  getWardInfo: `${$apiHostsPath}/v2/xjgpo/getWardInfo`,
  getInsidePatientNum: `${$apiHostsPath}/v2/xjgpo/getInsidePatientNum`,
  viewPatientInfo: `${$apiHostsPath}/v2/xjgpo/viewPatientInfo`,
  downloadPatientInfo: `${$apiHostsPath}/v2/xjgpo/downloadPatientInfo`
}
// 病区列表
export const getWardInfo = (params) => getAsync(api.getWardInfo, params)
// 在院人数
export const getInsidePatientNum = (params) => getAsync(api.getInsidePatientNum, params)
// 在院信息查询 post
export const viewPatientInfo = (data) => postAsync(api.viewPatientInfo, data)
// 在院患者信息导出
export const downloadPatientInfo = (params) => postAsync(api.downloadPatientInfo, params)
