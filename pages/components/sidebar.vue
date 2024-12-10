<template>
  <view class="app-container" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">
    <!-- Side Navbar -->
    <view class="side-navbar" :class="{ open: isNavbarOpen }">
      <view class="navbar-content">
        <text class="nav-item" v-for="(item, index) in menuItems" :key="index">{{ item }}</text>
      </view>
    </view>

    <!-- Main Content -->
    <view class="main-content">
      <text>Main content here</text>
    </view>
  </view>
</template>

<script>
	export default {
	  data() {
	    return {
	      isNavbarOpen: false,
	      touchStartX: 0,
	      touchEndX: 0,
	      menuItems: ['Home', 'Profile', 'Settings', 'Logout'], // Example menu items
	    };
	  },
	  methods: {
	    handleTouchStart(event) {
	      this.touchStartX = event.touches[0].pageX; // Get the starting X position
	    },
	    handleTouchMove(event) {
	      this.touchEndX = event.touches[0].pageX; // Track the current X position
	    },
	    handleTouchEnd() {
	      const swipeDistance = this.touchEndX - this.touchStartX;
	      if (swipeDistance > 50) {
	        // Swipe right detected
	        this.openNavbar();
	      } else if (swipeDistance < -50) {
	        // Swipe left detected
	        this.closeNavbar();
	      }
	    },
	    openNavbar() {
	      this.isNavbarOpen = true;
	    },
	    closeNavbar() {
	      this.isNavbarOpen = false;
	    },
	  },
	};
</script>

<style scoped>
.app-container {
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
}

.side-navbar {
  position: absolute;
  top: 0;
  left: -250px; /* Hidden by default */
  width: 250px;
  height: 100%;
  background-color: #000080;
  color: white;
  transition: all 0.3s ease-in-out;
  z-index: 1000;
}

.side-navbar.open {
  left: 0; /* Slide into view */
}

.navbar-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.nav-item {
  font-size: 18px;
  cursor: pointer;
}

.main-content {
  flex: 1;
  padding: 20px;
  background-color: #f5f5f5;
  z-index: 1;
}
</style>