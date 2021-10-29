<template>
  <div class="gpo">
    {{ wardInfoLists }}
  </div>
</template>

<script>
import { getWardInfo } from '@/api'
export default ({
  data() {
    return {
      form: { admissionTime: '', operateBeginTime: '', searchName: '', wardNo: '', wardName: '', pageSize: 10, pageNum: 1 },
      pageList: [],
      wardInfoLists: [],
      total: 0,
      num: 0,
      exportXlseLoading: false
    }
  },
  mounted() {
    this.getWardInfoLists()
  },
  methods: {
    async getWardInfoLists() {
      const [res, err] = await getWardInfo({})
      if (err) return false
      const { wards } = res || {}
      if (wards && wards.length) {
        this.wardInfoLists = wards.map(item => {
          // return { label: item.wardName, value: item.wardNo }
          return { label: item.wardName, value: item.wardName }
        })
      }
    }
  }

})

</script>

<style lang="scss" scoped>
.gpo {
  @include width-height-100;
}
</style>
