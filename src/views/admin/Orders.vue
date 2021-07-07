<template>
  <div class="container">
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">建立日期</th>
          <th>客戶名</th>
          <th>購買款項</th>
          <th width="120">金額</th>
          <th width="100">是否付款</th>
          <th width="200">付款日期</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in orders" :key="item.id">
          <td>{{ new Date(item.create_at * 1000 ).toLocaleDateString() }}</td>
          <td>{{ item.user.name }}</td>
          <td>
            <ul class="list-unstyled">
              <li v-for="(product, key) in item.products" :key="key">
                <strong class="text-primary">{{ product.product.title }}</strong>
                / {{ product.qty }} {{ product.product.unit }} /
                <em class="text-info">$ {{ product.total }}</em>
              </li>
            </ul>
          </td>
          <td class="text-end">
            NT$ {{ item.total }}
          </td>
          <td>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox"
              id="is_paid" :checked="item.is_paid" @change="updatePaid(item)">
              <label class="form-check-label" for="is_paid">
              </label>
            </div>
            <span v-if="item.is_paid" class="text-success">已付款</span>
            <span v-else>未付款</span>
          </td>
          <td class="text-end">
            {{ item.price }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <Pagination :pages="pagination" @get-page="getOrders"></Pagination>
</template>

<script>
import Pagination from '@/components/Pagination.vue';

export default {
  data() {
    return {
      orders: [],
      pagination: {},
    };
  },
  components: {
    Pagination,
  },
  methods: {
    getOrders(page = 1) {
      const api = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`;
      this.$http.get(api).then((res) => {
        console.log(res);
        this.orders = res.data.orders;
        this.pagination = res.data.pagination;
      });
    },
    updatePaid(item) {
      const api = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/order/${item.id}`;
      const paid = {
        is_paid: !item.is_paid,
      };
      this.$http.put(api, { data: paid }).then((res) => {
        if (res.data.success) {
          this.getOrders();
        } else {
          console.log(res.data);
        }
      });
    },
  },
  created() {
    this.getOrders();
  },
};
</script>
