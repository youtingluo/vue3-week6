<template>
  <div class="container">
    <div class="text-end mt-3">
      <button type="button" class="btn btn-primary" @click="openModal(true)">建立新產品</button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">分類</th>
          <th>產品名稱</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="100">是否啟用</th>
          <th width="200">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td class="text-end">
            {{ item.origin_price }}
          </td>
          <td class="text-end">
            {{ item.price }}
          </td>
          <td>
            <span v-if="item.is_enabled" class="text-success">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button type="button" class="btn btn-outline-primary btn-sm"
              @click="openModal(false,item)">編輯</button>
              <button type="button" class="btn btn-outline-danger btn-sm"
              @click="openDelModal(item)">刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- ProductModal -->
    <ProductModal :isNew="isNew" :product="tempProduct" ref="productModal"
    @update-product="updateProduct"></ProductModal>
    <DelModal :del-item="tempProduct" ref="delModal" @delete-item="deleteProduct"></DelModal>
    <Pagination :pages="pagination" @get-page="getProducts"></Pagination>
  </div>
</template>

<script>
// 匯入 Modal 等子元件
import ProductModal from '@/components/ProductModal.vue'; // 自定義所以需要副檔名
import DelModal from '@/components/DelModal.vue';
import Pagination from '@/components/Pagination.vue';

export default {
  name: 'Products',
  data() {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      isNew: false,
    };
  },
  // 區域註冊元件
  components: {
    ProductModal,
    DelModal,
    Pagination,
  },
  methods: {
    // 開啟產品 Modal
    openModal(isNew, item) {
      if (isNew) {
        this.tempProduct = {};
        this.isNew = true;
      } else {
        this.tempProduct = { ...item };
        this.isNew = false;
      }
      const productComponent = this.$refs.productModal;
      productComponent.openModal();
    },
    // 開啟刪除 Modal
    openDelModal(item) {
      this.tempProduct = { ...item };
      const delComponent = this.$refs.delModal;
      delComponent.openModal();
    },
    // 取得產品
    getProducts(page = 1) {
      // API
      const api = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`;
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.products = res.data.products;
          this.pagination = res.data.pagination;
        } else {
          console.log(res.data.message);
        }
      });
    },
    updateProduct(item) {
      this.tempProduct = item;
      let api = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/product`;
      let method = 'post';
      if (!this.isNew) {
        method = 'put';
        api = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`;
      }
      this.$http[method](api, { data: this.tempProduct }).then((res) => {
        if (res.data.success) {
          console.log('新增成功');
          this.$refs.productModal.hideModal();
          this.getProducts();
        } else {
          console.log('新增失敗');
          this.$refs.productModal.hideModal();
        }
      });
    },
    deleteProduct() {
      const api = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`;
      this.$http.delete(api).then((res) => {
        console.log(res);
        if (res.data.success) {
          console.log('刪除成功');
          this.$refs.delModal.hideModal();
          this.getProducts();
        } else {
          console.log('刪除失敗');
          this.$refs.delModal.hideModal();
        }
      });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
