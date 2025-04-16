const {statusBarHeight} = uni.getSystemInfoSync();

// 获取状态栏高度（电量、时间等）
export const getStatusBarHeight = () => statusBarHeight || 15;

// 获取标题栏高度（和胶囊按钮在同一行）
export const getTitleBarHeight = () => {
	if (uni.getMenuButtonBoundingClientRect) {
		const {
			top,
			height
		} = uni.getMenuButtonBoundingClientRect();
		return height + (top - getStatusBarHeight()) * 2
	} else {
		return 40;
	}
}

// 获取导航栏高度
export const getNavBarHeight = () => getStatusBarHeight() + getTitleBarHeight();