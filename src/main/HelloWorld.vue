<template>
  <div class="">
    <span class="aa">{{$t('hello')}}</span>
    <div @click="_toggle('en')">切换英文</div>
    <div @click="_toggle('cn')">切换中文</div>
    <div class="form-group">
      手机号: <input type="text" name="mobile" v-validate="'required|mobile'" :class="{'input': true, 'is-danger': errors.has('mobile')}" value="" />
      邮箱: <input type="text" name="email" v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email')}" value="" />
      <span v-if="errors.has('mobile')" class="help is-danger">{{ errors.first('mobile') }}</span>
      <span v-if="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
    </div>
    <button type="button" @click="submit">提交</button>
    <div class="" @click="_toggleValidate('cn')">切换中文校验</div>
    <div class="" @click="_toggleValidate('en')">切换英文校验</div>
    <router-link :to="{ path: '/news' }">
      跳转到新闻页面
    </router-link>
    <div>{{ num }}</div>
    <div class="">Element-ui</div>
    <div class="">
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div class="">echarts</div>
    <div class="">
      <div id="main" style="height:400px"></div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    },
    mounted() {
      let myChart = this.$echarts.init(document.getElementById('main'));
      const option = {
          tooltip: {
              show: true
          },
          legend: {
              data:['销量']
          },
          xAxis : [
              {
                  type : 'category',
                  data : ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
              }
          ],
          yAxis : [
              {
                  type : 'value'
              }
          ],
          series : [
              {
                  "name":"销量",
                  "type":"bar",
                  "data":[5, 20, 40, 10, 10, 20]
              }
          ]
      };

      // 为echarts对象加载数据
      myChart.setOption(option);
    },
    computed: {
      ...mapGetters({
        num: 'num',
      }),
    },
    methods: {
      ...mapActions([
        'setCount'
      ]),
      _toggle(v) {
        this.$i18n.locale = v;
      },
      submit() {
        let self = this;
        this.$validator.validateAll().then((result) => {
          if (result) {
            // self.$api.get('www.baidu.com', {}, res => {
            //   console.log(res);
            // });
            self.$store.dispatch('setCount', { a: 2 })
            console.log('没错误');
          }
        })
      },
      // 切换校验
      _toggleValidate(v) {
        this.$validator.localize(v);
      }
    }
  }
</script>

<style lang="less" src="@/assets/style/index.less"></style>
