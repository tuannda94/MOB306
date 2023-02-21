export const API_URL = 'http://172.20.10.3:3000';
export const API_USER = API_URL + '/users';
// export const API_BOOK = API_URL + '/books';
export const API_BOOK = `${API_URL}/books`;
// export const API_PROD = API_URL + '/products';

/*
json-server và chuẩn REST API
- API quản lý 1 nghiệp vụ sẽ gồm các chức năng cơ bản:
    + Lấy ds
        * method: GET
        * endpoint: http://.../products
    + Lấy chi tiết bản ghi
        * method: GET
        * endpoint: http://.../products/2
    + Tạo mới
        * method: POST
        * endpoint: http://.../products
        * body: JSON.stringify(obj dữ liệu)
        * headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    + Chỉnh sửa
        * method: PUT
        * endpoint: http://.../products/2
        * body: JSON.stringify(obj dữ liệu)
        * headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    + Xoá
        * method: DELETE
        * endpoint: http://.../products/2
*/
