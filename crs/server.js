// server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors()); // Активируем CORS

// Прямо храните токен в коде (НЕКОРРЕКТНАЯ практика!)
const GIGACHAT_TOKEN = 'ВАШ_ТОКЕН_ZDES'; // Не используйте так на продакшене!

// Роут для переадресации запросов к GigaChat
app.post('/proxy-to-giga', async (req, res) => {
    try {
        // Отправляем запрос на GigaChat
        const response = await axios.post(
            'https://giga.chat/api/completions',
            req.body,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${MDE5YjI2YTctM2I1MC03OTMwLWJmYWQtZWY4N2Y2ZmM5MWE2OjE0NjNlM2Q0LTA4YzktNGFjOS04MDlmLWZlYzdhNDE3OWY4Zg==}` // Токен прямо указан в коде
                }
            }
        );

        // Отсылаем ответ обратно клиенту
        res.json(response.data);
    } catch (err) {
        console.error('Ошибка:', err.response?.data || err.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Запускаем сервер на порту 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Прокси-сервер запущен на http://localhost:${PORT}`);
});