Bu proje yalnızca Node.js v24 üzerinde çalışır.
`package.json` içine KESİNLİKLE yeni harici bağımlılık eklenemez.
Bağımlılık kurulumlarında sadece `npm ci` kullanılır.
Yazılan her yeni özellik için `tests/` altında otomatik test bulunmalıdır.
Kod yazıldıktan sonra `npm test` çalıştırılmalı, 0 hata (fail) alınmadan görev tamamlanmış sayılmamalıdır.
Kod içine hardcoded IP, port veya parola yazılamaz.
Tüm ortam ayarları `process.env` üzerinden okunmalıdır.
`.env` içeriği loglara veya HTTP yanıtlarına basılamaz.
