<template>
  <div class="ts-hugepage">
    <div class="huge-container">
      <section class="ts-leftmenu-content">
         <ul>
             <li class="ts-leftmenu-top">&nbsp;</li>
             <li v-for="(v, i) in menuList" :key="i" :class="[currentMenuIndex == i && 'current']" @click="_toggleMenu(i)">
               <a href="javascript:void(0);">{{v}}</a>
             </li>
             <li class="ts-leftmenu-bottom">&nbsp;</li>
         </ul>
      </section>
      <section class="ts-right-content">
        <section-box title="用户信息" :showLoading="showBox[0]">
          <div slot="content">
            <el-row>
              <el-col :span="12" class="form-group">
                <div class="form-label">姓名:</div>
                <div class="form-control">
                  <el-input placeholder="请输入内容" size="small"></el-input>
                </div>
              </el-col>
              <el-col :span="12" class="form-group">
                <div class="form-label">姓名:</div>
                <div class="form-control">
                  <el-input placeholder="请输入内容" size="small"></el-input>
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12" class="form-group">
                <div class="form-label">姓名:</div>
                <div class="form-control">
                  <el-input placeholder="请输入内容" size="small"></el-input>
                </div>
              </el-col>
              <el-col :span="12" class="form-group">
                <div class="form-label">姓名:</div>
                <div class="form-control">
                  <el-input placeholder="请输入内容" size="small"></el-input>
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12" class="form-group">
                <div class="form-label">姓名:</div>
                <div class="form-control">
                  <el-select v-model="selectValue" placeholder="请选择" size="small">
                    <el-option
                      v-for="item in selectItems"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div>
              </el-col>
              <el-col :span="12" class="form-group">
                <div class="form-label">姓名:</div>
                <div class="form-control">
                  <el-input placeholder="请输入内容" size="small"></el-input>
                </div>
              </el-col>
            </el-row>
          </div>
          <div slot="btn">
            <el-button size="small" type="primary" @click="_saveBox(1)">保存</el-button>
          </div>
        </section-box>
        <section-box title="所属机构" :showLoading="showBox[1]">
          <div slot="content">
            <el-row>
              <el-col :span="12" class="form-group">
                <div class="form-label">姓名:</div>
                <div class="form-control">
                  <el-input placeholder="请输入内容" size="small"></el-input>
                </div>
              </el-col>
              <el-col :span="12" class="form-group">
                <div class="form-label">姓名:</div>
                <div class="form-control">
                  <el-input placeholder="请输入内容" size="small"></el-input>
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12" class="form-group">
                <div class="form-label">姓名:</div>
                <div class="form-control">
                  <el-input placeholder="请输入内容" size="small"></el-input>
                </div>
              </el-col>
              <el-col :span="12" class="form-group">
                <div class="form-label">姓名:</div>
                <div class="form-control">
                  <el-input placeholder="请输入内容" size="small"></el-input>
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12" class="form-group">
                <div class="form-label">姓名:</div>
                <div class="form-control">
                  <el-select v-model="selectValue" placeholder="请选择" size="small">
                    <el-option
                      v-for="item in selectItems"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div>
              </el-col>
              <el-col :span="12" class="form-group">
                <div class="form-label">姓名:</div>
                <div class="form-control">
                  <el-input placeholder="请输入内容" size="small"></el-input>
                </div>
              </el-col>
            </el-row>
          </div>
          <div slot="btn">
            <el-button size="small" type="primary" @click="_cancelBox(1)">返回</el-button>
            <el-button size="small" type="primary" @click="_saveBox(2)">保存</el-button>
          </div>
        </section-box>
        <section-box title="所属部门" :showLoading="showBox[2]">
          <div slot="content">
            <el-row>
              <el-col :span="12" class="form-group">
                <div class="form-label">姓名:</div>
                <div class="form-control">
                  <el-input placeholder="请输入内容" size="small"></el-input>
                </div>
              </el-col>
              <el-col :span="12" class="form-group">
                <div class="form-label">姓名:</div>
                <div class="form-control">
                  <el-input placeholder="请输入内容" size="small"></el-input>
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12" class="form-group">
                <div class="form-label">姓名:</div>
                <div class="form-control">
                  <el-input placeholder="请输入内容" size="small"></el-input>
                </div>
              </el-col>
              <el-col :span="12" class="form-group">
                <div class="form-label">姓名:</div>
                <div class="form-control">
                  <el-input placeholder="请输入内容" size="small"></el-input>
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12" class="form-group">
                <div class="form-label">姓名:</div>
                <div class="form-control">
                  <el-select v-model="selectValue" placeholder="请选择" size="small">
                    <el-option
                      v-for="item in selectItems"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div>
              </el-col>
              <el-col :span="12" class="form-group">
                <div class="form-label">姓名:</div>
                <div class="form-control">
                  <el-input placeholder="请输入内容" size="small"></el-input>
                </div>
              </el-col>
            </el-row>
          </div>
          <div slot="btn">
            <el-button size="small" type="primary" @click="_cancelBox(2)">返回</el-button>
            <el-button size="small" type="primary" @click="_saveBox(3)">保存</el-button>
          </div>
        </section-box>
        <section-box title="角色" :showLoading="showBox[3]">
          <div slot="content">
            <el-row>
              <el-col :span="12" class="form-group">
                <div class="form-label">姓名:</div>
                <div class="form-control">
                  <el-input placeholder="请输入内容" size="small"></el-input>
                </div>
              </el-col>
              <el-col :span="12" class="form-group">
                <div class="form-label">姓名:</div>
                <div class="form-control">
                  <el-input placeholder="请输入内容" size="small"></el-input>
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12" class="form-group">
                <div class="form-label">姓名:</div>
                <div class="form-control">
                  <el-input placeholder="请输入内容" size="small"></el-input>
                </div>
              </el-col>
              <el-col :span="12" class="form-group">
                <div class="form-label">姓名:</div>
                <div class="form-control">
                  <el-input placeholder="请输入内容" size="small"></el-input>
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12" class="form-group">
                <div class="form-label">姓名:</div>
                <div class="form-control">
                  <el-select v-model="selectValue" placeholder="请选择" size="small">
                    <el-option
                      v-for="item in selectItems"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div>
              </el-col>
              <el-col :span="12" class="form-group">
                <div class="form-label">姓名:</div>
                <div class="form-control">
                  <el-input placeholder="请输入内容" size="small"></el-input>
                </div>
              </el-col>
            </el-row>
          </div>
          <div slot="btn">
            <el-button size="small" type="primary" @click="_cancelBox(3)">返回</el-button>
            <el-button size="small" type="primary" @click="_saveBox(4)">保存</el-button>
          </div>
        </section-box>
        <section-box title="相关文档" :showLoading="showBox[4]">
          <div slot="content">
            <el-row>
              <el-col :span="12" class="form-group">
                <div class="form-label">姓名:</div>
                <div class="form-control">
                  <el-input placeholder="请输入内容" size="small"></el-input>
                </div>
              </el-col>
              <el-col :span="12" class="form-group">
                <div class="form-label">姓名:</div>
                <div class="form-control">
                  <el-input placeholder="请输入内容" size="small"></el-input>
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12" class="form-group">
                <div class="form-label">姓名:</div>
                <div class="form-control">
                  <el-input placeholder="请输入内容" size="small"></el-input>
                </div>
              </el-col>
              <el-col :span="12" class="form-group">
                <div class="form-label">姓名:</div>
                <div class="form-control">
                  <el-input placeholder="请输入内容" size="small"></el-input>
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12" class="form-group">
                <div class="form-label">姓名:</div>
                <div class="form-control">
                  <el-select v-model="selectValue" placeholder="请选择" size="small">
                    <el-option
                      v-for="item in selectItems"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div>
              </el-col>
              <el-col :span="12" class="form-group">
                <div class="form-label">姓名:</div>
                <div class="form-control">
                  <el-input placeholder="请输入内容" size="small"></el-input>
                </div>
              </el-col>
            </el-row>
          </div>
          <div slot="btn">
            <el-button size="small" type="primary" @click="_cancelBox(4)">返回</el-button>
            <el-button size="small" type="primary" @click="_saveBox(5)">保存</el-button>
          </div>
        </section-box>
      </section>
    </div>
  </div>
