
const hostname = '127.0.0.1';
const express = require('express');
const port = 3001;
const app = express();
const sequelize = require('./config/connectdb');

const Role = require('./models/RoleModel');
const Users = require('./models/UserModel');
app.get('/', (req, res) => {
    res.send('hello world huy dz kkkuuu');
});

(async () => {
    try {
        await sequelize.sync({ force: true }); // Sử dụng `force: true` để xóa và tạo lại bảng, nếu cần
        console.log('Database synchronized!');
    } catch (error) {
        console.error('Error synchronizing the database:', error);
    }
})();
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
