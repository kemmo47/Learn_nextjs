import OneSignal from 'onesignal-sdk'
import { useEffect } from 'react'

export const OneSignalInit = () => {
	useEffect(() => {
		// Thay thế YOUR_ONESIGNAL_APP_ID bằng App ID bạn nhận được từ OneSignal
		const appId = '0fd064f7-05f1-48ec-bf84-ce92c46ac572'

		OneSignal.init({
			appId,
		})
	}, [])

	return null // Component này không render bất cứ gì, chỉ khởi tạo OneSignal
}
