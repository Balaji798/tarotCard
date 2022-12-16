import Api from "./Api";
import staticResponses from "./StaticApiService";
console.log({ ...staticResponses });

export default false
  ? { ...staticResponses }
  : {
      // Notification and Platform API
      // registerPlatformDevice: (os, version, unique_id, name, locale, country, notification_token) =>
      // 	Api.post('register-platform-and-device/', {
      // 		os,
      // 		version,
      // 		unique_id,
      // 		name,
      // 		locale,
      // 		country,
      // 		notification_token,
      // 	}),
      // product apis
      getProduct: () => Api.get("product/get_products"),
      sendLoginOTP: (phone, callingCode) =>
        Api.post(`user/otp_mobile`, { phone, callingCode }),
      customerLogin: (phone, OTP) => Api.post("user/login", { OTP, phone }),
      getUser: () => Api.get("user/get_user"),
      editUser: (
        gender,
        // firstName,
        // lastName,
        // date_of_birth,
        // emirate,
        // email,
        // nationality
        data2
      ) =>
        Api.post("user/edit", {
          gender,
          //   firstName,
          //   lastName,
          //   date_of_birth,
          //   emirate,
          //   email,
          //   nationality,
          data2,
        }),
      addToCart: (productId) => Api.post("cart/add-to-card", { productId }),
      addToWishList: (productId) =>
        Api.post("product/add-to-wishlist", { productId }),
      fetchFeedback: () => Api.post("survey/show-customer-survey/", {}),
      postFeedback: (
        satisfactionNumber,
        easeNumber,
        loadSpeedNumber,
        supportNumber,
        liked,
        feedback
      ) =>
        Api.post("feedback/post_feedback", {
          satisfactionNumber,
          easeNumber,
          loadSpeedNumber,
          supportNumber,
          liked,
          feedback,
        }),
      fetchJyotis: () => Api.get("jyotis/get-jyotis"),
      getJyotisById: (id) => Api.get(`jyotis/get-jyothis-by-id/${id}`),
      schedule_jyotis: (id, date, time) =>
        Api.post("schedule/schedule_jyotis", { id, date, time }),
    };
