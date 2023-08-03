export const mixinGlobal = {
	methods: {
		removeDiacritics(input) {
			return input
				.normalize("NFD") // Phân tách các ký tự diacritics thành các ký tự riêng lẻ
				.replace(/[\u0300-\u036f]/g, "") // Loại bỏ các ký tự diacritics
				.toLowerCase() // Chuyển thành chữ thường
				.replace(/[^a-zA-Z0-9 ]/g, "") // Loại bỏ các ký tự không phải chữ cái hoặc số
		},
	},
};