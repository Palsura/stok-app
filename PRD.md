# PRD: Tekil Urun Sorgulama

## Amac
Kullanicinin belirli bir urunun stok durumunu ID uzerinden sorgulayabilmesi.

## Endpoint
- Metot: GET
- Yol: /products/:id

## Kabul Kriterleri (Acceptance Criteria)
1. Basarili Sorgulama (Gecerli ID):
   - HTTP 200 OK
   - Yanit: {"id": 1, "name": "Kalem", "stock": 100}

2. Kayit Bulunamadi (Gecersiz/Olmayan ID, orn: 999):
   - HTTP 404 Not Found
   - Yanit: {"error": "Product not found"}

3. Format Hatasi (Sayi olmayan ID, orn: abc):
   - HTTP 400 Bad Request
   - Yanit: {"error": "Invalid product ID"}
