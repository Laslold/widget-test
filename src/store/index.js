import { reactive } from "vue";

const state = reactive({
  isFavorite: false,
  loading: false,
  businessKey: null,
});

const methods = {
  toggleGlobalLoading() {
    state.loading = !state.loading;
  },
};

export default {
  state,
  methods,
};
