export const API_URL = 'http://10.0.2.2:3000';
export const API_USER = API_URL + '/users';
// export const API_PROD = API_URL + '/products';
/*
json-server và chuẩn REST API
    - Lấy danh sách
        + method: GET
        + endpoint: /users
    - Lấy chi tiết bản ghi
        + method: GET
        + endpoint: /users/1
    - Tạo mới
        + method: POST
        + endpoint: /users
        + headers: Content-Type, Accept
        + body: JSON.stringify(obj)
    - Chỉnh sửa
        + method: PUT
        + endpoint: /users/1
        + headers: Content-Type, Accept
        + body: JSON.stringify(obj)
    - Xoá
        + method: DELETE
        + endpoint: /users/1
*/
