<template>
	<view class="container">
		<CustomHeaderMainVue />
		<view class="header">
			<ProfileVue />	
			<SearchVue />
		</view>
		<view class="profile-details-container">
			<view class="profile-header-container">
				<view class="title-container">
					<ProfileDetailsTitle title="Profile Picture" /> 
					<image class="edit-btn" src="../../static/edit-02.png" mode=""></image>
				</view>
				<view class="profile-profile-container">
					<view class="profile-details-image">
						<image class="profile-image" src="../../static/UntitledDesign.png" mode="aspectFill" />
						<view class="profile-change-container">
							<image class="profile-change-image" src="../../static/camera-01.png" mode="aspectFill"/>
						</view>
					</view>
					<text class="profile-name">{{ userName }}</text>
				</view>
			</view>
			<view class="profile-header-container">
				<view class="title-container">
					<ProfileDetailsTitle title="Basic Info" />
					<image class="edit-btn" src="../../static/edit-02.png" mode=""></image>
				</view>
				<view class="profile-basic-container">
					<text>Full Name</text>
					<text class="details-result">{{ userName }}</text>
				</view>
				<view class="profile-basic-container">
					<text>Mobile Number</text>
					<text class="details-result">{{ phoneNumber }}</text>
				</view>
				<view class="profile-basic-container">
					<text>Email Address</text>
					<text class="details-result">{{ email }}</text>
				</view>
				<view class="profile-basic-container">
					<text>Gender</text>
					<text class="details-result">Male</text>
				</view>
				<view class="profile-basic-container">
					<text>Birthday</text>
					<text class="details-result">{{ birthday }}</text>
				</view>
				<view class="profile-basic-container">
					<text>Civil Status</text>
					<text class="details-result">Single</text>
				</view>
			</view>
			<view class="profile-header-container">
				<view class="title-container">
					<ProfileDetailsTitle title="Address" />
					<image class="edit-btn" src="../../static/edit-02.png" mode=""></image>
				</view>
				<view class="profile-basic-container">
					<text>Address Line 1</text>
					<text class="details-result">#123 Dimahanap St.</text>
				</view>
				<view class="profile-basic-container">
					<text>Address Line 2</text>
					<text class="details-result">La Maquita Village</text>
				</view>
				<view class="profile-basic-container">
					<text>City</text>
					<text class="details-result">{{ province }}</text>
				</view>
				<view class="profile-basic-container">
					<text>Country</text>
					<text class="details-result">Philippines</text>
				</view>
			</view>
			<view class="profile-header-container">
				<view class="title-container">
					<ProfileDetailsTitle title="Work" />
					<image class="edit-btn" src="../../static/edit-02.png" mode=""></image>
				</view>
				<view class="profile-basic-container">
					<text>Employment/Business</text>
					<text class="details-result">Graphic Designer</text>
				</view>
			</view>
			<view class="profile-header-container">
				<view class="title-container">
					<ProfileDetailsTitle title="Hobbies" />
					<image class="edit-btn" src="../../static/edit-02.png" mode=""></image>
				</view>
				<view>
					<text class="profile-basic-container">Hiking</text>
					<text class="profile-basic-container">Travelling</text>
					<text class="profile-basic-container">Swimming</text>
					<text class="profile-basic-container">Working out</text>
				</view>
			</view>
		</view>
		<view class="navtab">
			<BottomNavigationTabVue />
		</view>
	</view>
</template>

<script>
	import CustomHeaderMainVue from '../components/CustomHeaderMain.vue';
	import ProfileVue from "../components/Profile.vue";
	import SearchVue from '../components/Search.vue';
	import ProfileDetailsTitle from "../components/profile/ProfileDetailsTitle.vue";
	import BottomNavigationTabVue from '../components/BottomNavigationTab.vue';
	
	export default {
		components: {
			CustomHeaderMainVue,
			ProfileVue,
			SearchVue,
			ProfileDetailsTitle,
			BottomNavigationTabVue
		},
		data() {
			return {
				userName: '',
				phoneNumber: '',
				email: '',
				birthday: '',
				province: '',
			}
		},
		mounted() {
		   this.userName = uni.getStorageSync("userName");
		   this.phoneNumber = uni.getStorageSync("phoneNumber");
		   this.email = uni.getStorageSync("email");
		   this.birthday = uni.getStorageSync("birthday");
		   this.province = uni.getStorageSync("province");
		}
	}
</script>

<style scoped>
	.container {
		position: relative;
		min-height: 100vh;
		background-color: #F8F8F8;	
		padding: 0 20px 89px 20px;
	}
	.header {
		padding: 95px 0 20px 0;
		display: flex;
		flex-direction: column;
		gap: 8px;
		width: 100%;
	}
	.profile-details-container {
		display: flex;
		flex-direction: column;
		gap: 20px;
		padding: 20px 0;
	}
	.profile-header-container {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
	.profile-details-image {
		position: relative;
		height: 100px;
		width: 100px;
	}
	.profile-change-container {
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #A0A5AF;
		height: 22px;
		width: 22px;
		padding: 4px;
		border-radius: 20px;
		bottom: 0;
		right: 0;
	}
	.profile-change-image {
		width: 100%;
		height: 100%;
	}
	.profile-details-image .profile-image {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	.profile-profile-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8px;
	}
	.profile-name {
		font-size: 16px;
		font-weight: 500;
	}
	.profile-basic-container {
		display: flex;
		flex-direction: column;
		gap: 4px;
		padding: 8px 0;
		border-bottom: 1px solid lightgray;
	}
	.details-result {
		font-size: 16px;
		color: gray;
	}
	.title-container {
		display: flex;
		gap: 8px;
		align-items: center;
	}
	.edit-btn {
		width: 16px;
		height: 16px;
	}
</style>