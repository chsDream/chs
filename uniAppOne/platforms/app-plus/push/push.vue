<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap" v-if="provider[0]">
			<view class="uni-btn-v uni-common-mt">
				<button type="primary" @tap="openPush">开启push</button>
				<button type="primary" @tap="closePush">关闭push</button>
				<button type="primary" @tap="listenTranMsg">监听透传数据</button>
				<button type="primary" @tap="removeTranMsg">移除监听透传数据</button>
			</view>
			<view class="uni-btn-v uni-common-mt">
				<button type="primary" @tap="requireTranMsg">发送"透传数据"消息</button>
			</view>
			<view class="uni-title uni-common-mt">透传内容：</view>
			<view class="uni-textarea">
				<textarea v-model="tranMsg" />
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'push',
				provider: [],
				
				pushServer: 'http://demo.dcloud.net.cn/push/?',
				tranMsg:''
			}
		},
		onLoad: function () {
			uni.getProvider({
				service: "push",
				success: (e) => {
					console.log(JSON.stringify(e));
					console.log("success", e);
					this.provider = e.provider;
				},
				fail: (e) => {
					console.log("获取推送通道失败", e);
				}
			});
		},
		onUnload:function(){
			this.tranMsg = ''
		},
		methods: {
			openPush() {
				uni.subscribePush({
					provider: this.provider[0],
					success: (e) => {
						
						console.log(JSON.stringify(e));
						
						uni.showToast({
							title: "已开启push接收"
						})
					}
				})
			},
			closePush() {
				uni.unsubscribePush({
					provider: this.provider[0],
					success: (e) => {
						
						uni.showToast({
							title: "已关闭push接收"
						})
					}
				})
			},
			listenTranMsg() {
				uni.onPush({
					provider: this.provider[0],
					success: (e) => {
						uni.showToast({
							title: "开始监听透传数据"
						})
					},
					callback: (e) => {
						uni.showToast({
							title: "接收到透传数据"
						});
						
						this.tranMsg = JSON.stringify(e.data);
						console.log(JSON.stringify(e.data));
					}
				})
			},
			removeTranMsg() {
				uni.offPush({
					provider: this.provider[0],
					success: (e) => {
						console.log("移除监听透传数据");
						uni.showToast({
							title: "移除监听透传数据"
						})
					}
				})
			},
			requireTranMsg() { 
				//请求‘透传数据’推送消息
				var inf = plus.push.getClientInfo();
				
				
				console.log(inf.id);
				
				var url = this.pushServer + 'type=tran&appid=' + plus.runtime.appid; //encodeURIComponent(plus.runtime.appid)
				
				console.log(url);
				
				inf.id && (url += '&id=' + inf.id);
				
				url += ('&cid=' + inf.clientid ); //encodeURIComponent()
				
				
// 				if (plus.os.name == 'iOS') {
// 					url += ('&token=' + encodeURIComponent(inf.token));
// 				}
				url += ('&title=' + 'Hello uniapp'); //encodeURIComponent('Hello uniapp')
				url += ('&content=' + 'dadafdfadsfdf！' );// encodeURIComponent('带透传数据推送通知！')
				
// 				if(plus.os.name === 'iOS'){
// 					url += ('&payload=' + encodeURIComponent('{"title":"Hello uniapp Test","content":"test content"}'));
// 				}else{
// 					url += ('&payload=' + encodeURIComponent('\'{"title":"Hello uniapp Test","content":"test content"}\''));
// 				}

				url += ('&version=' + plus.runtime.version ); //encodeURIComponent()
				
				console.log(url)
				
				plus.runtime.openURL(url);
				
				
			}
		}
	}
	
	
//  http://demo.dcloud.net.cn/push/?
// 	type=tran&
// 	appid=HBuilder&
// 	id=igexin&
// 	cid=9995079291af01eea30dd3dc50f1d6f8&
// 	title=Hello uniapp&content = dadafdfadsfdf！&
// 	version=9.1.40 at platforms/app-plus/push/push.vue:121

// {"id":"igexin",
// "token":"9995079291af01eea30dd3dc50f1d6f8",
// "clientid":"9995079291af01eea30dd3dc50f1d6f8",
// "appid":"pPyZWvH3Fa6PXba10aJ009",
// "appkey":"b7dOGlNPHR7pqwUxDhpTi4",
// "errMsg":"subscribePush:ok"}

</script>

<style>

</style>

