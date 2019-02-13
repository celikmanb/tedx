import Vue from 'vue'

import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
Vue.use(BootstrapVue);


import {
    Form,
    Table,
    Card,
    Modal,

} from 'bootstrap-vue/es/components';

Vue.use(Form);
Vue.use(Table);
Vue.use(Card);
Vue.use(Modal);

import bContainer from 'bootstrap-vue/es/components/layout/container';
import bRow from 'bootstrap-vue/es/components/layout/row';
import bCol from 'bootstrap-vue/es/components/layout/col';
import bFormRow from 'bootstrap-vue/es/components/layout/form-row';
import bCard from 'bootstrap-vue/es/components/card/card';
import bTable from 'bootstrap-vue/es/components/table/table';
import vBModal from 'bootstrap-vue/es/directives/modal/modal';
import bPagination from 'bootstrap-vue/es/components/pagination/pagination';
import bButton from 'bootstrap-vue/es/components/button/button';
import bForm from 'bootstrap-vue/es/components/form/form';

Vue.component('b-form', bForm);
Vue.component('b-button', bButton);
Vue.component('b-pagination', bPagination);
Vue.directive('b-modal', vBModal);
Vue.component('b-table', bTable);
Vue.component('b-card', bCard);
Vue.component('b-row', bRow);
Vue.component('b-col', bCol);
Vue.component('b-container', bContainer);
Vue.component('b-form-row', bFormRow);

