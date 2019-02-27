<template>
  <view class="work-experience-wrap">
    <view class="list">
      <view class="title">意向岗位</view>
      <view class="value">
        <input class="uni-input" focus placeholder="输入意向岗位">
        <view class="uni-icon uni-icon-compose"></view>
      </view>
    </view>
    <view class="list">
      <view class="title">期望薪酬</view>
      <view class="value">
        <input class="uni-input" focus placeholder="输入期望薪酬">
        <view class="uni-icon uni-icon-compose"></view>
      </view>
    </view>
    <view class="list">
      <view class="title">期望地点</view>
      <mpvue-city-picker
        ref="mpvueCityPicker"
        :themeColor="themeColor"
        :pickerValueDefault="cityPickerValueDefault"
        @onConfirm="onConfirm"
      ></mpvue-city-picker>
      <view class="value mp-picker" @click="showMulLinkageThreePicker">
        {{pickerText || '选择期望地点'}}
        <view class="uni-icon uni-icon-arrowright"></view>
      </view>
    </view>
    <view class="list">
      <view class="title">到岗时间</view>
      <picker mode="date" class="value" :value="endDate" @change="bindEndDateChange">
        <view class="uni-pick">
          {{endDate}}
          <view class="uni-icon uni-icon-arrowright"></view>
        </view>
      </picker>
    </view>
    <view class="bottom-btns">
      <!-- <view class="uni-icon uni-icon-closeempty">删除此项</view> -->
      <view class="uni-icon uni-icon-checkmarkempty">保存</view>
    </view>
  </view>
</template>
<script>
import mpvueCityPicker from "../../../components/mpvue-citypicker.vue";

export default {
  data() {
    const currentDate = this.getDate({
      format: true
    });
    return {
      cityPickerValueDefault: [0, 0, 1],
      //   array: ["中国", "美国", "巴西", "日本"],
      //   index: [],
      themeColor: "#3299dc",
      pickerText: "",
      startDate: currentDate,
      endDate: currentDate
    };
  },
  components: {
    mpvueCityPicker
  },
  methods: {
    showMulLinkageThreePicker() {
      this.$refs.mpvueCityPicker.show();
    },
    onConfirm(e) {
      // console.log(e)
      this.pickerText = e.label;
    },
    bindDateChange(e) {
      this.startDate = e.target.value;
    },
    bindEndDateChange(e) {
      this.endDate = e.target.value;
    },
    getDate(type) {
      const date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();

      if (type === "start") {
        year = year - 60;
      } else if (type === "end") {
        year = year + 2;
      }
      month = month > 9 ? month : "0" + month;
      day = day > 9 ? day : "0" + day;
      return `${year}-${month}-${day}`;
    }
  }
};
</script>
<style>
.work-experience-wrap .list {
  display: flex;
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
}
.work-experience-wrap .list .title {
  width: 20%;
  line-height: 100upx;
  color: #333;
  text-align: left;
  font-size: 28upx;
  padding-left: 20upx;
}

.work-experience-wrap .list .value {
  width: 80%;
  line-height: 100upx;
  padding: 0;
  height: 100upx;
  color: #999;
  font-size: 28upx;
  position: relative;
}
.work-experience-wrap .list .mp-picker {
  padding-right: 20upx;
  text-align: right;
}
.work-experience-wrap .list .uni-pick,
.work-experience-wrap .list .uni-input {
  line-height: 100upx;
  padding: 0;
  height: 100upx;
  font-size: 28upx;
  text-align: right;
  color: #999;
  padding-right: 20upx;
}
.work-experience-wrap .list .uni-input {
  padding-right: 75upx;
}
.work-experience-wrap .list .uni-icon {
  font-size: 28upx;
  margin-left: 30upx;
  color: #3299dc;
}
.work-experience-wrap .list .uni-icon-compose {
  position: absolute;
  line-height: 100upx;
  top: 0;
  font-size: 34upx;
  right: 25upx;
  z-index: 2;
}

.work-experience-wrap .bottom-btns {
  text-align: center;
  background: #fff;
  display: flex;
}
.work-experience-wrap .bottom-btns view {
  flex: 1;
  line-height: 100upx;
  font-size: 34upx;
}
.work-experience-wrap .uni-icon-closeempty {
  border-right: 1upx solid #f0f0f0;
  background: #f56c6c;
  color: #fff;
}
.work-experience-wrap .uni-icon-checkmarkempty {
  /* border-right: 1upx solid #f0f0f0; */
  background: #409eff;
  color: #fff;
}
</style>
