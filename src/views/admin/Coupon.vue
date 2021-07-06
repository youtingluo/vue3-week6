<template>
  <div>
    <div class="text-end mt-4">
      <button class="btn btn-primary" type="button" @click="openModal(true)">
        建立新的優惠券
      </button>
    </div>
    <table class="table mt-4">
      <thead>
      <tr>
        <th>名稱</th>
        <th>折扣百分比</th>
        <th>到期日</th>
        <th>是否啟用</th>
        <th>編輯</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in coupons" :key="item.id">
        <td>{{ item.title }}</td>
        <td>{{ item.percent }}%</td>
        <td>{{ item.due_date }}</td>
        <td>
          <span v-if="item.is_enabled" class="text-success">啟用</span>
          <span v-else>未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm"
            @click="openModal(false, item)">編輯</button>
            <button class="btn btn-outline-danger btn-sm"
            @click="openDelModal(item)">刪除</button>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
    <CouponModal :isNew="isNew" :coupon="tempCoupon" ref="couponModal"
    @update-coupon="updateCoupon"></CouponModal>
    <DelModal :del-item="tempCoupon" ref="delModal" @delete-item="deleteCoupon"></DelModal>
  </div>
</template>

<script>
import CouponModal from '@/components/CouponModal.vue';
import DelModal from '@/components/DelModal.vue';

export default {
  data() {
    return {
      coupons: [],
      isNew: false,
      tempCoupon: {
        is_enabled: 0,
      },
    };
  },
  components: {
    CouponModal,
    DelModal,
  },
  methods: {
    openModal(isNew, item) {
      if (isNew) {
        this.tempCoupon = {
          due_date: new Date().getTime() / 1000,
        };
        this.isNew = true;
      } else {
        this.tempCoupon = { ...item };
        this.isNew = false;
      }
      this.$refs.couponModal.openModal();
    },
    openDelModal(item) {
      this.tempCoupon = { ...item };
      this.$refs.delModal.openModal();
    },
    updateCoupon(item) {
      this.tempCoupon = item;
      let api = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/coupon`;
      let method = 'post';
      if (!this.isNew) {
        method = 'put';
        api = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/Coupon/${this.tempCoupon.id}`;
      }
      this.$http[method](api, { data: this.tempCoupon }).then((res) => {
        if (res.data.success) {
          console.log('新增成功');
          this.$refs.couponModal.hideModal();
          this.getCoupons();
        } else {
          console.log('新增失敗');
          this.$refs.couponModal.hideModal();
        }
      });
    },
    deleteCoupon() {
      const api = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`;
      this.$http.delete(api).then((res) => {
        console.log(res);
        if (res.data.success) {
          console.log('刪除成功');
          this.$refs.delModal.hideModal();
          this.getCoupons();
        } else {
          console.log('刪除失敗');
          this.$refs.delModal.hideModal();
        }
      });
    },
    getCoupons(page = 1) {
      const api = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/coupons?page=${page}`;
      this.$http.get(api).then((res) => {
        console.log(res);
        this.coupons = res.data.coupons;
      });
    },
  },
  created() {
    this.getCoupons();
  },
};
</script>