</template>

<script>
  import { scrollTo } from '@/lib/util';
  import { SectionBox } from '@/components';
  export default {
    components: { SectionBox },
    data() {
      return {
        menuList: [],
        currentMenuIndex: 0,
        selectItems: [],
        selectValue: '',
        showBox: [false, true, true, true, true],
        onToggle: false
      }
    },
    created() {
      this.onInit();
    },
    mounted() {
      const self = this;
      self.$nextTick(() => {
        window.addEventListener('scroll', self.scrollBox) // 滚动事件监听
      })
    },
    methods: {
      onInit() {
        this.menuList = ['新增修改用户', '所属机构', '所属部门', '角色', '相关文档'];
        this.selectItems = [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }];
      },
      _toggleMenu(i) {
        let self = this;
        let total = this.$el.querySelectorAll('.section-box')[i].offsetTop;
        self.onToggle = true;
        scrollTo(total, function(){
          self.onToggle = false;
          self.currentMenuIndex = i;
        });
      },
      scrollBox() {
        if (this.onToggle) return;
        const distance = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
        const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
        const dom = this.$el.querySelectorAll('.section-box');
        for (var i = 0; i < dom.length; i++) {
          let domTop = dom[i].offsetTop;
          let domHeight = i > 0 ? (dom[i-1].offsetHeight) : 0;
          if (distance >= domTop - domHeight/2 - 70) {
            this.currentMenuIndex = i;
          }
          if (distance + clientHeight >= scrollHeight) {
            this.currentMenuIndex = i;
          }
        }
      },
      _cancelBox(i) {
        let { showBox } = this;
        if (i < showBox.length) {
          showBox[i] = true;
          this.showBox = showBox;
          this._toggleMenu(i - 1);
        }
      },
      _saveBox(i) {
        let { showBox } = this;
        if (i < showBox.length) {
          showBox[i] = false;
          this.showBox = showBox;
          this._toggleMenu(i);
        }
      }
    }
  }
</script>

<style lang="less" src="@/assets/style/hugepage.less"></style>
